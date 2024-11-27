def main():
    
    num1 = int(input("შეიყვანეთ პირველი რიცხვი: "))
    num2 = int(input("შეიყვანეთ მეორე რიცხვი: "))


    operation = input("შეარჩიეთ ოპერაცია (+ ან -): ")


    if operation == "+":
        result = num1 + num2
        return result
    elif operation == "-":
        result = num1 - num2
        return result


print(main())