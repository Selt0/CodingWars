// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

function bump(x) {
  const bumpsLeft = 15

  let bumpsOnRoad = x.split('').filter(letter => letter == 'n').length
  return bumpsLeft < bumpsOnRoad ? "Car Dead" : "Woohoo!"
}

// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.
var SequenceSum = (function () {
  function SequenceSum() { }

  SequenceSum.showSequence = function (count) {
    let string = ''
    let sum = 0
    if (count == 0) return '0=0'
    if (count < 0) return `${count}<0`
    for (let i = 0; i <= count; i++) {
      if (i == count) {
        sum += i
        string += `${i} = ${sum}`
      } else {
        sum += i
        string += `${i}+`
      }
    }
    return string
  };

  return SequenceSum;

})();
