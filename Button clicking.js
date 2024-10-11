window.onload = function clicker() {
  var count = 0;
  var massege = "You've cliked";
  div = document.getElementById("message");
  button = document.getElementById("clickme");
  button.onclick = function () {
    count++;
    div.innerHTML = massege + ": " + count + " times!";
  }
}