function calculateMortgage() {
    // Get user input values
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12; // Monthly interest rate
    const loanTerm = parseFloat(document.getElementById('loanTerm').value) * 12; // Total months

    // Get selected payment type (Repayment or Interest Only)
    const paymentType = document.querySelector('input[name="paymentType"]:checked').value;

    // Check if input values are valid
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
        alert("Please enter valid values for loan amount, interest rate, and loan term.");
        return;
    }

    // Calculate based on payment type
    if (paymentType === "repayment") {
        // Calculate monthly mortgage payment using the formula (Principal + Interest)
        const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

        // Calculate total amount paid over the course of the loan
        const totalAmountPaid = monthlyPayment * loanTerm;

        // Display the result with commas
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `
            Monthly Payment (Principal + Interest): £${monthlyPayment.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} <br>
            Total Amount Paid: £${totalAmountPaid.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
        `;
    } else if (paymentType === "interestOnly") {
        // Calculate monthly interest only payment
        const monthlyInterestPayment = loanAmount * interestRate;

        // Display the result with commas
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `
            Monthly Interest Only Payment: £${monthlyInterestPayment.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
        `;
    }
}
