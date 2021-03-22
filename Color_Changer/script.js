orColor = document.getElementById('logo').style.color
function colorChange(){
    var elem = document.getElementById('logo');
    if (elem.style.color == orColor|| elem.style.color == 'pink'){
        elem.style.color= 'gray'
    }else{
        elem.style.color = 'pink'
    }
}
newColor = 'blue'
function colorChange2(){
    var elem = document.getElementById('logo');
    if (elem.style.color == newColor){
      elem.style.color= 'red'
    }else{
    elem.style.color = 'blue';
    }
    }