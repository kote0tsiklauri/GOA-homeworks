numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))
print(doubled)

numbers = [1, 2, 3, 4, 5, 6]
odds = list(filter(lambda x: x % 2 == 1, numbers))
print(odds)

words = ["hello", "world", "python"]
upper_words = list(map(lambda w: w.upper(), words))
print(upper_words) 

words = ["apple", "banana", "grape", "watermelon"]
long_words = list(filter(lambda w: len(w) > 5, words))
print(long_words)