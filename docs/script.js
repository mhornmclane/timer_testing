// Endpoint URL for Google Apps Script
const apiUrl = "https://script.google.com/macros/s/AKfycbxEEWB65ma-NAj35JedDtaMoOze15L-VUvKSF1CngVQPdZ_QiFXIPPe5dJeCWAg10LJhA/exec";

// Handle form submission (POST request)
document.getElementById("dataForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form from reloading the page

    // Collect form data
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;

    // Create the POST payload
    const payload = {
        name: name,
        age: parseInt(age, 10),
        email: email
    };

    // Send POST request
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        alert("Data submitted successfully: " + JSON.stringify(result));
    } catch (error) {
        console.error("Error submitting data:", error);
        alert("Failed to submit data.");
    }
});

// Handle fetch button click (GET request)
document.getElementById("fetchButton").addEventListener("click", async () => {
    // Send GET request
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Display data in the output div
        const outputDiv = document.getElementById("output");
        outputDiv.innerHTML = "<h2>Fetched Data:</h2>";

        data.forEach((row) => {
            outputDiv.innerHTML += `<p>Name: ${row.name}, Age: ${row.age}, Email: ${row.email}</p>`;
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch data.");
    }
});
