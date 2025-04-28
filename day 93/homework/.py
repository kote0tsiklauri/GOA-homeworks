greet = lambda name: print(f"Hello {name}!")

greet("Nika")



numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))

print(doubled)  


listn = [1, 3, 5, 6, 7, 10, 15, 21, 25.5, 30, 101, 105]
filtered = list(filter(lambda x: x % 5 == 0 and isinstance(x, int), listn))
print(filtered)


setn = {"Goa", "Novatori", "Stem", 123, True, 1, False, 0}
print(setn)
# Python-ში True == 1 და False == 0, ამიტომ set-ში ისინი დუბლიკატებად ითვლებიან.