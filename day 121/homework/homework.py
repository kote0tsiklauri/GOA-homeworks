def no_space(s):
    return ''.join(s.split())

def abbrev_name(name):
    return '.'.join(map(lambda x:x[0].upper(),name.split()))