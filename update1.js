var update = function (modifier) 
{

  if (32 in keysDown)
 { // Start the game with the spacebar
    isGameStarted = true;
  }

 
 if (87 in keysDown) 
{ // P1 holding up (key: w)
   
 p1.y -= p1.speed * modifier;

  
  if (p1.y <= 0)
 {
      p1.y = 0;
  
  }
  }

 
 if (83 in keysDown)
 { 
// P1 holding down (key: s)
 
   p1.y += p1.speed * modifier;

   
 var limit = canvas.height - p1.height;
 
   if (p1.y >= limit) {
      p1.y = limit;
  
  }
  }

 


 

  // Ball is colliding with P1
  
if (
    ball.x <= (p1.x + p1.width)
    && p1.x <= (ball.x + ball.size)
    && ball.y <= (p1.y + p1.height)
    && p1.y <= (ball.y + ball.size)
  )
 {
    ball.speedX = Math.abs(ball.speedX);

 
   p1.score++;
   ball.speedY = randomize();

  }

 
 // Ball is colliding with P2
 
 if (
    ball.x <= (p2.x + p2.width)
    && p2.x <= (ball.x + ball.size)
    && ball.y <= (p2.y + p2.height)
    && p2.y <= (ball.y + ball.size)
  )
 {
   
 ball.speedX = Math.abs(ball.speedX) * -1;
  
 ball.speedY = randomize();
 

 }

  

// Ball is colliding at the top

  
if (ball.y <= 0) 

{
    
ball.speedY = Math.abs(ball.speedY);


  }

 
 
// Ball is colliding at the bottom
 
 
if (ball.y + ball.size >= canvas.height)

 {
    ball.speedY = Math.abs(ball.speedY) * -1;
   }

 

 if (isGameStarted)
 {
      
 ball.x += ball.speedX * modifier;
  
  ball.y += ball.speedY * modifier;
  
}

};




function randomize()
 {
  
 var _rand = Math.random() * 500;
 
 
 return Math.random() > 1 ? _rand : _rand * -1;

}
