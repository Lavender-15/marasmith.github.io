const day = new Date();

const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const dayName = daynames[day.getDay()];
const monthName = months[day.getMonth()];
const year = day.getFullYear();

const currentdate = dayName + ", " + day.getDate() + " " + monthName + " " + year;
const options = {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'};
document.getElementById("currentdate").textContent = currentdate;

//const fulldate = `${dayName}, ${day.getDate()} ${monthName} ${year}`;
//document.getElementById("update").textContent = fulldate;

