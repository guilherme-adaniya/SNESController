var click = false;

function changeColor(cor) {
    if (click == false){
        document.getElementById('cor').style.backgroundColor = cor;
        document.getElementById('cor').setAttribute('class', cor+"BG");
        click = true;
    } else {
        document.getElementById('cor').setAttribute('class', "BGPadrao");
        setTimeout( function() {
            document.getElementById('cor').style.backgroundColor = cor;
            document.getElementById('cor').setAttribute('class', cor+"BG");
        }, 1000);
    }
}