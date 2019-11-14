  
alert("CONNECTED");

var age = prompt("How old are you?");

if (age < 1) {
    alert("Error");
} else if (age == 21) {
    alert("Happy 21st Birthday!!");
} else if (age % 2 !== 0) {
    alert("your age is odd");
} else if(age % 2 == 0) {
    alert("your age is even");
}

