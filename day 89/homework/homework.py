a = "hello world!"
print(a[3:10:2]) #ცვლადი[მერამდენე ინდეხიდან დაიწყოს,მერამდენეზე დასრულდე,გამოტოვება ყოველ გადასვლაზე]


def func(a):
    result = ""
    word = ""

    for char in a:
        if char != " ":
            word += char
        elif char == " ":
            result += word[::-1]+ " "
            
            word = " "
    if word:  
        result += word[::-1]
    print(result) 


word = input("გთხოვთ, შეიყვანოთ წინადადება: ")
func(word)