def positions(row, col):
    for r in range(1, row + 1):
        for c in range(1, col + 1):
            print("row: " + str(r) + " " "col: " + str(c))

positions(4, 2)

def multiplication_table():
    table = []
    for i in range(1, 11):
        row = []
        for j in range(1, 11):
            sum = i * j
            row.append(sum)
        table.append(row)
    return table

result = multiplication_table()
for row in result:
    print(row)

def print_peirs(n):
    for i in range(1,n + 1):
        for q in range(1, n + 1):
            if q > i:
                print(i,";",q)
print_peirs(3)