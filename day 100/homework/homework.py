def solution(text, ending):
    return text.endswith(ending)

def even_or_odd(s):
    even_sum = 0
    odd_sum = 0
    
    for digit in s:
        num = int(digit)
        if num % 2 == 0:
            even_sum += num
        else:
            odd_sum += num
    
    if even_sum > odd_sum:
        return "Even is greater than Odd"
    elif odd_sum > even_sum:
        return "Odd is greater than Even"
    else:
        return "Even and Odd are the same"

def battle(x, y):
    power_x = 0
    for i in range(len(x)) :
        power_x += ord(x[i])-64
    power_y = 0
    for j in range(len(y)) :
        power_y += ord(y[j])-64
    if power_x > power_y :
        return x
    elif power_x < power_y :
        return y
    else :
        return "Tie!"