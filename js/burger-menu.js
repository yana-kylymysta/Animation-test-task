const menuIcon = document.querySelector('.header__icon');
const menuBody = document.querySelector('.header__block');
const menuItems = document.querySelectorAll('.header__link');
const visibilityAnimateBlocks = document.querySelectorAll('.visibility-animate');

const closeWindow = () => {
     for (var i = visibilityAnimateBlocks.length - 1; i >= 0; i--) {
        (function(index) {
            setTimeout(() => {
            visibilityAnimateBlocks[index].classList.remove('visible');
            }, (visibilityAnimateBlocks.length - index) * 300); 
        })(i);
    }
    setTimeout(function() {
      menuBody.classList.remove('active');
    }, visibilityAnimateBlocks.length * 400);
}

menuIcon.addEventListener('click', () => {
        document.body.classList.toggle('lock');
        menuIcon.classList.toggle('active');

    if(menuBody.classList.contains('active')) {
        closeWindow();
    } else {
    visibilityAnimateBlocks.forEach(function(block, index) {
        setTimeout(function() {
            block.classList.add('visible');
        }, index * 300); });
        menuBody.classList.add('active');
        }
    })

menuItems.forEach(el => {
    el.addEventListener('click', ({target}) => {
        if(menuBody.matches('.active')) {
            closeWindow();
            document.body.classList.remove('lock');
            menuIcon.classList.remove('active');   
        }
    })
})






