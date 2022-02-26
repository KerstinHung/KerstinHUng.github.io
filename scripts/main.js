var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/orangeMonster.png'){
        myImage.setAttribute('src', 'images/profile.png');
    }else{
        myImage.setAttribute('src', 'images/orangeMonster.png');
    }
}

myButton.onclick = function(){
    setUserName();
}

function setUserName(){
    let myName = prompt('Please enter your name'); /* prompt 有點像 alert, 但它會要求使用者輸入文字*/
    if(!myName || myName == null){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Henlo, ' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Henlo, ' + storedName;
}