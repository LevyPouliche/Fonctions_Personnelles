export function createCountrySelector(containerId) {
  const countries = [
    { code: "XX", name: "Afghanistan", flag: "Drapeaux/Afghanistan.png" },
    { code: "XX", name: "Afrique_Du_Sud", flag: "Drapeaux/Afrique_Du_Sud.png" },
    { code: "XX", name: "Albanie", flag: "Drapeaux/Albanie.png" },
    { code: "XX", name: "Algerie", flag: "Drapeaux/Algerie.png" },
    { code: "XX", name: "Allemagne", flag: "Drapeaux/Allemagne.png" },
    { code: "XX", name: "Andorre", flag: "Drapeaux/Andorre.png" },
    { code: "XX", name: "Angola", flag: "Drapeaux/Angola.png" },
    { code: "XX", name: "Antigua_Et_Barbuda", flag: "Drapeaux/Antigua_Et_Barbuda.png" },
    { code: "XX", name: "Arabie_Saoudite", flag: "Drapeaux/Arabie_Saoudite.png" },
    { code: "XX", name: "Argentine", flag: "Drapeaux/Argentine.png" },
    { code: "XX", name: "Armenie", flag: "Drapeaux/Armenie.png" },
    { code: "XX", name: "Australie", flag: "Drapeaux/Australie.png" },
    { code: "XX", name: "Autriche", flag: "Drapeaux/Autriche.png" },
    { code: "XX", name: "Azerbaidjan", flag: "Drapeaux/Azerbaidjan.png" },
    { code: "XX", name: "Bahamas", flag: "Drapeaux/Bahamas.png" },
    { code: "XX", name: "Bahrein", flag: "Drapeaux/Bahrein.png" },
    { code: "XX", name: "Bangladesh", flag: "Drapeaux/Bangladesh.png" },
    { code: "XX", name: "Barbade", flag: "Drapeaux/Barbade.png" },
    { code: "XX", name: "Belgique", flag: "Drapeaux/Belgique.png" },
    { code: "XX", name: "Belize", flag: "Drapeaux/Belize.png" },
    { code: "XX", name: "Benin", flag: "Drapeaux/Benin.png" },
    { code: "XX", name: "Bhoutan", flag: "Drapeaux/Bhoutan.png" },
    { code: "XX", name: "Bielorussie", flag: "Drapeaux/Bielorussie" },
    { code: "XX", name: "Birmanie", flag: "Drapeaux/Birmanie.png" },
    { code: "XX", name: "Bolivie", flag: "Drapeaux/Bolivie.png" },
    { code: "XX", name: "Bosnie_Herzegovine", flag: "Drapeaux/Bosnie_Herzegovine.png" },
    { code: "XX", name: "Botswana", flag: "Drapeaux/Botswana.png" },
    { code: "XX", name: "Bresil", flag: "Drapeaux/Bresil.png" },
    { code: "XX", name: "Brunei", flag: "Drapeaux/Brunei.png" },
    { code: "XX", name: "Bulgarie", flag: "Drapeaux/Bulgarie.png" },
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
    { code: "XX", name: "XX", flag: "XX" },
    { code: "XX", name: "XX", flag: "XX" },
    <a href="#"><img src="Drapeaux/Honduras.png" alt="Honduras" /> Honduras</a>
    <a href="#"><img src="Drapeaux/Hongrie.png" alt="Hongrie" /> Hongrie</a>
    <a href="#"><img src="Drapeaux/Iles_Cook.png" alt="Îles Cook" /> Îles Cook</a>
    <a href="#"><img src="Drapeaux/Marshall.png" alt="Îles Marshall" /> Îles Marshall</a>
    <a href="#"><img src="Drapeaux/Inde.png" alt="Inde" /> Inde</a>
    <a href="#"><img src="Drapeaux/Indonesie.png" alt="Indonésie" /> Indonésie</a>
    <a href="#"><img src="Drapeaux/Irak.png" alt="Irak" /> Irak</a>
    <a href="#"><img src="Drapeaux/Iran.png" alt="Iran" /> Iran</a>
    <a href="#"><img src="Drapeaux/Irelande.png" alt="Irlande" /> Irlande</a>
    <a href="#"><img src="Drapeaux/Islande.png" alt="Islande" /> Islande</a>
    <a href="#"><img src="Drapeaux/Israel.png" alt="Israël" /> Israël</a>
    <a href="#"><img src="Drapeaux/Italie.png" alt="Italie" /> Italie</a>
    <a href="#"><img src="Drapeaux/Jamaique.png" alt="Jamaïque" /> Jamaïque</a>
    <a href="#"><img src="Drapeaux/Japon.png" alt="Japon" /> Japon</a>
    <a href="#"><img src="Drapeaux/Jordanie.png" alt="Jordanie" /> Jordanie</a>
    <a href="#"><img src="Drapeaux/Kazakhstan.png" alt="Kazakhstan" /> Kazakhstan</a>
    <a href="#"><img src="Drapeaux/Kenya.png" alt="Kenya" /> Kenya</a>
    <a href="#"><img src="Drapeaux/Kyrghistan.png" alt="Kirghizistan" /> Kirghizistan</a>
    <a href="#"><img src="Drapeaux/Kiribati.png" alt="Kiribati" /> Kiribati</a>
    <a href="#"><img src="" alt="Kosovo" /> Kosovo</a>
    <a href="#"><img src="Drapeaux/Koweit.png" alt="Koweït" /> Koweït</a>
    <a href="#"><img src="Drapeaux/Laos.png" alt="Laos" /> Laos</a>
    <a href="#"><img src="Drapeaux/Lesotho.png" alt="Lesotho" /> Lesotho</a>
    <a href="#"><img src="Drapeaux/Lettonie.png" alt="Lettonie" /> Lettonie</a>
    <a href="#"><img src="Drapeaux/Liban.png" alt="Liban" /> Liban</a>
    <a href="#"><img src="Drapeaux/Liberia.png" alt="Libéria" /> Libéria</a>
    <a href="#"><img src="Drapeaux/Libye.png" alt="Libye" /> Libye</a>
    <a href="#"><img src="Drapeaux/Liechtenstein.png" alt="Liechtenstein" /> Liechtenstein</a>
    <a href="#"><img src="Drapeaux/Lituanie.png" alt="Lituanie" /> Lituanie</a>
    <a href="#"><img src="Drapeaux/Luxembourg.png" alt="Luxembourg" /> Luxembourg</a>
    <a href="#"><img src="Drapeaux/Macedoine_Du_Nord.png" alt="Macédoine du Nord" /> Macédoine du Nord</a>
    <a href="#"><img src="Drapeaux/Madagascar.png" alt="Madagascar" /> Madagascar</a>
    <a href="#"><img src="Drapeaux/Malaisie.png" alt="Malaisie" /> Malaisie</a>
    <a href="#"><img src="Drapeaux/Malawi.png" alt="Malawi" /> Malawi</a>
    <a href="#"><img src="Drapeaux/Maldives.png" alt="Maldives" /> Maldives</a>
    <a href="#"><img src="Drapeaux/Mali.webp" alt="Mali" /> Mali</a>
    <a href="#"><img src="Drapeaux/Malte.png" alt="Malte" /> Malte</a>
    <a href="#"><img src="Drapeaux/Maroc.webp" alt="Maroc" /> Maroc</a>
    <a href="#"><img src="Drapeaux/Maurice.png" alt="Maurice" /> Maurice</a>
    <a href="#"><img src="Drapeaux/Mauritanie.png" alt="Mauritanie" /> Mauritanie</a>
    <a href="#"><img src="Drapeaux/Mexique.webp" alt="Mexique" /> Mexique</a>
    <a href="#"><img src="Drapeaux/Micronesie.png" alt="Micronésie" /> Micronésie</a>
    <a href="#"><img src="Drapeaux/Moldavie.png" alt="Moldavie" /> Moldavie</a>
    <a href="#"><img src="Drapeaux/Monaco.png" alt="Monaco" /> Monaco</a>
    <a href="#"><img src="Drapeaux/Mongolie.png" alt="Mongolie" /> Mongolie</a>
    <a href="#"><img src="Drapeaux/Montenegro.png" alt="Monténégro" /> Monténégro</a>
    <a href="#"><img src="Drapeaux/Mozambique.png" alt="Mozambique" /> Mozambique</a>
    <a href="#"><img src="Drapeaux/Namibie.png" alt="Namibie" /> Namibie</a>
    <a href="#"><img src="Drapeaux/Nauru.png" alt="Nauru" /> Nauru</a>
    <a href="#"><img src="Drapeaux/Nepal.png" alt="Népal" /> Népal</a>
    <a href="#"><img src="Drapeaux/Nicaragua.png" alt="Nicaragua" /> Nicaragua</a>
    <a href="#"><img src="Drapeaux/Niger.png" alt="Niger" /> Niger</a>
    <a href="#"><img src="Drapeaux/Nigeria.webp" alt="Nigeria" /> Nigeria</a>
    <a href="#"><img src="Drapeaux/Norvege.png" alt="Norvège" /> Norvège</a>
    <a href="#"><img src="Drapeaux/Nouvelle-Zelande.png" alt="Nouvelle-Zélande" /> Nouvelle-Zélande</a>
    <a href="#"><img src="Drapeaux/Oman.png" alt="Oman" /> Oman</a>
    <a href="#"><img src="Drapeaux/Ouganda.png" alt="Ouganda" /> Ouganda</a>
    <a href="#"><img src="Drapeaux/Ouzbekistan.png" alt="Ouzbékistan" /> Ouzbékistan</a>
    <a href="#"><img src="Drapeaux/Pakistan.png" alt="Pakistan" /> Pakistan</a>
    <a href="#"><img src="Drapeaux/Palaos.png" alt="Palaos" /> Palaos</a>
    <a href="#"><img src="Drapeaux/Palestine.png" alt="Palestine" /> Palestine</a>
    <a href="#"><img src="Drapeaux/Panama.png" alt="Panama" /> Panama</a>
    <a href="#"><img src="Drapeaux/Papouasie_Nouvelle-Guinee.png" alt="Papouasie-Nouvelle-Guinée" /> Papouasie-Nouvelle-Guinée</a>
    <a href="#"><img src="Drapeaux/Paraguay.png" alt="Paraguay" /> Paraguay</a>
    <a href="#"><img src="Drapeaux/Pays-Bas.png" alt="Pays-Bas" /> Pays-Bas</a>
    <a href="#"><img src="Drapeaux/Perou.png" alt="Pérou" /> Pérou</a>
    <a href="#"><img src="Drapeaux/Philippines.png" alt="Philippines" /> Philippines</a>
    <a href="#"><img src="Drapeaux/Pologne.png" alt="Pologne" /> Pologne</a>
    <a href="#"><img src="Drapeaux/Portugal.png" alt="Portugal" /> Portugal</a>
    <a href="#"><img src="Drapeaux/Qatar.png" alt="Qatar" /> Qatar</a>
    <a href="#"><img src="Drapeaux/Republique_Dominicaine.png" alt="République dominicaine" /> République dominicaine</a>
    <a href="#"><img src="" alt="République tchèque" /> République tchèque</a>
    <a href="#"><img src="Drapeaux/Roumanie.png" alt="Roumanie" /> Roumanie</a>
    <a href="#"><img src="Drapeaux/Royaume-Uni.png" alt="Royaume-Uni" /> Royaume-Uni</a>
    <a href="#"><img src="Drapeaux/Russie.png" alt="Russie" /> Russie</a>
    <a href="#"><img src="Drapeaux/Rwanda.png" alt="Rwanda" /> Rwanda</a>
    <a href="#"><img src="" alt="Saint-Kitts-et-Nevis" /> Saint-Kitts-et-Nevis</a>
    <a href="#"><img src="Drapeaux/Saint_Marin.png" alt="Saint-Marin" /> Saint-Marin</a>
    <a href="#"><img src="Drapeaux/Saint-Vincent_Et_Les_Grenadines.png" alt="Saint-Vincent-et-les-Grenadines" /> Saint-Vincent-et-les-Grenadines</a>
    <a href="#"><img src="Drapeaux/Sainte-Lucie.png" alt="Sainte-Lucie" /> Sainte-Lucie</a>
    <a href="#"><img src="Drapeaux/Iles_Salomon.png" alt="Salomon" /> Salomon</a>
    <a href="#"><img src="Drapeaux/Salvador.png" alt="Salvador" /> Salvador</a>
    <a href="#"><img src="Drapeaux/Les_Samoas.png" alt="Samoa" /> Samoa</a>
    <a href="#"><img src="Drapeaux/Sao_Tome-Et_Principes.png" alt="Sao Tomé-et-Principe" /> Sao Tomé-et-Principe</a>
    <a href="#"><img src="Drapeaux/Senegal.webp" alt="Sénégal" /> Sénégal</a>
    <a href="#"><img src="Drapeaux/Serbie.png" alt="Serbie" /> Serbie</a>
    <a href="#"><img src="Drapeaux/Seychelles.png" alt="Seychelles" /> Seychelles</a>
    <a href="#"><img src="Drapeaux/Sierra_Leone.png" alt="Sierra Leone" /> Sierra Leone</a>
    <a href="#"><img src="Drapeaux/Singapour.png" alt="Singapour" /> Singapour</a>
    <a href="#"><img src="Drapeaux/Slovaquie.png" alt="Slovaquie" /> Slovaquie</a>
    <a href="#"><img src="Drapeaux/Slovenie.webp" alt="Slovénie" /> Slovénie</a>
    <a href="#"><img src="Drapeaux/Somalie.png" alt="Somalie" /> Somalie</a>
    <a href="#"><img src="Drapeaux/Soudan.png" alt="Soudan" /> Soudan</a>
    <a href="#"><img src="Drapeaux/Soudan_Du_Sud.png" alt="Soudan du Sud" /> Soudan du Sud</a>
    <a href="#"><img src="Drapeaux/Sri_Lanka.png" alt="Sri Lanka" /> Sri Lanka</a>
    <a href="#"><img src="Drapeaux/Suede.png" alt="Suède" /> Suède</a>
    <a href="#"><img src="Drapeaux/Suisse.png" alt="Suisse" /> Suisse</a>
    <a href="#"><img src="Drapeaux/Suriname.png" alt="Suriname" /> Suriname</a>
    <a href="#"><img src="Drapeaux/Syrie.png" alt="Syrie" /> Syrie</a>
    <a href="#"><img src="Drapeaux/Tadjikistan.png" alt="Tadjikistan" /> Tadjikistan</a>
    <a href="#"><img src="Drapeaux/Tanzanie.png" alt="Tanzanie" /> Tanzanie</a>
    <a href="#"><img src="Drapeaux/Tchad.png" alt="Tchad" /> Tchad</a>
    <a href="#"><img src="Drapeaux/Thailand.png" alt="Thaïlande" /> Thaïlande</a>
    <a href="#"><img src="Drapeaux/Timor_Oriental.png" alt="Timor oriental" /> Timor oriental</a>
    <a href="#"><img src="Drapeaux/Togo.png" alt="Togo" /> Togo</a>
    <a href="#"><img src="Drapeaux/Tonga.png" alt="Tonga" /> Tonga</a>
    <a href="#"><img src="Drapeaux/Trinite_Et_Tobago.png" alt="Trinité-et-Tobago" /> Trinité-et-Tobago</a>
    <a href="#"><img src="Drapeaux/Tunisie.png" alt="Tunisie" /> Tunisie</a>
    <a href="#"><img src="Drapeaux/Turkmenistan.png" alt="Turkménistan" /> Turkménistan</a>
    <a href="#"><img src="Drapeaux/Turquie.webp" alt="Turquie" /> Turquie</a>
    <a href="#"><img src="Drapeaux/Tuvalu.png" alt="Tuvalu" /> Tuvalu</a>
    <a href="#"><img src="Drapeaux/Ukraine.png" alt="Ukraine" /> Ukraine</a>
    <a href="#"><img src="Drapeaux/Uruguay.png" alt="Uruguay" /> Uruguay</a>
    <a href="#"><img src="Drapeaux/Vanuatu.png" alt="Vanuatu" /> Vanuatu</a>
    <a href="#"><img src="Drapeaux/Vatican.png" alt="Vatican" /> Vatican</a>
    <a href="#"><img src="Drapeaux/Venezuela.webp" alt="Venezuela" /> Venezuela</a>
    <a href="#"><img src="Drapeaux/Vietnam.png" alt="Viêt Nam" /> Viêt Nam</a>
    <a href="#"><img src="Drapeaux/Yemen.png" alt="Yémen" /> Yémen</a>
    <a href="#"><img src="Drapeaux/Zambie.png" alt="Zambie" /> Zambie</a>
    <a href="#"><img src="Drapeaux/Zimbabwe.png" alt="Zimbabwe" /> Zimbabwe</a>
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
