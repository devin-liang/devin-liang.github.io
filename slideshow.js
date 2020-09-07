// Slideshow from W3 schools

var index = 1;
showDivs(index)

function plusDivs(n){
    showDivs(index += n);
}

function showDivs(n){
    var slide_pics = document.getElementsByClassName('slideshow');
    var slide_des = document.getElementsByClassName('photo-description');

    // wrap back to front
    if(n > slide_pics.length){
        index = 1;
    }

    // wrap to end
    if(n < 1){
        index = slide_pics.length;
    }

    // hide all photos
    for(var i = 0; i < slide_pics.length; ++i){
        slide_pics[i].style.display = "none";
        slide_des[i].style.display = "none";
    }
    slide_pics[index - 1].style.display = "inline-block";
    slide_des[index - 1].style.display = "inline-block";
}