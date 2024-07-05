const numbers = document.getElementsByClassName("cpb-number");
const circles = document.getElementsByTagName("circle");

// Invece di fare il for con il push degli elementi nell'array vuoto, uso direttamente il metodo map
const values = Array.from(numbers).map((value) =>
  parseInt(value.dataset.cpbValue)
);
const durations = Array.from(numbers).map((value) =>
  parseInt(value.dataset.cpbDuration)
);
const counters = Array.from(numbers).map(() => 0);

// console.log(values);
// console.log(durations);
// console.log(counters);

for (let i = 0; i < numbers.length; i++) {
  const intervalId = setInterval(() => {
    if (counters[i] === values[i]) {
      clearInterval(intervalId);
    } else {
      counters[i] += 1;
      numbers[i].innerText = counters[i] + "%";
      document.documentElement.style.setProperty(
        `--pcbValue${intervalId}`,
        472 - (472 / 100) * values[i]
      );
    }
  }, durations[i]);
}
