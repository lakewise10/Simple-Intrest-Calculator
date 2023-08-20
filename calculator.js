let calculateBtn = document.getElementById("calculate-btn");
let result = document.getElementById("result");
let calculate = () => {
  let p = Number(document.getElementById("principal").value);
  let r = Number(document.getElementById("rate").value);
  let t = Number(document.getElementById("time").value);
  let duration = document.getElementById("duration").value;

  let simpleIntrest =
    duration == "year" ? (p * r * t) / 100 : (p * r * t) / 1200;
  let amount = p * simpleIntrest;

  result.innerHTML = `<div>Principal Amount: <span>₦${p.toFixed(2)}</span></div>
  <div>Total Intrest: <span>₦${simpleIntrest.toFixed(2)}</span></div>
  <div>Total Amount: <span>₦${amount.toFixed(2)}</span></div>`;

  //   console.log(p, r, t, duration);
};

calculateBtn.addEventListener("click", calculate);
window.addEventListener("load", calculate);
