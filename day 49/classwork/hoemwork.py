arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for i in range(len(arr)):
    for n in range(len(arr[i])):
        arr[i][n] += 1
        
print(arr)


arr2 = [
    [True,False,False],
    [False,False,True],
    [True,False,True]
]

for i in range(len(arr2)):
    for n in range(len(arr[i])):
        if arr2[i][n]:
            arr2[i][n] = True
        else:
            arr2[i][n] = False
print(arr2)