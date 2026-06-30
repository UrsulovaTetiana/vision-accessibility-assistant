const manifest = {
  manifest_version: 3,
  name: "AI Accessibility Assistant",
  version: "0.1.0",

  action: {
    default_popup: "index.html",
  },

  permissions: ["activeTab", "tabs", "scripting"],

  host_permissions: ["<all_urls>"],

  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["src/content/contentScript.ts"],
    },
  ],
};

export default manifest;
