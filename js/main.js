// es6-shim
function goToSection(section) {
    if (section == 'home') {
        window.location.href = 'index.html'
    } else if (section == 'contact') {
        window.location.href = 'contact.html'
    } else if (section == 'about') {
        window.location.href = 'about.html'
    } else if (section == 'faqs') {
        window.location.href = 'faqs.html'
    } else if (section == 'donate') {
        window.location.href = 'donate.html'
    }
}

function listView() {
    document.querySelector('.cards').classList.add('list-view')
    document.querySelector('.categories-container').classList.add('sm')
    document.querySelector('[data-layout="list"] svg path').style.fill = '#D0021B'
    document.querySelector('[data-layout="grid"] svg path').style.fill = '#C4CDD5'
}

function gridView() {
    document.querySelector('.cards').classList.remove('list-view')
    document.querySelector('.categories-container').classList.remove('sm')
    document.querySelector('[data-layout="grid"] svg path').style.fill = '#D0021B'
    document.querySelector('[data-layout="list"] svg path').style.fill = '#C4CDD5'
}

function showSearchBar() {
    var menuHide = document.querySelectorAll('.jsHideToSearch')
    document.querySelector('.nav-search').style.display = 'inline-block'
    document.querySelector('.nav-search').style.opacity = '1'
    document.querySelector('.close-search').style.display = 'inline-block'
    for (var i = 0; i < menuHide.length; i++) {
        menuHide[i].style.display = 'none'
    }
}

function closeSearch() {
    var menuHide = document.querySelectorAll('.jsHideToSearch')
    document.querySelector('.nav-search').style.display = 'none'
    document.querySelector('.nav-search').style.opacity = '0'
    document.querySelector('.close-search').style.display = 'none'
    for (var i = 0; i < menuHide.length; i++) {
        menuHide[i].style.display = 'inline-block'
    }
}
// document.querySelector('.close-search').addEventListener('click', function () {
//   document.querySelector('.nav-search').style.display = 'none'
//   document.querySelector('.nav-search').style.opacity = '0'
//   document.querySelector('.close-search').style.display = 'none'
//   for (var i = 0; i < menuHide.length; i++) {
//     menuHide[i].style.display = 'inline-block'
//   }
// })

$(document).ready(function () {
    $('.other-amount').on('focus', function () {
        console.log('h')
        $(this).next("span").css("display", "inline").fadeOut(1000);
    })
});