# Ownership & borrowing 
rust ownership:
Ownership is a set of rules that govern how a rust program manages memory. 
All programs have to manage the way they use a computer's memory while running.

In rust memory is managed through a system of ownership with a set of rules that the compiler checks.

If any of the rules are violated, the program won't compile. None of the features of ownership will slow down your program while running.

Ownership often takes some time to get used to due to it being a relatively new concept in programming.

Understanding ownership is crucial to learning rust.
<br><br>

## The Stack and the Heap

Many programming languages don't require you to think about the stack and the heap very often. But in a systems programming language like rust, wether a value is on a stack or in the heap affects how the language behaves and why you have to make certain choices / decisions.

Both the stack and the heap are parts of the memory available to your code during runtime, but they are structured in different ways. The stack stores values in the order it gets them (like a stack of plates, last in first out). Adding data to the stack is called pushing onto the stack, and removing data is called popping off the stack. All data stored onto the stack must therefore have a fixed known size, so all data with an unknown size or may change has to go to the heap.

The heap is less organised, when you put data on the heap you request a certain amount of space. The memory allocator finds an empty spot in the heap that is big enough, marks it as being in use, and returns a pointer, which is the adress of that location. This process is called allocating on the heap, and is sometimes abrreviated as just allocating (pushing values onto the stack is not considered allocating). Because the pointer to the heap is a known, fixed size, you can store the pointer on the stack, but when you want the actual data, you must follow the pointer. Think of being seated at a restaurant. When you enter you state the number of people in your group, and the host finds an empty table that fits everyone and leads you there. If someone in your group comes late they can ask where you've been seated to find you.

Pushing to the stack is faster than allocating on the heap because the allocator never has to search for a place to store new data. that location is always at the top of the stack. Comparitively, allocating space on the heap requires a lot more work because the allocator must first find a big enough space to hold the data, then perform bookkeeping to prepare for the next allocation.

Accessing data on the heap is generally slower than accessing data on the stack because you have to follow a pointer to get there. Contemporary processors are faster if they jump around less in memory. Continuing the analogy, consider the server at a restaurant taking orders from many tables. It's most efficient to get all the orders at one table before moving on to the next table. Taking an order from table A, then an order from table B, then one from A again, and then one from B again would be a much slower process. By the same token, a processor can usually do it's job better if it works on data that is close to other data (as it is on the stack) rather than farther away (as it can be on the heap).

When your code calls a function, the values passed into the function (including, potentially, pointers to data on the heap), and the functions local variables get pushed onto the stack. When the function is over, those values get popped off the stack.

Keeping track of what parts of code are using what data on the heap, minimizing the amount of duplicate data on the heap so you don't run out of space are all problems that ownership addresses. Once you understand ownership, you won't need to think about the stack and the heap very often, but knowing the main purpose of ownership is to manage heap data can help explain why it works the way it does.

## Ownership in rules Rust
* Each value in Rust has an owner.
* There can only be one owner at a time.
* When an owner goes out of scope, their value is dropped.

### Variable Scope
``` Rust 

{
// s is not valid here since it hasn't been declared yet.
let s = "hello"; // s is valid from this point forward.


} // the scope is over. s is no longer valid.
```

The variable 's' is valid until it goes out of scope.
At this point, the relationship between scopes and when variables are valid is similar to that in other programming languages.


// Structs & traits
// Iterators & slices
// Generics