btnCb.onclick = () => {
  clearLog();
  const n=+cbNum.value, t=cbType.value;
  const res = t==="double" ? n*2 : n*3;
  log(`${t} of ${n} is ${res}`);
};
