document.addEventListener('DOMContentLoaded',function(){
  const toggle=document.getElementById('darkToggle');
  const body=document.body;
  // apply saved theme
  if(localStorage.getItem('theme')==='dark') body.classList.add('dark');
  toggle.addEventListener('click',()=>{
    body.classList.toggle('dark');
    const isDark=body.classList.contains('dark');
    localStorage.setItem('theme', isDark? 'dark':'light');
    toggle.textContent = isDark? '☀️' : '🌙';
  });

  // Contact form: submission is handled by Formsubmit.co via form action.
  // We show a local message if JS intercepts, but we generally let the form post so emails arrive.
  const form=document.getElementById('contactForm');
  const msg=document.getElementById('formMessage');
  if(form){
    form.addEventListener('submit',()=>{
      // lightweight UX: fire confetti and show immediate feedback while the form redirects
      msg.textContent = 'Enviando…';
      burstConfetti(12);
    });
  }
});

// Additional interactivity: menu toggle, smooth scroll, reveal on scroll, theme picker, confetti effect
document.addEventListener('DOMContentLoaded',()=>{
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav .nav-links');
  menuToggle && menuToggle.addEventListener('click', ()=> navLinks.classList.toggle('open'));

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      if(href.startsWith('#')){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
        navLinks && navLinks.classList.remove('open');
      }
    });
  });

  // Reveal elements on scroll
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
  },{threshold:0.15});
  document.querySelectorAll('.features article, .reveal, .hero-content').forEach(el=>io.observe(el));

  // Theme color buttons
  document.querySelectorAll('.theme-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const color = btn.dataset.color;
      document.documentElement.style.setProperty('--accent', color);
      // derive a second accent slightly shifted
      document.documentElement.style.setProperty('--accent-2', shadeColor(color,20));
      localStorage.setItem('accent', color);
    });
  });
  const savedAccent = localStorage.getItem('accent');
  if(savedAccent) document.documentElement.style.setProperty('--accent', savedAccent);

  // small confetti burst when form submitted
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', ()=>{
      burstConfetti(24);
    });
  }

  // helpers
  function shadeColor(hex, percent){
    const f = hex.slice(1), t = percent<0?0:255, p = Math.abs(percent)/100;
    const R = parseInt(f.substring(0,2),16), G = parseInt(f.substring(2,4),16), B = parseInt(f.substring(4,6),16);
    const r = Math.round((t-R)*p)+R, g=Math.round((t-G)*p)+G, b=Math.round((t-B)*p)+B;
    return `#${(r<<16 | g<<8 | b).toString(16).padStart(6,'0')}`;
  }

  function burstConfetti(count){
    const area = document.body;
    for(let i=0;i<count;i++){
      const el = document.createElement('div');
      el.className = 'confetti';
      el.style.position = 'fixed';
      el.style.left = (50 + (Math.random()-0.5)*40) + '%';
      el.style.top = (30 + Math.random()*20) + '%';
      el.style.width = el.style.height = (6 + Math.random()*8) + 'px';
      el.style.background = ['#ffd166','#ef476f','#06d6a0','#118ab2','#ffd54a'][Math.floor(Math.random()*5)];
      el.style.opacity = '0.95';
      el.style.borderRadius = (Math.random()*50)+'%';
      el.style.transform = `translateY(0) rotate(${Math.random()*360}deg)`;
      el.style.zIndex = 9999;
      area.appendChild(el);
      const dy = 200 + Math.random()*300;
      el.animate([{transform:'translateY(0) rotate(0deg)', opacity:1},{transform:`translateY(${dy}px) rotate(360deg)`, opacity:0}],{duration:900+Math.random()*800,easing:'cubic-bezier(.2,.8,.2,1)'}).onfinish = ()=> el.remove();
    }
  }
});
