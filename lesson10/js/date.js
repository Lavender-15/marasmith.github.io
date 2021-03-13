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

const fulldate = `${dayName}, ${day.getDate()} ${monthName} ${year}`;
document.getElementById("update").textContent = fulldate;

let dayOfWeek = new Date();
const banner = document.getElementById("alert");
if (dayOfWeek.getDay() == 5) {
    banner.style.display = "content";
} else {
    banner.style.display = "none";
}