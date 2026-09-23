"use strict";
class Photographer {
    constructor(name, photos) {
        this.name = name;
        this.photos = photos;
    }
    total() {
        return this.photos.reduce((sum, photo) => sum + photo.price, 0);
    }
}
const ayesha = new Photographer("Ayesha Khan", [
    { title: "Snow Leopard", price: 5000 },
    { title: "Misty Valley", price: 3500 }
]);
function showPortfolio() {
    let text = ayesha.name + "\n\n";
    ayesha.photos.forEach(photo => {
        text = text + photo.title + " - Rs. " + photo.price + "\n";
    });
    document.getElementById("result").innerText = text + "\nTotal: Rs. " + ayesha.total();
}
