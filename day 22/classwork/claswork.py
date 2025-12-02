
# დავალება 1
def greet():
    print("hello")
greet()
greet()
greet()
greet()

#დავალება 2
def greet(name):
    print("hello" + " " + name)
greet(input("pleas enter your name: "))

# დავალება 3
numbers = [0,2,3,4,5,6,67,8,9,1]
def odd_even(numbers_list):
    for i in numbers:
        if i % 2 == 0:
            print("The number is even")
        elif i % 2 != 0:
            print("The provided number is odd")

odd_even([0,2,3,4,5,6,67,8,9,1])