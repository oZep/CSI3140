function calculateTotalRetailValue() {
    let totalRetailValue = 0;
    let continueLoop = true;

    while (continueLoop) {

        var productNumber = parseInt(prompt("Enter product number (1-5) or 0 to stop:"));
        
        switch (productNumber) {
            case 1:
                totalRetailValue += 2.98 * parseInt(prompt("Enter quantity sold for product 1:"));
                break;
            case 2:
                totalRetailValue += 4.50 * parseInt(prompt("Enter quantity sold for product 2:"));
                break;
            case 3:
                totalRetailValue += 9.98 * parseInt(prompt("Enter quantity sold for product 3:"));
                break;
            case 4:
                totalRetailValue += 4.49 * parseInt(prompt("Enter quantity sold for product 4:"));
                break;
            case 5:
                totalRetailValue += 6.87 * parseInt(prompt("Enter quantity sold for product 5:"));
                break;
            case 0:
                continueLoop = false;
                break;
            default:
                alert("Invalid product number. Please enter a number between 1 and 5.");
                break;
        }
    }

    document.write("<h2>Total Retail Value of Products Sold Last Week:</h2>");
    document.write("<p>$" + totalRetailValue.toFixed(2) + "</p>");
}

calculateTotalRetailValue();