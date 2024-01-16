
    function calculateLoan() {
      var loanAmount = parseFloat(document.getElementById('loanAmount').value);
      var interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
      var loanTerm = parseFloat(document.getElementById('loanTerm').value) * 12;
      
      var monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
      var totalInterest = (monthlyPayment * loanTerm) - loanAmount;
      var totalAmount = monthlyPayment * loanTerm;

      
      var resultElement = document.getElementById('monthlyPayment');
      resultElement.textContent = 'Monthly Payment: $' + monthlyPayment.toFixed(2);
      
      var resultElement1 = document.getElementById('totalInterest');
      resultElement1.textContent = 'Total Interest: $' + totalInterest.toFixed(2);

      var resultElement2 = document.getElementById('totalAmount');
      resultElement2.textContent = 'Total Amount : $' + totalAmount.toFixed(2);
    }
