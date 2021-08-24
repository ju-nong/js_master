const images = ["0.jpg", "1.jpg", "2.jpg"];

const ranImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('./img/${ranImage}')`;
/*
const backImage = document.createElement("img");
backImage.src = `img/${ranImage}`;
backImage.id = "bg_img";

document.body.appendChild(backImage);
*/