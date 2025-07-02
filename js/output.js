function log(...args) {
  const disp = document.getElementById("output");
  if (!disp) return;
  disp.innerText += args.join(" ") + "\n";
}

function clearLog() {
  const disp = document.getElementById("output");
  if (disp) disp.innerText = "";
}
