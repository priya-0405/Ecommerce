// dropdown 
const arrow = document.getElementById("arrow");
const dropmenu = document.querySelector(".drop");
const dropdown = document.querySelector(".dropdown");
arrow.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.classList.toggle("show");
  arrow.classList.toggle("rotate");
});
dropmenu.addEventListener("click",(e)=>{
    e.stopPropagation();
    dropdown.classList.toggle("show");
    arrow.classList.toggle("rotate");
})
document.addEventListener("click", (e) => {
  if (!dropmenu.contains(e.target)) {
    dropdown.classList.remove("show");
     arrow.classList.remove("rotate");
  }
});

// image slider
const banners = document.querySelectorAll(".banner");
const leftBtn = document.querySelector(".left-arrow");
const rightBtn = document.querySelector(".right-arrow");
const line1 = document.querySelector(".slider-line");
const line2 = document.querySelector(".sliders-line");

let index = 0;
function showBanner() {
    banners.forEach(function (banner) {
        banner.classList.remove("active-banner");
    });
    banners[index].classList.add("active-banner");
    if (index === 0) {
        line1.classList.add("active");
        line2.classList.remove("active");
    } else {
        line2.classList.add("active");
        line1.classList.remove("active");
    }
}
rightBtn.onclick = function () {
    index++;
    if (index >= banners.length) {
        index = 0;
    }
    showBanner();
};
leftBtn.onclick = function () {
    index--;
    if (index < 0) {
        index = banners.length - 1;
    }
    showBanner();
};
line1.onclick = function () {
    index = 0;
    showBanner();
};
line2.onclick = function () {
    index = 1;
    showBanner();
};

showBanner();

// load more products
const loadBtn = document.getElementById("load");
const products = document.querySelectorAll(".card a");
let current = 0;
const showCount = 5;
loadBtn.onclick = function () {
    for (let i = current; i < current + showCount && i < products.length; i++) {
        products[i].style.display = "block";
    }
    current += showCount;
    if (current >= products.length) {
        loadBtn.style.display = "none";
    }
};
