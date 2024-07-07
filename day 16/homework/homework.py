# დავალება 1
numbers = [12,23,13,14,42,45,54,77,6]

max_number = numbers[0]
for number in numbers:
    if max_number < number:
        max_number = number

print(max_number)

#დავალება 2

min_number = numbers[0]
for min_number in numbers:
    if min_number > number:
        min_number = number
print(min_number)

#დავალება 3

days = [1,2,3,4,5,6,7,8,9,10]
print(days.index(1))
print(days.index(2))
print(days.index(3))
print(days.index(5))

#დავალება 5
mix = [1,"toy",2,"bed","days",5,6]
strings = []
integers = []
for i in mix:
    check = type(i)
    if check == int:
        integers.append(i)
    elif check == str:
        strings.append(i) 
print(integers)
print(strings)

#დავალება 6 და 7
list1 = [1,3,4,6,7,8]
list2 = [2,1,34,57]
list3 = [12,32,52,67,8]
list4 = [14,16,13,23,9]
even = []
odd = []
for i in list1:

    if (i % 2) == 0:
        even.append(i)
    else:
        odd.append(i)

for i in list2:

    if (i % 2) == 0:
        even.append(i)
    else:
        odd.append(i)

for i in list3:

    if (i % 2) == 0:
        even.append(i)
    else:
        odd.append(i)

for i in list4:

    if (i % 2) == 0:
        even.append(i)
    else:
        odd.append(i)
    
print(sum(even))
print(sum(odd))    

#დავალება 8

strings = ["boy","boll","sleep","sheep","jip"]
lengths = []
for i in strings:
    length = len(i)
    lengths.append(length)
print(lengths)

#დავალება 9
mixed_list = [12,"house",91,27,"control",121,"center"]
num = 0
union = ""
for i in mixed_list:
    check = type(i)
    if check == int:
        num = num + i
    elif check == str:
        union = union + i
print(num)
print(union)
