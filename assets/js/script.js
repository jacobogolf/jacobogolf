const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{ if(entry.isIntersecting) entry.target.classList.add('visible'); });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',(e)=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';}});
