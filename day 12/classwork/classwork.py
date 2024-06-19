#დავალება 1
i = 20
while i >= 1:
    print(i)
    i = i - 1
    
#დავალება 2
i = 0

while i < 10:
    i = i + 2
    print(i)

#დავალება 3
i = 1
sum = 0
while i <= 10:
    sum = sum + i
    i = i + 1
print(sum)

#დავალება 4
corect_pasword = 'kote'
input_pasword = ''

while corect_pasword != input_pasword:
    input_pasword = input("your pasword: ")
    print("wrong pasword")

    if corect_pasword == input_pasword:
        print("You have successfully authenticated")

#დავალება 5
i = -1
while i <= 10:
    i = i + 2
    print(i)

#დავალება 6
age = int(input("age: "))
while age < 18:
       print("you can not learn this program")
       age = int(input("age: "))

else:
    print("congrants you have started the program")
    
#დავალება 7

day = int(input("pleas enter number between 1-7: "))
if day == 1:
    print("monday")
elif day == 2:
    print("Tuesday")
elif day == 3:
    print("Wednesday")
elif day == 4:
    print("Thursday")
elif day == 5:
    print("Friday")
elif day == 6:
    print("Saturday")
elif day == 7:
    print("Sunday")
else:
    print("you did not chose number between 1-7")

#დავალება 8
i = 0
while i <= 10:
    i = i + 1
    if (i % 2) == 0:
        print("The number is even")
    else:
        print("The provided number is odd")

#დავალება 9
name = input("pleas enter your age: ")
if age > 5 and age < 12:
    print("you are child")
elif age > 12 and age < 18:
    print("you are tinager")
elif age > 18:
    print("you are adult")



    
        

