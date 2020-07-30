function show(val) {
  document.getElementById("screen").value += val;
}

function result(input) {
  var input = document.getElementById("screen").value;
  var ans = eval(input);

  document.getElementById("screen").value = ans;
}
function clr(clicked) {
  document.getElementById("screen").value = "";
}
function end() {
  document.getElementById("screen").value = "END";
}
