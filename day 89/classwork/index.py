
#! 1
def reverse_words(text):
    result = []
    
    current_word = ''
    
    for char in text:
        if char == ' ':
            result.append(current_word[::-1])
            result.append(' ')  
            current_word = '' 
        else:
            current_word += char
    
    result.append(current_word[::-1])
    
    return ''.join(result)

#! 2
def count_letters_and_digits(s):
    count = 0
    for char in s:
        if char.isalpha() or char.isdigit():
            count += 1
    return count