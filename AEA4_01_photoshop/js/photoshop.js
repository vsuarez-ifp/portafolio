var imatge=document.getElementsByTagName('img');
var tirador=document.getElementsByTagName('input');
var valor=document.getElementsByTagName('p';)


// blur

tirador[0].addEventListener('input', blur);

function blur() {
    valor[0].innerHTML=tirador[0].value;
    imatge[0].style.webkitFilter="grayscale("+tirador[0].value+"px)";
}


// grayscale

tirador[1].addEventListener('input', grayscale);

function grayscale() {
    valor[1].innerHTML=tirador[1].value;
    imatge[1].style.webkitFilter="grayscale("+tirador[1].value+"%)";
}

//drop-shadow

tirador[2].addEventListener('input', dropshadow);

function dropshadow() {
    valor[2].innerHTML=tirador[2].value;
    imatge[2].style.webkitFilter="drop-shadow("+tirador[2].value+"px "+tirador[2].value+"px "+tirador[2].value+"px purple)";
}
