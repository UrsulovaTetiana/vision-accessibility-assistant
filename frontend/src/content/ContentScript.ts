type PageImage = {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
};

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === "GET_IMAGES") {
    const images: PageImage[] = Array.from(document.querySelectorAll("img"))
      .filter((image) => image.src)
      .map((image) => ({
        src: image.src,
        alt: image.alt || "",
        title: image.title || "",
        width: image.width,
        height: image.height,
      }));

    sendResponse({
      images,
      count: images.length,
    });
  }

  return true;
});
