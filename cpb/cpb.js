/**
 * Animazione dei grafici circolari delle skill (circular progress bars).
 *
 * Ogni widget `.cpb-skill` contiene un `.cpb-number` con:
 *   - data-cpb-value    -> percentuale finale (0-100)
 *   - data-cpb-duration -> durata dell'animazione in ms (opzionale)
 *
 * L'animazione parte quando il widget entra nel viewport e si riavvolge
 * quando esce dal basso, così viene rigiocata allo scroll di ritorno.
 */
document.addEventListener("DOMContentLoaded", () => {
  const skills = Array.from(document.querySelectorAll(".cpb-skill"));
  if (skills.length === 0) return;

  const DEFAULT_DURATION_MS = 1200;

  // Rispetta la preferenza di sistema per le animazioni ridotte.
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /** Stato per widget: valore target, durata, progresso corrente e handle rAF. */
  const states = skills.map((skill) => {
    const numberEl = skill.querySelector(".cpb-number");
    const circleEl = skill.querySelector("circle");

    // La circonferenza vive nel CSS (--cpb-circumference): un'unica fonte di verità
    // condivisa fra il tratteggio SVG e il calcolo dell'offset qui sotto.
    const circumference =
      parseFloat(
        getComputedStyle(skill).getPropertyValue("--cpb-circumference")
      ) || 439.82;

    return {
      numberEl,
      circleEl,
      circumference,
      target: Number(numberEl?.dataset.cpbValue) || 0,
      duration: Number(numberEl?.dataset.cpbDuration) || DEFAULT_DURATION_MS,
      current: 0,
      frameId: null,
    };
  });

  /** Disegna un valore (0-100) sul widget: testo percentuale + riempimento del cerchio. */
  const render = (state, value) => {
    const { numberEl, circleEl, circumference } = state;

    if (numberEl) {
      numberEl.textContent = `${Math.round(value)}%`;
    }
    if (circleEl) {
      // A 0% l'offset copre l'intera circonferenza, a 100% si azzera (cerchio chiuso).
      circleEl.style.strokeDashoffset = String(
        circumference - (circumference / 100) * value
      );
    }
  };

  /**
   * Anima il widget dal valore corrente a `to` con un'interpolazione temporale.
   * Usa requestAnimationFrame invece di setInterval: si sincronizza col refresh
   * dello schermo, non accumula drift e si mette in pausa a tab nascosta.
   */
  const animateTo = (state, to) => {
    if (state.frameId !== null) {
      cancelAnimationFrame(state.frameId);
      state.frameId = null;
    }

    const from = state.current;
    const delta = to - from;
    if (delta === 0) return;

    if (prefersReducedMotion) {
      state.current = to;
      render(state, to);
      return;
    }

    // La durata dichiarata copre 0 -> 100; una tratta parziale dura in proporzione.
    const span = (Math.abs(delta) / 100) * state.duration;
    let startTime = null;

    const step = (timestamp) => {
      if (startTime === null) startTime = timestamp;

      const progress = span === 0 ? 1 : Math.min((timestamp - startTime) / span, 1);
      // Ease-out cubica: parte veloce e si assesta dolcemente sul valore finale.
      const eased = 1 - Math.pow(1 - progress, 3);

      state.current = from + delta * eased;
      render(state, state.current);

      if (progress < 1) {
        state.frameId = requestAnimationFrame(step);
      } else {
        state.current = to;
        state.frameId = null;
      }
    };

    state.frameId = requestAnimationFrame(step);
  };

  // Stato iniziale: tutti i contatori a zero e cerchi vuoti.
  states.forEach((state) => render(state, 0));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = skills.indexOf(entry.target);
        if (index === -1) return;

        const state = states[index];

        if (entry.isIntersecting) {
          animateTo(state, state.target);
        } else if (entry.boundingClientRect.top > 0) {
          // Uscito dal viewport verso il basso: riavvolgi per rigiocarlo al ritorno.
          animateTo(state, 0);
        }
      });
    },
    // 0.35 fa partire l'animazione quando il widget è chiaramente visibile,
    // senza pretendere che sia interamente a schermo (irraggiungibile su mobile).
    { threshold: 0.35 }
  );

  skills.forEach((skill) => observer.observe(skill));
});
