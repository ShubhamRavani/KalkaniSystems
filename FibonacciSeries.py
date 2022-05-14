def fibonacci_series(size):
    a = 0
    b = 1
    sum_fib = 0
    print(a, b, end=" ")
    while True:
        sum_fib = a + b
        a = b
        b = sum_fib
        if sum_fib < size:
            print(sum_fib, end=" ")
        else:
            break


fibonacci_series(int(input("Enter Number: ")))
