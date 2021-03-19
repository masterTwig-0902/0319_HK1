let nbarray=[];
let r=256; //方塊透明度
//初始內容
function setup() {
  createCanvas(720, 460, WEBGL); //(畫布大小，決定使用3D方式進行渲染)
  for(let i=0;i<10;i=i+1) {
    // 怎麼把東西放到 nbarray 袋子裡面的公式
    nbarray.push(new myBox(25,-height/2+(height/5)*i,0,50)); //方塊大小
  }
}

function draw() {

  fill(mouseX,mouseY,150,r);
  stroke(mouseX,mouseY,150);
  background(0,0,0); //背景顏色
  nbarray.forEach((v)=>{ //將袋子中所有東西 稱為 V執行他的相關函式
    v.display();
  })
  console.log(r);
}



//自訂一個類別的物件
class myBox{   //怎樣建構這個物件
  constructor(x,y,z,size){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    this.mx =1;
  }
  //定義能力
  //能力1:顯現這個box
  display(){
    push();
      translate(this.x,this.y,this.z,);
        if (mouseX-width/2 > this.x-this.size/2 &&
            mouseX-width/2 < this.x+this.size/2 &&
            mouseY-height/2 > this.y-this.size/2 &&
            mouseY-height/2 < this.y+this.size/2 
           ){
            rotateX(frameCount*0.01); //旋轉
            rotateY(frameCount*0.01);
            this.mx=this.mx+0.5; //每碰到一次就加速0.5
        }
      box(this.size);
    pop();
    this.move();
  }
  //能力2 移動
   move(){
    if (this.x>width/2){this.mx = -1*this.mx;}
    if (this.x<-width/2){this.mx = -1*this.mx;}  
    this.x = this.x + this.mx;
  }
  
}

function keyPressed() { //控制方塊透明度
  if (keyCode === LEFT_ARROW) {
    r=r-10;
  } else if (keyCode === RIGHT_ARROW) {
     r=r+10;
  }
  return false; // prevent default
}

