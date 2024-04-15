
export const boxLight = (e, nav) => {
    console.log(nav.i);
    if (e === "/clinic/child" && nav.i === 0) {
        return "light_on";
    } else if (e === "/clinic/teenager" && nav.i === 1) {
        return "light_on";
    } else if (e === "/clinic/vaccination" && nav.i === 2) {
        return "light_on";
    } else if (e === "/diagnosis/allergy" && nav.i === 0) {
        return "light_on";
    } else if (e === "/diagnosis/kideys" && nav.i === 1) {
        return "light_on";
    } else if (e === "/diagnosis/digestion" && nav.i === 2) {
        return "light_on";
    } else if (e === "/diagnosis/obesity" && nav.i === 3) {
        return "light_on";
    } else if (e === "/diagnosis/sap" && nav.i === 4) {
        return "light_on";
    }
}

export const getLastURL = (e) => {
    if (e === "child") {
        return "영유아 건강검진";
    } else if (e === "teenager") {
        return "소아청소년 건강검진";
    } else if (e === "vaccination") {
        return "예방접종";
    } else if (e === "allergy") {
        return "소아 알레르기/아토피/비염";
    } else if (e === "kideys") {
        return "소아 신장(야뇨증)";
    } else if (e === "digestion") {
        return "소아 소화기";
    } else if (e === "obesity") {
        return "소아 비만/저체중";
    } else if (e === "sap") {
        return "수액치료";
    }
    if (e === "allergy") {
        return "소아 알레르기/아토피/비염";
    } else if (e === "kideys") {
        return "소아 신장(야뇨증)";
    } else if (e === "digestion") {
        return "소아 소화기";
    } else if (e === "obesity") {
        return "소아 비만/저체중";
    } else if (e === "sap") {
        return "수액 치료";
    }
}
/** 문자열을 두번째 요소값을 기준으로 각각 배열로 나눠준다. (string = 나눌 문자열,split = 구분기호) */
export const stringSplit = (string, split) => {
    var result = string.split(split);
    var resultString = '';
    for (let i = 0; i < result.length; i++) {
        if (i === 0) {
            resultString += result[i];
        } else {
            resultString += ' ' + result[i];
        }

    }
    return resultString;
}