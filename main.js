'use strict';

let money = prompt("Ваш бюджет на месяц", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {moneyData: money, 
    timeData: time, 
    expenses: {}, 
    optionalExpenses: "", 
    income: [], 
    savings: false};

let sta = prompt("Введите обязательную статью расходов в этом месяце","");
let cost = prompt("Во сколько это обойдется?", "");

appData.expenses[sta] = cost;

let sta2 = prompt("Введите обязательную статью расходов в этом месяце","");
let cost2 = prompt("Во сколько это обойдется?", "");

appData.expenses[sta2] = cost2;

alert("Ваш бюджет на 1 день " + (money / 30));

console.log(appData.expenses);
