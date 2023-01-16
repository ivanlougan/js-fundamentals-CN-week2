// set a date of a birthday
let myBirthday = new Date(2023, 03, 09);
let currentDate = new Date();

// count the difference in miliseconds
let difference = (myBirthday.getTime() - currentDate.getTime());

// convert miliseconds to days
let totalDays = Math.ceil(difference / (1000 * 3600 * 24));

console.log(`Days remaining to my birthday: ${totalDays}`);

