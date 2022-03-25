let age = 5;
if (age > 18) {
    console.log('You can drink water');
} else if (age == 15) {
    console.log('go sleep');
} else {
    console.log("Whatever");
}


// SWITCH //
const cups = 45;
switch (cups) {
    case 4:
        console.log('The value of cup is 4.')
        break;
    case 41:
        console.log('The value of cup is 41.')
        break;
    case 42:
        console.log('The value of cup is 42.')
        break;

    default:
        console.log("The value of cups is none of 4, 41 or 42.")
        break;
}