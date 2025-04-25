
let mybutton = document.getElementsByClassName("fa-solid");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", () => {
  const favicon = document.querySelector(".favicon");
  const navList = document.querySelector(".navigation--bar ul");

  favicon.addEventListener("click", () => {
    navList.classList.toggle("show");
  });
});