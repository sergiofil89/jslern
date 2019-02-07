let startbtn = document.body.querySelector("#start"),
    resvalues = document.body.querySelectorAll("[class*='-value']"),
    expensesItems = document.body.querySelectorAll("input[class=expenses-item]"),
    expensesButton = document.body.querySelector("button[class=expenses-item-btn]"),
    optionalExpensesButton = document.body.querySelector("button[class=optionalexpenses-btn]"),
    countBtn = document.body.querySelector("button[class=count-budget-btn]"),
    optionalExpensInput = document.body.querySelectorAll("input[id^=optionalexpenses]"),
    incomeItem = document.body.querySelector("#income"),
    checkSavings = document.body.querySelector("#savings"),
    sumValue = document.body.querySelector("#sum"),
    percentValue = document.body.querySelector("#percent"),
    yearValue = document.body.querySelector(".year-value"),
    monthValue = document.body.querySelector(".month-value"),
    dayValue = document.body.querySelector(".day-value"),
    // try out
    budgetValue = document.body.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.body.getElementsByClassName('daybudget-value')[0],
    levelValue = document.body.getElementsByClassName('level-value')[0],
    expensesValue = document.body.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.body.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.body.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.body.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.body.getElementsByClassName('yearsavings-value')[0];

let money, time, 
optionalExpensesSum = 0;

countBtn.disabled = true;
expensesButton.disabled = true;
optionalExpensesButton.disabled = true;

sumValue.disabled = true;
percentValue.disabled = true;


startbtn.addEventListener("click", function() {
    time = prompt("Введите дату в фомате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    //resvalues[0].textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    countBtn.disabled = false;
    expensesButton.disabled = false;
    optionalExpensesButton.disabled = false;
});

expensesButton.addEventListener("click", function() {
    let sum = 0;

    for (let i = 0; i < expensesItems.length; i++) {
        let a = expensesItems[i].value,
            b = expensesItems[++i].value;
        
        if ((typeof(a)) === "string" && 
            (typeof(a)) != null && 
            (typeof(b)) != null &&
             a != '' &&
             b != '' &&
             a.length < 50 &&
             b.length < 20)  {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
    optionalExpensesSum = +sum;
});

optionalExpensesButton.addEventListener("click", function() {
    for (let i = 0; i < optionalExpensInput.length; i++) {
        let optExp = optionalExpensInput[i].value;
        appData.optionalExpenses[i] = optExp;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
    }
});

countBtn.addEventListener("click", function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - optionalExpensesSum) / 30).toFixed(2);
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "An error occurs";
        }
    } else {
        dayBudgetValue.textContent = "An error occurs";
    }

});

incomeItem.addEventListener("input", function() {
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener("click", function() {
    if (appData.savings == true) {
        appData.savings = false;
        monthSavingsValue.textContent = "";
        yearSavingsValue.textContent = "";
        sumValue.disabled = true;
        sumValue.placeholder = 0;
        percentValue.disabled = true;
        percentValue.placeholder = 0;
    } else {
        appData.savings = true;
        sumValue.disabled = false;
        percentValue.disabled = false;
    }
});

sumValue.addEventListener("input", function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
     }
});

percentValue.addEventListener("input", function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
     }
});


let appData = {
    budget: money, 
    timeData: time, 
    expenses: {}, 
    optionalExpenses: {}, 
    income: [], 
    savings: false,
};