// const bannerImg = document.getElementById("banner-img");

// const leftBtn = document.querySelector(".left-arrow");
// const rightBtn = document.querySelector(".right-arrow");

// const images = [
//   "../assets/images/banner-1.png",
//   "../assets/images/marshall.png"
// ];

// let index = 0;

// // RIGHT BUTTON
// rightBtn.addEventListener("click", () => {
//   index++;

//   if (index >= images.length) {
//     index = 0;
//   }

//   bannerImg.src = images[index];
// });

// // LEFT BUTTON
// leftBtn.addEventListener("click", () => {
//   index--;

//   if (index < 0) {
//     index = images.length - 1;
//   }

//   bannerImg.src = images[index];
// });


const bannerImg = document.getElementById("banner-img");

const leftBtn = document.querySelector(".left-arrow");
const rightBtn = document.querySelector(".right-arrow");

const images = [
  "../assets/images/banner-1.png",
  "../assets/images/marshall.png"
];

let index = 0;

// Function to change image with animation
function changeImage() {
  bannerImg.classList.remove("fade");

  // Restart animation
  void bannerImg.offsetWidth;

  bannerImg.src = images[index];
  bannerImg.classList.add("fade");
}

// RIGHT BUTTON
rightBtn.addEventListener("click", () => {
  index++;

  if (index >= images.length) {
    index = 0;
  }

  changeImage();
});

// LEFT BUTTON
leftBtn.addEventListener("click", () => {
  index--;

  if (index < 0) {
    index = images.length - 1;
  }

  changeImage();
});

setInterval(() => {
  index++;

  if (index >= images.length) {
    index = 0;
  }

  changeImage();
}, 3000);



const productLinks = document.querySelectorAll(".pet a");

productLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Stop immediate redirect

    const img = this.querySelector("img");

    img.classList.add("click-animation");

    setTimeout(() => {
      window.location.href = this.href;
    }, 300); // Redirect after animation
  });
});