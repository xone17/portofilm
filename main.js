
// Tabs and category filtering for Film page, lightbox, and theme toggle
document.addEventListener('DOMContentLoaded', function(){
  // Tab nav
  const navBtns = document.querySelectorAll('[data-tab]');
  const sections = document.querySelectorAll('.tab-section');
  navBtns.forEach(b => b.addEventListener('click', ()=>{
    const t = b.dataset.tab;
    sections.forEach(s=> s.id===t ? s.classList.remove('hidden') : s.classList.add('hidden'));
    navBtns.forEach(x=> x.classList.remove('active'));
    b.classList.add('active');
  }));
  // Film sub-tabs (category)
  const catBtns = document.querySelectorAll('.category-btn');
  catBtns.forEach(b => b.addEventListener('click', ()=>{
    catBtns.forEach(x=> x.classList.remove('active'));
    b.classList.add('active');
    const cat = b.dataset.cat;
    document.querySelectorAll('#filmGallery .card').forEach(card=>{
      if(cat==='all' || card.dataset.type===cat) { card.style.display='block'; }
      else { card.style.display='none'; }
    });
  }));
  // Build film gallery (placeholder)
 const items = [
  {img:'assets/stills/still11.jpg', title:'Mangkat', type:'fiction', desc:'Short', link:'film/mangkat.html'},
  {img:'assets/stills/ht1.jpg', title:'Hadiah Terakhir', type:'fiction', desc:'Short', link:'film/ht.html'},
  {img:'assets/stills/dkm6.png', title:'Dakwah Kudu Monetize', type:'fiction', desc:'Short', link:'film/dkm.html'},
  {img:'assets/stills/ts.jpg', title:'The Shadow I Wrote', type:'fiction', desc:'Short', link:'film/tsiw.html'},
  {img:'assets/stills/skip1.jpg', title:'Skip!', type:'fiction', desc:'Short', link:'film/skip.html'},
  {img:'assets/stills/sw2.jpg', title:'Switchside', type:'fiction', desc:'Short', link:'film/sw.html'},
  {img:'assets/stills/bt3.png', title:'Bakti', type:'fiction', desc:'Short', link:'film/bakti.html'},
  {img:'assets/stills/kg3.jpg', title:'Kita Sama Sama Gila', type:'fiction', desc:'Short', link:'film/kssg.html'},
  {img:'assets/stills/dn1.jpg', title:'Halaman Terakhir', type:'fiction', desc:'Short', link:'film/halter.html'},
  {img:'assets/stills/cup.png', title:'Cup of Coffe', type:'fiction', desc:'Short', link:'film/cup.html'},
  {img:'assets/stills/kw.png', title:'Kopi Warga', type:'company', desc:'ComPro', link:'film/kw.html'},
  {img:'assets/stills/ds1.png', title:'Deden Sambas', type:'documentary', desc:'Doc', link:'film/deden.html'},
  {img:'assets/stills/sbk3.png', title:'Sobek Life & Races', type:'documentary', desc:'Doc', link:'film/sobek.html'}
];

  const gallery = document.getElementById('filmGallery');
  items.forEach(it=>{
    const el = document.createElement('a');
    el.href = it.link;
    el.className = 'card block frame';
    el.dataset.type = it.type==='company' ? 'company' : it.type;
    el.innerHTML = `<div class="relative overflow-hidden"><img src="${it.img}" class="film-thumb"><div class="absolute left-4 bottom-4 text-white"><div class="text-xs tracking-widest">${it.desc}</div><div class="text-xl font-semibold">${it.title}</div></div></div>`;
    gallery.appendChild(el);
  });
  // Lightbox for larger images (used on film detail/stills)
  document.body.addEventListener('click', function(e){
    if(e.target.matches('.still') || e.target.matches('.photo')){
      const lb = document.getElementById('lightbox');
      document.getElementById('lightImg').src = e.target.src;
      lb.classList.remove('hidden');
      lb.classList.add('flex');
    }
  });
  document.getElementById('closeLight').addEventListener('click', ()=>{
    document.getElementById('lightbox').classList.add('hidden');
    document.getElementById('lightbox').classList.remove('flex');
  });
  // theme toggle simple
  const themeToggle = document.getElementById('themeToggle');
  themeToggle && themeToggle.addEventListener('click', ()=>{
    const b = document.body;
    if(b.getAttribute('data-theme')==='dark'){ b.setAttribute('data-theme','light'); themeToggle.textContent='Day'; }
    else { b.setAttribute('data-theme','dark'); themeToggle.textContent='Night'; }
  });
  
});
