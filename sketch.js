var dog,happyDog;
var database;
var foodS,foodStock

function preload()
{
  happyDog = loadImage(images/dogImg.png);
  dog = loadImage(images/dogImg1.png);
}

function setup() {
	createCanvas(500,500);
  
  database  =firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  dog.x = 250;
  dog.y = 200; 
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW))
{
  writeStock(foodS);
  dog.addImage(happyDog)
}

Text("Note : Press Up Arrow to feed Malfoy milk");
text.size(25);
fill("Blue");
stroke("Orange");

  drawSprites();

  function readStock(data)
  {
    foodS = data.val();
  }
  function writeStock(x)
  {
    if(x <= 0)
    {
      x=0;
    }
    else
    {
      x = x-1
    }

    database.ref('/').update({Food:x})
  }
}



