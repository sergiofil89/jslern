let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money, 
    timeData: time, 
    expenses: {}, 
    optionalExpenses: {}, 
    income: [], 
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце",""),
            b = prompt("Во сколько это обойдется?", "");
        
        if ((typeof(a)) === "string" && 
            (typeof(a)) != null && 
            (typeof(b)) != null &&
             a != '' &&
             b != '' &&
             a.length < 50 &&
             b.length < 20)  {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert("Ваш бюджет на 1 день " + appData.moneyPerDay);
  
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровань достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровань достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровань достатка");
    } else {
        console.log("An error occurs");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", ""),
            percent = +prompt("Под какой процент?","");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let optExp = prompt("Статья необязательных расходов?", "");
        if (optExp == "" || optExp == null) {
            i--;
        } else {
            appData.optionalExpenses[i] = optExp;
        }
    }
}

chooseOptExpenses();
