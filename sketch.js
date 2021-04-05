var dog,sadDog,happyDog, database;
var foodS,foodStock;
var FeedDog;
var addFood;
var milk, milkImg;

//create feed and lastFed variable here
var feed;
var lastFed;


function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
//milkImg = loadImage("Milk.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1100,400);

  
  milk = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //create feed the dog button here
  addFood=createButton("Add Food");
  addFood.position(880,105);
  addFood.mousePressed(addFoods);

  FeedDog=createButton("Feed Dog");
  FeedDog.position(800,105);
  FeedDog.mousePressed(feedDog);

}

function draw() {
  background(46,139,87);
  milk.display();

  //write code to read fedtime value from the database 
  
 
  //write code to display text lastFed time here

 
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  milk.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happyDog);
  
  if(lastFed>=12){
    text("Last Fed: 8 PM", 350, 30);
  }
  else if(lastFed=0){
    text("Last Fed: 12 AM", 350,30);
  }
  else{
    text("Last Fed: 2 AM", 350,30);
  }
}
  //write code here to update food stock and last fed time
  


//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
