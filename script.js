const expenses = []; 
let totalAmount = 0;

const inputText = document.getElementById("input-text");
const dropDown = document.getElementById("category");
const addButton = document.getElementById("add-btn");
const expenseList = document.getElementById("expenselist");
const inputAmount = document.getElementById("Amount");
const deleted = document.getElementById("Delete");
const totalExpensesElement = document.getElementById("totalExpenses");

console.log(inputText, dropDown, addButton, expenseList);

addButton.addEventListener("click", addExpense);

function addExpense() {
    const expenseName = inputText.value.trim();
    const category = dropDown.value;
    const amount = parseFloat(inputAmount.value);

    if (expenseName === "") {
            alert("Add something bobo");
            return;
         }

    // Add to expenses array
    const expense = { name: expenseName, category, amount };
    expenses.push(expense);

    const row = expenseList.insertRow();
    row.insertCell(0).innerText = expenseName;
    row.insertCell(1).innerText = category;
    row.insertCell(2).innerText = new Date().toLocaleString();
    row.insertCell(3).innerText = amount.toFixed(2);

    totalAmount += amount;
    totalExpensesElement.innerText = totalAmount.toFixed(2);

    updateCategoryTotals();

    inputText.value = "";
    inputAmount.value = "";
}

function updateCategoryTotals() {
    let categoryTotals = { Food: 0, Travel: 0, Entertainment: 0, Others: 0 };

    expenses.forEach(expense => {
        categoryTotals[expense.category] += expense.amount;
    });

    document.querySelector("#categoryTotals").innerHTML = `
        <li>Food: ₦${categoryTotals.Food.toFixed(2)}</li>
        <li>Travel: ₦${categoryTotals.Travel.toFixed(2)}</li>
        <li>Entertainment: ₦${categoryTotals.Entertainment.toFixed(2)}</li>
        <li>Others: ₦${categoryTotals.Others.toFixed(2)}</li>
    `;
}

function sortExpensesByAmount() {
    expenses.sort((a,b) => a.amount - b.amount);
    displayExpenses();
}

function sortExpensesByDate() {
    expenses.sort((a,b) => new Date(b.date) - new Date(a.date));
    displayExpenses();
}

deleted.addEventListener("click", function(){
    let delette = document.getElementById('');
    deleted.style.display = 'none'
     })

