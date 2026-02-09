export function createCountrySelector(containerId) {
  const countries = [
    { code: "CA", name: "Canada", flag: "Drapeaux/Canada.png" },
    { code: "FR", name: "France", flag: "Drapeaux/France.png" },
    { code: "BE", name: "Belgique", flag: "Drapeaux/Belgique.svg" },
    { code: "CH", name: "Suisse", flag: "Drapeaux/Suisse.png" },
    { code: "US", name: "États-Unis", flag: "Drapeaux/Etats_Unis.png" },
    { code: "UK", name: "Royaume-Uni", flag: "Drapeaux/Royaume-Uni.png" }
  ];

  const container = document.getElementById(containerId);
  let selectedCountry = null;

  container.classList.add("country-selector");

  container.innerHTML = `
    <button type="button" class="country-selected">
      Choisir un pays
    </button>
    <ul class="country-list hidden"></ul>
    <input type="hidden" name="country">
  `;

  const button = container.querySelector(".country-selected");
  const list = container.querySelector(".country-list");
  const hiddenInput = container.querySelector("input");

  countries.forEach(country => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${country.flag}" alt="${country.name}">
      <span>${country.name}</span>
    `;
    li.addEventListener("click", () => {
      selectedCountry = country.code;
      hiddenInput.value = country.code;
      button.innerHTML = `
        <img src="${country.flag}" alt="${country.name}">
        ${country.name}
      `;
      list.classList.add("hidden");
    });
    list.appendChild(li);
  });

  button.addEventListener("click", () => {
    list.classList.toggle("hidden");
  });

  return {
    getValue() {
      return selectedCountry;
    }
  };
}
