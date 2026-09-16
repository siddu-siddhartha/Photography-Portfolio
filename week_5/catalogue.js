function searchPhotos() {

    let input = document.getElementById("search").value.toLowerCase();
    let photos = document.getElementById("photos").children;

    for (let i = 0; i < photos.length; i++) {

        let text = photos[i].innerText.toLowerCase();

        if (text.includes(input)) {
            photos[i].style.display = "block";
        } else {
            photos[i].style.display = "none";
        }
    }
}