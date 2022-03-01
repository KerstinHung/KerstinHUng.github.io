var myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/orangeMonster.png'){
        myImage.setAttribute('src', 'images/profile.png');
    }else{
        myImage.setAttribute('src', 'images/orangeMonster.png');
    }
}