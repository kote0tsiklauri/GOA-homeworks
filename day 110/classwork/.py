def get_issuer(number):
    num = str(number)
    if len(num) == 15 and (num[:2] == "34" or num[:2] == "37"):
        return "AMEX"
    elif len(num) == 16 and num[:4] == "6011":
        return "Discover"
    elif len(num) == 16 and num[:2] in ['51', '52', '53', '54', '55']:
        return "Mastercard"
    elif len(num) in [13,16] and num[0] == "4" :
        return "VISA"
    else:
        return "Unknown"


def palindrome_chain_length(n):
    steps = 0
    while str(n) != str(n)[::-1]:
        n += int(str(n)[::-1])
        steps += 1
    return steps