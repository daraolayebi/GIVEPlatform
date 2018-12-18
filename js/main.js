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

$(document).ready(function () {
    $('.other-amount').on('focus', function () {
        console.log('h')
        $(this).next("span").css("display", "inline").fadeOut(1000);
    })

    $('.tabs li').click(function () {
        //var tab_id = $(this).attr('data-tab');
        var tab_id = $(this).attr('href');
        $('.tabs li, .tab-link, .tab-content').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

    $('.categories a').on('click', function () {
        var target = $(this).attr('href');
        $(this).addClass('active').siblings().removeClass('active')
        console.log(target)
        $(target).show().siblings().hide();
    });

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 900, 'linear');
    });

});