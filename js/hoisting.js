log("hoistedVar before:", hoistedVar);
var hoistedVar = 5;
log("hoistedVar after:", hoistedVar);

try {
  log("hoistedLet before:", hoistedLet);
} catch (e) {
  log("Error:", e.message);
}
let hoistedLet = 10;
log("hoistedLet after:", hoistedLet);
