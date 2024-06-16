import {TYPES} from "./types.js";

export const LANGUAGES = ['ko', 'en'];
export const NATIVES = ['한국어', 'english'];
export const TYPES_LANGUAGE = {
    'en': TYPES,
    'ko': [
        "노말",
        "불꽃",
        "물",
        "풀",
        "전기",
        "얼음",
        "격투",
        "독",
        "땅",
        "비행",
        "에스퍼",
        "벌레",
        "바위",
        "고스트",
        "드래곤",
        "악",
        "강철",
        "페어리"
    ]
}

export const NAV_LANGUAGE = {
    'en': ['TypeCalc', 'Natures', 'ValueFinder'],
    'ko': ['상성계산기', '성격표', '종족값검색']
}

export const MID_LANGUAGE = {
    'en': ['Defense', 'Offense'],
    'ko': ['타입을 팰 때', '타입한테 처맞을 때']
}
