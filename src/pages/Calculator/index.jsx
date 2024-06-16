import TypeCard from "../../components/TypeCard/index.jsx";
import {typeColors, TYPES} from "../../data/types.js";
import {useEffect, useRef, useState} from "react";
import {calculateAtkTypeEffectiveness, calculateDefTypeEffectiveness} from "../../data/calculate.js";
import {CalculatorContainer, MidContainer, ResultContainer, TypeSelectContainer} from "./CalculatorStyle.js";
import {IoTrash} from "react-icons/io5";
import {useLanguage} from "../../contexts/LanguageContextProvider.jsx";
import {MID_LANGUAGE, TYPES_LANGUAGE} from "../../data/languages.js";

const Calculator = () => {
    const {language} = useLanguage();
    const [selectedTypes, setSelectedTypes] = useState(() => {
        const storedValue = localStorage.getItem('mySet');
        if (storedValue !== null) {
            return new Set(JSON.parse(storedValue));
        }
        return new Set();
    });  // 타입 선택
    const [selectedMode, setSelectedMode] = useState('DEF');   // 공격할껀지 선택
    const [resultData, setResultData] = useState();   // 결과 데이터
    const resultScrollRef = useRef(null);      // 스크롤 초기화를 위한 ref

    // 타입 카드를 눌렀을 때 이벤트
    function onClickTypeCard(index) {
        setSelectedTypes(prev => {
            const newSet = new Set(prev);
            newSet.has(index) ? newSet.delete(index) : newSet.add(index);
            return newSet;
        });
    }

    // 공격 모드에 따라 계산 후 출력
    useEffect(function displayCalculateResult() {
        if (selectedMode === "DEF") {
            setResultData(calculateDefTypeEffectiveness(selectedTypes))
        } else if (selectedMode === "ATK") {
            setResultData(calculateAtkTypeEffectiveness(selectedTypes))
        }
        if (resultScrollRef.current) {
            resultScrollRef.current.scrollTop = 0; // 수직 스크롤 위치를 0으로 설정
        }
    }, [selectedTypes, selectedMode]);

    // selectedTypes가 바뀔경우 로컬 스토리지 저장
    useEffect(function saveSelectedInLocalStorage() {
        const array = Array.from(selectedTypes); // Set을 배열로 변환
        localStorage.setItem('mySet', JSON.stringify(array)); // 배열을 JSON 문자열로 저장
    }, [selectedTypes]);

    return (
        <>
            {language &&
                <CalculatorContainer>
                    <TypeSelectContainer>
                        {TYPES.map((type, idx) =>
                            <TypeCard
                                className={selectedTypes.has(idx) ? 'checked' : ''}
                                onClick={() => onClickTypeCard(idx)}
                                index={idx}
                                text={TYPES_LANGUAGE[language][idx]}
                                style={selectedTypes.has(idx) ? {
                                    backgroundColor: typeColors[idx],
                                    boxShadow: `0 0 8px ${typeColors[idx]}70`
                                } : {}}
                                key={TYPES_LANGUAGE[language][idx]}/>)}
                    </TypeSelectContainer>

                    <MidContainer>
                        <div id="selectedType">
                            {selectedTypes.size >= 0 && [...selectedTypes].map((typeIdx, idx) => (
                                    <TypeCard
                                        className={selectedTypes.has(typeIdx) ? 'checked' : ''}
                                        onClick={() => onClickTypeCard(typeIdx)}
                                        index={typeIdx}
                                        text={`${TYPES_LANGUAGE[language][typeIdx]}`}
                                        key={typeIdx}/>
                                )
                            )}
                        </div>
                        &nbsp;
                        <button onClick={() => setSelectedMode("DEF")}
                                className={selectedMode === "DEF" ? 'active' : ''}>{MID_LANGUAGE[language][0]}
                        </button>
                        &nbsp;
                        <button onClick={() => setSelectedMode("ATK")}
                                className={selectedMode === "ATK" ? 'active' : ''}>{MID_LANGUAGE[language][1]}
                        </button>
                        &nbsp;
                        <IoTrash className={'trashButton'} onClick={() => setSelectedTypes(new Set())}/>
                    </MidContainer>

                    <ResultContainer ref={resultScrollRef}>
                        <ul id={'resultKey'}>
                            {['x4', 'x2', 'x1', 'x0.5', 'x0.25', 'x0'].map((key, keyIdx) =>
                                <li key={key} className={`key-${keyIdx}`}>
                                    <h3>{key}</h3>
                                </li>)}
                        </ul>
                        {/*{resultData && Object.keys(resultData)}*/}
                        <ul id={'resultValue'}>
                            {['x4', 'x2', 'x1', 'x0.5', 'x0.25', 'x0'].map((key, keyIdx) =>
                                <li key={key} className={`key-${keyIdx}`}>
                                    {selectedTypes.size > 0 && resultData && resultData[key].map((index) =>
                                        <TypeCard
                                            key={index}
                                            index={index}
                                            text={`${TYPES_LANGUAGE[language][index]}`}/>
                                    )}
                                </li>)}
                        </ul>
                    </ResultContainer>

                </CalculatorContainer>}
        </>)
}

export default Calculator