console.log("AI Accessibility Assistant content script loaded");

const images = Array.from(document.querySelectorAll("img"));

const imageData = images.map((image) => ({
  src: image.src,
  alt: image.alt,
  title: image.title,
  width: image.width,
  height: image.height,
}));

console.log("Images found on page:", imageData);
