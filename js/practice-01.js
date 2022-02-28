// 配列を用意
const list1 = Array.from(Array(37).keys()).slice(1);
const list2 = Array.from(Array(26).keys()).slice(1);

const result = [];
for (let e1 of list1) {
    for (let e2 of list2) {
        // 10 で割った時の「余り」（剰余）を比較
        if (e1 % 10 == e2 % 10) {
            console.log(`[match] (${e1}, ${e2})`);
            result.push([e1, e2]);
        }
    }
}

console.log(`===================================`);
console.log(`[一の位が一致する組]: ${result.length}`);