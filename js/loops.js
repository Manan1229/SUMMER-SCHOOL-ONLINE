document.getElementById("runFor").onclick = () => {
  clearLog();
  const s=+forStart.value, e=+forEnd.value;
  log(`For ${s}→${e}:`);
  for(let i=s;i<=e;i++) log(i);
};

document.getElementById("runWhile").onclick = () => {
  clearLog();
  const s=+whileStart.value, e=+whileEnd.value;
  log(`While even ${s}→${e}:`);
  let i=s;
  while(i<=e){ if(i%2===0) log(i); i++; }
};

document.getElementById("runDo").onclick = () => {
  clearLog();
  let i=+doStart.value, e=+doEnd.value;
  log(`Do…While ${i}→${e}:`);
  do{ log(i); i--; } while(i>=e);
};
