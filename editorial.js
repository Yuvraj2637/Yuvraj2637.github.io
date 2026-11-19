import { projects, artwork } from './projects.js';

const $ = selector => document.querySelector(selector);
const esc = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const root = document.documentElement;
let theme = 'dark';
try { theme = localStorage.getItem('yuvraj-editorial-theme') || 'dark'; } catch {}
function applyTheme() {
  root.dataset.theme = theme;
  $('#theme-toggle').setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#0A0A0C' : '#faf9f5';
  document.dispatchEvent(new Event('portfolio-theme-change'));
}
applyTheme();
$('#theme-toggle').addEventListener('click',()=>{
  theme = theme === 'dark' ? 'light' : 'dark'; applyTheme();
  try { localStorage.setItem('yuvraj-editorial-theme',theme); } catch {}
});
function updateTime(){ $('#kanpur-time').textContent = new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date()); }
updateTime();setInterval(updateTime,60000);$('#year').textContent = new Date().getFullYear();
const menuButton = $('#mobile-menu-toggle');
function closeMenu(){ $('#mobile-nav').hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation menu'); }
menuButton.addEventListener('click',()=>{const open=$('#mobile-nav').hidden;$('#mobile-nav').hidden=!open;menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');});
$('#mobile-nav').addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
let toastTimer;
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2800);}
document.querySelectorAll('[data-copy-email]').forEach(button=>button.addEventListener('click',async()=>{try{await navigator.clipboard.writeText('yuvrajsc23@iitk.ac.in');toast('Email copied. Say hello whenever you like.');}catch{toast('yuvrajsc23@iitk.ac.in');}}));

const domains=[['all','All'],['ai-ml','AI & ML'],['data-systems','Data & recommendations'],['research-physics','Research'],['core-engineering','Mechanical'],['open-source','Algorithms']];
const domainName=Object.fromEntries(domains);
const featured=new Set(['scholar','agents','tessch','spectral','shift','gasification']);
const descriptions={
  scholar:'A research assistant that brings semantic search, keyword retrieval, and source-backed answers to a corpus of 30 papers.',
  agents:'Specialized agents plan, calculate, review, and visualize answers to natural-language questions about tabular data.',
  tessch:'A behavior-based recommendation system for modular footwear, built around dwell-time signals and item similarity.',
  spectral:'Exploring visual texture across 500 paintings using Fourier spectra, shell entropy, and ideas from statistical physics.',
  shift:'Image classification under class imbalance and distribution shift, using augmentation, ensembles, and self-training.',
  mediq:'An educational ML application connecting symptom data, a trained classifier, and a Flask interface.',
  suggesteria:'An anime discovery tool that compares content features with TF-IDF and cosine similarity.',
  gasification:'Modeling municipal solid waste gasification and methanol production through kinetic and equilibrium simulation.',
  turbomachine:'Exploring compressible-flow similitude and the scaling of turbomachinery components.',
  cryogenic:'A thermodynamic study of liquid-air energy storage, with cycle, exergy, and cost analysis.',
  bicycle:'Modeling bicycle–rider dynamics to study road-induced vibration and ride comfort.',
  graph:'Graph algorithms and heuristic search applied to mazes, Sudoku, and combinatorial puzzles.',
  hotwheels:'From parametric surfaces to a physical miniature: CAD, kinematic assemblies, and additive prototyping.'
};
let activeFilter='all',query='';
function card(p){
  return `<article class="project-card"><div class="project-art" aria-hidden="true">${artwork(p.id)}</div><div class="project-card-body"><div class="project-category">${esc(domainName[p.category])} · ${esc(p.year)}</div><h3><button data-project="${p.id}">${esc(p.shortTitle||p.title)}</button></h3><p>${esc(descriptions[p.id]||p.description)}</p><div class="tags">${p.tech.slice(0,4).map(t=>`<span>${esc(t)}</span>`).join('')}</div><div class="card-footer"><span>${p.id==='tessch'?'Industry experience':p.repo?'Code & project notes':'Research & coursework'}</span><button data-project="${p.id}" aria-label="Read about ${esc(p.shortTitle||p.title)}">Read the story</button></div></div></article>`;
}
function renderProjects(){
  const filtered=projects.filter(p=>(activeFilter==='all'||p.category===activeFilter)&&(!query||`${p.title} ${p.description} ${p.tech.join(' ')} ${p.kind}`.toLowerCase().includes(query)));
  const showingAll=activeFilter==='all'&&!query;
  const gridProjects=showingAll?filtered.filter(p=>featured.has(p.id)):filtered;
  $('#project-grid').innerHTML=gridProjects.length?gridProjects.map(card).join(''):'<p class="empty-projects">No projects matched that search. Try another keyword or category.</p>';
  $('#archive').hidden=!showingAll;
  if(showingAll)$('#archive-list').innerHTML=filtered.filter(p=>!featured.has(p.id)).map(p=>`<button class="archive-row" data-project="${p.id}"><span class="archive-year">${esc(p.year)}</span><span><strong>${esc(p.shortTitle||p.title)}</strong><p>${esc(descriptions[p.id]||p.description)}</p></span><span class="archive-domain">${esc(domainName[p.category])}</span></button>`).join('');
  $('#project-result-status').textContent=`${filtered.length} projects shown${showingAll?', including the archive':''}.`;
}
$('#project-filters').innerHTML=domains.map(([id,name])=>`<button class="filter-button${id==='all'?' active':''}" data-filter="${id}" aria-pressed="${id==='all'}">${name}${id==='all'?` · ${projects.length}`:''}</button>`).join('');
$('#project-filters').addEventListener('click',event=>{const button=event.target.closest('[data-filter]');if(!button)return;activeFilter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});renderProjects();});
$('#project-search').addEventListener('input',event=>{query=event.target.value.trim().toLowerCase();renderProjects();});
renderProjects();

const projectDialog=$('#project-dialog');
let currentProject=null;
function detailContent(tab){
  const p=currentProject;if(!p)return;
  let content='';
  if(tab==='overview')content=`<p class="dialog-subtitle">${esc(p.role)} · ${esc(p.duration)}</p><p>${esc(descriptions[p.id]||p.description)}</p><h3>The question</h3><p>${esc(p.problem)}</p><div class="dialog-art">${artwork(p.id)}</div>`;
  if(tab==='approach')content=`<p>${esc(p.approach)}</p><h3>Inside the build</h3><ul>${p.details.map(d=>`<li>${esc(d.replace('guarantee 100% groundedness','review source attribution').replace('ensure precise, hallucination-free scientific discovery','support source-grounded scientific discovery'))}</li>`).join('')}</ul>`;
  if(tab==='results')content=`<div class="result-grid">${p.metrics.map(m=>`<div class="result-cell"><strong>${esc(m.value)}</strong><p>${esc(m.label)}</p><span>${esc(m.note)}</span></div>`).join('')}</div><p class="result-context">${p.id==='tessch'?'These coherence and robustness measurements use simulator-generated browsing data; they are not production conversion results.':p.id==='mediq'?'An educational ML project. The browser demonstration uses illustrative scores and is not a medical diagnosis.':p.id==='scholar'?'Reported retrieval results apply to the project’s curated corpus and evaluation queries. They do not imply perfect answers to every research question.':p.id==='agents'?'Numerical operations run in local Python tools. The use of deterministic computation does not guarantee that every plan or interpretation is correct.':'Project results are presented in their coursework or experimental context. See the source or ask me about the setup and limitations.'}</p>`;
  if(tab==='source')content=`<p>${p.repo?'The source, setup instructions, and project documentation live on GitHub.':'This work was developed in a coursework or research setting. I’m happy to talk through the implementation and methodology.'}</p><div class="tags">${p.tech.map(t=>`<span>${esc(t)}</span>`).join('')}</div><div class="source-actions" style="margin-top:25px">${p.repo?`<a class="button primary" href="${esc(p.repo)}" target="_blank" rel="noopener">View repository</a>`:''}<a class="button secondary" href="mailto:yuvrajsc23@iitk.ac.in?subject=${encodeURIComponent('Tell me about '+(p.shortTitle||p.title))}">Ask me about this project</a></div>`;
  $('#project-panel').innerHTML=content;$('#project-panel').setAttribute('aria-labelledby',`tab-${tab}`);
  document.querySelectorAll('[data-detail-tab]').forEach(b=>{b.setAttribute('aria-selected',String(b.dataset.detailTab===tab));b.tabIndex=b.dataset.detailTab===tab?0:-1;});
}
function openProject(id){currentProject=projects.find(p=>p.id===id);if(!currentProject)return;$('#dialog-kicker').textContent=`${domainName[currentProject.category]} · ${currentProject.year}`;$('#dialog-title').textContent=currentProject.title;detailContent('overview');projectDialog.showModal();projectDialog.scrollTop=0;syncDialogScroll();}
document.addEventListener('click',event=>{const button=event.target.closest('[data-project]');if(button)openProject(button.dataset.project);});
document.querySelectorAll('[data-detail-tab]').forEach(button=>{
  button.addEventListener('click',()=>detailContent(button.dataset.detailTab));
  button.addEventListener('keydown',event=>{const tabs=[...document.querySelectorAll('[data-detail-tab]')];let n=tabs.indexOf(button);if(event.key==='ArrowRight')n=(n+1)%tabs.length;else if(event.key==='ArrowLeft')n=(n-1+tabs.length)%tabs.length;else if(event.key==='Home')n=0;else if(event.key==='End')n=tabs.length-1;else return;event.preventDefault();detailContent(tabs[n].dataset.detailTab);tabs[n].focus();});
});

const resumeData=[['MASTER_RESUME.pdf','The complete picture','MASTER RÉSUMÉ','All projects, academic background, and experience.'],['SDE.pdf','Software engineering','SDE','Systems, algorithms, APIs, and software projects.'],['AI_ML.pdf','AI & machine learning','AI / ML','Retrieval, agents, classifiers, and evaluation.'],['DATA_ANALYST.pdf','Data & analytics','DATA ANALYST','Data processing, analysis, and visual explanations.'],['CORE.pdf','Core engineering','MECHANICAL','Thermodynamics, simulation, mechanics, and design.'],['PRODUCT_OR_CONSULT.pdf','Product & consulting','PRODUCT / STRATEGY','Problem framing, product thinking, and leadership.']];
$('#resume-grid').innerHTML=resumeData.map(([file,title,kicker,description])=>`<article class="resume-card"><span class="mono">${kicker}</span><h3>${title}</h3><p>${description}</p><div class="resume-actions"><a href="${file}" download="Yuvraj-${file}">Download PDF</a><a href="${file}" target="_blank" rel="noopener" aria-label="Preview ${title} résumé">Preview</a></div></article>`).join('');

const commandDialog=$('#command-dialog');
const sections=[['Selected work','#work'],['About Yuvraj','#about'],['Experience & leadership','#experience'],['Interactive lab','#lab'],['Résumés','#resumes'],['Off the clock','#photos'],['Contact','#contact']];
let commandItems=[],commandIndex=0;
function renderCommandResults(){const term=$('#command-search').value.trim().toLowerCase();commandItems=[...sections.map(([label,target])=>({label,target,type:'SECTION'})),...projects.map(p=>({label:p.shortTitle||p.title,project:p.id,type:'PROJECT'}))].filter(item=>!term||item.label.toLowerCase().includes(term));commandIndex=0;$('#command-results').innerHTML=commandItems.length?commandItems.map((item,i)=>`<div role="listitem"><button class="command-item${i===0?' selected':''}" data-command="${i}"><span>${esc(item.label)}</span><span class="mono">${item.type}</span></button></div>`).join(''):'<p class="empty-projects">Nothing found. Try a project name or section.</p>';}
function selectCommand(index){const item=commandItems[index];if(!item)return;commandDialog.close();if(item.project)openProject(item.project);else document.querySelector(item.target).scrollIntoView({behavior:reduced.matches?'instant':'smooth'});}
function openCommand(){closeMenu();if(projectDialog.open)projectDialog.close();$('#command-search').value='';renderCommandResults();commandDialog.showModal();syncDialogScroll();$('#command-search').focus();}
$('.command-trigger').addEventListener('click',openCommand);
$('#command-search').addEventListener('input',renderCommandResults);
$('#command-results').addEventListener('click',event=>{const b=event.target.closest('[data-command]');if(b)selectCommand(Number(b.dataset.command));});
$('#command-search').addEventListener('keydown',event=>{if(event.key==='Enter'){event.preventDefault();selectCommand(commandIndex);}else if((event.key==='ArrowDown'||event.key==='ArrowUp')&&commandItems.length){event.preventDefault();commandIndex=(commandIndex+(event.key==='ArrowDown'?1:-1)+commandItems.length)%commandItems.length;$('#command-results').querySelectorAll('.command-item').forEach((b,i)=>b.classList.toggle('selected',i===commandIndex));$('#command-results').querySelectorAll('.command-item')[commandIndex]?.scrollIntoView({block:'nearest'});}});
document.addEventListener('keydown',event=>{if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k'){event.preventDefault();commandDialog.open?commandDialog.close():openCommand();}if(event.key==='Escape')closeMenu();});
function syncDialogScroll(){document.body.style.overflow=projectDialog.open||commandDialog.open?'hidden':'';}
for(const dialog of [projectDialog,commandDialog]){dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',syncDialogScroll);dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();});}

const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}}),{threshold:.05});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
let scrollQueued=false;
function scrollUpdate(){const total=document.documentElement.scrollHeight-innerHeight;$('.reading-progress').style.transform=`scaleX(${total>0?scrollY/total:0})`;document.body.classList.toggle('scrolled',scrollY>30);const current=sections.map(([,id])=>document.querySelector(id)).filter(el=>el.getBoundingClientRect().top<180).at(-1);document.querySelectorAll('.desktop-nav a').forEach(a=>a.classList.toggle('active',a.hash===`#${current?.id}`));scrollQueued=false;}
addEventListener('scroll',()=>{if(!scrollQueued){scrollQueued=true;requestAnimationFrame(scrollUpdate);}},{passive:true});scrollUpdate();

// Original signal drawing: no remote media or 3D download on the main page.
const signal=$('#signal-canvas'),ctx=signal.getContext('2d');let signalWidth=1,signalHeight=56,signalVisible=true,signalFrame=0,lastSignal=0;
function sizeSignal(){const r=signal.getBoundingClientRect();signalWidth=r.width;signalHeight=r.height;const dpr=Math.min(devicePixelRatio,2);signal.width=signalWidth*dpr;signal.height=signalHeight*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);drawSignal(0);}
function drawSignal(time){ctx.clearRect(0,0,signalWidth,signalHeight);const style=getComputedStyle(root);ctx.strokeStyle=style.getPropertyValue('--line').trim();ctx.lineWidth=.5;for(let x=0;x<signalWidth;x+=23){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,signalHeight);ctx.stroke();}for(let y=12;y<signalHeight;y+=18){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(signalWidth,y);ctx.stroke();}for(let layer=0;layer<2;layer++){ctx.beginPath();ctx.strokeStyle=layer===0?style.getPropertyValue('--accent').trim():style.getPropertyValue('--subtle').trim();ctx.lineWidth=layer===0?1.7:1;ctx.globalAlpha=layer===0?1:.45;for(let x=0;x<=signalWidth;x+=2){const phase=x/signalWidth*Math.PI*6+time*.0004;const y=signalHeight*.52+Math.sin(phase+layer*.8)*8+Math.sin(phase*2.3)*4+Math.cos(phase*.7)*5;if(x===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.stroke();}ctx.globalAlpha=1;}
function animateSignal(time){signalFrame=requestAnimationFrame(animateSignal);if(document.hidden||!signalVisible||reduced.matches||time-lastSignal<45)return;lastSignal=time;drawSignal(time);}
new ResizeObserver(sizeSignal).observe(signal);new IntersectionObserver(entries=>{signalVisible=entries[0].isIntersecting;}).observe(signal);document.addEventListener('portfolio-theme-change',()=>drawSignal(0));signalFrame=requestAnimationFrame(animateSignal);

let labLoaded=false;
$('.lab-disclosure').addEventListener('toggle',()=>{if($('.lab-disclosure').open&&!labLoaded){labLoaded=true;import('./lab.js').catch(()=>{labLoaded=false;toast('The lab could not load. Please try again.');});}});
const playDetails=$('.play-disclosure');let character=null,characterStarted=false;
playDetails.addEventListener('toggle',async()=>{if(playDetails.open&&!characterStarted){characterStarted=true;try{const {initCharacter}=await import('./character.js');character=initCharacter($('#character-scene'),{paused:reduced.matches});$('.character-loading')?.remove();}catch{$('.character-loading').textContent='The workshop assistant needs WebGL. The rest of the portfolio works without it.';}}character?.setPaused(!playDetails.open||reduced.matches);});
$('#wave-btn').addEventListener('click',()=>{character?.wave();toast('Hello, curious human.');});
reduced.addEventListener('change',()=>character?.setPaused(!playDetails.open||reduced.matches));
const toolNames=['Python','FastAPI','SQL','Pandas','C / C++','MATLAB','TensorFlow','Fusion 360','Git'];
const toolStates=toolNames.map(name=>{const el=document.createElement('button');el.className='tool-block';el.textContent=name;el.setAttribute('aria-label',`${name}, draggable tool. Use arrow keys to move.`);$('#play-tools').append(el);return {el,x:0,y:0,drag:false,lastX:0,lastY:0};});
function moveTool(t,dx,dy){const parent=$('#play-tools').getBoundingClientRect(),r=t.el.getBoundingClientRect();const baseX=r.left-t.x-parent.left,baseY=r.top-t.y-parent.top;t.x=Math.max(-baseX,Math.min(parent.width-baseX-r.width,t.x+dx));t.y=Math.max(-baseY,Math.min(parent.height-baseY-r.height,t.y+dy));t.el.style.transform=`translate(${t.x}px,${t.y}px)`;}
toolStates.forEach(t=>{t.el.addEventListener('pointerdown',event=>{t.drag=true;t.lastX=event.clientX;t.lastY=event.clientY;t.el.setPointerCapture(event.pointerId);t.el.style.zIndex='2';});t.el.addEventListener('pointermove',event=>{if(!t.drag)return;moveTool(t,event.clientX-t.lastX,event.clientY-t.lastY);t.lastX=event.clientX;t.lastY=event.clientY;});for(const name of ['pointerup','pointercancel','lostpointercapture'])t.el.addEventListener(name,()=>{t.drag=false;t.el.style.zIndex='';});t.el.addEventListener('keydown',event=>{const d={ArrowUp:[0,-15],ArrowDown:[0,15],ArrowLeft:[-15,0],ArrowRight:[15,0]}[event.key];if(d){event.preventDefault();moveTool(t,...d);}});});
$('#reset-tools').addEventListener('click',()=>toolStates.forEach(t=>{t.x=t.y=0;t.el.style.transform='';}));

const photoDialog = document.querySelector('#photo-dialog');
document.querySelectorAll('[data-photo]').forEach(button => button.addEventListener('click', () => {
  document.querySelector('#photo-full').src = button.dataset.photo;
  document.querySelector('#photo-full').alt = button.querySelector('img').alt;
  document.querySelector('#photo-caption').textContent = button.dataset.caption;
  photoDialog.showModal();
  document.body.style.overflow = 'hidden';
}));
photoDialog.querySelector('.photo-close').addEventListener('click', () => photoDialog.close());
photoDialog.addEventListener('close', () => { document.body.style.overflow = ''; });
photoDialog.addEventListener('click', event => {
  if (event.target !== photoDialog) return;
  const r = photoDialog.getBoundingClientRect();
  if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) photoDialog.close();
});
