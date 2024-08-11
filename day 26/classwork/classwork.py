def check(numbers):
    even = []
    for i in numbers:
        if (i % 2) == 0:
            even.append(i)
    return even

result = check(list(range(10)))
print(result)





