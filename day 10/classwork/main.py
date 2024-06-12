
#დავალება 1
pasword = input("pleas type in you'r pasword: ")

if pasword == "luka1234":
    print("You are authenticated")
else:
    print("The password is incorrect")

#დავალება 2

sum = 1

for i in range(5):
    num = int(input("pleas enter number:"))
    sum = sum * num
print(sum)

#დავალება 3

sum = 0

for i in range(5, 17):
    sum = sum + i

print(sum)