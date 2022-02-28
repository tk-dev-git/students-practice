# 辞書データを用意
d = {"four": 652, "two": 296, "five": 1024, "three": 471, "one": 77}

# ラムダ（lambda）関数
# （参考）: https://docs.python.org/ja/3/reference/expressions.html?highlight=lambda#lambda
# （参考）: https://tech-market.org/python-nameless-function/
sort_result = sorted(d.items(), key=lambda i: i[1])

print("=" * 35)
print(f"[ソート結果]: {sort_result}")
