const imgs = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const todayImg = imgs[Math.floor(Math.random()*imgs.length)];
const img = document.createElement("img");
img.src = `img/${todayImg}`;
img.classList.add("background");
document.body.appendChild(img); 