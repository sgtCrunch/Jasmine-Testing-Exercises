window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmt = document.getElementById("loan-amount");
  const loanYears = document.getElementById("loan-years");
  const loanRate = document.getElementById("loan-rate");

  loanAmt.value = 50000.00;
  loanYears.value = 5;
  loanRate.value = .05;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currValues = getCurrentUIValues();
  const mnthPay = calculateMonthlyPayment(currValues);
  updateMonthly(mnthPay);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

  if(values.amount <= 0) return "Enter an amount greater than zero!";
  if(values.years <= 0) return "Enter a term greater than zero!";

  const payments = values.years * 12;
  const periodRate = values.rate / 1200;
  const monthly = (values.amount * periodRate) / (1 - (1 + periodRate)**(-1 * payments));
  return monthly.toFixed(2).toString();
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlySpan = document.getElementById("monthly-payment");
  monthlySpan.innerText = monthly;
}
