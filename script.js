  document.addEventListener('DOMContentLoaded', function() {
  var stream = document.querySelector('.gallery__stream');
  var item = document.querySelectorAll('.gallery__item');
  const passNext = document.querySelector("#prox");
  const passPrev = document.querySelector("#ant");
  const check = document.querySelector("#check");

  var prev = document.querySelector('.gallery__prev');
    var anterior =  function() {
      stream.insertBefore(item[item.length - 1], item[0]);
      item = document.querySelectorAll('.gallery__item');
    }
    check.onchange = function(){
      if (check.checked) {
        prev.removeEventListener('mouseover', anterior);
        next.removeEventListener('mouseover', prox);
      }else{
        prev.addEventListener('mouseover', anterior);
        next.addEventListener('mouseover', prox);
      }
    }

    prev.addEventListener('click', anterior);
    prev.addEventListener('mouseover', anterior);
    
    var next = document.querySelector('.gallery__next');
    var prox = function() {
      stream.appendChild(item[0]);
      item = document.querySelectorAll('.gallery__item');
    }
    next.addEventListener('click', prox);
    next.addEventListener('mouseover', prox);
  
  passPrev.onclick = function(){
    stream.appendChild(item[0]);
    item = document.querySelectorAll('.gallery__item');
  }

  passNext.onclick = function(){
    stream.insertBefore(item[item.length - 1], item[0]);
    item = document.querySelectorAll('.gallery__item');
  }
});