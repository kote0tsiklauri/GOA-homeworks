def pluralize(word):
    if word.endswith(('ch', 'sh', 's', 'x', 'z')):
        return word + 'es'
    elif word.endswith('y') and word[-2].lower() not in 'aeiou':
        return word[:-1] + 'ies'
    else:
        return word + 's'

def largest_power(N):
    k = -1
    while 3 ** (k + 1) < N:
        k += 1
    return k