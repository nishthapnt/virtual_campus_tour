document.addEventListener("DOMContentLoaded", () => {
    const tourBtn = document.getElementById("btn");
    // tourBtn.textContent = "Start Tour";
    tourBtn.addEventListener("click", () => {
      tourBtn.style.transform = "scale(0.95)";
      setTimeout(() => {
        tourBtn.style.transform = "scale(1)";
      }, 100);
  
      
     
    });
  });
  