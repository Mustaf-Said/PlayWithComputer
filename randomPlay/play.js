let computer = document.querySelector('.computer');
let player = document.querySelector('.player');
let van = document.querySelector('p');
let btn = document.querySelector('.btn');
let btn2 = document.querySelector('.reset');
let btn3 = document.querySelector('.reset2');
let rp = document.querySelector('.rp');
let rc = document.querySelector('.rc');
let rArea = document.querySelector('.resultArea');
let gArea = document.querySelector('.gameArea');
let dis = document.querySelector('.display');
let p = 0;
let c = 0;

btn.addEventListener('click', ()=>{
let plyr = Math.floor(Math.random() * 10 + 1);
let comp = Math.floor(Math.random() * 10 + 1);
if(plyr > comp){
  p++
  console.log('p '+ p)
  rp.innerHTML = p;
    player.innerHTML = plyr;
    computer.innerHTML = comp;
    van.innerHTML = 'Players vann';
    if (p > 3) {
  
      console.log('ok p')
    rArea.classList.add('result')
    gArea.classList.add('gameFinish')
    rArea.innerHTML = 'Player vann med total poang: ' +p +
    '</br>'+'Computer fick total poang: '+ c;
    dis.classList.remove('display')
    rArea.classList.remove('display')
    btn3.classList.remove('display')
    }
     
}else if(comp > plyr){
  c++
  console.log('c '+ c)
    rc.innerHTML = c;
    computer.innerHTML = comp;
    player.innerHTML = plyr;
    van.innerHTML = 'Computer vann';
    if (c > 3) {
  
      console.log('ok c')
      rArea.classList.add('result')
      gArea.classList.add('gameFinish')
      rArea.innerHTML = 'Computer vann med total poang: ' + c +
      '</br>'+'Player fick total poang: '+ p;
      dis.classList.remove('display')
      rArea.classList.remove('display')
      btn3.classList.remove('display')
    }
    
 }
 else if (plyr === comp) {
  player.innerHTML = plyr;
    computer.innerHTML = comp;
     van.innerHTML = 'Ni är samma';
} 

})

btn2.addEventListener('click', ()=>{
  p = 0;
  c = 0;
   player.innerHTML = '0';
    computer.innerHTML = '0';
   van.innerHTML = '';
   rc.innerHTML = '';
   rp.innerHTML = '';
   
})
 
btn3.addEventListener('click', ()=>{
  p = 0;
  c = 0;
   player.innerHTML = '0';
    computer.innerHTML = '0';
   van.innerHTML = '';
   rc.innerHTML = '';
   rp.innerHTML = '';
   gArea.classList.remove('gameFinish')
   rArea.classList.remove('result')
   rArea.classList.add('display')
   btn3.classList.add('display')
})