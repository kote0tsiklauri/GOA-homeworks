import math

def matrixfy(str):
    if len(str) == 0:
        return "name must be at least one letter"
    
    n = math.ceil(math.sqrt(len(str)))  
    padded_name = str.ljust(n * n, '.')  
    matrix = [list(padded_name[i * n:(i + 1) * n]) for i in range(n)]
    
    return matrix