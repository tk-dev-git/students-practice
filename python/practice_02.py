# 辞書データを用意
d = {"four": 652, "two": 296, "five": 1024, "three": 471, "one": 77}

sort_result = sorted(d.items(), key=lambda i: i[1])

print(f"[ソート結果]: {sort_result}")
