// 이차원 배열로 상성 가중치 정의
import {typeChart, TYPES} from "./types.js";

export function calculateAtkTypeEffectiveness(isSelectedTypeSet) {
    let effectiveness = new Array(TYPES.length).fill(1);

    isSelectedTypeSet.forEach((typeIndex) => {
        TYPES.forEach((_, j) => {
            effectiveness[j] *= typeChart[typeIndex][j];
        })
    })

    return displayEffectivenessResult(effectiveness);
}

export function calculateDefTypeEffectiveness(isSelectedTypeSet) {
    const effectiveness = new Array(TYPES.length).fill(1);

    isSelectedTypeSet.forEach((typeIndex) => {
        TYPES.forEach((_, j) => {
            effectiveness[j] *= typeChart[j][typeIndex];
        })
    })

    return displayEffectivenessResult(effectiveness);
}

export function displayEffectivenessResult(effectiveness) {
    const resultMap = {
        "x4": [],
        "x2": [],
        "x1": [],
        "x0.5": [],
        "x0.25": [],
        "x0": []
    };

    for (let i = 0; i < effectiveness.length; i++) {
        let value = effectiveness[i];

        if (value === 4) resultMap["x4"].push(i);
        else if (value === 2) resultMap["x2"].push(i);
        else if (value === 1) resultMap["x1"].push(i);
        else if (value === 0.5) resultMap["x0.5"].push(i);
        else if (value === 0.25) resultMap["x0.25"].push(i);
        else if (value === 0) resultMap["x0"].push(i);
    }

    return resultMap
}