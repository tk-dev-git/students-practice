// 配列を用意
const arr = [1, 1, 2, 5, 6, 7, 3, 2, 2, 3, 5, 8, 1, 2, 8, 9, 4, 1, 5, 4, 4, 6, 7, 9, 2, 1, 5, 6, 8];

// 集計結果を格納する辞書を作成
const count = {};
for (let a of arr) {
    if (a in count) {
        count[a]++;
    } else {
        count[a] = 1;
    }
}

console.log(`===================================`);
console.log(count);