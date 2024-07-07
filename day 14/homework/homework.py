#დავალება 1 (pop)
numbers= [1,2,3,4,5,6,7]
numbers.pop()
print(numbers)

strings = ["dato","car","eye","dress"]
strings.pop(0)
strings.append("dato")
print(strings)

characters = ["a","b","s","d","e","f","g"]
characters.pop(2)
print(characters)

tuplets = ["uple","quints","Sextuplets","Septuplets"]
numbers.pop(3)
numbers.append("septuplets")
print(tuplets)


#დავალება 2 (count)
count = 0
intengers = [1,2,3,5,4,5,8,7,5,9]
for i in intengers:
    if i == 5:
        count = count + 1
print(count)


count = 0
strings = ["a","b","c","a","n","a","a"]
for i in strings:
    if i == "a":
        count = count + 1
print(count)


count = 0
boolean_values = ["true","false","true","true"]
for i in boolean_values:
    if i == "true":
        count = count + 1
print(count)

#დავალება 3 (max)
integers = [1,2,3,8,3,10,13,25,18]
print(max(integers))

strings = ["aka","chai","home","classwork"]
print(max(strings))

ages = [14,16,21,73,24,32,43]
print(max(ages))

datetime_objects = [5,1,2,3,4,67,87]
print(max(datetime_objects))

#დავალება 4 (min)
print(min(integers))

print(min(strings))

daily_temperatures = [18,22,19,15,10]
print(min(daily_temperatures))

product_prices = [4,5,19,2,6,3]
print(min(product_prices))

#დავალება 5 (sum)
print(sum(integers))

print(sum(strings))

game_results = [100,70,20,10,320,102]
print(sum(game_results))


integers = []
for i in range(5):
    intenger.append(int(input("pleas enter any number")))
print(len(integers))
