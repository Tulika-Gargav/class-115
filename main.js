function preload()
{

}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw()
{
   image(video, 0, 0, 300, 300); 
}

function take_snapshot()
{
    save('myFilterImage.png');
}

function modelLoaded()
{
    console.log('PoseNet Is Intialized');
}

function gotPoses()
{
    if(result.length > 0)
    {
    console.log(results);
    noseX = result[0].pose.nose.x-15;
    noseY = result[0].pose.nose.y-15;

    }
}