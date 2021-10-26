canvas=document.getElementById("mycanvas")
ctx=canvas.getContext("2d")
rover_width=100;
rover_height=90;
rover_x=10
rover_y=10
background_image="mars.jpg"
rover_image="rover.png"
function add()
{
    background_imgtag = new Image();
    background_imgtag.onload = uploadbackground;
    background_imgtag.src = background_image;

    rover_imagetag=uploadrover;
    rover_imagetag.onload = uploadrover;
    rover_imagetag.src = rover_image;
}

function uploadbackground(){
   ctx.drawImage(background_imgtag, 0,0,canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imagetag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e){

    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38' )
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        Left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }


}

function up( )

{
    if(rover_y >=0)
    {
        rover_y -= 10;
        console.log("when up arrow is pressed="+ rover_x +" _ "+rover_y);
        uploadbackground();
        
        uploadrover();
    }
}

function up( )

{
    if(rover_y >=500)
    {
        rover_y += 10;
        console.log("when down arrow is pressed="+ rover_x +" _ "+rover_y);
        uploadbackground();
        
        uploadrover();
    }
}

function down( )

{
    if(rover_y >=0)
    {
        rover_y -= 10;
        console.log("when up arrow is pressed="+ rover_x +" _ "+rover_y);
        uploadbackground();
     
        uploadrover();
    }
}

function Left( )

{
    if(rover_y >=0)
    {
        rover_y -= 10;
        console.log("when left arrow is pressed="+ rover_x +" _ "+rover_y);
        uploadbackground();
       
        uploadrover();
    }
}


function right( )

{
    if(rover_y >=700)
    {
        rover_y += 10;
        console.log("when right arrow is pressed="+ rover_x +" _ "+rover_y);
        uploadbackground();
        
        uploadrover();
    }
}