#დავალება 1
names = ["dato","kote","luka","gio","saba"]
print(names[1:3])

#დავალება 2
numbers = [1,2,3,4,5,6,7,8,9,0,]
half_numbers = (numbers[1:7])
new_list = []
for i in half_numbers:
    new_list.append(i)
print(new_list)

#დავალება 3
days = [1,2,3,4,5,6]
print(days.index(1))
print(days.index(2))
print(days.index(3))

#დავალება 4
integers = [12,34,5643,123,134,6,12,34]
max = (max(integers))
min = (min(integers))
max_index = (integers.index(max))
min_index = (integers.index(min))
integers.pop(max_index)
integers.pop(min_index - 1)
print(integers)

#დავალება 5
new_integers = []
new_integers.append(max)
new_integers.append(min)
print(new_integers)

#დავალება 6
integers1 = [1,2,3,4,5]
integers2 = [6,7,8,9,0]
max_int1 = max(integers1)
max_int2 = max(integers2)
min_int1 = min(integers1)
min_int2 = min(integers2)
Result1 = max_int1 - min_int2
Result2 = max_int2 - min_int1
new_list = []
new_list.append(Result1)
new_list.append(Result2)
print(new_list)

#დავალება 7
ints = [1,23,4,5,6,7,2,325]
print(sum(ints))

# #დავალება 9
integers1 = [23,44,315,525,73]
integers2 = [13,241,346,4744]
print(sum(integers1))
print(sum(integers2))

#დავალება 10
drinks = ["soda","fanta","coffee","coke"]
reversed_drinks = []
for i in range(len(drinks) - 1,-1,-1):
    reversed_drinks.append(drinks[i])
print(reversed_drinks)

#დავალება 11
name = "kote"
for i in range(len(name) - 1,-1,-1):
    print(name[i])
