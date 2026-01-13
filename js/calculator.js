btnCalc.onclick = () => {
  clearLog();
  const a=parseFloat(calcA.value),
        b=parseFloat(calcB.value),
        op=calcOp.value;
  let r;
  if(isNaN(a)||isNaN(b)) r="Invalid";
  else switch(op){
    case "+": r=a+b; break;
    case "−": r=a-b; break;
    case "×": r=a*b; break;
    case "÷": r=b? a/b:"∞"; break;
  }
  log(`${a} ${op} ${b} = ${r}`);
};
