const fs = require("fs-extra");
const concat = require("concat");

const build = async () => {
  const files = [
    "./dist/web-component/runtime-es2015.js",
    "./dist/web-component/polyfills-es2015.js",
    "./dist/web-component/styles-es2015.js",
    "./dist/web-component/vendor-es2015.js",
    "./dist/web-component/main-es2015.js",
  ];

  await fs.ensureDir("dist/web-component");
  await concat(files, "web-component-demo/web-component.js");
  console.log("Files concatenated successfully!!!");
};
build();
