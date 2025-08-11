use std::io;


// fibonacci (number input)
fn fibonacci (n:usize) {
    // declaration
    let mut a: usize = 0;
    let mut b: usize = 1;
    
    let mut count = 0;
    while a < n {

        println!("{}", a);

        // add a and b
        let add:usize = a + b;

        // change a to b
        a = b;
        // change b to add
        b = add;

        // make count = count + 1
        count += 1;

        

    }

    
}

fn main() {


    fibonacci(14);

}
