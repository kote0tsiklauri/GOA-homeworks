def capitalize(s, ind):
    s_list = list(s)
    for i in ind:
        if i < len(s_list):
            s_list[i] = s_list[i].upper()
    return ''.join(s_list)