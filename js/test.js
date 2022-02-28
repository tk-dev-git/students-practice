//問題3
var arr = [1, 1, 2, 5, 6, 7, 3, 2, 2, 3, 5, 8, 1, 2, 8, 9, 4, 1, 5, 4, 4, 6, 7, 9, 2, 1, 5, 6, 8];
var count = {};
for (var i = 0; i < arr.length; i++) {
    var elm = arr[i];
    count[elm] = (count[elm] || 0) + 1;
}
console.log(count);
//計算結果を表示
console.log(`[total]:${total}`);