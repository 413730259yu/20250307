function setup() { 
  // 建立依照視窗的高與寬當作畫布的寬高
  createCanvas(windowWidth, windowHeight);
  // 設定顏色模式為HSB
  colorMode(HSB);
  // 畫布的背景顏色為黑色
  background(0);
}

function draw() { 
  // 根據滑鼠的 X 軸位置計算色相
  let hue = map(mouseX, 0, windowWidth, 0, 360);
  // 根據滑鼠的 Y 軸位置計算亮度
  let brightness = map(mouseY, 0, windowHeight, 0, 100);

  // 設定圓的顏色
  fill(hue, 100, brightness);
  noStroke();

  // 在滑鼠位置畫一個圓，圓的寬高為200px
  ellipse(mouseX, mouseY, 200, 200);
}

// 當視窗的寬高改變時，重新設定畫布的寬高
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // 重新設定背景顏色
  background(0);
}
