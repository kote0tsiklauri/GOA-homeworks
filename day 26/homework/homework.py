def check(numbers):
    new_list = []
    for i in numbers:
        if (i % 2) == 0:
            i = i/2
            new_list.append(i)
        if (i % 2) != 0:
            i = i * 2
            new_list.append(i)
    return new_list

result = check(list(range(10)))
print(result)