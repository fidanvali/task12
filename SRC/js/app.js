// Sub-menu elementini tapmaq
const subMenu = document.querySelector('.sub-menu');

// Home düyməsinin üzərinə gəldikdə sub-menu açılmasını təmin edin
const homeMenuItem = document.querySelector('.menu-item');

homeMenuItem.addEventListener('mouseenter', () => {
    subMenu.style.display = 'block';
});

// Home düyməsindən çıxdıqda sub-menu bağlansın
homeMenuItem.addEventListener('mouseleave', () => {
    subMenu.style.display = 'none';
});
// Sub-menu elementlərini tapmaq
const tournamentMenu = document.getElementById('tournament-menu');
const tournamentSubMenu = document.getElementById('tournament-submenu');

// "TOURNAMENT" üzərinə gəldikdə sub-menu açılsın
tournamentMenu.addEventListener('mouseenter', () => {
    tournamentSubMenu.style.display = 'block';
});

// "TOURNAMENT" üzərindən çıxdıqda sub-menu bağlansın
tournamentMenu.addEventListener('mouseleave', () => {
    tournamentSubMenu.style.display = 'none';
});
// Sub-menu elementlərini tapmaq
const pagesMenu = document.getElementById('pages-menu');
const pagesSubMenu = document.getElementById('pages-submenu');

// "PAGES" üzərinə gəldikdə sub-menu açılsın
pagesMenu.addEventListener('mouseenter', () => {
    pagesSubMenu.style.display = 'block';
});

// "PAGES" üzərindən çıxdıqda sub-menu bağlansın
pagesMenu.addEventListener('mouseleave', () => {
    pagesSubMenu.style.display = 'none';
});
// Sub-menu elementlərini tapmaq
const newsMenu = document.getElementById('news-menu');
const newsSubMenu = document.getElementById('news-submenu');

// "NEWS" üzərinə gəldikdə sub-menu açılsın
newsMenu.addEventListener('mouseenter', () => {
    newsSubMenu.style.display = 'block';
});

// "NEWS" üzərindən çıxdıqda sub-menu bağlansın
newsMenu.addEventListener('mouseleave', () => {
    newsSubMenu.style.display = 'none';
});

"use strict";
(function(){
    var cursor = document.querySelector('.cursor');
    var cursorLazy = document.querySelector('.cursor-lazy');
    var links = document.querySelectorAll('a');
    var editCursor = function editCursor(event){
        cursor.style.left = event.clientX + 'px';
        cursor.style.top = event.clientY + 'px';
        cursorLazy.style.left = event.clientX + 'px';
        cursorLazy.style.top = event.clientY+ 'px';
    };
    window.addEventListener('mousemove', editCursor);

} )();
