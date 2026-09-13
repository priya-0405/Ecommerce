// cart
let cart1 = document.getElementById("less");
let cart2 = document.getElementById("more");
let increase = document.getElementById("btn");
let count = 1;
cart2.addEventListener("click", () => {
    count++;
    if (count < 10) {
        increase.innerHTML = "0" + count;
    } else {
        increase.innerHTML = count;
    }
});
cart1.addEventListener("click", () => {
    if (count > 1) {
        count--;
    }
    if (count < 10) {
        increase.innerHTML = "0" + count;
    } else {
        increase.innerHTML = count;
    }
});

// seater
let seaters = document.querySelectorAll(".seater button");
seaters.forEach((button) => {
    button.addEventListener("click", () => {
        seaters.forEach((btn) => {
          btn.style.color="black";
        })
        button.style.color="rgba(0, 0, 0, 0.2)";
    })
})

// showimage-in big
// imageslider
const right = document.querySelector(".right-arrow");
const left = document.querySelector(".left-arrow");
const images = document.querySelectorAll("#images img");
const fullimg = document.querySelector(".sofa-img img");
let start = 0;
const showCount = 3;
function showImages() {
    images.forEach(img => img.style.display = "none");

    for (let i = start; i < start + showCount && i < images.length; i++) {
        images[i].style.display = "block";
    }
}
images[0].style.border = "2px solid #102C57";
fullimg.src = images[0].src;
right.onclick = function () {
    if (start < images.length - showCount) {
        start++;
        showImages();
    }
};
left.onclick = function () {
    if (start > 0) {
        start--;
        showImages();
    }
};
images.forEach(img => {
    img.onclick = function () {
        images.forEach(item => {
            item.style.border = "1px solid #D1D5D8";
        });
        this.style.border = "2px solid #102C57";
        fullimg.src = this.src;
    };
});

showImages();

// product description
const product = document.getElementById("products");
const review = document.getElementById("customers");
const text = document.querySelector(".text-sofa");
const premium = document.querySelector(".premium");
const customer = document.querySelector(".customer");
const line = document.querySelector(".small-line");

product.onclick = function () {
    text.style.display = "block";
    premium.style.display = "block";
    customer.style.display = "none";

    product.style.color = "#252B42";
    review.style.color = "#BDBDBD";
    line.style.marginLeft = "0px";
};
// Customer Reviews
review.onclick = function () {
    text.style.display = "none";
    premium.style.display = "none";
    customer.style.display = "block";

    review.style.color = "#252B42";
    product.style.color = "#BDBDBD";
    line.style.marginLeft = "255px"; 
};
