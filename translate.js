var fs = require("fs");
console.log(fs.readFile("test.md", function (err, data) {
    return data.toString("utf8");
})



const mdFile = "test.md";
const fs = require("fs");
const content = fs.readFileSync(mdFile, "utf8");

console.log(content);

var ein = document.querySelector("test.md");
var eout = document.querySelector(".markdown");
function update() {
  eout.innerHTML = markdown(ein.value);
}
ein.addEventListener("input", update);
update();
