#დავალება 1

i = 1
while i < 10:
    i += i
print(i)
    
i = 0
while i < 10:
    print(i)
    i += 1

i = int(input("pleas enter your age:"))
while i < 18:
    print("you can't enter bar yet")
    i = int(input("pleas enter your age:"))
else:
    print("you can enter")

i = 1
while i < 25:
    i += 1
    print(i)
    if i == 15:
     break


email = input("to continue please enter email: ")
pasword = 1234
enterd_pasword = int(input("pleas enter your pasword:"))
while enterd_pasword != pasword:
    print("wrong pasword")
    enterd_pasword = int(input("pleas enter your pasword:"))
    if enterd_pasword == pasword:
        print("you successfully singed in")

#დავალება 2
num = input("pleas enter number: ")
if num == 7:
    print("you won")
else:
    print("you lost")


num1 = input("pleas enter first number: ")
num2 = input("pleas enter second number: ")
if num1 > num2:
    print("first number is biger than second")
elif num1 < num2:
    print("second number is biger than first")
else:
    print("they are equal")


num1 = int(input("pleas enter first number: "))
num2 = int(input("pleas enter second number: "))
if num1 > 0 and num2 > 0:
    print("Their product will be positive")
elif num1 < 0 and num2 < 0:
    print("Their product will be positive")
elif num1 < 0 and num2 > 0 or num1 > 0 and num2 < 0:
    print("Their product will be negative")

if num1 > 5:
    pass

day = input("pleas enter your favorite holiday: ")
fv = "saturday"
if day != fv:
    print("NO")
    print("try again")
    day = input("pleas enter your favorite holiday: ")
elif day == fv:
    print("it my favorit too")

i = 1
sum = 0
while i <= 100:
    sum = sum + i
    i = i + 1
print(sum)