console.log('Loaded!');

// image = the image of the dinosour
var img = document.getElementById('madi');
// if i click do
img.onclick = function(){
    var interval = setInterval(moveRight,50);
};
marginleft = 0;
moveRight = function(){
    marginleft+=1;
    img.style.marginLeft = marginleft + 'px';  
};
