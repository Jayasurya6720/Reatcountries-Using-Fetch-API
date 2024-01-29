var container = document.createElement("div")
container.className="container";
container.id="ct";


var row = document.createElement("div")
row.classList=("row");

container.append(row);

var res = fetch("https://restcountries.com/v3.1/all");
var final = res.then((data)=>data.json()).then((data1)=>foo(data1));


function foo(data1){
  for(var i=0;i<data1.length;i++){
    console.log(data1[i])
    row.innerHTML+= `<div class="col-lg-4" >
    <div class="card" style="width: 18rem;">
    <div class="card-header" >
     <h5> ${data1[i].name.common} <h5>
    </div>
    <div class="card-body">
    <img src="${data1[i].flags.svg}" class="card-img-top" alt="...">
      <p class="card-text">Capital:- ${data1[i].capital}</p>
      <p class="card-text">Region:- ${data1[i].region}</p>
      <p class="card-text">Country codes:- ${data1[i].fifa}</p>
      <a href="#" class="btn btn-primary">Click for Weather</a>
    </div>
  </div>
  </div>`
  } document.body.append(container);
}