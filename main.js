status = "";

function preload(){
    img = loadImage('IMG_8983.jpg');
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}


function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
