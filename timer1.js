//<<NOTE>> '\x07' DOES NOT WORK FOR MACBOOK M1

let timers = (process.argv.slice(2, process.argv.length));      // Takes input numbers AS STRINGS >> convert to numbers later

const timerSetup = (timingArray) => {

  for (let index in timingArray) {
    if (timingArray[index] < 1 || isNaN(timingArray[index])) {  //Loops through input array, removes any NaN values, or numbers less than 1
      timingArray.splice(index, 1);
    }
  }

  if (timers.length === 0) {
    console.log("No Valid Timers Set");                         //Checks to make sure string has values left in it.  If no, log an error
    return;
  }

  timers = timers.map(num => Number(num));                      //Uses map to swap strings to numbers >> map callback takes each element, runs Number() on it

  timers.forEach(num => setTimeout(() => {                      //forEach calls anon function which takes element, setsTimeout delay to 1000 * element, logs BEEP
    process.stdout.write(`**BEEP** ${num} seconds have passed \n`);
  }, num * 1000));
  return;
};

timerSetup(timers);