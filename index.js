const workDaysPerYear = 313; //how many days you work in year without fireday

const monthlySales = 435; // how mush money you have 

const dailySales = monthlySales / (workDaysPerYear / 12); 
console.log(`Daily Sales: $${dailySales.toFixed(2)}`);

const workDaysPerWeek = 6; //how many days you work in week

const weeklySales = dailySales * workDaysPerWeek;
console.log(`Weekly Sales: $${weeklySales.toFixed(2)}`);

const yearlySales = monthlySales * 12; 
console.log(`Yearly Sales for 2023: $${yearlySales.toFixed(2)}`);