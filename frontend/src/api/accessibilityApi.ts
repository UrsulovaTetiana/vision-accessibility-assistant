type AccessibilityResponse = {
  type: "page" | "images";
  description: string;
};

export async function analyzeCurrentPage(): Promise<AccessibilityResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        type: "page",
        description:
          "This page contains a header, navigation menu, main content area, and several images. The layout appears to be structured and suitable for accessibility analysis.",
      });
    }, 800);
  });
}

export async function describeImages(): Promise<AccessibilityResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        type: "images",
        description:
          "The page contains product-style images. One visible item appears to be a product photo with a clean background, likely used in an online store.",
      });
    }, 800);
  });
}
