var t0 = performance.now();
var col='';

function getRandomColor() {
    var letters = '123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 15)];
    }
    return color;
}

function makeShape() {

    var top = Math.random() * 400;
    var left = Math.random() * 1200;
    var width = (Math.random() * 200)+100;

    if (Math.random() > 0.5) {
        document.getElementById('shape').style.borderRadius = "50%";
    } else {
        document.getElementById('shape').style.borderRadius = "0%";
    }
    col=getRandomColor();
    document.getElementById('shape').style.backgroundColor = col;
    document.getElementsByTagName('body')[0].style.color= col;
    document.getElementById('shape').style.top = top + "px";
    document.getElementById('shape').style.left = left + "px";
    document.getElementById('shape').style.width = width + "px";
    document.getElementById('shape').style.height = width + "px";
    document.getElementById('shape').style.display = "block";
    t0 = performance.now();

}

function appearDelay() {

    setTimeout(makeShape, Math.random() * 2000);

}

appearDelay();

function createParagraph(text) {
	var para = document.createElement("p");
	var node = document.createTextNode(text);
	para.appendChild(node);

	var element = document.getElementById("results");
	element.appendChild(para);
}

document.getElementById('shape').onclick = function () {

    var t1 = performance.now();

    var t = (t1 - t0) / 1000;
    t = t.toFixed(2);
    document.getElementById('shape').style.display = "none";
    document.getElementById('time').innerHTML = t + "sec";
    appearDelay();
    createParagraph(document.getElementById("time").innerHTML);
}
