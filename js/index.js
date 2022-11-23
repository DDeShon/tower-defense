const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1280;
canvas.height = 768;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

const buildingTilesData2D = [];

for (let i = 0; i < buildingTilesData.length; i += 20) {
  buildingTilesData2D.push(buildingTilesData.slice(i, i + 20));
}

const buildingTiles = [];

buildingTilesData2D.forEach((row, y) => {
  row.forEach((symbol, x) => {
    if (symbol === 14) {
      // add building placement tile here
      buildingTiles.push(
        new BuildingTile({
          position: {
            x: x * 64,
            y: y * 64,
          },
        })
      );
    }
  });
});

// console.log(buildingTiles);

const image = new Image();
image.onload = () => {
  animate();
};
image.src = "img/gameMap.png";

const enemies = [];
for (let i = 1; i < 10; i++) {
  const xOffset = i * 150;
  enemies.push(
    new Enemy({
      position: { x: waypoints[0].x - xOffset, y: waypoints[0].y },
    })
  );
}

function animate() {
  requestAnimationFrame(animate);

  c.drawImage(image, 0, 0);
  enemies.forEach((enemy) => {
    enemy.update();
  });

  buildingTiles.forEach((tile) => {
    tile.update(mouse);
  });
}

const mouse = {
  x: undefined,
  y: undefined,
};

window.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

animate();
