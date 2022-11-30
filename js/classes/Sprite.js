class Sprite {
  constructor({ position = { x: 0, y: 0 }, imageSrc, frames = { max: 1 } }) {
    this.position = position;
    this.image = new Image();
    this.image.src = imageSrc;
    this.frames = {
      max: frames.max,
    };
  }

  draw() {
    const crop = {
      position: {
        x: 0,
        y: 0,
      },
      width: this.image.width / this.frames.max,
      height: this.image.height,
    };
    c.drawImage(
      this.image,
      crop.position.x,
      crop.position.y,
      crop.width,
      crop.height,
      this.position.x,
      this.position.y,
      crop.width,
      crop.height
    );
  }
}
