const duckIt = () => {
    let images = document.querySelectorAll("img");

    for (let i = 0; i < images.length; i++) {
        images[i].src = "https://raw.githubusercontent.com/ivannio/Duck_It/master/src/images/duck-large.png";
        images[i].srcset = "";
    }
    setTimeout(duckIt, 500);
};
window.onload = () => {
    duckIt();
}