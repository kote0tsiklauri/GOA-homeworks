#დავალება 1
cars = []

for i in range(5):
    name = input("pleas enter your favoryt cars name:")
    cars.append(name)

print(cars)

#დავალება 2

movies = ["zodiac","Kingdom of the Planet of the Apes","lord of the rings","dune"]
print(movies[1])

#დავალება 3

family = []
for i in range(5):
    name = input("pleas enter your 5 family mambers name:")
    family.append(name)

family[2] = 16

#დავალება 4

fruits = ["Peach", "Gargali", "Strawberry", "Watermelon", "grapes"]
fruits.append("Kiwi") 
fruits.pop(1)

#დავალება 5
numbers = [1, 2, 3, 4, 12, 6,-1]

print(min(numbers))  


print(max(numbers))


print(sum(numbers))


max_number = numbers[0]
for number in numbers:
    if max_number < number:
        max_number = number
print(max_number)

min_number = numbers[0]
for min_number in numbers:
    if min_number > number:
        min_number = number
print(min_number)


sum = 0
for num in numbers:
    sum=num + numbers
print(sum)


#დავალება 6

names = []
for i in range(5):
    name = input("pleas enter name: ")
    names.append(name)
count = 0
for i in names:
    if i == "kote":
        count = count + 1
print(count)

#დავალება7
numbers = [1,2,3,4,5]
numbers.pop()
numbers.pop(0)
print(numbers)