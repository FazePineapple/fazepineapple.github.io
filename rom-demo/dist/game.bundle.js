(()=>{var Zn={juice:{name:"Small juice pack",icon:"\u{1F9C3}",stack:64,effects:[]},bun:{name:"Sausage bun",icon:"\u{1F32D}",stack:64,effects:[]},beer:{name:"Beer bottle",icon:"\u{1F37A}",stack:64,effects:[]}};function rl(){let i=Array(36).fill(null);return{slots:i,add(t){let e=i.find(s=>s?.id===t&&s.count<Zn[t].stack);if(e)return e.count++,!0;let n=i.indexOf(null);return n<0?!1:(i[n]={id:t,count:1},!0)},take(t){let e=i[t];return e?(--e.count===0&&(i[t]=null),e.id):null},move(t,e){let n=i[t],s=i[e];if(!(t===e||!n)){if(s?.id===n.id){let r=Math.min(n.count,Zn[n.id].stack-s.count);s.count+=r,n.count-=r,n.count||(i[t]=null);return}[i[t],i[e]]=[s,n]}}}}var Il=0,po=1,Pl=2;var xi=1,Ll=2,ji=3,hi=0,Ze=1,un=2,yi=0,ts=1,mo=2,go=3,_o=4,Dl=5;var vi=100,Nl=101,Ul=102,Ol=103,Fl=104,Bl=200,zl=201,Gl=202,Vl=203,xo=204,yo=205,kl=206,Hl=207,Wl=208,Xl=209,Jl=210,ql=211,Yl=212,Zl=213,$l=214,xr=0,yr=1,vr=2,ki=3,Mr=4,Sr=5,br=6,Tr=7,vo=0,Ql=1,Kl=2,Pn=0,Mo=1,So=2,bo=3,To=4,Eo=5,wo=6,Ao=7;var Ro=300,Mi=301,es=302,Yr=303,Zr=304,Hi=1e3,Tn=1001,Er=1002,Ne=1003,jl=1004;var Os=1005;var qe=1006,$r=1007;var Xn=1008;var je=1009,Co=1010,Io=1011,ns=1012,Qr=1013,xn=1014,yn=1015,vn=1016,Kr=1017,jr=1018,Si=1020,Po=35902,Lo=35899,Do=1021,No=1022,Mn=1023,kn=1026,Jn=1027,Uo=1028,ta=1029,ui=1030,ea=1031;var na=1033,Fs=33776,Bs=33777,zs=33778,Gs=33779,ia=35840,sa=35841,ra=35842,aa=35843,oa=36196,la=37492,ca=37496,ha=37488,ua=37489,Vs=37490,da=37491,fa=37808,pa=37809,ma=37810,ga=37811,_a=37812,xa=37813,ya=37814,va=37815,Ma=37816,Sa=37817,ba=37818,Ta=37819,Ea=37820,wa=37821,Aa=36492,Ra=36494,Ca=36495,Ia=36283,Pa=36284,ks=36285,La=36286;var fs=2300,wr=2301,gr=2302,ao=2303,oo=2400,lo=2401,co=2402;var tc=3200;var Da=0,ec=1,Sn="",Xe="srgb",ps="srgb-linear",ms="linear",le="srgb";var _r=7680;var nc=519,ic=512,sc=513,rc=514,Oo=515,ac=516,oc=517,Fo=518,Bo=519,lc=35044;var zo="300 es",on=2e3,Wi=2001;function Kc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function jc(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cc(){let i=gs("canvas");return i.style.display="block",i}var al={},Xi=null;function Go(...i){let t="THREE."+i.shift();Xi?Xi("log",t,...i):console.log(t,...i)}function hc(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Bt(...i){i=hc(i);let t="THREE."+i.shift();if(Xi)Xi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function zt(...i){i=hc(i);let t="THREE."+i.shift();if(Xi)Xi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function hs(...i){let t=i.join(" ");t in al||(al[t]=!0,Bt(...i))}function uc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var dc={[xr]:xr,[vr]:br,[Mr]:Mr,[ki]:Sr,[yr]:yr,[br]:vr,[Tr]:Tr,[Sr]:ki},wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ol=1234567,us=Math.PI/180,Ji=180/Math.PI;function is(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function Vo(i,t){return(i%t+t)%t}function th(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function eh(i,t,e){return i!==t?(e-i)/(t-i):0}function ds(i,t,e){return(1-e)*i+e*t}function nh(i,t,e,n){return ds(i,t,1-Math.exp(-e*n))}function ih(i,t=1){return t-Math.abs(Vo(i,t*2)-t)}function sh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function rh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ah(i,t){return i+Math.floor(Math.random()*(t-i+1))}function oh(i,t){return i+Math.random()*(t-i)}function lh(i){return i*(.5-Math.random())}function ch(i){i!==void 0&&(ol=i);let t=ol+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hh(i){return i*us}function uh(i){return i*Ji}function dh(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function fh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ko(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ph(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),m=r((n-t)/2),y=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*f,c*u,o*l);break;case"YZY":i.set(c*u,o*h,c*f,o*l);break;case"ZXZ":i.set(c*f,c*u,o*h,o*l);break;case"XZX":i.set(o*h,c*y,c*m,o*l);break;case"YXY":i.set(c*m,o*h,c*y,o*l);break;case"ZYZ":i.set(c*y,c*m,o*h,o*l);break;default:Bt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ho(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function fc(i,t){if(t.constructor===Float32Array)return i;let e=Ho(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function pc(i,t){if(t.constructor===Float32Array)return i;let e=Ho(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Hs={DEG2RAD:us,RAD2DEG:Ji,generateUUID:is,clamp:te,euclideanModulo:Vo,mapLinear:th,inverseLerp:eh,lerp:ds,damp:nh,pingpong:ih,smoothstep:sh,smootherstep:rh,randInt:ah,randFloat:oh,randFloatSpread:lh,seededRandom:ch,degToRad:hh,radToDeg:uh,isPowerOfTwo:dh,ceilPowerOfTwo:fh,floorPowerOfTwo:ko,setQuaternionFromProperEuler:ph,normalize:pc,denormalize:fc},Jt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},An=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],m=r[a+1],y=r[a+2],b=r[a+3];if(f!==b||c!==u||l!==m||h!==y){let p=c*u+l*m+h*y+f*b;p<0&&(u=-u,m=-m,y=-y,b=-b,p=-p);let d=1-o;if(p<.9995){let v=Math.acos(p),w=Math.sin(v);d=Math.sin(d*v)/w,o=Math.sin(o*v)/w,c=c*d+u*o,l=l*d+m*o,h=h*d+y*o,f=f*d+b*o}else{c=c*d+u*o,l=l*d+m*o,h=h*d+y*o,f=f*d+b*o;let v=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=v,l*=v,h*=v,f*=v}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],u=r[a+1],m=r[a+2],y=r[a+3];return t[e]=o*y+h*f+c*m-l*u,t[e+1]=c*y+h*u+l*f-o*m,t[e+2]=l*y+h*m+o*u-c*f,t[e+3]=h*y-o*f-c*u-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),u=c(n/2),m=c(s/2),y=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*m*y,this._y=l*m*f-u*h*y,this._z=l*h*y+u*m*f,this._w=l*h*f-u*m*y;break;case"YXZ":this._x=u*h*f+l*m*y,this._y=l*m*f-u*h*y,this._z=l*h*y-u*m*f,this._w=l*h*f+u*m*y;break;case"ZXY":this._x=u*h*f-l*m*y,this._y=l*m*f+u*h*y,this._z=l*h*y+u*m*f,this._w=l*h*f-u*m*y;break;case"ZYX":this._x=u*h*f-l*m*y,this._y=l*m*f+u*h*y,this._z=l*h*y-u*m*f,this._w=l*h*f+u*m*y;break;case"YZX":this._x=u*h*f+l*m*y,this._y=l*m*f+u*h*y,this._z=l*h*y-u*m*f,this._w=l*h*f-u*m*y;break;case"XZY":this._x=u*h*f-l*m*y,this._y=l*m*f-u*h*y,this._z=l*h*y+u*m*f,this._w=l*h*f+u*m*y;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ll.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ll.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ga.copy(this).projectOnVector(t),this.sub(Ga)}reflect(t){return this.sub(Ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ga=new B,ll=new An,Gt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],m=n[5],y=n[8],b=s[0],p=s[3],d=s[6],v=s[1],w=s[4],S=s[7],A=s[2],E=s[5],g=s[8];return r[0]=a*b+o*v+c*A,r[3]=a*p+o*w+c*E,r[6]=a*d+o*S+c*g,r[1]=l*b+h*v+f*A,r[4]=l*p+h*w+f*E,r[7]=l*d+h*S+f*g,r[2]=u*b+m*v+y*A,r[5]=u*p+m*w+y*E,r[8]=u*d+m*S+y*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*r,m=l*r-a*c,y=e*f+n*u+s*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/y;return t[0]=f*b,t[1]=(s*l-h*n)*b,t[2]=(o*n-s*a)*b,t[3]=u*b,t[4]=(h*e-s*c)*b,t[5]=(s*r-o*e)*b,t[6]=m*b,t[7]=(n*c-l*e)*b,t[8]=(a*e-n*r)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Va.makeScale(t,e)),this}rotate(t){return hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Va.makeRotation(-t)),this}translate(t,e){return hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Va=new Gt,cl=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hl=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mh(){let i={enabled:!0,workingColorSpace:ps,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===le&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Sn?ms:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ps]:{primaries:t,whitePoint:n,transfer:ms,toXYZ:cl,fromXYZ:hl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:n,transfer:le,toXYZ:cl,fromXYZ:hl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),i}var jt=mh();function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ri,Ar=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ri===void 0&&(Ri=gs("canvas")),Ri.width=t.width,Ri.height=t.height;let s=Ri.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ri}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=gs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vn(e[n]/255)*255):e[n]=Vn(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gh=0,qi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=is(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ka(s[a].image)):r.push(ka(s[a]))}else r=ka(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ka(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ar.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}var _h=0,Ha=new B,Ye=class i extends wn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Tn,s=Tn,r=qe,a=Xn,o=Mn,c=je,l=i.DEFAULT_ANISOTROPY,h=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=is(),this.name="",this.source=new qi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ha).x}get height(){return this.source.getSize(Ha).y}get depth(){return this.source.getSize(Ha).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ro)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hi:t.x=t.x-Math.floor(t.x);break;case Tn:t.x=t.x<0?0:1;break;case Er:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hi:t.y=t.y-Math.floor(t.y);break;case Tn:t.y=t.y<0?0:1;break;case Er:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Ro;Ye.DEFAULT_ANISOTROPY=1;var ye=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],m=c[5],y=c[9],b=c[2],p=c[6],d=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-b)<.01&&Math.abs(y-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+b)<.1&&Math.abs(y+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,S=(m+1)/2,A=(d+1)/2,E=(h+u)/4,g=(f+b)/4,M=(y+p)/4;return w>S&&w>A?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=g/n):S>A?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=M/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=g/r,s=M/r),this.set(n,s,r,e),this}let v=Math.sqrt((p-y)*(p-y)+(f-b)*(f-b)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-y)/v,this.y=(f-b)/v,this.z=(u-h)/v,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rr=class extends wn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ye({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new qi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends Rr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},_s=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cr=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var _e=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,c,l,h,f,u,m,y,b,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,f,u,m,y,b,p)}set(t,e,n,s,r,a,o,c,l,h,f,u,m,y,b,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=f,d[14]=u,d[3]=m,d[7]=y,d[11]=b,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ci.setFromMatrixColumn(t,0).length(),r=1/Ci.setFromMatrixColumn(t,1).length(),a=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,m=a*f,y=o*h,b=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=m+y*l,e[5]=u-b*l,e[9]=-o*c,e[2]=b-u*l,e[6]=y+m*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,m=c*f,y=l*h,b=l*f;e[0]=u+b*o,e[4]=y*o-m,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=m*o-y,e[6]=b+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,m=c*f,y=l*h,b=l*f;e[0]=u-b*o,e[4]=-a*f,e[8]=y+m*o,e[1]=m+y*o,e[5]=a*h,e[9]=b-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,m=a*f,y=o*h,b=o*f;e[0]=c*h,e[4]=y*l-m,e[8]=u*l+b,e[1]=c*f,e[5]=b*l+u,e[9]=m*l-y,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,m=a*l,y=o*c,b=o*l;e[0]=c*h,e[4]=b-u*f,e[8]=y*f+m,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*f+y,e[10]=u-b*f}else if(t.order==="XZY"){let u=a*c,m=a*l,y=o*c,b=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+b,e[5]=a*h,e[9]=m*f-y,e[2]=y*f-m,e[6]=o*h,e[10]=b*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xh,t,yh)}lookAt(t,e,n){let s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),$n.crossVectors(n,en),$n.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),$n.crossVectors(n,en)),$n.normalize(),$s.crossVectors(en,$n),s[0]=$n.x,s[4]=$s.x,s[8]=en.x,s[1]=$n.y,s[5]=$s.y,s[9]=en.y,s[2]=$n.z,s[6]=$s.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],m=n[13],y=n[2],b=n[6],p=n[10],d=n[14],v=n[3],w=n[7],S=n[11],A=n[15],E=s[0],g=s[4],M=s[8],D=s[12],I=s[1],U=s[5],O=s[9],J=s[13],R=s[2],H=s[6],Q=s[10],X=s[14],at=s[3],q=s[7],et=s[11],it=s[15];return r[0]=a*E+o*I+c*R+l*at,r[4]=a*g+o*U+c*H+l*q,r[8]=a*M+o*O+c*Q+l*et,r[12]=a*D+o*J+c*X+l*it,r[1]=h*E+f*I+u*R+m*at,r[5]=h*g+f*U+u*H+m*q,r[9]=h*M+f*O+u*Q+m*et,r[13]=h*D+f*J+u*X+m*it,r[2]=y*E+b*I+p*R+d*at,r[6]=y*g+b*U+p*H+d*q,r[10]=y*M+b*O+p*Q+d*et,r[14]=y*D+b*J+p*X+d*it,r[3]=v*E+w*I+S*R+A*at,r[7]=v*g+w*U+S*H+A*q,r[11]=v*M+w*O+S*Q+A*et,r[15]=v*D+w*J+S*X+A*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],m=t[14],y=t[3],b=t[7],p=t[11],d=t[15],v=c*m-l*u,w=o*m-l*f,S=o*u-c*f,A=a*m-l*h,E=a*u-c*h,g=a*f-o*h;return e*(b*v-p*w+d*S)-n*(y*v-p*A+d*E)+s*(y*w-b*A+d*g)-r*(y*S-b*E+p*g)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],m=t[11],y=t[12],b=t[13],p=t[14],d=t[15],v=e*o-n*a,w=e*c-s*a,S=e*l-r*a,A=n*c-s*o,E=n*l-r*o,g=s*l-r*c,M=h*b-f*y,D=h*p-u*y,I=h*d-m*y,U=f*p-u*b,O=f*d-m*b,J=u*d-m*p,R=v*J-w*O+S*U+A*I-E*D+g*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/R;return t[0]=(o*J-c*O+l*U)*H,t[1]=(s*O-n*J-r*U)*H,t[2]=(b*g-p*E+d*A)*H,t[3]=(u*E-f*g-m*A)*H,t[4]=(c*I-a*J-l*D)*H,t[5]=(e*J-s*I+r*D)*H,t[6]=(p*S-y*g-d*w)*H,t[7]=(h*g-u*S+m*w)*H,t[8]=(a*O-o*I+l*M)*H,t[9]=(n*I-e*O-r*M)*H,t[10]=(y*E-b*S+d*v)*H,t[11]=(f*S-h*E-m*v)*H,t[12]=(o*D-a*U-c*M)*H,t[13]=(e*U-n*D+s*M)*H,t[14]=(b*w-y*A-p*v)*H,t[15]=(h*A-f*w+u*v)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,u=r*l,m=r*h,y=r*f,b=a*h,p=a*f,d=o*f,v=c*l,w=c*h,S=c*f,A=n.x,E=n.y,g=n.z;return s[0]=(1-(b+d))*A,s[1]=(m+S)*A,s[2]=(y-w)*A,s[3]=0,s[4]=(m-S)*E,s[5]=(1-(u+d))*E,s[6]=(p+v)*E,s[7]=0,s[8]=(y+w)*g,s[9]=(p-v)*g,s[10]=(1-(u+b))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ci.set(s[0],s[1],s[2]).length(),o=Ci.set(s[4],s[5],s[6]).length(),c=Ci.set(s[8],s[9],s[10]).length();r<0&&(a=-a),pn.copy(this);let l=1/a,h=1/o,f=1/c;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,e.setFromRotationMatrix(pn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=on,c=!1){let l=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),m=(n+s)/(n-s),y,b;if(c)y=r/(a-r),b=a*r/(a-r);else if(o===on)y=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Wi)y=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=y,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=on,c=!1){let l=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),m=-(n+s)/(n-s),y,b;if(c)y=1/(a-r),b=a/(a-r);else if(o===on)y=-2/(a-r),b=-(a+r)/(a-r);else if(o===Wi)y=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=y,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ci=new B,pn=new _e,xh=new B(0,0,0),yh=new B(1,1,1),$n=new B,$s=new B,en=new B,ul=new _e,dl=new An,Hn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ul.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ul,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dl.setFromEuler(this),this.setFromQuaternion(dl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hn.DEFAULT_ORDER="XYZ";var xs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vh=0,fl=new B,Ii=new An,On=new _e,Qs=new B,as=new B,Mh=new B,Sh=new An,pl=new B(1,0,0),ml=new B(0,1,0),gl=new B(0,0,1),_l={type:"added"},bh={type:"removed"},Pi={type:"childadded",child:null},Wa={type:"childremoved",child:null},Ae=class i extends wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new Hn,n=new An,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Gt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(pl,t)}rotateY(t){return this.rotateOnAxis(ml,t)}rotateZ(t){return this.rotateOnAxis(gl,t)}translateOnAxis(t,e){return fl.copy(t).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pl,t)}translateY(t){return this.translateOnAxis(ml,t)}translateZ(t){return this.translateOnAxis(gl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qs.copy(t):Qs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(as,Qs,this.up):On.lookAt(Qs,as,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(On),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_l),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bh),Wa.child=t,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_l),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,Mh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,Sh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),m=a(t.animations),y=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ae.DEFAULT_UP=new B(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=class extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}},Th={type:"move"},Yi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let b of t.hand.values()){let p=e.getJointPose(b,n),d=this._getHandJoint(l,b);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),m=.02,y=.005;l.inputState.pinching&&u>m+y?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=m-y&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Th)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function Xa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=Vo(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Xa(a,r,t+1/3),this.g=Xa(a,r,t),this.b=Xa(a,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let n=mc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return jt.workingToColorSpace(Ge.copy(this),t),Math.round(te(Ge.r*255,0,255))*65536+Math.round(te(Ge.g*255,0,255))*256+Math.round(te(Ge.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(Ge.copy(this),e);let n=Ge.r,s=Ge.g,r=Ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Xe){jt.workingToColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,s=Ge.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(Ks);let n=ds(Qn.h,Ks.h,e),s=ds(Qn.s,Ks.s,e),r=ds(Qn.l,Ks.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new qt;qt.NAMES=mc;var ys=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new qt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var vs=class extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},mn=new B,Fn=new B,Ja=new B,Bn=new B,Li=new B,Di=new B,xl=new B,qa=new B,Ya=new B,Za=new B,$a=new ye,Qa=new ye,Ka=new ye,ei=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),Fn.subVectors(n,e),Ja.subVectors(t,e);let a=mn.dot(mn),o=mn.dot(Fn),c=mn.dot(Ja),l=Fn.dot(Fn),h=Fn.dot(Ja),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,m=(l*c-o*h)*u,y=(a*h-o*c)*u;return r.set(1-m-y,y,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bn.x),c.addScaledVector(a,Bn.y),c.addScaledVector(o,Bn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return $a.setScalar(0),Qa.setScalar(0),Ka.setScalar(0),$a.fromBufferAttribute(t,e),Qa.fromBufferAttribute(t,n),Ka.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector($a,r.x),a.addScaledVector(Qa,r.y),a.addScaledVector(Ka,r.z),a}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),Fn.subVectors(t,e),mn.cross(Fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),mn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Li.subVectors(s,n),Di.subVectors(r,n),qa.subVectors(t,n);let c=Li.dot(qa),l=Di.dot(qa);if(c<=0&&l<=0)return e.copy(n);Ya.subVectors(t,s);let h=Li.dot(Ya),f=Di.dot(Ya);if(h>=0&&f<=h)return e.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(n).addScaledVector(Li,a);Za.subVectors(t,r);let m=Li.dot(Za),y=Di.dot(Za);if(y>=0&&m<=y)return e.copy(r);let b=m*l-c*y;if(b<=0&&l>=0&&y<=0)return o=l/(l-y),e.copy(n).addScaledVector(Di,o);let p=h*y-m*f;if(p<=0&&f-h>=0&&m-y>=0)return xl.subVectors(r,s),o=(f-h)/(f-h+(m-y)),e.copy(s).addScaledVector(xl,o);let d=1/(p+b+u);return a=b*d,o=u*d,e.copy(n).addScaledVector(Li,a).addScaledVector(Di,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Rn=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),js.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),js.copy(n.boundingBox)),js.applyMatrix4(t.matrixWorld),this.union(js)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(os),tr.subVectors(this.max,os),Ni.subVectors(t.a,os),Ui.subVectors(t.b,os),Oi.subVectors(t.c,os),Kn.subVectors(Ui,Ni),jn.subVectors(Oi,Ui),pi.subVectors(Ni,Oi);let e=[0,-Kn.z,Kn.y,0,-jn.z,jn.y,0,-pi.z,pi.y,Kn.z,0,-Kn.x,jn.z,0,-jn.x,pi.z,0,-pi.x,-Kn.y,Kn.x,0,-jn.y,jn.x,0,-pi.y,pi.x,0];return!ja(e,Ni,Ui,Oi,tr)||(e=[1,0,0,0,1,0,0,0,1],!ja(e,Ni,Ui,Oi,tr))?!1:(er.crossVectors(Kn,jn),e=[er.x,er.y,er.z],ja(e,Ni,Ui,Oi,tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},zn=[new B,new B,new B,new B,new B,new B,new B,new B],gn=new B,js=new Rn,Ni=new B,Ui=new B,Oi=new B,Kn=new B,jn=new B,pi=new B,os=new B,tr=new B,er=new B,mi=new B;function ja(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){mi.fromArray(i,r);let o=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),c=t.dot(mi),l=e.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var we=new B,nr=new Jt,Eh=0,En=class extends wn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lc,this.updateRanges=[],this.gpuType=yn,this.version=0,this._normalizationScale=t!==void 0?Ho(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)nr.fromBufferAttribute(this,e),nr.applyMatrix3(t),this.setXY(e,nr.x,nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):fc(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):pc(t,this.array)}};var Ms=class extends En{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ss=class extends En{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xe=class extends En{constructor(t,e,n){super(new Float32Array(t),e,n)}},wh=new Rn,ls=new B,to=new B,Zi=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):wh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ls.subVectors(t,this.center);let e=ls.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(to.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ls.copy(t.center).add(to)),this.expandByPoint(ls.copy(t.center).sub(to))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ah=0,an=new _e,eo=new Ae,Fi=new B,nn=new Rn,cs=new Rn,De=new B,ln=class i extends wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kc(t)?Ss:Ms)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return eo.lookAt(t),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(nn.min,cs.min),nn.expandByPoint(De),De.addVectors(nn.max,cs.max),nn.expandByPoint(De)):(nn.expandByPoint(cs.min),nn.expandByPoint(cs.max))}nn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)De.fromBufferAttribute(o,l),c&&(Fi.fromBufferAttribute(t,l),De.add(Fi)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new En(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new B,c[D]=new B;let h=new B,f=new B,u=new B,m=new Jt,y=new Jt,b=new Jt,p=new B,d=new B;function v(D,I,U){l[D]=l[I]=l[U]=1,h.fromBufferAttribute(n,D),f.fromBufferAttribute(n,I),u.fromBufferAttribute(n,U),m.fromBufferAttribute(r,D),y.fromBufferAttribute(r,I),b.fromBufferAttribute(r,U),f.sub(h),u.sub(h),y.sub(m),b.sub(m);let O=1/(y.x*b.y-b.x*y.y);isFinite(O)&&(p.copy(f).multiplyScalar(b.y).addScaledVector(u,-y.y).multiplyScalar(O),d.copy(u).multiplyScalar(y.x).addScaledVector(f,-b.x).multiplyScalar(O),o[D].add(p),o[I].add(p),o[U].add(p),c[D].add(d),c[I].add(d),c[U].add(d))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let D=0,I=w.length;D<I;++D){let U=w[D],O=U.start,J=U.count;for(let R=O,H=O+J;R<H;R+=3)v(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let S=new B,A=new B,E=new B,g=new B;function M(D){E.fromBufferAttribute(s,D),g.copy(E);let I=o[D];S.copy(I),S.sub(E.multiplyScalar(E.dot(I))).normalize(),A.crossVectors(g,I);let O=A.dot(c[D])<0?-1:1;a.setXYZW(D,S.x,S.y,S.z,O)}for(let D=0,I=n.count;D<I;++D)l[D]&&M(D);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new B,r=new B,a=new B,o=new B,c=new B,l=new B,h=new B,f=new B;if(t)for(let u=0,m=t.count;u<m;u+=3){let y=t.getX(u+0),b=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,b),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,y),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h),m=0,y=0;for(let b=0,p=c.length;b<p;b++){o.isInterleavedBufferAttribute?m=c[b]*o.data.stride+o.offset:m=c[b]*h;for(let d=0;d<h;d++)u[y++]=l[m++]}return new En(u,h,f)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let u=l[h],m=t(u,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let m=l[f];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,m=f.length;u<m;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var no=new B,Rh=new B,Ch=new Gt,_n=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=no.subVectors(n,e).cross(Rh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(no),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ch.getNormalMatrix(t),s=this.coplanarPoint(no).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ih=0,ni=class extends wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=is(),this.name="",this.type="Material",this.blending=ts,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xo,this.blendDst=yo,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new _n().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Jt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Jt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Gn=new B,io=new B,ir=new B,sr=new B,$i=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){io.copy(t).add(e).multiplyScalar(.5),ir.copy(e).sub(t).normalize(),sr.copy(this.origin).sub(io);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ir),o=sr.dot(this.direction),c=-sr.dot(ir),l=sr.lengthSq(),h=Math.abs(1-a*a),f,u,m,y;if(h>0)if(f=a*c-o,u=a*o-c,y=r*h,f>=0)if(u>=-y)if(u<=y){let b=1/h;f*=b,u*=b,m=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;else u<=-y?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+u*(u+2*c)+l):u<=y?(f=0,u=Math.min(Math.max(-r,-c),r),m=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(io).addScaledVector(ir,u),m}intersectSphere(t,e){if(t.radius<0)return null;Gn.subVectors(t.center,this.origin);let n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,m=t.z-a.z,y=e.x-a.x,b=e.y-a.y,p=e.z-a.z,d=n.x-a.x,v=n.y-a.y,w=n.z-a.z,S=Math.abs(c),A=Math.abs(l),E=Math.abs(h),g,M,D,I,U,O,J,R,H,Q,X,at;if(S>=A&&S>=E?(D=c,O=f,H=y,at=d,c>=0?(g=l,M=h,I=u,U=m,J=b,R=p,Q=v,X=w):(g=h,M=l,I=m,U=u,J=p,R=b,Q=w,X=v)):A>=E?(D=l,O=u,H=b,at=v,l>=0?(g=h,M=c,I=m,U=f,J=p,R=y,Q=w,X=d):(g=c,M=h,I=f,U=m,J=y,R=p,Q=d,X=w)):(D=h,O=m,H=p,at=w,h>=0?(g=c,M=l,I=f,U=u,J=y,R=b,Q=d,X=v):(g=l,M=c,I=u,U=f,J=b,R=y,Q=v,X=d)),D===0)return null;let q=g/D,et=M/D,it=1/D,At=I-q*O,Tt=U-et*O,tt=J-q*H,Mt=R-et*H,Et=Q-q*at,Ut=X-et*at,mt=Et*Mt-Ut*tt,Nt=At*Ut-Tt*Et,ge=tt*Tt-Mt*At;if(s){if(mt<0||Nt<0||ge<0)return null}else if((mt<0||Nt<0||ge<0)&&(mt>0||Nt>0||ge>0))return null;let Ot=mt+Nt+ge;if(Ot===0)return null;let $t=it*(mt*O+Nt*H+ge*at);return(Ot>0?$t<0:$t>0)?null:this.at($t/Ot,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ii=class extends ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},yl=new _e,gi=new $i,rr=new Zi,vl=new B,ar=new B,or=new B,lr=new B,so=new B,cr=new B,Ml=new B,hr=new B,cn=class extends Ae{constructor(t=new ln,e=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){cr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(so.fromBufferAttribute(f,t),a?cr.addScaledVector(so,h):cr.addScaledVector(so.sub(e),h))}e.add(cr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(rr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(rr,vl)===null||gi.origin.distanceToSquared(vl)>(t.far-t.near)**2))&&(yl.copy(r).invert(),gi.copy(t.ray).applyMatrix4(yl),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,b=u.length;y<b;y++){let p=u[y],d=a[p.materialIndex],v=Math.max(p.start,m.start),w=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=v,A=w;S<A;S+=3){let E=o.getX(S),g=o.getX(S+1),M=o.getX(S+2);s=ur(this,d,t,n,l,h,f,E,g,M),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let y=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let p=y,d=b;p<d;p+=3){let v=o.getX(p),w=o.getX(p+1),S=o.getX(p+2);s=ur(this,a,t,n,l,h,f,v,w,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let y=0,b=u.length;y<b;y++){let p=u[y],d=a[p.materialIndex],v=Math.max(p.start,m.start),w=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let S=v,A=w;S<A;S+=3){let E=S,g=S+1,M=S+2;s=ur(this,d,t,n,l,h,f,E,g,M),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let y=Math.max(0,m.start),b=Math.min(c.count,m.start+m.count);for(let p=y,d=b;p<d;p+=3){let v=p,w=p+1,S=p+2;s=ur(this,a,t,n,l,h,f,v,w,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Ph(i,t,e,n,s,r,a,o){let c;if(t.side===Ze?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===hi,o),c===null)return null;hr.copy(o),hr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(hr);return l<e.near||l>e.far?null:{distance:l,point:hr.clone(),object:i}}function ur(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ar),i.getVertexPosition(c,or),i.getVertexPosition(l,lr);let h=Ph(i,t,e,n,ar,or,lr,Ml);if(h){let f=new B;ei.getBarycoord(Ml,ar,or,lr,f),s&&(h.uv=ei.getInterpolatedAttribute(s,o,c,l,f,new Jt)),r&&(h.uv1=ei.getInterpolatedAttribute(r,o,c,l,f,new Jt)),a&&(h.normal=ei.getInterpolatedAttribute(a,o,c,l,f,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new B,materialIndex:0};ei.getNormal(ar,or,lr,u.normal),h.face=u,h.barycoord=f}return h}var Ir=class extends Ye{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ne,h=Ne,f,u){super(null,a,o,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _i=new Zi,Lh=new Jt(.5,.5),dr=new B,si=class{constructor(t=new _n,e=new _n,n=new _n,s=new _n,r=new _n,a=new _n){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=on,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],m=r[7],y=r[8],b=r[9],p=r[10],d=r[11],v=r[12],w=r[13],S=r[14],A=r[15];if(s[0].setComponents(l-a,m-h,d-y,A-v).normalize(),s[1].setComponents(l+a,m+h,d+y,A+v).normalize(),s[2].setComponents(l+o,m+f,d+b,A+w).normalize(),s[3].setComponents(l-o,m-f,d-b,A-w).normalize(),n)s[4].setComponents(c,u,p,S).normalize(),s[5].setComponents(l-c,m-u,d-p,A-S).normalize();else if(s[4].setComponents(l-c,m-u,d-p,A-S).normalize(),e===on)s[5].setComponents(l+c,m+u,d+p,A+S).normalize();else if(e===Wi)s[5].setComponents(c,u,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){_i.center.set(0,0,0);let e=Lh.distanceTo(t.center);return _i.radius=.7071067811865476+e,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(dr.x=s.normal.x>0?t.max.x:t.min.x,dr.y=s.normal.y>0?t.max.y:t.min.y,dr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(dr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Sl=new _e,Pr=class i{constructor(){this.coordinateSystem=on,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Sl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new si),n[s].setFromProjectionMatrix(Sl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new si),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var bs=class extends Ye{constructor(t=[],e=Mi,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ts=class extends Ye{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Wn=class extends Ye{constructor(t,e,n=xn,s,r,a,o=Ne,c=Ne,l,h=kn,f=1){if(h!==kn&&h!==Jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Es=class extends Wn{constructor(t,e=xn,n=Mi,s,r,a=Ne,o=Ne,c,l=kn){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ws=class extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ri=class i extends ln{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],u=0,m=0;y("z","y","x",-1,-1,n,e,t,a,r,0),y("z","y","x",1,-1,n,e,-t,a,r,1),y("x","z","y",1,1,t,n,e,s,a,2),y("x","z","y",1,-1,t,n,-e,s,a,3),y("x","y","z",1,-1,t,e,n,s,r,4),y("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(f,2));function y(b,p,d,v,w,S,A,E,g,M,D){let I=S/g,U=A/M,O=S/2,J=A/2,R=E/2,H=g+1,Q=M+1,X=0,at=0,q=new B;for(let et=0;et<Q;et++){let it=et*U-J;for(let At=0;At<H;At++){let Tt=At*I-O;q[b]=Tt*v,q[p]=it*w,q[d]=R,l.push(q.x,q.y,q.z),q[b]=0,q[p]=0,q[d]=E>0?1:-1,h.push(q.x,q.y,q.z),f.push(At/g),f.push(1-et/M),X+=1}}for(let et=0;et<M;et++)for(let it=0;it<g;it++){let At=u+it+H*et,Tt=u+it+H*(et+1),tt=u+(it+1)+H*(et+1),Mt=u+(it+1)+H*et;c.push(At,Tt,Mt),c.push(Tt,tt,Mt),at+=6}o.addGroup(m,at,D),m+=at,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var hn=class i extends ln{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],m=[],y=0,b=[],p=n/2,d=0;v(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new xe(f,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(m,2));function v(){let S=new B,A=new B,E=0,g=(e-t)/n;for(let M=0;M<=r;M++){let D=[],I=M/r,U=I*(e-t)+t;for(let O=0;O<=s;O++){let J=O/s,R=J*c+o,H=Math.sin(R),Q=Math.cos(R);A.x=U*H,A.y=-I*n+p,A.z=U*Q,f.push(A.x,A.y,A.z),S.set(H,g,Q).normalize(),u.push(S.x,S.y,S.z),m.push(J,1-I),D.push(y++)}b.push(D)}for(let M=0;M<s;M++)for(let D=0;D<r;D++){let I=b[D][M],U=b[D+1][M],O=b[D+1][M+1],J=b[D][M+1];(t>0||D!==0)&&(h.push(I,U,J),E+=3),(e>0||D!==r-1)&&(h.push(U,O,J),E+=3)}l.addGroup(d,E,0),d+=E}function w(S){let A=y,E=new Jt,g=new B,M=0,D=S===!0?t:e,I=S===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,p*I,0),u.push(0,I,0),m.push(.5,.5),y++;let U=y;for(let O=0;O<=s;O++){let R=O/s*c+o,H=Math.cos(R),Q=Math.sin(R);g.x=D*Q,g.y=p*I,g.z=D*H,f.push(g.x,g.y,g.z),u.push(0,I,0),E.x=H*.5+.5,E.y=Q*.5*I+.5,m.push(E.x,E.y),y++}for(let O=0;O<s;O++){let J=A+O,R=U+O;S===!0?h.push(R,R+1,J):h.push(R+1,R,J),M+=3}l.addGroup(d,M,S===!0?1:2),d+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},As=class i extends hn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Lr=class i extends ln{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new xe(r,3)),this.setAttribute("normal",new xe(r.slice(),3)),this.setAttribute("uv",new xe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let w=new B,S=new B,A=new B;for(let E=0;E<e.length;E+=3)m(e[E+0],w),m(e[E+1],S),m(e[E+2],A),c(w,S,A,v)}function c(v,w,S,A){let E=A+1,g=[];for(let M=0;M<=E;M++){g[M]=[];let D=v.clone().lerp(S,M/E),I=w.clone().lerp(S,M/E),U=E-M;for(let O=0;O<=U;O++)O===0&&M===E?g[M][O]=D:g[M][O]=D.clone().lerp(I,O/U)}for(let M=0;M<E;M++)for(let D=0;D<2*(E-M)-1;D++){let I=Math.floor(D/2);D%2===0?(u(g[M][I+1]),u(g[M+1][I]),u(g[M][I])):(u(g[M][I+1]),u(g[M+1][I+1]),u(g[M+1][I]))}}function l(v){let w=new B;for(let S=0;S<r.length;S+=3)w.x=r[S+0],w.y=r[S+1],w.z=r[S+2],w.normalize().multiplyScalar(v),r[S+0]=w.x,r[S+1]=w.y,r[S+2]=w.z}function h(){let v=new B;for(let w=0;w<r.length;w+=3){v.x=r[w+0],v.y=r[w+1],v.z=r[w+2];let S=p(v)/2/Math.PI+.5,A=d(v)/Math.PI+.5;a.push(S,1-A)}y(),f()}function f(){for(let v=0;v<a.length;v+=6){let w=a[v+0],S=a[v+2],A=a[v+4],E=Math.max(w,S,A),g=Math.min(w,S,A);E>.9&&g<.1&&(w<.2&&(a[v+0]+=1),S<.2&&(a[v+2]+=1),A<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function m(v,w){let S=v*3;w.x=t[S+0],w.y=t[S+1],w.z=t[S+2]}function y(){let v=new B,w=new B,S=new B,A=new B,E=new Jt,g=new Jt,M=new Jt;for(let D=0,I=0;D<r.length;D+=9,I+=6){v.set(r[D+0],r[D+1],r[D+2]),w.set(r[D+3],r[D+4],r[D+5]),S.set(r[D+6],r[D+7],r[D+8]),E.set(a[I+0],a[I+1]),g.set(a[I+2],a[I+3]),M.set(a[I+4],a[I+5]),A.copy(v).add(w).add(S).divideScalar(3);let U=p(A);b(E,I+0,v,U),b(g,I+2,w,U),b(M,I+4,S,U)}}function b(v,w,S,A){A<0&&v.x===1&&(a[w]=v.x-1),S.x===0&&S.z===0&&(a[w]=A/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Qi=class i extends Lr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Cn=class i extends ln{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=t/o,u=e/c,m=[],y=[],b=[],p=[];for(let d=0;d<h;d++){let v=d*u-a;for(let w=0;w<l;w++){let S=w*f-r;y.push(S,-v,0),b.push(0,0,1),p.push(w/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<o;v++){let w=v+l*d,S=v+l*(d+1),A=v+1+l*(d+1),E=v+1+l*d;m.push(w,S,E),m.push(S,A,E)}this.setIndex(m),this.setAttribute("position",new xe(y,3)),this.setAttribute("normal",new xe(b,3)),this.setAttribute("uv",new xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Rs=class i extends ln{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],f=t,u=(e-t)/s,m=new B,y=new Jt;for(let b=0;b<=s;b++){for(let p=0;p<=n;p++){let d=r+p/n*a;m.x=f*Math.cos(d),m.y=f*Math.sin(d),c.push(m.x,m.y,m.z),l.push(0,0,1),y.x=(m.x/e+1)/2,y.y=(m.y/e+1)/2,h.push(y.x,y.y)}f+=u}for(let b=0;b<s;b++){let p=b*(n+1);for(let d=0;d<n;d++){let v=d+p,w=v,S=v+n+1,A=v+n+2,E=v+1;o.push(w,S,E),o.push(S,A,E)}}this.setIndex(o),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Cs=class i extends ln{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new B,u=new B,m=[],y=[],b=[],p=[];for(let d=0;d<=n;d++){let v=[],w=d/n,S=a+w*o,A=t*Math.cos(S),E=Math.sqrt(t*t-A*A),g=0;d===0&&a===0?g=.5/e:d===n&&c===Math.PI&&(g=-.5/e);for(let M=0;M<=e;M++){let D=M/e,I=s+D*r;f.x=-E*Math.cos(I),f.y=A,f.z=E*Math.sin(I),y.push(f.x,f.y,f.z),u.copy(f).normalize(),b.push(u.x,u.y,u.z),p.push(D+g,1-w),v.push(l++)}h.push(v)}for(let d=0;d<n;d++)for(let v=0;v<e;v++){let w=h[d][v+1],S=h[d][v],A=h[d+1][v],E=h[d+1][v+1];(d!==0||a>0)&&m.push(w,S,E),(d!==n-1||c<Math.PI)&&m.push(S,A,E)}this.setIndex(m),this.setAttribute("position",new xe(y,3)),this.setAttribute("normal",new xe(b,3)),this.setAttribute("uv",new xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function bi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(bl(s))s.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(bl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ve(i){let t={};for(let e=0;e<i.length;e++){let n=bi(i[e]);for(let s in n)t[s]=n[s]}return t}function bl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Dh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wo(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var gc={clone:bi,merge:Ve},Nh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,In=class extends ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nh,this.fragmentShader=Uh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bi(t.uniforms),this.uniformsGroups=Dh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Jt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Gt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new _e().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Dr=class extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ai=class extends ni{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new Jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Nr=class extends ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ur=class extends ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Bi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function fr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var oi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Or=class extends oi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oo,endingEnd:oo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case lo:r=t,o=2*e-n;break;case co:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case lo:a=t,c=2*n-e;break;case co:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,m=this._weightNext,y=(n-e)/(s-e),b=y*y,p=b*y,d=-u*p+2*u*b-u*y,v=(1+u)*p+(-1.5-2*u)*b+(-.5+u)*y+1,w=(-1-m)*p+(1.5+m)*b+.5*y,S=m*p-m*b;for(let A=0;A!==o;++A)r[A]=d*a[h+A]+v*a[l+A]+w*a[c+A]+S*a[f+A];return r}},Fr=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*f+a[c+u]*h;return r}},Br=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},zr=class extends oi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let y=(n-e)/(s-e),b=1-y;for(let p=0;p!==o;++p)r[p]=a[l+p]*b+a[c+p]*y;return r}let u=o*2,m=t-1;for(let y=0;y!==o;++y){let b=a[l+y],p=a[c+y],d=m*u+y*2,v=f[d],w=f[d+1],S=t*u+y*2,A=h[S],E=h[S+1],g=Fh(n,e,v,A,s);r[y]=_c(g,b,w,E,p)}return r}};function _c(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Oh(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Fh(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=_c(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Oh(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Bi(e,this.TimeBufferType),this.values=Bi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Bi(t.times,Array),values:Bi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),fr(t.settings)&&(n.settings={inTangents:Bi(t.settings.inTangents,Array),outTangents:Bi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Br(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Or(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new zr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case fs:e=this.InterpolantFactoryMethodDiscrete;break;case wr:e=this.InterpolantFactoryMethodLinear;break;case gr:e=this.InterpolantFactoryMethodSmooth;break;case ao:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Bt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fs;case this.InterpolantFactoryMethodLinear:return wr;case this.InterpolantFactoryMethodSmooth:return gr;case this.InterpolantFactoryMethodBezier:return ao}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;fr(this.settings)&&(Tl(this.settings.inTangents,t),Tl(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;fr(this.settings)&&(El(this.settings.inTangents,t),El(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(zt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){zt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){zt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&jc(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){zt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===gr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let f=o*n,u=f-n,m=f+n;for(let y=0;y!==n;++y){let b=e[f+y];if(b!==e[u+y]||b!==e[m+y]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let m=0;m!==n;++m)e[u+m]=e[f+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,fr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Tl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function El(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=wr;var li=class extends rn{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="bool";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=fs;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Gr=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};Gr.prototype.ValueTypeName="color";var Vr=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};Vr.prototype.ValueTypeName="number";var kr=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)An.slerpFlat(r,0,a,l-o,a,l,c);return r}},Is=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new kr(this.times,this.values,this.getValueSize(),t)}};Is.prototype.ValueTypeName="quaternion";Is.prototype.InterpolantFactoryMethodSmooth=void 0;var ci=class extends rn{constructor(t,e,n){super(t,e,n)}};ci.prototype.ValueTypeName="string";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=fs;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Hr=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};Hr.prototype.ValueTypeName="vector";var Wr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let m=l[f],y=l[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xc=new Wr,Xr=class{constructor(t){this.manager=t!==void 0?t:xc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Xr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ps=class extends Ae{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ls=class extends Ps{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ro=new _e,wl=new B,Al=new B,Jr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Jt(512,512),this.mapType=je,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new si,this._frameExtents=new Jt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;wl.setFromMatrixPosition(t.matrixWorld),e.position.copy(wl),Al.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Al),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ro.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ro,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Wi||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(ro)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},pr=new B,mr=new An,bn=new B,Ds=class extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=on,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(pr,mr,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pr,mr,bn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(pr,mr,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pr,mr,bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ti=new B,Rl=new Jt,Cl=new Jt,Je=class extends Ds{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ji*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,Rl,Cl),e.subVectors(Cl,Rl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(us*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ns=class extends Ds{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ho=class extends Jr{constructor(){super(new Ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Us=class extends Ps{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new ho}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var zi=-90,Gi=1,Ki=class extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(zi,Gi,t,e);s.layers=this.layers,this.add(s);let r=new Je(zi,Gi,t,e);r.layers=this.layers,this.add(r);let a=new Je(zi,Gi,t,e);a.layers=this.layers,this.add(a);let o=new Je(zi,Gi,t,e);o.layers=this.layers,this.add(o);let c=new Je(zi,Gi,t,e);c.layers=this.layers,this.add(c);let l=new Je(zi,Gi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===on)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Wi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=b,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,m),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},qr=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Xo="\\[\\]\\.:\\/",Bh=new RegExp("["+Xo+"]","g"),Jo="[^"+Xo+"]",zh="[^"+Xo.replace("\\.","")+"]",Gh=/((?:WC+[\/:])*)/.source.replace("WC",Jo),Vh=/(WCOD+)?/.source.replace("WCOD",zh),kh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jo),Hh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jo),Wh=new RegExp("^"+Gh+Vh+kh+Hh+"$"),Xh=["material","materials","bones","map"],uo=class{constructor(t,e,n){let s=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bh,"")}static parseTrackName(t){let e=Wh.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Xh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;zt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=uo;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bm=new Float32Array(1);var fo=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function qo(i,t,e,n){let s=Jh(n);switch(e){case Do:return i*t;case Uo:return i*t/s.components*s.byteLength;case ta:return i*t/s.components*s.byteLength;case ui:return i*t*2/s.components*s.byteLength;case ea:return i*t*2/s.components*s.byteLength;case No:return i*t*3/s.components*s.byteLength;case Mn:return i*t*4/s.components*s.byteLength;case na:return i*t*4/s.components*s.byteLength;case Fs:case Bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zs:case Gs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:case aa:return Math.max(i,16)*Math.max(t,8)/4;case ia:case ra:return Math.max(i,8)*Math.max(t,8)/2;case oa:case la:case ha:case ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ca:case Vs:case da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ma:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ga:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case _a:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case xa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case va:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ba:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ea:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case wa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Aa:case Ra:case Ca:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ia:case Pa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ks:case La:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Jh(i){switch(i){case je:case Co:return{byteLength:1,components:1};case ns:case Io:case vn:return{byteLength:2,components:1};case Kr:case jr:return{byteLength:2,components:4};case xn:case Qr:case yn:return{byteLength:4,components:1};case Po:case Lo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Gc(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Yh(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((m,y)=>m.start-y.start);let u=0;for(let m=1;m<f.length;m++){let y=f[u],b=f[m];b.start<=y.start+y.count+1?y.count=Math.max(y.count,b.start+b.count-y.start):(++u,f[u]=b)}f.length=u+1;for(let m=0,y=f.length;m<y;m++){let b=f[m];i.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Zh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$h=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,su=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ru=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,au=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ou=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_u=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,xu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Su=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Au=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ru=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Du=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ou=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Gu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Vu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ku=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ju=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$u=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Qu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ku=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ju=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,td=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ed=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,id=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,od=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ld=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ud=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_d=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Td=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ed=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ad=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Id=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Pd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ld=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ud=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Od=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ef=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,af=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,df=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ff=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_f=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ef=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Af=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:Zh,alphahash_pars_fragment:$h,alphamap_fragment:Qh,alphamap_pars_fragment:Kh,alphatest_fragment:jh,alphatest_pars_fragment:tu,aomap_fragment:eu,aomap_pars_fragment:nu,batching_pars_vertex:iu,batching_vertex:su,begin_vertex:ru,beginnormal_vertex:au,bsdfs:ou,iridescence_fragment:lu,bumpmap_pars_fragment:cu,clipping_planes_fragment:hu,clipping_planes_pars_fragment:uu,clipping_planes_pars_vertex:du,clipping_planes_vertex:fu,color_fragment:pu,color_pars_fragment:mu,color_pars_vertex:gu,color_vertex:_u,common:xu,defaultnormal_vertex:yu,displacementmap_pars_vertex:vu,displacementmap_vertex:Mu,emissivemap_fragment:Su,emissivemap_pars_fragment:bu,colorspace_fragment:Tu,colorspace_pars_fragment:Eu,envmap_fragment:wu,envmap_common_pars_fragment:Au,envmap_pars_fragment:Ru,envmap_pars_vertex:Cu,envmap_physical_pars_fragment:Gu,envmap_vertex:Iu,fog_vertex:Pu,fog_pars_vertex:Lu,fog_fragment:Du,fog_pars_fragment:Nu,gradientmap_pars_fragment:Uu,lightmap_pars_fragment:Ou,lights_lambert_fragment:Fu,lights_lambert_pars_fragment:Bu,lights_pars_begin:zu,lights_toon_fragment:Vu,lights_toon_pars_fragment:ku,lights_phong_fragment:Hu,lights_phong_pars_fragment:Wu,lights_physical_fragment:Xu,lights_physical_pars_fragment:Ju,lights_fragment_begin:qu,lights_fragment_maps:Yu,lights_fragment_end:Zu,lightprobes_pars_fragment:$u,logdepthbuf_fragment:Qu,logdepthbuf_pars_fragment:Ku,logdepthbuf_pars_vertex:ju,logdepthbuf_vertex:td,map_fragment:ed,map_pars_fragment:nd,map_particle_fragment:id,map_particle_pars_fragment:sd,metalnessmap_fragment:rd,metalnessmap_pars_fragment:ad,morphinstance_vertex:od,morphcolor_vertex:ld,morphnormal_vertex:cd,morphtarget_pars_vertex:hd,morphtarget_vertex:ud,normal_fragment_begin:dd,normal_fragment_maps:fd,normal_pars_fragment:pd,normal_pars_vertex:md,normal_vertex:gd,normalmap_pars_fragment:_d,clearcoat_normal_fragment_begin:xd,clearcoat_normal_fragment_maps:yd,clearcoat_pars_fragment:vd,iridescence_pars_fragment:Md,opaque_fragment:Sd,packing:bd,premultiplied_alpha_fragment:Td,project_vertex:Ed,dithering_fragment:wd,dithering_pars_fragment:Ad,roughnessmap_fragment:Rd,roughnessmap_pars_fragment:Cd,shadowmap_pars_fragment:Id,shadowmap_pars_vertex:Pd,shadowmap_vertex:Ld,shadowmask_pars_fragment:Dd,skinbase_vertex:Nd,skinning_pars_vertex:Ud,skinning_vertex:Od,skinnormal_vertex:Fd,specularmap_fragment:Bd,specularmap_pars_fragment:zd,tonemapping_fragment:Gd,tonemapping_pars_fragment:Vd,transmission_fragment:kd,transmission_pars_fragment:Hd,uv_pars_fragment:Wd,uv_pars_vertex:Xd,uv_vertex:Jd,worldpos_vertex:qd,background_vert:Yd,background_frag:Zd,backgroundCube_vert:$d,backgroundCube_frag:Qd,cube_vert:Kd,cube_frag:jd,depth_vert:tf,depth_frag:ef,distance_vert:nf,distance_frag:sf,equirect_vert:rf,equirect_frag:af,linedashed_vert:of,linedashed_frag:lf,meshbasic_vert:cf,meshbasic_frag:hf,meshlambert_vert:uf,meshlambert_frag:df,meshmatcap_vert:ff,meshmatcap_frag:pf,meshnormal_vert:mf,meshnormal_frag:gf,meshphong_vert:_f,meshphong_frag:xf,meshphysical_vert:yf,meshphysical_frag:vf,meshtoon_vert:Mf,meshtoon_frag:Sf,points_vert:bf,points_frag:Tf,shadow_vert:Ef,shadow_frag:wf,sprite_vert:Af,sprite_frag:Rf},St={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Dn={basic:{uniforms:Ve([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ve([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ve([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ve([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ve([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new qt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ve([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ve([St.points,St.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ve([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ve([St.common,St.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ve([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ve([St.sprite,St.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:Ve([St.common,St.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:Ve([St.lights,St.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Dn.physical={uniforms:Ve([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var Na={r:0,b:0,g:0},Cf=new _e,Vc=new Gt;Vc.set(-1,0,0,0,1,0,0,0,1);function If(i,t,e,n,s,r){let a=new qt(0),o=s===!0?0:1,c,l,h=null,f=0,u=null;function m(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let S=v.backgroundBlurriness>0;w=t.get(w,S)}return w}function y(v){let w=!1,S=m(v);S===null?p(a,o):S&&S.isColor&&(p(S,1),w=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(v,w){let S=m(w);S&&S.isCubeTexture?(l===void 0&&(l=new cn(new ri(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:bi(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,E,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Cf.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Vc),l.material.toneMapped=jt.getTransfer(S.colorSpace)!==le,(h!==S||f!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new cn(new Cn(2,2),new In({name:"BackgroundMaterial",uniforms:bi(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=jt.getTransfer(S.colorSpace)!==le,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,w){v.getRGB(Na,Wo(i)),e.buffers.color.setClear(Na.r,Na.g,Na.b,w,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,w=1){a.set(v),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:y,addToRenderList:b,dispose:d}}function Pf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(U,O,J,R,H){let Q=!1,X=f(U,R,J,O);r!==X&&(r=X,l(r.object)),Q=m(U,R,J,H),Q&&y(U,R,J,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,S(U,O,J,R),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function f(U,O,J,R){let H=R.wireframe===!0,Q=n[O.id];Q===void 0&&(Q={},n[O.id]=Q);let X=U.isInstancedMesh===!0?U.id:0,at=Q[X];at===void 0&&(at={},Q[X]=at);let q=at[J.id];q===void 0&&(q={},at[J.id]=q);let et=q[H];return et===void 0&&(et=u(c()),q[H]=et),et}function u(U){let O=[],J=[],R=[];for(let H=0;H<e;H++)O[H]=0,J[H]=0,R[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:J,attributeDivisors:R,object:U,attributes:{},index:null}}function m(U,O,J,R){let H=r.attributes,Q=O.attributes,X=0,at=J.getAttributes();for(let q in at)if(at[q].location>=0){let it=H[q],At=Q[q];if(At===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(At=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(At=U.instanceColor)),it===void 0||it.attribute!==At||At&&it.data!==At.data)return!0;X++}return r.attributesNum!==X||r.index!==R}function y(U,O,J,R){let H={},Q=O.attributes,X=0,at=J.getAttributes();for(let q in at)if(at[q].location>=0){let it=Q[q];it===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(it=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(it=U.instanceColor));let At={};At.attribute=it,it&&it.data&&(At.data=it.data),H[q]=At,X++}r.attributes=H,r.attributesNum=X,r.index=R}function b(){let U=r.newAttributes;for(let O=0,J=U.length;O<J;O++)U[O]=0}function p(U){d(U,0)}function d(U,O){let J=r.newAttributes,R=r.enabledAttributes,H=r.attributeDivisors;J[U]=1,R[U]===0&&(i.enableVertexAttribArray(U),R[U]=1),H[U]!==O&&(i.vertexAttribDivisor(U,O),H[U]=O)}function v(){let U=r.newAttributes,O=r.enabledAttributes;for(let J=0,R=O.length;J<R;J++)O[J]!==U[J]&&(i.disableVertexAttribArray(J),O[J]=0)}function w(U,O,J,R,H,Q,X){X===!0?i.vertexAttribIPointer(U,O,J,H,Q):i.vertexAttribPointer(U,O,J,R,H,Q)}function S(U,O,J,R){b();let H=R.attributes,Q=J.getAttributes(),X=O.defaultAttributeValues;for(let at in Q){let q=Q[at];if(q.location>=0){let et=H[at];if(et===void 0&&(at==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),at==="instanceColor"&&U.instanceColor&&(et=U.instanceColor)),et!==void 0){let it=et.normalized,At=et.itemSize,Tt=t.get(et);if(Tt===void 0)continue;let tt=Tt.buffer,Mt=Tt.type,Et=Tt.bytesPerElement,Ut=Mt===i.INT||Mt===i.UNSIGNED_INT||et.gpuType===Qr;if(et.isInterleavedBufferAttribute){let mt=et.data,Nt=mt.isInterleavedBuffer===!0?mt.stride:mt.itemSize,ge=et.offset;if(mt.isInstancedInterleavedBuffer||mt.isInstancedBufferAttribute){for(let Ot=0;Ot<q.locationSize;Ot++)d(q.location+Ot,mt.meshPerAttribute);U.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Ot=0;Ot<q.locationSize;Ot++)p(q.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let Ot=0;Ot<q.locationSize;Ot++)w(q.location+Ot,At/q.locationSize,Mt,it,Nt*Et,(ge+At/q.locationSize*Ot)*Et,Ut)}else{if(et.isInstancedBufferAttribute){for(let mt=0;mt<q.locationSize;mt++)d(q.location+mt,et.meshPerAttribute);U.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let mt=0;mt<q.locationSize;mt++)p(q.location+mt);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let mt=0;mt<q.locationSize;mt++)w(q.location+mt,At/q.locationSize,Mt,it,At*Et,At/q.locationSize*mt*Et,Ut)}}else if(X!==void 0){let it=X[at];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(q.location,it);break;case 3:i.vertexAttrib3fv(q.location,it);break;case 4:i.vertexAttrib4fv(q.location,it);break;default:i.vertexAttrib1fv(q.location,it)}}}}v()}function A(){D();for(let U in n){let O=n[U];for(let J in O){let R=O[J];for(let H in R){let Q=R[H];for(let X in Q)h(Q[X].object),delete Q[X];delete R[H]}}delete n[U]}}function E(U){if(n[U.id]===void 0)return;let O=n[U.id];for(let J in O){let R=O[J];for(let H in R){let Q=R[H];for(let X in Q)h(Q[X].object),delete Q[X];delete R[H]}}delete n[U.id]}function g(U){for(let O in n){let J=n[O];for(let R in J){let H=J[R];if(H[U.id]===void 0)continue;let Q=H[U.id];for(let X in Q)h(Q[X].object),delete Q[X];delete H[U.id]}}}function M(U){for(let O in n){let J=n[O],R=U.isInstancedMesh===!0?U.id:0,H=J[R];if(H!==void 0){for(let Q in H){let X=H[Q];for(let at in X)h(X[at].object),delete X[at];delete H[Q]}delete J[R],Object.keys(J).length===0&&delete n[O]}}}function D(){I(),a=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:g,initAttributes:b,enableAttribute:p,disableUnusedAttributes:v}}function Lf(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let m=0;m<h;m++)u+=l[m];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Df(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==Mn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let M=g===vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==je&&g!==yn&&!M&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Bt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Bt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:y,maxTextureSize:b,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:S,maxSamples:A,samples:E}}function Nf(i){let t=this,e=null,n=0,s=!1,r=!1,a=new _n,o=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let m=f.length!==0||u||n!==0||s;return s=u,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,m){let y=f.clippingPlanes,b=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!s||y===null||y.length===0||r&&!p)r?h(null):l();else{let v=r?0:n,w=v*4,S=d.clippingState||null;c.value=S,S=h(y,u,w,m);for(let A=0;A!==w;++A)S[A]=e[A];d.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,m,y){let b=f!==null?f.length:0,p=null;if(b!==0){if(p=c.value,y!==!0||p===null){let d=m+b*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<d)&&(p=new Float32Array(d));for(let w=0,S=m;w!==b;++w,S+=4)a.copy(f[w]).applyMatrix4(v,o),a.normal.toArray(p,S),p[S+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,p}}var Js=class extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new bs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ri(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:yi});r.uniforms.tEquirect.value=e;let a=new cn(s,r),o=e.minFilter;return e.minFilter===Xn&&(e.minFilter=qe),new Ki(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},yc=256,Uf=3,Of=20,kc=256,Hc=16,Ff=3,Bf=new B,zf=new qt,Oa=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ki(1,10,null),this._boxMesh=new cn(new ri(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Bf}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,u=c.autoClearColor,m=c.autoClearDepth,y=c.autoClearStencil,b=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,b===null&&(t.background=c.getClearColor(zf));let p=new Ki(n,s,h);return p.position.copy(o),p.update(c,t),c.autoClear=f,c.autoClearColor=u,c.autoClearDepth=m,c.autoClearStencil=y,t.background=b,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(yc,ko(t))}_fromTexture(t,e){t.mapping===Mi||t.mapping===es?this._setSize(t.image.length===0?yc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=vc(t,!1,!1),n=Math.log2(t)-Uf;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=vc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Mi||t.mapping===es?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Mc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Gf(),this._integrationMaterial=Vf());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Hc);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Ff)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(kc*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=kf());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function vc(i,t,e){return new Js(i,{minFilter:Xn,generateMipmaps:t,type:vn,colorSpace:ps,depthBuffer:e})}function qs(i,t,e){return new In({name:i,uniforms:t,vertexShader:Yt.cube_vert,fragmentShader:e,side:Ze,blending:yi,depthTest:!1,depthWrite:!1})}function Gf(){return qs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${kc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Vf(){return qs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Hc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function kf(){return qs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Of}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Mc(){return qs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Sc(){return qs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Hf(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===Yr||m===Zr)if(t.has(u)){let y=t.get(u).texture;return o(y,u.mapping)}else{let y=u.image;if(y&&y.height>0){let b=new Js(y.height);return b.fromEquirectangularTexture(i,u),t.set(u,b),u.addEventListener("dispose",l),o(b.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let m=u.mapping,y=m===Yr||m===Zr,b=m===Mi||m===es;if(y||b){let p=e.get(u),d=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new Oa(i)),p=y?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let v=u.image;return y&&v&&v.height>0||b&&v&&c(v)?(n===null&&(n=new Oa(i)),p=y?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,m){return m===Yr?u.mapping=Mi:m===Zr&&(u.mapping=es),u}function c(u){let m=0,y=6;for(let b=0;b<y;b++)u[b]!==void 0&&m++;return m===y}function l(u){let m=u.target;m.removeEventListener("dispose",l);let y=t.get(m);y!==void 0&&(t.delete(m),y.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let y=e.get(m);y!==void 0&&(e.delete(m),y.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Wf(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&hs("WebGLRenderer: "+n+" extension not supported."),s}}}function Xf(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(y=>delete s[y]);function o(y){c(y.target)}function c(y){y.index!==null&&t.remove(y.index);for(let p in y.attributes)t.remove(y.attributes[p]);y.removeEventListener("dispose",o),delete s[y.id],a.unregister(y);let b=r.get(y);b&&(t.remove(b),r.delete(y)),n.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,e.memory.geometries--}function l(y,b){return s[b.id]!==void 0||(b.addEventListener("dispose",o),s[b.id]=new WeakRef(b),a.register(b,b.id,b),e.memory.geometries++),b}function h(y){let b=y.attributes;for(let p in b)t.update(b[p],i.ARRAY_BUFFER)}function f(y){let b=y.index,p=y.attributes.position,d=0;if(p===void 0)return;let v=b!==null?b.array.length:p.array.length/3-1,w=p.count>=65535?Ss:Ms,S=new w(Math.ceil(v/3)*6,1),A=S.array;if(b!==null){let g=b.array;d=b.version;for(let M=0,D=0;M<v;M+=3){let I=g[M+0],U=g[M+1],O=g[M+2];A[D++]=I,A[D++]=U,A[D++]=U,A[D++]=O,A[D++]=O,A[D++]=I}}else{d=p.version;for(let g=0,M=0;g<v;g+=3){let D=g+0,I=g+1,U=g+2;A[M++]=D,A[M++]=I,A[M++]=I,A[M++]=U,A[M++]=U,A[M++]=D}}S.version=d;let E=r.get(y);E&&t.remove(E),r.set(y,S)}function u(y){let b=r.get(y);if(b){let p=y.index;p!==null&&b.version<p.version&&f(y)}else f(y);return r.get(y)}function m(){for(let y in s){let b=s[y].deref();b!==void 0&&c(b)}}return{get:l,update:h,getWireframeAttribute:u,dispose:m}}function Jf(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function l(f,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,f*a,m),e.update(u,n,m))}function h(f,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,m);let b=0;for(let p=0;p<m;p++)b+=u[p];e.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function qf(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:zt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Yf(i,t,e){let n=new WeakMap,s=new ye;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let D=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],w=0;m===!0&&(w=1),y===!0&&(w=2),b===!0&&(w=3);let S=o.attributes.position.count*w,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let E=new Float32Array(S*A*4*f),g=new _s(E,S,A,f);g.type=yn,g.needsUpdate=!0;let M=w*4;for(let I=0;I<f;I++){let U=p[I],O=d[I],J=v[I],R=S*A*4*I;for(let H=0;H<U.count;H++){let Q=H*M;m===!0&&(s.fromBufferAttribute(U,H),E[R+Q+0]=s.x,E[R+Q+1]=s.y,E[R+Q+2]=s.z,E[R+Q+3]=0),y===!0&&(s.fromBufferAttribute(O,H),E[R+Q+4]=s.x,E[R+Q+5]=s.y,E[R+Q+6]=s.z,E[R+Q+7]=0),b===!0&&(s.fromBufferAttribute(J,H),E[R+Q+8]=s.x,E[R+Q+9]=s.y,E[R+Q+10]=s.z,E[R+Q+11]=J.itemSize===4?s.w:1)}}u={count:f,texture:g,size:new Jt(S,A)},n.set(o,u),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let b=0;b<l.length;b++)m+=l[b];let y=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Zf(i,t,e,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,u=t.get(l,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let m=l.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var $f={[Mo]:"LINEAR_TONE_MAPPING",[So]:"REINHARD_TONE_MAPPING",[bo]:"CINEON_TONE_MAPPING",[To]:"ACES_FILMIC_TONE_MAPPING",[wo]:"AGX_TONE_MAPPING",[Ao]:"NEUTRAL_TONE_MAPPING",[Eo]:"CUSTOM_TONE_MAPPING"};function Qf(i,t,e,n,s,r){let a=new sn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new ln;h.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new xe([0,2,0,0,2,0],2));let f=new Dr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new cn(h,f),m=new Ns(-1,1,1,-1,0,1),y=null,b=null,p=!1,d,v=null,w=[],S=!1;this.setSize=function(A,E){a.setSize(A,E),o!==null&&o.setSize(A,E),c!==null&&c.setSize(A,E);for(let g=0;g<w.length;g++){let M=w[g];M.setSize&&M.setSize(A,E)}},this.setEffects=function(A){w=A,S=w.length>0&&w[0].isRenderPass===!0;let E=a.width,g=a.height;w.length>0&&o===null&&(o=new sn(E,g,{type:vn,depthBuffer:!1,stencilBuffer:!1}),c=new sn(E,g,{type:vn,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&w.some(D=>D.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&l===null&&(l=new Wn(E,g),r===!0&&(l.format=Jn,l.type=Si)),a.dispose(),a.depthTexture=M?l:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let D=0;D<w.length;D++){let I=w[D];I.setSize&&I.setSize(E,g),M&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(l)}},this.begin=function(A,E){if(p||A.toneMapping===Pn&&w.length===0)return!1;if(v=E,E!==null){let g=E.width,M=E.height;(a.width!==g||a.height!==M)&&this.setSize(g,M)}return S===!1&&A.setRenderTarget(a),d=A.toneMapping,A.toneMapping=Pn,!0},this.hasRenderPass=function(){return S},this.end=function(A,E){A.toneMapping=d,p=!0;let g=a,M=o;for(let D=0;D<w.length;D++){let I=w[D];I.enabled!==!1&&(I.render(A,M,g,E),I.needsSwap!==!1&&(g=M,M=M===o?c:o))}if(y!==A.outputColorSpace||b!==A.toneMapping){y=A.outputColorSpace,b=A.toneMapping,f.defines={},jt.getTransfer(y)===le&&(f.defines.SRGB_TRANSFER="");let D=$f[b];D&&(f.defines[D]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(v),A.render(u,m),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var Wc=new Ye,Xc=new Wn(1,1),Jc=new Es(1),qc=new _s,Yc=new Cr,Zc=new bs,bc=[],Tc=[],Ec=new Float32Array(16),wc=new Float32Array(9),Ac=new Float32Array(4);function rs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=bc[s];if(r===void 0&&(r=new Float32Array(s),bc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ba(i,t){let e=Tc[t];e===void 0&&(e=new Int32Array(t),Tc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Kf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function tp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function ep(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function np(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Ac.set(n),i.uniformMatrix2fv(this.addr,!1,Ac),Ce(e,n)}}function ip(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;wc.set(n),i.uniformMatrix3fv(this.addr,!1,wc),Ce(e,n)}}function sp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Ec.set(n),i.uniformMatrix4fv(this.addr,!1,Ec),Ce(e,n)}}function rp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ap(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function cp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function hp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function dp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function za(i){return i.version===0&&(i.compareFunction=Bo,i.needsUpdate=!0),i}function fp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=za(Xc):r=Wc,e.setTexture2D(t||r,s)}function pp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Yc,s)}function mp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=za(Jc):r=Zc,e.setTextureCube(t||r,s)}function gp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qc,s)}function _p(i){switch(i){case 5126:return Kf;case 35664:return jf;case 35665:return tp;case 35666:return ep;case 35674:return np;case 35675:return ip;case 35676:return sp;case 5124:case 35670:return rp;case 35667:case 35671:return ap;case 35668:case 35672:return op;case 35669:case 35673:return lp;case 5125:return cp;case 36294:return hp;case 36295:return up;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return fp;case 35679:case 36299:case 36307:return pp;case 35680:case 36300:case 36308:case 36293:return mp;case 36289:case 36303:case 36311:case 36292:return gp}}function xp(i,t){i.uniform1fv(this.addr,t)}function yp(i,t){let e=rs(t,this.size,2);i.uniform2fv(this.addr,e)}function vp(i,t){let e=rs(t,this.size,3);i.uniform3fv(this.addr,e)}function Mp(i,t){let e=rs(t,this.size,4);i.uniform4fv(this.addr,e)}function Sp(i,t){let e=rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function bp(i,t){let e=rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Tp(i,t){let e=rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ep(i,t){i.uniform1iv(this.addr,t)}function wp(i,t){i.uniform2iv(this.addr,t)}function Ap(i,t){i.uniform3iv(this.addr,t)}function Rp(i,t){i.uniform4iv(this.addr,t)}function Cp(i,t){i.uniform1uiv(this.addr,t)}function Ip(i,t){i.uniform2uiv(this.addr,t)}function Pp(i,t){i.uniform3uiv(this.addr,t)}function Lp(i,t){i.uniform4uiv(this.addr,t)}function Dp(i,t,e){let n=this.cache,s=t.length,r=Ba(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=za(Xc):a=Wc;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Np(i,t,e){let n=this.cache,s=t.length,r=Ba(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Yc,r[a])}function Up(i,t,e){let n=this.cache,s=t.length,r=Ba(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=za(Jc):a=Zc;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Op(i,t,e){let n=this.cache,s=t.length,r=Ba(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||qc,r[a])}function Fp(i){switch(i){case 5126:return xp;case 35664:return yp;case 35665:return vp;case 35666:return Mp;case 35674:return Sp;case 35675:return bp;case 35676:return Tp;case 5124:case 35670:return Ep;case 35667:case 35671:return wp;case 35668:case 35672:return Ap;case 35669:case 35673:return Rp;case 5125:return Cp;case 36294:return Ip;case 36295:return Pp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Np;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return Op}}var $o=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_p(e.type)}},Qo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fp(e.type)}},Ko=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Yo=/(\w+)(\])?(\[|\.)?/g;function Rc(i,t){i.seq.push(t),i.map[t.id]=t}function Bp(i,t,e){let n=i.name,s=n.length;for(Yo.lastIndex=0;;){let r=Yo.exec(n),a=Yo.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Rc(e,l===void 0?new $o(o,i,t):new Qo(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Ko(o),Rc(e,f)),e=f}}}var ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Bp(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Cc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var zp=37297,Gp=0;function Vp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Ic=new Gt;function kp(i){jt._getMatrix(Ic,jt.workingColorSpace,i);let t=`mat3( ${Ic.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case ms:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Pc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Vp(i.getShaderSource(t),o)}else return r}function Hp(i,t){let e=kp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Wp={[Mo]:"Linear",[So]:"Reinhard",[bo]:"Cineon",[To]:"ACESFilmic",[wo]:"AgX",[Ao]:"Neutral",[Eo]:"Custom"};function Xp(i,t){let e=Wp[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ua=new B;function Jp(){jt.getLuminanceCoefficients(Ua);let i=Ua.x.toFixed(4),t=Ua.y.toFixed(4),e=Ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function Yp(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zp(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Xs(i){return i!==""}function Lc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Dc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $p=/^[ \t]*#include +<([\w\d./]+)>/gm;function jo(i){return i.replace($p,Qp)}function Qp(i,t){let e=Yt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return jo(e)}var Kp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nc(i){return i.replace(Kp,jp)}function jp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var tm={[xi]:"SHADOWMAP_TYPE_PCF",[ji]:"SHADOWMAP_TYPE_VSM"};function em(i){return tm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var nm={[es]:"ENVMAP_MODE_REFRACTION"};function im(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":nm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sm={[vo]:"ENVMAP_BLENDING_MULTIPLY",[Ql]:"ENVMAP_BLENDING_MIX",[Kl]:"ENVMAP_BLENDING_ADD"};function rm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":sm[i.combine]||"ENVMAP_BLENDING_NONE"}function am(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=em(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=im(e),f=rm(e),u=qp(e),m=Yp(r),y=s.createProgram(),b,p,d=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(b=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Xs).join(`
`),b.length>0&&(b+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Xs).join(`
`),p.length>0&&(p+=`
`)):(b=[Uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),p=[Uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?Xp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Hp("linearToOutputTexel",e.outputColorSpace),Jp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xs).join(`
`)),a=jo(a),a=Lc(a,e),a=Dc(a,e),o=jo(o),o=Lc(o,e),o=Dc(o,e),a=Nc(a),o=Nc(o),e.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,b=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,p=["#define varying in",e.glslVersion===zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=d+b+a,w=d+p+o,S=Cc(s,s.VERTEX_SHADER,v),A=Cc(s,s.FRAGMENT_SHADER,w);s.attachShader(y,S),s.attachShader(y,A),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function E(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(y)||"",O=s.getShaderInfoLog(S)||"",J=s.getShaderInfoLog(A)||"",R=U.trim(),H=O.trim(),Q=J.trim(),X=!0,at=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,S,A);else{let q=Pc(s,S,"vertex"),et=Pc(s,A,"fragment");zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+R+`
`+q+`
`+et)}else R!==""?Bt("WebGLProgram: Program Info Log:",R):(H===""||Q==="")&&(at=!1);at&&(I.diagnostics={runnable:X,programLog:R,vertexShader:{log:H,prefix:b},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(S),s.deleteShader(A),g=new ss(s,y),M=Zp(s,y)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(y,zp)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gp++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=A,this}var om=0,tl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new el(t),e.set(t,n)),n}},el=class{constructor(t){this.id=om++,this.code=t,this.usedTimes=0}};function lm(i){return i===ui||i===Vs||i===ks}function cm(i,t,e,n,s,r){let a=new xs,o=new tl,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return c.add(g),g===0?"uv":`uv${g}`}function y(g,M,D,I,U,O){let J=I.fog,R=U.geometry,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?I.environment:null,Q=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,X=t.get(g.envMap||H,Q),at=u[g.type],q=n.precision;g.precision!==null&&(q=n.getMaxPrecision(g.precision),q!==g.precision&&Bt("WebGLProgram.getParameters:",g.precision,"not supported, using",q,"instead."));let et=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,it=et!==void 0?et.length:0,At=0;R.morphAttributes.position!==void 0&&(At=1),R.morphAttributes.normal!==void 0&&(At=2),R.morphAttributes.color!==void 0&&(At=3);let Tt,tt,Mt,Et;if(at){let xt=Dn[at];Tt=xt.vertexShader,tt=xt.fragmentShader}else{Tt=g.vertexShader,tt=g.fragmentShader;let xt=o.getVertexShaderStage(g),ee=o.getFragmentShaderStage(g);o.update(g,xt,ee),Mt=xt.id,Et=ee.id}let Ut=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),Nt=U.isInstancedMesh===!0,ge=U.isBatchedMesh===!0,Ot=!!g.map,$t=!!g.matcap,ie=!!X,Wt=ie&&X.isPMREMTexture===!0,Me=!!g.aoMap,he=!!g.lightMap,Ie=!!g.bumpMap&&g.wireframe===!1,ue=!!g.normalMap,Ue=!!g.displacementMap,pe=!!g.emissiveMap,Pe=!!g.metalnessMap,$e=!!g.roughnessMap,ke=g.anisotropy>0,N=g.clearcoat>0,He=g.diffuseRoughness>0,ae=g.dispersion>0,ce=g.retroreflectivity>0,ft=g.iridescence>0,Xt=g.sheen>0,Lt=g.transmission>0,Ft=ke&&!!g.anisotropyMap,T=N&&!!g.clearcoatMap,_=N&&!!g.clearcoatNormalMap,F=N&&!!g.clearcoatRoughnessMap,st=He&&!!g.diffuseRoughnessMap,K=ft&&!!g.iridescenceMap,ut=ft&&!!g.iridescenceThicknessMap,dt=Xt&&!!g.sheenColorMap,Y=Xt&&!!g.sheenRoughnessMap,$=!!g.specularMap,gt=!!g.specularColorMap,C=!!g.specularIntensityMap,j=Lt&&!!g.transmissionMap,Z=Lt&&!!g.thicknessMap,_t=!!g.gradientMap,ot=!!g.alphaMap,pt=g.alphaTest>0,It=!!g.alphaHash,Vt=!!g.extensions,lt=Pn;g.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(lt=i.toneMapping);let Dt=Wt?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,kt={shaderID:at,shaderType:g.type,shaderName:g.name,vertexShader:Tt,fragmentShader:tt,defines:g.defines,customVertexShaderID:Mt,customFragmentShaderID:Et,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:q,batching:ge,batchingColor:ge&&U._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&U.instanceColor!==null,instancingMorph:Nt&&U.morphTexture!==null,outputColorSpace:Ut===null?i.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:jt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ot,matcap:$t,envMap:ie,envMapMode:ie&&X.mapping,envMapPMREM:Wt,envMapMaxLod:Wt?Dt.length-1:null,envMapSize:Wt?Dt[0].width:null,aoMap:Me,lightMap:he,bumpMap:Ie,normalMap:ue,displacementMap:Ue,emissiveMap:pe,normalMapObjectSpace:ue&&g.normalMapType===ec,normalMapTangentSpace:ue&&g.normalMapType===Da,packedNormalMap:ue&&g.normalMapType===Da&&lm(g.normalMap.format),metalnessMap:Pe,roughnessMap:$e,anisotropy:ke,anisotropyMap:Ft,clearcoat:N,clearcoatMap:T,clearcoatNormalMap:_,clearcoatRoughnessMap:F,diffuseRoughness:He,diffuseRoughnessMap:st,dispersion:ae,retroreflection:ce,iridescence:ft,iridescenceMap:K,iridescenceThicknessMap:ut,sheen:Xt,sheenColorMap:dt,sheenRoughnessMap:Y,specularMap:$,specularColorMap:gt,specularIntensityMap:C,transmission:Lt,transmissionMap:j,thicknessMap:Z,gradientMap:_t,opaque:g.transparent===!1&&g.blending===ts&&g.alphaToCoverage===!1,alphaMap:ot,alphaTest:pt,alphaHash:It,combine:g.combine,mapUv:Ot&&m(g.map.channel),aoMapUv:Me&&m(g.aoMap.channel),lightMapUv:he&&m(g.lightMap.channel),bumpMapUv:Ie&&m(g.bumpMap.channel),normalMapUv:ue&&m(g.normalMap.channel),displacementMapUv:Ue&&m(g.displacementMap.channel),emissiveMapUv:pe&&m(g.emissiveMap.channel),metalnessMapUv:Pe&&m(g.metalnessMap.channel),roughnessMapUv:$e&&m(g.roughnessMap.channel),anisotropyMapUv:Ft&&m(g.anisotropyMap.channel),clearcoatMapUv:T&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:_&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:K&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:Y&&m(g.sheenRoughnessMap.channel),specularMapUv:$&&m(g.specularMap.channel),specularColorMapUv:gt&&m(g.specularColorMap.channel),specularIntensityMapUv:C&&m(g.specularIntensityMap.channel),transmissionMapUv:j&&m(g.transmissionMap.channel),thicknessMapUv:Z&&m(g.thicknessMap.channel),alphaMapUv:ot&&m(g.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(ue||ke),vertexNormals:!!R.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!R.attributes.uv&&(Ot||ot),fog:!!J,useFog:g.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||R.attributes.normal===void 0&&ue===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:mt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:At,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:O.filter(xt=>xt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:lt,decodeVideoTexture:Ot&&g.map.isVideoTexture===!0&&jt.getTransfer(g.map.colorSpace)===le,decodeVideoTextureEmissive:pe&&g.emissiveMap.isVideoTexture===!0&&jt.getTransfer(g.emissiveMap.colorSpace)===le,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===un,flipSided:g.side===Ze,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Vt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&g.extensions.multiDraw===!0||ge)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function b(g){let M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(let D in g.defines)M.push(D),M.push(g.defines[D]);return g.isRawShaderMaterial===!1&&(p(M,g),d(M,g),M.push(i.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function p(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapPMREM),g.push(M.envMapMaxLod),g.push(M.envMapSize),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.diffuseRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.numSunLights),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numSunLightShadows),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.numLightProbeGrids),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function d(g,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function v(g){let M=u[g.type],D;if(M){let I=Dn[M];D=gc.clone(I.uniforms)}else D=g.uniforms;return D}function w(g,M){let D=h.get(M);return D!==void 0?++D.usedTimes:(D=new am(i,M,g,s),l.push(D),h.set(M,D)),D}function S(g){if(--g.usedTimes===0){let M=l.indexOf(g);l[M]=l[l.length-1],l.pop(),h.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function E(){o.dispose()}return{getParameters:y,getProgramCacheKey:b,getUniforms:v,acquireProgram:w,releaseProgram:S,releaseShaderCache:A,programs:l,dispose:E}}function hm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function um(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Oc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,y,b,p,d){let v=i[t];return v===void 0?(v={id:u.id,object:u,geometry:m,material:y,materialVariant:a(u),groupOrder:b,renderOrder:u.renderOrder,z:p,group:d},i[t]=v):(v.id=u.id,v.object=u,v.geometry=m,v.material=y,v.materialVariant=a(u),v.groupOrder=b,v.renderOrder=u.renderOrder,v.z=p,v.group=d),t++,v}function c(u,m,y,b,p,d,v){v.reversedDepth===!0&&(p=-p);let w=o(u,m,y,b,p,d);y.transmission>0?n.push(w):y.transparent===!0?s.push(w):e.push(w)}function l(u,m,y,b,p,d){let v=o(u,m,y,b,p,d);y.transmission>0?n.unshift(v):y.transparent===!0?s.unshift(v):e.unshift(v)}function h(u,m){e.length>1&&e.sort(u||um),n.length>1&&n.sort(m||Oc),s.length>1&&s.sort(m||Oc)}function f(){for(let u=t,m=i.length;u<m;u++){let y=i[u];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function dm(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Fc,i.set(n,[a])):s>=r.length?(a=new Fc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function fm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new qt};break;case"SpotLight":e={position:new B,direction:new B,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function pm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var mm=0;function gm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _m(i){let t=new fm,e=pm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);let s=new B,r=new _e,a=new _e;function o(l){let h=0,f=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let m=0,y=0,b=0,p=0,d=0,v=0,w=0,S=0,A=0,E=0,g=0,M=0,D=0,I=0;l.sort(gm);for(let O=0,J=l.length;O<J;O++){let R=l[O],H=R.color,Q=R.intensity,X=R.distance,at=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ui?at=R.shadow.map.texture:at=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=H.r*Q,f+=H.g*Q,u+=H.b*Q;else if(R.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(R.sh.coefficients[q],Q);I++}else if(R.isSunLight){let q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let et=R.shadow,it=e.get(R);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[y]=it,n.sunShadowMap[y]=at;let At=et.getViewportCount();for(let Tt=0;Tt<At;Tt++)n.sunShadowMatrix[b+Tt]=et.getMatrix(Tt),n.sunShadowCascade[b+Tt]=et._cascadeData[Tt];b+=At,y++}n.sun[m]=q,m++}else if(R.isDirectionalLight){let q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let et=R.shadow,it=e.get(R);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,n.directionalShadow[p]=it,n.directionalShadowMap[p]=at,n.directionalShadowMatrix[p]=R.shadow.matrix,A++}n.directional[p]=q,p++}else if(R.isSpotLight){let q=t.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(H).multiplyScalar(Q),q.distance=X,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,n.spot[v]=q;let et=R.shadow;if(R.map&&(n.spotLightMap[M]=R.map,M++,et.updateMatrices(R),R.castShadow&&D++),n.spotLightMatrix[v]=et.matrix,R.castShadow){let it=e.get(R);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,n.spotShadow[v]=it,n.spotShadowMap[v]=at,g++}v++}else if(R.isRectAreaLight){let q=t.get(R);q.color.copy(H).multiplyScalar(Q),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),n.rectArea[w]=q,w++}else if(R.isPointLight){let q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){let et=R.shadow,it=e.get(R);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,it.shadowCameraNear=et.camera.near,it.shadowCameraFar=et.camera.far,n.pointShadow[d]=it,n.pointShadowMap[d]=at,n.pointShadowMatrix[d]=R.shadow.matrix,E++}n.point[d]=q,d++}else if(R.isHemisphereLight){let q=t.get(R);q.skyColor.copy(R.color).multiplyScalar(Q),q.groundColor.copy(R.groundColor).multiplyScalar(Q),n.hemi[S]=q,S++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let U=n.hash;(U.sunLength!==m||U.directionalLength!==p||U.pointLength!==d||U.spotLength!==v||U.rectAreaLength!==w||U.hemiLength!==S||U.numSunShadows!==y||U.numDirectionalShadows!==A||U.numPointShadows!==E||U.numSpotShadows!==g||U.numSpotMaps!==M||U.numLightProbes!==I)&&(n.sun.length=m,n.directional.length=p,n.spot.length=v,n.rectArea.length=w,n.point.length=d,n.hemi.length=S,n.sunShadow.length=y,n.sunShadowMap.length=y,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+M-D,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=I,U.sunLength=m,U.directionalLength=p,U.pointLength=d,U.spotLength=v,U.rectAreaLength=w,U.hemiLength=S,U.numSunShadows=y,U.numDirectionalShadows=A,U.numPointShadows=E,U.numSpotShadows=g,U.numSpotMaps=M,U.numLightProbes=I,n.version=mm++)}function c(l,h){let f=0,u=0,m=0,y=0,b=0,p=0,d=h.matrixWorldInverse;for(let v=0,w=l.length;v<w;v++){let S=l[v];if(S.isSunLight){let A=n.sun[f];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(d),f++}else if(S.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),u++}else if(S.isSpotLight){let A=n.spot[y];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),y++}else if(S.isRectAreaLight){let A=n.rectArea[b];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),a.identity(),r.copy(S.matrixWorld),r.premultiply(d),a.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),b++}else if(S.isPointLight){let A=n.point[m];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){let A=n.hemi[p];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(d),p++}}}return{setup:o,setupView:c,state:n}}function Bc(i){let t=new _m(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){n.push(f)}function c(){t.setup(e),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function l(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function xm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Bc(i),t.set(s,[o])):r>=a.length?(o=new Bc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Mm=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Sm=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],zc=new _e,Ws=new B,Zo=new B;function bm(i,t,e){let n=new si,s=new Jt,r=new Jt,a=new ye,o=new Nr,c=new Ur,l={},h=e.maxTextureSize,f={[hi]:Ze,[Ze]:hi,[un]:un},u=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:ym,fragmentShader:vm}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let y=new ln;y.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new cn(y,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xi;let d=this.type;this.render=function(E,g,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Ll&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xi);let D=i.getRenderTarget(),I=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),O=i.state;O.setBlending(yi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let J=d!==this.type;J&&g.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(H=>H.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,H=E.length;R<H;R++){let Q=E[R],X=Q.shadow;if(X===void 0){Bt("WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let at=X.getFrameExtents();s.multiply(at),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,X.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=q,X.map===null||J===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===ji){if(Q.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new sn(s.x,s.y,{format:ui,type:vn,minFilter:qe,magFilter:qe,generateMipmaps:!1}),X.map.texture.name=Q.name+".shadowMap",X.map.depthTexture=new Wn(s.x,s.y,yn),X.map.depthTexture.name=Q.name+".shadowMapDepth",X.map.depthTexture.format=kn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ne,X.map.depthTexture.magFilter=Ne}else Q.isPointLight?(X.map=new Js(s.x),X.map.depthTexture=new Es(s.x,xn)):(X.map=new sn(s.x,s.y),X.map.depthTexture=new Wn(s.x,s.y,xn)),X.map.depthTexture.name=Q.name+".shadowMap",X.map.depthTexture.format=kn,this.type===xi?(X.map.depthTexture.compareFunction=q?Fo:Oo,X.map.depthTexture.minFilter=qe,X.map.depthTexture.magFilter=qe):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ne,X.map.depthTexture.magFilter=Ne);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let et=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();Q.isPointLight!==!0&&X.updateMatrices(Q,M);let it=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:M.layers;for(let At=0;At<et;At++){let Tt=X.getCamera(At);if(Q.isPointLight){let tt=X.camera,Mt=X.matrix,Et=Q.distance||tt.far;Et!==tt.far&&(tt.far=Et,tt.updateProjectionMatrix()),Ws.setFromMatrixPosition(Q.matrixWorld),tt.position.copy(Ws),Zo.copy(tt.position),Zo.add(Mm[At]),tt.up.copy(Sm[At]),tt.lookAt(Zo),tt.updateMatrixWorld(),Mt.makeTranslation(-Ws.x,-Ws.y,-Ws.z),zc.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(zc,tt.coordinateSystem,tt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,At),i.clear();else{At===0&&(i.setRenderTarget(X.map),i.clear());let tt=X.getViewport(At);a.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),O.viewport(a)}n=X.getFrustum(At),S(g,M,Tt,Q,it,this.type)}X.isPointLightShadow!==!0&&this.type===ji&&v(X,M),X.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(D,I,U)};function v(E,g){let M=t.update(b);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null?E.mapPass=new sn(s.x,s.y,{format:ui,type:vn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(g,null,M,u,b,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(g,null,M,m,b,null)}function w(E,g,M,D){let I=null,U=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)I=U;else if(I=M.isPointLight===!0?c:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let O=I.uuid,J=g.uuid,R=l[O];R===void 0&&(R={},l[O]=R);let H=R[J];H===void 0&&(H=I.clone(),R[J]=H,g.addEventListener("dispose",A)),I=H}if(I.visible=g.visible,I.wireframe=g.wireframe,D===ji?I.side=g.shadowSide!==null?g.shadowSide:g.side:I.side=g.shadowSide!==null?g.shadowSide:f[g.side],I.alphaMap=g.alphaMap,I.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,I.map=g.map,I.clipShadows=g.clipShadows,I.clippingPlanes=g.clippingPlanes,I.clipIntersection=g.clipIntersection,I.displacementMap=g.displacementMap,I.displacementScale=g.displacementScale,I.displacementBias=g.displacementBias,I.wireframeLinewidth=g.wireframeLinewidth,I.linewidth=g.linewidth,M.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let O=i.properties.get(I);O.light=M}return I}function S(E,g,M,D,I,U){if(E.visible===!1)return;if(E.layers.test(I)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&U===ji)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let R=t.update(E),H=E.material;if(Array.isArray(H)){let Q=R.groups;for(let X=0,at=Q.length;X<at;X++){let q=Q[X],et=H[q.materialIndex];if(et&&et.visible){let it=w(E,et,D,U);E.onBeforeShadow(i,E,g,M,R,it,q),i.renderBufferDirect(M,null,R,it,E,q),E.onAfterShadow(i,E,g,M,R,it,q)}}}else if(H.visible){let Q=w(E,H,D,U);E.onBeforeShadow(i,E,g,M,R,Q,null),i.renderBufferDirect(M,null,R,Q,E,null),E.onAfterShadow(i,E,g,M,R,Q,null)}}let J=E.children;for(let R=0,H=J.length;R<H;R++)S(J[R],g,M,D,I,U)}function A(E){E.target.removeEventListener("dispose",A);for(let M in l){let D=l[M],I=E.target.uuid;I in D&&(D[I].dispose(),delete D[I])}}}function Tm(i,t){function e(){let C=!1,j=new ye,Z=null,_t=new ye(0,0,0,0);return{setMask:function(ot){Z!==ot&&!C&&(i.colorMask(ot,ot,ot,ot),Z=ot)},setLocked:function(ot){C=ot},setClear:function(ot,pt,It,Vt,lt){lt===!0&&(ot*=Vt,pt*=Vt,It*=Vt),j.set(ot,pt,It,Vt),_t.equals(j)===!1&&(i.clearColor(ot,pt,It,Vt),_t.copy(j))},reset:function(){C=!1,Z=null,_t.set(-1,0,0,0)}}}function n(){let C=!1,j=!1,Z=null,_t=null,ot=null;return{setReversed:function(pt){if(j!==pt){let It=t.get("EXT_clip_control");pt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),j=pt;let Vt=ot;ot=null,this.setClear(Vt)}},getReversed:function(){return j},setTest:function(pt){pt?mt(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(pt){Z!==pt&&!C&&(i.depthMask(pt),Z=pt)},setFunc:function(pt){if(j&&(pt=dc[pt]),_t!==pt){switch(pt){case xr:i.depthFunc(i.NEVER);break;case yr:i.depthFunc(i.ALWAYS);break;case vr:i.depthFunc(i.LESS);break;case ki:i.depthFunc(i.LEQUAL);break;case Mr:i.depthFunc(i.EQUAL);break;case Sr:i.depthFunc(i.GEQUAL);break;case br:i.depthFunc(i.GREATER);break;case Tr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=pt}},setLocked:function(pt){C=pt},setClear:function(pt){ot!==pt&&(ot=pt,j&&(pt=1-pt),i.clearDepth(pt))},reset:function(){C=!1,Z=null,_t=null,ot=null,j=!1}}}function s(){let C=!1,j=null,Z=null,_t=null,ot=null,pt=null,It=null,Vt=null,lt=null;return{setTest:function(Dt){C||(Dt?mt(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(Dt){j!==Dt&&!C&&(i.stencilMask(Dt),j=Dt)},setFunc:function(Dt,kt,xt){(Z!==Dt||_t!==kt||ot!==xt)&&(i.stencilFunc(Dt,kt,xt),Z=Dt,_t=kt,ot=xt)},setOp:function(Dt,kt,xt){(pt!==Dt||It!==kt||Vt!==xt)&&(i.stencilOp(Dt,kt,xt),pt=Dt,It=kt,Vt=xt)},setLocked:function(Dt){C=Dt},setClear:function(Dt){lt!==Dt&&(i.clearStencil(Dt),lt=Dt)},reset:function(){C=!1,j=null,Z=null,_t=null,ot=null,pt=null,It=null,Vt=null,lt=null}}}let r=new e,a=new n,o=new s,c={},l=new WeakMap,h={},f={},u={},m=new WeakMap,y=[],b=null,p=!1,d=null,v=null,w=null,S=null,A=null,E=null,g=null,M=new qt(0,0,0),D=0,I=!1,U=null,O=null,J=null,R=null,H=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,at=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=at>=1):q.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=at>=2);let et=null,it={},At=i.getParameter(i.SCISSOR_BOX),Tt=i.getParameter(i.VIEWPORT),tt=new ye().fromArray(At),Mt=new ye().fromArray(Tt);function Et(C,j,Z,_t){let ot=new Uint8Array(4),pt=i.createTexture();i.bindTexture(C,pt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<Z;It++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(j+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return pt}let Ut={};Ut[i.TEXTURE_2D]=Et(i.TEXTURE_2D,i.TEXTURE_2D,1),Ut[i.TEXTURE_CUBE_MAP]=Et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ut[i.TEXTURE_2D_ARRAY]=Et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ut[i.TEXTURE_3D]=Et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),mt(i.DEPTH_TEST),a.setFunc(ki),Ie(!1),ue(po),mt(i.CULL_FACE),Me(yi);function mt(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function Nt(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function ge(C,j){return u[C]!==j?(i.bindFramebuffer(C,j),u[C]=j,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=j),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=j),!0):!1}function Ot(C,j){let Z=y,_t=!1;if(C){Z=m.get(j),Z===void 0&&(Z=[],m.set(j,Z));let ot=C.textures;if(Z.length!==ot.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,It=ot.length;pt<It;pt++)Z[pt]=i.COLOR_ATTACHMENT0+pt;Z.length=ot.length,_t=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,_t=!0);_t&&i.drawBuffers(Z)}function $t(C){return b!==C?(i.useProgram(C),b=C,!0):!1}let ie={[vi]:i.FUNC_ADD,[Nl]:i.FUNC_SUBTRACT,[Ul]:i.FUNC_REVERSE_SUBTRACT};ie[Ol]=i.MIN,ie[Fl]=i.MAX;let Wt={[Bl]:i.ZERO,[zl]:i.ONE,[Gl]:i.SRC_COLOR,[xo]:i.SRC_ALPHA,[Jl]:i.SRC_ALPHA_SATURATE,[Wl]:i.DST_COLOR,[kl]:i.DST_ALPHA,[Vl]:i.ONE_MINUS_SRC_COLOR,[yo]:i.ONE_MINUS_SRC_ALPHA,[Xl]:i.ONE_MINUS_DST_COLOR,[Hl]:i.ONE_MINUS_DST_ALPHA,[ql]:i.CONSTANT_COLOR,[Yl]:i.ONE_MINUS_CONSTANT_COLOR,[Zl]:i.CONSTANT_ALPHA,[$l]:i.ONE_MINUS_CONSTANT_ALPHA};function Me(C,j,Z,_t,ot,pt,It,Vt,lt,Dt){if(C===yi){p===!0&&(Nt(i.BLEND),p=!1);return}if(p===!1&&(mt(i.BLEND),p=!0),C!==Dl){if(C!==d||Dt!==I){if((v!==vi||A!==vi)&&(i.blendEquation(i.FUNC_ADD),v=vi,A=vi),Dt)switch(C){case ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mo:i.blendFunc(i.ONE,i.ONE);break;case go:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _o:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:zt("WebGLState: Invalid blending: ",C);break}else switch(C){case ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case go:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _o:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",C);break}w=null,S=null,E=null,g=null,M.set(0,0,0),D=0,d=C,I=Dt}return}ot=ot||j,pt=pt||Z,It=It||_t,(j!==v||ot!==A)&&(i.blendEquationSeparate(ie[j],ie[ot]),v=j,A=ot),(Z!==w||_t!==S||pt!==E||It!==g)&&(i.blendFuncSeparate(Wt[Z],Wt[_t],Wt[pt],Wt[It]),w=Z,S=_t,E=pt,g=It),(Vt.equals(M)===!1||lt!==D)&&(i.blendColor(Vt.r,Vt.g,Vt.b,lt),M.copy(Vt),D=lt),d=C,I=!1}function he(C,j){C.side===un?Nt(i.CULL_FACE):mt(i.CULL_FACE);let Z=C.side===Ze;j&&(Z=!Z),Ie(Z),C.blending===ts&&C.transparent===!1?Me(yi):Me(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let _t=C.stencilWrite;o.setTest(_t),_t&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),pe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(C){U!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),U=C)}function ue(C){C!==Il?(mt(i.CULL_FACE),C!==O&&(C===po?i.cullFace(i.BACK):C===Pl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),O=C}function Ue(C){C!==J&&(X&&i.lineWidth(C),J=C)}function pe(C,j,Z){C?(mt(i.POLYGON_OFFSET_FILL),(R!==j||H!==Z)&&(R=j,H=Z,a.getReversed()&&(j=-j,Z=-Z),i.polygonOffset(j,Z))):Nt(i.POLYGON_OFFSET_FILL)}function Pe(C){C?mt(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function $e(C){C===void 0&&(C=i.TEXTURE0+Q-1),et!==C&&(i.activeTexture(C),et=C)}function ke(C,j,Z){Z===void 0&&(et===null?Z=i.TEXTURE0+Q-1:Z=et);let _t=it[Z];_t===void 0&&(_t={type:void 0,texture:void 0},it[Z]=_t),(_t.type!==C||_t.texture!==j)&&(et!==Z&&(i.activeTexture(Z),et=Z),i.bindTexture(C,j||Ut[C]),_t.type=C,_t.texture=j)}function N(){let C=it[et];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function He(){try{i.compressedTexImage2D(...arguments)}catch(C){zt("WebGLState:",C)}}function ae(){try{i.compressedTexImage3D(...arguments)}catch(C){zt("WebGLState:",C)}}function ce(){try{i.texSubImage2D(...arguments)}catch(C){zt("WebGLState:",C)}}function ft(){try{i.texSubImage3D(...arguments)}catch(C){zt("WebGLState:",C)}}function Xt(){try{i.compressedTexSubImage2D(...arguments)}catch(C){zt("WebGLState:",C)}}function Lt(){try{i.compressedTexSubImage3D(...arguments)}catch(C){zt("WebGLState:",C)}}function Ft(){try{i.texStorage2D(...arguments)}catch(C){zt("WebGLState:",C)}}function T(){try{i.texStorage3D(...arguments)}catch(C){zt("WebGLState:",C)}}function _(){try{i.texImage2D(...arguments)}catch(C){zt("WebGLState:",C)}}function F(){try{i.texImage3D(...arguments)}catch(C){zt("WebGLState:",C)}}function st(C){return f[C]!==void 0?f[C]:i.getParameter(C)}function K(C,j){f[C]!==j&&(i.pixelStorei(C,j),f[C]=j)}function ut(C){tt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),tt.copy(C))}function dt(C){Mt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Mt.copy(C))}function Y(C,j){let Z=l.get(j);Z===void 0&&(Z=new WeakMap,l.set(j,Z));let _t=Z.get(C);_t===void 0&&(_t=i.getUniformBlockIndex(j,C.name),i.uniformBlockBinding(j,_t,_t),Z.set(C,_t))}function $(C,j,Z){let ot=l.get(j).get(C);c[ot]!==Z&&(i.bindBufferBase(i.UNIFORM_BUFFER,ot,Z),c[ot]=Z)}function gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},et=null,it={},u={},c={},m=new WeakMap,y=[],b=null,p=!1,d=null,v=null,w=null,S=null,A=null,E=null,g=null,M=new qt(0,0,0),D=0,I=!1,U=null,O=null,J=null,R=null,H=null,tt.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:mt,disable:Nt,bindFramebuffer:ge,drawBuffers:Ot,useProgram:$t,setBlending:Me,setMaterial:he,setFlipSided:Ie,setCullFace:ue,setLineWidth:Ue,setPolygonOffset:pe,setScissorTest:Pe,activeTexture:$e,bindTexture:ke,unbindTexture:N,compressedTexImage2D:He,compressedTexImage3D:ae,texImage2D:_,texImage3D:F,pixelStorei:K,getParameter:st,updateUBOMapping:Y,uniformBlockBinding:$,texStorage2D:Ft,texStorage3D:T,texSubImage2D:ce,texSubImage3D:ft,compressedTexSubImage2D:Xt,compressedTexSubImage3D:Lt,scissor:ut,viewport:dt,reset:gt}}function Em(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Jt,h=new WeakMap,f=new Set,u,m=new WeakMap,y=new Set,b=new FinalizationRegistry(T=>y.delete(T)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(T,_){return p?new OffscreenCanvas(T,_):gs("canvas")}function v(T,_,F){let st=1,K=Ft(T);if((K.width>F||K.height>F)&&(st=F/Math.max(K.width,K.height)),st<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ut=Math.floor(st*K.width),dt=Math.floor(st*K.height);u===void 0&&(u=d(ut,dt));let Y=_?d(ut,dt):u;return Y.width=ut,Y.height=dt,Y.getContext("2d").drawImage(T,0,0,ut,dt),Bt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ut+"x"+dt+")."),Y}else return"data"in T&&Bt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function w(T){return T.generateMipmaps}function S(T){i.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,_,F,st,K,ut=!1){if(T!==null){if(i[T]!==void 0)return i[T];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let dt;st&&(dt=t.get("EXT_texture_norm16"),dt||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8),F===i.UNSIGNED_SHORT&&dt&&(Y=dt.R16_EXT),F===i.SHORT&&dt&&(Y=dt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),_===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8),F===i.UNSIGNED_SHORT&&dt&&(Y=dt.RG16_EXT),F===i.SHORT&&dt&&(Y=dt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_SHORT&&dt&&(Y=dt.RGB16_EXT),F===i.SHORT&&dt&&(Y=dt.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){let $=ut?ms:jt.getTransfer(K);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=$===le?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&dt&&(Y=dt.RGBA16_EXT),F===i.SHORT&&dt&&(Y=dt.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function g(T,_){let F;return T?_===null||_===xn||_===Si?F=i.DEPTH24_STENCIL8:_===yn?F=i.DEPTH32F_STENCIL8:_===ns&&(F=i.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===xn||_===Si?F=i.DEPTH_COMPONENT24:_===yn?F=i.DEPTH_COMPONENT32F:_===ns&&(F=i.DEPTH_COMPONENT16),F}function M(T,_){return w(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ne&&T.minFilter!==qe?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function D(T){let _=new WeakRef(T);n.get(T).__ref=_,y.add(_),b.register(T,_,_)}function I(T){let _=n.get(T).__ref;_!==void 0&&(y.delete(_),b.unregister(_))}function U(T){J(T.target)}function O(T){R(T.target)}function J(T){T.removeEventListener("dispose",U),I(T),Q(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&f.delete(T)}function R(T){T.removeEventListener("dispose",O),I(T),at(T)}function H(){for(let T of y){let _=T.deref();_!==void 0&&(_.isRenderTarget===!0?R(_):J(_))}y.clear(),f.clear()}function Q(T){let _=n.get(T);if(_.__webglInit===void 0)return;let F=T.source,st=m.get(F);if(st){let K=st[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&X(T),Object.keys(st).length===0&&m.delete(F)}n.remove(T)}function X(T){let _=n.get(T);i.deleteTexture(_.__webglTexture);let F=T.source,st=m.get(F);delete st[_.__cacheKey],a.memory.textures--}function at(T){let _=n.get(T);_.__depthDisposeCallback&&_.__depthDisposeCallback();let F=T.depthTexture;if(F&&F.renderTarget===T&&J(F),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let ut=0;ut<_.__webglFramebuffer[K].length;ut++)i.deleteFramebuffer(_.__webglFramebuffer[K][ut]);else i.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)i.deleteFramebuffer(_.__webglFramebuffer[K]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let st=T.textures;for(let K=0,ut=st.length;K<ut;K++){let dt=n.get(st[K]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),a.memory.textures--),n.remove(st[K])}n.remove(T)}let q=0;function et(){q=0}function it(){return q}function At(T){q=T}function Tt(){let T=q;return T>=s.maxTextures&&Bt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,T}function tt(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.mipmapsAutoUpdate),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function Mt(T,_){let F=n.get(T);if(T.isVideoTexture&&Xt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){let st=T.image;if(st===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{he(F,T,_);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function Et(T,_){let F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){he(F,T,_);return}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function Ut(T,_){let F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){he(F,T,_);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function mt(T,_){let F=n.get(T);if(T.version>0&&F.__version!==T.version){Ie(F,T,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}let Nt={[Hi]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[Er]:i.MIRRORED_REPEAT},ge={[Ne]:i.NEAREST,[jl]:i.NEAREST_MIPMAP_NEAREST,[Os]:i.NEAREST_MIPMAP_LINEAR,[qe]:i.LINEAR,[$r]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},Ot={[ic]:i.NEVER,[Bo]:i.ALWAYS,[sc]:i.LESS,[Oo]:i.LEQUAL,[rc]:i.EQUAL,[Fo]:i.GEQUAL,[ac]:i.GREATER,[oc]:i.NOTEQUAL};function $t(T,_){if(_.type===yn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===qe||_.magFilter===$r||_.magFilter===Os||_.magFilter===Xn||_.minFilter===qe||_.minFilter===$r||_.minFilter===Os||_.minFilter===Xn)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Nt[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Nt[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Nt[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ge[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ge[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ot[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ne||_.minFilter!==Os&&_.minFilter!==Xn||_.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ie(T,_){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",U),D(_));let st=_.source,K=m.get(st);K===void 0&&(K={},m.set(st,K));let ut=tt(_);if(ut!==T.__cacheKey){K[ut]===void 0&&(K[ut]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[ut].usedTimes++;let dt=K[T.__cacheKey];dt!==void 0&&(K[T.__cacheKey].usedTimes--,dt.usedTimes===0&&X(_)),T.__cacheKey=ut,T.__webglTexture=K[ut].texture}return F}function Wt(T,_,F){return Math.floor(Math.floor(T/F)/_)}function Me(T,_,F,st){let ut=T.updateRanges;if(ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,st,_.data);else{ut.sort((C,j)=>C.start-j.start);let dt=0;for(let C=1;C<ut.length;C++){let j=ut[dt],Z=ut[C],_t=j.start+j.count,ot=Wt(Z.start,_.width,4),pt=Wt(j.start,_.width,4);Z.start<=_t+1&&ot===pt&&Wt(Z.start+Z.count-1,_.width,4)===ot?j.count=Math.max(j.count,Z.start+Z.count-j.start):(++dt,ut[dt]=Z)}ut.length=dt+1;let Y=e.getParameter(i.UNPACK_ROW_LENGTH),$=e.getParameter(i.UNPACK_SKIP_PIXELS),gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let C=0,j=ut.length;C<j;C++){let Z=ut[C],_t=Math.floor(Z.start/4),ot=Math.ceil(Z.count/4),pt=_t%_.width,It=Math.floor(_t/_.width),Vt=ot,lt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,It),e.texSubImage2D(i.TEXTURE_2D,0,pt,It,Vt,lt,F,st,_.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,$),e.pixelStorei(i.UNPACK_SKIP_ROWS,gt)}}function he(T,_,F){let st=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(st=i.TEXTURE_3D);let K=ie(T,_),ut=_.source;e.bindTexture(st,T.__webglTexture,i.TEXTURE0+F);let dt=n.get(ut);if(ut.version!==dt.__version||K===!0){if(e.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let lt=jt.getPrimaries(jt.workingColorSpace),Dt=_.colorSpace===Sn?null:jt.getPrimaries(_.colorSpace),kt=_.colorSpace===Sn||lt===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let $=v(_.image,!1,s.maxTextureSize);$=Lt(_,$);let gt=r.convert(_.format,_.colorSpace),C=r.convert(_.type),j=E(_.internalFormat,gt,C,_.normalized,_.colorSpace,_.isVideoTexture);$t(st,_);let Z,_t=_.mipmaps,ot=_.isVideoTexture!==!0,pt=dt.__version===void 0||K===!0,It=ut.dataReady,Vt=M(_,$);if(_.isDepthTexture)j=g(_.format===Jn,_.type),pt&&(ot?e.texStorage2D(i.TEXTURE_2D,1,j,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,j,$.width,$.height,0,gt,C,null));else if(_.isDataTexture)if(_t.length>0){ot&&pt&&e.texStorage2D(i.TEXTURE_2D,Vt,j,_t[0].width,_t[0].height);for(let lt=0,Dt=_t.length;lt<Dt;lt++)Z=_t[lt],ot?It&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Z.width,Z.height,gt,C,Z.data):e.texImage2D(i.TEXTURE_2D,lt,j,Z.width,Z.height,0,gt,C,Z.data);_.generateMipmaps=!1}else ot?(pt&&e.texStorage2D(i.TEXTURE_2D,Vt,j,$.width,$.height),It&&Me(_,$,gt,C)):e.texImage2D(i.TEXTURE_2D,0,j,$.width,$.height,0,gt,C,$.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ot&&pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,j,_t[0].width,_t[0].height,$.depth);for(let lt=0,Dt=_t.length;lt<Dt;lt++)if(Z=_t[lt],_.format!==Mn)if(gt!==null)if(ot){if(It)if(_.layerUpdates.size>0){let kt=qo(Z.width,Z.height,_.format,_.type);for(let xt of _.layerUpdates){let ee=Z.data.subarray(xt*kt/Z.data.BYTES_PER_ELEMENT,(xt+1)*kt/Z.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,xt,Z.width,Z.height,1,gt,ee)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Z.width,Z.height,$.depth,gt,Z.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,j,Z.width,Z.height,$.depth,0,Z.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?It&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Z.width,Z.height,$.depth,gt,C,Z.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,j,Z.width,Z.height,$.depth,0,gt,C,Z.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{ot&&pt&&e.texStorage2D(i.TEXTURE_2D,Vt,j,_t[0].width,_t[0].height);for(let lt=0,Dt=_t.length;lt<Dt;lt++)Z=_t[lt],_.format!==Mn?gt!==null?ot?It&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,Z.width,Z.height,gt,Z.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,j,Z.width,Z.height,0,Z.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?It&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Z.width,Z.height,gt,C,Z.data):e.texImage2D(i.TEXTURE_2D,lt,j,Z.width,Z.height,0,gt,C,Z.data)}else if(_.isDataArrayTexture)if(ot){if(pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,j,$.width,$.height,$.depth),It)if(_.layerUpdates.size>0){let lt=qo($.width,$.height,_.format,_.type);for(let Dt of _.layerUpdates){let kt=$.data.subarray(Dt*lt/$.data.BYTES_PER_ELEMENT,(Dt+1)*lt/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Dt,$.width,$.height,1,gt,C,kt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,gt,C,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,j,$.width,$.height,$.depth,0,gt,C,$.data);else if(_.isData3DTexture)ot?(pt&&e.texStorage3D(i.TEXTURE_3D,Vt,j,$.width,$.height,$.depth),It&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,gt,C,$.data)):e.texImage3D(i.TEXTURE_3D,0,j,$.width,$.height,$.depth,0,gt,C,$.data);else if(_.isFramebufferTexture){if(pt)if(ot)e.texStorage2D(i.TEXTURE_2D,Vt,j,$.width,$.height);else{let lt=$.width,Dt=$.height;for(let kt=0;kt<Vt;kt++)e.texImage2D(i.TEXTURE_2D,kt,j,lt,Dt,0,gt,C,null),lt>>=1,Dt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let lt=i.canvas;if(lt.hasAttribute("layoutsubtree")||lt.setAttribute("layoutsubtree","true"),$.parentNode!==lt){lt.appendChild($),f.add(_),lt.onpaint=Dt=>{let kt=Dt.changedElements;for(let xt of f)kt.includes(xt.image)&&(xt.needsUpdate=!0)},lt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let kt=i.RGBA,xt=i.RGBA,ee=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,kt,xt,ee,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(_t.length>0){if(ot&&pt){let lt=Ft(_t[0]);e.texStorage2D(i.TEXTURE_2D,Vt,j,lt.width,lt.height)}for(let lt=0,Dt=_t.length;lt<Dt;lt++)Z=_t[lt],ot?It&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,gt,C,Z):e.texImage2D(i.TEXTURE_2D,lt,j,gt,C,Z);_.generateMipmaps=!1}else if(ot){if(pt){let lt=Ft($);e.texStorage2D(i.TEXTURE_2D,Vt,j,lt.width,lt.height)}It&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,C,$)}else e.texImage2D(i.TEXTURE_2D,0,j,gt,C,$);w(_)&&_.mipmapsAutoUpdate===!0&&S(st),dt.__version=ut.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Ie(T,_,F){if(_.image.length!==6)return;let st=ie(T,_),K=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);let ut=n.get(K);if(K.version!==ut.__version||st===!0){e.activeTexture(i.TEXTURE0+F);let dt=jt.getPrimaries(jt.workingColorSpace),Y=_.colorSpace===Sn?null:jt.getPrimaries(_.colorSpace),$=_.colorSpace===Sn||dt===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let gt=_.isCompressedTexture||_.image[0].isCompressedTexture,C=_.image[0]&&_.image[0].isDataTexture,j=[];for(let xt=0;xt<6;xt++)!gt&&!C?j[xt]=v(_.image[xt],!0,s.maxCubemapSize):j[xt]=C?_.image[xt].image:_.image[xt],j[xt]=Lt(_,j[xt]);let Z=j[0],_t=r.convert(_.format,_.colorSpace),ot=r.convert(_.type),pt=E(_.internalFormat,_t,ot,_.normalized,_.colorSpace),It=_.isVideoTexture!==!0,Vt=ut.__version===void 0||st===!0,lt=K.dataReady,Dt=M(_,Z);$t(i.TEXTURE_CUBE_MAP,_);let kt;if(_.isDepthTexture){if(pt=g(_.format===Jn,_.type),Vt)if(It)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,pt,Z.width,Z.height);else for(let xt=0;xt<6;xt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,pt,Z.width,Z.height,0,_t,ot,null)}else if(gt){It&&Vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,pt,Z.width,Z.height);for(let xt=0;xt<6;xt++){kt=j[xt].mipmaps;for(let ee=0;ee<kt.length;ee++){let Se=kt[ee];_.format!==Mn?_t!==null?It?lt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ee,0,0,Se.width,Se.height,_t,Se.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ee,pt,Se.width,Se.height,0,Se.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ee,0,0,Se.width,Se.height,_t,ot,Se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ee,pt,Se.width,Se.height,0,_t,ot,Se.data)}}}else{if(kt=_.mipmaps,It&&Vt){kt.length>0&&Dt++;let xt=Ft(j[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,pt,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(C){It?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,j[xt].width,j[xt].height,_t,ot,j[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,pt,j[xt].width,j[xt].height,0,_t,ot,j[xt].data);for(let ee=0;ee<kt.length;ee++){let dn=kt[ee].image[xt].image;It?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ee+1,0,0,dn.width,dn.height,_t,ot,dn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ee+1,pt,dn.width,dn.height,0,_t,ot,dn.data)}}else{It?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,_t,ot,j[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,pt,_t,ot,j[xt]);for(let ee=0;ee<kt.length;ee++){let Se=kt[ee];It?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ee+1,0,0,_t,ot,Se.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ee+1,pt,_t,ot,Se.image[xt])}}}w(_)&&_.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),ut.__version=K.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ue(T,_,F,st,K,ut){let dt=r.convert(F.format,F.colorSpace),Y=r.convert(F.type),$=E(F.internalFormat,dt,Y,F.normalized,F.colorSpace),gt=n.get(_),C=n.get(F);if(C.__renderTarget=_,!gt.__hasExternalTextures){let j=Math.max(1,_.width>>ut),Z=Math.max(1,_.height>>ut);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,ut,$,j,Z,_.depth,0,dt,Y,null):e.texImage2D(K,ut,$,j,Z,0,dt,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),ft(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,K,C.__webglTexture,0,ce(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,K,C.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(T,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){let st=_.depthTexture,K=st&&st.isDepthTexture?st.type:null,ut=g(_.stencilBuffer,K),dt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ft(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(_),ut,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(_),ut,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ut,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,T)}else{let st=_.textures;for(let K=0;K<st.length;K++){let ut=st[K],dt=r.convert(ut.format,ut.colorSpace),Y=r.convert(ut.type),$=E(ut.internalFormat,dt,Y,ut.normalized,ut.colorSpace);ft(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(_),$,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(_),$,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,$,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(T,_,F){let st=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(_.depthTexture);K.__renderTarget=_;let ut=st?_.depthTexture.image[0]:_.depthTexture.image;(!K.__webglTexture||ut.width!==_.width||ut.height!==_.height)&&(ut.width=_.width,ut.height=_.height,_.depthTexture.needsUpdate=!0),st?mt(_.depthTexture,0):Mt(_.depthTexture,0);let dt=K.__webglTexture,Y=ce(_),$=st?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,gt=_.depthTexture.format===Jn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===kn)ft(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,$,dt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,gt,$,dt,0);else if(_.depthTexture.format===Jn)ft(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,$,dt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,gt,$,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Pe(T){let _=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let st=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),st){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,st.removeEventListener("dispose",K)};st.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=st}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let st=0;st<6;st++)pe(_.__webglFramebuffer[st],T,st);else T.texture.mipmaps.length>0?pe(_.__webglFramebuffer[0],T,0):pe(_.__webglFramebuffer,T,0);else if(F){_.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[st]),_.__webglDepthbuffer[st]===void 0)_.__webglDepthbuffer[st]=i.createRenderbuffer(),Ue(_.__webglDepthbuffer[st],T,!1);else{let K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=_.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ut)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ue(_.__webglDepthbuffer,T,!1);else{let K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ut)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(T,_,F){let st=n.get(T);_!==void 0&&ue(st.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Pe(T)}function ke(T){let _=T.texture,F=n.get(T),st=n.get(_);T.addEventListener("dispose",O),D(T);let K=T.textures,ut=T.isWebGLCubeRenderTarget===!0,dt=K.length>1;if(dt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=_.version,a.memory.textures++),ut){F.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps.length>0){F.__webglFramebuffer[Y]=[];for(let $=0;$<_.mipmaps.length;$++)F.__webglFramebuffer[Y][$]=i.createFramebuffer()}else F.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(_.mipmaps.length>0){F.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)F.__webglFramebuffer[Y]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(dt)for(let Y=0,$=K.length;Y<$;Y++){let gt=n.get(K[Y]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&ft(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Y=0;Y<K.length;Y++){let $=K[Y];F.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Y]);let gt=r.convert($.format,$.colorSpace),C=r.convert($.type),j=E($.internalFormat,gt,C,$.normalized,$.colorSpace,T.isXRRenderTarget===!0),Z=ce(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,j,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,F.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),$t(i.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps.length>0)for(let $=0;$<_.mipmaps.length;$++)ue(F.__webglFramebuffer[Y][$],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$);else ue(F.__webglFramebuffer[Y],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);w(_)?S(i.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}else if(dt){for(let Y=0,$=K.length;Y<$;Y++){let gt=K[Y],C=n.get(gt),j=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(j=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,C.__webglTexture),$t(j,gt),ue(F.__webglFramebuffer,T,gt,i.COLOR_ATTACHMENT0+Y,j,0),w(gt)&&S(j)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Y=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,st.__webglTexture),$t(Y,_),_.mipmaps.length>0)for(let $=0;$<_.mipmaps.length;$++)ue(F.__webglFramebuffer[$],T,_,i.COLOR_ATTACHMENT0,Y,$);else ue(F.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,Y,0);w(_)?S(Y):_.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&Pe(T)}function N(T){let _=T.textures;for(let F=0,st=_.length;F<st;F++){let K=_[F];if(w(K)&&K.mipmapsAutoUpdate===!0){let ut=A(T),dt=n.get(K).__webglTexture;e.bindTexture(ut,dt),S(ut),e.unbindTexture()}}}let He=[];function ae(T){if(T.samples>0){if(ft(T)===!1){let _=T.textures,F=T.width,st=T.height,K=i.COLOR_BUFFER_BIT,ut=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(T),Y=_.length>1;if(Y)for(let gt=0;gt<_.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let gt=0;gt<_.length;gt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[gt]);let C=n.get(_[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,F,st,0,0,F,st,K,i.NEAREST),c===!0&&(He.length=0,He.push(i.COLOR_ATTACHMENT0+gt),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&He.push(ut),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,He))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let gt=0;gt<_.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,dt.__webglColorRenderbuffer[gt]);let C=n.get(_[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,C,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ce(T){return Math.min(s.maxSamples,T.samples)}function ft(T){let _=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Xt(T){let _=a.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function Lt(T,_){let F=T.colorSpace,st=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==ps&&F!==Sn&&(jt.getTransfer(F)===le?(st!==Mn||K!==je)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",F)),_}function Ft(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=Tt,this.resetTextureUnits=et,this.getTextureUnits=it,this.setTextureUnits=At,this.setTexture2D=Mt,this.setTexture2DArray=Et,this.setTexture3D=Ut,this.setTextureCube=mt,this.rebindTextures=$e,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ft,this.dispose=H}function wm(i,t){function e(n,s=Sn){let r,a=jt.getTransfer(s);if(n===je)return i.UNSIGNED_BYTE;if(n===Kr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Po)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Co)return i.BYTE;if(n===Io)return i.SHORT;if(n===ns)return i.UNSIGNED_SHORT;if(n===Qr)return i.INT;if(n===xn)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===vn)return i.HALF_FLOAT;if(n===Do)return i.ALPHA;if(n===No)return i.RGB;if(n===Mn)return i.RGBA;if(n===kn)return i.DEPTH_COMPONENT;if(n===Jn)return i.DEPTH_STENCIL;if(n===Uo)return i.RED;if(n===ta)return i.RED_INTEGER;if(n===ui)return i.RG;if(n===ea)return i.RG_INTEGER;if(n===na)return i.RGBA_INTEGER;if(n===Fs||n===Bs||n===zs||n===Gs)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ia||n===sa||n===ra||n===aa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oa||n===la||n===ca||n===ha||n===ua||n===Vs||n===da)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oa||n===la)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ca)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ha)return r.COMPRESSED_R11_EAC;if(n===ua)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Vs)return r.COMPRESSED_RG11_EAC;if(n===da)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fa||n===pa||n===ma||n===ga||n===_a||n===xa||n===ya||n===va||n===Ma||n===Sa||n===ba||n===Ta||n===Ea||n===wa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ma)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ga)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_a)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ya)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===va)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ma)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ba)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ta)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ea)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Aa||n===Ra||n===Ca)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Aa)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ra)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ca)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ia||n===Pa||n===ks||n===La)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ia)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ks)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===La)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Si?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Am=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,nl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ws(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new In({vertexShader:Am,fragmentShader:Rm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new cn(new Cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},il=class extends wn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,m=null,y=null,b=typeof XRWebGLBinding<"u",p=new nl,d={},v=e.getContextAttributes(),w=null,S=null,A=[],E=[],g=new Jt,M=null,D=null,I=new Je;I.viewport=new ye;let U=new Je;U.viewport=new ye;let O=[I,U],J=new qr,R=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let Mt=A[tt];return Mt===void 0&&(Mt=new Yi,A[tt]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(tt){let Mt=A[tt];return Mt===void 0&&(Mt=new Yi,A[tt]=Mt),Mt.getGripSpace()},this.getHand=function(tt){let Mt=A[tt];return Mt===void 0&&(Mt=new Yi,A[tt]=Mt),Mt.getHandSpace()};function Q(tt){let Mt=E.indexOf(tt.inputSource);if(Mt===-1)return;let Et=A[Mt];Et!==void 0&&(Et.update(tt.inputSource,tt.frame,l||a),Et.dispatchEvent({type:tt.type,data:tt.inputSource}))}function X(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",at);for(let tt=0;tt<A.length;tt++){let Mt=E[tt];Mt!==null&&(E[tt]=null,A[tt].disconnect(Mt))}R=null,H=null,p.reset();for(let tt in d)delete d[tt];if(t.setRenderTarget(w),m=null,u=null,f=null,s=null,S=null,Tt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(g.width,g.height,!1),D!==null){let tt=D.camera;tt.fov=D.fov,tt.zoom=D.zoom,tt.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(tt){l=tt},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",X),s.addEventListener("inputsourceschange",at),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(g),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Ut=null,mt=null;v.depth&&(mt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=v.stencil?Jn:kn,Ut=v.stencil?Si:xn);let Nt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Nt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new sn(u.textureWidth,u.textureHeight,{format:Mn,type:je,depthTexture:new Wn(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Et={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new sn(m.framebufferWidth,m.framebufferHeight,{format:Mn,type:je,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Tt.setContext(s),Tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function at(tt){for(let Mt=0;Mt<tt.removed.length;Mt++){let Et=tt.removed[Mt],Ut=E.indexOf(Et);Ut>=0&&(E[Ut]=null,A[Ut].disconnect(Et))}for(let Mt=0;Mt<tt.added.length;Mt++){let Et=tt.added[Mt],Ut=E.indexOf(Et);if(Ut===-1){for(let Nt=0;Nt<A.length;Nt++)if(Nt>=E.length){E.push(Et),Ut=Nt;break}else if(E[Nt]===null){E[Nt]=Et,Ut=Nt;break}if(Ut===-1)break}let mt=A[Ut];mt&&mt.connect(Et)}}function q(tt,Mt){Mt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(Mt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let Mt=tt.near,Et=tt.far;p.texture!==null&&(p.depthNear>0&&(Mt=p.depthNear),p.depthFar>0&&(Et=p.depthFar)),J.near=U.near=I.near=Mt,J.far=U.far=I.far=Et,(R!==J.near||H!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),R=J.near,H=J.far),J.layers.mask=tt.layers.mask|6,I.layers.mask=J.layers.mask&-5,U.layers.mask=J.layers.mask&-3;let Ut=tt.parent,mt=J.cameras;q(J,Ut);for(let Nt=0;Nt<mt.length;Nt++)q(mt[Nt],Ut);J.projectionMatrix.copy(I.projectionMatrix),J.projectionMatrixInverse.copy(I.projectionMatrixInverse),D===null&&tt.isPerspectiveCamera&&(D={camera:tt,fov:tt.fov,zoom:tt.zoom}),et(tt,J,Ut)};function et(tt,Mt,Et){Et===null?tt.matrix.copy(Mt.matrixWorld):(tt.matrix.copy(Et.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(Mt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(Mt.projectionMatrix),tt.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Ji*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(tt){c=tt,u!==null&&(u.fixedFoveation=tt),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=tt)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(J)},this.getCameraTexture=function(tt){return d[tt]};let it=null;function At(tt,Mt){if(h=Mt.getViewerPose(l||a),y=Mt,h!==null){let Et=h.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let Ut=!1;Et.length!==J.cameras.length&&(J.cameras.length=0,Ut=!0);for(let Ot=0;Ot<Et.length;Ot++){let $t=Et[Ot],ie=null;if(m!==null)ie=m.getViewport($t);else{let Me=f.getViewSubImage(u,$t);ie=Me.viewport,Ot===0&&(t.setRenderTargetTextures(S,Me.colorTexture,Me.depthStencilTexture),t.setRenderTarget(S))}let Wt=O[Ot];Wt===void 0&&(Wt=new Je,Wt.layers.enable(Ot),Wt.viewport=new ye,O[Ot]=Wt),Wt.matrix.fromArray($t.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray($t.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ie.x,ie.y,ie.width,ie.height),Ot===0&&(J.matrix.copy(Wt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Ut===!0&&J.cameras.push(Wt)}let mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){f=n.getBinding();let Ot=f.getDepthInformation(Et[0]);Ot&&Ot.isValid&&Ot.texture&&p.init(Ot,s.renderState)}if(mt&&mt.includes("camera-access")&&b){t.state.unbindTexture(),f=n.getBinding();for(let Ot=0;Ot<Et.length;Ot++){let $t=Et[Ot].camera;if($t){let ie=d[$t];ie||(ie=new ws,d[$t]=ie);let Wt=f.getCameraImage($t);ie.sourceTexture=Wt}}}}for(let Et=0;Et<A.length;Et++){let Ut=E[Et],mt=A[Et];Ut!==null&&mt!==void 0&&mt.update(Ut,Mt,l||a)}it&&it(tt,Mt),Mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Mt}),y=null}let Tt=new Gc;Tt.setAnimationLoop(At),this.setAnimationLoop=function(tt){it=tt},this.dispose=function(){}}},Cm=new _e,$c=new Gt;$c.set(-1,0,0,0,1,0,0,0,1);function Im(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Wo(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,v,w,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),u(p,d),d.isMeshPhysicalMaterial&&m(p,d,S)):d.isMeshMatcapMaterial?(r(p,d),y(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),b(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,v,w):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ze&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ze&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let v=t.get(d),w=v.envMap,S=v.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(Cm.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply($c),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,v,w){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*v,p.scale.value=w*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,v){p.ior.value=d.ior,d.diffuseRoughness>0&&(p.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=d.diffuseRoughnessMap,e(d.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ze&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,d){d.matcap&&(p.matcap.value=d.matcap)}function b(p,d){let v=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Pm(i,t,e,n){let s={},r={};function a(v,w){let S=w.program;n.uniformBlockBinding(v,S,s[v.id])}function o(v,w){let S=s[v.id];S===void 0&&(y(v),S=c(v),s[v.id]=S,v.addEventListener("dispose",p));let A=w.program;n.updateUBOMapping(v,A);let E=t.render.frame;r[v.id]!==E&&(l(v),r[v.id]=E)}function c(v){let w=i.createBuffer(),S=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,S,A),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function l(v){let w=s[v.id],S=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let E=0,g=S.length;E<g;E++){let M=S[E];if(Array.isArray(M))for(let D=0,I=M.length;D<I;D++)h(M[D],E,D,A);else h(M,E,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,w,S,A){if(u(v,w,S,A)===!0){let E=v.__offset,g=v.value;if(Array.isArray(g)){let M=0;for(let D=0;D<g.length;D++){let I=g[D],U=b(I,!0);f(I,v.__data,M),M+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,v.__data)}}function f(v,w,S){typeof v=="number"||typeof v=="boolean"?w[S]=v:v.isMatrix3?(w[S]=v.elements[0],w[S+1]=v.elements[1],w[S+2]=v.elements[2],w[S+3]=0,w[S+4]=v.elements[3],w[S+5]=v.elements[4],w[S+6]=v.elements[5],w[S+7]=0,w[S+8]=v.elements[6],w[S+9]=v.elements[7],w[S+10]=v.elements[8],w[S+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-S),S):v.toArray(w,S)}function u(v,w,S,A){let E=v.value,g=w+"_"+S;if(Array.isArray(E)){A[g]===void 0&&(A[g]=[]);let M=A[g],D=!1;for(let I=0;I<E.length;I++)m(E[I],M,I)===!0&&(D=!0);return D}return m(E,A,g)}function m(v,w,S){if(w[S]===void 0)return typeof v=="number"||typeof v=="boolean"?w[S]=v:ArrayBuffer.isView(v)?w[S]=v.slice():w[S]=v.clone(),!0;{let A=w[S];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return w[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function y(v){let w=v.uniforms,S=0,A=16;for(let g=0,M=w.length;g<M;g++){let D=Array.isArray(w[g])?w[g]:[w[g]];for(let I=0,U=D.length;I<U;I++){let O=D[I],J=Array.isArray(O.value)?O.value:[O.value],R=Array.isArray(w[g])||Array.isArray(O.value),H=S;for(let X=0,at=J.length;X<at;X++){let q=J[X],et=b(q,R),it=S%A,At=it%et.boundary,Tt=it+At;S+=At,Tt!==0&&A-Tt<et.storage&&(S+=A-Tt),X===0&&(H=S),S+=et.storage}let Q=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new Q((S-H)/Float32Array.BYTES_PER_ELEMENT),O.__offset=H}}let E=S%A;return E>0&&(S+=A-E),v.__size=S,v.__cache={},this}function b(v,w){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=16,S.storage=48):v.isMatrix4?(S.boundary=16,S.storage=64):v.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(v){let w=v.target;w.removeEventListener("dispose",p),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function d(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:d}}var Lm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ln=null;function Dm(){return Ln===null&&(Ln=new Ir(Lm,16,16,ui,vn),Ln.name="DFG_LUT",Ln.minFilter=qe,Ln.magFilter=qe,Ln.wrapS=Tn,Ln.wrapT=Tn,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}var Fa=class{constructor(t={}){let{canvas:e=cc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:m=je}=t;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=a;let b=m,p=new Set([na,ea,ta]),d=new Set([je,xn,ns,Si,Kr,jr]),v=new Uint32Array(4),w=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},A=null,E=null,g=[],M=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,O=null,J=null,R=null,H=null;this._outputColorSpace=Xe;let Q=0,X=0,at=null,q=-1,et=null,it=new ye,At=new ye,Tt=null,tt=new qt(0),Mt=0,Et=e.width,Ut=e.height,mt=1,Nt=null,ge=null,Ot=new ye(0,0,Et,Ut),$t=new ye(0,0,Et,Ut),ie=!1,Wt=new si,Me=new Pr,he=!1,Ie=!1,ue=new _e,Ue=new B,pe=new ye,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function ke(){return at===null?mt:1}let N=n;function He(x,P){return e.getContext(x,P)}let ae,ce,ft,Xt,Lt,Ft,T,_,F,st,K,ut,dt,Y,$,gt,C,j,Z,_t,ot,pt,It;try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),N===null){let P="webgl2";if(N=He(P,x),N===null)throw He(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(x){throw e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),zt("WebGLRenderer: "+x.message),x}function Vt(){ae=new Wf(N),ae.init(),ot=new wm(N,ae),ce=new Df(N,ae,t,ot),ft=new Tm(N,ae),ce.reversedDepthBuffer&&u&&ft.buffers.depth.setReversed(!0),J=N.createFramebuffer(),R=N.createFramebuffer(),H=N.createFramebuffer(),Xt=new qf(N),Lt=new hm,Ft=new Em(N,ae,ft,Lt,ce,ot,Xt),T=new Hf(I),_=new Yh(N),pt=new Pf(N,_),F=new Xf(N,_,Xt,pt),st=new Zf(N,F,_,pt,Xt),j=new Yf(N,ce,Ft),$=new Nf(Lt),K=new cm(I,T,ae,ce,pt,$),ut=new Im(I,Lt),dt=new dm,Y=new xm(ae),C=new If(I,T,ft,st,y,c),gt=new bm(I,st,ce),It=new Pm(N,Xt,ce,ft),Z=new Lf(N,ae,Xt),_t=new Jf(N,ae,Xt),Xt.programs=K.programs,I.capabilities=ce,I.extensions=ae,I.properties=Lt,I.renderLists=dt,I.shadowMap=gt,I.state=ft,I.info=Xt}b!==je&&(D=new Qf(b,e.width,e.height,o,s,r));let lt=new il(I,N);this.xr=lt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let x=ae.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=ae.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(x){x!==void 0&&(mt=x,this.setSize(Et,Ut,!1))},this.getSize=function(x){return x.set(Et,Ut)},this.setSize=function(x,P,V=!0){if(lt.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}Et=x,Ut=P,e.width=Math.floor(x*mt),e.height=Math.floor(P*mt),V===!0&&(e.style.width=x+"px",e.style.height=P+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(Et*mt,Ut*mt).floor()},this.setDrawingBufferSize=function(x,P,V){Et=x,Ut=P,mt=V,e.width=Math.floor(x*V),e.height=Math.floor(P*V),this.setViewport(0,0,x,P)},this.setEffects=function(x){if(b===je){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let P=0;P<x.length;P++)if(x[P].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(it)},this.getViewport=function(x){return x.copy(Ot)},this.setViewport=function(x,P,V,z){x.isVector4?Ot.set(x.x,x.y,x.z,x.w):Ot.set(x,P,V,z),ft.viewport(it.copy(Ot).multiplyScalar(ke()).round())},this.getScissor=function(x){return x.copy($t)},this.setScissor=function(x,P,V,z){x.isVector4?$t.set(x.x,x.y,x.z,x.w):$t.set(x,P,V,z),ft.scissor(At.copy($t).multiplyScalar(ke()).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(x){ft.setScissorTest(ie=x)},this.setOpaqueSort=function(x){Nt=x},this.setTransparentSort=function(x){ge=x},this.getClearColor=function(x){return x.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(x=!0,P=!0,V=!0){let z=0;if(x){let G=!1;if(at!==null){let vt=at.texture.format;G=p.has(vt)}if(G){let vt=at.texture.type,wt=d.has(vt),yt=C.getClearColor(),bt=C.getClearAlpha(),Pt=yt.r,Ht=yt.g,Qt=yt.b;wt?(v[0]=Pt,v[1]=Ht,v[2]=Qt,v[3]=bt,N.clearBufferuiv(N.COLOR,0,v)):(w[0]=Pt,w[1]=Ht,w[2]=Qt,w[3]=bt,N.clearBufferiv(N.COLOR,0,w))}else z|=N.COLOR_BUFFER_BIT}P&&(z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),O=x},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),C.dispose(),dt.dispose(),Y.dispose(),Ft.dispose(),Lt.dispose(),T.dispose(),st.dispose(),F.dispose(),pt.dispose(),It.dispose(),K.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Ys),lt.removeEventListener("sessionend",qn),Nn.stop()};function Dt(x){x.preventDefault(),Go("WebGLRenderer: Context Lost."),U=!0}function kt(){Go("WebGLRenderer: Context Restored."),U=!1;let x=Xt.autoReset,P=gt.enabled,V=gt.autoUpdate,z=gt.needsUpdate,G=gt.type;Vt(),Xt.autoReset=x,gt.enabled=P,gt.autoUpdate=V,gt.needsUpdate=z,gt.type=G}function xt(x){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ee(x){let P=x.target;P.removeEventListener("dispose",ee),Se(P)}function Se(x){dn(x),Lt.remove(x)}function dn(x){let P=Lt.get(x).programs;P!==void 0&&(P.forEach(function(V){K.releaseProgram(V)}),x.isShaderMaterial&&K.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,V,z,G,vt){P===null&&(P=Pe);let wt=G.isMesh&&G.matrixWorld.determinantAffine()<0,yt=Te(x,P,V,z,G);ft.setMaterial(z,wt);let bt=V.index,Pt=1;if(z.wireframe===!0){if(bt=F.getWireframeAttribute(V),bt===void 0)return;Pt=2}let Ht=V.drawRange,Qt=V.attributes.position,Rt=Ht.start*Pt,Kt=(Ht.start+Ht.count)*Pt;vt!==null&&(Rt=Math.max(Rt,vt.start*Pt),Kt=Math.min(Kt,(vt.start+vt.count)*Pt)),bt!==null?(Rt=Math.max(Rt,0),Kt=Math.min(Kt,bt.count)):Qt!=null&&(Rt=Math.max(Rt,0),Kt=Math.min(Kt,Qt.count));let Ee=Kt-Rt;if(Ee<0||Ee===1/0)return;pt.setup(G,z,yt,V,bt);let fe,de=Z;if(bt!==null&&(fe=_.get(bt),de=_t,de.setIndex(fe)),G.isMesh)z.wireframe===!0?(ft.setLineWidth(z.wireframeLinewidth*ke()),de.setMode(N.LINES)):de.setMode(N.TRIANGLES);else if(G.isLine){let Fe=z.linewidth;Fe===void 0&&(Fe=1),ft.setLineWidth(Fe*ke()),G.isLineSegments?de.setMode(N.LINES):G.isLineLoop?de.setMode(N.LINE_LOOP):de.setMode(N.LINE_STRIP)}else G.isPoints?de.setMode(N.POINTS):G.isSprite&&de.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))de.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Fe=G._multiDrawStarts,Ct=G._multiDrawCounts,We=G._multiDrawCount,oe=bt?_.get(bt).bytesPerElement:1,di=Lt.get(z).currentProgram.getUniforms();for(let Be=0;Be<We;Be++)di.setValue(N,"_gl_DrawID",Be),de.render(Fe[Be]/oe,Ct[Be])}else if(G.isInstancedMesh)de.renderInstances(Rt,Ee,G.count);else if(V.isInstancedBufferGeometry){let Fe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ct=Math.min(V.instanceCount,Fe);de.renderInstances(Rt,Ee,Ct)}else de.render(Rt,Ee)};function Ti(x,P,V,z){O!==null&&x.isNodeMaterial&&O.setObject(z,x),he===!0&&$.setState(x,V,!1),x.transparent===!0&&x.side===un&&x.forceSinglePass===!1?(x.side=Ze,x.needsUpdate=!0,ct(x,P,z),x.side=hi,x.needsUpdate=!0,ct(x,P,z),x.side=un):ct(x,P,z)}this.compile=function(x,P,V=null){V===null&&(V=x),O!==null&&O.renderStart(x,P,V),E=Y.get(V),E.init(P),M.push(E),V.traverseVisible(function(G){G.isLight&&G.layers.test(P.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),x!==V&&x.traverseVisible(function(G){G.isLight&&G.layers.test(P.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),Ie=this.localClippingEnabled,he=$.init(this.clippingPlanes,Ie),he===!0&&$.setGlobalState(this.clippingPlanes,P),O!==null&&gt.render(E.state.shadowsArray,V,P);let z=new Set;return x.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let vt=G.material;if(vt)if(Array.isArray(vt))for(let wt=0;wt<vt.length;wt++){let yt=vt[wt];Ti(yt,V,P,G),z.add(yt)}else Ti(vt,V,P,G),z.add(vt)}),E=M.pop(),O!==null&&O.renderEnd(),z},this.compileAsync=function(x,P,V=null){let z=this.compile(x,P,V);return new Promise(G=>{function vt(){if(z.forEach(function(wt){let bt=Lt.get(wt).currentProgram;(bt===void 0||bt.isReady())&&z.delete(wt)}),z.size===0){G(x);return}setTimeout(vt,10)}ae.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Ei=null;function wi(x){Ei&&Ei(x)}function Ys(){Nn.stop()}function qn(){Nn.start()}let Nn=new Gc;Nn.setAnimationLoop(wi),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(x){Ei=x,lt.setAnimationLoop(x),x===null?Nn.stop():Nn.start()},lt.addEventListener("sessionstart",Ys),lt.addEventListener("sessionend",qn),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;O!==null&&O.renderStart(x,P);let V=lt.enabled===!0&&lt.isPresenting===!0,z=D!==null&&(at===null||V)&&D.begin(I,at);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(P),P=lt.getCamera()),x.isScene===!0&&x.onBeforeRender(I,x,P,at),E=Y.get(x,M.length),E.init(P),E.state.textureUnits=Ft.getTextureUnits(),M.push(E),ue.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?Me.setFromArrayCamera(P):Wt.setFromProjectionMatrix(ue,on,P.reversedDepth),Ie=this.localClippingEnabled,he=$.init(this.clippingPlanes,Ie),A=dt.get(x,g.length),A.init(),g.push(A),this.info.render.frame++,lt.enabled===!0&&lt.isPresenting===!0){let wt=I.xr.getDepthSensingMesh();wt!==null&&Ai(wt,P,-1/0,I.sortObjects)}Ai(x,P,0,I.sortObjects),A.finish(),O!==null&&O.updateLights(E.state.lightsArray),I.sortObjects===!0&&A.sort(Nt,ge),$e=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,$e&&C.addToRenderList(A,x),this.info.autoReset===!0&&this.info.reset(),he===!0&&$.beginShadows();let G=E.state.shadowsArray;if(gt.render(G,x,P),he===!0&&$.endShadows(),(z&&D.hasRenderPass())===!1){let wt=A.opaque,yt=A.transmissive;if(E.setupLights(),P.isArrayCamera){let bt=P.cameras;if(yt.length>0)for(let Pt=0,Ht=bt.length;Pt<Ht;Pt++){let Qt=bt[Pt];k(wt,yt,x,Qt)}$e&&C.render(x);for(let Pt=0,Ht=bt.length;Pt<Ht;Pt++){let Qt=bt[Pt];L(A,x,Qt,Qt.viewport)}}else yt.length>0&&k(wt,yt,x,P),$e&&C.render(x),L(A,x,P)}at!==null&&X===0&&(Ft.updateMultisampleRenderTarget(at),Ft.updateRenderTargetMipmap(at)),z&&D.end(I),x.isScene===!0&&x.onAfterRender(I,x,P),pt.resetDefaultState(),q=-1,et=null,M.pop(),M.length>0?(E=M[M.length-1],Ft.setTextureUnits(E.state.textureUnits),he===!0&&$.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,g.pop(),g.length>0?A=g[g.length-1]:A=null,O!==null&&O.renderEnd()};function Ai(x,P,V,z){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLight)E.pushLight(x),x.castShadow&&E.pushShadow(x);else if(x.isSprite){let wt=P.isArrayCamera?Me:Wt;if(!x.frustumCulled||x.intersectsFrustum(wt)){z&&pe.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ue);let yt=st.update(x),bt=x.material;bt.visible&&A.push(x,yt,bt,V,pe.z,null,P)}}else if(x.isMesh||x.isLine||x.isPoints){let wt=P.isArrayCamera?Me:Wt;if(!x.frustumCulled||x.intersectsFrustum(wt)){let yt=st.update(x),bt=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),pe.copy(x.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),pe.copy(yt.boundingSphere.center)),pe.applyMatrix4(x.matrixWorld).applyMatrix4(ue)),Array.isArray(bt)){let Pt=yt.groups;for(let Ht=0,Qt=Pt.length;Ht<Qt;Ht++){let Rt=Pt[Ht],Kt=bt[Rt.materialIndex];Kt&&Kt.visible&&A.push(x,yt,Kt,V,pe.z,Rt,P)}}else bt.visible&&A.push(x,yt,bt,V,pe.z,null,P)}}}let vt=x.children;for(let wt=0,yt=vt.length;wt<yt;wt++)Ai(vt[wt],P,V,z)}function L(x,P,V,z){let{opaque:G,transmissive:vt,transparent:wt}=x;E.setupLightsView(V),he===!0&&$.setGlobalState(I.clippingPlanes,V),z&&ft.viewport(it.copy(z)),G.length>0&&W(G,P,V),vt.length>0&&W(vt,P,V),wt.length>0&&W(wt,P,V),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function k(x,P,V,z){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){let Rt=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new sn(1,1,{generateMipmaps:!0,type:Rt?vn:je,minFilter:Xn,samples:Math.max(4,ce.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:jt.workingColorSpace})}let vt=E.state.transmissionRenderTarget[z.id],wt=z.viewport||it;vt.setSize(wt.z*I.transmissionResolutionScale,wt.w*I.transmissionResolutionScale);let yt=I.getRenderTarget(),bt=I.getActiveCubeFace(),Pt=I.getActiveMipmapLevel();I.setRenderTarget(vt),I.getClearColor(tt),Mt=I.getClearAlpha(),Mt<1&&I.setClearColor(16777215,.5),I.clear(),$e&&C.render(V);let Ht=I.toneMapping;I.toneMapping=Pn;let Qt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),he===!0&&$.setGlobalState(I.clippingPlanes,z),W(x,V,z),Ft.updateMultisampleRenderTarget(vt),Ft.updateRenderTargetMipmap(vt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Kt=0,Ee=P.length;Kt<Ee;Kt++){let fe=P[Kt],{object:de,geometry:Fe,material:Ct,group:We}=fe;if(Ct.side===un&&de.layers.test(z.layers)){let oe=Ct.side;Ct.side=Ze,Ct.needsUpdate=!0,rt(de,V,z,Fe,Ct,We),Ct.side=oe,Ct.needsUpdate=!0,Rt=!0}}Rt===!0&&(Ft.updateMultisampleRenderTarget(vt),Ft.updateRenderTargetMipmap(vt))}I.setRenderTarget(yt,bt,Pt),I.setClearColor(tt,Mt),Qt!==void 0&&(z.viewport=Qt),I.toneMapping=Ht}function W(x,P,V){let z=P.isScene===!0?P.overrideMaterial:null;for(let G=0,vt=x.length;G<vt;G++){let wt=x[G],{object:yt,geometry:bt,group:Pt}=wt,Ht=wt.material;Ht.allowOverride===!0&&z!==null&&(Ht=z),yt.layers.test(V.layers)&&rt(yt,P,V,bt,Ht,Pt)}}function rt(x,P,V,z,G,vt){O!==null&&G.isNodeMaterial&&O.setObject(x,G),x.onBeforeRender(I,P,V,z,G,vt),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),G.onBeforeRender(I,P,V,z,x,vt),G.transparent===!0&&G.side===un&&G.forceSinglePass===!1?(G.side=Ze,G.needsUpdate=!0,I.renderBufferDirect(V,P,z,G,x,vt),G.side=hi,G.needsUpdate=!0,I.renderBufferDirect(V,P,z,G,x,vt),G.side=un):I.renderBufferDirect(V,P,z,G,x,vt),x.onAfterRender(I,P,V,z,G,vt)}function nt(x){let P=0;for(let V of x)V.texture!==null&&P++;return P}function ct(x,P,V){P.isScene!==!0&&(P=Pe);let z=Lt.get(x),G=E.state.lights,vt=E.state.shadowsArray,wt=G.state.version,yt=K.getParameters(x,G.state,vt,P,V,E.state.lightProbeGridArray),bt=K.getProgramCacheKey(yt),Pt=z.programs;z.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,z.fog=P.fog;let Ht=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;z.envMap=T.get(x.envMap||z.environment,Ht),z.envMapRotation=z.environment!==null&&x.envMap===null?P.environmentRotation:x.envMapRotation,Pt===void 0&&(x.addEventListener("dispose",ee),Pt=new Map,z.programs=Pt,z.programVariants=new Map);let Qt=Pt.get(bt);if(Qt!==void 0){if(z.currentProgram===Qt&&z.lightsStateVersion===wt)return se(x,yt),Qt}else yt.uniforms=K.getUniforms(x),O!==null&&x.isNodeMaterial&&O.build(x,V,yt),x.onBeforeCompile(yt,I),Qt=K.acquireProgram(yt,bt),Pt.set(bt,Qt),z.uniforms=yt.uniforms;let Rt=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Rt.clippingPlanes=$.uniform),se(x,yt),z.needsLights=tn(x),z.lightsStateVersion=wt,z.needsLights&&(Rt.ambientLightColor.value=G.state.ambient,Rt.lightProbe.value=G.state.probe,Rt.sunLights.value=G.state.sun,Rt.sunLightShadows.value=G.state.sunShadow,Rt.directionalLights.value=G.state.directional,Rt.directionalLightShadows.value=G.state.directionalShadow,Rt.spotLights.value=G.state.spot,Rt.spotLightShadows.value=G.state.spotShadow,Rt.rectAreaLights.value=G.state.rectArea,Rt.ltc_1.value=G.state.rectAreaLTC1,Rt.ltc_2.value=G.state.rectAreaLTC2,Rt.pointLights.value=G.state.point,Rt.pointLightShadows.value=G.state.pointShadow,Rt.hemisphereLights.value=G.state.hemi,Rt.sunShadowMatrix.value=G.state.sunShadowMatrix,Rt.sunShadowCascade.value=G.state.sunShadowCascade,Rt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Rt.spotLightMatrix.value=G.state.spotLightMatrix,Rt.spotLightMap.value=G.state.spotLightMap,Rt.pointShadowMatrix.value=G.state.pointShadowMatrix),z.numLightProbeGrids=nt(E.state.lightProbeGridArray),z.currentProgram=Qt,z.uniformsList=null,Qt}function ht(x,P,V,z,G){let vt=Lt.get(x),wt=vt.currentProgram.id+","+z+","+G,yt=vt.programVariants.get(wt);return yt===void 0?(yt=ct(x,P,V),vt.programVariants.set(wt,yt)):(vt.currentProgram=yt,vt.uniformsList=null,vt.outputColorSpace=z,vt.toneMapping=G),yt}function Zt(x){if(x.uniformsList===null){let P=x.currentProgram.getUniforms();x.uniformsList=ss.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function se(x,P){let V=Lt.get(x);V.outputColorSpace=P.outputColorSpace,V.batching=P.batching,V.batchingColor=P.batchingColor,V.instancing=P.instancing,V.instancingColor=P.instancingColor,V.instancingMorph=P.instancingMorph,V.skinning=P.skinning,V.morphTargets=P.morphTargets,V.morphNormals=P.morphNormals,V.morphColors=P.morphColors,V.morphTargetsCount=P.morphTargetsCount,V.numClippingPlanes=P.numClippingPlanes,V.numIntersection=P.numClipIntersection,V.vertexAlphas=P.vertexAlphas,V.vertexTangents=P.vertexTangents,V.toneMapping=P.toneMapping}function Te(x,P,V,z,G){P.isScene!==!0&&(P=Pe),Ft.resetTextureUnits();let vt=P.fog,wt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?P.environment:null,yt=at===null?I.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:jt.workingColorSpace,bt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Pt=T.get(z.envMap||wt,bt),Ht=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Qt=!!V.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Rt=!!V.morphAttributes.position,Kt=!!V.morphAttributes.normal,Ee=!!V.morphAttributes.color,fe=Pn;z.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(fe=I.toneMapping);let de=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Fe=de!==void 0?de.length:0,Ct=Lt.get(z),We=E.state.lights;if(he===!0&&(Ie===!0||x!==et)){let ve=x===et&&z.id===q;$.setState(z,x,ve)}let oe=!1,di=!1;z.version===Ct.__version?Ct.needsLights&&Ct.lightsStateVersion!==We.state.version||G.isBatchedMesh&&Ct.batching===!1||!G.isBatchedMesh&&Ct.batching===!0||G.isBatchedMesh&&Ct.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ct.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ct.instancing===!1||!G.isInstancedMesh&&Ct.instancing===!0||G.isSkinnedMesh&&Ct.skinning===!1||!G.isSkinnedMesh&&Ct.skinning===!0||G.isInstancedMesh&&Ct.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ct.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ct.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ct.instancingMorph===!1&&G.morphTexture!==null||Ct.envMap!==Pt||z.fog===!0&&Ct.fog!==vt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==$.numPlanes||Ct.numIntersection!==$.numIntersection)||Ct.vertexAlphas!==Ht||Ct.vertexTangents!==Qt||Ct.morphTargets!==Rt||Ct.morphNormals!==Kt||Ct.morphColors!==Ee||Ct.morphTargetsCount!==Fe||Ct.numLightProbeGrids!==nt(E.state.lightProbeGridArray)?oe=!0:(Ct.outputColorSpace!==yt||Ct.toneMapping!==fe)&&(di=!0):(oe=!0,Ct.__version=z.version);let Be=Ct.currentProgram;(oe===!0||di===!0)&&(Be=di===!0?ht(z,P,G,yt,fe):ct(z,P,G),O&&z.isNodeMaterial&&O.onUpdateProgram(z,Be,Ct));let Zs=!1,Yn=!1,fi=!1,re=Be.getUniforms(),Oe=Ct.uniforms;if(ft.useProgram(Be.program)&&(Zs=!0,Yn=!0,fi=!0),z.id!==q&&(q=z.id,Yn=!0),Zs||et!==x){ft.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),re.setValue(N,"projectionMatrix",x.projectionMatrix),re.setValue(N,"viewMatrix",x.matrixWorldInverse);let Le=re.map.cameraPosition;Le!==void 0&&Le.setValue(N,Ue.setFromMatrixPosition(x.matrixWorld)),ce.logarithmicDepthBuffer&&re.setValue(N,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&re.setValue(N,"isOrthographic",x.isOrthographicCamera===!0),et!==x&&(et=x,Yn=!0,fi=!0)}if(Ct.needsLights&&(We.state.sunShadowMap.length>0&&re.setValue(N,"sunShadowMap",We.state.sunShadowMap,Ft),We.state.directionalShadowMap.length>0&&re.setValue(N,"directionalShadowMap",We.state.directionalShadowMap,Ft),We.state.spotShadowMap.length>0&&re.setValue(N,"spotShadowMap",We.state.spotShadowMap,Ft),We.state.pointShadowMap.length>0&&re.setValue(N,"pointShadowMap",We.state.pointShadowMap,Ft)),G.isSkinnedMesh){re.setOptional(N,G,"bindMatrix"),re.setOptional(N,G,"bindMatrixInverse");let ve=G.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),re.setValue(N,"boneTexture",ve.boneTexture,Ft))}G.isBatchedMesh&&(re.setOptional(N,G,"batchingTexture"),re.setValue(N,"batchingTexture",G._matricesTexture,Ft),re.setOptional(N,G,"batchingIdTexture"),re.setValue(N,"batchingIdTexture",G._indirectTexture,Ft),re.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&re.setValue(N,"batchingColorTexture",G._colorsTexture,Ft));let fn=V.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&j.update(G,V,Be),(Yn||Ct.receiveShadow!==G.receiveShadow)&&(Ct.receiveShadow=G.receiveShadow,re.setValue(N,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&P.environment!==null&&(Oe.envMapIntensity.value=P.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=Dm()),Yn){if(re.setValue(N,"toneMappingExposure",I.toneMappingExposure),Ct.needsLights&&be(Oe,fi),vt&&z.fog===!0&&ut.refreshFogUniforms(Oe,vt),ut.refreshMaterialUniforms(Oe,z,mt,Ut,E.state.transmissionRenderTarget[x.id]),Ct.needsLights&&Ct.numLightProbeGrids>0){let ve=S,Le=0;for(let Un of E.state.lightProbeGridArray)Un.texture!==null&&(ve.textures[Le]=Un.texture,ve.min[Le]=Un.boundingBox.min,ve.max[Le]=Un.boundingBox.max,ve.resolution[Le]=Un.resolution,Le++);for(let Un in ve)ve[Un].length=Le;Oe.probesSH.value=ve.textures,Oe.probesMin.value=ve.min,Oe.probesMax.value=ve.max,Oe.probesResolution.value=ve.resolution}ss.upload(N,Zt(Ct),Oe,Ft)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ss.upload(N,Zt(Ct),Oe,Ft),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&re.setValue(N,"center",G.center),re.setValue(N,"modelViewMatrix",G.modelViewMatrix),re.setValue(N,"normalMatrix",G.normalMatrix),re.setValue(N,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let ve=z.uniformsGroups;for(let Le=0,Un=ve.length;Le<Un;Le++){let sl=ve[Le];It.update(sl,Be),It.bind(sl,Be)}}return Be}function be(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.sunLights.needsUpdate=P,x.sunLightShadows.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function tn(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(x,P,V){let z=Lt.get(x);z.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Lt.get(x.texture).__webglTexture=P,Lt.get(x.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:V,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,P){let V=Lt.get(x);V.__webglFramebuffer=P,V.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,V=0){at=x,Q=P,X=V;let z=null,G=!1,vt=!1;if(x){let yt=Lt.get(x);if(yt.__useDefaultFramebuffer!==void 0){ft.bindFramebuffer(N.FRAMEBUFFER,yt.__webglFramebuffer),it.copy(x.viewport),At.copy(x.scissor),Tt=x.scissorTest,ft.viewport(it),ft.scissor(At),ft.setScissorTest(Tt),q=-1;return}else if(yt.__webglFramebuffer===void 0)Ft.setupRenderTarget(x);else if(yt.__hasExternalTextures)Ft.rebindTextures(x,Lt.get(x.texture).__webglTexture,Lt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Ht=x.depthTexture;if(yt.__boundDepthTexture!==Ht){if(Ht!==null&&Lt.has(Ht)&&(x.width!==Ht.image.width||x.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(x)}}let bt=x.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(vt=!0);let Pt=Lt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Pt[P])?z=Pt[P][V]:z=Pt[P],G=!0):x.samples>0&&Ft.useMultisampledRTT(x)===!1?z=Lt.get(x).__webglMultisampledFramebuffer:Array.isArray(Pt)?z=Pt[V]:z=Pt,it.copy(x.viewport),At.copy(x.scissor),Tt=x.scissorTest}else it.copy(Ot).multiplyScalar(mt).floor(),At.copy($t).multiplyScalar(mt).floor(),Tt=ie;if(V!==0&&(z=J),ft.bindFramebuffer(N.FRAMEBUFFER,z)&&ft.drawBuffers(x,z),ft.viewport(it),ft.scissor(At),ft.setScissorTest(Tt),G){let yt=Lt.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+P,yt.__webglTexture,V)}else if(vt){let yt=P;for(let bt=0;bt<x.textures.length;bt++){let Pt=Lt.get(x.textures[bt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+bt,Pt.__webglTexture,V,yt)}}else if(x!==null&&V!==0){let yt=Lt.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,yt.__webglTexture,V)}q=-1};function Qe(x){let P=Lt.get(x);return(P.__readFormat!==x.format||P.__readType!==x.type)&&(P.__readFormat=x.format,P.__readType=x.type,P.__formatReadable=ce.textureFormatReadable(x.format),P.__typeReadable=ce.textureTypeReadable(x.type)),P}this.readRenderTargetPixels=function(x,P,V,z,G,vt,wt,yt=0){if(!(x&&x.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Lt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&wt!==void 0&&(bt=bt[wt],Array.isArray(bt)&&(bt=bt[0])),bt){ft.bindFramebuffer(N.FRAMEBUFFER,bt);try{let Pt=x.textures[yt],Ht=Pt.format,Qt=Pt.type;x.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+yt);let Rt=Qe(Pt);if(Rt.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-z&&V>=0&&V<=x.height-G&&N.readPixels(P,V,z,G,ot.convert(Ht),ot.convert(Qt),vt)}finally{let Pt=at!==null?Lt.get(at).__webglFramebuffer:null;ft.bindFramebuffer(N.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(x,P,V,z,G,vt,wt,yt=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Lt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&wt!==void 0&&(bt=bt[wt],Array.isArray(bt)&&(bt=bt[0])),bt)if(P>=0&&P<=x.width-z&&V>=0&&V<=x.height-G){ft.bindFramebuffer(N.FRAMEBUFFER,bt);let Pt=x.textures[yt],Ht=Pt.format,Qt=Pt.type;x.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+yt);let Rt=Qe(Pt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Kt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Kt),N.bufferData(N.PIXEL_PACK_BUFFER,vt.byteLength,N.STREAM_READ),N.readPixels(P,V,z,G,ot.convert(Ht),ot.convert(Qt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Ee=at!==null?Lt.get(at).__webglFramebuffer:null;ft.bindFramebuffer(N.FRAMEBUFFER,Ee);let fe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await uc(N,fe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Kt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,vt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Kt),N.deleteSync(fe),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,P=null,V=0){let z=Math.pow(2,-V),G=Math.floor(x.image.width*z),vt=Math.floor(x.image.height*z),wt=P!==null?P.x:0,yt=P!==null?P.y:0;Ft.setTexture2D(x,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,wt,yt,G,vt),ft.unbindTexture()},this.copyTextureToTexture=function(x,P,V=null,z=null,G=0,vt=0){let wt,yt,bt,Pt,Ht,Qt,Rt,Kt,Ee,fe=x.isCompressedTexture?x.mipmaps[vt]:x.image;if(V!==null)wt=V.max.x-V.min.x,yt=V.max.y-V.min.y,bt=V.isBox3?V.max.z-V.min.z:1,Pt=V.min.x,Ht=V.min.y,Qt=V.isBox3?V.min.z:0;else{let re=Math.pow(2,-G);wt=Math.floor(fe.width*re),yt=Math.floor(fe.height*re),x.isDataArrayTexture?bt=fe.depth:x.isData3DTexture?bt=Math.floor(fe.depth*re):bt=1,Pt=0,Ht=0,Qt=0}z!==null?(Rt=z.x,Kt=z.y,Ee=z.z):(Rt=0,Kt=0,Ee=0);let de=ot.convert(P.format),Fe=ot.convert(P.type),Ct;P.isData3DTexture?(Ft.setTexture3D(P,0),Ct=N.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Ft.setTexture2DArray(P,0),Ct=N.TEXTURE_2D_ARRAY):(Ft.setTexture2D(P,0),Ct=N.TEXTURE_2D),ft.activeTexture(N.TEXTURE0),ft.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,P.flipY),ft.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),ft.pixelStorei(N.UNPACK_ALIGNMENT,P.unpackAlignment);let We=ft.getParameter(N.UNPACK_ROW_LENGTH),oe=ft.getParameter(N.UNPACK_IMAGE_HEIGHT),di=ft.getParameter(N.UNPACK_SKIP_PIXELS),Be=ft.getParameter(N.UNPACK_SKIP_ROWS),Zs=ft.getParameter(N.UNPACK_SKIP_IMAGES);ft.pixelStorei(N.UNPACK_ROW_LENGTH,fe.width),ft.pixelStorei(N.UNPACK_IMAGE_HEIGHT,fe.height),ft.pixelStorei(N.UNPACK_SKIP_PIXELS,Pt),ft.pixelStorei(N.UNPACK_SKIP_ROWS,Ht),ft.pixelStorei(N.UNPACK_SKIP_IMAGES,Qt);let Yn=x.isDataArrayTexture||x.isData3DTexture,fi=P.isDataArrayTexture||P.isData3DTexture;if(x.isDepthTexture){let re=Lt.get(x),Oe=Lt.get(P),fn=Lt.get(re.__renderTarget),ve=Lt.get(Oe.__renderTarget);ft.bindFramebuffer(N.READ_FRAMEBUFFER,fn.__webglFramebuffer),ft.bindFramebuffer(N.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Le=0;Le<bt;Le++)Yn&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Lt.get(x).__webglTexture,G,Qt+Le),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Lt.get(P).__webglTexture,vt,Ee+Le)),N.blitFramebuffer(Pt,Ht,Pt+wt,Ht+yt,Rt,Kt,Rt+wt,Kt+yt,N.DEPTH_BUFFER_BIT,N.NEAREST);ft.bindFramebuffer(N.READ_FRAMEBUFFER,null),ft.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||x.isRenderTargetTexture||Lt.has(x)){let re=Lt.get(x),Oe=Lt.get(P);ft.bindFramebuffer(N.READ_FRAMEBUFFER,R),ft.bindFramebuffer(N.DRAW_FRAMEBUFFER,H);for(let fn=0;fn<bt;fn++)Yn?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,re.__webglTexture,G,Qt+fn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,re.__webglTexture,G),fi?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Oe.__webglTexture,vt,Ee+fn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Oe.__webglTexture,vt),G!==0?N.blitFramebuffer(Pt,Ht,Pt+wt,Ht+yt,Rt,Kt,Rt+wt,Kt+yt,N.COLOR_BUFFER_BIT,N.NEAREST):fi?N.copyTexSubImage3D(Ct,vt,Rt,Kt,Ee+fn,Pt,Ht,wt,yt):N.copyTexSubImage2D(Ct,vt,Rt,Kt,Pt,Ht,wt,yt);ft.bindFramebuffer(N.READ_FRAMEBUFFER,null),ft.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else fi?x.isDataTexture||x.isData3DTexture?N.texSubImage3D(Ct,vt,Rt,Kt,Ee,wt,yt,bt,de,Fe,fe.data):P.isCompressedArrayTexture?N.compressedTexSubImage3D(Ct,vt,Rt,Kt,Ee,wt,yt,bt,de,fe.data):N.texSubImage3D(Ct,vt,Rt,Kt,Ee,wt,yt,bt,de,Fe,fe):x.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,vt,Rt,Kt,wt,yt,de,Fe,fe.data):x.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,vt,Rt,Kt,fe.width,fe.height,de,fe.data):N.texSubImage2D(N.TEXTURE_2D,vt,Rt,Kt,wt,yt,de,Fe,fe);ft.pixelStorei(N.UNPACK_ROW_LENGTH,We),ft.pixelStorei(N.UNPACK_IMAGE_HEIGHT,oe),ft.pixelStorei(N.UNPACK_SKIP_PIXELS,di),ft.pixelStorei(N.UNPACK_SKIP_ROWS,Be),ft.pixelStorei(N.UNPACK_SKIP_IMAGES,Zs),vt===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&N.generateMipmap(Ct),ft.unbindTexture()},this.initRenderTarget=function(x){Lt.get(x).__webglFramebuffer===void 0&&Ft.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Ft.setTextureCube(x,0):x.isData3DTexture?Ft.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Ft.setTexture2DArray(x,0):Ft.setTexture2D(x,0),ft.unbindTexture()},this.resetState=function(){Q=0,X=0,at=null,ft.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}};var Qc="data:image/jpeg;base64,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";var ne=i=>document.getElementById(i);try{Om()}catch(i){console.error(i),ne("error").hidden=!1,ne("start").disabled=!0}function Om(){let i=new vs;i.background=new qt(11126741),i.fog=new ys(11126741,.009);let t=new Je(59,1,.1,250),e=new Fa({antialias:!0});e.shadowMap.enabled=!0,e.shadowMap.type=xi,e.setPixelRatio(Math.min(devicePixelRatio,1.65)),ne("world").append(e.domElement),i.add(new Ls(14807295,7631447,2.1));let n=new Us(16769201,2.35);n.position.set(-33,55,27),n.castShadow=!0,Object.assign(n.shadow.camera,{left:-65,right:65,top:65,bottom:-65,far:170}),n.shadow.mapSize.set(2048,2048),n.shadow.normalBias=.035,i.add(n);let s=L=>new ai({color:L,roughness:.94}),r=new Map,a=L=>(r.has(L)||r.set(L,s(L)),r.get(L)),o=new ri(1,1,1);function c(L,k,W,rt,nt,ct=i){let ht=new cn(L,typeof k=="number"?a(k):k);return ht.position.set(W,rt,nt),ht.castShadow=!0,ht.receiveShadow=!0,ct.add(ht),ht}function l(L,k,W,rt,nt,ct,ht,Zt){let se=c(o,ht,L,k,W,Zt);return se.scale.set(rt,nt,ct),se}let h=134,f=()=>(h=Math.imul(h,1664525)+1013904223>>>0)/4294967296;function u(L,k,W=1){let rt=document.createElement("canvas");rt.width=rt.height=L,k(rt.getContext("2d"));let nt=new Ts(rt);return nt.colorSpace=Xe,nt.wrapS=nt.wrapT=Hi,nt.repeat.set(W,W),nt.anisotropy=e.capabilities.getMaxAnisotropy(),nt}function m(L,k){let W=L.image,rt=W.width,nt=W.getContext("2d").getImageData(0,0,rt,rt).data,ct=(Zt,se)=>nt[((se+rt)%rt*rt+(Zt+rt)%rt)*4]/255,ht=u(rt,Zt=>{let se=Zt.createImageData(rt,rt);for(let Te=0;Te<rt;Te++)for(let be=0;be<rt;be++){let tn=(ct(be-1,Te)-ct(be+1,Te))*k,Qe=(ct(be,Te+1)-ct(be,Te-1))*k,x=Math.hypot(tn,Qe,1);se.data.set([128+127*tn/x,128+127*Qe/x,128+127/x,255],(Te*rt+be)*4)}Zt.putImageData(se,0,0)});return ht.colorSpace=Sn,ht.repeat.copy(L.repeat),ht}function y(L,k,W,rt=!1){let nt=u(128,ct=>{ct.fillStyle=L,ct.fillRect(0,0,128,128);for(let ht=0;ht<2200;ht++)ct.fillStyle=k[ht%k.length],ct.fillRect(f()*128,f()*128,1+f()*4,1+f()*3);if(rt){ct.fillStyle="#848477";for(let ht=0;ht<128;ht+=32)ct.fillRect(0,ht,128,1),ct.fillRect(ht,0,1,128)}},W);return new ai({map:nt,normalMap:m(nt,rt?3:1.4)})}let b=y("#688052",["#789459","#60784b","#71854b","#84915b"],52),p=y("#b1ad9f",["#aaa99d","#bbb7aa","#a29f92"],9,!0),d=y("#62696a",["#737879","#626868","#585f60"],12);l(0,-.17,0,240,.3,240,b).castShadow=!1,l(-6,-.035,3,57,.09,33,p).castShadow=!1,l(-44,-.04,20,17,.08,108,d).castShadow=!1,l(-25,-.025,22,35,.08,9,d).castShadow=!1,l(26,-.028,-6,4,.07,59,p).castShadow=!1,l(10,-.021,18,34,.08,3.6,p).castShadow=!1,l(8,.015,8,22,.07,13,b).castShadow=!1;for(let L=0;L<11;L++)l(-39,.015,-21+L*4.1,4,.018,.08,14211005).castShadow=!1;let v=u(128,L=>{L.fillStyle="#b38374",L.fillRect(0,0,128,128);for(let k=0;k<12;k++)for(let W=-1;W<5;W++){let rt=42+f()*9;L.fillStyle="hsl(10 34% "+rt+"%)",L.fillRect(W*32+k%2*16,k*128/12,31,128/12-1)}}),w=m(v,5);function S(L,k){let W=v.clone();W.repeat.set(L/2.9,k/2.35);let rt=w.clone();return rt.repeat.copy(W.repeat),new ai({map:W,normalMap:rt,roughness:1})}let A=[];function E(L,k,W,rt,nt,ct){let ht=new Ke;ht.position.set(L,0,k),ht.rotation.y=nt,i.add(ht);let Zt=Math.floor(W/(ct?4.1:2.45));for(let se=0;se<3;se++)for(let Te=0;Te<Zt;Te++){if(ct&&se===0)continue;let be=(Te-(Zt-1)/2)*W/Zt,tn=2.05+se*2.62,Qe=ct&&se===1?.68:1.47;l(be,tn,.025,1.57,Qe,.09,14868434,ht),l(be,tn,.081,1.36,Qe-.17,.035,[2902616,4612202,2308675][Math.floor(f()*3)],ht),l(be,tn,.108,.07,Qe-.12,.035,14934228,ht),ct||l(be,tn-.11,.109,1.42,.062,.035,14934228,ht),l(be,tn-Qe/2,.092,1.7,.085,.19,14868176,ht)}}function g(L,k,W,rt,nt,ct=!1){A.push({x:L,z:k,w:W,d:rt});let ht=ct?M:S(W,nt),Zt=ct?ht:S(rt,nt);l(L,nt/2,k,W,nt,rt,[Zt,Zt,a(5593691),ht,ht,ht]),l(L,nt+.09,k,W+.26,.21,rt+.26,ct?4279378:9793124),l(L,.23,k,W+.07,.46,rt+.07,8158320),E(L,k+rt/2,W,nt,0,ct),E(L,k-rt/2,W,nt,Math.PI,ct),E(L+W/2,k,rt,nt,Math.PI/2,ct),E(L-W/2,k,rt,nt,-Math.PI/2,ct)}let M=y("#68777d",["#627177","#6b797e","#647176"],5);g(-11,-16,31,12,9.1),g(10,-19,12,23,9.25),g(21,-32,23,12,9.05),g(22,-10,12,15,10.5,!0),g(-29,-12,12,14,9.8,!0),g(-39,-20,9,20,8.8),g(-36,-31,15,10,8.8),g(-39,-43,11,14,8.5);function D(L,k,W){l(L,1.35,k,4.9,2.6,.16,13817034);for(let ht=-2;ht<=2;ht++)l(L+ht*.89,1.37,k+.11,.77,2.32,.08,3427408),l(L+ht*.89,1.06,k+.17,.74,.07,.04,15000533);l(L,2.84,k+.84,5.8,.15,2.18,8360338);for(let ht of[-2.65,2.65])l(L+ht,1.39,k+1.85,.09,2.78,.09,14212048);for(let ht=0;ht<3;ht++){let Zt=(3-ht)*.15;l(L,Zt/2,k+.57+ht*.53,5.6,Zt,1.15,M)}for(let ht of[-2.69,2.69]){for(let Zt=0;Zt<3;Zt++)l(L+ht,.91-Zt*.13,k+.5+Zt*.57,.05,.96,.05,13226960);l(L+ht,1.26,k+1.02,.055,.055,1.74,13226960).rotation.x=.24}let rt=new ii({transparent:!0,depthWrite:!1,map:u(256,ht=>{ht.fillStyle="#d5dfd8",ht.font="600 23px sans-serif",ht.textAlign="center",W.forEach((Zt,se)=>ht.fillText(Zt,128,110+se*28,246))})});c(new Cn(7,2.4),rt,L,3.58,k+.18).castShadow=!1;let nt=u(512,ht=>{ht.fillStyle="#c0cbca",ht.font="54px sans-serif";let Zt=["N","e","r","d","O","Y","m","a","J","p","^"],se=[[41,95],[100,183],[237,158],[54,315],[339,327],[409,425],[410,68],[280,96],[133,410],[399,231],[333,451]];Zt.forEach((Te,be)=>ht.fillText(Te,...se[be]))}),ct=new ii({map:nt,transparent:!0,depthWrite:!1});c(new Cn(11.5,9.2),ct,L,4.9,k+.019).castShadow=!1}D(-29,-4.96,["NEMEN\u010CIN\u0116S GEDIMINO GIMNAZIJA","Non scholae sed vitae discimus"]),D(22,-2.46,["NEMEN\u010CIN\u0116","GEDIMINO GIMNAZIJA"]);let I=new hn(.13,.28,1,7),U=new As(1,1,8),O=[];function J(L,k,W){O.push({x:L,z:k}),c(I,6836540,L,W*.39,k).scale.set(W*.115,W*.78,W*.115);for(let nt=0;nt<3;nt++){let ct=c(U,[2706486,3431229,4614725][nt],L,W*(.66+nt*.115),k);ct.scale.set(W*(.22-nt*.04),W*.48,W*(.22-nt*.04)),ct.rotation.y=f()*6}}J(-2,10,12),J(16,12,13),J(-15,16,10),J(31,1,13);for(let L=0;L<165;L++){let k=f()*180-90,W=f()*150-78;(k<-53||k>36||W<-40||W>40)&&!(k>-55&&k<-34)&&J(k,W,6+f()*10)}for(let[L,k]of[[-27,5],[-12,6],[1,3],[18,17],[29,9],[-32,17]])l(L,1.58,k,.085,3.16,.085,5264976),c(new hn(.32,.12,.18,8),4081731,L,3.23,k);for(let[L,k]of[[-13,1],[4,15],[24,3]]){l(L,.47,k,2.15,.1,.52,8410937),l(L,.75,k-.23,2.15,.24,.09,8410937);for(let W of[-.82,.82])l(L+W,.23,k,.095,.46,.43,4475715)}let R={left:24,right:33,z:-.99,width:1.35,height:.45},H=R.right-R.left,Q=l((R.left+R.right)/2,.18,R.z,H,.09,R.width,M);Q.rotation.z=-Math.atan2(R.height,H);for(let L of[-1,1]){let k=R.z+L*R.width/2;l((R.left+R.right)/2,1.16,k,H,.05,.05,13226960).rotation.z=Q.rotation.z;for(let W=0;W<=6;W++)l(R.left+H*W/6,.45+R.height*(1-W/6),k,.045,.92,.045,13226960)}for(let[L,k,W,rt]of[[-42,-53,18,3],[30,-26,3,51],[1,-42,52,2.5],[-27,-38,2.5,35]])l(L,-.012,k,W,.07,rt,p).castShadow=!1;let X=[{x:8,z:10,r:5.8,h:.86},{x:33,z:17,r:5.6,h:1.15},{x:-22,z:31,r:7.1,h:1.35},{x:41,z:-20,r:8,h:1.65}];function at(L,k,W){let rt=Math.hypot(k-L.x,W-L.z)/L.r;return L.h*Math.max(0,1-rt*rt)**2}function q(L,k){let W=.03;for(let rt of X)W=Math.max(W,at(rt,L,k)+.03);for(let rt of[-29,22]){let nt=rt===22?-2.46:-4.96;if(!(Math.abs(L-rt)>2.8))for(let ct=0;ct<3;ct++)Math.abs(k-nt-.57-ct*.53)<.575&&(W=Math.max(W,(3-ct)*.15+.03))}return L>=R.left&&L<=R.right&&Math.abs(k-R.z)<R.width/2&&(W=Math.max(W,R.height*(R.right-L)/H+.03)),W}for(let L of X){let k=new Cn(L.r*2,L.r*2,34,34);k.rotateX(-Math.PI/2);let W=k.attributes.position;for(let nt=0;nt<W.count;nt++)W.setY(nt,at(L,L.x+W.getX(nt),L.z+W.getZ(nt))-.07);k.computeVertexNormals();let rt=b.clone();rt.map=b.map.clone(),rt.normalMap=b.normalMap.clone(),rt.map.repeat.setScalar(4),rt.normalMap.repeat.setScalar(4),c(k,rt,L.x,.069,L.z).castShadow=!1}let et=new Qi(1,0);for(let[L,k]of[[8,10],[15,12],[-23,30],[33,17],[-25,-3],[26,1]])for(let W=0;W<17;W++){let rt=L+(f()-.5)*3.7,nt=k+(f()-.5)*1.8,ct=q(rt,nt),ht=.12+f()*.14;l(rt,ct+ht/2,nt,.024,ht,.024,4350772).castShadow=!1,c(et,[16311970,15901092,15527140,12426718][W%4],rt,ct+ht,nt).scale.set(.069,.049,.069)}for(let[L,k]of[[-25,-.8],[29,1],[-17,4],[34,-16],[-30,-43]])for(let W=0;W<6;W++)c(new Qi(.6,1),W%2?4546625:5796936,L+W*.62,.35,k).scale.set(1,.85,1);let it=-24,At=-1;l(it,3.7,At,.085,7.4,.085,13226184),[15251506,4027985,11552322].forEach((L,k)=>l(it+.56,7.15-k*.25,At,1.14,.25,.045,L)),l(18,.28,.15,.72,.56,.72,8750202),c(new hn(.17,.25,1.46,7),7885625,18,1.28,.15),l(18,2.04,.15,.27,.39,.26,9266760);let Tt=new Ke;i.add(Tt);let tt=3426650,Mt=3424330,Et=11961193,Ut=new Cs(1,16,12);function mt(L,k,W,rt,nt,ct,ht,Zt){let se=c(Ut,k,W,rt,nt,L);return se.scale.set(ct,ht,Zt),se}let Nt=new Ke;Tt.add(Nt),mt(Nt,tt,0,1.22,0,.27,.38,.16),mt(Nt,2436653,0,1.22,-.145,.21,.28,.105),l(0,1.17,-.236,.29,.12,.018,5202260,Nt),mt(Nt,Et,0,1.61,0,.078,.1,.075),mt(Nt,Et,0,1.77,.016,.128,.166,.119),mt(Nt,2630688,0,1.865,-.018,.133,.111,.113);let ge=new Image;ge.onload=()=>{let L=u(128,W=>{W.beginPath(),W.ellipse(64,66,61,63,0,0,Math.PI*2),W.clip(),W.drawImage(ge,176,155,72,94,0,0,128,128)}),k=c(new Cn(.218,.295),new ai({map:L,transparent:!0,alphaTest:.5}),0,1.774,.132,Nt);k.castShadow=!1},ge.src=Qc;let Ot=[];for(let L of[-1,1]){let k=new Ke,W=new Ke;k.position.set(L*.126,.9,0),W.position.set(L*.271,1.45,0),Tt.add(k),Nt.add(W),mt(k,Mt,0,-.29,0,.104,.37,.103),mt(k,2698541,0,-.825,.052,.103,.072,.179),mt(k,Mt,0,-.64,0,.084,.18,.083),mt(W,tt,L*.021,-.2,0,.081,.254,.079),mt(W,Et,L*.024,-.445,.023,.058,.083,.059),Ot.push({leg:k,arm:W,side:L})}let $t=!1,ie=0,Wt=.35,Me=0,he=!1,Ie=0,ue=0,Ue=new Set,pe=new Map,Pe=new B,$e=new B,ke=new $i,N=new Rn,He=new B,ae=new B,ce=new B,ft=e.domElement,Xt=ne("radar").getContext("2d"),Lt=(L,k)=>Math.abs(L)>63||Math.abs(k)>58||A.some(W=>Math.abs(L-W.x)<W.w/2+.38&&Math.abs(k-W.z)<W.d/2+.38)||O.some(W=>(L-W.x)**2+(k-W.z)**2<.58**2),Ft=rl(),T=0,_=null,F=!1,st=100,K=100,ut=!1,dt=0,Y=!1,$=0,gt="",C=0,j=[],Z=new hn(.077,.078,.24,12),_t=new hn(.035,.055,.14,12);function ot(L,k,W,rt=q(k,W),nt=null){let ct=new Ke;i.add(ct),ct.position.set(k,rt,W),L==="juice"?(l(0,.135,0,.18,.27,.13,15768886,ct),l(0,.15,.067,.11,.12,.012,16314559,ct),l(.04,.197,.079,.017,.15,.015,15067611,ct).rotation.z=.11):L==="bun"?(mt(ct,13867603,0,.071,0,.097,.07,.22),mt(ct,11226678,0,.113,0,.055,.046,.212),l(0,.156,0,.022,.011,.32,15576626,ct)):(c(Z,5518626,0,.12,0,ct),c(_t,5518626,0,.29,0,ct),c(new hn(.079,.079,.105,12),14070645,0,.136,0,ct),c(new hn(.039,.039,.031,12),11054225,0,.37,0,ct));let ht=c(new Rs(.25,.29,20),new ii({color:15070365,side:un}),k,q(k,W)+.022,W);ht.rotation.x=-Math.PI/2,ht.castShadow=!1,ht.visible=!nt,j.push({id:L,model:ct,marker:ht,velocity:nt,delay:nt?.y?.6:0})}ot("juice",-9,19),ot("bun",-6,16.6),ot("beer",-12,15),ot("juice",8,10),ot("bun",-27,1),ot("beer",35,14);function pt(){let L=null,k=2.25;for(let W of j){if(W.delay>0||W.velocity)continue;let rt=W.model.position.distanceTo(Tt.position);rt<k&&(k=rt,L=W)}return L}function It(){let L=pt();if(L){if(!Ft.add(L.id)){Vt("Inventory full");return}Vt("Picked up "+Zn[L.id].name),i.remove(L.model,L.marker),L.marker.material.dispose(),L.marker.geometry.dispose(),j.splice(j.indexOf(L),1),xt()}}function Vt(L){gt=L,C=1.3}function lt(L=T){let k=Ft.take(L);if(!k){Vt("Selected slot is empty");return}let W=Tt.position,rt=new B(-Math.sin(ie),0,-Math.cos(ie)),nt=W.x+rt.x*.7,ct=W.z+rt.z*.7;rt.multiplyScalar(8.5),rt.y=3.2;let ht=Lt(nt,ct);ot(k,ht?W.x:nt,ht?W.z:ct,W.y+1.28,rt),_=null,xt()}function Dt(L){for(let k of j){k.delay=Math.max(0,k.delay-L);let{model:W,marker:rt,velocity:nt}=k;if(!nt)continue;let ct=W.position;nt.y-=14*L,Lt(ct.x+nt.x*L,ct.z)&&(nt.x*=-.35),Lt(ct.x,ct.z+nt.z*L)&&(nt.z*=-.35),ct.addScaledVector(nt,L),W.rotation.x+=L*7,W.rotation.z+=L*2;let ht=q(ct.x,ct.z);ct.y>ht||(ct.y=ht,nt.y<-2.6?(nt.y*=-.31,nt.x*=.65,nt.z*=.65):(k.velocity=null,W.rotation.set(0,W.rotation.y,0),rt.position.set(ct.x,ht+.022,ct.z),rt.visible=!0))}}let kt=[[ne("hotbar"),0,9],[ne("backpack"),9,36],[ne("packHotbar"),0,9]];for(let[L,k,W]of kt)for(let rt=k;rt<W;rt++){let nt=document.createElement("button");nt.className="slot",nt.onclick=()=>{L===ne("hotbar")?T=rt:_===null?Ft.slots[rt]&&(_=rt):(Ft.move(_,rt),_=null),xt()},L.append(nt)}function xt(){for(let[k,W,rt]of kt)for(let nt=W;nt<rt;nt++){let ct=k.children[nt-W],ht=Ft.slots[nt],Zt=ht?Zn[ht.id].name+" \xD7 "+ht.count:"Empty";if(ct.setAttribute("aria-label","Slot "+(nt+1)+": "+Zt),ct.title=Zt,ct.classList.toggle("selected",k===ne("hotbar")?nt===T:nt===_),ct.textContent=ht?Zn[ht.id].icon:"",nt<9){let se=document.createElement("small");se.textContent=nt+1,ct.append(se)}if(ht){let se=document.createElement("b");se.textContent=ht.count,ct.append(se)}}let L=Ft.slots[_??T];ne("itemDetails").textContent=_!==null&&L?Zn[L.id].name+" \xD7 "+L.count+" \xB7 Choose a destination slot.":"Select an item, then click a slot to move or stack it.",ne("packThrow").disabled=!L}function ee(L){F=L,_=null,Ue.clear(),pe.clear(),he=!1,ne("inventory").hidden=!L,L&&document.pointerLockElement===ft&&document.exitPointerLock(),xt(),L?ne("closePack").focus():ne("packButton").blur()}ne("packButton").onclick=()=>ee(!0),ne("closePack").onclick=()=>ee(!1),ne("packThrow").onclick=()=>lt(_??T),ne("jumpButton").onclick=()=>Se(),ne("pickButton").onclick=It,ne("throwButton").onclick=()=>lt(),xt();function Se(){Y||K<9||(Y=!0,$=6.4,K-=9,dt=.45)}function dn(){ne("health").value=st,ne("stamina").value=K,ne("hpValue").textContent=Math.ceil(st),ne("spValue").textContent=Math.ceil(K)}function Ti(){Tt.position.set(-9,.03,22),Tt.rotation.y=Math.PI,ie=0,Wt=.35,Me=0,Y=!1,$=0,st=100,K=100,dt=0,ut=!1,dn()}Ti();function Ei(){t.aspect=innerWidth/innerHeight,t.fov=Hs.clamp(68-t.aspect*8,59,75),t.updateProjectionMatrix(),e.setSize(innerWidth,innerHeight)}window.addEventListener("resize",Ei),Ei();function wi(L){$t=L,Ue.clear(),pe.clear(),he=!1,!L&&F&&ee(!1),ne("menu").hidden=L,ne("hud").hidden=!L,ne("start").textContent="Resume game \u2197",L||(document.pointerLockElement&&document.exitPointerLock(),ne("start").focus())}ne("start").onclick=()=>wi(!0),ne("menuButton").onclick=()=>wi(!1);let Ys=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","KeyR"];window.addEventListener("keydown",L=>{if($t){if(L.code==="Escape"){F?ee(!1):wi(!1);return}if(L.code==="KeyI"){L.preventDefault(),L.repeat||ee(!F);return}if(!F){if(/^Digit[1-9]$/.test(L.code)){T=Number(L.code.at(-1))-1,xt();return}if(["Space","KeyE","KeyQ"].includes(L.code)){L.preventDefault(),L.repeat||(L.code==="Space"?Se():L.code==="KeyE"?It():lt());return}Ys.includes(L.code)&&(L.preventDefault(),Ue.add(L.code),L.code==="KeyR"&&Ti())}}}),window.addEventListener("keyup",L=>Ue.delete(L.code)),window.addEventListener("blur",()=>{Ue.clear(),pe.clear(),he=!1}),ft.addEventListener("pointerdown",L=>{!$t||F||(he=!0,Ie=L.clientX,ue=L.clientY,ft.setPointerCapture(L.pointerId),L.pointerType==="mouse"&&ft.requestPointerLock?.()?.catch(()=>{}))}),ft.addEventListener("lostpointercapture",()=>he=!1),ft.addEventListener("pointerup",()=>he=!1),document.addEventListener("pointerlockchange",()=>{$t&&!F&&document.pointerLockElement!==ft&&wi(!1)}),document.addEventListener("pointermove",L=>{if(!$t||F)return;let k=document.pointerLockElement===ft;!k&&!he||(ie-=(k?L.movementX:L.clientX-Ie)*.004,Wt=Hs.clamp(Wt+(k?L.movementY:L.clientY-ue)*.003,.07,.94),Ie=L.clientX,ue=L.clientY)});for(let L of ne("touch").querySelectorAll("button"))L.addEventListener("pointerdown",k=>{L.setPointerCapture(k.pointerId),pe.set(k.pointerId,L.dataset.key)}),L.addEventListener("lostpointercapture",k=>pe.delete(k.pointerId));let qn=(...L)=>L.some(k=>Ue.has(k)||[...pe.values()].includes(k));function Nn(){let{x:L,z:k}=Tt.position,W=nt=>79+nt*1.15,rt=nt=>63+nt*.98;Xt.fillStyle="#273e30",Xt.fillRect(0,0,158,128),Xt.fillStyle="#526455",Xt.fillRect(W(-35),rt(-13),65,33),Xt.fillStyle="#78847b",Xt.fillRect(W(-52),0,19,128),Xt.fillStyle="#91a887";for(let nt of O)Xt.fillRect(W(nt.x),rt(nt.z),1.6,1.6);Xt.fillStyle="#cda291";for(let nt of A)Xt.fillRect(W(nt.x-nt.w/2),rt(nt.z-nt.d/2),nt.w*1.15,nt.d*.98);Xt.fillStyle="#f0d574";for(let{model:nt,velocity:ct}of j)ct||Xt.fillRect(W(nt.position.x)-1,rt(nt.position.z)-1,2,2);Xt.save(),Xt.translate(W(L),rt(k)),Xt.rotate(-Tt.rotation.y),Xt.fillStyle="#d6fa87",Xt.beginPath(),Xt.moveTo(0,7),Xt.lineTo(-4,-4),Xt.lineTo(4,-4),Xt.fill(),Xt.restore(),ne("zone").textContent=L<-33?"School approach":k<-25||L>30||k>33?"Pine perimeter":"School courtyard"}let Ai=performance.now();e.setAnimationLoop(L=>{let k=Math.min((L-Ai)/1e3,.045);if(Ai=L,$t&&!F){let W=Number(qn("KeyW","ArrowUp"))-Number(qn("KeyS","ArrowDown")),rt=Number(qn("KeyD","ArrowRight"))-Number(qn("KeyA","ArrowLeft")),nt=(W||rt)&&!ut&&!Y&&qn("ShiftLeft","ShiftRight");ae.set(rt,0,-W).normalize().applyAxisAngle(Ae.DEFAULT_UP,ie);let{x:ct,z:ht}=Tt.position,Zt=(nt?7.6:4.05)*k;Lt(ct+ae.x*Zt,ht)||(Tt.position.x+=ae.x*Zt),Lt(Tt.position.x,ht+ae.z*Zt)||(Tt.position.z+=ae.z*Zt);let se=Tt.position.x!==ct||Tt.position.z!==ht,Te=q(Tt.position.x,Tt.position.z);if(!Y&&Tt.position.y-Te>.22&&(Y=!0,$=0),Y?($-=16*k,Tt.position.y+=$*k,Tt.position.y<=Te&&$<=0&&(st=Math.max(0,st-Math.max(0,-$-8)*8),Y=!1,$=0,Tt.position.y=Te,st===0&&(Ti(),Vt("Back at the courtyard")))):Tt.position.y=Te,nt&&se?(K=Math.max(0,K-21*k),dt=.7,K===0&&(ut=!0)):(dt=Math.max(0,dt-k),dt||(K=Math.min(100,K+16*k)),K>=22&&(ut=!1)),dn(),se){let x=Math.atan2(ae.x,ae.z);Tt.rotation.y+=Math.atan2(Math.sin(x-Tt.rotation.y),Math.cos(x-Tt.rotation.y))*(1-Math.exp(-k*16)),Me+=k*(nt?13:9)}for(let{leg:x,arm:P,side:V}of Ot)x.rotation.x=Hs.lerp(x.rotation.x,Y?V*.32:se?Math.sin(Me)*V*(nt?.9:.58):0,.24),P.rotation.x=-x.rotation.x*.76;Nt.position.y=se?Math.abs(Math.sin(Me))*.045:0,Pe.copy(Tt.position).add(ce.set(0,1.4,0)),ce.set(0,Math.sin(Wt),Math.cos(Wt)).applyAxisAngle(Ae.DEFAULT_UP,ie).normalize(),ke.set(Pe,ce);let be=t.aspect<.65?7.2:5.9;for(let x of A)N.min.set(x.x-x.w/2-.26,0,x.z-x.d/2-.26),N.max.set(x.x+x.w/2+.26,11,x.z+x.d/2+.26),ke.intersectBox(N,He)&&(be=Math.min(be,Math.max(.65,Pe.distanceTo(He)-.12)));t.position.copy($e.copy(Pe).addScaledVector(ce,be)),t.lookAt(Pe),Dt(k),C=Math.max(0,C-k);let tn=pt(),Qe=C?gt:tn?"E \xB7 Pick up "+Zn[tn.id].name:"";ne("prompt").hidden=!Qe,ne("prompt").textContent!==Qe&&(ne("prompt").textContent=Qe),Nn()}else $t||(t.position.set(-31+Math.sin(L*16e-5)*3,7.2,36),t.lookAt(0,4,-13));e.render(i,t)})}})();
