/**
 * Codice per la gestione delle animazioni dei grafici circolari delle skill
 * Questo script si attiva quando il DOM è completamente caricato
 */
document.addEventListener("DOMContentLoaded", () => {
  // Seleziona tutti gli elementi con classe 'cpb-skill' (i contenitori delle skill)
  const skills = document.querySelectorAll(".cpb-skill");

  // Inizializza tutti i contatori delle skill a '0%'
  Array.from(skills).forEach((el) => {
    el.querySelector(".cpb-number").innerText = "0%";
  });

  // Estrae i valori delle skill dagli attributi data-cpb-value
  const values = Array.from(skills).map((el) =>
    parseInt(el.querySelector(".cpb-number").dataset.cpbValue)
  );
  
  // Estrae le durate delle animazioni dagli attributi data-cpb-duration
  const durations = Array.from(skills).map((el) =>
    parseInt(el.querySelector(".cpb-number").dataset.cpbDuration) || 10 // Default a 10ms per tutti se non specificato
  );
  
  // Inizializza i contatori per ogni skill a 0
  const counters = Array.from(skills).map(() => 0);
  
  // Mappa per tenere traccia degli ID degli intervalli di animazione
  const intervalIds = new Map();

  /**
   * Avvia l'animazione in avanti per la skill specificata
   * @param {number} index - L'indice della skill nell'array skills
   */
  const animateForward = (index) => {
    // Se c'è già un'animazione in corso per questa skill, esci
    if (intervalIds.has(index)) return;

    // Calcola l'intervallo di tempo tra gli aggiornamenti per un'animazione fluida
    const intervalTime = (durations[index] * 50) / values[index];
    
    const intervalId = setInterval(() => {
      if (counters[index] >= values[index]) {
        // Se abbiamo raggiunto il valore massimo, pulisci l'intervallo
        clearInterval(intervalId);
        intervalIds.delete(index);
      } else {
        // Altrimenti incrementa il contatore e aggiorna l'UI
        counters[index]++;
        updateUI(index, counters[index]);
      }
    }, intervalTime);

    // Salva l'ID dell'intervallo per riferimento futuro
    intervalIds.set(index, intervalId);
  };

  /**
   * Avvia l'animazione all'indietro per la skill specificata
   * @param {number} index - L'indice della skill nell'array skills
   */
  const animateBackward = (index) => {
    // Se c'è già un'animazione in corso per questa skill, esci
    if (intervalIds.has(index)) return;

    // Calcola l'intervallo di tempo tra gli aggiornamenti per un'animazione fluida
    const intervalTime = (durations[index] * 50) / values[index];
    
    const intervalId = setInterval(() => {
      if (counters[index] <= 0) {
        // Se siamo tornati a zero, pulisci l'intervallo
        clearInterval(intervalId);
        intervalIds.delete(index);
      } else {
        // Altrimenti decrementa il contatore e aggiorna l'UI
        counters[index]--;
        updateUI(index, counters[index]);
      }
    }, intervalTime);

    // Salva l'ID dell'intervallo per riferimento futuro
    intervalIds.set(index, intervalId);
  };

  /**
   * Aggiorna l'interfaccia utente per una specifica skill
   * @param {number} index - L'indice della skill da aggiornare
   * @param {number} value - Il nuovo valore da visualizzare
   */
  const updateUI = (index, value) => {
    const skill = skills[index];
    const numberElement = skill.querySelector(".cpb-number");
    const circle = skill.querySelector("circle");

    // Aggiorna il testo della percentuale
    numberElement.innerText = value + "%";
    
    // Calcola e applica l'offset del tratto per l'effetto di riempimento del cerchio
    // 472 è la circonferenza approssimativa del cerchio (2 * π * raggio)
    const strokeDashoffset = 500 - (472 / 100) * value;
    circle.style.strokeDashoffset = strokeDashoffset;
  };

  // Crea un IntersectionObserver per rilevare quando le skill entrano/escono dalla viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Trova l'indice della skill corrente nell'array skills
        const index = Array.from(skills).indexOf(entry.target);

        if (entry.isIntersecting && entry.intersectionRatio === 1) {
          // Se la skill è completamente visibile nella viewport, avvia l'animazione in avanti
          animateForward(index);
        } else if (
          !entry.isIntersecting &&
          entry.boundingClientRect.bottom > window.innerHeight
        ) {
          // Se la skill è uscita dalla viewport verso il basso, avvia l'animazione all'indietro
          animateBackward(index);
        }
      });
    },
    {
      // Soglie di intersezione: 0.5 (50% visibile) e 1 (100% visibile)
      threshold: [0.1, 1],
    }
  );

  // Inizia a osservare ogni elemento skill
  skills.forEach((skill) => observer.observe(skill));

  // Inizializza lo stile dei cerchi
  const circles = document.querySelectorAll("circle");
  circles.forEach((circle) => {
    // Imposta la lunghezza del tratto e nasconde inizialmente il cerchio
    circle.style.strokeDasharray = "472";
    circle.style.strokeDashoffset = "472";
  });
});
