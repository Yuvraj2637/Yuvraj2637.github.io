import * as THREE from './three.module.min.js';

export function initCharacter(host,{paused=false}={}){
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(33,1,.1,50);
  camera.position.set(0,.5,9.4);camera.lookAt(0,.35,0);
  const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));
  renderer.setClearColor(0x080b10,0);
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.25;
  host.append(renderer.domElement);
  renderer.domElement.setAttribute('aria-hidden','true');
  const ambient=new THREE.HemisphereLight(0xc4edf7,0x17223f,2.3);scene.add(ambient);
  const key=new THREE.DirectionalLight(0xffffff,4);key.position.set(-3,5,5);scene.add(key);
  const rim=new THREE.DirectionalLight(0x58f0e1,4);rim.position.set(3,2,-3);scene.add(rim);
  const side=new THREE.PointLight(0x527dff,38,15);side.position.set(-3,0,2);scene.add(side);
  const robot=new THREE.Group();scene.add(robot);robot.position.set(.1,-.1,0);robot.rotation.y=-.18;
  const shell=new THREE.MeshStandardMaterial({color:0xdbe8eb,metalness:.55,roughness:.28});
  const dark=new THREE.MeshStandardMaterial({color:0x122b43,metalness:.6,roughness:.3});
  const trim=new THREE.MeshStandardMaterial({color:0x46566c,metalness:.85,roughness:.25});
  const visor=new THREE.MeshPhysicalMaterial({color:0x07121c,metalness:.65,roughness:.16,clearcoat:1,clearcoatRoughness:.1});
  const cyan=new THREE.MeshStandardMaterial({color:0x7ce5e0,emissive:0x47d8d0,emissiveIntensity:1.2,metalness:.3,roughness:.25});
  const white=new THREE.MeshBasicMaterial({color:0xf2ffff});
  const sphere=new THREE.SphereGeometry(1,40,28);
  function orb(parent,material,position,scale){const mesh=new THREE.Mesh(sphere,material);mesh.position.set(...position);mesh.scale.set(...scale);parent.add(mesh);return mesh;}
  const torso=orb(robot,dark,[0,-.65,0],[.78,.88,.53]);
  const chest=orb(robot,trim,[0,-.62,.48],[.42,.45,.1]);
  const badge=orb(robot,cyan,[0,-.52,.58],[.19,.19,.045]);
  const badgeSlash=new THREE.Mesh(new THREE.BoxGeometry(.045,.23,.018),visor);badgeSlash.position.set(0,-.52,.626);badgeSlash.rotation.z=-.4;robot.add(badgeSlash);
  const collar=new THREE.Mesh(new THREE.TorusGeometry(.43,.095,12,48),trim);collar.rotation.x=Math.PI/2;collar.position.y=.12;robot.add(collar);
  const head=new THREE.Group();head.position.y=.95;robot.add(head);
  orb(head,shell,[0,0,0],[1,.84,.78]);
  orb(head,trim,[-.97,-.02,0],[.14,.3,.3]);orb(head,trim,[.97,-.02,0],[.14,.3,.3]);
  orb(head,cyan,[-1.055,-.02,.01],[.055,.17,.19]);orb(head,cyan,[1.055,-.02,.01],[.055,.17,.19]);
  orb(head,visor,[0,-.04,.66],[.83,.51,.28]);
  const eyes=new THREE.Group();eyes.position.set(0,.04,.93);head.add(eyes);
  const leftEye=orb(eyes,cyan,[-.31,0,0],[.115,.16,.035]);
  const rightEye=orb(eyes,cyan,[.31,0,0],[.115,.16,.035]);
  orb(eyes,white,[-.335,.065,.035],[.026,.035,.012]);orb(eyes,white,[.285,.065,.035],[.026,.035,.012]);
  const smilePoints=[];for(let i=0;i<=16;i++){const x=-.22+i*.44/16;smilePoints.push(new THREE.Vector3(x,-.2- .085*Math.sin(i/16*Math.PI),.94));}
  const smile=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(smilePoints),24,.018,8,false),cyan);head.add(smile);
  const antenna=new THREE.Mesh(new THREE.CylinderGeometry(.035,.05,.3,12),trim);antenna.position.set(.32,.91,-.05);antenna.rotation.z=-.13;head.add(antenna);
  orb(head,cyan,[.34,1.09,-.05],[.09,.09,.09]);
  // Subtle shell seams and brows give the procedural character its own identity.
  const seam=new THREE.Mesh(new THREE.TorusGeometry(.82,.012,6,64,Math.PI),trim);seam.rotation.x=Math.PI/2;seam.position.y=.11;head.add(seam);
  const brows=[];
  for(const x of [-.31,.31]){const brow=new THREE.Mesh(new THREE.CapsuleGeometry(.025,.2,4,8),shell);brow.rotation.z=Math.PI/2+(x<0?-.1:.1);brow.position.set(x,.28,.89);head.add(brow);brows.push(brow);}
  const armLeft=new THREE.Group();armLeft.position.set(-.77,-.3,0);robot.add(armLeft);
  orb(armLeft,trim,[0,0,0],[.23,.23,.23]);orb(armLeft,dark,[-.12,-.37,0],[.22,.43,.22]);orb(armLeft,shell,[-.16,-.74,.05],[.24,.25,.23]);armLeft.rotation.z=-.12;
  const armRight=new THREE.Group();armRight.position.set(.77,-.3,0);robot.add(armRight);
  orb(armRight,trim,[0,0,0],[.23,.23,.23]);orb(armRight,dark,[.12,-.37,0],[.22,.43,.22]);orb(armRight,shell,[.16,-.74,.05],[.24,.25,.23]);armRight.rotation.z=.13;
  for(const x of [-.36,.36]){orb(robot,trim,[x,-1.48,.05],[.23,.35,.25]);orb(robot,dark,[x,-1.72,.13],[.29,.2,.39]);orb(robot,cyan,[x,-1.74,.46],[.15,.035,.02]);}
  const satellites=new THREE.Group();scene.add(satellites);
  const shapes=[];
  for(let i=0;i<5;i++){
    const geometry=i%2===0?new THREE.IcosahedronGeometry(.1+i*.015,0):new THREE.TorusGeometry(.13,.025,8,28);
    const mesh=new THREE.Mesh(geometry,i%2===0?trim:cyan);const angle=i/5*Math.PI*2;
    mesh.position.set(Math.cos(angle)*1.85,Math.sin(angle)*1.55+.2,-.6-i*.12);mesh.rotation.set(i*.5,i*.7,0);satellites.add(mesh);shapes.push(mesh);
  }
  const ring=new THREE.Mesh(new THREE.TorusGeometry(2.05,.008,6,100),new THREE.MeshBasicMaterial({color:0x36626c,transparent:true,opacity:.35}));ring.rotation.set(.5,.25,-.5);ring.position.z=-.8;scene.add(ring);
  const target={x:0,y:0},look={x:0,y:0};let waveUntil=0,visible=true,frame=0,lastTime=0,needsRender=true,contextLost=false;
  function resize(){const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;camera.aspect=w/h;camera.position.z=9.4;camera.updateProjectionMatrix();renderer.setSize(w,h);needsRender=true;}
  const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(host);resize();
  function pointer(event){if(paused)return;target.x=(event.clientX/innerWidth-.5)*2;target.y=(event.clientY/innerHeight-.5)*2;needsRender=true;}
  addEventListener('pointermove',pointer,{passive:true});
  function wave(){if(paused)return;waveUntil=performance.now()+2300;needsRender=true;}
  host.addEventListener('click',wave);
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;needsRender=true;}).observe(host);
  renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();contextLost=true;host.querySelector('.robot-fallback')?.classList.remove('ready');});
  renderer.domElement.addEventListener('webglcontextrestored',()=>{contextLost=false;needsRender=true;});
  function animate(time){
    frame=requestAnimationFrame(animate);
    if(document.hidden||!visible||contextLost)return;
    if(paused&&!needsRender)return;
    if(time-lastTime<1000/45&&!needsRender)return;lastTime=time;
    const t=time*.001;
    if(!paused){
      look.x+=(target.x-look.x)*.07;look.y+=(target.y-look.y)*.07;
      head.rotation.y=look.x*.34;head.rotation.x=look.y*.17;head.rotation.z=-look.x*.035;
      eyes.position.x=look.x*.045;eyes.position.y=.04-look.y*.025;
      robot.position.y=-.1+Math.sin(t*1.6)*.055;robot.rotation.z=Math.sin(t*.8)*.018;
      torso.scale.y=.88+Math.sin(t*1.6)*.008;
      const blink=Math.sin(t*.7)> .997 ? .07 : 1;leftEye.scale.y=rightEye.scale.y=.16*blink;
      if(time<waveUntil){const remaining=(waveUntil-time)/2300;const envelope=Math.sin(Math.min(1,remaining*4)*Math.PI/2);armRight.rotation.z=.13+envelope*(2.5+Math.sin(t*13)*.22);armRight.rotation.x=envelope*.1;}
      else{armRight.rotation.z+=(.13-armRight.rotation.z)*.08;armRight.rotation.x*=.9;}
      shapes.forEach((mesh,i)=>{mesh.rotation.y+=.006;mesh.rotation.z+=.003;mesh.position.y=Math.sin(i/5*Math.PI*2)*1.55+.2+Math.sin(t*.8+i)*.06;});
      ring.rotation.z=-.5+Math.sin(t*.18)*.08;
    }
    renderer.render(scene,camera);needsRender=false;
    host.querySelector('.robot-fallback')?.classList.add('ready');
  }
  frame=requestAnimationFrame(animate);
  return {wave,setPaused(value){paused=value;needsRender=true;},dispose(){cancelAnimationFrame(frame);resizeObserver.disconnect();removeEventListener('pointermove',pointer);renderer.dispose();}};
}
