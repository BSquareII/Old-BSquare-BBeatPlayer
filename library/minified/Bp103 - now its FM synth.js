q=t/32E3,r=1.05946309,a=880,as=a*r,b=as*r,c=b*r,cs=c*r,d=cs*r,ds=d*r,e=ds*r,f=e*r,fs=f*r,g=fs*r,gs=g*r,na=q*[a,c,e,a,d,f,a,c,f,c,e,g,g,b,d,f,a,c,a,c,g,g,b,d][int(1*q)%8*3+int(32*q)%3],tr=64>int(4*q)%128?0:1,nb=q*[a<<tr,c,e<<tr,c<<(tr<<1),a<<tr,d<<(tr<<1),f<<tr,d,a<<tr,c,f<<tr,a<<(tr<<1),c<<tr,e<<(tr<<1),g<<tr,e,g<<tr,b,d<<tr,b,f<<tr,a<<(tr<<1),c<<tr,a<<(tr<<1),a<<tr,c,g<<tr,c,g<<tr,b<<(tr<<1),d<<tr,b<<(tr<<1)][int(4*q%32)]/2,nc=q*[a,b,c,e,c,b,a,0][int(4*q)%8],nd=q*[a,a<<1,a,0,a,0,a,0,g>>1,g,g>>1,0,e>>1,0,c>>1,c][int(4*q)%16]/4,kick=q*(512>>64*q)%2<<6,snare=1<(4*q&3)?q*(8E3>>64*q)%2<<5<<(2E5*q>>1E6*q<<64*q)&127:0,hihat=1>64*q%8?7040*q%2<<4:0,(kick+snare+hihat)/2+12*sin(1*nc)*sin(4*nc)*2*sin(1.02*nc)/2+3*(tan(sin(nd/2)*tan(1.03*cos(1.5*nd)))+4)+4.5*(sin(4*na)<cos(6*q))+tan(1.5*sin(2*nb))/2.39*3*sin(3*nb)*2*cos(1.013*nb)/2+96