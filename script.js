function calculateMonthlyPayment() {
    const loanAmount = parseFloat(document.getElementById("loanAmountInput").value);
    const interestRate = parseFloat(document.getElementById("interestRateInput").value) / 100; // Convert to decimal
    const loanTerm = parseInt(document.getElementById("loanTermInput").value);
  
    // Monthly interest rate
    const monthlyInterest = interestRate / 12;
  
    // Calculate number of payments
    const totalPayments = loanTerm;
  
    // Loan payment formula
    const monthlyPayment = loanAmount * (monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -totalPayments)));
  
    // Ensure valid input (optional)
    if (isNaN(monthlyPayment) || loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
      document.getElementById("result").innerHTML = "Please enter valid values.";
      return; // Exit the function if input is invalid
    }
  
    // Display the result
    document.getElementById("result").innerHTML = "Your monthly payment is: Rupee" + monthlyPayment.toFixed(2);
  }
  