function fetchGeorgiaInfo() {
    const button = document.getElementById("fetch-btn");
    button.textContent = "Fetching...";

    fetch("https://restcountries.com/v3.1/name/Georgia?fullText=true")
        .then(response => response.json())
        .then(data => {
            const country = data[0]; 
            const infoDiv = document.getElementById("info");

            infoDiv.innerHTML = `
                <h1><strong>Georgia</strong> </h1>
                <p><strong>დედაქალაქი:</strong> ${country.capital[0]}</p>
                <p><strong>მოსახლეობა:</strong> ${country.population.toLocaleString()}</p>
                <p><strong>ოფიციალური ენა:</strong> ${Object.values(country.languages).join(", ")}</p>
                <img src="${country.flags.png}" alt="საქართველოს დროშა">
            `;

            button.textContent = "Georgia";
            infoDiv.classList.remove("hidden");
        })
        .catch(error => {
            console.error("შეცდომა:", error);
            button.textContent = "Georgia";
        });
}
