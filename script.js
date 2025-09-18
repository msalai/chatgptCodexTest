const letterValues = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 1,
  K: 2,
  L: 3,
  M: 4,
  N: 5,
  O: 6,
  P: 7,
  Q: 8,
  R: 9,
  S: 1,
  T: 2,
  U: 3,
  V: 4,
  W: 5,
  X: 6,
  Y: 7,
  Z: 8
};

const vowelSet = new Set(["A", "E", "I", "O", "U", "Y"]);
const masterNumbers = new Set([11, 22, 33]);

const numberDescriptions = {
  1: "Liderstvo, individualnost i snažna volja za postizanjem ciljeva.",
  2: "Diplomatija, saradnja i razvijena intuicija.",
  3: "Kreativnost, komunikacija i vedrina.",
  4: "Stabilnost, sistematičnost i strpljenje.",
  5: "Sloboda, promena i istraživački duh.",
  6: "Odgovornost, negovanje i snažan osećaj za harmoniju.",
  7: "Analitičnost, duhovno traganje i introvertnost.",
  8: "Ambicija, finansijska mudrost i moć manifestacije.",
  9: "Humanost, saosećajnost i univerzalna ljubav.",
  11: "Visoka intuicija, inspiracija i uloga vizionara.",
  22: "Glavni graditelj – sposobnost da velike ideje postanu stvarnost.",
  33: "Učitelj saosećanja – bezuslovna ljubav i služenje čovečanstvu."
};

const aspectCopy = {
  lifePath:
    "Životni put pokazuje glavnu lekciju i energiju tvog životnog puta. Dobija se sabiranjem cifara datuma rođenja.",
  expression:
    "Broj izražaja (destinacije) otkriva talente i potencijale koje poseduješ u punom imenu.",
  soulUrge:
    "Broj duševne želje opisuje unutrašnju motivaciju i ono što te pokreće iz srca.",
  personality:
    "Broj ličnosti predstavlja utisak koji ostavljaš na druge, kao i tvoju spoljašnju masku."
};

const form = document.getElementById("numerology-form");
const resultsSection = document.getElementById("results");
const resultsGrid = document.getElementById("results-grid");
const descriptionsContainer = document.getElementById("number-descriptions");
const errorEl = document.getElementById("form-error");

const currentYearSpan = document.getElementById("current-year");
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

function normalizeName(input) {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\uFE20-\uFE2F]/g, "")
    .replace(/[^A-Za-z\s]/g, "")
    .toUpperCase()
    .trim();
}

function sumDigits(value) {
  return value
    .toString()
    .split("")
    .reduce((acc, digit) => acc + Number(digit), 0);
}

function reduceNumber(total) {
  let value = total;

  while (value > 9 && !masterNumbers.has(value)) {
    value = sumDigits(value);
  }

  return value;
}

function calculateLifePath(dateString) {
  if (!dateString) return null;

  const digitsOnly = dateString.replace(/[^0-9]/g, "");
  if (!digitsOnly) return null;

  const total = digitsOnly.split("").reduce((acc, char) => acc + Number(char), 0);
  return reduceNumber(total);
}

function lettersToNumbers(name, filterFn = () => true) {
  const sanitized = normalizeName(name);
  const letters = sanitized.split("").filter((char) => /[A-Z]/.test(char));

  const filtered = letters.filter((char) => filterFn(char));

  if (!filtered.length) return null;

  const sum = filtered.reduce((acc, char) => acc + (letterValues[char] || 0), 0);
  return reduceNumber(sum);
}

function calculateExpression(name) {
  return lettersToNumbers(name, () => true);
}

function calculateSoulUrge(name) {
  return lettersToNumbers(name, (char) => vowelSet.has(char));
}

function calculatePersonality(name) {
  return lettersToNumbers(name, (char) => !vowelSet.has(char));
}

function buildResultCard({ title, number, description, missingNote }) {
  const article = document.createElement("article");
  article.className = "result-card";

  const header = document.createElement("div");
  header.className = "result-card__title";

  const titleEl = document.createElement("span");
  titleEl.textContent = title;

  const numberContainer = document.createElement("div");
  numberContainer.style.display = "flex";
  numberContainer.style.alignItems = "center";
  numberContainer.style.gap = "0.5rem";

  const numberEl = document.createElement("span");
  numberEl.className = "result-card__number";
  numberEl.textContent = number ?? "—";

  numberContainer.appendChild(numberEl);

  if (number != null && masterNumbers.has(number)) {
    const badge = document.createElement("span");
    badge.className = "result-card__master";
    badge.textContent = "Glavni broj";
    numberContainer.appendChild(badge);
  }

  header.append(titleEl, numberContainer);

  const descriptionEl = document.createElement("p");
  descriptionEl.className = "result-card__description";
  descriptionEl.textContent = description;

  article.append(header, descriptionEl);

  if (number == null && missingNote) {
    const note = document.createElement("p");
    note.className = "result-card__note";
    note.textContent = missingNote;
    article.appendChild(note);
  }

  return article;
}

function renderNumberDescriptions(numbers) {
  descriptionsContainer.innerHTML = "";
  const uniqueNumbers = [...new Set(numbers.filter((value) => value != null))].sort(
    (a, b) => a - b
  );

  uniqueNumbers.forEach((number) => {
    const text = numberDescriptions[number];
    if (!text) return;

    const article = document.createElement("article");
    const heading = document.createElement("h4");
    heading.textContent = `Broj ${number}`;

    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    if (masterNumbers.has(number)) {
      const badge = document.createElement("span");
      badge.className = "result-card__master";
      badge.textContent = "Glavni broj";
      heading.appendChild(document.createTextNode(" "));
      heading.appendChild(badge);
    }

    article.append(heading, paragraph);
    descriptionsContainer.appendChild(article);
  });
}

function handleSubmit(event) {
  event.preventDefault();
  errorEl.textContent = "";

  const nameInput = document.getElementById("full-name");
  const birthDateInput = document.getElementById("birth-date");

  const nameValue = nameInput.value.trim();
  const dateValue = birthDateInput.value;

  if (!nameValue) {
    errorEl.textContent = "Unesi puno ime i prezime.";
    resultsSection.hidden = true;
    return;
  }

  if (!dateValue) {
    errorEl.textContent = "Odaberi datum rođenja.";
    resultsSection.hidden = true;
    return;
  }

  const normalizedName = normalizeName(nameValue);

  if (!normalizedName) {
    errorEl.textContent = "Ime mora sadržati slova.";
    resultsSection.hidden = true;
    return;
  }

  const lifePath = calculateLifePath(dateValue);
  const expression = calculateExpression(nameValue);
  const soulUrge = calculateSoulUrge(nameValue);
  const personality = calculatePersonality(nameValue);

  resultsGrid.innerHTML = "";

  const cards = [
    {
      key: "lifePath",
      title: "Životni put",
      number: lifePath,
      description: aspectCopy.lifePath,
      missingNote: "Proveri da li je datum rođenja ispravno unet."
    },
    {
      key: "expression",
      title: "Broj izražaja",
      number: expression,
      description: aspectCopy.expression,
      missingNote: "Potrebno je da ime sadrži makar jedno slovo kako bi se broj izražaja izračunao."
    },
    {
      key: "soulUrge",
      title: "Duševna želja",
      number: soulUrge,
      description: aspectCopy.soulUrge,
      missingNote: "Ime ne sadrži samoglasnike, pa broj duševne želje ne može da se izračuna."
    },
    {
      key: "personality",
      title: "Broj ličnosti",
      number: personality,
      description: aspectCopy.personality,
      missingNote: "Ime se sastoji samo od samoglasnika, pa broj ličnosti ne može da se izračuna."
    }
  ];

  const numbersForDescriptions = [];

  cards.forEach((card) => {
    if (card.number != null) {
      numbersForDescriptions.push(card.number);
    }

    const detail = buildResultCard(card);
    resultsGrid.appendChild(detail);
  });

  renderNumberDescriptions(numbersForDescriptions);

  resultsSection.hidden = false;
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

if (form) {
  form.addEventListener("submit", handleSubmit);
}
