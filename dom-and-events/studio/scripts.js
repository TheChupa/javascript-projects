// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load" , () => {


    let altitude = 0;
    let rocketPosX = 0;
    let rocketPosY = 0;

const takeOff = document.querySelector("#takeoff");
const land = document.querySelector("#landing");
const abort = document.querySelector("#missionAbort");
// const up = document.querySelector("#up");
// const down = document.querySelector("#down");
// const right = document.querySelector("#right");
// const left = document.querySelector("#left");

const flightStatus = document.querySelector("#flightStatus");
const shuttleBackground = document.querySelector("#shuttleBackground");
const shuttleHeight = document.querySelector("#spaceShuttleHeight");
const rocket = document.querySelector("#rocket")
rocket.style.position = "abolute"
rocket.style.top = "50px"

takeOff.addEventListener("click", (event) => {
let shouldTakeoff = confirm(`\n Are you sure this is ready to take off?\n`);
    if(!shouldTakeoff){
    event.preventDefault();
    return;
}
flightStatus.innerHTML = "Shuttle in flight.";
shuttleBackground.style.background = "blue";
shuttleHeight.textContent = 10000;

});

land.addEventListener("click" , (event) => {
    if (shuttleBackground.style.background ===  "green") {
        alert("\n You're still on the ground. Touch some grass");
    return;
    }
    alert(`\nThe shuttle is landing. Landing gear engaged.\n`);
    
    flightStatus.innerHTML = "The shuttle has landed";
    shuttleBackground.style.background = "green"
    shuttleHeight.innerHTML = 0 ;
   });

abort.addEventListener("click", (event) => {
    let shouldAbort = confirm(`\nAre you sure you want to abort?\n Lots of hard work went into this`);
    if(!shouldAbort) {
        event.preventDefault();
        return;
    }
flightStatus.innerHTML = "Mission aborted";
shuttleBackground.style.background = "green"
shuttleHeight.innerHTML = 0;
});

// up.addEventListener("click", () => {
//     if (parseInt(shuttleHeight.innerHTML) === 0) {
//         alert(`\n You have to take off first!`)
//         return;
//     }
//     let currentHeight = shuttleHeight.innerHTML
//     shuttleHeight.innerHTML = parseInt(currentHeight) + 10000

// });

// down.addEventListener("click", () =>{
//     if (parseInt(shuttleHeight.innerHTML) === 0) {
//         alert(`\n You crashed your ship!`)
//         return;
//     } 
    
//     if (parseInt(flightStatus.innerHTML) <= 10000) {
//         alert(`There is no room to go down`);
//         return;
//         }
    
//     let currentHeight = shuttleHeight.innerHTML
//     shuttleHeight.innerHTML = parseInt(currentHeight) - 10000



// });
// });

document.addEventListener("click", function(event) {
    let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));
    
    if (event.target.id === "left" && rocketPosX > -(bkgWidth / 2) - 40) {
      rocketPosX -= 10;
      rocket.style.marginLeft = rocketPosX + 'px';
    }
    if (event.target.id === "right" && rocketPosX < (bkgWidth / 2 - 40)) {
      rocketPosX += 10;
      rocket.style.marginLeft = rocketPosX + 'px';
    }
    if (event.target.id === "up" && altitude < 250000) {
      rocketPosY += 10;
      rocket.style.marginBottom = rocketPosY + 'px';
      altitude += 10000;
      spaceShuttleHeight.innerHTML = altitude;
    }
    if (event.target.id === "down" && altitude > 0) {
      rocketPosY -= 10;
      rocket.style.marginBottom = rocketPosY + 'px';
      altitude -= 10000;
      spaceShuttleHeight.innerHTML = altitude;
    }

  });
 });
