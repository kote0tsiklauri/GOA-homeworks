car = {
    "mark": "amg",
    "name": "mercedes",
    "year": 1901,
    "engen": "	5918 cc straight-4 35 hp"
}

person = {
    "name": "kote",
    "age": 16
}
person.update({"email": "kotetsiklauri@gmail"})
print(person)
person["surname"] = "tsiklauri"

for value in person:
    print(person[value])

dict = {}
for i in range(1000):
    dict["item_{0}".format(i)] = i

print(dict)
    
