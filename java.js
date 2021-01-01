function myfunc() {
    var n1 = Math.floor(Math.random() * 6) + 1;

    var pattern = "dice" + n1 + ".png";
    var image = document.querySelectorAll(".img1")[0];
    image.setAttribute("src", pattern);

    var n2 = Math.floor(Math.random() * 6) + 1;
    var pattern1 = "dice" + n2 + ".png";
    var image1 = document.querySelectorAll(".img2")[0];
    image1.setAttribute("src", pattern1);
    if (n1 > n2) {
        document.querySelector("h1").innerHTML = " &#127987; Player 1 Wins ";
    } else if (n1 == n2) {
        document.querySelector("h1").innerHTML = "&#128528; Draw &#128528;";
    } else {
        document.querySelector("h1").innerHTML = "Player 2 Wins  &#127987;";
    }
}