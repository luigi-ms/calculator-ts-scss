const sass = require('sass');

const result = sass.compile("./style/main.scss");
console.log(result.css);
