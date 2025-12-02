def encode(s):
    result = ""
    for char in s:
        if char == 'a':
            result += '1'
        elif char == 'e':
            result += '2'
        elif char == 'i':
            result += '3'
        elif char == 'o':
            result += '4'
        elif char == 'u':
            result += '5'
        else:
            result += char
    return result

def decode(s):
    result = ""
    for char in s:
        if char == '1':
            result += 'a'
        elif char == '2':
            result += 'e'
        elif char == '3':
            result += 'i'
        elif char == '4':
            result += 'o'
        elif char == '5':
            result += 'u'
        else:
            result += char
    return result