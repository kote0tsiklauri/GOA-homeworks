
numbers = [1, 2, 3]

#! 4
doubled_numbers = list(map(lambda x: x * 2, numbers))
print("Doubled numbers:", doubled_numbers)

#! 5
divisible_by_3 = list(filter(lambda x: x % 3 == 0, numbers))
print("Divisible by 3:", divisible_by_3)

#! 6
arr = [5, 12, 18, 7, 25]
func = list(filter(lambda x: x**2 < 145, arr))
print(func)

#! 7

print("add ten:", list(map(lambda x: x * 2, arr)))

#! 8

odd = list(filter(lambda x: x % 2 != 0, arr))
print("odd numbers are:", odd)


#! 9

from functools import reduce

arr = [5, 12, 18, 7, 25]

total_sum = reduce(lambda x, y: x + y, arr)

print(total_sum)