btnAdd.onclick = () => {
  clearLog();
  log("Sum:", +addA.value + +addB.value);
};

btnSqr.onclick = () => {
  clearLog();
  log("Squared:", +sqrN.value * +sqrN.value);
};

btnGreetFn.onclick = () => {
  clearLog();
  const nm=fnName.value.trim();
  log(nm ? `Hello, ${nm}!` : "Enter Name");
};
