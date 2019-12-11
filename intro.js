

setTimeout(function() {
  changeText("This project aims to educate the audience about artwork around the world");
}, 9000);

setTimeout(function() {
  changeText("Click on each city to generate new paintings and reveal their descriptions");
}, 19000);

setTimeout(function() {
  window.location = "intro.html";
}, 29000);

function changeText(text) {
  console.log(text);
  console.log(document.getElementById('introtext'));
  document.getElementById('introtext').className = "";
  document.getElementById('introtext').children[0].innerHTML = text;
  setTimeout(function() {
    document.getElementById('introtext').className = "second-text";
  }, 10);
}
