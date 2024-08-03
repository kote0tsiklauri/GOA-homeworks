def manual_count(string,count_char):
    count = 0
    for i in string:
            if i == count_char:
                count += 1
            return count
print(manual_count("helow are you ok", "h"))



name = input("pleas enter your name,all lowercase: ")
check = name.islower()
while check == True:    
    print("you may continue")
    break
else:
    print("try again later")
    name = input("pleas enter your name,all lowercase: ")

a = "mexico"

print("Hello".islower())
print(a.islower())
print("asdhadadH".islower())



print("Hello".isupper())
print("WHYYYYYYYYYYYYYY".isupper())
print("asSADadsDASJND".isupper())
print("I DONT WANA".isupper())
print("i am out of ides".isupper())



phone = input("pleas enter you phone number: ")
phone.isnumeric()  
if True:
    print("welcome")
else:
    print("pleas use only numbers")


code = input("pleas enter you pasword: ")
code.isnumeric()
if True:
    if code == 1234 :
        print("wellcome")
    else:
        print("wrong code")
else:
    print("use only nimbers")



numbers = input("pleas enter numbers: ")
check = numbers.isnumeric()
if True:
    print("good")
else:
    print("NO")

print("12432321".isnumeric())


print("kote".isalpha())


pasword = input("please enter your pasword whith only laeters: ")
pasword.isalpha()
if True:
    print("continue")
else:
    print("use ONLLY leTTERS")


print("lalala".isalpha())
print("sc4le".isalpha())
print("fam6".isalpha())

