def capitalize(s, ind):
    s_list = list(s)
    for i in ind:
        if i < len(s_list):
            s_list[i] = s_list[i].upper()
    return ''.join(s_list)


def cube_odd(arr):
    result = 0
    for val in arr:
        if type(val) != int:
            return None
        if type(val) == bool:
            return None
        cube = val ** 3
        if cube % 2 != 0:
            result += cube
    return result