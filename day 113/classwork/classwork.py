def is_pangram(st):
    string = st.lower()
    result = []

    for char in string:
        if char in 'abcdefghijklmnopqrstuvwxyz' and char not in result:
            result.append(char)

    if len(result) == 26:
        return True
    else:
        return False