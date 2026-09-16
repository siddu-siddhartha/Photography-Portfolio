function sendData(event) {

    event.preventDefault();

    let data = {
        name: document.getElementById("name").value,
        message: document.getElementById("message").value
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    .then(response => response.json())

    .then(result => {
        document.getElementById("result").innerText =
            "Data sent successfully. ID: " + result.id;
    })

    .catch(error => {
        document.getElementById("result").innerText =
            "Error sending data";
    });
}