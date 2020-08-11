$('.wrapper').css('opacity', 0);
const navList = document.querySelector('.naviList');
const pseudoBeforeWidth = getComputedStyle(navList, ':before').height;
$('.badge').css('width', pseudoBeforeWidth);

$(window).on("load", function() {
    $('.loader').css('opacity', 0);
    $('.wrapper').css('opacity',1);
});

const stickyNavWidth = 547;
let leftPosStickyNav = (window.innerWidth-stickyNavWidth)/2;
let menuMove = false;
console.log(window.innerWidth);

$(document).scroll(function(e) {
    windowPos = $(window).scrollTop();
    if(windowPos>150 && menuMove==false) {
        moveNavi();
        menuMove = true;
    } else if (windowPos==0 && menuMove==true) {
        moveNaviBack();
        menuMove = false;
    }

});

function moveNaviBack() {
    let i=0;
    $('.iconWrap').each(function(){
        let child = this
        i++;
        switch(i) {
            case 1:
                moveHomeBack(child);
                break;
            case 2:
                moveAboutBack(child);
                break;
            case 3:
                moveWorkBack(child);
                break;
            case 4:
                moveContactBack(child);
                break;
        }
    }); 
}

function moveContactBack(child) {
    let navUl = $(child).parent().parent();
    const pos = leftPosStickyNav+450-100;
    $(navUl).css({ 
        fontSize: 0,
    }).animate({
        fontSize: 45,
        top: '+=550',
        left: '-='+pos
    },{
        easing: "swing",
        duration: 3000
    });
}

function moveAboutBack(child) {
    let navUl = $(child).parent().parent();
    const pos = leftPosStickyNav+150-100;
    $(navUl).css({ 
        fontSize: 0,
    }).animate({
        fontSize: 45,
        top: '+=250',
        left: '-='+pos
    },{
        easing: "swing",
        duration: 3000
    });
}

function moveWorkBack(child) {
    let navUl = $(child).parent().parent();
    const pos = leftPosStickyNav+300-100;
    $(navUl).css({ 
        fontSize: 0,
    }).animate({
        fontSize: 45,
        top: '+=400',
        left: '-='+pos
    },{
        easing: "swing",
        duration: 3000
    });
}

function moveHomeBack(child) {
    let navUl = $(child).parent().parent();
    const pos = leftPosStickyNav-100;
    $(navUl).css({ 
        fontSize: 0,
    }).animate({
        fontSize: 45,
        top: '+=100',
        left: '-='+pos
    },{
        easing: "swing",
        duration: 3000
    });
}

function moveNavi() {
    let i=0;
    $('.iconWrap').each(function(){
        let child = this
        i++;
        switch(i) {
            case 1:
                moveHome(child);
                break;
            case 2:
                moveAbout(child);
                break;
            case 3:
                moveWork(child);
                break;
            case 4:
                moveContact(child);
                break;
        }
    }); 
}

function moveContact(child) {
    let navUl = $(child).parent().parent();
    const pos = leftPosStickyNav+450-100;
    $(navUl).css({ 
        fontSize: 0,
    }).animate({
        fontSize: 45,
        top: 0,
        left: '+='+pos
    },{
        easing: "swing",
        duration: 3000
    });
}

function moveAbout(child) {
    let navUl = $(child).parent().parent();
    const pos = leftPosStickyNav+150-100;
    $(navUl).css({ 
        fontSize: 0,
    }).animate({
        fontSize: 45,
        top: 0,
        left: '+='+pos
    },{
        easing: "swing",
        duration: 3000
    });
}

function moveWork(child) {
    let navUl = $(child).parent().parent();
    const pos = leftPosStickyNav+300-100;
    $(navUl).css({ 
        fontSize: 0,
    }).animate({
        fontSize: 45,
        top: 0,
        left: '+='+pos
    },{
        easing: "swing",
        duration: 3000
    });
}

function moveHome(child) {
    let navUl = $(child).parent().parent();
    const pos = leftPosStickyNav-100;
    $(navUl).css({ 
        fontSize: 0,
    }).animate({
        fontSize: 45,
        top: 0,
        left: '+='+pos
    },{
        easing: "swing",
        duration: 3000
    });
}
