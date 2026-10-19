import React from "react";
import {useEffect,useRef} from "react";
export default function Fireworks(){
 const ref=useRef(null);
 useEffect(()=>{
  const c=ref.current,ctx=c.getContext("2d"); let w=0,h=0,raf=0,last=0;
  const particles=[],colors=["#ff9933","#fff","#138808","#7eb7ff"];
  const resize=()=>{const d=Math.min(devicePixelRatio||1,1.5);w=innerWidth;h=innerHeight;c.width=w*d;c.height=h*d;c.style.width=w+"px";c.style.height=h+"px";ctx.setTransform(d,0,0,d,0,0)};
  const burst=(x=Math.random()*w,y=h*(.12+Math.random()*.45))=>{const color=colors[Math.floor(Math.random()*colors.length)],n=42;
   for(let i=0;i<n;i++){const a=Math.PI*2*i/n,s=1.3+Math.random()*3.4;particles.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:1,decay:.012+Math.random()*.018,size:1+Math.random()*1.8,color})}};
  const animate=t=>{ctx.clearRect(0,0,w,h);if(t-last>1150){burst();last=t}
   for(let i=particles.length-1;i>=0;i--){const p=particles[i];p.x+=p.vx;p.y+=p.vy;p.vy+=.018;p.vx*=.992;p.vy*=.992;p.life-=p.decay;if(p.life<=0){particles.splice(i,1);continue}
    ctx.globalAlpha=p.life;ctx.fillStyle=p.color;ctx.shadowBlur=10;ctx.shadowColor=p.color;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fill()}
   ctx.globalAlpha=1;ctx.shadowBlur=0;raf=requestAnimationFrame(animate)};
  resize();addEventListener("resize",resize);raf=requestAnimationFrame(animate);
  return()=>{cancelAnimationFrame(raf);removeEventListener("resize",resize)};
 },[]);
 return <canvas ref={ref} className="fireworks" aria-hidden="true"/>;
}