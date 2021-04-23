/*const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = function () {
    if (window.innerWidth > 760)
        mainnav.classList.remove('responsive');
};*/

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
  }
  