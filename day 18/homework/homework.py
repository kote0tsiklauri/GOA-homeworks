#დავალება 1
person = {
    "name": "kote",
    "age": 16,
    "city": "tbilisi",
    "work": "unempoled",
}
print(f"my name is {person['name']}.i am {person['age']} yers old and live in {person['city']}.curently i am {person['work']}")

#დავალება 2
subjects = {
    "math": 8,
    "english": 9,
    "physics": 7,
    "biology": 6
}
evreg = int(sum(subjects.values()) / len(subjects))
print(evreg)

#დავალება 3
fav_manhwas = {
    "first": "demon slayer",
    "second": "solo leveling",
    "therd": "second life ranker",
}
print(f"my favorit manhwa is {fav_manhwas['first']},after that is {fav_manhwas['second']} and my therd favoret manhwa is{fav_manhwas['therd']}.")

#დავალება 4
shoping_cart = {
    
}

num = int(input("type in how many items you want to buy:"))
for i in range(num):
    item = input("pleas enter your item:")
    quantity = int(input("pleas enter how much you want:"))

if item in shoping_cart:
    shoping_cart[item] += quantity
else:
    shoping_cart[item] = quantity
        
