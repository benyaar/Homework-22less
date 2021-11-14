

document.querySelector('.btn').onclick = myClick;
function myClick() {
     let a = document.querySelector('.name-1').value;
     document.querySelector('.name').innerHTML = a;
     let b = document.querySelector('.mail-1').value;
     document.querySelector('.mail').innerHTML = b;
     let c = document.querySelector('.message-1').value;
     document.querySelector('.message').innerHTML = c;
}    
document.querySelector('.clear').onclick = myClear;
function myClear() {
     document.querySelector('.name').innerHTML = "";
     document.querySelector('.mail').innerHTML = "";
     document.querySelector('.message').innerHTML = "";
} 

let ArrayOfImages = ['../img/1.jpg', '../img/2.png', '../img/3.png'];
ArrayOfImages.forEach(function(image) {
  let img = document.createElement('img');
  img.src = image;
  img.height = "100";
  img.width = "100";
  document.getElementById("imageContainer").appendChild(img)
});

document.querySelector('.test').onchange = myStyle;
function myStyle() {
     let sel = document.querySelector('.test').value;

     switch (sel) {
          case "red": 
          document.querySelector(".divTest").style.backgroundColor = "red";
          break;
          case "blue": 
          document.querySelector(".divTest").style.backgroundColor = "blue";
          break;
          case "green": 
          document.querySelector(".divTest").style.backgroundColor = "green";
          break;
          case "yellow": 
          document.querySelector(".divTest").style.backgroundColor = "yellow";
          break;

     }

    //  if (sel ==="red"){
    //       document.querySelector(".divTest").style.backgroundColor = "red";
    //  }else if (sel ==="blue"){
    //       document.querySelector(".divTest").style.backgroundColor = "blue";
    //  }else if (sel ==="green"){
    //       document.querySelector(".divTest").style.backgroundColor = "green";
    //  }else if (sel ==="yellow"){
    //       document.querySelector(".divTest").style.backgroundColor = "yellow";
    //  }
}

let elem = document.querySelector('.elem')

function createTable(tbl, rows, cols) {
    for (let i = 0; i < rows; i++){
        let tr = document.createElement('tr')
    
        for (let j = 0; j < cols; j++){
            let td = document.createElement('td')
            tr.appendChild(td)
        }
        elem.appendChild(tr)
    }
}

document.querySelector('.send').onclick = mySend;
function mySend() {
     let row1 = document.querySelector('.row').value;
     let cols1 = document.querySelector('.column').value;
     createTable(elem, row1, cols1)
}

document.querySelector('.clear2').onclick = myClear2;
function myClear2() {
     document.querySelector('.elem').innerHTML = "";
}