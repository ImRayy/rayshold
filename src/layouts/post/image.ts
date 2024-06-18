// Set width of image based on alt, inspired by obsidian
export function setImageSizeLikeObsidian() {
  const imageNodes = document.querySelectorAll("img");
  imageNodes.forEach((image) => {
    const imgAlt = image.alt.split("|");
    const width = parseInt(imgAlt[1] ?? "0");
    if (width !== 0) {
      image.width = width;
    }
  });
}
