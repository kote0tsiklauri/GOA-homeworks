def decode(message):
    decoded_message = ''
    for char in message:
        if char == ' ':
            decoded_message += ' '
        else:
            decoded_message += chr(219 - ord(char))  # 219 is the sum of ord('a') + ord('z')
    return decoded_message

def height(n):
    h1 = 2000000
    r = 2.5       
    total_height = h1 * (1 - r ** n) / (1 - r)
    return round(total_height, 3)