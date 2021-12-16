// variables
var pxl = document.getElementsByClassName('pixel');
var clr = document.getElementsByClassName('color');
var res = document.getElementById('reset');
var colornow = document.getElementById('newcolor');
currentcolor = 'red';
var clicker = false;
// variables
console.log(pxl);


//color track



//color track


// mouse track
document.body.addEventListener('mousedown', function(event) {
    clicker = true;
    console.log(clicker);} );
    document.body.addEventListener('mouseup', function(event) {
        clicker = false;
        console.log(clicker);} );
// mouse track



for (var i = 0; i < pxl.length; i++) {
    
    pxl[i].addEventListener('mouseenter', function(event) {
        if (clicker == true) {
        console.log('Pressed!');
        this.style.backgroundColor = `${currentcolor}`;
        
        }
    });
}

// colors 

for (var i = 0; i < clr.length; i++) {
    
    clr[i].addEventListener('mousedown', function(event) {
        console.log('color changed');
       currentcolor =  this.getAttribute('id');
       console.log(currentcolor);
       colornow.style.backgroundColor = `${currentcolor}`; // how to get data from input hex?
        
//         currentcolor = clr[i].getAttribute('id');

    });
}

// reset

res.addEventListener('click', function(event) {
    for (var i = 0; i < pxl.length; i++) {
        pxl[i].style.backgroundColor = 'white';
    } 
} )


document.getElementById('newcolor').style.backgroundColor = `${currentcolor}`;