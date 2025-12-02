arr = [1,2,3,4,5,24,6,7,8,9,12]

divisible_by_12 = list(filter(lambda x: x % 12 == 0, arr))
print(divisible_by_12)