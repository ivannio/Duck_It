window.onload = () => {
    let images = document.getElementsByTagName("img");

    for (let i = 0; i < images.length; i++)
    {
        images[i].src = "https://raw.githubusercontent.com/ivannio/Duck_It/master/src/images/duck-large.png";
    }
}