const images = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImg = document.querySelector("body");

bgImg.style.backgroundImage = `url('/img/${chosenImage}')`;
bgImg.style.backgroundPosition = "center";
bgImg.style.backgroundRepeat = "no-repeat";
bgImg.style.backgroundSize = "cover";

// document.body.appendChild(bgImg);
// console.log(bgImg);
