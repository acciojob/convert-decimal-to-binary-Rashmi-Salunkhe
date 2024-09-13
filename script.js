function decimalToBinary(num) {
    if (num === 0) return '0'; // Handle the case for 0
    return num.toString(2); // Convert the number to binary string
}

const num = parseInt(prompt("Enter a number."), 10);
alert(decimalToBinary(num));
