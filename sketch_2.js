function setup() { 
    // 建立依照視窗的高與寬當作畫布的寬高
    createCanvas(windowWidth, windowHeight);
    // 畫布的背景顏色為669bbc(66為十六進位的值，翻成10進位就是102) 
    background(102, 153, 188);
  }
  
  function draw() { //畫圖函數，畫圖的地方
    // 畫布的背景顏色為669bbc(66為十六進位的值，翻成10進位的值，翻成10進位就是102) 
    background(102, 153, 188);
  
    // 根據滑鼠的 X 軸位置計算方框和圓形的大小
    let size = map(mouseX, 0, windowWidth, 100, 500);
  
    // 設定方框的顏色和邊框
    fill(158, 42, 43);
    stroke(84, 11, 14);
    strokeWeight(4);
    rectMode(CENTER); // 設定方框的中心點
  
    // 設定圓的顏色和邊框
    fill(255, 229, 236);
    stroke(255, 102, 153);
  
    // 產生一整排的圓與方形
    let spacing = size + 20; // 間距
    for (let x = spacing / 2; x < windowWidth; x += spacing) {
      for (let y = spacing / 2; y < windowHeight; y += spacing) {
        rect(x, y, size, size); // 畫方框
        ellipse(x, y, size, size); // 畫圓
      }
    }
  }
  
  // 當視窗的寬高改變時，重新設定畫布的寬高
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  