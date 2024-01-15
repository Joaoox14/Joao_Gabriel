async function searchBreed() {
    const searchInput = document.getElementById("searchInput").value;

    if (searchInput.trim() === "") {
        alert("Por favor, digite uma raça de animal.");
        return;
    }

    try {
        const breedInfo = await getBreedInfo(searchInput);
        displayBreedInfo(breedInfo);
    } catch (error) {
        console.error("Erro ao obter informações da raça:", error);
        alert("Erro ao obter informações da raça. Por favor, tente novamente.");
    }
}

async function getBreedInfo(breed) {
    const apiUrl = `https://api.thedogapi.com/v1/breeds/search?q=${breed}`;

    try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (data.length > 0) {
            return data[0]; // Retorna apenas a primeira raça correspondente
        } else {
            throw new Error("Nenhuma raça encontrada com esse nome.");
        }
    } catch (error) {
        throw new Error("Erro ao obter informações da raça. Por favor, tente novamente.");
    }
}

function displayBreedInfo(breedInfo) {
    const breedInfoContainer = document.getElementById("breedInfo");
    breedInfoContainer.innerHTML = "";

    if (breedInfo) {
        const { name, origin, temperament, description } = breedInfo;

        breedInfoContainer.innerHTML = `
            <h2>${name}</h2>
            <p><strong>Origem:</strong> ${origin}</p>
            <p><strong>Temperamento:</strong> ${temperament}</p>
            <p><strong>Descrição:</strong> ${description}</p>
        `;
    } else {
        breedInfoContainer.innerHTML = "<p>Nenhuma informação disponível para essa raça de animal.</p>";
    }
}
