// for box 1
let box1=document.getElementById('box1');
box1.addEventListener('mouseenter',function (){
    let a=(Math.floor(Math.random()*100));
    box1.innerHTML=a;
  box1.addEventListener('mouseleave',function (){
box1.innerHTML='1';
  })  
});


// for box2
let box2=document.getElementById('box2');
let clr='red';
box2.addEventListener('mouseenter',function(){
    
    if(clr=='red'){
        box2.style.backgroundColor='red';
        clr='green';
    }
    else if(clr=='green'){
        box2.style.backgroundColor='green';
        clr='blue';
    s
    }
    else{
        box2.style.backgroundColor='blue';
        clr='red';
    }
});
  box2.addEventListener('mouseleave',function(){
box2.style.backgroundColor='white';
  })  

  //box3

let box3=document.getElementById('box3');

box3.addEventListener('mouseenter',function(){
  let a=Math.floor(Math.random()*256);
  let b=Math.floor(Math.random()*256);
  let c=Math.floor(Math.random()*256);
  box3.style.backgroundColor=`rgb(${a},${b},${c})`;    
});
  box3.addEventListener('mouseleave',function(){
box3.style.backgroundColor='white';
  }) ; 


  //for box4
let box4=document.getElementById('box4');

box4.addEventListener('click',function(){
  let a=Math.floor(Math.random()*256);
  let b=Math.floor(Math.random()*256);
  let c=Math.floor(Math.random()*256);
  box1.style.backgroundColor=`rgb(${c},${b},${a})`;    
  box2.style.backgroundColor=`rgb(${b},${a},${c})`;    
  box3.style.backgroundColor=`rgb(${a},${c},${b})`;    
});
  box4.addEventListener('mouseleave',function(){
box1.style.backgroundColor='white';
box2.style.backgroundColor='white';
box3.style.backgroundColor='white';
  }) ; 

