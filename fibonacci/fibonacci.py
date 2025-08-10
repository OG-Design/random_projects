# to clear console
import os

os.system('cls')

# while loop fibonacci sequenser
#
# a = 0
# b = 1
# count = 0
# add = a + b
# a = b
# b = add
# count += 1
# repeat for n amount 

def fibonacci_iterative(n):
    # variables
    a,b = 0, 1
    count = 0
    
    # if not int
    if not isinstance(n, int):
        print()
        print("Input not of type INT")
        print("Returning to options")
        print()
        return options_fn()
    if n <= 0:
        print('Negative number encountered')
    elif n == 1:
        print('Fibonacci up to 1')
        print(a)
    else:
        
        print('Sequence: ')
        # while count smaller than n, add = a + b, then count ++. until count !smaller than n
        while count < n:
            # add_iteration_count
            # run options: if not True
            if options.add_iteration_count!=True:
                print(a)
            # run options: if True
            else:
                print(f"{count}: {a}")
            add = a + b
            a = b
            b = add
            count += 1
            # check each round for n < a, if smaller then print() then add input to pause before console clear 
            if n < a:
                print()
                input("press Enter to clear the console: ")
                os.system('cls')
                return options_fn()
    # won't run if while loop works.
    # cause, return to option in if statement a few lines above  
    print()
    input_num_fn()

# input number to use in fibonacci
def input_num_fn():
    print()
    input_val = input("Input maximum number: ")
    print()

    
    # try to parse input to number
    try:
        parse = int(input_val)
    except:
        # couldn't parse value
        print("Couldn't parse input, value set to 0")
        parse = 0
    # call fibonacci and with int version of input_val
    fibonacci_iterative(parse)

# options class
class Options ():
    def __init__(self):
        self.add_iteration_count=False
        self.theme_default_dark=True
options = Options()


# options function
def options_fn():
    # print valid options
    print("OPTIONS")
    print("0. EXIT PROGRAM || any other Integer")
    print("1. START PROGRAM")
    print("2. Add iteration count: ", options.add_iteration_count)
    print("")

    # input
    optin = input("enter option num to toggle: ")
    
    # parse check
    answer = int(-1) 
    try:
        answer = int(optin)
    except ValueError:
        print("Couldn't parse string: ", optin)
        print()
        return options_fn()
    


    # selections
    # if -1 return to options fn
    if answer == -1:
        return options_fn()
    # if 1 start program
    if answer == 1:
        os.system('cls')
        input_num_fn()
    # if 0 return 0 | exit program
    if answer == 0:
        return
    # if 2 change to show/!show iteration count
    if answer == 2:
        # toggle
        if options.add_iteration_count==False:
            options.add_iteration_count=True
        else:
            options.add_iteration_count=False
        
        os.system('cls')
        return options_fn()
    # return options_fn()

# call to start program
options_fn()


