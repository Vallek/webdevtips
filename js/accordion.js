'use strict';
let accItem = document.querySelectorAll('.sidebar__notebook');
let accHeading = document.querySelectorAll('.sidebar__title');

accHeading.forEach(
    function getClick(el) {
        el.addEventListener('click', toggleItem);
    }
);

function toggleItem() {
    let itemClass = this.parentNode.classList;
    if (itemClass.contains('sidebar__notebook_open')) {
        this.parentNode.classList.remove('sidebar__notebook_open');     
        this.parentNode.classList.add('sidebar__notebook_close');     
    }
    else {
        accItem.forEach(
            function closeIt(it) {
                it.classList.remove('sidebar__notebook_open');
                it.classList.add('sidebar__notebook_close');
            }
        );
        this.parentNode.classList.remove('sidebar__notebook_close'); 
        this.parentNode.classList.add('sidebar__notebook_open'); 
    }
}
