n = int(input("Please enter your lucky number: "))

for i in range(1, 2*n):
    for j in range(0, abs(n-i)):
        print('  ', end='')
    if i <= n:
        for k in range(1, 2*i, 2):
            print(k, end=' ')
    else:
        for k in range(1, (2*n - i)*2, 2):
            print(k, end=' ')
    print()
