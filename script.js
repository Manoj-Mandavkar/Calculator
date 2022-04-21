let calculateBtn = document.getElementById("calculate-btn");
let result = document.getElementById("result");
var c=0;
let calculate = () => {
  let p = Number(document.getElementById("principal").value);

  if(p>0 && p<=1500){
    var b=Math.round(p/2);
    c=0;
}
else if(p>=1501 && p<=3000){
    var b=Math.round(p/4);
     c=b*3;
    
}
else{
    alert("length its too short or too Long");
}

  result.innerHTML = `<div>Length1: <span>${b.toFixed(0)}</span></div>
  <div>Length2: <span>${c.toFixed(0)}</span></div>`;
};
calculateBtn.addEventListener("click", calculate);

