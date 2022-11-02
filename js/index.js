const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1280;
canvas.height = 768;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.onload = () => {
  animate();
};
image.src = "img/gameMap.png";

let x = 200;

function animate() {
  requestAnimationFrame(animate);

  c.drawImage(image, 0, 0);

  c.fillStyle = "red";
  c.fillRect(x, 100, 100, 100);
  x++;
}

animate();
