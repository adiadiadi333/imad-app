console.log('Loaded!');

// image = the image of the dinosour
var img = document.getElementById('madi');
// if i click do
img.onclick = function(){
    var interval = setInterval(moveRight,100);
};
marginleft = 0;
moveRight = function(){
    marginleft+=10;
    img.style.marginLeft = marginleft + 'px';  
};
