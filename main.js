


difference = 0;
rightWristX = 0;
leftWristX = 0;


function setup(){
video = createCapture(VIDEO);
video.size(500, 500);

canvas = createCanvas(500, 500);
canvas.position(600, 100);

posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses)

}

function modelLoaded(){
    console.log("Model is Loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftwrist = " + leftWristX + "rightwrist  =" + rightWristX + " difference = " + difference);
    }
}

function preload(){
      



}

function draw(){
    
    background('whitesmoke');
    textSize(difference);
    fill('black')
    text('Annan', 50, 400);
    
    
    }