import {TableContainer} from "./NatureStyle.js";

const natures = [
    {en: 'Hardy', kr: '노력', increase: 'Attack', decrease: 'Attack'},
    {en: 'Lonely', kr: '외로움', increase: 'Attack', decrease: 'Defense'},
    {en: 'Brave', kr: '용감', increase: 'Attack', decrease: 'Speed'},
    {en: 'Adamant', kr: '고집', increase: 'Attack', decrease: 'Sp-Attack'},
    {en: 'Naughty', kr: '개구쟁이', increase: 'Attack', decrease: 'Sp-Defense'},
    {en: 'Bold', kr: '대담', increase: 'Defense', decrease: 'Attack'},
    {en: 'Docile', kr: '온순', increase: 'Defense', decrease: 'Defense'},
    {en: 'Relaxed', kr: '무사태평', increase: 'Defense', decrease: 'Speed'},
    {en: 'Impish', kr: '장난', increase: 'Defense', decrease: 'Sp-Attack'},
    {en: 'Lax', kr: '촐랑', increase: 'Defense', decrease: 'Sp-Defense'},
    {en: 'Timid', kr: '겁쟁이', increase: 'Speed', decrease: 'Attack'},
    {en: 'Hasty', kr: '성급', increase: 'Speed', decrease: 'Defense'},
    {en: 'Serious', kr: '성실', increase: 'Speed', decrease: 'Speed'},
    {en: 'Jolly', kr: '명랑', increase: 'Speed', decrease: 'Sp-Attack'},
    {en: 'Naive', kr: '천진난만', increase: 'Speed', decrease: 'Sp-Defense'},
    {en: 'Modest', kr: '조심', increase: 'Sp-Attack', decrease: 'Attack'},
    {en: 'Mild', kr: '의젓', increase: 'Sp-Attack', decrease: 'Defense'},
    {en: 'Quiet', kr: '냉정', increase: 'Sp-Attack', decrease: 'Speed'},
    {en: 'Bashful', kr: '수줍음', increase: 'Sp-Attack', decrease: 'Sp-Attack'},
    {en: 'Rash', kr: '덜렁', increase: 'Sp-Attack', decrease: 'Sp-Defense'},
    {en: 'Calm', kr: '차분', increase: 'Sp-Defense', decrease: 'Attack'},
    {en: 'Gentle', kr: '얌전', increase: 'Sp-Defense', decrease: 'Defense'},
    {en: 'Sassy', kr: '건방', increase: 'Sp-Defense', decrease: 'Speed'},
    {en: 'Careful', kr: '신중', increase: 'Sp-Defense', decrease: 'Sp-Attack'},
    {en: 'Quirky', kr: '변덕', increase: 'Sp-Defense', decrease: 'Sp-Defense'}
];

const statsKr = ['공격', '방어', '특수공격', '특수방어', '스피드'];
const stats = ['Attack', 'Defense', 'Sp-Attack', 'Sp-Defense', 'Speed'];


const Nature = () => {
    // increase와 decrease를 찾는 함수
    const getNatureCell = (increase, decrease) => {
        const nature = natures.find(nature => nature.increase === increase && nature.decrease === decrease);
        return <td key={nature.en}>
            <div>
                <span className={'main'}>{nature.kr}</span>
                <br/>
                <span className={'sub'}>{nature.en}</span>
            </div>
        </td>;
    };

    return (
        <TableContainer>
            <thead>
            <tr>
                <th></th>
                {stats.map((stat, index) =>
                    <th key={stat} className={`${stat} decrease`}>
                        <span className={'main'}>&darr; {statsKr[index]}</span>
                        <br/><span className={'sub'}>({stats[index]})</span>
                    </th>)}
            </tr>
            </thead>
            <tbody>
            {stats.map((increaseStat, rowIndex) => (
                <tr key={rowIndex}>
                    <th key={increaseStat} className={`${increaseStat} decrease`}>
                        <span className={'main'}>&uarr; {statsKr[rowIndex]}</span>
                        <br/><span className={`sub`}>({stats[rowIndex]})</span>
                    </th>

                    {stats.map((decreaseStat) => getNatureCell(increaseStat, decreaseStat))}
                </tr>
            ))}
            </tbody>
        </TableContainer>
    );
};

export default Nature;
