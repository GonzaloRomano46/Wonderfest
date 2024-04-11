
function responder(respuesta) {
    if (respuesta === 'si') {
      const audio = document.getElementById('audio');
      audio.play();
    }
    else if (respuesta === 'no') {
      const box = document.querySelector('.box');
      const maxWidth = document.documentElement.clientWidth - box.offsetWidth;
      const maxHeight = document.documentElement.clientHeight - box.offsetHeight;
      const randomX = Math.floor(Math.random() * maxWidth);
      const randomY = Math.floor(Math.random() * maxHeight);
  
      box.style.left = randomX + 'px';
      box.style.top = randomY + 'px';
    }
  }
  