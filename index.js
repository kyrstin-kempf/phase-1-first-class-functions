/* 
// workouts
function runFiveMiles() {
  console.log("Go for a five-mile run");
}
function liftWeights() {
  console.log("Pump iron");
}
function swimFortyLaps() {
  console.log("Swim 40 laps");
}

// first constant second variable activity
function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}
function Monday() {
    exerciseRoutine(liftWeights);
}
exerciseRoutine(() => console.log("Stretch! Work that core!"));
*/

// DEFINE FUNCTION ACTIVITIES
function takeOutTrash() {
    console.log("Take out the stink");
  }
function mopFloors() {
    console.log("Cinderella?");
}
// FUNCTION WITH CALLBACK FUNCTION
function receivesAFunction(callback) {
    takeOutTrash();
    callback();
}
function Friday() {
    receivesAFunction(mopFloors);
}
// -------------------- FUNCTION IN A FUNCTION
function returnsANamedFunction() {
    return function named () {
        console.log('Testing, testing.');
    };
}
// --------------------- ANON FUNCTION
function returnsAnAnonymousFunction() {
    return function () {
        console.log(`Yipee!`);
    };
}