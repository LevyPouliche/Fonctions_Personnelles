const container = document.getElementById(containerId);

if (!container) {
  console.error(`Container #${containerId} introuvable`);
  return;
}

export function createCountrySelector(containerId) {
  const countries = [
    { code: "af", name: "Afghanistan", flag: "Drapeaux/Afghanistan.png" },
    { code: "za", name: "Afrique_Du_Sud", flag: "Drapeaux/Afrique_Du_Sud.png" },
    { code: "al", name: "Albanie", flag: "Drapeaux/Albanie.png" },
    { code: "dz", name: "Algerie", flag: "Drapeaux/Algerie.png" },
    { code: "de", name: "Allemagne", flag: "Drapeaux/Allemagne.png" },
    { code: "ad", name: "Andorre", flag: "Drapeaux/Andorre.png" },
    { code: "ao", name: "Angola", flag: "Drapeaux/Angola.png" },
    { code: "ag", name: "Antigua_Et_Barbuda", flag: "Drapeaux/Antigua_Et_Barbuda.png" },
    { code: "sa", name: "Arabie_Saoudite", flag: "Drapeaux/Arabie_Saoudite.png" },
    { code: "ar", name: "Argentine", flag: "Drapeaux/Argentine.png" },
    { code: "am", name: "Armenie", flag: "Drapeaux/Armenie.png" },
    { code: "au", name: "Australie", flag: "Drapeaux/Australie.png" },
    { code: "XX", name: "Autriche", flag: "Drapeaux/Autriche.png" },
    { code: "az", name: "Azerbaidjan", flag: "Drapeaux/Azerbaidjan.png" },
    { code: "bs", name: "Bahamas", flag: "Drapeaux/Bahamas.png" },
    { code: "bh", name: "Bahrein", flag: "Drapeaux/Bahrein.png" },
    { code: "bd", name: "Bangladesh", flag: "Drapeaux/Bangladesh.png" },
    { code: "bb", name: "Barbade", flag: "Drapeaux/Barbade.png" },
    { code: "be", name: "Belgique", flag: "Drapeaux/Belgique.png" },
    { code: "bz", name: "Belize", flag: "Drapeaux/Belize.png" },
    { code: "bj", name: "Benin", flag: "Drapeaux/Benin.png" },
    { code: "bt", name: "Bhoutan", flag: "Drapeaux/Bhoutan.png" },
    { code: "XX", name: "Bielorussie", flag: "Drapeaux/Bielorussie" },
    { code: "mm", name: "Birmanie", flag: "Drapeaux/Birmanie.png" },
    { code: "bo", name: "Bolivie", flag: "Drapeaux/Bolivie.png" },
    { code: "ba", name: "Bosnie_Herzegovine", flag: "Drapeaux/Bosnie_Herzegovine.png" },
    { code: "bw", name: "Botswana", flag: "Drapeaux/Botswana.png" },
    { code: "br", name: "Bresil", flag: "Drapeaux/Bresil.png" },
    { code: "bn", name: "Brunei", flag: "Drapeaux/Brunei.png" },
    { code: "bg", name: "Bulgarie", flag: "Drapeaux/Bulgarie.png" },
    { code: "XX", name: "Burkina_Faso", flag: "Drapeaux/Burkina_Faso.png" },
    { code: "XX", name: "Burundi", flag: "Drapeaux/Burundi.png" },
    { code: "XX", name: "Cambodge", flag: "Drapeaux/Cambodge.png" },
    { code: "XX", name: "Cameroun", flag: "Drapeaux/Cameroun.webp" },
    { code: "XX", name: "Canada", flag: "Drapeaux/Canada.png" },
    { code: "XX", name: "Cap_Vert", flag: "Drapeaux/Cap_Vert.png" },
    { code: "XX", name: "Republique_Centrafricaine", flag: "Drapeaux/Republique_Centrafricaine.webp" },
    { code: "XX", name: "Chili", flag: "Drapeaux/Chili.png" },
    { code: "XX", name: "Chine", flag: "Drapeaux/Chine.webp" },
    { code: "XX", name: "Chypre", flag: "Drapeaux/Chypre.png" },
    { code: "XX", name: "Colombie", flag: "Drapeaux/Colombie.png" },
    { code: "XX", name: "Comores", flag: "Drapeaux/Comores.png" },
    { code: "XX", name: "Congo", flag: "Drapeaux/Congo" },
    { code: "XX", name: "Republique_Democratique_Du_Congo", flag: "Drapeaux/Republique_Democratique_Du_Congo.webp" },
    { code: "XX", name: "Coree_Du_Nord", flag: "Drapeaux/Coree_Du_Nord.png" },
    { code: "XX", name: "Coree_Du_Sud", flag: "Drapeaux/Coree_Du_Sud.webp" },
    { code: "XX", name: "Costa_Rica", flag: "Drapeaux/Costa_Rica.png" },
    { code: "XX", name: "Cote_Divoire", flag: "Drapeaux/Cote_Divoire.png" },
    { code: "XX", name: "Croatie", flag: "Drapeaux/Croatie.png" },
    { code: "XX", name: "Cuba", flag: "Drapeaux/Cuba.png" },
    { code: "XX", name: "Danemark", flag: "Drapeaux/Danemark.png" },
    { code: "XX", name: "Djibouti", flag: "Drapeaux/Djibouti.png" },
    { code: "XX", name: "Dominique", flag: "Drapeaux/Dominique.png" },
    { code: "XX", name: "Egypte", flag: "Drapeaux/Egypte.png" },
    { code: "XX", name: "Emirats_Arabe_Unis", flag: "Drapeaux/Emirats_Arabe_Unis.png" },
    { code: "XX", name: "Equateur", flag: "Drapeaux/Equateur.png" },
    { code: "XX", name: "Erythree", flag: "Drapeaux/Erythree.png" },
    { code: "XX", name: "Espagne", flag: "Drapeaux/Espagne.png" },
    { code: "XX", name: "Estonie", flag: "Drapeaux/Estonie.png" },
    { code: "XX", name: "Eswatini", flag: "Drapeaux/Eswatini.png" },
    { code: "XX", name: "Etats-Unis", flag: "Drapeaux/Etats_Unis.png" },
    { code: "XX", name: "Ethiopie", flag: "Drapeaux/Ethiopie.png" },
    { code: "XX", name: "Fidji", flag: "Drapeaux/Fidji.png" },
    { code: "XX", name: "Finlande", flag: "Drapeaux/Finlande.webp" },
    { code: "XX", name: "France", flag: "Drapeaux/France.png" },
    { code: "XX", name: "Gabon", flag: "Drapeaux/Gabon.webp" },
    { code: "XX", name: "Gambie", flag: "Drapeaux/Gambie.png" },
    { code: "XX", name: "Georgie", flag: "Drapeaux/Georgie.png" },
    { code: "XX", name: "Ghana", flag: "Drapeaux/Ghana.png" },
    { code: "XX", name: "Grece", flag: "Drapeaux/Grece.png" },
    { code: "XX", name: "Grenade", flag: "Drapeaux/Grenade.png" },
    { code: "XX", name: "Guatemala", flag: "Drapeaux/Guatemala.png" },
    { code: "XX", name: "Guinee", flag: "Drapeaux/Guinee.png" },
    { code: "XX", name: "Guinee_Equatoriale", flag: "Drapeaux/Guinee_Equatorale.png" },
    { code: "XX", name: "Guinee_Bissau", flag: "Drapeaux/Guinee_Bissau.png" },
    { code: "XX", name: "Guyana", flag: "Drapeaux/Guyana.png" },
    { code: "XX", name: "Haiti", flag: "Drapeaux/Haiti.png" },
    { code: "XX", name: "Honduras", flag: "Drapeaux/Honduras.png" },
    { code: "XX", name: "Hongrie", flag: "Drapeaux/Hongrie.png" },
    { code: "XX", name: "Iles_Cook", flag: "Drapeaux/Iles_Cook.png" },
    { code: "XX", name: "Iles_Marshall", flag: "Drapeaux/Marshall.png" },
    { code: "XX", name: "Inde", flag: "Drapeaux/Inde.png" },
    { code: "XX", name: "Indonesie", flag: "Drapeaux/Indoniesie.png" },
    { code: "XX", name: "Irak", flag: "Drapeaux/Irak.png" },
    { code: "XX", name: "Iran", flag: "Drapeaux/Iran.png" },
    { code: "XX", name: "Irlande", flag: "Drapeaux/Irelande.png" },
    { code: "XX", name: "Islande", flag: "Drapeaux/Islande.png" },
    { code: "XX", name: "Israel", flag: "Drapeaux/Israel.png" },
    { code: "XX", name: "Italie", flag: "Drapeaux/Italie.png" },
    { code: "XX", name: "Jamaique", flag: "Drapeaux/Jamaique.png" },
    { code: "XX", name: "Japon", flag: "Drapeaux/Japon.png" },
    { code: "XX", name: "Jordanie", flag: "Drapeaux/Jordanie.png" },
    { code: "XX", name: "Kazakhstan", flag: "Drapeaux/Kazakhstan.png" },
    { code: "XX", name: "Kenya", flag: "Drapeaux/Kenya.png" },
    { code: "XX", name: "Kirghizistan", flag: "Drapeaux/Kyrghistan.png" },
    { code: "XX", name: "Kiribati", flag: "Drapeaux/Kiribati.png" },
    { code: "XX", name: "Kosovo", flag: "Drapeaux/Kosovo.png" },
    { code: "XX", name: "Koweit", flag: "Drapeaux/Koweit.png" },
    { code: "XX", name: "Laos", flag: "Drapeaux/Laos.png" },
    { code: "XX", name: "Lesotho", flag: "Drapeaux/Lesotho.png" },
    { code: "XX", name: "Lettonie", flag: "Drapeaux/Lettonie.png" },
    { code: "XX", name: "Liban", flag: "Drapeaux/Liban.png" },
    { code: "XX", name: "Liberia", flag: "Drapeaux/Liberia.png" },
    { code: "XX", name: "Libye", flag: "Drapeaux/Libye.png" },
    { code: "XX", name: "Liechtenstein", flag: "Drapeaux/Liechtenstein.png" },
    { code: "XX", name: "Lituanie", flag: "Drapeaux/Lituanie.png" },
    { code: "XX", name: "Luxembourg", flag: "Drapeaux/Luxembourg.png" },
    { code: "XX", name: "Macedoine_Du_Nord", flag: "Drapeaux/Macedoine_Du_Nord.png" },
    { code: "XX", name: "Madagascar", flag: "Drapeaux/Madagascar.png" },
    { code: "XX", name: "Malaisie", flag: "Drapeaux/Malaisie.png" },
    { code: "XX", name: "Malawi", flag: "Drapeaux/Malawi.png" },
    { code: "XX", name: "Maldives", flag: "Drapeaux/Maldives.png" },
    { code: "XX", name: "Mali", flag: "Drapeaux/Mali.webp" },
    { code: "XX", name: "Malte", flag: "Drapeaux/Malte.png" },
    { code: "XX", name: "Maroc", flag: "Drapeaux/Maroc.webp" },
    { code: "XX", name: "Maurice", flag: "Drapeaux/Maurice.png" },
    { code: "XX", name: "Mauritanie", flag: "Drapeaux/Mauritanie.png" },
    { code: "XX", name: "Mexique", flag: "Drapeaux/Mexique.webp" },
    { code: "XX", name: "Micronesie", flag: "Drapeaux/Micronesie.png" },
    { code: "XX", name: "Moldavie", flag: "Drapeaux/Moldavie.png" },
    { code: "XX", name: "Monaco", flag: "Drapeaux/Monaco.png" },
    { code: "XX", name: "Mongolie", flag: "Drapeaux/Mongolie.png" },
    { code: "XX", name: "Montenegro", flag: "Drapeaux/Montenegro.png" },
    { code: "XX", name: "Mozambique", flag: "Drapeaux/Mozambique.png" },
    { code: "XX", name: "Namibie", flag: "Drapeaux/Namibie.png" },
    { code: "XX", name: "Nauru", flag: "Drapeaux/Nauru.png" },
    { code: "XX", name: "Nepal", flag: "Drapeaux/Nepal.png" },
    { code: "XX", name: "Nicaragua", flag: "Drapeaux/Nicaragua.png" },
    { code: "XX", name: "Niger", flag: "Drapeaux/Niger.png" },
    { code: "XX", name: "Nigeria", flag: "Drapeaux/Nigeria.webp" },
    { code: "XX", name: "Norvege", flag: "Drapeaux/Norvege.png" },
    { code: "XX", name: "Nouvelle-Zelande", flag: "Drapeaux/Nouvelle-Zelande.png" },
    { code: "XX", name: "Oman", flag: "Drapeaux/Oman.png" },
    { code: "XX", name: "Ouganda", flag: "Drapeaux/Ouganda.png" },
    { code: "XX", name: "Ouzbekistan", flag: "Drapeaux/Ouzbekistan.png" },
    { code: "XX", name: "Pakistan", flag: "Drapeaux/Pakistan.png" },
    { code: "XX", name: "Palaos", flag: "Drapeaux/Palaos.png" },
    { code: "XX", name: "Palestine", flag: "Drapeaux/Palestine.png" },
    { code: "XX", name: "Panama", flag: "Drapeaux/Panama.png" },
    { code: "XX", name: "Papouasie_Nouvelle-Guinee", flag: "Drapeaux/Papouasie_Nouvelle-Guinee.png" },
    { code: "XX", name: "Paraguay", flag: "Drapeaux/Paraguay.png" },
    { code: "XX", name: "Pays-Bas", flag: "Drapeaux/Pays-Bas.png" },
    { code: "XX", name: "Perou", flag: "Drapeaux/Perou.png" },
    { code: "XX", name: "Philippines", flag: "Drapeaux/Philippines.png" },
    { code: "XX", name: "Pologne", flag: "Drapeaux/Pologne.png" },
    { code: "XX", name: "Portugal", flag: "Drapeaux/Portugal.png" },
    { code: "XX", name: "Qatar", flag: "Drapeaux/Quatar.png" },
    { code: "XX", name: "Republique_Dominicaine", flag: "Drapeaux/Republique_Dominicaine.png" },
    { code: "XX", name: "Republique_Tcheque", flag: "Drapeaux/Republique_Tcheque.png" },
    { code: "XX", name: "Roumanie", flag: "Drapeaux/Roumanie.png" },
    { code: "XX", name: "Royaume-Uni", flag: "Drapeaux/Royaume-Uni.png" },
    { code: "XX", name: "Russie", flag: "Drapeaux/Russie.png" },
    { code: "XX", name: "Rwanda", flag: "Drapeaux/Rwanda.png" },
    { code: "XX", name: "Saint-Kitts-et-Nevis", flag: "Drapeaux/Saint-Kitts-et-Nevis.png" },
    { code: "XX", name: "Saint_Marin", flag: "Drapeaux/Saint_Marin.png" },
    { code: "XX", name: "Saint-Vincent_et_les_Grenadines", flag: "Drapeaux/Saint-Vincent_Et_Les_Grenadines.png" },
    { code: "XX", name: "Sainte-Lucie", flag: "Drapeaux/Sainte-Lucie.png" },
    { code: "XX", name: "Iles_Salomon", flag: "Drapeaux/Iles_Salomon.png" },
    { code: "XX", name: "Salvador", flag: "Drapeaux/Salvador.png" },
    { code: "XX", name: "Les_Samoas", flag: "Drapeaux/Les_Samoas.png" },
    { code: "XX", name: "Sao_Tome-et-Principes", flag: "Drapeaux/Sao_Tome-Et_Principes.png" },
    { code: "XX", name: "Senegal", flag: "Drapeaux/Senegal.webp" },
    { code: "XX", name: "Serbie", flag: "Drapeaux/Serbie.png" },
    { code: "XX", name: "Seychelles", flag: "Drapeaux/Seychelles.png" },
    { code: "XX", name: "Sierra_Leone", flag: "Drapeaux/Sierra_Leone.png" },
    { code: "XX", name: "Singapour", flag: "Drapeaux/Singapour.png" },
    { code: "XX", name: "Slovaquie", flag: "Drapeaux/Slovaquie.png" },
    { code: "XX", name: "Slovenie", flag: "Drapeaux/Slovenie.webp" },
    { code: "XX", name: "Somalie", flag: "Drapeaux/Somalie.png" },
    { code: "XX", name: "Soudan", flag: "Drapeaux/Soudan.png" },
    { code: "XX", name: "Soudan_Du_Sud", flag: "Drapeaux/Soudan_Du_Sud.png" },
    { code: "XX", name: "Sri_Lanka", flag: "Drapeaux/Sri_Lanka.png" },
    { code: "XX", name: "Suede", flag: "Drapeaux/Suede.png" },
    { code: "XX", name: "Suisse", flag: "Drapeaux/Suisse.png" },
    { code: "XX", name: "Suriname", flag: "Drapeaux/Suriname" },
    { code: "XX", name: "Syrie", flag: "Drapeaux/Syrie.png" },
    { code: "XX", name: "Tadjikistan", flag: "Drapeaux/Tadjikistan.png" },
    { code: "XX", name: "Tanzanie", flag: "Drapeaux/Tanzanie.png" },
    { code: "XX", name: "Tchad", flag: "Drapeaux/Tchad.png" },
    { code: "XX", name: "Thailande", flag: "Drapeaux/Thailand.png" },
    { code: "XX", name: "Timor_Oriental", flag: "Drapeaux/Timor_Oriental.png" },
    { code: "XX", name: "Togo", flag: "Drapeaux/Togo.png" },
    { code: "XX", name: "Tonga", flag: "Drapeaux/Tonga.png" },
    { code: "XX", name: "Trinite_et_Tobago", flag: "Drapeaux/Trinite_Et_Tobago.png" },
    { code: "XX", name: "Tunisie", flag: "Drapeaux/Tunisie.png" },
    { code: "XX", name: "Turkmenistan", flag: "Drapeaux/Turkmenistan.png" },
    { code: "XX", name: "Turquie", flag: "Drapeaux/Turquie.webp" },
    { code: "XX", name: "Tuvalu", flag: "Drapeaux/Tuvalu.png" },
    { code: "XX", name: "Ukraine", flag: "Drapeaux/Ukraine.png" },
    { code: "XX", name: "Uruguay", flag: "Drapeaux/Uruguay.png" },
    { code: "XX", name: "Vanuatu", flag: "Drapeaux/Vanuatu.png" },
    { code: "XX", name: "Vatican", flag: "Drapeaux/Vatican.png" },
    { code: "XX", name: "Venezuela", flag: "Drapeaux/Venezuela.webp" },
    { code: "XX", name: "Vietnam", flag: "Drapeaux/Vietnam.png" },
    { code: "XX", name: "Yemen", flag: "Drapeaux/Yemen.png" },
    { code: "XX", name: "Zambie", flag: "Drapeaux/Zambie.png" },
    { code: "XX", name: "Zimbabwe", flag: "Drapeaux/Zimbabwe.png" }
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
