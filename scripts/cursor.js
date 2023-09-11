
if (window.innerWidth >= 900) {
    const cursor = document.querySelector('.cursor');
  
    document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
    })
    
    document.addEventListener('click', () => {
      cursor.classList.add("expand");
    
      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500)
    })
    
    function onMouseEnter() {
        cursor.classList.add("setCursorRed");
    }
    
    function onMouseExit() {
      cursor.classList.remove("setCursorRed");
    }} else {
    console.log("El ancho de la pantalla es menor a 1080px. No se ejecutará el código.");
  }
  
  