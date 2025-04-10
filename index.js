// Oscuramento dello sfondo let darkness = 255; const bgInterval = setInterval(() => { if (darkness <= 0) { clearInterval(bgInterval); return; } darkness--; document.body.style.backgroundColor = rgb(${darkness}, ${darkness}, ${darkness}); }, 1000);

// Nomi alternativi const names = { giacomo: ["Giacomo", "Giorgio", "Giovanni", "Giulio", "Gabriele", "Giuseppe"], rosanna: ["Rosanna", "Rosalia", "Marianna", "Giovanna", "Raffaella", "Adriana"] };

const currentIndex = { giacomo: 0, rosanna: 0 };

function isOutOfViewport(el) { const rect = el.getBoundingClientRect(); return ( rect.bottom < 0 || rect.top > (window.innerHeight || document.documentElement.clientHeight) ); }

function rotateName(id, list, indexObj) { const el = document.getElementById(id); if (!el) return; if (!isOutOfViewport(el)) return; indexObj[id] = (indexObj[id] + 1) % list.length; el.textContent = list[indexObj[id]]; }

setInterval(() => { rotateName("giacomo", names.giacomo, currentIndex); rotateName("rosanna", names.rosanna, currentIndex); }, 10000);

// Attiva l'animazione del titolo dopo 10 secondi setTimeout(() => { document.getElementById("titolo").classList.add("flicker"); }, 10000);

// Cambia tutte le "a" in "â" dopo 17 secondi, poi torna normale dopo 5 secondi setTimeout(() => { const main = document.getElementById("contenuto"); main.dataset.original = main.innerHTML; main.innerHTML = main.innerHTML.replace(/a/g, "â"); }, 17000);

setTimeout(() => { const main = document.getElementById("contenuto"); if (main.dataset.original) { main.innerHTML = main.dataset.original; } }, 22000);

// Caricamento asincrono del contenuto narrativo fetch('racconto.txt') .then(response => response.text()) .then(data => { document.getElementById("contenuto").innerHTML = data; }) .catch(error => { document.getElementById("contenuto").innerHTML = "Errore nel caricamento del racconto."; console.error("Errore nel caricamento del file:", error); });

