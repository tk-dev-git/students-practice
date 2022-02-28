// 辞書データを用意
const d = { "four": 652, "two": 296, "five": 1024, "three": 471, "one": 77 };

// ソート関数を定義
function compare(a, b) {
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    return 0;
}

// ソートするために配列へ変換
// （参考）keys() : https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// （参考）map() : https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// （参考）アロー関数 : https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const arr = Object.keys(d).map((k) => ({ key: k, value: d[k] }));

console.log(`[Before] >>>`);
console.log(arr);
// ソート処理
arr.sort((a, b) => compare(a.value, b.value));
console.log(`[After] >>>`);
console.log(arr);
// 辞書データへ戻す
const result = {};
arr.map(a => result[a.key] = a.value);
console.log(`===================================`);
console.log(result);