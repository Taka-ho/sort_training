function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

// ---- min 〜 max 個の乱数（整数）配列を返す
function getRandomIntArray(min, max) {
    const random_min = 0; // 発生乱数の最小値
    const random_max = 21; // 発生乱数の最大値

    let result = [];
    let count = getRandomInt(min, max);
    for (var index = 0; index < count; index++) {
        result.push(getRandomInt(0, 19));
    }
    return result;
}