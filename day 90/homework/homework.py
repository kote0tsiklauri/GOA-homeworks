def open_or_senior(data):
    result = []
    for i in data:
        if i[0] >= 55 and i[1] > 7:
            result.append("Senior")
        else:
            result.append("Open")
        
    return result


def count_zeros(N):
    result = 0
    for i in range(1, N + 1):
        result += str(i).count('0')
    return result

def driver(data):
    first_name, middle_name, surname, dob, gender = data
    
    surname_part = (surname[:5].upper() + "99999")[:5]
    
    day, tve_str, year = dob.split('-')  
    decade_digit = year[-2]
    year_digit = year[-1]
    
    tve = {"Jan": "01", "Feb": "02", "Mar": "03", "Apr": "04", "May": "05", "Jun": "06", 
           "Jul": "07", "Aug": "08", "Sep": "09", "Oct": "10", "Nov": "11", "Dec": "12"}[tve_str[:3].capitalize()]
    
    if gender.upper() == "F":
        tve = str(int(tve) + 50)
    
    initials = first_name[0].upper() + (middle_name[0].upper() if middle_name else "9")
    
    license_number = (
        f"{surname_part}{decade_digit}{tve}{day}{year_digit}{initials}9AA"
    )
    
    return license_number

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