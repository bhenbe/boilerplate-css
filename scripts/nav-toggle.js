const toggle = document.querySelector('[aria-pressed]');

toggle.addEventListener('click', (e) => {  
  let pressed = e.target.getAttribute('aria-pressed') === 'true';
  e.target.setAttribute('aria-pressed', String(!pressed));
  /***toggle***/
  e.preventDefault();
  [].map.call(document.querySelectorAll('.nav'), function(el) {
    el.classList.toggle('nav--active');
  });
});