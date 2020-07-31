
var x = 10;
var y = 120;
var xq = 200;
var yq = 375;
var x1 = 80;
var y1 = 100;
var x2 = 180;
var y2 = 100;
var x3 = 280;
var y3 = 100;
var opcao = 1;
var tela = 0;
var img;
var imgc;
var imgm;
var fase = 1;

function preload(){
  img = loadImage("fase2.png")
  imgc = loadImage("creditos2.png")
  imgm = loadImage("snake2.png")
  imgt = loadImage("download.png")
}

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0,55,0);
  image(imgm,0,0)
  
  // Telas do jogo//
 
  if(tela == 0){
  menu();
  }
  if(tela==1){
  fase1();
  }
  if(tela== 2){
    instrucoes();
  }
  if(tela== 3){
    creditos();
  }
  // função de movimentação da cobrinha//
  
  if(key=="ArrowUp"){
       yq=yq-3;
    }
    if(key=="ArrowDown"){
      yq=yq+3;
    }
  if(key=="ArrowRight"){
    xq=xq+3;
  }
  if(key=="ArrowLeft"){
    xq=xq-3;
  }
  if(xq > 400){
    xq = 0
  }
  if(yq > 400){
    yq = 0
    
  }
if(xq < 0){
  xq = 400
}    
  if(yq < 0){
    yq = 400
  }
  if((x1 + 20 >= xq) && (xq + 15 >= x1) && (y1 + 20 >= yq) && (yq + 15 >= y1)){
    
    fase = fase + 1
    yq = 345
  }


}
function menu(){
    fill("rgb(0,255,0")
    rect(x,y,150,45);
    
  fill('rgb(0,150,0)')
  textSize(32);
           
  text("Jogar", 30, 150);
  text("Instruções", 10, 250);
  text("Créditos" , 20, 350);
}
function fase1(){
   image(img,0,0);
  
  
   fill('rgb(0,255,0)')
  
  rect(xq,yq,15,15)
  
  fill(51)
  
  rect(x1,y1,20,20);
  rect(x2,y2,20,20);
  rect(x3,y3,20,20);
  
  
  
  
  
    
   
  
  fill('#222222')
  
  
  
  textSize(22);
           
  text("2 + 3 = ?",250,45);
  
  
  text("Fase " + fase,15,50)
  
  fill('rgb(0,255,0)')
  
  text("5",85,117)
  text("8",185,117)
  text("10",277,117)
  
}
function instrucoes(){
  
  image(img,0,0);
  
  fill('#222222')
  
  
  textSize(32);
           
  text("Instruções",30,50)
  textSize(15);
  
  text("5º ano do ensino fundamental" +"\n"+ "Matemática: (EF05MA17)",6,100)
  
  text("Snake Matemático é um jogo com o objetivo do jogador " +"\n"+ "testar seu conhecimento sobre adição." +"\n"+ "No jogo o aluno deverá identificar a resultado e levar a" +"\n"+ "cobrinha até ele." +"\n" +" O jogador deve usar as setas do teclado para movimentar" +"\n"+ "a cobrinha.",6,200)
  
  
}
function creditos(){
  
  image(img,0,0);
  image(imgc,135,120)
  
  fill('#222222')
  
  
  textSize(32);
           
  text("Créditos", 30 , 50);
  
  textSize(20);
  text("Marcos Antonio - Programador",30,300)
  
  
}

function keyPressed() {
 
  // Função para escolher a opção no menu//

  if(key=="ArrowUp" && y>130){
   y= y - 100;
  opcao=opcao - 1;
 }
 if(key=="ArrowDown" &&  y<300){
    y= y + 100;
  opcao=opcao + 1;
 }
  if(key=="Enter"){
 tela = opcao;
  }
  if(key=="Escape"){
    tela = 0
  }
  
}

  