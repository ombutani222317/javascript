// switch case:>
{
    let hero = "alu arjun";
    switch (hero) {
        case "salman khan":
            console.log("salaman khan is my fav.. hero");
            break;
        case "alu arjun":
            console.log("alu arjun  is my fav.. hero");
            break;
        case "akshay kumar":
            console.log("akshay kumar is my fav.. hero");
            break;
        default:
            break;
    }
}


// if else:>
{
    let x = 10;
    let y = 20;
    if (y > x) {
        console.log(x + y);
    }
    else {
        console.log(x - y);
    }
}

// else if statements:>


{
    let om = "om";
    let nirali = "nirali";
    let both = "both";
    if (om === nirali) {
        console.log("Om love Nirali");
    }
    else if (nirali != om) {
        console.log("Nirali love Om");

    }
    else {
        console.log("nirali love Om and om love nirali");
    }

}


// practice program::::::-----

// program - 1 :-------

{
    let num = 1;
    if (num > 0) {
        console.log("**Number is positive**");
    }
    else if (num < 0) {
        console.log("**Number is negative**");

    }
    else {
        console.log("**Number is Zero**");
    }
}


// program - 2 :-------
{
    let age = 18;
    if (age >= 18) {
        console.log("**You are eligible for Vote**");
    }
    else {
        console.log("**You are not eligible for Vote**");
    }
}


// program - 3 :--------
{
    let a = 10;
    let b = 20;
    let c = 30;

    if (a > b && a > c) {
        console.log("**A is larger than B & C**");
    }
    else if (b > a && b > c) {
        console.log("**B is larger than A & C**");
    }
    else {
        console.log("**C is larger than B & A**");
    }
}


// program - 4 :-------
{
    let year = 2008;
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("**year is a leap year**");

    } else {
        console.log("**year is a not leap year**");
    }
}


// program - 5 :-------
{
    let totalgrades=400;
    let percentage = (totalgrades / 400) * 100;
    if (percentage <= 100 && percentage >= 80) {
         console.log("**Grade A**");

    } else if (percentage <= 79 && percentage >= 60) {
        console.log("**Grade B**");
 
    } else if (percentage <= 59 && percentage >= 40) {
        console.log("**Grade C**");
  
    } else {
        console.log("**Grade D**");
  
    }
}