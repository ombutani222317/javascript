// loops are started ********************


// program - 1 :-------

// 1. Write a program that calculates the sum of all numbers from 1 to 100.

{
    let number = 10;
    let sum = 0;

    for (let i = 1; i <= number; i++) {
        sum += i;
    }

    console.log('The sum of natural numbers:', sum);
}

// program - 2 :------

// 2. Write a program that prints the multiplication table of a given number (for example, 5)

{
    let n = 5;
    for (let i = 1; i <= 10; ++i) {
        console.log(n + " * " + i +
            " = " + n * i);
    }
}

// program - 3 :-------

// 3. Write a program that calculates the factorial of a given number (for example, 5!).
{


    let res = 1;
    let n = 5;
    for (let i = 2; i <= n; i++)
        res = res * i;
    console.log(res);

}


// program - 4 :------

// 4. Write a program that prints the first 10 numbers in the Fibonacci sequence.

{ }

// program - 4 :------

//  5.Write a program that reverses a given string.
{
    let str = "My Name is Om Butani";
    const reverse_str = str.split('').reverse().join('');
    console.log(reverse_str);
}

// program - 4 :------

// 4. Write a program that prints the first 10 numbers in the Fibonacci sequence.

{ }