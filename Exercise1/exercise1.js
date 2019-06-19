"use strict";

let money=+prompt("Ваш бюджет на месяц?","");
//console.log(money);
let time=prompt("Введите дату в формате YYYY-MM-DD","");
//console.log(time);

var expences={};
var itemOfExpenditure,
    amountOfExpenses;

var appData={budget: money, timeData: time, expenses: {}, optionalExpenses: {},
income: [], savings: false};

itemOfExpenditure=prompt("Введите обязательную статью расходов в этом месяце","");
amountOfExpenses=+prompt("Во сколько обойдётся?","");
expences[itemOfExpenditure]=amountOfExpenses;

//console.log(expences);

itemOfExpenditure=prompt("Введите обязательную статью расходов в этом месяце","");
amountOfExpenses=+prompt("Во сколько обойдётся?","");
expences[itemOfExpenditure]=amountOfExpenses;

//console.log(expences);

alert("Средние ежедневные расходы: " + ((money/30).toFixed(2)));

for (var key in expences) {
    console.log(key);
    alert("Ежедневныве расходы по статье " + key + " : " + (expences[key]/30).toFixed(2));
}

