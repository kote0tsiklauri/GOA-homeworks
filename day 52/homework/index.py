import math

def func(a , b = None , c = None):
    if not b:
        return math.pi * a *  a
        
    elif not c:
        return a * b
    
    s = ( a + b + c) / 2
    return math.sqrt(s(s -a)(s-b)*(s-c))

print(func(9,9,9))
