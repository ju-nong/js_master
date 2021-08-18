const images = ["0.jpg", "1.jpg", "2.jpg"];

const ranImage = images[Math.floor(Math.random() * images.length)];

const backImage = document.createElement("img");
backImage.src = `img/${ranImage}`;

document.body.appendChild(backImage);