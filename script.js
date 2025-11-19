document.getElementById('rollBtn').addEventListener('click',()=>{
 const mat=document.querySelector('.mat-demo');
 mat.style.transform='scaleX(1)';
 const audio=new Audio('assets/roll.mp3');
 audio.play();
});
let index=0;const slides=document.querySelectorAll('.slide');setInterval(()=>{
 slides.forEach((s,i)=>s.style.transform=`translateX(${(i-index)*100}%)`);
 index=(index+1)%slides.length;
},3000);
const modal=document.getElementById('modal');const btn=document.getElementById('shopBtn');const span=document.querySelector('.close');
btn.onclick=()=>modal.style.display='block';span.onclick=()=>modal.style.display='none';window.onclick=e=>{if(e.target==modal)modal.style.display='none';};