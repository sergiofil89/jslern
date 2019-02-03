let startbtn = document.body.querySelector("#start"),
    resvalues = document.body.querySelectorAll("[class*='-value']"),
    expensItemsInput = document.body.querySelectorAll("input[class=expenses-item]"),
    btnSet = document.body.querySelector("button[class=optionalexpenses-btn]"),
    btnCount = document.body.querySelector("button[class=count-budget-btn]"),
    optionalExpensInput = document.body.querySelectorAll("input[id^=optionalexpenses]"),
    posibleIncome = document.body.querySelector("#income"),
    savingsCheckbox = document.body.querySelector("#savings"),
    sum = document.body.querySelector("#sum"),
    percent = document.body.querySelector("#percent"),
    year = document.body.querySelector(".year-value"),
    month = document.body.querySelector(".month-value"),
    day = document.body.querySelector(".day-value");

console.log(posibleIncome, savingsCheckbox, month);
