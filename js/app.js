var budget = 0;
var expenses = [];
var currentExpenseName = '';
var currentExpenseAmount = 0;

function setBudget() {
  var budgetValue = parseFloat(prompt("Enter your monthly budget:"));
  if (!isNaN(budgetValue)) {
    budget = budgetValue;
    showTotalBudget();
  }
}

function addExpenseName() {
  var expenseName = prompt("Enter expense name:");
  if (expenseName !== null) {
    currentExpenseName = expenseName;
  }
}

function addExpenseAmount() {
  var expenseAmount = parseFloat(prompt("Enter expense amount:"));
  if (!isNaN(expenseAmount)) {
    currentExpenseAmount = expenseAmount;
    addExpenseToList();
  }
}

function addExpenseToList() {
  if (currentExpenseName && currentExpenseAmount !== 0) {
    expenses.push({ name: currentExpenseName, amount: currentExpenseAmount });
    currentExpenseName = '';
    currentExpenseAmount = 0;
    displayExpenses();
  }
}

function displayExpenses() {
  var expenseList = document.getElementById("expenseList");
  expenseList.innerHTML = "";

  expenses.forEach(function (expense) {
    var expenseItem = document.createElement("div");
    expenseItem.textContent = expense.name + ": $" + expense.amount.toFixed(2);
    expenseList.appendChild(expenseItem);
  });
}

function calculateBudget() {
  if (budget === 0) {
    alert("Please set your budget first.");
    return;
  }

  var totalExpenses = expenses.reduce(function (sum, expense) {
    return sum + expense.amount;
  }, 0);

  var remainingBudget = budget - totalExpenses;
  var resultElement = document.getElementById("result");

  if (remainingBudget >= 0) {
    resultElement.textContent = "You have $" + remainingBudget.toFixed(2) + " remaining in your budget.";
  } else {
    resultElement.textContent = "You have exceeded your budget by $" + Math.abs(remainingBudget).toFixed(2) + ".";
  }
}

function showTotalBudget() {
  var totalBudgetElement = document.getElementById("totalBudget");
  totalBudgetElement.textContent = ": $" + budget.toFixed(2);
}
