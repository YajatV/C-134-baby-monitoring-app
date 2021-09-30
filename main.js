
song = "";
objects = [];
status = "";

function preload()
{
	song = loadSound("baby_sleep_ringtone.mp3");
}

function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380,380);
  video.hide();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}


function draw() {
  image(video, 0, 0, 380, 380);
      if(status != "")
      {
        r =  random(255);
        g =  random(255);
        b =  random(255);      
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++) {
          document.getElementById("status").innerHTML = "Status : Object Detected";
 
          fill(r,g,b);
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke(r,g,b);
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
         
          if(objects[i].label == "person")
          {
            document.getElementById("number_of_objects").innerHTML = "Baby Found";
            console.log("stop");
            song.stop();
          }
          else
          {
            document.getElementById("number_of_objects").innerHTML = "Baby Not Found";
            console.log("play"); 
            song.play();
          }
         }

        if(objects.length == 0)
        {
          document.getElementById("number_of_objects").innerHTML = "Baby Not Found";
          console.log("play"); 
          song.play();
        }
      }
}/*img="";
status1="";
objects=[];

function preload(){
    img=loadImage("dog_cat.jpg");
}

function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    objectDetector=ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML="status: detecting objects";
}

function modelloaded(){
    console.log("cocossd has loaded");
    status1=true;
    objectDetector.detect(video, gotresults);
}

function gotresults(error, results)
{
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results
}
function draw(){
    image(video, 0, 0, 380, 380);
    if(status1 !=""){
        objectDetector.detect(video,gotresults);
    for(i=0;i < objects.length;i++){
        document.getElementById("status").innerHTML="Status : Object Detected";
        document.getElementById("number_of_objects").innerHTML="Number Of Objects Detected Are : "+objects.length;

        r=random(255);
        g=random(255);
        b=random(255);

        fill(r,g,b);
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke(r,g,b);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    } 
    }
    /*fill("orange");
    text("Dog",45, 75);
    noFill();
    stroke("orange");
    rect( 30, 60, 420, 350);
    fill("red");
    text("Cat",310, 120);
    noFill();
    stroke("red");
    rect( 300, 90, 270, 320);
  

//}

img = "";
objects = [];
status = "";

function preload(){
  img = loadImage('dog_cat.jpg');
}


function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380,380);
  video.hide();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}


function draw() {
  image(video, 0, 0, 380, 380);
      if(status != "")
      {
        r =  random(255);
        g =  random(255);
        b =  random(255);      
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++) {
          document.getElementById("status").innerHTML = "Status : Object Detected";
          document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length;
 
          fill(r,g,b);
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke(r,g,b);
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
      }*/


