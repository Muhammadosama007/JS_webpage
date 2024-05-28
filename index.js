function AddStyleToPage() {
    const h4 = document.querySelector("h4");
    h4.style.fontSize = "xx-large";

    const nav = document.getElementById("nav");
    nav.style.display = "flex"
    nav.style.justifyContent = "center"
    nav.style.margin = "8px"
    nav.style.fontSize = "x-large"
    const id1 = document.getElementById("id1");
    id1.style.marginRight = "30px"
    const id2 = document.getElementById("id2");
    id2.style.marginRight = "30px"

    const p = document.getElementById("whole-para");
    p.style.display = "flex";

    const p1 = document.getElementById("p1");
    p1.style.width = "30%"
    p1.style.fontSize = "large"
    document.body.style.backgroundColor = "skyblue"

    const img = document.getElementById("img");
    img.style.width = "100%"
    const p2 = document.getElementById("p2");
    p2.style.width = "40%"
    p2.style.fontSize = "large"
    p2.style.marginLeft = "200px"

    const btn = document.getElementById("btn");
    btn.style.fontSize = "x-large"
    btn.style.backgroundColor = "yellow"
    btn.style.borderRadius = "5px"

}


function fun() {
    const list = document.getElementById("para").classList;

    list.add("sty")
    document.body.style.backgroundImage = "url('grid34.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";

    const btn1 = document.getElementById("btn1").classList;
    btn1.toggle("btn1");
}