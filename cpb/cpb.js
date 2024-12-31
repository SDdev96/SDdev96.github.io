document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".cpb-skill");

  Array.from(skills).map((el) => {
    el.querySelector(".cpb-number").innerText = "0%";
  });

  const values = Array.from(skills).map((el) =>
    parseInt(el.querySelector(".cpb-number").dataset.cpbValue)
  );
  const durations = Array.from(skills).map((el) =>
    parseInt(el.querySelector(".cpb-number").dataset.cpbDuration)
  );
  const counters = Array.from(skills).map(() => 0);
  const intervalIds = new Map(); // Mappa per gli interval di animazione

  // Funzione per avviare l'animazione in avanti
  const animateForward = (index) => {
    if (intervalIds.has(index)) return; // Evita duplicazioni

    const intervalId = setInterval(() => {
      if (counters[index] >= values[index]) {
        clearInterval(intervalId);
        intervalIds.delete(index);
      } else {
        counters[index]++;
        updateUI(index, counters[index]);
      }
    }, (durations[index] * 50) / values[index]);

    intervalIds.set(index, intervalId);
  };

  // Funzione per avviare l'animazione al contrario
  const animateBackward = (index) => {
    if (intervalIds.has(index)) return; // Evita duplicazioni

    const intervalId = setInterval(() => {
      if (counters[index] <= 0) {
        clearInterval(intervalId);
        intervalIds.delete(index);
      } else {
        counters[index]--;
        updateUI(index, counters[index]);
      }
    }, (durations[index] * 50) / values[index]);

    intervalIds.set(index, intervalId);
  };

  // Funzione per aggiornare l'interfaccia utente
  const updateUI = (index, value) => {
    const skill = skills[index];
    const numberElement = skill.querySelector(".cpb-number");
    const circle = skill.querySelector("circle");

    numberElement.innerText = value + "%";
    const strokeDashoffset = 472 - (472 / 100) * value;
    circle.style.strokeDashoffset = strokeDashoffset;
  };

  // Crea l'observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = Array.from(skills).indexOf(entry.target);

        if (entry.isIntersecting && entry.intersectionRatio === 1) {
          // L'elemento è completamente visibile nella viewport
          animateForward(index);
        } else if (
          !entry.isIntersecting &&
          entry.boundingClientRect.bottom > window.innerHeight
        ) {
          // L'elemento è uscito completamente dalla parte inferiore della viewport
          animateBackward(index);
        }
      });
    },
    {
      threshold: [0.5, 1], // Osserva entrambi i valori di soglia
    }
  );

  // Aggiungi gli elementi da osservare
  skills.forEach((skill) => observer.observe(skill));

  // Imposta il valore iniziale degli stili per i cerchi
  const circles = document.querySelectorAll("circle");
  circles.forEach((circle) => {
    circle.style.strokeDasharray = "472";
    circle.style.strokeDashoffset = "472"; // Nasconde inizialmente il cerchio
  });
});
