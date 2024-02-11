function findMinMax() {
    var x1 = parseInt(prompt("Enter the first number:"));
    var x2 = parseInt(prompt("Enter the second number:"));
    var x3 = parseInt(prompt("Enter the third number:"));
    var x4 = parseInt(prompt("Enter the fourth number:"));
    var x5 = parseInt(prompt("Enter the fifth number:"));

    var smallest = Math.min(x1, x2, x3, x4, x5);
    var largest = Math.max(x1, x2, x3, x4, x5);

    document.getElementById('result').innerHTML = "Largest: " + largest + "<br>Smallest: " + smallest;
}
