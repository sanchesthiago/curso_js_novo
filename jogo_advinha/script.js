function move() {
    var elem = document.getElementById("myBar");  
    var fecha = document.getElementById("fecha");
    
    var width = 10;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
       
       fecha.innerHTML= ''
       fecha.innerHTML +=img.src = 'angel.png'
       
      
        
        
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("label").innerHTML = width * 1  + '%';
      } 
    }
    
  } 
 