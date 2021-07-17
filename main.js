function preload() {
    sports=loadImage("https://static01.nyt.com/images/2020/07/21/autossell/sports-reboot-promo-still/sports-reboot-promo-still-facebookJumbo.jpg")
    }
    
    function setup() {
   canvas=createCanvas(400,400)
   canvas.center()
      video=createCapture(VIDEO)
      video.hide()
    }
    
    function draw() {
    image(video,100,100,200,200)
      fill("red")
      stroke("red")
      rect(50,50,300,20)
      rect(350,50,20,300)
      rect(50,50,20,300)
      rect(50,350,320,20)
      circle(50,50,50)
      circle(375,50,50)
      circle(50,375,50)
      circle(375,375,50)
    }