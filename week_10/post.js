function sendData() {

    const payload = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    if (!payload.name || !payload.email || !payload.message) {
        document.getElementById("result").innerText =
            "Please fill all the fields before sending.";
        return;
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })

        .then(response => {

            if (!response.ok) {
                throw new Error("Network error: " + response.status);
            }

            return response.json();
        })

        .then(data => {
            document.getElementById("result").innerText =
                "Server Response:\n" + JSON.stringify(data, null, 2);
        })

        .catch(error => {
            document.getElementById("result").innerText =
                "Error: " + error.message;
        });
}
