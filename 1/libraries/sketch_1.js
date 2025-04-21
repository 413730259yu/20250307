function setup() { 
    // 建立依照視窗的高與寬當作畫布的寬高
    createCanvas(windowWidth, windowHeight);
    // 畫布的背景顏色為669bbc(66為十六進位的值，翻成10進位就是102) 
    background(102, 153, 188);
  }
  
  function draw() { //畫圖函數，畫圖的地方
    // 畫布的背景顏色為669bbc(66為十六進位的值，翻成10進位就是102) 
    background(102, 153, 188);
    // 畫圓的顏色為#ffe5ec(ff為十六進位的值，翻成10進位就是255)
    fill(255, 229, 236);
    // 畫圓的邊框為#ff6699(ff為十六進位的值，翻成10進位就是255)
    stroke(255, 102, 153);
    // 畫圓的邊框寬度為4
    strokeWeight(4);
    // 在視窗的中心畫一個圓，圓的寬高為100
    ellipse(windowWidth/2, windowHeight/2, 100, 100);
    //依照上面的圓顏色與框線顏色，從視窗的最左邊，產生連續的圓，到視窗的最右邊
    for (var x = 0; x <= windowWidth+200; x += 200) {
      ellipse(x, 100, 200, 200);
    }
  }
  
  // 當視窗的寬高改變時，重新設定畫布的寬高
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  