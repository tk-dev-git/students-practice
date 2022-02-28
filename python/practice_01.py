# 配列データを用意
list1 = list(range(1, 37))
list2 = list(range(1, 26))

result = []
for e1 in list1:
    for e2 in list2:
        # 10 で割った時の「余り」（剰余）を比較
        if e1 % 10 == e2 % 10:
            print(f"[match] ({e1}, {e2})")
            result.append((e1, e2))

print(f"[一の位が一致する組]: {len(result)}")
