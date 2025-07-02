document.getElementById("greetBtn").onclick = () => {
  clearLog();
  const nm = document.getElementById("name").value.trim();
  const ag = parseInt(document.getElementById("age").value,10);
  let msg = !nm||isNaN(ag)
    ? "Please enter both"
    : ag<18
      ? `Hey ${nm}, you're a teen!`
      : ag<=60
        ? `Welcome ${nm}, you're an adult!`
        : `Hello ${nm}, you're a senior citizen!`;
  log(msg);
};
