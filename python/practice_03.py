# 配列データを用意
arr = [1, 1, 2, 5, 6, 7, 3, 2, 2, 3, 5, 8, 1, 2, 8, 9, 4, 1, 5, 4, 4, 6, 7, 9, 2, 1, 5, 6, 8]

# 集計結果を格納する辞書を作成
count = {}
for a in arr:
    if a in count:
        count[a] += 1
    else:
        count[a] = 1

print(f"[集計結果]: {count}")
