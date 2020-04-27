function gotopage1(){
  document.getElementById("page1").style = "display: block;"
  document.getElementById("page2").style = "display: none;"
  document.getElementById("page3").style = "display: none;"
}

function gotopage2(){
  document.getElementById("page1").style = "display: none;"
  document.getElementById("page2").style = "display: block;"
  document.getElementById("page3").style = "display: none;"
}

function gotopage3(){
document.getElementById("page1").style = "display: none;"
document.getElementById("page2").style = "display: none;"
document.getElementById("page3").style = "display: block;"
}

let distances = {

  "gateA" : 200,

  "gateB" : 500,

  "gateC" : 1500,

  "dutyfree" : 700,
}

function calculatetime() {

  let v = 10
  
  let current_gate = document.getElementById("currentgateid");

  let middle_point = document.getElementById("middlepointid");

  let target_gate = document.getElementById("targetgateid");

  let currentgate = distances[current_gate];

  let middlepoint = distances[middle_point];

  let targetgate = distances[target_gate];
  
  console.log(currentgate)
  console.log(middlepoint)
  console.log(targetgate)
  console.log((Math.abs(currentgate + middlepoint - targetgate))/v) 
}

function showfloors() {

  let time = parseFloat(document.getElementById("availabletime").value)
      
  let lessthan15min = parseInt(document.getElementById("less_than_15_minutes").innerHTML)

  let hour_1 = parseInt(document.getElementById("1hour").innerHTML)

  let hours_2 = parseInt(document.getElementById("2hours").innerHTML)

  let hours_3 = parseInt(document.getElementById("3hours").innerHTML)

  let morethan3hours = parseInt(document.getElementById("more_than_3_hours").innerHTML)

      if (time == lessthan15min)
      {showfloors = "-3"}

      if (time == hour_1)
      {showfloors = "-2"}

      if (time == hours_2) 
      {showfloors = "-1"}

      if (time == hours_3)
      {showfloors = "0"}
      
      if (time == morethan3hours) 
      {showfloors = "1"}

  let display = document.getElementById("avfloors");
  display.innerHTML= 'OK' + showfloors;

  document.getElementById("avfloors").innerHTML = display

}
