const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup (){
createCanvas (400,400);

engine = Engine.create();
world = Engine.world();
object = Bodies .rectangle (200,200,10,50);
World.add (world,object);

}

function draw(){
background ("white");

rectMode(CENTER);

rect(200,200,10,50);
}