alert("WELCOME TO THE ONLINE SIMPLE CALCULATOR!");

function calculation() {
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var op = document.querySelector("operator").value;
    var calculate;

    if (op == "add") {
        calculate =  a + b;
    } else if (op == "min") {
        calculate = a - b;
    } else if (op == "div") {
        calculate = a / b;
    } else if (op == "mul") {
        calculate = a * b;
    }

    document.querySelector("#result").innerHTML = calculate;
}

function greaterThan (x, y) {
    if (a < b) {
        return true;
      } else {
        return false;
      }
}

function myName(name, surname) {
 console.log("ernest" + " chigweremba");
}

myName()

function addNumbers(d, e) {
  let z = 4
  let t = 5
  console.log(z + t);
}

addNumbers()

