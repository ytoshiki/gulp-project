const buttons = document.querySelector('.categories').children;

const classes = document.querySelector('.classes').children;

const classWrapper = document.querySelector('.classes');


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e)=> {

    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('active')
    }

    e.target.classList.add('active');
    const x = e.target.getAttribute('data-target');

    for (let k = 0; k < classes.length; k++) {

      classes[k].style.display = "none";

      if (classes[k].getAttribute('data-id') === x) {

        classes[k].style.display = '';

      }

      if (x == 'all') classes[k].style.display = '';
    }
  })
    
}

