const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
let x = connect();
setupInput(x);
