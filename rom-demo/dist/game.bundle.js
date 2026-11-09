(()=>{var yg=Object.defineProperty;var vg=(s,t)=>{for(var e in t)yg(s,e,{get:t[e],enumerable:!0})};var Je={dagger:{name:"Sruguputu",description:"Japonijos mero durklas",icon:"\u{1F5E1}\uFE0F",stack:1,weapon:{name:"Sruguputu",damage:100,range:2.7,aim:.42,cooldown:.55}},blaster:{name:"Training blaster",icon:"\u{1F52B}",stack:1,weapon:{name:"Training blaster",damage:35,range:16,aim:.95,cooldown:.65}},juice:{name:"Small juice pack",icon:"\u{1F9C3}",stack:64,effects:[{type:"bladder",seconds:50}]},bun:{name:"Sausage bun",icon:"\u{1F32D}",stack:64,effects:[{type:"stamina",amount:40},{type:"gas",seconds:36}]},beer:{name:"Beer bottle",icon:"\u{1F37A}",stack:64,effects:[{type:"dizzy",seconds:24}]}};function ff(){let s=Array(36).fill(null);return{slots:s,add(t){let e=s.find(i=>i?.id===t&&i.count<Je[t].stack);if(e)return e.count++,!0;let n=s.indexOf(null);return n<0?!1:(s[n]={id:t,count:1},!0)},take(t){let e=s[t];return e?(--e.count===0&&(s[t]=null),e.id):null},move(t,e){let n=s[t],i=s[e];if(!(t===e||!n)){if(i?.id===n.id){let r=Math.min(n.count,Je[n.id].stack-i.count);i.count+=r,n.count-=r,n.count||(s[t]=null);return}[s[t],s[e]]=[i,n]}}}}function pf(s,t,e,n,i){let a=[],o=n("#b8a18b",["#b09c85","#baa58e","#c0ac94"],5,!0),l=n("#b88755",["#ad7d4e","#ba8d5b","#bf935d"],6,!0),c=(u,d,f,p)=>{a.push({x:300+u,z:d,w:f,d:p}),e(300+u,1.8,d,f,3.6,p,15062698).castShadow=!1,e(300+u,.42,d,f+.025,.84,p+.025,11111791).castShadow=!1};e(300,-.12,0,28,.24,28,o),e(300,3.68,0,28,.15,28,15328468).castShadow=!1,c(0,-14,28,.25),c(0,14,28,.25),c(-14,0,.25,28),c(14,0,.25,28);for(let[u,d,f,p]of[[-5,-9,.2,10],[-5,3,.2,10],[-5,12,.2,4],[5,-10,.2,8],[5,1,.2,9],[5,12,.2,4],[9.5,5.5,9,.2]])c(u,d,f,p);e(300-9.5,.01,-5,8.7,.02,17.7,l),e(300+9.5,.01,-4.3,8.7,.02,19,l);for(let[u,d]of[[0,8],[0,0],[0,-9],[-9,-7],[9,-5],[9,9],[-9,7]]){let f=new s.PointLight(16772556,30,12);f.position.set(300+u,3.27,d),t.add(f),e(300+u,3.49,d,1.75,.08,.39,new s.MeshBasicMaterial({color:16774362}))}function h(u,d,f,p,_,m,g=0){let y=i(256,v=>{v.fillStyle="#304c43",v.fillRect(0,0,256,256),v.fillStyle="#fff2ce",v.textAlign="center",v.font="bold 32px sans-serif",v.fillText(u,128,143,235)}),M=new s.Mesh(new s.PlaneGeometry(_,m),new s.MeshBasicMaterial({map:y}));M.position.set(300+d,f,p),M.rotation.y=g,t.add(M)}h("I\u0160\u0116JIMAS",0,2.65,13.85,3.5,.7,Math.PI),h("KLAS\u0116",-4.87,2.65,-4,1.6,.46,Math.PI/2),h("AKT\u0172 SAL\u0116",4.87,2.65,-5,1.6,.46,-Math.PI/2),h("WC",4.87,2.65,8.35,1.6,.46,-Math.PI/2),h("GEDIMINO GIMNAZIJA",0,2.2,-13.86,6.5,1);for(let u=0;u<6;u++)e(300-4.86,1.88,-12.6+u*.94,.035,.53,.71,7362376),e(300-4.83,1.88,-12.6+u*.94,.035,.43,.59,[8627104,13802094,13021033][u%3]);e(300-9.4,1.77,-13.83,5,1.36,.09,2638907);for(let u of[-12,-9.5,-7])for(let d of[-11,-8,-5]){e(300+u,.76,d,1.65,.08,.82,11501908);for(let f of[-.61,.61])e(300+u+f,.37,d,.08,.74,.57,5462355);e(300+u,.46,d+.8,.48,.075,.46,11304014),e(300+u,.69,d+1,.48,.47,.075,11304014)}e(300+9.5,.16,-11.8,8,.32,3.2,l);for(let u of[6.5,7.9,9.3,10.7,12.1])for(let d of[-8,-6.6,-5.2,-3.8])e(300+u,.48,d,.63,.15,.57,9978182),e(300+u,.77,d+.26,.64,.63,.13,9978182),e(300+u,.22,d,.11,.44,.46,4737348);for(let u of[8,10.5])e(300+13.5,.87,u,.74,.25,.88,15264997),e(300+13.6,1.55,u,.055,.72,.82,7904675);return e(309,.47,13.15,.55,.92,.72,15264997),e(300+8.95,.47,12.68,.61,.23,.54,15264997),{origin:300,walls:a,exit:{x:300,z:12.5},restroom:{x:309,z:12}}}function mf(s,t,e,n,i,r){let a=[],o=[[-1,27],[12,26],[31,21]];for(let[h,u]of o){let d=new s.Group;t.add(d),d.position.set(h,i(h,u),u),e(0,1.01,0,.54,.72,.39,8735810,d),n(d,3949635,0,1.56,0,.27,.23,.22),e(0,1.57,.215,.29,.076,.025,16760941,d);let f=[-.14,.14].map(p=>{let _=new s.Group;return _.position.set(p,.65,0),d.add(_),e(0,-.28,0,.16,.61,.18,3685433,_),_});a.push({model:d,legs:f,x:h,z:u,hp:100,phase:a.length,alert:0,cooldown:0,respawn:0})}let l=new s.Vector3,c=new s.Vector3;return{update(h,u,d){for(let f of a){let{model:p}=f;if(!f.hp){if(f.respawn-=h,f.respawn>0)continue;p.position.set(f.x,i(f.x,f.z),f.z),p.visible=!0,f.hp=100}let _=p.position;f.alert=Math.max(0,f.alert-h),f.cooldown=Math.max(0,f.cooldown-h),f.phase+=h,l.copy(u.position).sub(_);let m=Math.hypot(l.x,l.z),g=f.alert>0&&m<15;g||l.set(f.x+Math.sin(f.phase*.55)*2.4-_.x,0,f.z+Math.cos(f.phase*.55)*2.4-_.z),l.y=0;let y=g?2.4:1.5,M=Math.min(l.length(),y*h);l.normalize(),(!g||m>1.05)&&(r(_.x+l.x*M,_.z)||(_.x+=l.x*M),r(_.x,_.z+l.z*M)||(_.z+=l.z*M),_.y=i(_.x,_.z),M>.001&&(p.rotation.y=Math.atan2(l.x,l.z)),f.legs.forEach((v,E)=>v.rotation.x=Math.sin(f.phase*9+E*Math.PI)*.44)),g&&m<1.65&&Math.abs(u.position.y-_.y)<1.1&&!f.cooldown&&(f.cooldown=1.2,d(9))}},attack(h,u,d){c.set(-Math.sin(u),0,-Math.cos(u));let f=null,p=d.range;for(let _ of a){if(!_.hp)continue;l.copy(_.model.position).sub(h);let m=Math.hypot(l.x,l.z);if(m>p||Math.abs(l.y)>1.3||(l.y=0,m>.01&&l.normalize().dot(c)<d.aim))continue;let g=!0;for(let y=.3;y<m-.3;y+=.3)if(r(h.x+l.x*y,h.z+l.z*y)){g=!1;break}g&&(p=m,f=_)}return f?(f.hp=Math.max(0,f.hp-d.damage),f.hp?(f.alert=7,"Practice bot \xB7 "+f.hp+" HP"):(f.model.visible=!1,f.respawn=15,f.alert=0,"Practice bot defeated")):"Miss"}}}var fu={};vg(fu,{ACESFilmicToneMapping:()=>Xh,AddEquation:()=>ns,AddOperation:()=>Dd,AdditiveAnimationBlendMode:()=>nu,AdditiveBlending:()=>Fh,AgXToneMapping:()=>qh,AlphaFormat:()=>tu,AlwaysCompare:()=>ru,AlwaysDepth:()=>Ua,AlwaysStencilFunc:()=>Gd,AmbientLight:()=>No,AnimationAction:()=>Wo,AnimationClip:()=>Ki,AnimationLoader:()=>Zc,AnimationMixer:()=>lh,AnimationObjectGroup:()=>oh,AnimationUtils:()=>Yc,ArcCurve:()=>io,ArrayCamera:()=>Go,ArrowHelper:()=>Ph,AttachedBindMode:()=>Rc,Audio:()=>ko,AudioAnalyser:()=>ah,AudioContext:()=>Zr,AudioListener:()=>sh,AudioLoader:()=>nh,AxesHelper:()=>Lh,BackSide:()=>on,BasicDepthPacking:()=>Bd,BasicShadowMap:()=>Dp,BatchedMesh:()=>Za,BezierInterpolant:()=>Io,Bone:()=>Ar,BooleanKeyframeTrack:()=>ui,Box2:()=>Xo,Box3:()=>Oe,Box3Helper:()=>Ch,BoxGeometry:()=>hi,BoxHelper:()=>Rh,BufferAttribute:()=>be,BufferGeometry:()=>he,BufferGeometryLoader:()=>zo,ByteType:()=>$h,Cache:()=>$n,Camera:()=>Fs,CameraHelper:()=>Ah,CanvasTexture:()=>Ir,CapsuleGeometry:()=>ja,CatmullRomCurve3:()=>so,CineonToneMapping:()=>Wh,CircleGeometry:()=>to,ClampToEdgeWrapping:()=>fn,Clock:()=>mh,Color:()=>Lt,ColorKeyframeTrack:()=>Wr,ColorManagement:()=>pe,Compatibility:()=>Mm,CompressedArrayTexture:()=>Wc,CompressedCubeTexture:()=>Xc,CompressedTexture:()=>Is,CompressedTextureLoader:()=>$c,ConeGeometry:()=>qi,ConstantAlphaFactor:()=>Id,ConstantColorFactor:()=>Rd,Controls:()=>Nh,CubeCamera:()=>Gs,CubeDepthTexture:()=>Pr,CubeReflectionMapping:()=>fi,CubeRefractionMapping:()=>is,CubeTexture:()=>Ji,CubeTextureLoader:()=>Qc,CubicBezierCurve:()=>Dr,CubicBezierCurve3:()=>ro,CubicInterpolant:()=>Ro,CullFaceBack:()=>Oh,CullFaceFront:()=>dd,CullFaceFrontBack:()=>Lp,CullFaceNone:()=>ud,Curve:()=>Tn,CurvePath:()=>oo,CustomBlending:()=>pd,CustomToneMapping:()=>Jh,CylinderGeometry:()=>bn,Cylindrical:()=>_h,Data3DTexture:()=>Ts,DataArrayTexture:()=>bs,DataTexture:()=>pn,DataTextureLoader:()=>Kc,DataUtils:()=>Dc,DecrementStencilOp:()=>Kp,DecrementWrapStencilOp:()=>tm,DefaultLoadingManager:()=>Kd,DepthFormat:()=>oi,DepthStencilFormat:()=>pi,DepthTexture:()=>ci,DetachedBindMode:()=>Nd,DirectionalLight:()=>zs,DirectionalLightHelper:()=>Eh,DiscreteInterpolant:()=>Co,DodecahedronGeometry:()=>eo,DoubleSide:()=>wn,DstAlphaFactor:()=>bd,DstColorFactor:()=>wd,DynamicCopyUsage:()=>mm,DynamicDrawUsage:()=>cm,DynamicReadUsage:()=>dm,EdgesGeometry:()=>no,EllipseCurve:()=>Ps,EqualCompare:()=>Hd,EqualDepth:()=>Fa,EqualStencilFunc:()=>sm,EquirectangularReflectionMapping:()=>Qr,EquirectangularRefractionMapping:()=>Kr,Euler:()=>Un,EventDispatcher:()=>Sn,ExternalTexture:()=>Lr,ExtrudeGeometry:()=>uo,FileLoader:()=>Bn,Float16BufferAttribute:()=>zc,Float32BufferAttribute:()=>Ot,FloatType:()=>sn,Fog:()=>Ha,FogExp2:()=>As,FramebufferTexture:()=>Hc,FrontSide:()=>Li,Frustum:()=>li,FrustumArray:()=>Rr,GLBufferAttribute:()=>fh,GLSL1:()=>_m,GLSL3:()=>au,GreaterCompare:()=>Wd,GreaterDepth:()=>za,GreaterEqualCompare:()=>su,GreaterEqualDepth:()=>Ba,GreaterEqualStencilFunc:()=>lm,GreaterStencilFunc:()=>am,GridHelper:()=>Th,Group:()=>Qe,HTMLTexture:()=>Jc,HalfFloatType:()=>Gn,HemisphereLight:()=>Us,HemisphereLightHelper:()=>bh,IcosahedronGeometry:()=>$i,ImageBitmapLoader:()=>eh,ImageLoader:()=>ji,ImageUtils:()=>ka,IncrementStencilOp:()=>Qp,IncrementWrapStencilOp:()=>jp,InstancedBufferAttribute:()=>Ri,InstancedBufferGeometry:()=>Bo,InstancedInterleavedBuffer:()=>dh,InstancedMesh:()=>Ya,Int16BufferAttribute:()=>Fc,Int32BufferAttribute:()=>Bc,Int8BufferAttribute:()=>Nc,IntType:()=>qo,InterleavedBuffer:()=>Cs,InterleavedBufferAttribute:()=>Xi,Interpolant:()=>Pi,InterpolateBezier:()=>Cc,InterpolateDiscrete:()=>_r,InterpolateLinear:()=>Va,InterpolateSmooth:()=>Ca,InterpolationSamplingMode:()=>vm,InterpolationSamplingType:()=>ym,InvertStencilOp:()=>em,KeepStencilOp:()=>Ia,KeyframeTrack:()=>gn,LOD:()=>Xa,LatheGeometry:()=>fo,Layers:()=>ws,LessCompare:()=>kd,LessDepth:()=>Oa,LessEqualCompare:()=>iu,LessEqualDepth:()=>Ms,LessEqualStencilFunc:()=>rm,LessStencilFunc:()=>im,Light:()=>ti,LightProbe:()=>Oo,LightShadow:()=>Os,Line:()=>Kn,Line3:()=>yh,LineBasicMaterial:()=>Ze,LineCurve:()=>Nr,LineCurve3:()=>ao,LineDashedMaterial:()=>Ao,LineLoop:()=>$a,LineSegments:()=>In,LinearFilter:()=>we,LinearInterpolant:()=>Hr,LinearMipMapLinearFilter:()=>Bp,LinearMipMapNearestFilter:()=>Fp,LinearMipmapLinearFilter:()=>zn,LinearMipmapNearestFilter:()=>jr,LinearSRGBColorSpace:()=>yr,LinearToneMapping:()=>kh,LinearTransfer:()=>vr,Loader:()=>Ke,LoaderUtils:()=>Yr,LoadingManager:()=>Jr,LoopOnce:()=>Ud,LoopPingPong:()=>Fd,LoopRepeat:()=>Od,MOUSE:()=>Ip,Material:()=>ze,MaterialBlending:()=>Np,MaterialLoader:()=>Fo,MathUtils:()=>oa,Matrix2:()=>xh,Matrix3:()=>re,Matrix4:()=>ne,MaxEquation:()=>xd,Mesh:()=>Ee,MeshBasicMaterial:()=>an,MeshDepthMaterial:()=>Vr,MeshDistanceMaterial:()=>kr,MeshLambertMaterial:()=>wo,MeshMatcapMaterial:()=>Eo,MeshNormalMaterial:()=>To,MeshPhongMaterial:()=>So,MeshPhysicalMaterial:()=>Mo,MeshStandardMaterial:()=>jn,MeshToonMaterial:()=>bo,MinEquation:()=>_d,MirroredRepeatWrapping:()=>gr,MixOperation:()=>Ld,MultiplyBlending:()=>zh,MultiplyOperation:()=>$r,NearestFilter:()=>Pe,NearestMipMapLinearFilter:()=>Op,NearestMipMapNearestFilter:()=>Up,NearestMipmapLinearFilter:()=>Hs,NearestMipmapNearestFilter:()=>Zh,NeutralToneMapping:()=>Yh,NeverCompare:()=>Vd,NeverDepth:()=>Na,NeverStencilFunc:()=>nm,NoBlending:()=>es,NoColorSpace:()=>Vn,NoNormalPacking:()=>Jp,NoToneMapping:()=>ei,NormalAnimationBlendMode:()=>Cl,NormalBlending:()=>ks,NormalGAPacking:()=>Yp,NormalRGPacking:()=>qp,NotEqualCompare:()=>Xd,NotEqualDepth:()=>Ga,NotEqualStencilFunc:()=>om,NumberKeyframeTrack:()=>Ds,Object3D:()=>ge,ObjectLoader:()=>th,ObjectSpaceNormalMap:()=>zd,OctahedronGeometry:()=>zr,OneFactor:()=>vd,OneMinusConstantAlphaFactor:()=>Pd,OneMinusConstantColorFactor:()=>Cd,OneMinusDstAlphaFactor:()=>Td,OneMinusDstColorFactor:()=>Ed,OneMinusSrcAlphaFactor:()=>Vh,OneMinusSrcColorFactor:()=>Sd,OrthographicCamera:()=>Bs,PCFShadowMap:()=>ts,PCFSoftShadowMap:()=>fd,PMREMGenerator:()=>Dl,Path:()=>Yi,PerspectiveCamera:()=>Ue,Plane:()=>Dn,PlaneGeometry:()=>On,PlaneHelper:()=>Ih,PointLight:()=>Do,PointLightHelper:()=>Sh,Points:()=>Qa,PointsMaterial:()=>Cr,PolarGridHelper:()=>wh,PolyhedronGeometry:()=>Ci,PositionalAudio:()=>rh,PropertyBinding:()=>ye,PropertyMixer:()=>Ho,QuadraticBezierCurve:()=>Ur,QuadraticBezierCurve3:()=>Or,Quaternion:()=>Ye,QuaternionKeyframeTrack:()=>Ns,QuaternionLinearInterpolant:()=>Po,R11_EAC_Format:()=>al,RED_GREEN_RGTC2_Format:()=>aa,RED_RGTC1_Format:()=>El,REVISION:()=>hd,RG11_EAC_Format:()=>ra,RGBADepthPacking:()=>Hp,RGBAFormat:()=>mn,RGBAIntegerFormat:()=>Ko,RGBA_ASTC_10x10_Format:()=>vl,RGBA_ASTC_10x5_Format:()=>_l,RGBA_ASTC_10x6_Format:()=>xl,RGBA_ASTC_10x8_Format:()=>yl,RGBA_ASTC_12x10_Format:()=>Ml,RGBA_ASTC_12x12_Format:()=>Sl,RGBA_ASTC_4x4_Format:()=>cl,RGBA_ASTC_5x4_Format:()=>hl,RGBA_ASTC_5x5_Format:()=>ul,RGBA_ASTC_6x5_Format:()=>dl,RGBA_ASTC_6x6_Format:()=>fl,RGBA_ASTC_8x5_Format:()=>pl,RGBA_ASTC_8x6_Format:()=>ml,RGBA_ASTC_8x8_Format:()=>gl,RGBA_BPTC_Format:()=>bl,RGBA_ETC2_EAC_Format:()=>rl,RGBA_PVRTC_2BPPV1_Format:()=>nl,RGBA_PVRTC_4BPPV1_Format:()=>el,RGBA_S3TC_DXT1_Format:()=>na,RGBA_S3TC_DXT3_Format:()=>ia,RGBA_S3TC_DXT5_Format:()=>sa,RGBDepthPacking:()=>Wp,RGBFormat:()=>eu,RGBIntegerFormat:()=>zp,RGB_BPTC_SIGNED_Format:()=>Tl,RGB_BPTC_UNSIGNED_Format:()=>wl,RGB_ETC1_Format:()=>il,RGB_ETC2_Format:()=>sl,RGB_PVRTC_2BPPV1_Format:()=>tl,RGB_PVRTC_4BPPV1_Format:()=>jo,RGB_S3TC_DXT1_Format:()=>ea,RGDepthPacking:()=>Xp,RGFormat:()=>Di,RGIntegerFormat:()=>Qo,RawShaderMaterial:()=>Gr,Ray:()=>Qn,Raycaster:()=>ph,RectAreaLight:()=>Uo,RedFormat:()=>$o,RedIntegerFormat:()=>ta,ReinhardToneMapping:()=>Hh,RenderObjectRefreshType:()=>Sm,RenderTarget:()=>br,RenderTarget3D:()=>ch,RepeatWrapping:()=>ki,ReplaceStencilOp:()=>$p,ReverseSubtractEquation:()=>gd,RingGeometry:()=>Qi,SIGNED_R11_EAC_Format:()=>ol,SIGNED_RED_GREEN_RGTC2_Format:()=>Rl,SIGNED_RED_RGTC1_Format:()=>Al,SIGNED_RG11_EAC_Format:()=>ll,SRGBColorSpace:()=>$e,SRGBTransfer:()=>xe,Scene:()=>Rs,ShaderChunk:()=>ue,ShaderLib:()=>ni,ShaderMaterial:()=>Fn,ShadowMaterial:()=>vo,Shape:()=>Zi,ShapeGeometry:()=>po,ShapePath:()=>Dh,ShapeUtils:()=>Nn,ShortType:()=>Qh,Skeleton:()=>qa,SkeletonHelper:()=>Mh,SkinnedMesh:()=>Ja,Source:()=>Ic,Sphere:()=>Be,SphereGeometry:()=>Ii,Spherical:()=>gh,SphericalHarmonics3:()=>qr,SplineCurve:()=>Fr,SpotLight:()=>Lo,SpotLightHelper:()=>vh,Sprite:()=>Wa,SpriteMaterial:()=>Er,SrcAlphaFactor:()=>Gh,SrcAlphaSaturateFactor:()=>Ad,SrcColorFactor:()=>Md,StaticCopyUsage:()=>pm,StaticDrawUsage:()=>Il,StaticReadUsage:()=>um,StereoCamera:()=>ih,StreamCopyUsage:()=>gm,StreamDrawUsage:()=>hm,StreamReadUsage:()=>fm,StringKeyframeTrack:()=>di,SubtractEquation:()=>md,SubtractiveBlending:()=>Bh,TOUCH:()=>Pp,TangentSpaceNormalMap:()=>mi,TetrahedronGeometry:()=>mo,Texture:()=>Le,TextureLoader:()=>jc,TextureSource:()=>Cn,TextureUtils:()=>Uh,Timer:()=>Vo,TimestampQuery:()=>xm,TorusGeometry:()=>go,TorusKnotGeometry:()=>_o,Triangle:()=>Zn,TriangleFanDrawMode:()=>kp,TriangleStripDrawMode:()=>Vp,TrianglesDrawMode:()=>Gp,TubeGeometry:()=>xo,UVMapping:()=>Jo,Uint16BufferAttribute:()=>Tr,Uint32BufferAttribute:()=>wr,Uint8BufferAttribute:()=>Uc,Uint8ClampedBufferAttribute:()=>Oc,Uniform:()=>hh,UniformsGroup:()=>uh,UniformsLib:()=>Pt,UniformsUtils:()=>Qd,UnsignedByteType:()=>_n,UnsignedInt101111Type:()=>jh,UnsignedInt248Type:()=>ss,UnsignedInt5999Type:()=>Kh,UnsignedIntType:()=>Pn,UnsignedShort4444Type:()=>Yo,UnsignedShort5551Type:()=>Zo,UnsignedShortType:()=>Ws,VSMShadowMap:()=>Vs,Vector2:()=>lt,Vector3:()=>I,Vector4:()=>ve,VectorKeyframeTrack:()=>Xr,VideoFrameTexture:()=>kc,VideoTexture:()=>Ka,WebGL3DRenderTarget:()=>Lc,WebGLArrayRenderTarget:()=>Pc,WebGLCoordinateSystem:()=>Mn,WebGLCubeRenderTarget:()=>ca,WebGLRenderTarget:()=>rn,WebGLRenderer:()=>Nl,WebGLUtils:()=>gg,WebGPUCoordinateSystem:()=>Hi,WebXRController:()=>Es,WireframeGeometry:()=>yo,WrapAroundEnding:()=>xr,ZeroCurvatureEnding:()=>Gi,ZeroFactor:()=>yd,ZeroSlopeEnding:()=>Vi,ZeroStencilOp:()=>Zp,createCanvasElement:()=>Jd,error:()=>Wt,getConsoleFunction:()=>wm,log:()=>Sr,setConsoleFunction:()=>Tm,warn:()=>Ct,warnOnce:()=>ai});var hd="187",Ip={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Pp={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ud=0,Oh=1,dd=2,Lp=3,Dp=0,ts=1,fd=2,Vs=3,Li=0,on=1,wn=2,es=0,ks=1,Fh=2,Bh=3,zh=4,pd=5,Np=6,ns=100,md=101,gd=102,_d=103,xd=104,yd=200,vd=201,Md=202,Sd=203,Gh=204,Vh=205,bd=206,Td=207,wd=208,Ed=209,Ad=210,Rd=211,Cd=212,Id=213,Pd=214,Na=0,Ua=1,Oa=2,Ms=3,Fa=4,Ba=5,za=6,Ga=7,$r=0,Ld=1,Dd=2,ei=0,kh=1,Hh=2,Wh=3,Xh=4,Jh=5,qh=6,Yh=7,Rc="attached",Nd="detached",Jo=300,fi=301,is=302,Qr=303,Kr=304,ki=1e3,fn=1001,gr=1002,Pe=1003,Zh=1004,Up=1004,Hs=1005,Op=1005,we=1006,jr=1007,Fp=1007,zn=1008,Bp=1008,_n=1009,$h=1010,Qh=1011,Ws=1012,qo=1013,Pn=1014,sn=1015,Gn=1016,Yo=1017,Zo=1018,ss=1020,Kh=35902,jh=35899,tu=1021,eu=1022,mn=1023,oi=1026,pi=1027,$o=1028,ta=1029,Di=1030,Qo=1031,zp=1032,Ko=1033,ea=33776,na=33777,ia=33778,sa=33779,jo=35840,tl=35841,el=35842,nl=35843,il=36196,sl=37492,rl=37496,al=37488,ol=37489,ra=37490,ll=37491,cl=37808,hl=37809,ul=37810,dl=37811,fl=37812,pl=37813,ml=37814,gl=37815,_l=37816,xl=37817,yl=37818,vl=37819,Ml=37820,Sl=37821,bl=36492,Tl=36494,wl=36495,El=36283,Al=36284,aa=36285,Rl=36286,Ud=2200,Od=2201,Fd=2202,_r=2300,Va=2301,Ca=2302,Cc=2303,Gi=2400,Vi=2401,xr=2402,Cl=2500,nu=2501,Gp=0,Vp=1,kp=2,Bd=3200,Hp=3201,Wp=3202,Xp=3203,mi=0,zd=1,Vn="",$e="srgb",yr="srgb-linear",vr="linear",xe="srgb",Jp="",qp="rg",Yp="ga",Zp=0,Ia=7680,$p=7681,Qp=7682,Kp=7683,jp=34055,tm=34056,em=5386,nm=512,im=513,sm=514,rm=515,am=516,om=517,lm=518,Gd=519,Vd=512,kd=513,Hd=514,iu=515,Wd=516,Xd=517,su=518,ru=519,Il=35044,cm=35048,hm=35040,um=35045,dm=35049,fm=35041,pm=35046,mm=35050,gm=35042,_m="100",au="300 es",Mn=2e3,Hi=2001,xm={COMPUTE:"compute",RENDER:"render"},ym={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},vm={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},Mm={TEXTURE_COMPARE:"depthTextureCompare"},Sm={NONE:0,SHARED:1,FULL:2};function Mg(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}var Sg={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function fr(s,t){return new Sg[s](t)}function bm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Mr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Jd(){let s=Mr("canvas");return s.style.display="block",s}var gf={},Wi=null;function Tm(s){Wi=s}function wm(){return Wi}function Sr(...s){let t="THREE."+s.shift();Wi?Wi("log",t,...s):console.log(t,...s)}function Em(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ct(...s){s=Em(s);let t="THREE."+s.shift();if(Wi)Wi("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Wt(...s){s=Em(s);let t="THREE."+s.shift();if(Wi)Wi("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function ai(...s){let t=s.join(" ");t in gf||(gf[t]=!0,Ct(...s))}function Am(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Rm={[Na]:Na,[Oa]:za,[Fa]:Fa,[Ms]:Ba,[Ua]:Ua,[za]:Oa,[Ga]:Ga,[Ba]:Ms},Sn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_f=1234567,vs=Math.PI/180,Ss=180/Math.PI;function kn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[s&255]+je[s>>8&255]+je[s>>16&255]+je[s>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function jt(s,t,e){return Math.max(t,Math.min(e,s))}function qd(s,t){return(s%t+t)%t}function bg(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Tg(s,t,e){return s!==t?(e-s)/(t-s):0}function Pa(s,t,e){return(1-e)*s+e*t}function wg(s,t,e,n){return Pa(s,t,1-Math.exp(-e*n))}function Eg(s,t=1){return t-Math.abs(qd(s,t*2)-t)}function Ag(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Rg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Cg(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Ig(s,t){return s+Math.random()*(t-s)}function Pg(s){return s*(.5-Math.random())}function Lg(s){s!==void 0&&(_f=s);let t=_f+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Dg(s){return s*vs}function Ng(s){return s*Ss}function Ug(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Og(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Yd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Fg(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),p=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*h,o*c);break;default:Ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ou(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ys(s,t){if(t.constructor===Float32Array)return s;let e=ou(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function nn(s,t){if(t.constructor===Float32Array)return s;let e=ou(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var oa={DEG2RAD:vs,RAD2DEG:Ss,generateUUID:kn,clamp:jt,euclideanModulo:qd,mapLinear:bg,inverseLerp:Tg,lerp:Pa,damp:wg,pingpong:Eg,smoothstep:Ag,smootherstep:Rg,randInt:Cg,randFloat:Ig,randFloatSpread:Pg,seededRandom:Lg,degToRad:Dg,radToDeg:Ng,isPowerOfTwo:Ug,ceilPowerOfTwo:Og,floorPowerOfTwo:Yd,setQuaternionFromProperEuler:Fg,normalize:nn,denormalize:ys},lt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(u!==_||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*_;m<0&&(d=-d,f=-f,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){let y=Math.acos(m),M=Math.sin(y);g=Math.sin(g*y)/M,o=Math.sin(o*y)/M,l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+_*o}else{l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+_*o;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-o*f,t[e+2]=c*p+h*f+o*d-l*u,t[e+3]=h*p-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mu.copy(this).projectOnVector(t),this.sub(mu)}reflect(t){return this.sub(mu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mu=new I,xf=new Ye,re=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=i[0],m=i[3],g=i[6],y=i[1],M=i[4],v=i[7],E=i[2],w=i[5],x=i[8];return r[0]=a*_+o*y+l*E,r[3]=a*m+o*M+l*w,r[6]=a*g+o*v+l*x,r[1]=c*_+h*y+u*E,r[4]=c*m+h*M+u*w,r[7]=c*g+h*v+u*x,r[2]=d*_+f*y+p*E,r[5]=d*m+f*M+p*w,r[8]=d*g+f*v+p*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=e*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ai("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gu.makeScale(t,e)),this}rotate(t){return ai("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gu.makeRotation(-t)),this}translate(t,e){return ai("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},gu=new re,yf=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vf=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bg(){let s={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xe&&(i.r=Ai(i.r),i.g=Ai(i.g),i.b=Ai(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xe&&(i.r=mr(i.r),i.g=mr(i.g),i.b=mr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Vn?vr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[yr]:{primaries:t,whitePoint:n,transfer:vr,toXYZ:yf,fromXYZ:vf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:yf,fromXYZ:vf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),s}var pe=Bg();function Ai(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function mr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var qs,ka=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qs===void 0&&(qs=Mr("canvas")),qs.width=t.width,qs.height=t.height;let i=qs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=qs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Mr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ai(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ai(e[n]/255)*255):e[n]=Ai(e[n]);return{data:e,width:t.width,height:t.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zg=0,Cn=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=kn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(_u(i[a].image)):r.push(_u(i[a]))}else r=_u(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function _u(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ka.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}var Ic=class extends Cn{constructor(t=null){ai('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(t),this.isSource=!0}},Gg=0,xu=new I,Le=class s extends Sn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=fn,i=fn,r=we,a=zn,o=mn,l=_n,c=s.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=kn(),this.name="",this.source=new Cn(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(xu).x}get height(){return this.source.getSize(xu).y}get depth(){return this.source.getSize(xu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ct(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ct(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ki:t.x=t.x-Math.floor(t.x);break;case fn:t.x=t.x<0?0:1;break;case gr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ki:t.y=t.y-Math.floor(t.y);break;case fn:t.y=t.y<0?0:1;break;case gr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Jo;Le.DEFAULT_ANISOTROPY=1;var ve=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(f+1)/2,E=(g+1)/2,w=(h+d)/4,x=(u+_)/4,b=(p+m)/4;return M>v&&M>E?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=w/n,r=x/n):v>E?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=b/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=x/r,i=b/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},br=class extends Sn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:we,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Le({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:we,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Cn(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends br{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},bs=class extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Pc=class extends rn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new bs(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},Ts=class extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},Lc=class extends rn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Ts(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},ne=class s{static{this.prototype.isMatrix4=!0}constructor(t,e,n,i,r,a,o,l,c,h,u,d,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,f,p,_,m)}set(t,e,n,i,r,a,o,l,c,h,u,d,f,p,_,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Ys.setFromMatrixColumn(t,0).length(),r=1/Ys.setFromMatrixColumn(t,1).length(),a=1/Ys.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,p=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d+_*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,p=o*h,_=o*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,p=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=p*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-_*u}else if(t.order==="XZY"){let d=a*l,f=a*c,p=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vg,t,kg)}lookAt(t,e,n){let i=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),Ni.crossVectors(n,An),Ni.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Ni.crossVectors(n,An)),Ni.normalize(),zl.crossVectors(An,Ni),i[0]=Ni.x,i[4]=zl.x,i[8]=An.x,i[1]=Ni.y,i[5]=zl.y,i[9]=An.y,i[2]=Ni.z,i[6]=zl.z,i[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],y=n[3],M=n[7],v=n[11],E=n[15],w=i[0],x=i[4],b=i[8],D=i[12],C=i[1],U=i[5],z=i[9],X=i[13],P=i[2],H=i[6],Z=i[10],W=i[14],dt=i[3],q=i[7],st=i[11],at=i[15];return r[0]=a*w+o*C+l*P+c*dt,r[4]=a*x+o*U+l*H+c*q,r[8]=a*b+o*z+l*Z+c*st,r[12]=a*D+o*X+l*W+c*at,r[1]=h*w+u*C+d*P+f*dt,r[5]=h*x+u*U+d*H+f*q,r[9]=h*b+u*z+d*Z+f*st,r[13]=h*D+u*X+d*W+f*at,r[2]=p*w+_*C+m*P+g*dt,r[6]=p*x+_*U+m*H+g*q,r[10]=p*b+_*z+m*Z+g*st,r[14]=p*D+_*X+m*W+g*at,r[3]=y*w+M*C+v*P+E*dt,r[7]=y*x+M*U+v*H+E*q,r[11]=y*b+M*z+v*Z+E*st,r[15]=y*D+M*X+v*W+E*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],_=t[7],m=t[11],g=t[15],y=l*f-c*d,M=o*f-c*u,v=o*d-l*u,E=a*f-c*h,w=a*d-l*h,x=a*u-o*h;return e*(_*y-m*M+g*v)-n*(p*y-m*E+g*w)+i*(p*M-_*E+g*x)-r*(p*v-_*w+m*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],_=t[13],m=t[14],g=t[15],y=e*o-n*a,M=e*l-i*a,v=e*c-r*a,E=n*l-i*o,w=n*c-r*o,x=i*c-r*l,b=h*_-u*p,D=h*m-d*p,C=h*g-f*p,U=u*m-d*_,z=u*g-f*_,X=d*g-f*m,P=y*X-M*z+v*U+E*C-w*D+x*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/P;return t[0]=(o*X-l*z+c*U)*H,t[1]=(i*z-n*X-r*U)*H,t[2]=(_*x-m*w+g*E)*H,t[3]=(d*w-u*x-f*E)*H,t[4]=(l*C-a*X-c*D)*H,t[5]=(e*X-i*C+r*D)*H,t[6]=(m*v-p*x-g*M)*H,t[7]=(h*x-d*v+f*M)*H,t[8]=(a*z-o*C+c*b)*H,t[9]=(n*C-e*z-r*b)*H,t[10]=(p*w-_*v+g*y)*H,t[11]=(u*v-h*w-f*y)*H,t[12]=(o*D-a*U-l*b)*H,t[13]=(e*U-n*D+i*b)*H,t[14]=(_*M-p*E-m*y)*H,t[15]=(h*E-u*M+d*y)*H,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,_=a*h,m=a*u,g=o*u,y=l*c,M=l*h,v=l*u,E=n.x,w=n.y,x=n.z;return i[0]=(1-(_+g))*E,i[1]=(f+v)*E,i[2]=(p-M)*E,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(d+g))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(p+M)*x,i[9]=(m-y)*x,i[10]=(1-(d+_))*x,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ys.set(i[0],i[1],i[2]).length(),o=Ys.set(i[4],i[5],i[6]).length(),l=Ys.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Xn.copy(this);let c=1/a,h=1/o,u=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=u,Xn.elements[9]*=u,Xn.elements[10]*=u,e.setFromRotationMatrix(Xn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=Mn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===Mn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Hi)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Mn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i),p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===Mn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===Hi)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ys=new I,Xn=new ne,Vg=new I(0,0,0),kg=new I(1,1,1),Ni=new I,zl=new I,An=new I,Mf=new ne,Sf=new Ye,Un=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sf.setFromEuler(this),this.setFromQuaternion(Sf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Un.DEFAULT_ORDER="XYZ";var ws=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hg=0,bf=new I,Zs=new Ye,vi=new ne,Gl=new I,ga=new I,Wg=new I,Xg=new Ye,Tf=new I(1,0,0),wf=new I(0,1,0),Ef=new I(0,0,1),Af={type:"added"},Jg={type:"removed"},$s={type:"childadded",child:null},yu={type:"childremoved",child:null},ge=class s extends Sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new I,e=new Un,n=new Ye,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new re}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.premultiply(Zs),this}rotateX(t){return this.rotateOnAxis(Tf,t)}rotateY(t){return this.rotateOnAxis(wf,t)}rotateZ(t){return this.rotateOnAxis(Ef,t)}translateOnAxis(t,e){return bf.copy(t).applyQuaternion(this.quaternion),this.position.add(bf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tf,t)}translateY(t){return this.translateOnAxis(wf,t)}translateZ(t){return this.translateOnAxis(Ef,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gl.copy(t):Gl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(ga,Gl,this.up):vi.lookAt(Gl,ga,this.up),this.quaternion.setFromRotationMatrix(vi),i&&(vi.extractRotation(i.matrixWorld),Zs.setFromRotationMatrix(vi),this.quaternion.premultiply(Zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Af),$s.child=t,this.dispatchEvent($s),$s.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jg),yu.child=t,this.dispatchEvent(yu),yu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Af),$s.child=t,this.dispatchEvent($s),$s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,t,Wg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,Xg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ge.DEFAULT_UP=new I(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qe=class extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},qg={type:"move"},Es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Qe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Cm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Vl={h:0,s:0,l:0};function vu(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Lt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=pe.workingColorSpace){if(t=qd(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=vu(a,r,t+1/3),this.g=vu(a,r,t),this.b=vu(a,r,t-1/3)}return pe.colorSpaceToWorking(this,i),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&Ct("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ct("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let n=Cm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return pe.workingToColorSpace(tn.copy(this),t),Math.round(jt(tn.r*255,0,255))*65536+Math.round(jt(tn.g*255,0,255))*256+Math.round(jt(tn.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(tn.copy(this),e);let n=tn.r,i=tn.g,r=tn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=$e){pe.workingToColorSpace(tn.copy(this),t);let e=tn.r,n=tn.g,i=tn.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(Vl);let n=Pa(Ui.h,Vl.h,e),i=Pa(Ui.s,Vl.s,e),r=Pa(Ui.l,Vl.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new Lt;Lt.NAMES=Cm;var As=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Lt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Ha=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rs=class extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Jn=new I,Mi=new I,Mu=new I,Si=new I,Qs=new I,Ks=new I,Rf=new I,Su=new I,bu=new I,Tu=new I,wu=new ve,Eu=new ve,Au=new ve,Zn=class s{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Jn.subVectors(t,e),i.cross(Jn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Jn.subVectors(i,e),Mi.subVectors(n,e),Mu.subVectors(t,e);let a=Jn.dot(Jn),o=Jn.dot(Mi),l=Jn.dot(Mu),c=Mi.dot(Mi),h=Mi.dot(Mu),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(a,Si.y),l.addScaledVector(o,Si.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return wu.setScalar(0),Eu.setScalar(0),Au.setScalar(0),wu.fromBufferAttribute(t,e),Eu.fromBufferAttribute(t,n),Au.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(wu,r.x),a.addScaledVector(Eu,r.y),a.addScaledVector(Au,r.z),a}static isFrontFacing(t,e,n,i){return Jn.subVectors(n,e),Mi.subVectors(t,e),Jn.cross(Mi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Jn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Jn.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Qs.subVectors(i,n),Ks.subVectors(r,n),Su.subVectors(t,n);let l=Qs.dot(Su),c=Ks.dot(Su);if(l<=0&&c<=0)return e.copy(n);bu.subVectors(t,i);let h=Qs.dot(bu),u=Ks.dot(bu);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(Qs,a);Tu.subVectors(t,r);let f=Qs.dot(Tu),p=Ks.dot(Tu);if(p>=0&&f<=p)return e.copy(r);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(Ks,o);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return Rf.subVectors(r,i),o=(u-h)/(u-h+(f-p)),e.copy(i).addScaledVector(Rf,o);let g=1/(m+_+d);return a=_*g,o=d*g,e.copy(n).addScaledVector(Qs,a).addScaledVector(Ks,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Oe=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,qn):qn.fromBufferAttribute(r,a),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kl.copy(n.boundingBox)),kl.applyMatrix4(t.matrixWorld),this.union(kl)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_a),Hl.subVectors(this.max,_a),js.subVectors(t.a,_a),tr.subVectors(t.b,_a),er.subVectors(t.c,_a),Oi.subVectors(tr,js),Fi.subVectors(er,tr),ls.subVectors(js,er);let e=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-ls.z,ls.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,ls.z,0,-ls.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-ls.y,ls.x,0];return!Ru(e,js,tr,er,Hl)||(e=[1,0,0,0,1,0,0,0,1],!Ru(e,js,tr,er,Hl))?!1:(Wl.crossVectors(Oi,Fi),e=[Wl.x,Wl.y,Wl.z],Ru(e,js,tr,er,Hl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},bi=[new I,new I,new I,new I,new I,new I,new I,new I],qn=new I,kl=new Oe,js=new I,tr=new I,er=new I,Oi=new I,Fi=new I,ls=new I,_a=new I,Hl=new I,Wl=new I,cs=new I;function Ru(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){cs.fromArray(s,r);let o=i.x*Math.abs(cs.x)+i.y*Math.abs(cs.y)+i.z*Math.abs(cs.z),l=t.dot(cs),c=e.dot(cs),h=n.dot(cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ei=Yg();function Yg(){let s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function vn(s){Math.abs(s)>65504&&Ct("DataUtils.toHalfFloat(): Value out of range."),s=jt(s,-65504,65504),Ei.floatView[0]=s;let t=Ei.uint32View[0],e=t>>23&511;return Ei.baseTable[e]+((t&8388607)>>Ei.shiftTable[e])}function Aa(s){let t=s>>10;return Ei.uint32View[0]=Ei.mantissaTable[Ei.offsetTable[t]+(s&1023)]+Ei.exponentTable[t],Ei.floatView[0]}var Dc=class{static toHalfFloat(t){return vn(t)}static fromHalfFloat(t){return Aa(t)}},Fe=new I,Xl=new lt,Zg=0,be=class extends Sn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Il,this.updateRanges=[],this.gpuType=sn,this.version=0,this._normalizationScale=t!==void 0?ou(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xl.fromBufferAttribute(this,e),Xl.applyMatrix3(t),this.setXY(e,Xl.x,Xl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ys(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):nn(t,this.array)}},Nc=class extends be{constructor(t,e,n){super(new Int8Array(t),e,n)}},Uc=class extends be{constructor(t,e,n){super(new Uint8Array(t),e,n)}},Oc=class extends be{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}},Fc=class extends be{constructor(t,e,n){super(new Int16Array(t),e,n)}},Tr=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}},Bc=class extends be{constructor(t,e,n){super(new Int32Array(t),e,n)}},wr=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}},zc=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=Aa(this.array[t*this.itemSize]);return this.normalized&&(e=ys(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=vn(e),this}getY(t){let e=Aa(this.array[t*this.itemSize+1]);return this.normalized&&(e=ys(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=vn(e),this}getZ(t){let e=Aa(this.array[t*this.itemSize+2]);return this.normalized&&(e=ys(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=vn(e),this}getW(t){let e=Aa(this.array[t*this.itemSize+3]);return this.normalized&&(e=ys(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=vn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array)),this.array[t+0]=vn(e),this.array[t+1]=vn(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),i=nn(i,this.array)),this.array[t+0]=vn(e),this.array[t+1]=vn(n),this.array[t+2]=vn(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[t+0]=vn(e),this.array[t+1]=vn(n),this.array[t+2]=vn(i),this.array[t+3]=vn(r),this}},Ot=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}},$g=new Oe,xa=new I,Cu=new I,Be=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$g.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xa.subVectors(t,this.center);let e=xa.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(xa,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xa.copy(t.center).add(Cu)),this.expandByPoint(xa.copy(t.center).sub(Cu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Qg=0,Ln=new ne,Iu=new ge,nr=new I,Rn=new Oe,ya=new Oe,qe=new I,he=class s extends Sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mg(t)?wr:Tr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,n){return Ln.makeTranslation(t,e,n),this.applyMatrix4(Ln),this}scale(t,e,n){return Ln.makeScale(t,e,n),this.applyMatrix4(Ln),this}lookAt(t){return Iu.lookAt(t),Iu.updateMatrix(),this.applyMatrix4(Iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ot(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Be);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ya.setFromBufferAttribute(o),this.morphTargetsRelative?(qe.addVectors(Rn.min,ya.min),Rn.expandByPoint(qe),qe.addVectors(Rn.max,ya.max),Rn.expandByPoint(qe)):(Rn.expandByPoint(ya.min),Rn.expandByPoint(ya.max))}Rn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)qe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(qe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)qe.fromBufferAttribute(o,c),l&&(nr.fromBufferAttribute(t,c),qe.add(nr)),i=Math.max(i,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new be(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new I,l[D]=new I;let h=new I,u=new I,d=new I,f=new lt,p=new lt,_=new lt,m=new I,g=new I;function y(D,C,U){c[D]=c[C]=c[U]=1,h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,U),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,C),_.fromBufferAttribute(r,U),u.sub(h),d.sub(h),p.sub(f),_.sub(f);let z=1/(p.x*_.y-_.x*p.y);isFinite(z)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(z),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(z),o[D].add(m),o[C].add(m),o[U].add(m),l[D].add(g),l[C].add(g),l[U].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let D=0,C=M.length;D<C;++D){let U=M[D],z=U.start,X=U.count;for(let P=z,H=z+X;P<H;P+=3)y(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let v=new I,E=new I,w=new I,x=new I;function b(D){w.fromBufferAttribute(i,D),x.copy(w);let C=o[D];v.copy(C),v.sub(w.multiplyScalar(w.dot(C))).normalize(),E.crossVectors(x,C);let z=E.dot(l[D])<0?-1:1;a.setXYZW(D,v.x,v.y,v.z,z)}for(let D=0,C=n.count;D<C;++D)c[D]&&b(D);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new be(d,h,u)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cs=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Il,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Cf(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Cf(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Cf(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=kn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var dn=new I,Xi=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?ou(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Sr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Sr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ys(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):nn(t,this.data.array)}},Pu=new I,Kg=new I,jg=new re,Dn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Pu.subVectors(n,e).cross(Kg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Pu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||jg.getNormalMatrix(t),i=this.coplanarPoint(Pu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},t0=0,ze=class extends Sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=ks,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gh,this.blendDst=Vh,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ia,this.stencilZFail=Ia,this.stencilZPass=Ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ct(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ct(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Dn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Er=class extends ze{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ir,va=new I,sr=new I,rr=new I,ar=new lt,Ma=new lt,Im=new ne,Jl=new I,Sa=new I,ql=new I,If=new lt,Lu=new lt,Pf=new lt,Wa=class extends ge{constructor(t=new Er){if(super(),this.isSprite=!0,this.type="Sprite",ir===void 0){ir=new he;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Cs(e,5);ir.setIndex([0,1,2,0,2,3]),ir.setAttribute("position",new Xi(n,3,0,!1)),ir.setAttribute("uv",new Xi(n,2,3,!1))}this.geometry=ir,this.material=t,this.center=new lt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Wt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),sr.setFromMatrixScale(this.matrixWorld),Im.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),rr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&sr.multiplyScalar(-rr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Yl(Jl.set(-.5,-.5,0),rr,a,sr,i,r),Yl(Sa.set(.5,-.5,0),rr,a,sr,i,r),Yl(ql.set(.5,.5,0),rr,a,sr,i,r),If.set(0,0),Lu.set(1,0),Pf.set(1,1);let o=t.ray.intersectTriangle(Jl,Sa,ql,!1,va);if(o===null&&(Yl(Sa.set(-.5,.5,0),rr,a,sr,i,r),Lu.set(0,1),o=t.ray.intersectTriangle(Jl,ql,Sa,!1,va),o===null))return;let l=t.ray.origin.distanceTo(va);l<t.near||l>t.far||e.push({distance:l,point:va.clone(),uv:Zn.getInterpolation(va,Jl,Sa,ql,If,Lu,Pf,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Yl(s,t,e,n,i,r){ar.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ma.x=r*ar.x-i*ar.y,Ma.y=i*ar.x+r*ar.y):Ma.copy(ar),s.copy(t),s.x+=Ma.x,s.y+=Ma.y,s.applyMatrix4(Im)}var Zl=new I,Lf=new I,Xa=class extends ge{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);let e=t.levels;for(let n=0,i=e.length;n<i;n++){let r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);let i=this.levels,r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){let e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){let i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){let e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){Zl.setFromMatrixPosition(this.matrixWorld);let i=t.ray.origin.distanceTo(Zl);this.getObjectForDistance(i).raycast(t,e)}}update(t){let e=this.levels;if(e.length>1){Zl.setFromMatrixPosition(t.matrixWorld),Lf.setFromMatrixPosition(this.matrixWorld);let n=Zl.distanceTo(Lf)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let a=e[i].distance;if(e[i].object.visible&&(a-=a*e[i].hysteresis),n>=a)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){let e=super.toJSON(t);e.object.autoUpdate=this.autoUpdate,e.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let a=n[i];e.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return e}},Ti=new I,Du=new I,$l=new I,Ql=new I,Qn=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ti.copy(this.origin).addScaledVector(this.direction,e),Ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Du.copy(t).add(e).multiplyScalar(.5),$l.copy(e).sub(t).normalize(),Ql.copy(this.origin).sub(Du);let r=t.distanceTo(e)*.5,a=-this.direction.dot($l),o=Ql.dot(this.direction),l=-Ql.dot($l),c=Ql.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Du).addScaledVector($l,d),f}intersectSphere(t,e){if(t.radius<0)return null;Ti.subVectors(t.center,this.origin);let n=Ti.dot(this.direction),i=Ti.dot(Ti)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ti)!==null}intersectTriangle(t,e,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,p=e.x-a.x,_=e.y-a.y,m=e.z-a.z,g=n.x-a.x,y=n.y-a.y,M=n.z-a.z,v=Math.abs(l),E=Math.abs(c),w=Math.abs(h),x,b,D,C,U,z,X,P,H,Z,W,dt;if(v>=E&&v>=w?(D=l,z=u,H=p,dt=g,l>=0?(x=c,b=h,C=d,U=f,X=_,P=m,Z=y,W=M):(x=h,b=c,C=f,U=d,X=m,P=_,Z=M,W=y)):E>=w?(D=c,z=d,H=_,dt=y,c>=0?(x=h,b=l,C=f,U=u,X=m,P=p,Z=M,W=g):(x=l,b=h,C=u,U=f,X=p,P=m,Z=g,W=M)):(D=h,z=f,H=m,dt=M,h>=0?(x=l,b=c,C=u,U=d,X=p,P=_,Z=g,W=y):(x=c,b=l,C=d,U=u,X=_,P=p,Z=y,W=g)),D===0)return null;let q=x/D,st=b/D,at=1/D,Ft=C-q*z,Mt=U-st*z,j=X-q*H,Rt=P-st*H,Nt=Z-q*dt,qt=W-st*dt,xt=Nt*Rt-qt*j,Gt=Ft*qt-Mt*Nt,Me=j*Mt-Rt*Ft;if(i){if(xt<0||Gt<0||Me<0)return null}else if((xt<0||Gt<0||Me<0)&&(xt>0||Gt>0||Me>0))return null;let Jt=xt+Gt+Me;if(Jt===0)return null;let ie=at*(xt*z+Gt*H+Me*dt);return(Jt>0?ie<0:ie>0)?null:this.at(ie/Jt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},an=class extends ze{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=$r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Df=new ne,hs=new Qn,Kl=new Be,Nf=new I,jl=new I,tc=new I,ec=new I,Nu=new I,nc=new I,Uf=new I,ic=new I,Ee=class extends ge{constructor(t=new he,e=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){nc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Nu.fromBufferAttribute(u,t),a?nc.addScaledVector(Nu,h):nc.addScaledVector(Nu.sub(e),h))}e.add(nc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kl.copy(n.boundingSphere),Kl.applyMatrix4(r),hs.copy(t.ray).recast(t.near),!(Kl.containsPoint(hs.origin)===!1&&(hs.intersectSphere(Kl,Nf)===null||hs.origin.distanceToSquared(Nf)>(t.far-t.near)**2))&&(Df.copy(r).invert(),hs.copy(t.ray).applyMatrix4(Df),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hs)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){let m=d[p],g=a[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,E=M;v<E;v+=3){let w=o.getX(v),x=o.getX(v+1),b=o.getX(v+2);i=sc(this,g,t,n,c,h,u,w,x,b),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let y=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);i=sc(this,a,t,n,c,h,u,y,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){let m=d[p],g=a[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,E=M;v<E;v+=3){let w=v,x=v+1,b=v+2;i=sc(this,g,t,n,c,h,u,w,x,b),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let y=m,M=m+1,v=m+2;i=sc(this,a,t,n,c,h,u,y,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function e0(s,t,e,n,i,r,a,o){let l;if(t.side===on?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Li,o),l===null)return null;ic.copy(o),ic.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(ic);return c<e.near||c>e.far?null:{distance:c,point:ic.clone(),object:s}}function sc(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,jl),s.getVertexPosition(l,tc),s.getVertexPosition(c,ec);let h=e0(s,t,e,n,jl,tc,ec,Uf);if(h){let u=new I;Zn.getBarycoord(Uf,jl,tc,ec,u),i&&(h.uv=Zn.getInterpolatedAttribute(i,o,l,c,u,new lt)),r&&(h.uv1=Zn.getInterpolatedAttribute(r,o,l,c,u,new lt)),a&&(h.normal=Zn.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new I,materialIndex:0};Zn.getNormal(jl,tc,ec,d.normal),h.face=d,h.barycoord=u}return h}var ba=new ve,Of=new ve,Ff=new ve,n0=new ve,Bf=new ne,rc=new I,Uu=new Be,zf=new ne,Ou=new Qn,Ja=class extends Ee{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rc,this.bindMatrix=new ne,this.bindMatrixInverse=new ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Oe),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,rc),this.boundingBox.expandByPoint(rc)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Be),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,rc),this.boundingSphere.expandByPoint(rc)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uu.copy(this.boundingSphere),Uu.applyMatrix4(i),t.ray.intersectsSphere(Uu)!==!1&&(zf.copy(i).invert(),Ou.copy(t.ray).applyMatrix4(zf),!(this.boundingBox!==null&&Ou.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ou)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ve,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Rc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Nd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ct("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;Of.fromBufferAttribute(i.attributes.skinIndex,t),Ff.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(ba.copy(e),e.set(0,0,0,0)):(ba.set(e.x,e.y,e.z,1),e.set(0,0,0)),ba.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Ff.getComponent(r);if(a!==0){let o=Of.getComponent(r);Bf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(n0.copy(ba).applyMatrix4(Bf),a)}}return e.isVector4&&(e.w=ba.w),e.applyMatrix4(this.bindMatrixInverse)}},Ar=class extends ge{constructor(){super(),this.isBone=!0,this.type="Bone"}},pn=class extends Le{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Pe,h=Pe,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gf=new ne,i0=new ne,qa=class s{constructor(t=[],e=[]){this.uuid=kn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Ct("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ne)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new ne;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){let o=t[r]?t[r].matrixWorld:i0;Gf.multiplyMatrices(o,e[r]),Gf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new pn(e,t,t,mn,sn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],a=e[r];a===void 0&&(Ct("Skeleton: No bone found with UUID:",r),a=new Ar),this.bones.push(a),this.boneInverses.push(new ne().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let a=e[i];t.bones.push(a.uuid);let o=n[i];t.boneInverses.push(o.toArray())}return t}},Ri=class extends be{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},or=new ne,Vf=new ne,ac=[],kf=new Oe,s0=new ne,Ta=new Ee,wa=new Be,Ya=class extends Ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ri(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,s0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Oe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,or),kf.copy(t.boundingBox).applyMatrix4(or),this.boundingBox.union(kf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Be),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,or),wa.copy(t.boundingSphere).applyMatrix4(or),this.boundingSphere.union(wa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ta.geometry=this.geometry,Ta.material=this.material,Ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wa.copy(this.boundingSphere),wa.applyMatrix4(n),t.ray.intersectsSphere(wa)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,or),Vf.multiplyMatrices(n,or),Ta.matrixWorld=Vf,Ta.raycast(t,ac);for(let a=0,o=ac.length;a<o;a++){let l=ac[a];l.instanceId=r,l.object=this,e.push(l)}ac.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ri(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new pn(new Float32Array(i*this.count),i,this.count,$o,sn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},us=new Be,r0=new lt(.5,.5),oc=new I,li=class{constructor(t=new Dn,e=new Dn,n=new Dn,i=new Dn,r=new Dn,a=new Dn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],m=r[10],g=r[11],y=r[12],M=r[13],v=r[14],E=r[15];if(i[0].setComponents(c-a,f-h,g-p,E-y).normalize(),i[1].setComponents(c+a,f+h,g+p,E+y).normalize(),i[2].setComponents(c+o,f+u,g+_,E+M).normalize(),i[3].setComponents(c-o,f-u,g-_,E-M).normalize(),n)i[4].setComponents(l,d,m,v).normalize(),i[5].setComponents(c-l,f-d,g-m,E-v).normalize();else if(i[4].setComponents(c-l,f-d,g-m,E-v).normalize(),e===Mn)i[5].setComponents(c+l,f+d,g+m,E+v).normalize();else if(e===Hi)i[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(t){us.center.set(0,0,0);let e=r0.distanceTo(t.center);return us.radius=.7071067811865476+e,us.applyMatrix4(t.matrixWorld),this.intersectsSphere(us)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(oc.x=i.normal.x>0?t.max.x:t.min.x,oc.y=i.normal.y>0?t.max.y:t.min.y,oc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(oc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Hf=new ne,Rr=class s{constructor(){this.coordinateSystem=Mn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];Hf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new li),n[i].setFromProjectionMatrix(Hf,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new li),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};function Fu(s,t){return s-t}function a0(s,t){return s.z-t.z}function o0(s,t){return t.z-s.z}var Ku=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];a.push(o),this.index++,o.start=t,o.count=e,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},yn=new ne,l0=new Lt(1,1,1),c0=new li,h0=new Rr,lc=new Oe,ds=new Be,Bu=new I,Wf=new I,Xf=new I,u0=new I,zu=new Ku,en=new Ee,cc=[];function d0(s,t,e=0){let n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)t.setComponent(r+e,a,s.getComponent(r,a))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function si(s,t){if(s.constructor!==t.constructor){let e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{let e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}var Za=class extends Ee{constructor(t,e,n=e*2,i){super(new he,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._mergedDrawCounts=new Int32Array(t),this._mergedDrawStarts=new Int32Array(t),this._mergedDrawInstanceCounts=new Int32Array(t),this._mergedDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._previousMatricesTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4),n=new pn(e,t,t,mn,sn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Uint32Array(t*t),n=new pn(e,t,t,ta,Pn);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Float32Array(t*t*4).fill(1),n=new pn(e,t,t,mn,sn);n.colorSpace=pe.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){let e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in t.attributes){let a=t.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),u=new be(h,l,c);e.setAttribute(r,u)}if(t.getIndex()!==null){let r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new be(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){let e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error(`THREE.BatchedMesh: Added geometry attribute "${n}" has an inconsistent itemSize or normalized value.`)}}validateInstanceId(t){let e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){let e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oe);let t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,yn),this.getBoundingBoxAt(r,lc).applyMatrix4(yn),t.union(lc)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Be);let t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,yn),this.getBoundingSphereAt(r,ds).applyMatrix4(yn),t.union(ds)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:t},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Fu),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;yn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;let a=this._colorsTexture;return a&&(l0.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;let a=t.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Fu),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=e.getIndex(),o=this._geometryInfo[t];if(i&&a.count>o.reservedIndexCount||e.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=e.getAttribute("position").count;for(let h in n.attributes){let u=e.getAttribute(h),d=n.getAttribute(h);d0(u,d,l);let f=u.itemSize;for(let p=u.count,_=c;p<_;p++){let m=l+p;for(let g=0;g<f;g++)d.setComponent(m,g,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(i){let h=o.indexStart,u=o.reservedIndexCount;o.indexCount=e.getIndex().count;for(let d=0;d<a.count;d++)r.setX(h+d,l+a.getX(d));for(let d=a.count,f=u;d<f;d++)r.setX(h+d,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,e.boundingBox!==null&&(o.boundingBox=e.boundingBox.clone()),o.boundingSphere=null,e.boundingSphere!==null&&(o.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){let e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;let n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0,n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){let l=i[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){let{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,f=r.index,p=f.array,_=t-u;for(let m=h;m<h+d;m++)p[m]=p[m]+_;f.array.copyWithin(e,h,h+d),f.addUpdateRange(e,d),f.needsUpdate=!0,c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){let{vertexStart:h,reservedVertexCount:u}=c,d=r.attributes;for(let f in d){let p=d[f],{array:_,itemSize:m}=p;_.copyWithin(t*m,h*m,(h+u)*m),p.addUpdateRange(t*m,u*m),p.needsUpdate=!0}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){let r=new Oe,a=n.index,o=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(Bu.fromBufferAttribute(o,h))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){let r=new Be;this.getBoundingBoxAt(t,lc),lc.getCenter(r.center);let a=n.index,o=n.attributes.position,l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let u=c;a&&(u=a.getX(u)),Bu.fromBufferAttribute(o,u),l=Math.max(l,r.center.distanceToSquared(Bu))}r.radius=Math.sqrt(l),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);let n=this._matricesTexture,i=this._matricesTexture.image.data;return e.toArray(i,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null?e.isVector4?e.set(1,1,1,1):e.setRGB(1,1,1):e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this._visibilityChanged=!0,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);let n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){let e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(Fu);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);let i=new Int32Array(t),r=new Int32Array(t);si(this._multiDrawCounts,i),si(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r;let a=new Int32Array(t),o=new Int32Array(t),l=new Int32Array(t);si(this._mergedDrawCounts,a),si(this._mergedDrawStarts,o),si(this._mergedDrawInstanceCounts,l),this._mergedDrawCounts=a,this._mergedDrawStarts=o,this._mergedDrawInstanceCounts=l,this._maxInstanceCount=t;let c=this._indirectTexture,h=this._matricesTexture,u=this._colorsTexture;c.dispose(),this._initIndirectTexture(),si(c.image.data,this._indirectTexture.image.data),h.dispose(),this._initMatricesTexture(),si(h.image.data,this._matricesTexture.image.data),u&&(u.dispose(),this._initColorsTexture(),si(u.image.data,this._colorsTexture.image.data)),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}setGeometrySize(t,e){let n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new he,this._initializeGeometry(r));let a=this.geometry;r.index&&si(r.index.array,a.index.array);for(let o in r.attributes)si(r.attributes[o].array,a.attributes[o].array);this._visibilityChanged=!0}raycast(t,e){let n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,a=this.geometry;en.material=this.material,en.geometry.index=a.index,en.geometry.attributes=a.attributes,en.geometry.boundingBox===null&&(en.geometry.boundingBox=new Oe),en.geometry.boundingSphere===null&&(en.geometry.boundingSphere=new Be);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;let c=n[o].geometryIndex,h=i[c];en.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,en.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,en.geometry.boundingBox),this.getBoundingSphereAt(c,en.geometry.boundingSphere),en.raycast(t,cc);for(let u=0,d=cc.length;u<d;u++){let f=cc[u];f.object=this,f.batchId=o,e.push(f)}cc.length=0}en.material=null,en.geometry.index=null,en.geometry.attributes={},en.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._multiDrawBytesPerElement=t._multiDrawBytesPerElement,this._mergedDrawCounts=t._mergedDrawCounts.slice(),this._mergedDrawStarts=t._mergedDrawStarts.slice(),this._mergedDrawInstanceCounts=t._mergedDrawInstanceCounts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),t._colorsTexture!==null?(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()):this._colorsTexture=null,this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}_updateDrawParameters(t,e,n,i="multiDraw"){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let r=e.getIndex(),a=r===null?1:r.array.BYTES_PER_ELEMENT,o=1;n.wireframe&&(o=2,a=e.attributes.position.count>65535?4:2);let l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._mergedDrawStarts,d=this._mergedDrawCounts,f=this._mergedDrawInstanceCounts,p=this._geometryInfo,_=this.perObjectFrustumCulled,m=this._indirectTexture,g=m.image.data,y=t.isArrayCamera?h0:c0;_&&(t.isArrayCamera?y.setFromArrayCamera(t):(yn.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse).multiply(this.matrixWorld),y.setFromProjectionMatrix(yn,t.coordinateSystem,t.reversedDepth)));let M=0,v=0;if(this.sortObjects){yn.copy(this.matrixWorld).invert(),Wf.setFromMatrixPosition(t.matrixWorld).applyMatrix4(yn),Xf.set(0,0,-1).transformDirection(t.matrixWorld).transformDirection(yn);for(let x=0,b=l.length;x<b;x++)if(l[x].visible&&l[x].active){let D=l[x].geometryIndex;this.getMatrixAt(x,yn),this.getBoundingSphereAt(D,ds).applyMatrix4(yn);let C=!1;if(_&&(C=!y.intersectsSphere(ds)),!C){let U=p[D],z=u0.subVectors(ds.center,Wf).dot(Xf);zu.push(U.start,U.count,z,x)}}let E=zu.list,w=this.customSort;w===null?E.sort(n.transparent?o0:a0):w.call(this,E,t);for(let x=0,b=E.length;x<b;x++){let D=E[x],C=D.start*a*o,U=D.count*o;i==="merged"?v>0&&u[v-1]===C&&d[v-1]===U?f[v-1]++:(u[v]=C,d[v]=U,f[v]=1,v++):(c[M]=C,h[M]=U),g[M]=D.index,M++}zu.reset()}else for(let E=0,w=l.length;E<w;E++)if(l[E].visible&&l[E].active){let x=l[E].geometryIndex,b=!1;if(_&&(this.getMatrixAt(E,yn),this.getBoundingSphereAt(x,ds).applyMatrix4(yn),b=!y.intersectsSphere(ds)),!b){let D=p[x],C=D.start*a*o,U=D.count*o;i==="merged"?v>0&&u[v-1]===C&&d[v-1]===U?f[v-1]++:(u[v]=C,d[v]=U,f[v]=1,v++):(c[M]=C,h[M]=U),g[M]=E,M++}}m.needsUpdate=!0,this._multiDrawCount=M,this._mergedDrawCount=v,this._multiDrawBytesPerElement=a,this._visibilityChanged=!1}onBeforeRender(t,e,n,i,r){t.isWebGPURenderer===!0?(this._visibilityChanged||this.perObjectFrustumCulled||this.sortObjects)&&(this._indirectTexture.needsUpdate=!0):this._updateDrawParameters(n,i,r)}onBeforeShadow(t,e,n,i,r,a){t.isWebGPURenderer!==!0&&this._updateDrawParameters(i,r,a)}},Ze=class extends ze{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Gc=new I,Vc=new I,Jf=new ne,Ea=new Qn,hc=new Be,Gu=new I,qf=new I,Kn=class extends ge{constructor(t=new he,e=new Ze){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Gc.fromBufferAttribute(e,i-1),Vc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Gc.distanceTo(Vc);t.setAttribute("lineDistance",new Ot(n,1))}else Ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hc.copy(n.boundingSphere),hc.applyMatrix4(i),hc.radius+=r,t.ray.intersectsSphere(hc)===!1)return;Jf.copy(i).invert(),Ea.copy(t.ray).applyMatrix4(Jf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,m=p-1;_<m;_+=c){let g=h.getX(_),y=h.getX(_+1),M=uc(this,t,Ea,l,g,y,_);M&&e.push(M)}if(this.isLineLoop){let _=h.getX(p-1),m=h.getX(f),g=uc(this,t,Ea,l,_,m,p-1);g&&e.push(g)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,m=p-1;_<m;_+=c){let g=uc(this,t,Ea,l,_,_+1,_);g&&e.push(g)}if(this.isLineLoop){let _=uc(this,t,Ea,l,p-1,f,p-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function uc(s,t,e,n,i,r,a){let o=s.geometry.attributes.position;if(Gc.fromBufferAttribute(o,i),Vc.fromBufferAttribute(o,r),e.distanceSqToSegment(Gc,Vc,Gu,qf)>n)return;Gu.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Gu);if(!(c<t.near||c>t.far))return{distance:c,point:qf.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Yf=new I,Zf=new I,In=class extends Kn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Yf.fromBufferAttribute(e,i),Zf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Yf.distanceTo(Zf);t.setAttribute("lineDistance",new Ot(n,1))}else Ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},$a=class extends Kn{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Cr=class extends ze{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$f=new ne,ju=new Qn,dc=new Be,fc=new I,Qa=class extends ge{constructor(t=new he,e=new Cr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dc.copy(n.boundingSphere),dc.applyMatrix4(i),dc.radius+=r,t.ray.intersectsSphere(dc)===!1)return;$f.copy(i).invert(),ju.copy(t.ray).applyMatrix4($f);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,_=f;p<_;p++){let m=c.getX(p);fc.fromBufferAttribute(u,m),Qf(fc,m,l,i,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,_=f;p<_;p++)fc.fromBufferAttribute(u,p),Qf(fc,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Qf(s,t,e,n,i,r,a){let o=ju.distanceSqToPoint(s);if(o<e){let l=new I;ju.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ka=class extends Le{constructor(t,e,n,i,r=we,a=we,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},kc=class extends Ka{constructor(t,e,n,i,r,a,o,l){super({},t,e,n,i,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(t){this.image=t,this.needsUpdate=!0}},Hc=class extends Le{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Pe,this.minFilter=Pe,this.generateMipmaps=!1,this.needsUpdate=!0}copy(t){return super.copy(t),this.source=new Cn(Object.assign({},t.image)),this}},Is=class extends Le{constructor(t=[],e,n,i,r,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}},Wc=class extends Is{constructor(t,e,n,i,r,a){super(t,e,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=fn,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Xc=class extends Is{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,fi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}},Ji=class extends Le{constructor(t=[],e=fi,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ir=class extends Le{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Jc=class extends Le{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;let h=t?t.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){let t=this.image?this.image.parentNode:null;t!==null&&"onpaint"in t&&(t.onpaint=null),super.dispose()}},ci=class extends Le{constructor(t,e,n=Pn,i,r,a,o=Pe,l=Pe,c,h=oi,u=1){if(h!==oi&&h!==pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cn(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Pr=class extends ci{constructor(t,e=Pn,n=fi,i,r,a=Pe,o=Pe,l,c=oi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Lr=class extends Le{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},hi=class s extends he{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,i,a,2),p("x","z","y",1,-1,t,n,-e,i,a,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(u,2));function p(_,m,g,y,M,v,E,w,x,b,D){let C=v/x,U=E/b,z=v/2,X=E/2,P=w/2,H=x+1,Z=b+1,W=0,dt=0,q=new I;for(let st=0;st<Z;st++){let at=st*U-X;for(let Ft=0;Ft<H;Ft++){let Mt=Ft*C-z;q[_]=Mt*y,q[m]=at*M,q[g]=P,c.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[g]=w>0?1:-1,h.push(q.x,q.y,q.z),u.push(Ft/x),u.push(1-st/b),W+=1}}for(let st=0;st<b;st++)for(let at=0;at<x;at++){let Ft=d+at+H*st,Mt=d+at+H*(st+1),j=d+(at+1)+H*(st+1),Rt=d+(at+1)+H*st;l.push(Ft,Mt,Rt),l.push(Mt,j,Rt),dt+=6}o.addGroup(f,dt,D),f+=dt,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ja=class s extends he{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,p=n*2+r,_=i+1,m=new I,g=new I;for(let y=0;y<=p;y++){let M=0,v=0,E=0,w=0;if(y<=n){let D=y/n,C=D*Math.PI/2;v=-h-t*Math.cos(C),E=t*Math.sin(C),w=-t*Math.cos(C),M=D*u}else if(y<=n+r){let D=(y-n)/r;v=-h+D*e,E=t,w=0,M=u+D*d}else{let D=(y-n-r)/n,C=D*Math.PI/2;v=h+t*Math.sin(C),E=t*Math.cos(C),w=t*Math.sin(C),M=u+d+D*u}let x=Math.max(0,Math.min(1,M/f)),b=0;y===0?b=.5/i:y===p&&(b=-.5/i);for(let D=0;D<=i;D++){let C=D/i,U=C*Math.PI*2,z=Math.sin(U),X=Math.cos(U);g.x=-E*X,g.y=v,g.z=E*z,o.push(g.x,g.y,g.z),m.set(-E*X,w,E*z),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+b,x)}if(y>0){let D=(y-1)*_;for(let C=0;C<i;C++){let U=D+C,z=D+C+1,X=y*_+C,P=y*_+C+1;a.push(U,z,X),a.push(z,P,X)}}}this.setIndex(a),this.setAttribute("position",new Ot(o,3)),this.setAttribute("normal",new Ot(l,3)),this.setAttribute("uv",new Ot(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},to=class s extends he{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new I,h=new lt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ot(a,3)),this.setAttribute("normal",new Ot(o,3)),this.setAttribute("uv",new Ot(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},bn=class s extends he{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,_=[],m=n/2,g=0;y(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ot(u,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(f,2));function y(){let v=new I,E=new I,w=0,x=(e-t)/n;for(let b=0;b<=r;b++){let D=[],C=b/r,U=C*(e-t)+t;for(let z=0;z<=i;z++){let X=z/i,P=X*l+o,H=Math.sin(P),Z=Math.cos(P);E.x=U*H,E.y=-C*n+m,E.z=U*Z,u.push(E.x,E.y,E.z),v.set(H,x,Z).normalize(),d.push(v.x,v.y,v.z),f.push(X,1-C),D.push(p++)}_.push(D)}for(let b=0;b<i;b++)for(let D=0;D<r;D++){let C=_[D][b],U=_[D+1][b],z=_[D+1][b+1],X=_[D][b+1];(t>0||D!==0)&&(h.push(C,U,X),w+=3),(e>0||D!==r-1)&&(h.push(U,z,X),w+=3)}c.addGroup(g,w,0),g+=w}function M(v){let E=p,w=new lt,x=new I,b=0,D=v===!0?t:e,C=v===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),p++;let U=p;for(let z=0;z<=i;z++){let P=z/i*l+o,H=Math.cos(P),Z=Math.sin(P);x.x=D*Z,x.y=m*C,x.z=D*H,u.push(x.x,x.y,x.z),d.push(0,C,0),w.x=H*.5+.5,w.y=Z*.5*C+.5,f.push(w.x,w.y),p++}for(let z=0;z<i;z++){let X=E+z,P=U+z;v===!0?h.push(P,P+1,X):h.push(P+1,P,X),b+=3}c.addGroup(g,b,v===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qi=class s extends bn{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ci=class s extends he{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Ot(r,3)),this.setAttribute("normal",new Ot(r.slice(),3)),this.setAttribute("uv",new Ot(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let M=new I,v=new I,E=new I;for(let w=0;w<e.length;w+=3)f(e[w+0],M),f(e[w+1],v),f(e[w+2],E),l(M,v,E,y)}function l(y,M,v,E){let w=E+1,x=[];for(let b=0;b<=w;b++){x[b]=[];let D=y.clone().lerp(v,b/w),C=M.clone().lerp(v,b/w),U=w-b;for(let z=0;z<=U;z++)z===0&&b===w?x[b][z]=D:x[b][z]=D.clone().lerp(C,z/U)}for(let b=0;b<w;b++)for(let D=0;D<2*(w-b)-1;D++){let C=Math.floor(D/2);D%2===0?(d(x[b][C+1]),d(x[b+1][C]),d(x[b][C])):(d(x[b][C+1]),d(x[b+1][C+1]),d(x[b+1][C]))}}function c(y){let M=new I;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(y),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){let y=new I;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let v=m(y)/2/Math.PI+.5,E=g(y)/Math.PI+.5;a.push(v,1-E)}p(),u()}function u(){for(let y=0;y<a.length;y+=6){let M=a[y+0],v=a[y+2],E=a[y+4],w=Math.max(M,v,E),x=Math.min(M,v,E);w>.9&&x<.1&&(M<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,M){let v=y*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function p(){let y=new I,M=new I,v=new I,E=new I,w=new lt,x=new lt,b=new lt;for(let D=0,C=0;D<r.length;D+=9,C+=6){y.set(r[D+0],r[D+1],r[D+2]),M.set(r[D+3],r[D+4],r[D+5]),v.set(r[D+6],r[D+7],r[D+8]),w.set(a[C+0],a[C+1]),x.set(a[C+2],a[C+3]),b.set(a[C+4],a[C+5]),E.copy(y).add(M).add(v).divideScalar(3);let U=m(E);_(w,C+0,y,U),_(x,C+2,M,U),_(b,C+4,v,U)}}function _(y,M,v,E){E<0&&y.x===1&&(a[M]=y.x-1),v.x===0&&v.z===0&&(a[M]=E/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}},eo=class s extends Ci{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},pc=new I,mc=new I,Vu=new I,gc=new Zn,no=class extends he{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(vs*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d=new Map,f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:_,b:m,c:g}=gc;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),gc.getNormal(Vu),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){let M=(y+1)%3,v=u[y],E=u[M],w=gc[h[y]],x=gc[h[M]],b=`${v}_${E}`,D=`${E}_${v}`,C=d.get(D);C?(Vu.dot(C.normal)<=r&&(f.push(w.x,w.y,w.z),f.push(x.x,x.y,x.z)),d.set(D,null)):d.has(b)||d.set(b,{index0:c[y],index1:c[M],normal:Vu.clone()})}}for(let p of d.values())if(p){let{index0:_,index1:m}=p;pc.fromBufferAttribute(o,_),mc.fromBufferAttribute(o,m),f.push(pc.x,pc.y,pc.z),f.push(mc.x,mc.y,mc.z)}this.setAttribute("position",new Ot(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ct("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new lt:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,i=[],r=[],a=[],o=new I,l=new ne;for(let f=0;f<=t;f++){let p=f/t;i[f]=this.getTangentAt(p,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(jt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(jt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Ps=class extends Tn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new lt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},io=class extends Ps{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Zd(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var Kf=new I,jf=new I,ku=new Zd,Hu=new Zd,Wu=new Zd,so=class extends Tn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(jf.subVectors(i[0],i[1]).add(i[0]),c=jf);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Kf.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Kf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),ku.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,_,m),Hu.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,_,m),Wu.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(ku.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Hu.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Wu.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ku.calc(l),Hu.calc(l),Wu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function tp(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function f0(s,t){let e=1-s;return e*e*t}function p0(s,t){return 2*(1-s)*s*t}function m0(s,t){return s*s*t}function La(s,t,e,n){return f0(s,t)+p0(s,e)+m0(s,n)}function g0(s,t){let e=1-s;return e*e*e*t}function _0(s,t){let e=1-s;return 3*e*e*s*t}function x0(s,t){return 3*(1-s)*s*s*t}function y0(s,t){return s*s*s*t}function Da(s,t,e,n,i){return g0(s,t)+_0(s,e)+x0(s,n)+y0(s,i)}var Dr=class extends Tn{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Da(t,i.x,r.x,a.x,o.x),Da(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ro=class extends Tn{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Da(t,i.x,r.x,a.x,o.x),Da(t,i.y,r.y,a.y,o.y),Da(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Nr=class extends Tn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ao=class extends Tn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ur=class extends Tn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(La(t,i.x,r.x,a.x),La(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends Tn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(La(t,i.x,r.x,a.x),La(t,i.y,r.y,a.y),La(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fr=class extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(tp(o,l.x,c.x,h.x,u.x),tp(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new lt().fromArray(i))}return this}},qc=Object.freeze({__proto__:null,ArcCurve:io,CatmullRomCurve3:so,CubicBezierCurve:Dr,CubicBezierCurve3:ro,EllipseCurve:Ps,LineCurve:Nr,LineCurve3:ao,QuadraticBezierCurve:Ur,QuadraticBezierCurve3:Or,SplineCurve:Fr}),oo=class extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new qc[i.type]().fromJSON(i))}return this.cacheLengths=null,this}},Yi=class extends oo{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Nr(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Ur(this.currentPoint.clone(),new lt(t,e),new lt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new Dr(this.currentPoint.clone(),new lt(t,e),new lt(n,i),new lt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Fr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){let c=new Ps(t,e,n,i,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Zi=class extends Yi{constructor(t){super(t),this.uuid=kn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Yi().fromJSON(i))}return this}};function v0(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Pm(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=w0(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,u=l;for(let d=e;d<i;d+=e){let f=s[d],p=s[d+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return lo(r,a,e,o,l,c,0),a}function Pm(s,t,e,n,i){let r;if(i===O0(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=ep(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=ep(a/n|0,s[a],s[a+1],r);return r&&Br(r,r.next)&&(ho(r),r=r.next),r}function Ls(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Br(e,e.next)||Ce(e.prev,e,e.next)===0)){if(ho(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function lo(s,t,e,n,i,r,a){if(!s)return;!a&&r&&I0(s,n,i,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?S0(s,n,i,r):M0(s)){t.push(l.i,s.i,c.i),ho(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=b0(Ls(s),t),lo(s,t,e,n,i,r,2)):a===2&&T0(s,t,e,n,i,r):lo(Ls(s),t,e,n,i,r,1);break}}}function M0(s){let t=s.prev,e=s,n=s.next;if(Ce(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,r,a),u=Math.min(o,l,c),d=Math.max(i,r,a),f=Math.max(o,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Ra(i,o,r,l,a,c,p.x,p.y)&&Ce(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function S0(s,t,e,n){let i=s.prev,r=s,a=s.next;if(Ce(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,f=Math.min(o,l,c),p=Math.min(h,u,d),_=Math.max(o,l,c),m=Math.max(h,u,d),g=td(f,p,t,e,n),y=td(_,m,t,e,n),M=s.prevZ,v=s.nextZ;for(;M&&M.z>=g&&v&&v.z<=y;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=m&&M!==i&&M!==a&&Ra(o,h,l,u,c,d,M.x,M.y)&&Ce(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==a&&Ra(o,h,l,u,c,d,v.x,v.y)&&Ce(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=m&&M!==i&&M!==a&&Ra(o,h,l,u,c,d,M.x,M.y)&&Ce(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==a&&Ra(o,h,l,u,c,d,v.x,v.y)&&Ce(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function b0(s,t){let e=s;do{let n=e.prev,i=e.next.next;!Br(n,i)&&Dm(n,e,e.next,i)&&co(n,i)&&co(i,n)&&(t.push(n.i,e.i,i.i),ho(e),ho(e.next),e=s=i),e=e.next}while(e!==s);return Ls(e)}function T0(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&D0(a,o)){let l=Nm(a,o);a=Ls(a,a.next),l=Ls(l,l.next),lo(a,t,e,n,i,r,0),lo(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function w0(s,t,e,n){let i=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Pm(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(L0(c))}i.sort(E0);for(let r=0;r<i.length;r++)e=A0(i[r],e);return e}function E0(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function A0(s,t){let e=R0(s,t);if(!e)return t;let n=Nm(e,s);return Ls(n,n.next),Ls(e,e.next)}function R0(s,t){let e=t,n=s.x,i=s.y,r=-1/0,a;if(Br(s,e))return e;do{if(Br(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Lm(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let u=Math.abs(i-e.y)/(n-e.x);co(e,s)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&C0(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function C0(s,t){return Ce(s.prev,s,t.prev)<0&&Ce(t.next,s,s.next)<0}function I0(s,t,e,n){let i=s;do i.z===0&&(i.z=td(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,P0(i)}function P0(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function td(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function L0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Lm(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Ra(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&Lm(s,t,e,n,i,r,a,o)}function D0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!N0(s,t)&&(co(s,t)&&co(t,s)&&U0(s,t)&&(Ce(s.prev,s,t.prev)||Ce(s,t.prev,t))||Br(s,t)&&Ce(s.prev,s,s.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Br(s,t){return s.x===t.x&&s.y===t.y}function Dm(s,t,e,n){let i=xc(Ce(s,t,e)),r=xc(Ce(s,t,n)),a=xc(Ce(e,n,s)),o=xc(Ce(e,n,t));return!!(i!==r&&a!==o||i===0&&_c(s,e,t)||r===0&&_c(s,n,t)||a===0&&_c(e,s,n)||o===0&&_c(e,t,n))}function _c(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function xc(s){return s>0?1:s<0?-1:0}function N0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Dm(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function co(s,t){return Ce(s.prev,s,s.next)<0?Ce(s,t,s.next)>=0&&Ce(s,s.prev,t)>=0:Ce(s,t,s.prev)<0||Ce(s,s.next,t)<0}function U0(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Nm(s,t){let e=ed(s.i,s.x,s.y),n=ed(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ep(s,t,e,n){let i=ed(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ho(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ed(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function O0(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var nd=class{static triangulate(t,e,n=2){return v0(t,e,n)}},Nn=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];np(t),ip(n,t);let a=t.length;e.forEach(np);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,ip(n,e[l]);let o=nd.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function np(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function ip(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var uo=class s extends he{constructor(t=new Zi([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Ot(i,3)),this.setAttribute("uv",new Ot(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:F0,M,v=!1,E,w,x,b;if(g){M=g.getSpacedPoints(h),v=!0,d=!1;let nt=g.isCatmullRomCurve3?g.closed:!1;E=g.computeFrenetFrames(h,nt),w=new I,x=new I,b=new I}d||(m=0,f=0,p=0,_=0);let D=o.extractPoints(c),C=D.shape,U=D.holes;if(!Nn.isClockWise(C)){C=C.reverse();for(let nt=0,St=U.length;nt<St;nt++){let _t=U[nt];Nn.isClockWise(_t)&&(U[nt]=_t.reverse())}}function X(nt){let _t=10000000000000001e-36,Dt=nt[0];for(let At=1;At<=nt.length;At++){let $t=At%nt.length,zt=nt[$t],ce=zt.x-Dt.x,fe=zt.y-Dt.y,me=ce*ce+fe*fe,F=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(Dt.x),Math.abs(Dt.y)),Ae=_t*F*F;if(me<=Ae){nt.splice($t,1),At--;continue}Dt=zt}}X(C),U.forEach(X);let P=U.length,H=C;for(let nt=0;nt<P;nt++){let St=U[nt];C=C.concat(St)}function Z(nt,St,_t){return St||Wt("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(St,_t)}let W=C.length;function dt(nt,St,_t){let Dt,At,$t,zt=nt.x-St.x,ce=nt.y-St.y,fe=_t.x-nt.x,me=_t.y-nt.y,F=zt*zt+ce*ce,Ae=zt*me-ce*fe;if(Math.abs(Ae)>Number.EPSILON){let oe=Math.sqrt(F),_e=Math.sqrt(fe*fe+me*me),yt=St.x-ce/oe,Xt=St.y+zt/oe,Vt=_t.x-me/_e,Yt=_t.y+fe/_e,R=((Vt-yt)*me-(Yt-Xt)*fe)/(zt*me-ce*fe);Dt=yt+zt*R-nt.x,At=Xt+ce*R-nt.y;let S=Dt*Dt+At*At;if(S<=2)return new lt(Dt,At);$t=Math.sqrt(S/2)}else{let oe=!1;zt>Number.EPSILON?fe>Number.EPSILON&&(oe=!0):zt<-Number.EPSILON?fe<-Number.EPSILON&&(oe=!0):Math.sign(ce)===Math.sign(me)&&(oe=!0),oe?(Dt=-ce,At=zt,$t=Math.sqrt(F)):(Dt=zt,At=ce,$t=Math.sqrt(F/2))}return new lt(Dt/$t,At/$t)}let q=[];for(let nt=0,St=H.length,_t=St-1,Dt=nt+1;nt<St;nt++,_t++,Dt++)_t===St&&(_t=0),Dt===St&&(Dt=0),q[nt]=dt(H[nt],H[_t],H[Dt]);let st=[],at,Ft=q.concat();for(let nt=0,St=P;nt<St;nt++){let _t=U[nt];at=[];for(let Dt=0,At=_t.length,$t=At-1,zt=Dt+1;Dt<At;Dt++,$t++,zt++)$t===At&&($t=0),zt===At&&(zt=0),at[Dt]=dt(_t[Dt],_t[$t],_t[zt]);st.push(at),Ft=Ft.concat(at)}let Mt;if(m===0)Mt=Nn.triangulateShape(H,U);else{let nt=[],St=[];for(let _t=0;_t<m;_t++){let Dt=_t/m,At=f*Math.cos(Dt*Math.PI/2),$t=p*Math.sin(Dt*Math.PI/2)+_;for(let zt=0,ce=H.length;zt<ce;zt++){let fe=Z(H[zt],q[zt],$t);Gt(fe.x,fe.y,-At),Dt===0&&nt.push(fe)}for(let zt=0,ce=P;zt<ce;zt++){let fe=U[zt];at=st[zt];let me=[];for(let F=0,Ae=fe.length;F<Ae;F++){let oe=Z(fe[F],at[F],$t);Gt(oe.x,oe.y,-At),Dt===0&&me.push(oe)}Dt===0&&St.push(me)}}Mt=Nn.triangulateShape(nt,St)}let j=Mt.length,Rt=p+_;for(let nt=0;nt<W;nt++){let St=d?Z(C[nt],Ft[nt],Rt):C[nt];v?(x.copy(E.normals[0]).multiplyScalar(St.x),w.copy(E.binormals[0]).multiplyScalar(St.y),b.copy(M[0]).add(x).add(w),Gt(b.x,b.y,b.z)):Gt(St.x,St.y,0)}for(let nt=1;nt<=h;nt++)for(let St=0;St<W;St++){let _t=d?Z(C[St],Ft[St],Rt):C[St];v?(x.copy(E.normals[nt]).multiplyScalar(_t.x),w.copy(E.binormals[nt]).multiplyScalar(_t.y),b.copy(M[nt]).add(x).add(w),Gt(b.x,b.y,b.z)):Gt(_t.x,_t.y,u/h*nt)}for(let nt=m-1;nt>=0;nt--){let St=nt/m,_t=f*Math.cos(St*Math.PI/2),Dt=p*Math.sin(St*Math.PI/2)+_;for(let At=0,$t=H.length;At<$t;At++){let zt=Z(H[At],q[At],Dt);Gt(zt.x,zt.y,u+_t)}for(let At=0,$t=U.length;At<$t;At++){let zt=U[At];at=st[At];for(let ce=0,fe=zt.length;ce<fe;ce++){let me=Z(zt[ce],at[ce],Dt);v?Gt(me.x,me.y+M[h-1].y,M[h-1].x+_t):Gt(me.x,me.y,u+_t)}}}Nt(),qt();function Nt(){let nt=i.length/3;if(d){let St=0,_t=W*St;for(let Dt=0;Dt<j;Dt++){let At=Mt[Dt];Me(At[2]+_t,At[1]+_t,At[0]+_t)}St=h+m*2,_t=W*St;for(let Dt=0;Dt<j;Dt++){let At=Mt[Dt];Me(At[0]+_t,At[1]+_t,At[2]+_t)}}else{for(let St=0;St<j;St++){let _t=Mt[St];Me(_t[2],_t[1],_t[0])}for(let St=0;St<j;St++){let _t=Mt[St];Me(_t[0]+W*h,_t[1]+W*h,_t[2]+W*h)}}n.addGroup(nt,i.length/3-nt,0)}function qt(){let nt=i.length/3,St=0;xt(H,St),St+=H.length;for(let _t=0,Dt=U.length;_t<Dt;_t++){let At=U[_t];xt(At,St),St+=At.length}n.addGroup(nt,i.length/3-nt,1)}function xt(nt,St){let _t=nt.length;for(;--_t>=0;){let Dt=_t,At=_t-1;At<0&&(At=nt.length-1);for(let $t=0,zt=h+m*2;$t<zt;$t++){let ce=W*$t,fe=W*($t+1),me=St+Dt+ce,F=St+At+ce,Ae=St+At+fe,oe=St+Dt+fe;Jt(me,F,Ae,oe)}}}function Gt(nt,St,_t){l.push(nt),l.push(St),l.push(_t)}function Me(nt,St,_t){ie(nt),ie(St),ie(_t);let Dt=i.length/3,At=y.generateTopUV(n,i,Dt-3,Dt-2,Dt-1);ae(At[0]),ae(At[1]),ae(At[2])}function Jt(nt,St,_t,Dt){ie(nt),ie(St),ie(Dt),ie(St),ie(_t),ie(Dt);let At=i.length/3,$t=y.generateSideWallUV(n,i,At-6,At-3,At-2,At-1);ae($t[0]),ae($t[1]),ae($t[3]),ae($t[1]),ae($t[2]),ae($t[3])}function ie(nt){i.push(l[nt*3+0]),i.push(l[nt*3+1]),i.push(l[nt*3+2])}function ae(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return B0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new qc[i.type]().fromJSON(i)),new s(n,t.options)}},F0={generateTopUV:function(s,t,e,n,i){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new lt(r,a),new lt(o,l),new lt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],p=t[i*3+2],_=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new lt(a,1-l),new lt(c,1-u),new lt(d,1-p),new lt(_,1-g)]:[new lt(o,1-l),new lt(h,1-u),new lt(f,1-p),new lt(m,1-g)]}};function B0(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var $i=class s extends Ci{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},fo=class s extends he{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=jt(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new I,d=new lt,f=new I,p=new I,_=new I,m=0,g=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,f.x=g*1,f.y=-m,f.z=g*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:_.normalize(),l.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let y=0;y<=e;y++){let M=n+y*h*i,v=Math.sin(M),E=Math.cos(M);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*v,u.y=t[w].y,u.z=t[w].x*E,a.push(u.x,u.y,u.z),d.x=y/e,d.y=w/(t.length-1),o.push(d.x,d.y);let x=l[3*w+0]*v,b=l[3*w+1],D=l[3*w+0]*E;c.push(x,b,D)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){let v=M+y*t.length,E=v,w=v+t.length,x=v+t.length+1,b=v+1;r.push(E,w,b),r.push(x,b,w)}this.setIndex(r),this.setAttribute("position",new Ot(a,3)),this.setAttribute("uv",new Ot(o,2)),this.setAttribute("normal",new Ot(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},zr=class s extends Ci{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},On=class s extends he{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let y=g*d-a;for(let M=0;M<c;M++){let v=M*u-r;p.push(v,-y,0),_.push(0,0,1),m.push(M/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){let M=y+c*g,v=y+c*(g+1),E=y+1+c*(g+1),w=y+1+c*g;f.push(M,v,w),f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(_,3)),this.setAttribute("uv",new Ot(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Qi=class s extends he{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/i,f=new I,p=new lt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let g=r+m/n*a;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let _=0;_<i;_++){let m=_*(n+1);for(let g=0;g<n;g++){let y=g+m,M=y,v=y+n+1,E=y+n+2,w=y+1;o.push(M,v,w),o.push(v,E,w)}}this.setIndex(o),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(c,3)),this.setAttribute("uv",new Ot(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},po=class s extends he{constructor(t=new Zi([new lt(0,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ot(i,3)),this.setAttribute("normal",new Ot(r,3)),this.setAttribute("uv",new Ot(a,2));function c(h){let u=i.length/3,d=h.extractPoints(e),f=d.shape,p=d.holes;Nn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let y=p[m];Nn.isClockWise(y)===!0&&(p[m]=y.reverse())}let _=Nn.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let y=p[m];f=f.concat(y)}for(let m=0,g=f.length;m<g;m++){let y=f[m];i.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,g=_.length;m<g;m++){let y=_[m],M=y[0]+u,v=y[1]+u,E=y[2]+u;n.push(M,v,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return z0(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let a=e[t.shapes[i]];n.push(a)}return new s(n,t.curveSegments)}};function z0(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var Ii=class s extends he{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new I,d=new I,f=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){let y=[],M=g/n,v=a+M*o,E=t*Math.cos(v),w=Math.sqrt(t*t-E*E),x=0;g===0&&a===0?x=.5/e:g===n&&l===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){let D=b/e,C=i+D*r;u.x=-w*Math.cos(C),u.y=E,u.z=w*Math.sin(C),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(D+x,1-M),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){let M=h[g][y+1],v=h[g][y],E=h[g+1][y],w=h[g+1][y+1];(g!==0||a>0)&&f.push(M,v,w),(g!==n-1||l<Math.PI)&&f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(_,3)),this.setAttribute("uv",new Ot(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},mo=class s extends Ci{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},go=class s extends he{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],d=new I,f=new I,p=new I;for(let _=0;_<=n;_++){let m=a+_/n*o;for(let g=0;g<=i;g++){let y=g/i*r;f.x=(t+e*Math.cos(m))*Math.cos(y),f.y=(t+e*Math.cos(m))*Math.sin(y),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),d.x=t*Math.cos(y),d.y=t*Math.sin(y),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/i),u.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){let g=(i+1)*_+m-1,y=(i+1)*(_-1)+m-1,M=(i+1)*(_-1)+m,v=(i+1)*_+m;l.push(g,y,v),l.push(y,M,v)}this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},_o=class s extends he{constructor(t=1,e=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new I,d=new I,f=new I,p=new I,_=new I,m=new I,g=new I;for(let M=0;M<=n;++M){let v=M/n*r*Math.PI*2;y(v,r,a,t,f),y(v+.01,r,a,t,p),m.subVectors(p,f),g.addVectors(p,f),_.crossVectors(m,g),g.crossVectors(_,m),_.normalize(),g.normalize();for(let E=0;E<=i;++E){let w=E/i*Math.PI*2,x=-e*Math.cos(w),b=e*Math.sin(w);u.x=f.x+(x*g.x+b*_.x),u.y=f.y+(x*g.y+b*_.y),u.z=f.z+(x*g.z+b*_.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(M/n),h.push(E/i)}}for(let M=1;M<=n;M++)for(let v=1;v<=i;v++){let E=(i+1)*(M-1)+(v-1),w=(i+1)*M+(v-1),x=(i+1)*M+v,b=(i+1)*(M-1)+v;o.push(E,w,b),o.push(w,x,b)}this.setIndex(o),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(c,3)),this.setAttribute("uv",new Ot(h,2));function y(M,v,E,w,x){let b=Math.cos(M),D=Math.sin(M),C=E/v*M,U=Math.cos(C);x.x=w*(2+U)*.5*b,x.y=w*(2+U)*D*.5,x.z=w*Math.sin(C)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},xo=class s extends he{constructor(t=new Or(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new lt,h=new I,u=[],d=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Ot(u,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(f,2));function _(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),y(),g()}function m(M){h=t.getPointAt(M/e,h);let v=a.normals[M],E=a.binormals[M];for(let w=0;w<=i;w++){let x=w/i*Math.PI*2,b=Math.sin(x),D=-Math.cos(x);l.x=D*v.x+b*E.x,l.y=D*v.y+b*E.y,l.z=D*v.z+b*E.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let M=1;M<=e;M++)for(let v=1;v<=i;v++){let E=(i+1)*(M-1)+(v-1),w=(i+1)*M+(v-1),x=(i+1)*M+v,b=(i+1)*(M-1)+v;p.push(E,w,b),p.push(w,x,b)}}function y(){for(let M=0;M<=e;M++)for(let v=0;v<=i;v++)c.x=M/e,c.y=v/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new qc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},yo=class extends he{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new I,r=new I;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,f=u.count;for(let p=d,_=d+f;p<_;p+=3)for(let m=0;m<3;m++){let g=o.getX(p+m),y=o.getX(p+(m+1)%3);i.fromBufferAttribute(a,g),r.fromBufferAttribute(a,y),sp(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),sp(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ot(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function sp(s,t,e){let n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var rp=Object.freeze({__proto__:null,BoxGeometry:hi,CapsuleGeometry:ja,CircleGeometry:to,ConeGeometry:qi,CylinderGeometry:bn,DodecahedronGeometry:eo,EdgesGeometry:no,ExtrudeGeometry:uo,IcosahedronGeometry:$i,LatheGeometry:fo,OctahedronGeometry:zr,PlaneGeometry:On,PolyhedronGeometry:Ci,RingGeometry:Qi,ShapeGeometry:po,SphereGeometry:Ii,TetrahedronGeometry:mo,TorusGeometry:go,TorusKnotGeometry:_o,TubeGeometry:xo,WireframeGeometry:yo}),vo=class extends ze{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Lt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function Xs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(ap(i))i.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(ap(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function ln(s){let t={};for(let e=0;e<s.length;e++){let n=Xs(s[e]);for(let i in n)t[i]=n[i]}return t}function ap(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function G0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function $d(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var Qd={clone:Xs,merge:ln},V0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fn=class extends ze{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V0,this.fragmentShader=k0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=G0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Lt().setHex(i.value);break;case"v2":this.uniforms[n].value=new lt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new I().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ve().fromArray(i.value);break;case"m3":this.uniforms[n].value=new re().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ne().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Gr=class extends Fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},jn=class extends ze{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mi,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Mo=class extends jn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return ai('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){ai('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},So=class extends ze{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Lt(16777215),this.specular=new Lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mi,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=$r,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},bo=class extends ze{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Lt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mi,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},To=class extends ze{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mi,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},wo=class extends ze{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mi,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=$r,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Vr=class extends ze{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},kr=class extends ze{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Eo=class extends ze{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Lt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mi,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ao=class extends Ze{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Yn(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function pr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Um(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function id(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=e[r]*t;for(let l=0;l!==t;++l)i[a++]=s[o+l]}return i}function Om(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}function H0(s,t,e,n,i=30){let r=s.clone();r.name=t;let a=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){let p=c.times[f]*i;if(!(p<e||p>=n)){u.push(c.times[f]);for(let _=0;_<h;++_)d.push(c.values[f*h+_])}}u.length!==0&&(c.times=Yn(u,c.times.constructor),c.values=Yn(d,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function W0(s,t=0,e=s,n=30){n<=0&&(n=30);let i=e.tracks.length,r=t/n;for(let a=0;a<i;++a){let o=e.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let c=s.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0,u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let p=o.times.length-1,_;if(r<=o.times[0]){let g=h,y=u-h;_=o.values.slice(g,y)}else if(r>=o.times[p]){let g=p*u+h,y=g+u-h;_=o.values.slice(g,y)}else{let g=o.createInterpolant();g.evaluate(r),_=g.resultBuffer.slice()}l==="quaternion"&&new Ye().fromArray(_).normalize().conjugate().toArray(_);let m=c.times.length;for(let g=0;g<m;++g){let y=g*f+d;if(l==="quaternion")Ye.multiplyQuaternionsFlat(c.values,y,_,0,c.values,y);else{let M=f-d*2;for(let v=0;v<M;++v)c.values[y+v]-=_[v]}}}return s.blendMode=nu,s}var Yc=class{static convertArray(t,e){return Yn(t,e)}static isTypedArray(t){return bm(t)}static hasTangents(t){return pr(t)}static getKeyframeOrder(t){return Um(t)}static sortedArray(t,e,n){return id(t,e,n)}static flattenJSON(t,e,n,i){Om(t,e,n,i)}static subclip(t,e,n,i,r=30){return H0(t,e,n,i,r)}static makeClipAdditive(t,e=0,n=t,i=30){return W0(t,e,n,i)}},Pi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ro=class extends Pi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gi,endingEnd:Gi}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vi:r=t,o=2*e-n;break;case xr:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vi:a=t,l=2*n-e;break;case xr:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),_=p*p,m=_*p,g=-d*m+2*d*_-d*p,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*p+1,M=(-1-f)*m+(1.5+f)*_+.5*p,v=f*m-f*_;for(let E=0;E!==o;++E)r[E]=g*a[h+E]+y*a[c+E]+M*a[l+E]+v*a[u+E];return r}},Hr=class extends Pi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Co=class extends Pi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Io=class extends Pi{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(i-e),_=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*p;return r}let d=o*2,f=t-1;for(let p=0;p!==o;++p){let _=a[c+p],m=a[l+p],g=f*d+p*2,y=u[g],M=u[g+1],v=t*d+p*2,E=h[v],w=h[v+1],x=J0(n,e,y,E,i);r[p]=Fm(x,_,M,w,m)}return r}};function Fm(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function X0(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function J0(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){let o=Fm(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;let l=X0(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var gn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Yn(e,this.TimeBufferType),this.values=Yn(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Yn(t.times,Array),values:Yn(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),pr(t.settings)&&(n.settings={inTangents:Yn(t.settings.inTangents,Array),outTangents:Yn(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Hr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Io(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case _r:e=this.InterpolantFactoryMethodDiscrete;break;case Va:e=this.InterpolantFactoryMethodLinear;break;case Ca:e=this.InterpolantFactoryMethodSmooth;break;case Cc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ct("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _r;case this.InterpolantFactoryMethodLinear:return Va;case this.InterpolantFactoryMethodSmooth:return Ca;case this.InterpolantFactoryMethodBezier:return Cc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;pr(this.settings)&&(op(this.settings.inTangents,t),op(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;pr(this.settings)&&(lp(this.settings.inTangents,t),lp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Wt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Wt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&bm(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Wt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ca,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let _=e[u+p];if(_!==e[d+p]||_!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,pr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function op(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function lp(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Va;var ui=class extends gn{constructor(t,e,n){super(t,e,n)}};ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=_r;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Wr=class extends gn{constructor(t,e,n,i){super(t,e,n,i)}};Wr.prototype.ValueTypeName="color";var Ds=class extends gn{constructor(t,e,n,i){super(t,e,n,i)}};Ds.prototype.ValueTypeName="number";var Po=class extends Pi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ye.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ns=class extends gn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Po(this.times,this.values,this.getValueSize(),t)}};Ns.prototype.ValueTypeName="quaternion";Ns.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends gn{constructor(t,e,n){super(t,e,n)}};di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=_r;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Xr=class extends gn{constructor(t,e,n,i){super(t,e,n,i)}};Xr.prototype.ValueTypeName="vector";var Ki=class{constructor(t="",e=-1,n=[],i=Cl){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=kn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(Y0(n[a]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=n.length;r!==a;++r)e.push(gn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Um(l);l=id(l,1,h),c=id(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ds(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){let c=t[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function q0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ds;case"vector":case"vector2":case"vector3":case"vector4":return Xr;case"color":return Wr;case"quaternion":return Ns;case"bool":case"boolean":return ui;case"string":return di}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Y0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=q0(s.type);if(s.times===void 0){let n=[],i=[];Om(s.keys,n,i,"value"),s.times=n,s.values=i}let e;return t.parse!==void 0?e=t.parse(s):e=new t(s.name,s.times,s.values,s.interpolation),pr(s.settings)&&(e.settings={inTangents:Yn(s.settings.inTangents,Float32Array),outTangents:Yn(s.settings.outTangents,Float32Array)}),e}var $n={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(cp(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!cp(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function cp(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Jr=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Kd=new Jr,Ke=class{constructor(t){this.manager=t!==void 0?t:Kd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ke.DEFAULT_MATERIAL_NAME="__DEFAULT";var wi={},sd=class extends Error{constructor(t,e){super(t),this.response=e}},Bn=class extends Ke{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=$n.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(wi[t]!==void 0){wi[t].push({onLoad:e,onProgress:n,onError:i});return}wi[t]=[],wi[t].push({onLoad:e,onProgress:n,onError:i});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ct("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=wi[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,_=0,m=new ReadableStream({start(g){y();function y(){u.read().then(({done:M,value:v})=>{if(M)g.close();else{_+=v.byteLength;let E=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let w=0,x=h.length;w<x;w++){let b=h[w];b.onProgress&&b.onProgress(E)}g.enqueue(v),y()}},M=>{g.error(M)})}}});return new Response(m)}else throw new sd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{$n.add(`file:${t}`,c);let h=wi[t];delete wi[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=wi[t];if(h===void 0)throw this.manager.itemError(t),c;delete wi[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Zc=class extends Ke{constructor(t){super(t)}load(t,e,n,i){let r=this,a=new Bn(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):Wt(l),r.manager.itemError(t)}},n,i)}parse(t){let e=[];for(let n=0;n<t.length;n++){let i=Ki.parse(t[n]);e.push(i)}return e}},$c=class extends Ke{constructor(t){super(t)}load(t,e,n,i){let r=this,a=[],o=new Is,l=new Bn(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(t[u],function(d){let f=r.parse(d,!0);a[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=we),o.image=a,o.format=f.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let u=0,d=t.length;u<d;++u)h(u);else l.load(t,function(u){let d=r.parse(u,!0);if(d.isCubemap){let f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let _=0;_<d.mipmapCount;_++)a[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+_]),a[p].format=d.format,a[p].width=d.width,a[p].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=we),o.format=d.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}},lr=new WeakMap,ji=class extends Ke{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=$n.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=lr.get(a);u===void 0&&(u=[],lr.set(a,u)),u.push({onLoad:e,onError:i})}return a}let o=Mr("img");function l(){h(),e&&e(this);let u=lr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}lr.delete(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),$n.remove(`image:${t}`);let d=lr.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}lr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),$n.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}},Qc=class extends Ke{constructor(t){super(t)}load(t,e,n,i){let r=new Ji;r.colorSpace=$e;let a=new ji(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}},Kc=class extends Ke{constructor(t){super(t)}load(t,e,n,i){let r=this,a=new pn,o=new Bn(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):Wt(h);return}r._applyTexData(a,c),e&&e(a,c)},n,i),a}createDataTexture(t){let e=new pn;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:fn,t.wrapT=e.wrapT!==void 0?e.wrapT:fn,t.magFilter=e.magFilter!==void 0?e.magFilter:we,t.minFilter=e.minFilter!==void 0?e.minFilter:we,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=zn),e.mipmapCount===1&&(t.minFilter=we),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}},jc=class extends Ke{constructor(t){super(t)}load(t,e,n,i){let r=new Le,a=new ji(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},ti=class extends ge{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Us=class extends ti{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Xu=new ne,hp=new I,up=new I,Os=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new li,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;hp.setFromMatrixPosition(t.matrixWorld),e.position.copy(hp),up.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(up),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Xu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Xu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Hi||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Xu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},yc=new I,vc=new Ye,ri=new I,Fs=class extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(yc,vc,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yc,vc,ri.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(yc,vc,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yc,vc,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bi=new I,dp=new lt,fp=new lt,Ue=class extends Fs{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z)}getViewSize(t,e){return this.getViewBounds(t,dp,fp),e.subVectors(fp,dp)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(vs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},rd=class extends Os{constructor(){super(new Ue(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Ss*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Lo=class extends ti{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new rd}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},ad=class extends Os{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0}},Do=class extends ti{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ad}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Bs=class extends Fs{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},od=class extends Os{constructor(){super(new Bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zs=class extends ti{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new od}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},No=class extends ti{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},Uo=class extends ti{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){let e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}},qr=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new I)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){let n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*i),e.addScaledVector(a[2],.488603*r),e.addScaledVector(a[3],.488603*n),e.addScaledVector(a[4],1.092548*(n*i)),e.addScaledVector(a[5],1.092548*(i*r)),e.addScaledVector(a[6],.315392*(3*r*r-1)),e.addScaledVector(a[7],1.092548*(n*r)),e.addScaledVector(a[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){let n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*i),e.addScaledVector(a[2],2*.511664*r),e.addScaledVector(a[3],2*.511664*n),e.addScaledVector(a[4],2*.429043*n*i),e.addScaledVector(a[5],2*.429043*i*r),e.addScaledVector(a[6],.743125*r*r-.247708),e.addScaledVector(a[7],2*.429043*n*r),e.addScaledVector(a[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){let n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}},Oo=class extends ti{constructor(t=new qr,e=1){super(void 0,e),this.isLightProbe=!0,this.type="LightProbe",this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){let e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}},pp={},Fo=class s extends Ke{constructor(t){super(t),this.textures={}}load(t,e,n,i){let r=this,a=new Bn(r.manager);a.setPriority(r.priority),a.setCache(r.cache),a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):Wt(l),r.manager.itemError(t)}},n,i)}parse(t){let e=this.createMaterialFromType(t.type);return e.fromJSON(t,this.textures),e}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return s.createMaterialFromType(t)}static createMaterialFromType(t){let n={ShadowMaterial:vo,SpriteMaterial:Er,RawShaderMaterial:Gr,ShaderMaterial:Fn,PointsMaterial:Cr,MeshPhysicalMaterial:Mo,MeshStandardMaterial:jn,MeshPhongMaterial:So,MeshToonMaterial:bo,MeshNormalMaterial:To,MeshLambertMaterial:wo,MeshDepthMaterial:Vr,MeshDistanceMaterial:kr,MeshBasicMaterial:an,MeshMatcapMaterial:Eo,LineDashedMaterial:Ao,LineBasicMaterial:Ze,Material:ze,...pp}[t],i;return n===void 0?(ai(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),i=new ze):i=new n,i}static registerMaterial(t,e){pp[t]=e}},Yr=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},Bo=class extends he{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}},zo=class extends Ke{constructor(t){super(t)}load(t,e,n,i){let r=this,a=new Bn(r.manager);a.setPriority(r.priority),a.setCache(r.cache),a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):Wt(l),r.manager.itemError(t)}},n,i)}parse(t){let e={},n={};function i(f,p){if(e[p]!==void 0)return e[p];let m=f.interleavedBuffers[p],g=r(f,m.buffer),y=fr(m.type,g),M=new Cs(y,m.stride);return M.uuid=m.uuid,m.usage!==void 0&&M.setUsage(m.usage),e[p]=M,M}function r(f,p){if(n[p]!==void 0)return n[p];let m=f.arrayBuffers[p],g=new Uint32Array(m).buffer;return n[p]=g,g}let a=t.isInstancedBufferGeometry?new Bo:new he,o=t.data.index;if(o!==void 0){let f=fr(o.type,o.array);a.setIndex(new be(f,1))}let l=t.data.attributes;for(let f in l){let p=l[f],_;if(p.isInterleavedBufferAttribute){let m=i(t.data,p.data);_=new Xi(m,p.itemSize,p.offset,p.normalized)}else{let m=fr(p.type,p.array),g=p.isInstancedBufferAttribute?Ri:be;_=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),p.gpuType!==void 0&&(_.gpuType=p.gpuType),a.setAttribute(f,_)}let c=t.data.morphAttributes;if(c)for(let f in c){let p=c[f],_=[];for(let m=0,g=p.length;m<g;m++){let y=p[m],M;if(y.isInterleavedBufferAttribute){let v=i(t.data,y.data);M=new Xi(v,y.itemSize,y.offset,y.normalized)}else{let v=fr(y.type,y.array);M=new be(v,y.itemSize,y.normalized)}y.name!==void 0&&(M.name=y.name),y.usage!==void 0&&M.setUsage(y.usage),y.gpuType!==void 0&&(M.gpuType=y.gpuType),_.push(M)}a.morphAttributes[f]=_}t.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);let u=t.data.groups||t.data.drawcalls||t.data.offsets;if(u!==void 0)for(let f=0,p=u.length;f!==p;++f){let _=u[f];a.addGroup(_.start,_.count,_.materialIndex)}let d=t.data.boundingSphere;return d!==void 0&&(a.boundingSphere=new Be().fromJSON(d)),t.name&&(a.name=t.name),t.userData&&(a.userData=t.userData),a}},Ju={},th=class extends Ke{constructor(t){super(t)}load(t,e,n,i){let r=this,a=this.path===""?Yr.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||a;let o=new Bn(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),Wt("ObjectLoader: Can't parse "+t+".",u.message);return}let h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),Wt("ObjectLoader: Can't load "+t);return}r.parse(c,e)},n,i)}async loadAsync(t,e){let n=this,i=this.path===""?Yr.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;let r=new Bn(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let a=await r.loadAsync(t,e),o;try{o=JSON.parse(a)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+t+". "+c.message)}let l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(o)}parse(t,e){let n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),a=this.parseImages(t.images,function(){e!==void 0&&e(c)}),o=this.parseTextures(t.textures,a),l=this.parseMaterials(t.materials,o),c=this.parseObject(t.object,r,l,o,n),h=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),e!==void 0){let u=!1;for(let d in a)if(a[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&e(c)}return c}async parseAsync(t){let e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),a=this.parseTextures(t.textures,r),o=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,i,o,a,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(t,e){Ju[t]=e}parseShapes(t){let e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){let r=new Zi().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){let n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,a=t.length;r<a;r++){let o=new qa().fromJSON(t[r],i);n[o.uuid]=o}return n}parseGeometries(t,e){let n={};if(t!==void 0){let i=new zo;for(let r=0,a=t.length;r<a;r++){let o,l=t[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in rp?o=rp[l.type].fromJSON(l,e):l.type in Ju?o=Ju[l.type].fromJSON(l,e):Ct(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(t,e){let n={},i={};if(t!==void 0){let r=new Fo;r.setTextures(e);for(let a=0,o=t.length;a<o;a++){let l=t[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(t){let e={};if(t!==void 0)for(let n=0;n<t.length;n++){let i=t[n],r=Ki.parse(i);e[r.uuid]=r}return e}parseImages(t,e){let n=this,i={},r;function a(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){let c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:fr(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){let l=new Jr(e);r=new ji(l),r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=t.length;c<h;c++){let u=t[c],d=u.url;if(Array.isArray(d)){let f=[];for(let p=0,_=d.length;p<_;p++){let m=d[p],g=o(m);g!==null&&(g instanceof HTMLImageElement?f.push(g):f.push(new pn(g.data,g.width,g.height)))}i[u.uuid]=new Cn(f)}else{let f=o(u.url);i[u.uuid]=new Cn(f)}}}return i}async parseImagesAsync(t){let e=this,n={},i;async function r(a){if(typeof a=="string"){let o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:e.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:fr(a.type,a.data),width:a.width,height:a.height}:null}if(t!==void 0&&t.length>0){i=new ji(this.manager),i.setPriority(this.priority),i.setCache(this.cache),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=t.length;a<o;a++){let l=t[a],c=l.url;if(Array.isArray(c)){let h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new pn(p.data,p.width,p.height)))}n[l.uuid]=new Cn(h)}else{let h=await r(l.url);n[l.uuid]=new Cn(h)}}}return n}parseTextures(t,e){function n(r,a){return typeof r=="number"?r:(Ct("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}let i={};if(t!==void 0)for(let r=0,a=t.length;r<a;r++){let o=t[r];o.image===void 0&&Ct('ObjectLoader: No "image" specified for',o.uuid),e[o.image]===void 0&&Ct("ObjectLoader: Undefined image",o.image);let l=e[o.image],c=l.data,h;Array.isArray(c)?(h=new Ji,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new pn:h=new Le,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,Z0)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],mp),h.wrapT=n(o.wrap[1],mp)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,gp)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,gp)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.mipmapsAutoUpdate!==void 0&&(h.mipmapsAutoUpdate=o.mipmapsAutoUpdate),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.normalized!==void 0&&(h.normalized=o.normalized),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(t,e,n,i,r){let a;function o(d){return e[d]===void 0&&Ct("ObjectLoader: Undefined geometry",d),e[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){let f=[];for(let p=0,_=d.length;p<_;p++){let m=d[p];n[m]===void 0&&Ct("ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[d]===void 0&&Ct("ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&Ct("ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(t.type){case"Scene":a=new Rs,t.background!==void 0&&(Number.isInteger(t.background)?a.background=new Lt(t.background):a.background=c(t.background)),t.environment!==void 0&&(a.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?a.fog=new Ha(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(a.fog=new As(t.fog.color,t.fog.density)),t.fog.name!==""&&(a.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(a.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(a.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&a.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":a=new Ue(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(a.focus=t.focus),t.zoom!==void 0&&(a.zoom=t.zoom),t.filmGauge!==void 0&&(a.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(a.filmOffset=t.filmOffset),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"OrthographicCamera":a=new Bs(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(a.zoom=t.zoom),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"AmbientLight":a=new No(t.color,t.intensity);break;case"DirectionalLight":a=new zs(t.color,t.intensity),a.target=t.target||"";break;case"PointLight":a=new Do(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":a=new Uo(t.color,t.intensity,t.width,t.height);break;case"SpotLight":a=new Lo(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),a.target=t.target||"",t.map!==void 0&&(a.map=c(t.map));break;case"HemisphereLight":a=new Us(t.color,t.groundColor,t.intensity);break;case"LightProbe":let d=new qr().fromArray(t.sh);a=new Oo(d,t.intensity);break;case"SkinnedMesh":h=o(t.geometry),u=l(t.material),a=new Ja(h,u),t.bindMode!==void 0&&(a.bindMode=t.bindMode),t.bindMatrix!==void 0&&a.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(a.skeleton=t.skeleton);break;case"Mesh":h=o(t.geometry),u=l(t.material),a=new Ee(h,u);break;case"InstancedMesh":h=o(t.geometry),u=l(t.material);let f=t.count,p=t.instanceMatrix,_=t.instanceColor;a=new Ya(h,u,f),a.instanceMatrix=new Ri(new Float32Array(p.array),16),_!==void 0&&(a.instanceColor=new Ri(new Float32Array(_.array),_.itemSize));break;case"BatchedMesh":h=o(t.geometry),u=l(t.material),a=new Za(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=t.perObjectFrustumCulled,a.sortObjects=t.sortObjects,a._drawRanges=t.drawRanges,a._reservedRanges=t.reservedRanges,a._geometryInfo=t.geometryInfo.map(m=>{let g=null,y=null;return m.boundingBox!==void 0&&(g=new Oe().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(y=new Be().fromJSON(m.boundingSphere)),{...m,boundingBox:g,boundingSphere:y}}),a._instanceInfo=t.instanceInfo,a._availableInstanceIds=t.availableInstanceIds,a._availableGeometryIds=t.availableGeometryIds,a._nextIndexStart=t.nextIndexStart,a._nextVertexStart=t.nextVertexStart,a._geometryCount=t.geometryCount,a._maxInstanceCount=t.maxInstanceCount,a._maxVertexCount=t.maxVertexCount,a._maxIndexCount=t.maxIndexCount,a._geometryInitialized=t.geometryInitialized,a._matricesTexture=c(t.matricesTexture.uuid),a._indirectTexture=c(t.indirectTexture.uuid),t.colorsTexture!==void 0&&(a._colorsTexture=c(t.colorsTexture.uuid)),t.boundingSphere!==void 0&&(a.boundingSphere=new Be().fromJSON(t.boundingSphere)),t.boundingBox!==void 0&&(a.boundingBox=new Oe().fromJSON(t.boundingBox));break;case"LOD":a=new Xa;break;case"Line":a=new Kn(o(t.geometry),l(t.material));break;case"LineLoop":a=new $a(o(t.geometry),l(t.material));break;case"LineSegments":a=new In(o(t.geometry),l(t.material));break;case"PointCloud":case"Points":a=new Qa(o(t.geometry),l(t.material));break;case"Sprite":a=new Wa(l(t.material)),t.center!==void 0&&a.center.fromArray(t.center);break;case"Group":a=new Qe;break;case"Bone":a=new Ar;break;default:a=new ge}if(a.uuid=t.uuid,t.name!==void 0&&(a.name=t.name),t.pivot!==void 0&&(a.pivot=new I().fromArray(t.pivot)),t.matrix!==void 0?(a.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=t.matrixAutoUpdate),a.matrixAutoUpdate&&(a.matrix.decompose(a.position,a.quaternion,a.scale),a.pivot!==null&&a.position.copy(a.pivot).applyMatrix4(a.matrix).sub(a.pivot))):(t.position!==void 0&&a.position.fromArray(t.position),t.rotation!==void 0&&a.rotation.fromArray(t.rotation),t.quaternion!==void 0&&a.quaternion.fromArray(t.quaternion),t.scale!==void 0&&a.scale.fromArray(t.scale)),t.up!==void 0&&a.up.fromArray(t.up),t.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),t.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=t.morphTargetInfluences.slice()),t.castShadow!==void 0&&(a.castShadow=t.castShadow),t.receiveShadow!==void 0&&(a.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(a.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(a.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(a.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(a.shadow.radius=t.shadow.radius),t.shadow.blurSamples!==void 0&&(a.shadow.blurSamples=t.shadow.blurSamples),t.shadow.focus!==void 0&&(a.shadow.focus=t.shadow.focus),t.shadow.aspect!==void 0&&(a.shadow.aspect=t.shadow.aspect),t.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.mapType!==void 0&&(a.shadow.mapType=t.shadow.mapType),t.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(a.visible=t.visible),t.frustumCulled!==void 0&&(a.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(a.renderOrder=t.renderOrder),t.static!==void 0&&(a.static=t.static),t.userData!==void 0&&(a.userData=t.userData),t.layers!==void 0&&(a.layers.mask=t.layers),t.children!==void 0){let d=t.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],e,n,i,r))}if(t.animations!==void 0){let d=t.animations;for(let f=0;f<d.length;f++){let p=d[f];a.animations.push(r[p])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(a.autoUpdate=t.autoUpdate);let d=t.levels;for(let f=0;f<d.length;f++){let p=d[f],_=a.getObjectByProperty("uuid",p.object);_!==void 0&&a.addLevel(_,p.distance,p.hysteresis)}}return a}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=e[n.skeleton];i===void 0?Ct("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){let n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new ge}})}},Z0={UVMapping:Jo,CubeReflectionMapping:fi,CubeRefractionMapping:is,EquirectangularReflectionMapping:Qr,EquirectangularRefractionMapping:Kr},mp={RepeatWrapping:ki,ClampToEdgeWrapping:fn,MirroredRepeatWrapping:gr},gp={NearestFilter:Pe,NearestMipmapNearestFilter:Zh,NearestMipmapLinearFilter:Hs,LinearFilter:we,LinearMipmapNearestFilter:jr,LinearMipmapLinearFilter:zn},qu=new WeakMap,eh=class extends Ke{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ct("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ct("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=$n.get(`image-bitmap:${t}`);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(c=>{qu.has(a)===!0?(i&&i(qu.get(a)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return $n.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),qu.set(l,c),$n.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});$n.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Mc,Zr=class{static getContext(){return Mc===void 0&&(Mc=new(window.AudioContext||window.webkitAudioContext)),Mc}static setContext(t){Mc=t}},nh=class extends Ke{constructor(t){super(t)}load(t,e,n,i){let r=this,a=new Bn(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{let c=l.slice(0),h=Zr.getContext(),u=t+"#decode";r.manager.itemStart(u),h.decodeAudioData(c,function(d){e(d),r.manager.itemEnd(u)}).catch(function(d){o(d),r.manager.itemEnd(u)})}catch(c){o(c)}},n,i);function o(l){i?i(l):Wt(l),r.manager.itemError(t)}}},_p=new ne,xp=new ne,fs=new ne,ih=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ue,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ue,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){let e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,fs.copy(t.projectionMatrix);let i=e.eyeSep/2,r=i*e.near/e.focus,a=e.near*Math.tan(vs*e.fov*.5)/e.zoom,o,l;xp.elements[12]=-i,_p.elements[12]=i,o=-a*e.aspect+r,l=a*e.aspect+r,fs.elements[0]=2*e.near/(l-o),fs.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(fs),o=-a*e.aspect-r,l=a*e.aspect-r,fs.elements[0]=2*e.near/(l-o),fs.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(fs)}this.cameraL.matrix.copy(t.matrixWorld).multiply(xp),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(t.matrixWorld).multiply(_p),this.cameraR.matrixWorldNeedsUpdate=!0}},cr=-90,hr=1,Gs=class extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ue(cr,hr,t,e);i.layers=this.layers,this.add(i);let r=new Ue(cr,hr,t,e);r.layers=this.layers,this.add(r);let a=new Ue(cr,hr,t,e);a.layers=this.layers,this.add(a);let o=new Ue(cr,hr,t,e);o.layers=this.layers,this.add(o);let l=new Ue(cr,hr,t,e);l.layers=this.layers,this.add(l);let c=new Ue(cr,hr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hi)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Go=class extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},Vo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=$0.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function $0(){this._document.hidden===!1&&this.reset()}var ps=new I,Yu=new Ye,Q0=new I,ms=new I,gs=new I,sh=class extends ge{constructor(){super(),this.type="AudioListener",this.context=Zr.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Vo}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();let e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(ps,Yu,Q0),ms.set(0,0,-1).applyQuaternion(Yu),gs.set(0,1,0).applyQuaternion(Yu),e.positionX){let n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(ps.x,n),e.positionY.linearRampToValueAtTime(ps.y,n),e.positionZ.linearRampToValueAtTime(ps.z,n),e.forwardX.linearRampToValueAtTime(ms.x,n),e.forwardY.linearRampToValueAtTime(ms.y,n),e.forwardZ.linearRampToValueAtTime(ms.z,n),e.upX.linearRampToValueAtTime(gs.x,n),e.upY.linearRampToValueAtTime(gs.y,n),e.upZ.linearRampToValueAtTime(gs.z,n)}else e.setPosition(ps.x,ps.y,ps.z),e.setOrientation(ms.x,ms.y,ms.z,gs.x,gs.y,gs.z)}},ko=class extends ge{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){Ct("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Ct("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;let e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Ct("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){Ct("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){Ct("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Ct("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){Ct("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(Ct("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}},_s=new I,yp=new Ye,K0=new I,xs=new I,rh=class extends ko{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(_s,yp,K0),xs.set(0,0,1).applyQuaternion(yp);let e=this.panner;if(e.positionX){let n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(_s.x,n),e.positionY.linearRampToValueAtTime(_s.y,n),e.positionZ.linearRampToValueAtTime(_s.z,n),e.orientationX.linearRampToValueAtTime(xs.x,n),e.orientationY.linearRampToValueAtTime(xs.y,n),e.orientationZ.linearRampToValueAtTime(xs.z,n)}else e.setPosition(_s.x,_s.y,_s.z),e.setOrientation(xs.x,xs.y,xs.z)}},ah=class{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0,e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}},Ho=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,a;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=e}else{a+=e;let o=e/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,a=i;r!==a;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){Ye.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){let a=this._workIndex*r;Ye.multiplyQuaternionsFlat(t,a,t,e,t,n),Ye.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let l=e+o;t[l]=t[l]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,r){for(let a=0;a!==r;++a){let o=e+a;t[o]=t[o]+t[n+a]*i}}},jd="\\[\\]\\.:\\/",j0=new RegExp("["+jd+"]","g"),tf="[^"+jd+"]",t_="[^"+jd.replace("\\.","")+"]",e_=/((?:WC+[\/:])*)/.source.replace("WC",tf),n_=/(WCOD+)?/.source.replace("WCOD",t_),i_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tf),s_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tf),r_=new RegExp("^"+e_+n_+i_+s_+"$"),a_=["material","materials","bones","map"],ld=class{constructor(t,e,n){let i=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(j0,"")}static parseTrackName(t){let e=r_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);a_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=ld;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var oh=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=kn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){let t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length,o,l=t.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let d=arguments[h],f=d.uuid,p=e[f];if(p===void 0){p=l++,e[f]=p,t.push(d);for(let _=0,m=a;_!==m;++_)r[_].push(new ye(d,n[_],i[_]))}else if(p<c){o=t[p];let _=--c,m=t[_];e[m.uuid]=p,t[p]=m,e[f]=_,t[_]=d;for(let g=0,y=a;g!==y;++g){let M=r[g],v=M[_],E=M[p];M[p]=v,E===void 0&&(E=new ye(d,n[g],i[g])),M[_]=E}}else t[p]!==o&&Wt("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){let l=arguments[a],c=l.uuid,h=e[c];if(h!==void 0&&h>=r){let u=r++,d=t[u];e[d.uuid]=h,t[h]=d,e[c]=u,t[u]=l;for(let f=0,p=i;f!==p;++f){let _=n[f],m=_[u],g=_[h];_[h]=m,_[u]=g}}}this.nCachedObjects_=r}uncache(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,a=t.length;for(let o=0,l=arguments.length;o!==l;++o){let c=arguments[o],h=c.uuid,u=e[h];if(u!==void 0)if(delete e[h],u<r){let d=--r,f=t[d],p=--a,_=t[p];u!==d&&(e[f.uuid]=u),t[u]=f,d!==p&&(e[_.uuid]=d),t[d]=_,t.pop();for(let m=0,g=i;m!==g;++m){let y=n[m],M=y[d],v=y[p];y[u]=M,y[d]=v,y.pop()}}else{let d=--a,f=t[d];u!==d&&(e[f.uuid]=u),t[u]=f,t.pop();for(let p=0,_=i;p!==_;++p){let m=n[p];m[u]=m[d],m.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){let n=this._bindingsIndicesByPath,i=n[t],r=this._bindings;if(i!==void 0)return r[i];let a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=r.length,n[t]=i,a.push(t),o.push(e),r.push(u);for(let d=h,f=l.length;d!==f;++d){let p=l[d];u[d]=new ye(p,t,e)}return u}unsubscribe_(t){let e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){let i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=i[o];e[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}},Wo=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let r=e.tracks,a=r.length,o=new Array(a),l={endingStart:Gi,endingEnd:Gi};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Od,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let i=this._clip.duration,r=t._clip.duration,a=r/i,o=i/r;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);let a=this._updateTime(e),o=this._updateWeight(t);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case nu:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Cl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,a=n===Fd;if(t===0)return r===-1?i:a&&(r&1)===1?e-i:i;if(n===Ud){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){let o=Math.floor(i/e);i-=e*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){let c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=Vi,i.endingEnd=Vi):(t?i.endingStart=this.zeroSlopeAtStart?Vi:Gi:i.endingStart=xr,e?i.endingEnd=this.zeroSlopeAtEnd?Vi:Gi:i.endingEnd=xr)}_scheduleFading(t,e,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=e,o[1]=r+t,l[1]=n,this}},o_=new Float32Array(1),lh=class extends Sn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,p=h[f];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let _=e&&e._propertyBindings[u].binding.parsedPath;p=new Ho(ye.create(n,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,r=this._actionsByClip,a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{let o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;let u=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new Hr(new Float32Array(2),new Float32Array(2),1,o_),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let i=e||this._root,r=i.uuid,a=typeof t=="string"?Ki.findByName(i,t):t,o=a!==null?a.uuid:t,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Cl),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new Wo(this,a,e,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?Ki.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},ch=class extends br{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isRenderTarget3D=!0,this.depth=n;for(let r=0;r<this.textures.length;r++){let a=new Ts(null,t,e,n);a.isRenderTargetTexture=!0,a.renderTarget=this,this.textures[r]=a}this._setTextureOptions(i)}},hh=class s{constructor(t){this.value=t}clone(){return new s(this.value.clone===void 0?this.value:this.value.clone())}},l_=0,uh=class extends Sn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:l_++}),this.name="",this.usage=Il,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){let e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(t){this.name=t.name,this.usage=t.usage;let e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){let r=e[n];Array.isArray(r)?this.uniforms.push(r.map(a=>a.clone())):this.uniforms.push(r.clone())}return this}clone(){return new this.constructor().copy(this)}},dh=class extends Cs{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}},fh=class{constructor(t,e,n,i,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=a,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}},vp=new ne,ph=class{constructor(t,e,n=0,i=1/0){this.ray=new Qn(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ws,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Wt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vp),this}intersectObject(t,e=!0,n=[]){return cd(t,this,n,e),n.sort(Mp),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)cd(t[i],this,n,e);return n.sort(Mp),n}};function Mp(s,t){return s.distance-t.distance}function cd(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)cd(r[a],t,e,!0)}}var mh=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ct("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},gh=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},_h=class{constructor(t=1,e=0,n=0){this.radius=t,this.theta=e,this.y=n}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}},xh=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}},Sp=new lt,Xo=class{constructor(t=new lt(1/0,1/0),e=new lt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Sp.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sp).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},bp=new I,Sc=new I,ur=new I,dr=new I,Zu=new I,c_=new I,h_=new I,yh=class{constructor(t=new I,e=new I){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){bp.subVectors(t,this.start),Sc.subVectors(this.end,this.start);let n=Sc.dot(Sc);if(n===0)return 0;let r=Sc.dot(bp)/n;return e&&(r=jt(r,0,1)),r}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=c_,n=h_){let i=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,h=t.end;ur.subVectors(c,o),dr.subVectors(h,l),Zu.subVectors(o,l);let u=ur.dot(ur),d=dr.dot(dr),f=dr.dot(Zu);if(u<=i&&d<=i)return e.copy(o),n.copy(l),e.distanceToSquared(n);if(u<=i)r=0,a=f/d,a=jt(a,0,1);else{let p=ur.dot(Zu);if(d<=i)a=0,r=jt(-p/u,0,1);else{let _=ur.dot(dr),m=u*d-_*_;m!==0?r=jt((_*f-p*d)/m,0,1):r=0,a=(_*r+f)/d,a<0?(a=0,r=jt(-p/u,0,1)):a>1&&(a=1,r=jt((_-p)/u,0,1))}}return e.copy(o).addScaledVector(ur,r),n.copy(l).addScaledVector(dr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Tp=new I,vh=class extends ge{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";let n=new he,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){let c=a/l*Math.PI*2,h=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Ot(i,3));let r=new Ze({fog:!1,toneMapped:!1});this.cone=new In(n,r),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;let t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Tp.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Tp),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},zi=new I,bc=new ne,$u=new ne,Mh=class extends In{constructor(t){let e=Bm(t),n=new he,i=[],r=[];for(let c=0;c<e.length;c++){let h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Ot(i,3)),n.setAttribute("color",new Ot(r,3));let a=new Ze({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;let o=new Lt(255),l=new Lt(65280);this.setColors(o,l)}updateMatrixWorld(t){let e=this.bones,n=this.geometry,i=n.getAttribute("position");$u.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<e.length;r++){let o=e[r];o.parent&&o.parent.isBone&&(bc.multiplyMatrices($u,o.matrixWorld),zi.setFromMatrixPosition(bc),i.setXYZ(a,zi.x,zi.y,zi.z),bc.multiplyMatrices($u,o.parent.matrixWorld),zi.setFromMatrixPosition(bc),i.setXYZ(a+1,zi.x,zi.y,zi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){let i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,t.r,t.g,t.b),i.setXYZ(r+1,e.r,e.g,e.b);return i.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function Bm(s){let t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push(...Bm(s.children[e]));return t}var Sh=class extends Ee{constructor(t,e,n){let i=new Ii(e,4,2),r=new an({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},u_=new I,wp=new Lt,Ep=new Lt,bh=class extends ge{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let i=new zr(e);i.rotateY(Math.PI*.5),this.material=new an({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new be(a,3)),this.add(new Ee(i,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let e=t.geometry.getAttribute("color");wp.copy(this.light.color),Ep.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){let r=n<i/2?wp:Ep;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),t.lookAt(u_.setFromMatrixPosition(this.light.matrixWorld).negate())}},Th=class extends In{constructor(t=10,e=10,n=4473924,i=8947848){n=new Lt(n),i=new Lt(i);let r=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,f=0,p=-o;d<=e;d++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);let _=d===r?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}let h=new he;h.setAttribute("position",new Ot(l,3)),h.setAttribute("color",new Ot(c,3));let u=new Ze({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},wh=class extends In{constructor(t=10,e=16,n=8,i=64,r=4473924,a=8947848){r=new Lt(r),a=new Lt(a);let o=[],l=[];if(e>1)for(let u=0;u<e;u++){let d=u/e*(Math.PI*2),f=Math.sin(d)*t,p=Math.cos(d)*t;o.push(0,0,0),o.push(f,0,p);let _=u&1?r:a;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let u=0;u<n;u++){let d=u&1?r:a,f=t-t/n*u;for(let p=0;p<i;p++){let _=p/i*(Math.PI*2),m=Math.sin(_)*f,g=Math.cos(_)*f;o.push(m,0,g),l.push(d.r,d.g,d.b),_=(p+1)/i*(Math.PI*2),m=Math.sin(_)*f,g=Math.cos(_)*f,o.push(m,0,g),l.push(d.r,d.g,d.b)}}let c=new he;c.setAttribute("position",new Ot(o,3)),c.setAttribute("color",new Ot(l,3));let h=new Ze({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Ap=new I,Tc=new I,Rp=new I,Eh=class extends ge{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new he;i.setAttribute("position",new Ot([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));let r=new Ze({fog:!1,toneMapped:!1});this.lightPlane=new Kn(i,r),this.add(this.lightPlane),i=new he,i.setAttribute("position",new Ot([0,0,0,0,0,1],3)),this.targetLine=new Kn(i,r),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Ap.setFromMatrixPosition(this.light.matrixWorld),Tc.setFromMatrixPosition(this.light.target.matrixWorld),Rp.subVectors(Tc,Ap),this.lightPlane.lookAt(Tc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Tc),this.targetLine.scale.z=Rp.length()}},wc=new I,Ie=new Fs,Ah=class extends In{constructor(t){let e=new he,n=new Ze({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,_){l(p),l(_)}function l(p){i.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(i.length/3-1)}e.setAttribute("position",new Ot(i,3)),e.setAttribute("color",new Ot(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();let c=new Lt(16755200),h=new Lt(16711680),u=new Lt(43775),d=new Lt(16777215),f=new Lt(3355443);this.setColors(c,h,u,d,f)}setColors(t,e,n,i,r){let o=this.geometry.getAttribute("color");return o.setXYZ(0,t.r,t.g,t.b),o.setXYZ(1,t.r,t.g,t.b),o.setXYZ(2,t.r,t.g,t.b),o.setXYZ(3,t.r,t.g,t.b),o.setXYZ(4,t.r,t.g,t.b),o.setXYZ(5,t.r,t.g,t.b),o.setXYZ(6,t.r,t.g,t.b),o.setXYZ(7,t.r,t.g,t.b),o.setXYZ(8,t.r,t.g,t.b),o.setXYZ(9,t.r,t.g,t.b),o.setXYZ(10,t.r,t.g,t.b),o.setXYZ(11,t.r,t.g,t.b),o.setXYZ(12,t.r,t.g,t.b),o.setXYZ(13,t.r,t.g,t.b),o.setXYZ(14,t.r,t.g,t.b),o.setXYZ(15,t.r,t.g,t.b),o.setXYZ(16,t.r,t.g,t.b),o.setXYZ(17,t.r,t.g,t.b),o.setXYZ(18,t.r,t.g,t.b),o.setXYZ(19,t.r,t.g,t.b),o.setXYZ(20,t.r,t.g,t.b),o.setXYZ(21,t.r,t.g,t.b),o.setXYZ(22,t.r,t.g,t.b),o.setXYZ(23,t.r,t.g,t.b),o.setXYZ(24,e.r,e.g,e.b),o.setXYZ(25,e.r,e.g,e.b),o.setXYZ(26,e.r,e.g,e.b),o.setXYZ(27,e.r,e.g,e.b),o.setXYZ(28,e.r,e.g,e.b),o.setXYZ(29,e.r,e.g,e.b),o.setXYZ(30,e.r,e.g,e.b),o.setXYZ(31,e.r,e.g,e.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){let t=this.geometry,e=this.pointMap,n=1,i=1,r,a;if(Ie.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===Mn)r=-1,a=1;else if(this.camera.coordinateSystem===Hi)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Ne("c",e,t,Ie,0,0,r),Ne("t",e,t,Ie,0,0,a),Ne("n1",e,t,Ie,-n,-i,r),Ne("n2",e,t,Ie,n,-i,r),Ne("n3",e,t,Ie,-n,i,r),Ne("n4",e,t,Ie,n,i,r),Ne("f1",e,t,Ie,-n,-i,a),Ne("f2",e,t,Ie,n,-i,a),Ne("f3",e,t,Ie,-n,i,a),Ne("f4",e,t,Ie,n,i,a),Ne("u1",e,t,Ie,n*.7,i*1.1,r),Ne("u2",e,t,Ie,-n*.7,i*1.1,r),Ne("u3",e,t,Ie,0,i*2,r),Ne("cf1",e,t,Ie,-n,0,a),Ne("cf2",e,t,Ie,n,0,a),Ne("cf3",e,t,Ie,0,-i,a),Ne("cf4",e,t,Ie,0,i,a),Ne("cn1",e,t,Ie,-n,0,r),Ne("cn2",e,t,Ie,n,0,r),Ne("cn3",e,t,Ie,0,-i,r),Ne("cn4",e,t,Ie,0,i,r),t.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function Ne(s,t,e,n,i,r,a){wc.set(i,r,a).unproject(n);let o=t[s];if(o!==void 0){let l=e.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],wc.x,wc.y,wc.z)}}var Ec=new Oe,Rh=class extends In{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new he;r.setIndex(new be(n,1)),r.setAttribute("position",new be(i,3)),super(r,new Ze({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Ec.setFromObject(this.object),Ec.isEmpty())return;let t=Ec.min,e=Ec.max,n=this.geometry.attributes.position,i=n.array;i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=t.x,i[4]=e.y,i[5]=e.z,i[6]=t.x,i[7]=t.y,i[8]=e.z,i[9]=e.x,i[10]=t.y,i[11]=e.z,i[12]=e.x,i[13]=e.y,i[14]=t.z,i[15]=t.x,i[16]=e.y,i[17]=t.z,i[18]=t.x,i[19]=t.y,i[20]=t.z,i[21]=e.x,i[22]=t.y,i[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Ch=class extends In{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new he;r.setIndex(new be(n,1)),r.setAttribute("position",new Ot(i,3)),super(r,new Ze({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Ih=class extends Kn{constructor(t,e=1,n=16776960){let i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new he;a.setAttribute("position",new Ot(r,3)),a.computeBoundingSphere(),super(a,new Ze({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;let o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new he;l.setAttribute("position",new Ot(o,3)),l.computeBoundingSphere(),this.add(new Ee(l,new an({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},Cp=new I,Ac,Qu,Ph=class extends ge{constructor(t=new I(0,0,1),e=new I(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Ac===void 0&&(Ac=new he,Ac.setAttribute("position",new Ot([0,0,0,0,1,0],3)),Qu=new qi(.5,1,5,1),Qu.translate(0,-.5,0)),this.position.copy(e),this.line=new Kn(Ac,new Ze({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ee(Qu,new an({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Cp.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Cp,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Lh=class extends In{constructor(t=1){let e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new he;i.setAttribute("position",new Ot(e,3)),i.setAttribute("color",new Ot(n,3));let r=new Ze({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){let i=new Lt,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Dh=class{constructor(){this.type="ShapePath",this.color=new Lt,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new Yi,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,a){return this.currentPath.bezierCurveTo(t,e,n,i,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1,u=c.length;for(let d=0,f=u-1;d<u;f=d++){let p=c[d],_=c[f];p.y>l.y!=_.y>l.y&&l.x<(_.x-p.x)*(l.y-p.y)/(_.y-p.y)+p.x&&(h=!h)}return h}function e(l,c){let h=c.getCenter(new lt);if(t(h,l))return h;let u=h.y,d=[],f=l.length;for(let p=0;p<f;p++){let _=l[p],m=l[(p+1)%f];if(_.y>u!=m.y>u){let g=_.x+(u-_.y)*(m.x-_.x)/(m.y-_.y);d.push(g)}}return d.length>1&&(d.sort((p,_)=>p-_),h.x=(d[0]+d[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Ct('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let i=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=Nn.area(c);if(h===0)continue;let u=new Xo;for(let d=0;d<c.length;d++)u.expandByPoint(c[d]);r.push({subPath:l,points:c,boundingBox:u,interiorPoint:e(c,u),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],h=0;for(let u=l-1;u>=0;u--){let d=r[u];if(d.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,d.points)){c.container=d.exclude?d.container:d,h=d.winding,c.winding+=h;break}}i(c.winding)===i(h)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let a=[],o=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new Zi;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=o.get(l.container);if(!c)continue;let h=new Yi;h.curves=l.subPath.curves,c.holes.push(h)}return a}},Nh=class extends Sn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function d_(s,t){let e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function f_(s,t){let e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function p_(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function lu(s,t,e,n){let i=m_(n);switch(e){case tu:return s*t;case $o:return s*t/i.components*i.byteLength;case ta:return s*t/i.components*i.byteLength;case Di:return s*t*2/i.components*i.byteLength;case Qo:return s*t*2/i.components*i.byteLength;case eu:return s*t*3/i.components*i.byteLength;case mn:return s*t*4/i.components*i.byteLength;case Ko:return s*t*4/i.components*i.byteLength;case ea:case na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ia:case sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case tl:case nl:return Math.max(s,16)*Math.max(t,8)/4;case jo:case el:return Math.max(s,8)*Math.max(t,8)/2;case il:case sl:case al:case ol:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case rl:case ra:case ll:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case cl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case hl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ul:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case dl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case fl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case pl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ml:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case gl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case _l:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case xl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case yl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case vl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ml:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Sl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case bl:case Tl:case wl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case El:case Al:return Math.ceil(s/4)*Math.ceil(t/4)*8;case aa:case Rl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function m_(s){switch(s){case _n:case $h:return{byteLength:1,components:1};case Ws:case Qh:case Gn:return{byteLength:2,components:1};case Yo:case Zo:return{byteLength:2,components:4};case Pn:case qo:case sn:return{byteLength:4,components:1};case Kh:case jh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}var Uh=class{static contain(t,e){return d_(t,e)}static cover(t,e){return f_(t,e)}static fill(t){return p_(t)}static getByteLength(t,e,n,i){return lu(t,e,n,i)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ag(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function g_(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var __=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x_=`#ifdef USE_ALPHAHASH
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
#endif`,y_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,v_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b_=`#ifdef USE_AOMAP
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
#endif`,T_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,w_=`#ifdef USE_BATCHING
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
#endif`,E_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,I_=`#ifdef USE_IRIDESCENCE
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
#endif`,P_=`#ifdef USE_BUMPMAP
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
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,F_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,B_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,z_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,G_=`#define PI 3.141592653589793
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
} // validated`,V_=`vec3 transformedNormal = objectNormal;
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
#endif`,k_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J_="gl_FragColor = linearToOutputTexel( gl_FragColor );",q_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y_=`#ifdef USE_ENVMAP
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
#endif`,Z_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,$_=`#ifdef USE_ENVMAP
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
#endif`,Q_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K_=`#ifdef USE_ENVMAP
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
#endif`,j_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ex=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ix=`#ifdef USE_GRADIENTMAP
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
}`,sx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ox=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lx=`#ifdef USE_ENVMAP
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
#endif`,cx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ux=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fx=`PhysicalMaterial material;
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
#endif`,px=`uniform sampler2D dfgLUT;
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
}`,mx=`
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
#endif`,gx=`#if defined( RE_IndirectDiffuse )
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
#endif`,_x=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xx=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,yx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ex=`#if defined( USE_POINTS_UV )
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
#endif`,Ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ix=`#if defined( USE_MORPHCOLORS )
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
#endif`,Px=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lx=`#ifdef USE_MORPHTARGETS
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
#endif`,Dx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ux=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zx=`#ifdef USE_NORMALMAP
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
#endif`,Gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$x=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ty=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ey=`float getShadowMask() {
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
}`,ny=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iy=`#ifdef USE_SKINNING
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
#endif`,sy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ry=`#ifdef USE_SKINNING
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
#endif`,ay=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ly=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hy=`#ifdef USE_TRANSMISSION
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
#endif`,uy=`#ifdef USE_TRANSMISSION
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
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,my=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_y=`uniform sampler2D t2D;
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
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yy=`uniform float backgroundBlurriness;
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
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`#include <common>
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
}`,by=`#if DEPTH_PACKING == 3200
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
}`,Ty=`#define DISTANCE
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
}`,wy=`#define DISTANCE
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ay=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ry=`uniform float scale;
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Iy=`#include <common>
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
}`,Py=`uniform vec3 diffuse;
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
}`,Ly=`#define LAMBERT
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
}`,Dy=`#define LAMBERT
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
}`,Ny=`#define MATCAP
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
}`,Uy=`#define MATCAP
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
}`,Oy=`#define NORMAL
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
}`,Fy=`#define NORMAL
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
}`,By=`#define PHONG
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
}`,zy=`#define PHONG
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
}`,Gy=`#define STANDARD
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
}`,Vy=`#define STANDARD
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
}`,ky=`#define TOON
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
}`,Hy=`#define TOON
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
}`,Wy=`uniform float size;
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
}`,Xy=`uniform vec3 diffuse;
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
}`,Jy=`#include <common>
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
}`,qy=`uniform vec3 color;
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
}`,Yy=`uniform float rotation;
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
}`,Zy=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:__,alphahash_pars_fragment:x_,alphamap_fragment:y_,alphamap_pars_fragment:v_,alphatest_fragment:M_,alphatest_pars_fragment:S_,aomap_fragment:b_,aomap_pars_fragment:T_,batching_pars_vertex:w_,batching_vertex:E_,begin_vertex:A_,beginnormal_vertex:R_,bsdfs:C_,iridescence_fragment:I_,bumpmap_pars_fragment:P_,clipping_planes_fragment:L_,clipping_planes_pars_fragment:D_,clipping_planes_pars_vertex:N_,clipping_planes_vertex:U_,color_fragment:O_,color_pars_fragment:F_,color_pars_vertex:B_,color_vertex:z_,common:G_,defaultnormal_vertex:V_,displacementmap_pars_vertex:k_,displacementmap_vertex:H_,emissivemap_fragment:W_,emissivemap_pars_fragment:X_,colorspace_fragment:J_,colorspace_pars_fragment:q_,envmap_fragment:Y_,envmap_common_pars_fragment:Z_,envmap_pars_fragment:$_,envmap_pars_vertex:Q_,envmap_physical_pars_fragment:lx,envmap_vertex:K_,fog_vertex:j_,fog_pars_vertex:tx,fog_fragment:ex,fog_pars_fragment:nx,gradientmap_pars_fragment:ix,lightmap_pars_fragment:sx,lights_lambert_fragment:rx,lights_lambert_pars_fragment:ax,lights_pars_begin:ox,lights_toon_fragment:cx,lights_toon_pars_fragment:hx,lights_phong_fragment:ux,lights_phong_pars_fragment:dx,lights_physical_fragment:fx,lights_physical_pars_fragment:px,lights_fragment_begin:mx,lights_fragment_maps:gx,lights_fragment_end:_x,lightprobes_pars_fragment:xx,logdepthbuf_fragment:yx,logdepthbuf_pars_fragment:vx,logdepthbuf_pars_vertex:Mx,logdepthbuf_vertex:Sx,map_fragment:bx,map_pars_fragment:Tx,map_particle_fragment:wx,map_particle_pars_fragment:Ex,metalnessmap_fragment:Ax,metalnessmap_pars_fragment:Rx,morphinstance_vertex:Cx,morphcolor_vertex:Ix,morphnormal_vertex:Px,morphtarget_pars_vertex:Lx,morphtarget_vertex:Dx,normal_fragment_begin:Nx,normal_fragment_maps:Ux,normal_pars_fragment:Ox,normal_pars_vertex:Fx,normal_vertex:Bx,normalmap_pars_fragment:zx,clearcoat_normal_fragment_begin:Gx,clearcoat_normal_fragment_maps:Vx,clearcoat_pars_fragment:kx,iridescence_pars_fragment:Hx,opaque_fragment:Wx,packing:Xx,premultiplied_alpha_fragment:Jx,project_vertex:qx,dithering_fragment:Yx,dithering_pars_fragment:Zx,roughnessmap_fragment:$x,roughnessmap_pars_fragment:Qx,shadowmap_pars_fragment:Kx,shadowmap_pars_vertex:jx,shadowmap_vertex:ty,shadowmask_pars_fragment:ey,skinbase_vertex:ny,skinning_pars_vertex:iy,skinning_vertex:sy,skinnormal_vertex:ry,specularmap_fragment:ay,specularmap_pars_fragment:oy,tonemapping_fragment:ly,tonemapping_pars_fragment:cy,transmission_fragment:hy,transmission_pars_fragment:uy,uv_pars_fragment:dy,uv_pars_vertex:fy,uv_vertex:py,worldpos_vertex:my,background_vert:gy,background_frag:_y,backgroundCube_vert:xy,backgroundCube_frag:yy,cube_vert:vy,cube_frag:My,depth_vert:Sy,depth_frag:by,distance_vert:Ty,distance_frag:wy,equirect_vert:Ey,equirect_frag:Ay,linedashed_vert:Ry,linedashed_frag:Cy,meshbasic_vert:Iy,meshbasic_frag:Py,meshlambert_vert:Ly,meshlambert_frag:Dy,meshmatcap_vert:Ny,meshmatcap_frag:Uy,meshnormal_vert:Oy,meshnormal_frag:Fy,meshphong_vert:By,meshphong_frag:zy,meshphysical_vert:Gy,meshphysical_frag:Vy,meshtoon_vert:ky,meshtoon_frag:Hy,points_vert:Wy,points_frag:Xy,shadow_vert:Jy,shadow_frag:qy,sprite_vert:Yy,sprite_frag:Zy},Pt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},ni={basic:{uniforms:ln([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:ln([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:ln([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:ln([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:ln([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:ln([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:ln([Pt.points,Pt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:ln([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:ln([Pt.common,Pt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:ln([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:ln([Pt.sprite,Pt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:ln([Pt.common,Pt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:ln([Pt.lights,Pt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};ni.physical={uniforms:ln([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};var cu={r:0,b:0,g:0},$y=new ne,og=new re;og.set(-1,0,0,0,1,0,0,0,1);function Qy(s,t,e,n,i,r){let a=new Lt(0),o=i===!0?0:1,l,c,h=null,u=0,d=null;function f(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let v=y.backgroundBlurriness>0;M=t.get(M,v)}return M}function p(y){let M=!1,v=f(y);v===null?m(a,o):v&&v.isColor&&(m(v,1),M=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(y,M){let v=f(M);v&&v.isCubeTexture?(c===void 0&&(c=new Ee(new hi(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Xs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($y.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(og),c.material.toneMapped=pe.getTransfer(v.colorSpace)!==xe,(h!==v||u!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ee(new On(2,2),new Fn({name:"BackgroundMaterial",uniforms:Xs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=pe.getTransfer(v.colorSpace)!==xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(cu,$d(s)),e.buffers.color.setClear(cu.r,cu.g,cu.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:p,addToRenderList:_,dispose:g}}function Ky(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(U,z,X,P,H){let Z=!1,W=u(U,P,X,z);r!==W&&(r=W,c(r.object)),Z=f(U,P,X,H),Z&&p(U,P,X,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,v(U,z,X,P),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(U){return s.bindVertexArray(U)}function h(U){return s.deleteVertexArray(U)}function u(U,z,X,P){let H=P.wireframe===!0,Z=n[z.id];Z===void 0&&(Z={},n[z.id]=Z);let W=U.isInstancedMesh===!0?U.id:0,dt=Z[W];dt===void 0&&(dt={},Z[W]=dt);let q=dt[X.id];q===void 0&&(q={},dt[X.id]=q);let st=q[H];return st===void 0&&(st=d(l()),q[H]=st),st}function d(U){let z=[],X=[],P=[];for(let H=0;H<e;H++)z[H]=0,X[H]=0,P[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:P,object:U,attributes:{},index:null}}function f(U,z,X,P){let H=r.attributes,Z=z.attributes,W=0,dt=X.getAttributes();for(let q in dt)if(dt[q].location>=0){let at=H[q],Ft=Z[q];if(Ft===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(Ft=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(Ft=U.instanceColor)),at===void 0||at.attribute!==Ft||Ft&&at.data!==Ft.data)return!0;W++}return r.attributesNum!==W||r.index!==P}function p(U,z,X,P){let H={},Z=z.attributes,W=0,dt=X.getAttributes();for(let q in dt)if(dt[q].location>=0){let at=Z[q];at===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(at=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(at=U.instanceColor));let Ft={};Ft.attribute=at,at&&at.data&&(Ft.data=at.data),H[q]=Ft,W++}r.attributes=H,r.attributesNum=W,r.index=P}function _(){let U=r.newAttributes;for(let z=0,X=U.length;z<X;z++)U[z]=0}function m(U){g(U,0)}function g(U,z){let X=r.newAttributes,P=r.enabledAttributes,H=r.attributeDivisors;X[U]=1,P[U]===0&&(s.enableVertexAttribArray(U),P[U]=1),H[U]!==z&&(s.vertexAttribDivisor(U,z),H[U]=z)}function y(){let U=r.newAttributes,z=r.enabledAttributes;for(let X=0,P=z.length;X<P;X++)z[X]!==U[X]&&(s.disableVertexAttribArray(X),z[X]=0)}function M(U,z,X,P,H,Z,W){W===!0?s.vertexAttribIPointer(U,z,X,H,Z):s.vertexAttribPointer(U,z,X,P,H,Z)}function v(U,z,X,P){_();let H=P.attributes,Z=X.getAttributes(),W=z.defaultAttributeValues;for(let dt in Z){let q=Z[dt];if(q.location>=0){let st=H[dt];if(st===void 0&&(dt==="instanceMatrix"&&U.instanceMatrix&&(st=U.instanceMatrix),dt==="instanceColor"&&U.instanceColor&&(st=U.instanceColor)),st!==void 0){let at=st.normalized,Ft=st.itemSize,Mt=t.get(st);if(Mt===void 0)continue;let j=Mt.buffer,Rt=Mt.type,Nt=Mt.bytesPerElement,qt=Rt===s.INT||Rt===s.UNSIGNED_INT||st.gpuType===qo;if(st.isInterleavedBufferAttribute){let xt=st.data,Gt=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,Me=st.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let Jt=0;Jt<q.locationSize;Jt++)g(q.location+Jt,xt.meshPerAttribute);U.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Jt=0;Jt<q.locationSize;Jt++)m(q.location+Jt);s.bindBuffer(s.ARRAY_BUFFER,j);for(let Jt=0;Jt<q.locationSize;Jt++)M(q.location+Jt,Ft/q.locationSize,Rt,at,Gt*Nt,(Me+Ft/q.locationSize*Jt)*Nt,qt)}else{if(st.isInstancedBufferAttribute){for(let xt=0;xt<q.locationSize;xt++)g(q.location+xt,st.meshPerAttribute);U.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let xt=0;xt<q.locationSize;xt++)m(q.location+xt);s.bindBuffer(s.ARRAY_BUFFER,j);for(let xt=0;xt<q.locationSize;xt++)M(q.location+xt,Ft/q.locationSize,Rt,at,Ft*Nt,Ft/q.locationSize*xt*Nt,qt)}}else if(W!==void 0){let at=W[dt];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(q.location,at);break;case 3:s.vertexAttrib3fv(q.location,at);break;case 4:s.vertexAttrib4fv(q.location,at);break;default:s.vertexAttrib1fv(q.location,at)}}}}y()}function E(){D();for(let U in n){let z=n[U];for(let X in z){let P=z[X];for(let H in P){let Z=P[H];for(let W in Z)h(Z[W].object),delete Z[W];delete P[H]}}delete n[U]}}function w(U){if(n[U.id]===void 0)return;let z=n[U.id];for(let X in z){let P=z[X];for(let H in P){let Z=P[H];for(let W in Z)h(Z[W].object),delete Z[W];delete P[H]}}delete n[U.id]}function x(U){for(let z in n){let X=n[z];for(let P in X){let H=X[P];if(H[U.id]===void 0)continue;let Z=H[U.id];for(let W in Z)h(Z[W].object),delete Z[W];delete H[U.id]}}}function b(U){for(let z in n){let X=n[z],P=U.isInstancedMesh===!0?U.id:0,H=X[P];if(H!==void 0){for(let Z in H){let W=H[Z];for(let dt in W)h(W[dt].object),delete W[dt];delete H[Z]}delete X[P],Object.keys(X).length===0&&delete n[z]}}}function D(){C(),a=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function jy(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function tv(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(x){return!(x!==mn&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let b=x===Gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==_n&&x!==sn&&!b&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ct("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Ct("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,maxSamples:E,samples:w}}function ev(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Dn,o=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,M=y*4,v=g.clippingState||null;l.value=v,v=h(p,d,M,f);for(let E=0;E!==M;++E)v[E]=e[E];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,v=f;M!==_;++M,v+=4)a.copy(u[M]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var ca=class extends rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ji(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new hi(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:es});r.uniforms.tEquirect.value=e;let a=new Ee(i,r),o=e.minFilter;return e.minFilter===zn&&(e.minFilter=we),new Gs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},zm=256,nv=3,iv=20,lg=256,cg=16,sv=3,rv=new I,av=new Lt,Dl=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Gs(1,10,null),this._boxMesh=new Ee(new hi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=rv}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(av));let m=new Gs(n,i,h);return m.position.copy(o),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=km(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(zm,Yd(t))}_fromTexture(t,e){t.mapping===fi||t.mapping===is?this._setSize(t.image.length===0?zm:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Gm(t,!1,!1),n=Math.log2(t)-nv;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Gm(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===fi||t.mapping===is?(this._cubemapMaterial===null&&(this._cubemapMaterial=km()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Vm()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=ov(),this._integrationMaterial=lv());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/cg);for(let a=0;a<=n;a++){let o=s.lodToRoughness(a,n);if(a>n-sv)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(lg*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=cv());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function Gm(s,t,e){return new ca(s,{minFilter:zn,generateMipmaps:t,type:Gn,colorSpace:yr,depthBuffer:e})}function Ul(s,t,e){return new Fn({name:s,uniforms:t,vertexShader:ue.cube_vert,fragmentShader:e,side:on,blending:es,depthTest:!1,depthWrite:!1})}function ov(){return Ul("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${lg}u

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
	`)}function lv(){return Ul("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:cg}},`

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
	`)}function cv(){return Ul("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${iv}
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
	`)}function Vm(){return Ul("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function km(){return Ul("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function hv(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Qr||f===Kr)if(t.has(d)){let p=t.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let _=new ca(p.height);return _.fromEquirectangularTexture(s,d),t.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Qr||f===Kr,_=f===fi||f===is;if(p||_){let m=e.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Dl(s)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return p&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new Dl(s)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Qr?d.mapping=fi:f===Kr&&(d.mapping=is),d}function l(d){let f=0,p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function uv(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ai("WebGLRenderer: "+n+" extension not supported."),i}}}function dv(s,t,e,n){let i={},r=new WeakMap,a=new FinalizationRegistry(p=>delete i[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete i[p.id],a.unregister(p);let _=r.get(p);_&&(t.remove(_),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,_){return i[_.id]!==void 0||(_.addEventListener("dispose",o),i[_.id]=new WeakRef(_),a.register(_,_.id,_),e.memory.geometries++),_}function h(p){let _=p.attributes;for(let m in _)t.update(_[m],s.ARRAY_BUFFER)}function u(p){let _=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=_!==null?_.array.length:m.array.length/3-1,M=m.count>=65535?wr:Tr,v=new M(Math.ceil(y/3)*6,1),E=v.array;if(_!==null){let x=_.array;g=_.version;for(let b=0,D=0;b<y;b+=3){let C=x[b+0],U=x[b+1],z=x[b+2];E[D++]=C,E[D++]=U,E[D++]=U,E[D++]=z,E[D++]=z,E[D++]=C}}else{g=m.version;for(let x=0,b=0;x<y;x+=3){let D=x+0,C=x+1,U=x+2;E[b++]=D,E[b++]=C,E[b++]=C,E[b++]=U,E[b++]=U,E[b++]=D}}v.version=g;let w=r.get(p);w&&t.remove(w),r.set(p,v)}function d(p){let _=r.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in i){let _=i[p].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function fv(s,t,e){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function pv(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Wt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function mv(s,t,e){let n=new WeakMap,i=new ve;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let D=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],M=0;f===!0&&(M=1),p===!0&&(M=2),_===!0&&(M=3);let v=o.attributes.position.count*M,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*E*4*u),x=new bs(w,v,E,u);x.type=sn,x.needsUpdate=!0;let b=M*4;for(let C=0;C<u;C++){let U=m[C],z=g[C],X=y[C],P=v*E*4*C;for(let H=0;H<U.count;H++){let Z=H*b;f===!0&&(i.fromBufferAttribute(U,H),w[P+Z+0]=i.x,w[P+Z+1]=i.y,w[P+Z+2]=i.z,w[P+Z+3]=0),p===!0&&(i.fromBufferAttribute(z,H),w[P+Z+4]=i.x,w[P+Z+5]=i.y,w[P+Z+6]=i.z,w[P+Z+7]=0),_===!0&&(i.fromBufferAttribute(X,H),w[P+Z+8]=i.x,w[P+Z+9]=i.y,w[P+Z+10]=i.z,w[P+Z+11]=X.itemSize===4?i.w:1)}}d={count:u,texture:x,size:new lt(v,E)},n.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function gv(s,t,e,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var _v={[kh]:"LINEAR_TONE_MAPPING",[Hh]:"REINHARD_TONE_MAPPING",[Wh]:"CINEON_TONE_MAPPING",[Xh]:"ACES_FILMIC_TONE_MAPPING",[qh]:"AGX_TONE_MAPPING",[Yh]:"NEUTRAL_TONE_MAPPING",[Jh]:"CUSTOM_TONE_MAPPING"};function xv(s,t,e,n,i,r){let a=new rn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new he;h.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ot([0,2,0,0,2,0],2));let u=new Gr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ee(h,u),f=new Bs(-1,1,1,-1,0,1),p=null,_=null,m=!1,g,y=null,M=[],v=!1;this.setSize=function(E,w){a.setSize(E,w),o!==null&&o.setSize(E,w),l!==null&&l.setSize(E,w);for(let x=0;x<M.length;x++){let b=M[x];b.setSize&&b.setSize(E,w)}},this.setEffects=function(E){M=E,v=M.length>0&&M[0].isRenderPass===!0;let w=a.width,x=a.height;M.length>0&&o===null&&(o=new rn(w,x,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),l=new rn(w,x,{type:Gn,depthBuffer:!1,stencilBuffer:!1}));let b=i===!0&&M.some(D=>D.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new ci(w,x),r===!0&&(c.format=pi,c.type=ss)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let D=0;D<M.length;D++){let C=M[D];C.setSize&&C.setSize(w,x),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(E,w){if(m||E.toneMapping===ei&&M.length===0)return!1;if(y=w,w!==null){let x=w.width,b=w.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return v===!1&&E.setRenderTarget(a),g=E.toneMapping,E.toneMapping=ei,!0},this.hasRenderPass=function(){return v},this.end=function(E,w){E.toneMapping=g,m=!0;let x=a,b=o;for(let D=0;D<M.length;D++){let C=M[D];C.enabled!==!1&&(C.render(E,b,x,w),C.needsSwap!==!1&&(x=b,b=b===o?l:o))}if(p!==E.outputColorSpace||_!==E.toneMapping){p=E.outputColorSpace,_=E.toneMapping,u.defines={},pe.getTransfer(p)===xe&&(u.defines.SRGB_TRANSFER="");let D=_v[_];D&&(u.defines[D]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(y),E.render(d,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var hg=new Le,ug=new ci(1,1),dg=new Pr(1),fg=new bs,pg=new Ts,mg=new Ji,Hm=[],Wm=[],Xm=new Float32Array(16),Jm=new Float32Array(9),qm=new Float32Array(4);function ha(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Hm[i];if(r===void 0&&(r=new Float32Array(i),Hm[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ke(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function uu(s,t){let e=Wm[t];e===void 0&&(e=new Int32Array(t),Wm[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function yv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function vv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2fv(this.addr,t),ke(e,t)}}function Mv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;s.uniform3fv(this.addr,t),ke(e,t)}}function Sv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4fv(this.addr,t),ke(e,t)}}function bv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Ve(e,n))return;qm.set(n),s.uniformMatrix2fv(this.addr,!1,qm),ke(e,n)}}function Tv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Ve(e,n))return;Jm.set(n),s.uniformMatrix3fv(this.addr,!1,Jm),ke(e,n)}}function wv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Ve(e,n))return;Xm.set(n),s.uniformMatrix4fv(this.addr,!1,Xm),ke(e,n)}}function Ev(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Av(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2iv(this.addr,t),ke(e,t)}}function Rv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;s.uniform3iv(this.addr,t),ke(e,t)}}function Cv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4iv(this.addr,t),ke(e,t)}}function Iv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Pv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2uiv(this.addr,t),ke(e,t)}}function Lv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;s.uniform3uiv(this.addr,t),ke(e,t)}}function Dv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4uiv(this.addr,t),ke(e,t)}}function du(s){return s.version===0&&(s.compareFunction=ru,s.needsUpdate=!0),s}function Nv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=du(ug):r=hg,e.setTexture2D(t||r,i)}function Uv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||pg,i)}function Ov(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=du(dg):r=mg,e.setTextureCube(t||r,i)}function Fv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||fg,i)}function Bv(s){switch(s){case 5126:return yv;case 35664:return vv;case 35665:return Mv;case 35666:return Sv;case 35674:return bv;case 35675:return Tv;case 35676:return wv;case 5124:case 35670:return Ev;case 35667:case 35671:return Av;case 35668:case 35672:return Rv;case 35669:case 35673:return Cv;case 5125:return Iv;case 36294:return Pv;case 36295:return Lv;case 36296:return Dv;case 35678:case 36198:case 36298:case 36306:case 35682:return Nv;case 35679:case 36299:case 36307:return Uv;case 35680:case 36300:case 36308:case 36293:return Ov;case 36289:case 36303:case 36311:case 36292:return Fv}}function zv(s,t){s.uniform1fv(this.addr,t)}function Gv(s,t){let e=ha(t,this.size,2);s.uniform2fv(this.addr,e)}function Vv(s,t){let e=ha(t,this.size,3);s.uniform3fv(this.addr,e)}function kv(s,t){let e=ha(t,this.size,4);s.uniform4fv(this.addr,e)}function Hv(s,t){let e=ha(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Wv(s,t){let e=ha(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Xv(s,t){let e=ha(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Jv(s,t){s.uniform1iv(this.addr,t)}function qv(s,t){s.uniform2iv(this.addr,t)}function Yv(s,t){s.uniform3iv(this.addr,t)}function Zv(s,t){s.uniform4iv(this.addr,t)}function $v(s,t){s.uniform1uiv(this.addr,t)}function Qv(s,t){s.uniform2uiv(this.addr,t)}function Kv(s,t){s.uniform3uiv(this.addr,t)}function jv(s,t){s.uniform4uiv(this.addr,t)}function tM(s,t,e){let n=this.cache,i=t.length,r=uu(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=du(ug):a=hg;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function eM(s,t,e){let n=this.cache,i=t.length,r=uu(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||pg,r[a])}function nM(s,t,e){let n=this.cache,i=t.length,r=uu(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=du(dg):a=mg;for(let o=0;o!==i;++o)e.setTextureCube(t[o]||a,r[o])}function iM(s,t,e){let n=this.cache,i=t.length,r=uu(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||fg,r[a])}function sM(s){switch(s){case 5126:return zv;case 35664:return Gv;case 35665:return Vv;case 35666:return kv;case 35674:return Hv;case 35675:return Wv;case 35676:return Xv;case 5124:case 35670:return Jv;case 35667:case 35671:return qv;case 35668:case 35672:return Yv;case 35669:case 35673:return Zv;case 5125:return $v;case 36294:return Qv;case 36295:return Kv;case 36296:return jv;case 35678:case 36198:case 36298:case 36306:case 35682:return tM;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return nM;case 36289:case 36303:case 36311:case 36292:return iM}}var sf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bv(e.type)}},rf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sM(e.type)}},af=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},ef=/(\w+)(\])?(\[|\.)?/g;function Ym(s,t){s.seq.push(t),s.map[t.id]=t}function rM(s,t,e){let n=s.name,i=n.length;for(ef.lastIndex=0;;){let r=ef.exec(n),a=ef.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ym(e,c===void 0?new sf(o,s,t):new rf(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new af(o),Ym(e,u)),e=u}}}var la=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);rM(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Zm(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var aM=37297,oM=0;function lM(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var $m=new re;function cM(s){pe._getMatrix($m,pe.workingColorSpace,s);let t=`mat3( ${$m.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(s)){case vr:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Qm(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+lM(s.getShaderSource(t),o)}else return r}function hM(s,t){let e=cM(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var uM={[kh]:"Linear",[Hh]:"Reinhard",[Wh]:"Cineon",[Xh]:"ACESFilmic",[qh]:"AgX",[Yh]:"Neutral",[Jh]:"Custom"};function dM(s,t){let e=uM[t];return e===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var hu=new I;function fM(){pe.getLuminanceCoefficients(hu);let s=hu.x.toFixed(4),t=hu.y.toFixed(4),e=hu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ll).join(`
`)}function mM(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gM(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ll(s){return s!==""}function Km(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function jm(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _M=/^[ \t]*#include +<([\w\d./]+)>/gm;function of(s){return s.replace(_M,xM)}function xM(s,t){let e=ue[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return of(e)}var yM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tg(s){return s.replace(yM,vM)}function vM(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function eg(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var MM={[ts]:"SHADOWMAP_TYPE_PCF",[Vs]:"SHADOWMAP_TYPE_VSM"};function SM(s){return MM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var bM={[is]:"ENVMAP_MODE_REFRACTION"};function TM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":bM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var wM={[$r]:"ENVMAP_BLENDING_MULTIPLY",[Ld]:"ENVMAP_BLENDING_MIX",[Dd]:"ENVMAP_BLENDING_ADD"};function EM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":wM[s.combine]||"ENVMAP_BLENDING_NONE"}function AM(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=SM(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=TM(e),u=EM(e),d=pM(e),f=mM(r),p=i.createProgram(),_,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ll).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ll).join(`
`),m.length>0&&(m+=`
`)):(_=[eg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ll).join(`
`),m=[eg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?ue.tonemapping_pars_fragment:"",e.toneMapping!==ei?dM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,hM("linearToOutputTexel",e.outputColorSpace),fM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ll).join(`
`)),a=of(a),a=Km(a,e),a=jm(a,e),o=of(o),o=Km(o,e),o=jm(o,e),a=tg(a),o=tg(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+_+a,M=g+m+o,v=Zm(i,i.VERTEX_SHADER,y),E=Zm(i,i.FRAGMENT_SHADER,M);i.attachShader(p,v),i.attachShader(p,E),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function w(C){if(s.debug.checkShaderErrors){let U=i.getProgramInfoLog(p)||"",z=i.getShaderInfoLog(v)||"",X=i.getShaderInfoLog(E)||"",P=U.trim(),H=z.trim(),Z=X.trim(),W=!0,dt=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,v,E);else{let q=Qm(i,v,"vertex"),st=Qm(i,E,"fragment");Wt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+q+`
`+st)}else P!==""?Ct("WebGLProgram: Program Info Log:",P):(H===""||Z==="")&&(dt=!1);dt&&(C.diagnostics={runnable:W,programLog:P,vertexShader:{log:H,prefix:_},fragmentShader:{log:Z,prefix:m}})}i.deleteShader(v),i.deleteShader(E),x=new la(i,p),b=gM(i,p)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(p,aM)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=oM++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=E,this}var RM=0,lf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new cf(t),e.set(t,n)),n}},cf=class{constructor(t){this.id=RM++,this.code=t,this.usedTimes=0}};function CM(s){return s===Di||s===ra||s===aa}function IM(s,t,e,n,i,r){let a=new ws,o=new lf,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,b,D,C,U,z){let X=C.fog,P=U.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=t.get(x.envMap||H,Z),dt=d[x.type],q=n.precision;x.precision!==null&&(q=n.getMaxPrecision(x.precision),q!==x.precision&&Ct("WebGLProgram.getParameters:",x.precision,"not supported, using",q,"instead."));let st=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,at=st!==void 0?st.length:0,Ft=0;P.morphAttributes.position!==void 0&&(Ft=1),P.morphAttributes.normal!==void 0&&(Ft=2),P.morphAttributes.color!==void 0&&(Ft=3);let Mt,j,Rt,Nt;if(dt){let Tt=ni[dt];Mt=Tt.vertexShader,j=Tt.fragmentShader}else{Mt=x.vertexShader,j=x.fragmentShader;let Tt=o.getVertexShaderStage(x),de=o.getFragmentShaderStage(x);o.update(x,Tt,de),Rt=Tt.id,Nt=de.id}let qt=s.getRenderTarget(),xt=s.state.buffers.depth.getReversed(),Gt=U.isInstancedMesh===!0,Me=U.isBatchedMesh===!0,Jt=!!x.map,ie=!!x.matcap,ae=!!W,nt=ae&&W.isPMREMTexture===!0,St=!!x.aoMap,_t=!!x.lightMap,Dt=!!x.bumpMap&&x.wireframe===!1,At=!!x.normalMap,$t=!!x.displacementMap,zt=!!x.emissiveMap,ce=!!x.metalnessMap,fe=!!x.roughnessMap,me=x.anisotropy>0,F=x.clearcoat>0,Ae=x.diffuseRoughness>0,oe=x.dispersion>0,_e=x.retroreflectivity>0,yt=x.iridescence>0,Xt=x.sheen>0,Vt=x.transmission>0,Yt=me&&!!x.anisotropyMap,R=F&&!!x.clearcoatMap,S=F&&!!x.clearcoatNormalMap,k=F&&!!x.clearcoatRoughnessMap,ht=Ae&&!!x.diffuseRoughnessMap,it=yt&&!!x.iridescenceMap,bt=yt&&!!x.iridescenceThicknessMap,mt=Xt&&!!x.sheenColorMap,K=Xt&&!!x.sheenRoughnessMap,tt=!!x.specularMap,vt=!!x.specularColorMap,N=!!x.specularIntensityMap,et=Vt&&!!x.transmissionMap,Q=Vt&&!!x.thicknessMap,gt=!!x.gradientMap,ft=!!x.alphaMap,pt=x.alphaTest>0,Bt=!!x.alphaHash,Qt=!!x.extensions,ct=ei;x.toneMapped&&(qt===null||qt.isXRRenderTarget===!0)&&(ct=s.toneMapping);let Ht=nt?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,te={shaderID:dt,shaderType:x.type,shaderName:x.name,vertexShader:Mt,fragmentShader:j,defines:x.defines,customVertexShaderID:Rt,customFragmentShaderID:Nt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:q,batching:Me,batchingColor:Me&&U._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&U.instanceColor!==null,instancingMorph:Gt&&U.morphTexture!==null,outputColorSpace:qt===null?s.outputColorSpace:qt.isXRRenderTarget===!0?qt.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Jt,matcap:ie,envMap:ae,envMapMode:ae&&W.mapping,envMapPMREM:nt,envMapMaxLod:nt?Ht.length-1:null,envMapSize:nt?Ht[0].width:null,aoMap:St,lightMap:_t,bumpMap:Dt,normalMap:At,displacementMap:$t,emissiveMap:zt,normalMapObjectSpace:At&&x.normalMapType===zd,normalMapTangentSpace:At&&x.normalMapType===mi,packedNormalMap:At&&x.normalMapType===mi&&CM(x.normalMap.format),metalnessMap:ce,roughnessMap:fe,anisotropy:me,anisotropyMap:Yt,clearcoat:F,clearcoatMap:R,clearcoatNormalMap:S,clearcoatRoughnessMap:k,diffuseRoughness:Ae,diffuseRoughnessMap:ht,dispersion:oe,retroreflection:_e,iridescence:yt,iridescenceMap:it,iridescenceThicknessMap:bt,sheen:Xt,sheenColorMap:mt,sheenRoughnessMap:K,specularMap:tt,specularColorMap:vt,specularIntensityMap:N,transmission:Vt,transmissionMap:et,thicknessMap:Q,gradientMap:gt,opaque:x.transparent===!1&&x.blending===ks&&x.alphaToCoverage===!1,alphaMap:ft,alphaTest:pt,alphaHash:Bt,combine:x.combine,mapUv:Jt&&f(x.map.channel),aoMapUv:St&&f(x.aoMap.channel),lightMapUv:_t&&f(x.lightMap.channel),bumpMapUv:Dt&&f(x.bumpMap.channel),normalMapUv:At&&f(x.normalMap.channel),displacementMapUv:$t&&f(x.displacementMap.channel),emissiveMapUv:zt&&f(x.emissiveMap.channel),metalnessMapUv:ce&&f(x.metalnessMap.channel),roughnessMapUv:fe&&f(x.roughnessMap.channel),anisotropyMapUv:Yt&&f(x.anisotropyMap.channel),clearcoatMapUv:R&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ht&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:it&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:K&&f(x.sheenRoughnessMap.channel),specularMapUv:tt&&f(x.specularMap.channel),specularColorMapUv:vt&&f(x.specularColorMap.channel),specularIntensityMapUv:N&&f(x.specularIntensityMap.channel),transmissionMapUv:et&&f(x.transmissionMap.channel),thicknessMapUv:Q&&f(x.thicknessMap.channel),alphaMapUv:ft&&f(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(At||me),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!P.attributes.uv&&(Jt||ft),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&At===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:Ft,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.filter(Tt=>Tt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:ct,decodeVideoTexture:Jt&&x.map.isVideoTexture===!0&&pe.getTransfer(x.map.colorSpace)===xe,decodeVideoTextureEmissive:zt&&x.emissiveMap.isVideoTexture===!0&&pe.getTransfer(x.emissiveMap.colorSpace)===xe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wn,flipSided:x.side===on,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Qt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&x.extensions.multiDraw===!0||Me)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return te.vertexUv1s=l.has(1),te.vertexUv2s=l.has(2),te.vertexUv3s=l.has(3),l.clear(),te}function _(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let D in x.defines)b.push(D),b.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(m(b,x),g(b,x),b.push(s.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function y(x){let b=d[x.type],D;if(b){let C=ni[b];D=Qd.clone(C.uniforms)}else D=x.uniforms;return D}function M(x,b){let D=h.get(b);return D!==void 0?++D.usedTimes:(D=new AM(s,b,x,i),c.push(D),h.set(b,D)),D}function v(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function w(){o.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:y,acquireProgram:M,releaseProgram:v,releaseShaderCache:E,programs:c,dispose:w}}function PM(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function LM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function ng(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ig(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,_,m,g){let y=s[t];return y===void 0?(y={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},s[t]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=p,y.materialVariant=a(d),y.groupOrder=_,y.renderOrder=d.renderOrder,y.z=m,y.group=g),t++,y}function l(d,f,p,_,m,g,y){y.reversedDepth===!0&&(m=-m);let M=o(d,f,p,_,m,g);p.transmission>0?n.push(M):p.transparent===!0?i.push(M):e.push(M)}function c(d,f,p,_,m,g){let y=o(d,f,p,_,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?i.unshift(y):e.unshift(y)}function h(d,f){e.length>1&&e.sort(d||LM),n.length>1&&n.sort(f||ng),i.length>1&&i.sort(f||ng)}function u(){for(let d=t,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function DM(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new ig,s.set(n,[a])):i>=r.length?(a=new ig,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function NM(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Lt};break;case"SpotLight":e={position:new I,direction:new I,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function UM(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var OM=0;function FM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function BM(s){let t=new NM,e=UM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let i=new I,r=new ne,a=new ne;function o(c){let h=0,u=0,d=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,y=0,M=0,v=0,E=0,w=0,x=0,b=0,D=0,C=0;c.sort(FM);for(let z=0,X=c.length;z<X;z++){let P=c[z],H=P.color,Z=P.intensity,W=P.distance,dt=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Di?dt=P.shadow.map.texture:dt=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=H.r*Z,u+=H.g*Z,d+=H.b*Z;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],Z);C++}else if(P.isSunLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let st=P.shadow,at=e.get(P);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),n.sunShadow[p]=at,n.sunShadowMap[p]=dt;let Ft=st.getViewportCount();for(let Mt=0;Mt<Ft;Mt++)n.sunShadowMatrix[_+Mt]=st.getMatrix(Mt),n.sunShadowCascade[_+Mt]=st._cascadeData[Mt];_+=Ft,p++}n.sun[f]=q,f++}else if(P.isDirectionalLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let st=P.shadow,at=e.get(P);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,n.directionalShadow[m]=at,n.directionalShadowMap[m]=dt,n.directionalShadowMatrix[m]=P.shadow.matrix,E++}n.directional[m]=q,m++}else if(P.isSpotLight){let q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(H).multiplyScalar(Z),q.distance=W,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[y]=q;let st=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,st.updateMatrices(P),P.castShadow&&D++),n.spotLightMatrix[y]=st.matrix,P.castShadow){let at=e.get(P);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,n.spotShadow[y]=at,n.spotShadowMap[y]=dt,x++}y++}else if(P.isRectAreaLight){let q=t.get(P);q.color.copy(H).multiplyScalar(Z),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[M]=q,M++}else if(P.isPointLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){let st=P.shadow,at=e.get(P);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,at.shadowCameraNear=st.camera.near,at.shadowCameraFar=st.camera.far,n.pointShadow[g]=at,n.pointShadowMap[g]=dt,n.pointShadowMatrix[g]=P.shadow.matrix,w++}n.point[g]=q,g++}else if(P.isHemisphereLight){let q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(Z),q.groundColor.copy(P.groundColor).multiplyScalar(Z),n.hemi[v]=q,v++}}M>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let U=n.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==g||U.spotLength!==y||U.rectAreaLength!==M||U.hemiLength!==v||U.numSunShadows!==p||U.numDirectionalShadows!==E||U.numPointShadows!==w||U.numSpotShadows!==x||U.numSpotMaps!==b||U.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=M,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-D,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=C,U.sunLength=f,U.directionalLength=m,U.pointLength=g,U.spotLength=y,U.rectAreaLength=M,U.hemiLength=v,U.numSunShadows=p,U.numDirectionalShadows=E,U.numPointShadows=w,U.numSpotShadows=x,U.numSpotMaps=b,U.numLightProbes=C,n.version=OM++)}function l(c,h){let u=0,d=0,f=0,p=0,_=0,m=0,g=h.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let v=c[y];if(v.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(g),u++}else if(v.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),d++}else if(v.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function sg(s){let t=new BM(s),e=[],n=[],i=[];function r(u){h.camera=u,e.length=0,n.length=0,i.length=0}function a(u){u.isLightProbeGrid?i.push(u):e.push(u)}function o(u){n.push(u)}function l(){t.setup(e),i.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function zM(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new sg(s),t.set(i,[o])):r>=a.length?(o=new sg(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var GM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VM=`uniform sampler2D shadow_pass;
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
}`,kM=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],HM=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],rg=new ne,Pl=new I,nf=new I;function WM(s,t,e){let n=new li,i=new lt,r=new lt,a=new ve,o=new Vr,l=new kr,c={},h=e.maxTextureSize,u={[Li]:on,[on]:Li,[wn]:wn},d=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:GM,fragmentShader:VM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new he;p.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ee(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ts;let g=this.type;this.render=function(w,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===fd&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ts);let D=s.getRenderTarget(),C=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),z=s.state;z.setBlending(es),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let X=g!==this.type;X&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(H=>H.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,H=w.length;P<H;P++){let Z=w[P],W=Z.shadow;if(W===void 0){Ct("WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let dt=W.getFrameExtents();i.multiply(dt),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/dt.x),i.x=r.x*dt.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/dt.y),i.y=r.y*dt.y,W.mapSize.y=r.y));let q=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||X===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Vs){if(Z.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new rn(i.x,i.y,{format:Di,type:Gn,minFilter:we,magFilter:we,generateMipmaps:!1}),W.map.texture.name=Z.name+".shadowMap",W.map.depthTexture=new ci(i.x,i.y,sn),W.map.depthTexture.name=Z.name+".shadowMapDepth",W.map.depthTexture.format=oi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Pe,W.map.depthTexture.magFilter=Pe}else Z.isPointLight?(W.map=new ca(i.x),W.map.depthTexture=new Pr(i.x,Pn)):(W.map=new rn(i.x,i.y),W.map.depthTexture=new ci(i.x,i.y,Pn)),W.map.depthTexture.name=Z.name+".shadowMap",W.map.depthTexture.format=oi,this.type===ts?(W.map.depthTexture.compareFunction=q?su:iu,W.map.depthTexture.minFilter=we,W.map.depthTexture.magFilter=we):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Pe,W.map.depthTexture.magFilter=Pe);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==i.x||W.map.height!==i.y)&&W.map.setSize(i.x,i.y);let st=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Z.isPointLight!==!0&&W.updateMatrices(Z,b);let at=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:b.layers;for(let Ft=0;Ft<st;Ft++){let Mt=W.getCamera(Ft);if(Z.isPointLight){let j=W.camera,Rt=W.matrix,Nt=Z.distance||j.far;Nt!==j.far&&(j.far=Nt,j.updateProjectionMatrix()),Pl.setFromMatrixPosition(Z.matrixWorld),j.position.copy(Pl),nf.copy(j.position),nf.add(kM[Ft]),j.up.copy(HM[Ft]),j.lookAt(nf),j.updateMatrixWorld(),Rt.makeTranslation(-Pl.x,-Pl.y,-Pl.z),rg.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),W._frustum.setFromProjectionMatrix(rg,j.coordinateSystem,j.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,Ft),s.clear();else{Ft===0&&(s.setRenderTarget(W.map),s.clear());let j=W.getViewport(Ft);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),z.viewport(a)}n=W.getFrustum(Ft),v(x,b,Mt,Z,at,this.type)}W.isPointLightShadow!==!0&&this.type===Vs&&y(W,b),W.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(D,C,U)};function y(w,x){let b=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new rn(i.x,i.y,{format:Di,type:Gn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(x,null,b,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(x,null,b,f,_,null)}function M(w,x,b,D){let C=null,U=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)C=U;else if(C=b.isPointLight===!0?l:o,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let z=C.uuid,X=x.uuid,P=c[z];P===void 0&&(P={},c[z]=P);let H=P[X];H===void 0&&(H=C.clone(),P[X]=H,x.addEventListener("dispose",E)),C=H}if(C.visible=x.visible,C.wireframe=x.wireframe,D===Vs?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:u[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let z=s.properties.get(C);z.light=b}return C}function v(w,x,b,D,C,U){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===Vs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let P=t.update(w),H=w.material;if(Array.isArray(H)){let Z=P.groups;for(let W=0,dt=Z.length;W<dt;W++){let q=Z[W],st=H[q.materialIndex];if(st&&st.visible){let at=M(w,st,D,U);w.onBeforeShadow(s,w,x,b,P,at,q),s.renderBufferDirect(b,null,P,at,w,q),w.onAfterShadow(s,w,x,b,P,at,q)}}}else if(H.visible){let Z=M(w,H,D,U);w.onBeforeShadow(s,w,x,b,P,Z,null),s.renderBufferDirect(b,null,P,Z,w,null),w.onAfterShadow(s,w,x,b,P,Z,null)}}let X=w.children;for(let P=0,H=X.length;P<H;P++)v(X[P],x,b,D,C,U)}function E(w){w.target.removeEventListener("dispose",E);for(let b in c){let D=c[b],C=w.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}function XM(s,t){function e(){let N=!1,et=new ve,Q=null,gt=new ve(0,0,0,0);return{setMask:function(ft){Q!==ft&&!N&&(s.colorMask(ft,ft,ft,ft),Q=ft)},setLocked:function(ft){N=ft},setClear:function(ft,pt,Bt,Qt,ct){ct===!0&&(ft*=Qt,pt*=Qt,Bt*=Qt),et.set(ft,pt,Bt,Qt),gt.equals(et)===!1&&(s.clearColor(ft,pt,Bt,Qt),gt.copy(et))},reset:function(){N=!1,Q=null,gt.set(-1,0,0,0)}}}function n(){let N=!1,et=!1,Q=null,gt=null,ft=null;return{setReversed:function(pt){if(et!==pt){let Bt=t.get("EXT_clip_control");pt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),et=pt;let Qt=ft;ft=null,this.setClear(Qt)}},getReversed:function(){return et},setTest:function(pt){pt?xt(s.DEPTH_TEST):Gt(s.DEPTH_TEST)},setMask:function(pt){Q!==pt&&!N&&(s.depthMask(pt),Q=pt)},setFunc:function(pt){if(et&&(pt=Rm[pt]),gt!==pt){switch(pt){case Na:s.depthFunc(s.NEVER);break;case Ua:s.depthFunc(s.ALWAYS);break;case Oa:s.depthFunc(s.LESS);break;case Ms:s.depthFunc(s.LEQUAL);break;case Fa:s.depthFunc(s.EQUAL);break;case Ba:s.depthFunc(s.GEQUAL);break;case za:s.depthFunc(s.GREATER);break;case Ga:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=pt}},setLocked:function(pt){N=pt},setClear:function(pt){ft!==pt&&(ft=pt,et&&(pt=1-pt),s.clearDepth(pt))},reset:function(){N=!1,Q=null,gt=null,ft=null,et=!1}}}function i(){let N=!1,et=null,Q=null,gt=null,ft=null,pt=null,Bt=null,Qt=null,ct=null;return{setTest:function(Ht){N||(Ht?xt(s.STENCIL_TEST):Gt(s.STENCIL_TEST))},setMask:function(Ht){et!==Ht&&!N&&(s.stencilMask(Ht),et=Ht)},setFunc:function(Ht,te,Tt){(Q!==Ht||gt!==te||ft!==Tt)&&(s.stencilFunc(Ht,te,Tt),Q=Ht,gt=te,ft=Tt)},setOp:function(Ht,te,Tt){(pt!==Ht||Bt!==te||Qt!==Tt)&&(s.stencilOp(Ht,te,Tt),pt=Ht,Bt=te,Qt=Tt)},setLocked:function(Ht){N=Ht},setClear:function(Ht){ct!==Ht&&(s.clearStencil(Ht),ct=Ht)},reset:function(){N=!1,et=null,Q=null,gt=null,ft=null,pt=null,Bt=null,Qt=null,ct=null}}}let r=new e,a=new n,o=new i,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],_=null,m=!1,g=null,y=null,M=null,v=null,E=null,w=null,x=null,b=new Lt(0,0,0),D=0,C=!1,U=null,z=null,X=null,P=null,H=null,Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,dt=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(dt=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=dt>=1):q.indexOf("OpenGL ES")!==-1&&(dt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=dt>=2);let st=null,at={},Ft=s.getParameter(s.SCISSOR_BOX),Mt=s.getParameter(s.VIEWPORT),j=new ve().fromArray(Ft),Rt=new ve().fromArray(Mt);function Nt(N,et,Q,gt){let ft=new Uint8Array(4),pt=s.createTexture();s.bindTexture(N,pt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Bt=0;Bt<Q;Bt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(et,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,ft):s.texImage2D(et+Bt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ft);return pt}let qt={};qt[s.TEXTURE_2D]=Nt(s.TEXTURE_2D,s.TEXTURE_2D,1),qt[s.TEXTURE_CUBE_MAP]=Nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),qt[s.TEXTURE_2D_ARRAY]=Nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),qt[s.TEXTURE_3D]=Nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xt(s.DEPTH_TEST),a.setFunc(Ms),Dt(!1),At(Oh),xt(s.CULL_FACE),St(es);function xt(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Gt(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Me(N,et){return d[N]!==et?(s.bindFramebuffer(N,et),d[N]=et,N===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=et),N===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=et),!0):!1}function Jt(N,et){let Q=p,gt=!1;if(N){Q=f.get(et),Q===void 0&&(Q=[],f.set(et,Q));let ft=N.textures;if(Q.length!==ft.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,Bt=ft.length;pt<Bt;pt++)Q[pt]=s.COLOR_ATTACHMENT0+pt;Q.length=ft.length,gt=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,gt=!0);gt&&s.drawBuffers(Q)}function ie(N){return _!==N?(s.useProgram(N),_=N,!0):!1}let ae={[ns]:s.FUNC_ADD,[md]:s.FUNC_SUBTRACT,[gd]:s.FUNC_REVERSE_SUBTRACT};ae[_d]=s.MIN,ae[xd]=s.MAX;let nt={[yd]:s.ZERO,[vd]:s.ONE,[Md]:s.SRC_COLOR,[Gh]:s.SRC_ALPHA,[Ad]:s.SRC_ALPHA_SATURATE,[wd]:s.DST_COLOR,[bd]:s.DST_ALPHA,[Sd]:s.ONE_MINUS_SRC_COLOR,[Vh]:s.ONE_MINUS_SRC_ALPHA,[Ed]:s.ONE_MINUS_DST_COLOR,[Td]:s.ONE_MINUS_DST_ALPHA,[Rd]:s.CONSTANT_COLOR,[Cd]:s.ONE_MINUS_CONSTANT_COLOR,[Id]:s.CONSTANT_ALPHA,[Pd]:s.ONE_MINUS_CONSTANT_ALPHA};function St(N,et,Q,gt,ft,pt,Bt,Qt,ct,Ht){if(N===es){m===!0&&(Gt(s.BLEND),m=!1);return}if(m===!1&&(xt(s.BLEND),m=!0),N!==pd){if(N!==g||Ht!==C){if((y!==ns||E!==ns)&&(s.blendEquation(s.FUNC_ADD),y=ns,E=ns),Ht)switch(N){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fh:s.blendFunc(s.ONE,s.ONE);break;case Bh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Wt("WebGLState: Invalid blending: ",N);break}else switch(N){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Bh:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zh:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",N);break}M=null,v=null,w=null,x=null,b.set(0,0,0),D=0,g=N,C=Ht}return}ft=ft||et,pt=pt||Q,Bt=Bt||gt,(et!==y||ft!==E)&&(s.blendEquationSeparate(ae[et],ae[ft]),y=et,E=ft),(Q!==M||gt!==v||pt!==w||Bt!==x)&&(s.blendFuncSeparate(nt[Q],nt[gt],nt[pt],nt[Bt]),M=Q,v=gt,w=pt,x=Bt),(Qt.equals(b)===!1||ct!==D)&&(s.blendColor(Qt.r,Qt.g,Qt.b,ct),b.copy(Qt),D=ct),g=N,C=!1}function _t(N,et){N.side===wn?Gt(s.CULL_FACE):xt(s.CULL_FACE);let Q=N.side===on;et&&(Q=!Q),Dt(Q),N.blending===ks&&N.transparent===!1?St(es):St(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let gt=N.stencilWrite;o.setTest(gt),gt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),zt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?xt(s.SAMPLE_ALPHA_TO_COVERAGE):Gt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(N){U!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),U=N)}function At(N){N!==ud?(xt(s.CULL_FACE),N!==z&&(N===Oh?s.cullFace(s.BACK):N===dd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Gt(s.CULL_FACE),z=N}function $t(N){N!==X&&(W&&s.lineWidth(N),X=N)}function zt(N,et,Q){N?(xt(s.POLYGON_OFFSET_FILL),(P!==et||H!==Q)&&(P=et,H=Q,a.getReversed()&&(et=-et,Q=-Q),s.polygonOffset(et,Q))):Gt(s.POLYGON_OFFSET_FILL)}function ce(N){N?xt(s.SCISSOR_TEST):Gt(s.SCISSOR_TEST)}function fe(N){N===void 0&&(N=s.TEXTURE0+Z-1),st!==N&&(s.activeTexture(N),st=N)}function me(N,et,Q){Q===void 0&&(st===null?Q=s.TEXTURE0+Z-1:Q=st);let gt=at[Q];gt===void 0&&(gt={type:void 0,texture:void 0},at[Q]=gt),(gt.type!==N||gt.texture!==et)&&(st!==Q&&(s.activeTexture(Q),st=Q),s.bindTexture(N,et||qt[N]),gt.type=N,gt.texture=et)}function F(){let N=at[st];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Ae(){try{s.compressedTexImage2D(...arguments)}catch(N){Wt("WebGLState:",N)}}function oe(){try{s.compressedTexImage3D(...arguments)}catch(N){Wt("WebGLState:",N)}}function _e(){try{s.texSubImage2D(...arguments)}catch(N){Wt("WebGLState:",N)}}function yt(){try{s.texSubImage3D(...arguments)}catch(N){Wt("WebGLState:",N)}}function Xt(){try{s.compressedTexSubImage2D(...arguments)}catch(N){Wt("WebGLState:",N)}}function Vt(){try{s.compressedTexSubImage3D(...arguments)}catch(N){Wt("WebGLState:",N)}}function Yt(){try{s.texStorage2D(...arguments)}catch(N){Wt("WebGLState:",N)}}function R(){try{s.texStorage3D(...arguments)}catch(N){Wt("WebGLState:",N)}}function S(){try{s.texImage2D(...arguments)}catch(N){Wt("WebGLState:",N)}}function k(){try{s.texImage3D(...arguments)}catch(N){Wt("WebGLState:",N)}}function ht(N){return u[N]!==void 0?u[N]:s.getParameter(N)}function it(N,et){u[N]!==et&&(s.pixelStorei(N,et),u[N]=et)}function bt(N){j.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),j.copy(N))}function mt(N){Rt.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Rt.copy(N))}function K(N,et){let Q=c.get(et);Q===void 0&&(Q=new WeakMap,c.set(et,Q));let gt=Q.get(N);gt===void 0&&(gt=s.getUniformBlockIndex(et,N.name),s.uniformBlockBinding(et,gt,gt),Q.set(N,gt))}function tt(N,et,Q){let ft=c.get(et).get(N);l[ft]!==Q&&(s.bindBufferBase(s.UNIFORM_BUFFER,ft,Q),l[ft]=Q)}function vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},st=null,at={},d={},l={},f=new WeakMap,p=[],_=null,m=!1,g=null,y=null,M=null,v=null,E=null,w=null,x=null,b=new Lt(0,0,0),D=0,C=!1,U=null,z=null,X=null,P=null,H=null,j.set(0,0,s.canvas.width,s.canvas.height),Rt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xt,disable:Gt,bindFramebuffer:Me,drawBuffers:Jt,useProgram:ie,setBlending:St,setMaterial:_t,setFlipSided:Dt,setCullFace:At,setLineWidth:$t,setPolygonOffset:zt,setScissorTest:ce,activeTexture:fe,bindTexture:me,unbindTexture:F,compressedTexImage2D:Ae,compressedTexImage3D:oe,texImage2D:S,texImage3D:k,pixelStorei:it,getParameter:ht,updateUBOMapping:K,uniformBlockBinding:tt,texStorage2D:Yt,texStorage3D:R,texSubImage2D:_e,texSubImage3D:yt,compressedTexSubImage2D:Xt,compressedTexSubImage3D:Vt,scissor:bt,viewport:mt,reset:vt}}function JM(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,_=new FinalizationRegistry(R=>p.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return m?new OffscreenCanvas(R,S):Mr("canvas")}function y(R,S,k){let ht=1,it=Yt(R);if((it.width>k||it.height>k)&&(ht=k/Math.max(it.width,it.height)),ht<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let bt=Math.floor(ht*it.width),mt=Math.floor(ht*it.height);d===void 0&&(d=g(bt,mt));let K=S?g(bt,mt):d;return K.width=bt,K.height=mt,K.getContext("2d").drawImage(R,0,0,bt,mt),Ct("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+bt+"x"+mt+")."),K}else return"data"in R&&Ct("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function M(R){return R.generateMipmaps}function v(R){s.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(R,S,k,ht,it,bt=!1){if(R!==null){if(s[R]!==void 0)return s[R];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let mt;ht&&(mt=t.get("EXT_texture_norm16"),mt||Ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=S;if(S===s.RED&&(k===s.FLOAT&&(K=s.R32F),k===s.HALF_FLOAT&&(K=s.R16F),k===s.UNSIGNED_BYTE&&(K=s.R8),k===s.UNSIGNED_SHORT&&mt&&(K=mt.R16_EXT),k===s.SHORT&&mt&&(K=mt.R16_SNORM_EXT)),S===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.R8UI),k===s.UNSIGNED_SHORT&&(K=s.R16UI),k===s.UNSIGNED_INT&&(K=s.R32UI),k===s.BYTE&&(K=s.R8I),k===s.SHORT&&(K=s.R16I),k===s.INT&&(K=s.R32I)),S===s.RG&&(k===s.FLOAT&&(K=s.RG32F),k===s.HALF_FLOAT&&(K=s.RG16F),k===s.UNSIGNED_BYTE&&(K=s.RG8),k===s.UNSIGNED_SHORT&&mt&&(K=mt.RG16_EXT),k===s.SHORT&&mt&&(K=mt.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RG8UI),k===s.UNSIGNED_SHORT&&(K=s.RG16UI),k===s.UNSIGNED_INT&&(K=s.RG32UI),k===s.BYTE&&(K=s.RG8I),k===s.SHORT&&(K=s.RG16I),k===s.INT&&(K=s.RG32I)),S===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RGB8UI),k===s.UNSIGNED_SHORT&&(K=s.RGB16UI),k===s.UNSIGNED_INT&&(K=s.RGB32UI),k===s.BYTE&&(K=s.RGB8I),k===s.SHORT&&(K=s.RGB16I),k===s.INT&&(K=s.RGB32I)),S===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),k===s.UNSIGNED_INT&&(K=s.RGBA32UI),k===s.BYTE&&(K=s.RGBA8I),k===s.SHORT&&(K=s.RGBA16I),k===s.INT&&(K=s.RGBA32I)),S===s.RGB&&(k===s.UNSIGNED_SHORT&&mt&&(K=mt.RGB16_EXT),k===s.SHORT&&mt&&(K=mt.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),S===s.RGBA){let tt=bt?vr:pe.getTransfer(it);k===s.FLOAT&&(K=s.RGBA32F),k===s.HALF_FLOAT&&(K=s.RGBA16F),k===s.UNSIGNED_BYTE&&(K=tt===xe?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&mt&&(K=mt.RGBA16_EXT),k===s.SHORT&&mt&&(K=mt.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(R,S){let k;return R?S===null||S===Pn||S===ss?k=s.DEPTH24_STENCIL8:S===sn?k=s.DEPTH32F_STENCIL8:S===Ws&&(k=s.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Pn||S===ss?k=s.DEPTH_COMPONENT24:S===sn?k=s.DEPTH_COMPONENT32F:S===Ws&&(k=s.DEPTH_COMPONENT16),k}function b(R,S){return M(R)===!0||R.isFramebufferTexture&&R.minFilter!==Pe&&R.minFilter!==we?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function D(R){let S=new WeakRef(R);n.get(R).__ref=S,p.add(S),_.register(R,S,S)}function C(R){let S=n.get(R).__ref;S!==void 0&&(p.delete(S),_.unregister(S))}function U(R){X(R.target)}function z(R){P(R.target)}function X(R){R.removeEventListener("dispose",U),C(R),Z(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function P(R){R.removeEventListener("dispose",z),C(R),dt(R)}function H(){for(let R of p){let S=R.deref();S!==void 0&&(S.isRenderTarget===!0?P(S):X(S))}p.clear(),u.clear()}function Z(R){let S=n.get(R);if(S.__webglInit===void 0)return;let k=R.source,ht=f.get(k);if(ht){let it=ht[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&W(R),Object.keys(ht).length===0&&f.delete(k)}n.remove(R)}function W(R){let S=n.get(R);s.deleteTexture(S.__webglTexture);let k=R.source,ht=f.get(k);delete ht[S.__cacheKey],a.memory.textures--}function dt(R){let S=n.get(R);S.__depthDisposeCallback&&S.__depthDisposeCallback();let k=R.depthTexture;if(k&&k.renderTarget===R&&X(k),R.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(S.__webglFramebuffer[it]))for(let bt=0;bt<S.__webglFramebuffer[it].length;bt++)s.deleteFramebuffer(S.__webglFramebuffer[it][bt]);else s.deleteFramebuffer(S.__webglFramebuffer[it]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[it])}else{if(Array.isArray(S.__webglFramebuffer))for(let it=0;it<S.__webglFramebuffer.length;it++)s.deleteFramebuffer(S.__webglFramebuffer[it]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let it=0;it<S.__webglColorRenderbuffer.length;it++)S.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[it]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ht=R.textures;for(let it=0,bt=ht.length;it<bt;it++){let mt=n.get(ht[it]);mt.__webglTexture&&(s.deleteTexture(mt.__webglTexture),a.memory.textures--),n.remove(ht[it])}n.remove(R)}let q=0;function st(){q=0}function at(){return q}function Ft(R){q=R}function Mt(){let R=q;return R>=i.maxTextures&&Ct("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),q+=1,R}function j(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.mipmapsAutoUpdate),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function Rt(R,S){let k=n.get(R);if(R.isVideoTexture&&Xt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){let ht=R.image;if(ht===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(k,R,S);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+S)}function Nt(R,S){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){_t(k,R,S);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+S)}function qt(R,S){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){_t(k,R,S);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+S)}function xt(R,S){let k=n.get(R);if(R.version>0&&k.__version!==R.version){Dt(k,R,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+S)}let Gt={[ki]:s.REPEAT,[fn]:s.CLAMP_TO_EDGE,[gr]:s.MIRRORED_REPEAT},Me={[Pe]:s.NEAREST,[Zh]:s.NEAREST_MIPMAP_NEAREST,[Hs]:s.NEAREST_MIPMAP_LINEAR,[we]:s.LINEAR,[jr]:s.LINEAR_MIPMAP_NEAREST,[zn]:s.LINEAR_MIPMAP_LINEAR},Jt={[Vd]:s.NEVER,[ru]:s.ALWAYS,[kd]:s.LESS,[iu]:s.LEQUAL,[Hd]:s.EQUAL,[su]:s.GEQUAL,[Wd]:s.GREATER,[Xd]:s.NOTEQUAL};function ie(R,S){if(S.type===sn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===we||S.magFilter===jr||S.magFilter===Hs||S.magFilter===zn||S.minFilter===we||S.minFilter===jr||S.minFilter===Hs||S.minFilter===zn)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Gt[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Gt[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Gt[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,Me[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,Me[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Jt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Pe||S.minFilter!==Hs&&S.minFilter!==zn||S.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ae(R,S){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",U),D(S));let ht=S.source,it=f.get(ht);it===void 0&&(it={},f.set(ht,it));let bt=j(S);if(bt!==R.__cacheKey){it[bt]===void 0&&(it[bt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),it[bt].usedTimes++;let mt=it[R.__cacheKey];mt!==void 0&&(it[R.__cacheKey].usedTimes--,mt.usedTimes===0&&W(S)),R.__cacheKey=bt,R.__webglTexture=it[bt].texture}return k}function nt(R,S,k){return Math.floor(Math.floor(R/k)/S)}function St(R,S,k,ht){let bt=R.updateRanges;if(bt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,k,ht,S.data);else{bt.sort((N,et)=>N.start-et.start);let mt=0;for(let N=1;N<bt.length;N++){let et=bt[mt],Q=bt[N],gt=et.start+et.count,ft=nt(Q.start,S.width,4),pt=nt(et.start,S.width,4);Q.start<=gt+1&&ft===pt&&nt(Q.start+Q.count-1,S.width,4)===ft?et.count=Math.max(et.count,Q.start+Q.count-et.start):(++mt,bt[mt]=Q)}bt.length=mt+1;let K=e.getParameter(s.UNPACK_ROW_LENGTH),tt=e.getParameter(s.UNPACK_SKIP_PIXELS),vt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let N=0,et=bt.length;N<et;N++){let Q=bt[N],gt=Math.floor(Q.start/4),ft=Math.ceil(Q.count/4),pt=gt%S.width,Bt=Math.floor(gt/S.width),Qt=ft,ct=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Bt),e.texSubImage2D(s.TEXTURE_2D,0,pt,Bt,Qt,ct,k,ht,S.data)}R.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,K),e.pixelStorei(s.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(s.UNPACK_SKIP_ROWS,vt)}}function _t(R,S,k){let ht=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ht=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ht=s.TEXTURE_3D);let it=ae(R,S),bt=S.source;e.bindTexture(ht,R.__webglTexture,s.TEXTURE0+k);let mt=n.get(bt);if(bt.version!==mt.__version||it===!0){if(e.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ct=pe.getPrimaries(pe.workingColorSpace),Ht=S.colorSpace===Vn?null:pe.getPrimaries(S.colorSpace),te=S.colorSpace===Vn||ct===Ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,te)}e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let tt=y(S.image,!1,i.maxTextureSize);tt=Vt(S,tt);let vt=r.convert(S.format,S.colorSpace),N=r.convert(S.type),et=w(S.internalFormat,vt,N,S.normalized,S.colorSpace,S.isVideoTexture);ie(ht,S);let Q,gt=S.mipmaps,ft=S.isVideoTexture!==!0,pt=mt.__version===void 0||it===!0,Bt=bt.dataReady,Qt=b(S,tt);if(S.isDepthTexture)et=x(S.format===pi,S.type),pt&&(ft?e.texStorage2D(s.TEXTURE_2D,1,et,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,et,tt.width,tt.height,0,vt,N,null));else if(S.isDataTexture)if(gt.length>0){ft&&pt&&e.texStorage2D(s.TEXTURE_2D,Qt,et,gt[0].width,gt[0].height);for(let ct=0,Ht=gt.length;ct<Ht;ct++)Q=gt[ct],ft?Bt&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,Q.width,Q.height,vt,N,Q.data):e.texImage2D(s.TEXTURE_2D,ct,et,Q.width,Q.height,0,vt,N,Q.data);S.generateMipmaps=!1}else ft?(pt&&e.texStorage2D(s.TEXTURE_2D,Qt,et,tt.width,tt.height),Bt&&St(S,tt,vt,N)):e.texImage2D(s.TEXTURE_2D,0,et,tt.width,tt.height,0,vt,N,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ft&&pt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Qt,et,gt[0].width,gt[0].height,tt.depth);for(let ct=0,Ht=gt.length;ct<Ht;ct++)if(Q=gt[ct],S.format!==mn)if(vt!==null)if(ft){if(Bt)if(S.layerUpdates.size>0){let te=lu(Q.width,Q.height,S.format,S.type);for(let Tt of S.layerUpdates){let de=Q.data.subarray(Tt*te/Q.data.BYTES_PER_ELEMENT,(Tt+1)*te/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,Tt,Q.width,Q.height,1,vt,de)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,Q.width,Q.height,tt.depth,vt,Q.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ct,et,Q.width,Q.height,tt.depth,0,Q.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?Bt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,Q.width,Q.height,tt.depth,vt,N,Q.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ct,et,Q.width,Q.height,tt.depth,0,vt,N,Q.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ft&&pt&&e.texStorage2D(s.TEXTURE_2D,Qt,et,gt[0].width,gt[0].height);for(let ct=0,Ht=gt.length;ct<Ht;ct++)Q=gt[ct],S.format!==mn?vt!==null?ft?Bt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ct,0,0,Q.width,Q.height,vt,Q.data):e.compressedTexImage2D(s.TEXTURE_2D,ct,et,Q.width,Q.height,0,Q.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?Bt&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,Q.width,Q.height,vt,N,Q.data):e.texImage2D(s.TEXTURE_2D,ct,et,Q.width,Q.height,0,vt,N,Q.data)}else if(S.isDataArrayTexture)if(ft){if(pt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Qt,et,tt.width,tt.height,tt.depth),Bt)if(S.layerUpdates.size>0){let ct=lu(tt.width,tt.height,S.format,S.type);for(let Ht of S.layerUpdates){let te=tt.data.subarray(Ht*ct/tt.data.BYTES_PER_ELEMENT,(Ht+1)*ct/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ht,tt.width,tt.height,1,vt,N,te)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,vt,N,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,et,tt.width,tt.height,tt.depth,0,vt,N,tt.data);else if(S.isData3DTexture)ft?(pt&&e.texStorage3D(s.TEXTURE_3D,Qt,et,tt.width,tt.height,tt.depth),Bt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,vt,N,tt.data)):e.texImage3D(s.TEXTURE_3D,0,et,tt.width,tt.height,tt.depth,0,vt,N,tt.data);else if(S.isFramebufferTexture){if(pt)if(ft)e.texStorage2D(s.TEXTURE_2D,Qt,et,tt.width,tt.height);else{let ct=tt.width,Ht=tt.height;for(let te=0;te<Qt;te++)e.texImage2D(s.TEXTURE_2D,te,et,ct,Ht,0,vt,N,null),ct>>=1,Ht>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){let ct=s.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),tt.parentNode!==ct){ct.appendChild(tt),u.add(S),ct.onpaint=Ht=>{let te=Ht.changedElements;for(let Tt of u)te.includes(Tt.image)&&(Tt.needsUpdate=!0)},ct.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,tt);else{let te=s.RGBA,Tt=s.RGBA,de=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,te,Tt,de,tt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(gt.length>0){if(ft&&pt){let ct=Yt(gt[0]);e.texStorage2D(s.TEXTURE_2D,Qt,et,ct.width,ct.height)}for(let ct=0,Ht=gt.length;ct<Ht;ct++)Q=gt[ct],ft?Bt&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,vt,N,Q):e.texImage2D(s.TEXTURE_2D,ct,et,vt,N,Q);S.generateMipmaps=!1}else if(ft){if(pt){let ct=Yt(tt);e.texStorage2D(s.TEXTURE_2D,Qt,et,ct.width,ct.height)}Bt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,N,tt)}else e.texImage2D(s.TEXTURE_2D,0,et,vt,N,tt);M(S)&&S.mipmapsAutoUpdate===!0&&v(ht),mt.__version=bt.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Dt(R,S,k){if(S.image.length!==6)return;let ht=ae(R,S),it=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+k);let bt=n.get(it);if(it.version!==bt.__version||ht===!0){e.activeTexture(s.TEXTURE0+k);let mt=pe.getPrimaries(pe.workingColorSpace),K=S.colorSpace===Vn?null:pe.getPrimaries(S.colorSpace),tt=S.colorSpace===Vn||mt===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let vt=S.isCompressedTexture||S.image[0].isCompressedTexture,N=S.image[0]&&S.image[0].isDataTexture,et=[];for(let Tt=0;Tt<6;Tt++)!vt&&!N?et[Tt]=y(S.image[Tt],!0,i.maxCubemapSize):et[Tt]=N?S.image[Tt].image:S.image[Tt],et[Tt]=Vt(S,et[Tt]);let Q=et[0],gt=r.convert(S.format,S.colorSpace),ft=r.convert(S.type),pt=w(S.internalFormat,gt,ft,S.normalized,S.colorSpace),Bt=S.isVideoTexture!==!0,Qt=bt.__version===void 0||ht===!0,ct=it.dataReady,Ht=b(S,Q);ie(s.TEXTURE_CUBE_MAP,S);let te;if(S.isDepthTexture){if(pt=x(S.format===pi,S.type),Qt)if(Bt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,pt,Q.width,Q.height);else for(let Tt=0;Tt<6;Tt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,pt,Q.width,Q.height,0,gt,ft,null)}else if(vt){Bt&&Qt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Ht,pt,Q.width,Q.height);for(let Tt=0;Tt<6;Tt++){te=et[Tt].mipmaps;for(let de=0;de<te.length;de++){let De=te[de];S.format!==mn?gt!==null?Bt?ct&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,de,0,0,De.width,De.height,gt,De.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,de,pt,De.width,De.height,0,De.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,de,0,0,De.width,De.height,gt,ft,De.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,de,pt,De.width,De.height,0,gt,ft,De.data)}}}else{if(te=S.mipmaps,Bt&&Qt){te.length>0&&Ht++;let Tt=Yt(et[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Ht,pt,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(N){Bt?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,et[Tt].width,et[Tt].height,gt,ft,et[Tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,pt,et[Tt].width,et[Tt].height,0,gt,ft,et[Tt].data);for(let de=0;de<te.length;de++){let En=te[de].image[Tt].image;Bt?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,de+1,0,0,En.width,En.height,gt,ft,En.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,de+1,pt,En.width,En.height,0,gt,ft,En.data)}}else{Bt?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,gt,ft,et[Tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,pt,gt,ft,et[Tt]);for(let de=0;de<te.length;de++){let De=te[de];Bt?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,de+1,0,0,gt,ft,De.image[Tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,de+1,pt,gt,ft,De.image[Tt])}}}M(S)&&S.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),bt.__version=it.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function At(R,S,k,ht,it,bt){let mt=r.convert(k.format,k.colorSpace),K=r.convert(k.type),tt=w(k.internalFormat,mt,K,k.normalized,k.colorSpace),vt=n.get(S),N=n.get(k);if(N.__renderTarget=S,!vt.__hasExternalTextures){let et=Math.max(1,S.width>>bt),Q=Math.max(1,S.height>>bt);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,bt,tt,et,Q,S.depth,0,mt,K,null):e.texImage2D(it,bt,tt,et,Q,0,mt,K,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),yt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,it,N.__webglTexture,0,_e(S)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ht,it,N.__webglTexture,bt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function $t(R,S,k){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){let ht=S.depthTexture,it=ht&&ht.isDepthTexture?ht.type:null,bt=x(S.stencilBuffer,it),mt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;yt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e(S),bt,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e(S),bt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,bt,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,R)}else{let ht=S.textures;for(let it=0;it<ht.length;it++){let bt=ht[it],mt=r.convert(bt.format,bt.colorSpace),K=r.convert(bt.type),tt=w(bt.internalFormat,mt,K,bt.normalized,bt.colorSpace);yt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e(S),tt,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e(S),tt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,tt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function zt(R,S,k){let ht=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(S.depthTexture);it.__renderTarget=S;let bt=ht?S.depthTexture.image[0]:S.depthTexture.image;(!it.__webglTexture||bt.width!==S.width||bt.height!==S.height)&&(bt.width=S.width,bt.height=S.height,S.depthTexture.needsUpdate=!0),ht?xt(S.depthTexture,0):Rt(S.depthTexture,0);let mt=it.__webglTexture,K=_e(S),tt=ht?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,vt=S.depthTexture.format===pi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===oi)yt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,vt,tt,mt,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,vt,tt,mt,0);else if(S.depthTexture.format===pi)yt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,vt,tt,mt,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,vt,tt,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(R){let S=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let ht=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ht){let it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ht.removeEventListener("dispose",it)};ht.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=ht}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let ht=0;ht<6;ht++)zt(S.__webglFramebuffer[ht],R,ht);else R.texture.mipmaps.length>0?zt(S.__webglFramebuffer[0],R,0):zt(S.__webglFramebuffer,R,0);else if(k){S.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ht]),S.__webglDepthbuffer[ht]===void 0)S.__webglDepthbuffer[ht]=s.createRenderbuffer(),$t(S.__webglDepthbuffer[ht],R,!1);else{let it=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=S.__webglDepthbuffer[ht];s.bindRenderbuffer(s.RENDERBUFFER,bt),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,bt)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),$t(S.__webglDepthbuffer,R,!1);else{let it=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,bt),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,bt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(R,S,k){let ht=n.get(R);S!==void 0&&At(ht.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&ce(R)}function me(R){let S=R.texture,k=n.get(R),ht=n.get(S);R.addEventListener("dispose",z),D(R);let it=R.textures,bt=R.isWebGLCubeRenderTarget===!0,mt=it.length>1;if(mt||(ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture()),ht.__version=S.version,a.memory.textures++),bt){k.__webglFramebuffer=[];for(let K=0;K<6;K++)if(S.mipmaps.length>0){k.__webglFramebuffer[K]=[];for(let tt=0;tt<S.mipmaps.length;tt++)k.__webglFramebuffer[K][tt]=s.createFramebuffer()}else k.__webglFramebuffer[K]=s.createFramebuffer()}else{if(S.mipmaps.length>0){k.__webglFramebuffer=[];for(let K=0;K<S.mipmaps.length;K++)k.__webglFramebuffer[K]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(mt)for(let K=0,tt=it.length;K<tt;K++){let vt=n.get(it[K]);vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&yt(R)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let K=0;K<it.length;K++){let tt=it[K];k.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[K]);let vt=r.convert(tt.format,tt.colorSpace),N=r.convert(tt.type),et=w(tt.internalFormat,vt,N,tt.normalized,tt.colorSpace,R.isXRRenderTarget===!0),Q=_e(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,et,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,k.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),$t(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(bt){e.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),ie(s.TEXTURE_CUBE_MAP,S);for(let K=0;K<6;K++)if(S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)At(k.__webglFramebuffer[K][tt],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,tt);else At(k.__webglFramebuffer[K],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);M(S)?v(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(mt){for(let K=0,tt=it.length;K<tt;K++){let vt=it[K],N=n.get(vt),et=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(et=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(et,N.__webglTexture),ie(et,vt),At(k.__webglFramebuffer,R,vt,s.COLOR_ATTACHMENT0+K,et,0),M(vt)&&v(et)}e.unbindTexture()}else{let K=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(K,ht.__webglTexture),ie(K,S),S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)At(k.__webglFramebuffer[tt],R,S,s.COLOR_ATTACHMENT0,K,tt);else At(k.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,K,0);M(S)?v(K):S.mipmaps.length>0&&s.texParameteri(K,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&ce(R)}function F(R){let S=R.textures;for(let k=0,ht=S.length;k<ht;k++){let it=S[k];if(M(it)&&it.mipmapsAutoUpdate===!0){let bt=E(R),mt=n.get(it).__webglTexture;e.bindTexture(bt,mt),v(bt),e.unbindTexture()}}}let Ae=[];function oe(R){if(R.samples>0){if(yt(R)===!1){let S=R.textures,k=R.width,ht=R.height,it=s.COLOR_BUFFER_BIT,bt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=n.get(R),K=S.length>1;if(K)for(let vt=0;vt<S.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let vt=0;vt<S.length;vt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,mt.__webglColorRenderbuffer[vt]);let N=n.get(S[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,N,0)}s.blitFramebuffer(0,0,k,ht,0,0,k,ht,it,s.NEAREST),l===!0&&(Ae.length=0,Ae.push(s.COLOR_ATTACHMENT0+vt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Ae.push(bt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ae))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let vt=0;vt<S.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,mt.__webglColorRenderbuffer[vt]);let N=n.get(S[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,N,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function _e(R){return Math.min(i.maxSamples,R.samples)}function yt(R){let S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Xt(R){let S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Vt(R,S){let k=R.colorSpace,ht=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==yr&&k!==Vn&&(pe.getTransfer(k)===xe?(ht!==mn||it!==_n)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",k)),S}function Yt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Mt,this.resetTextureUnits=st,this.getTextureUnits=at,this.setTextureUnits=Ft,this.setTexture2D=Rt,this.setTexture2DArray=Nt,this.setTexture3D=qt,this.setTextureCube=xt,this.rebindTextures=fe,this.setupRenderTarget=me,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=At,this.useMultisampledRTT=yt,this.dispose=H}function gg(s,t){function e(n,i=Vn){let r,a=pe.getTransfer(i);if(n===_n)return s.UNSIGNED_BYTE;if(n===Yo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Zo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Kh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===jh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===$h)return s.BYTE;if(n===Qh)return s.SHORT;if(n===Ws)return s.UNSIGNED_SHORT;if(n===qo)return s.INT;if(n===Pn)return s.UNSIGNED_INT;if(n===sn)return s.FLOAT;if(n===Gn)return s.HALF_FLOAT;if(n===tu)return s.ALPHA;if(n===eu)return s.RGB;if(n===mn)return s.RGBA;if(n===oi)return s.DEPTH_COMPONENT;if(n===pi)return s.DEPTH_STENCIL;if(n===$o)return s.RED;if(n===ta)return s.RED_INTEGER;if(n===Di)return s.RG;if(n===Qo)return s.RG_INTEGER;if(n===Ko)return s.RGBA_INTEGER;if(n===ea||n===na||n===ia||n===sa)if(a===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jo||n===tl||n===el||n===nl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===il||n===sl||n===rl||n===al||n===ol||n===ra||n===ll)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===il||n===sl)return a===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===al)return r.COMPRESSED_R11_EAC;if(n===ol)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ra)return r.COMPRESSED_RG11_EAC;if(n===ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===yl||n===vl||n===Ml||n===Sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ul)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ml)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_l)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ml)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bl||n===Tl||n===wl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===bl)return a===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===El||n===Al||n===aa||n===Rl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===El)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ss?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var qM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YM=`
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

}`,hf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Lr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Fn({vertexShader:qM,fragmentShader:YM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ee(new On(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uf=class extends Sn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,_=typeof XRWebGLBinding<"u",m=new hf,g={},y=e.getContextAttributes(),M=null,v=null,E=[],w=[],x=new lt,b=null,D=null,C=new Ue;C.viewport=new ve;let U=new Ue;U.viewport=new ve;let z=[C,U],X=new Go,P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Rt=E[j];return Rt===void 0&&(Rt=new Es,E[j]=Rt),Rt.getTargetRaySpace()},this.getControllerGrip=function(j){let Rt=E[j];return Rt===void 0&&(Rt=new Es,E[j]=Rt),Rt.getGripSpace()},this.getHand=function(j){let Rt=E[j];return Rt===void 0&&(Rt=new Es,E[j]=Rt),Rt.getHandSpace()};function Z(j){let Rt=w.indexOf(j.inputSource);if(Rt===-1)return;let Nt=E[Rt];Nt!==void 0&&(Nt.update(j.inputSource,j.frame,c||a),Nt.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",dt);for(let j=0;j<E.length;j++){let Rt=w[j];Rt!==null&&(w[j]=null,E[j].disconnect(Rt))}P=null,H=null,m.reset();for(let j in g)delete g[j];if(t.setRenderTarget(M),f=null,d=null,u=null,i=null,v=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),D!==null){let j=D.camera;j.fov=D.fov,j.zoom=D.zoom,j.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(M=t.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",W),i.addEventListener("inputsourceschange",dt),y.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,qt=null,xt=null;y.depth&&(xt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Nt=y.stencil?pi:oi,qt=y.stencil?ss:Pn);let Gt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Gt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new rn(d.textureWidth,d.textureHeight,{format:mn,type:_n,depthTexture:new ci(d.textureWidth,d.textureHeight,qt,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Nt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Nt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new rn(f.framebufferWidth,f.framebufferHeight,{format:mn,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Mt.setContext(i),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function dt(j){for(let Rt=0;Rt<j.removed.length;Rt++){let Nt=j.removed[Rt],qt=w.indexOf(Nt);qt>=0&&(w[qt]=null,E[qt].disconnect(Nt))}for(let Rt=0;Rt<j.added.length;Rt++){let Nt=j.added[Rt],qt=w.indexOf(Nt);if(qt===-1){for(let Gt=0;Gt<E.length;Gt++)if(Gt>=w.length){w.push(Nt),qt=Gt;break}else if(w[Gt]===null){w[Gt]=Nt,qt=Gt;break}if(qt===-1)break}let xt=E[qt];xt&&xt.connect(Nt)}}function q(j,Rt){Rt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Rt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let Rt=j.near,Nt=j.far;m.texture!==null&&(m.depthNear>0&&(Rt=m.depthNear),m.depthFar>0&&(Nt=m.depthFar)),X.near=U.near=C.near=Rt,X.far=U.far=C.far=Nt,(P!==X.near||H!==X.far)&&(i.updateRenderState({depthNear:X.near,depthFar:X.far}),P=X.near,H=X.far),X.layers.mask=j.layers.mask|6,C.layers.mask=X.layers.mask&-5,U.layers.mask=X.layers.mask&-3;let qt=j.parent,xt=X.cameras;q(X,qt);for(let Gt=0;Gt<xt.length;Gt++)q(xt[Gt],qt);X.projectionMatrix.copy(C.projectionMatrix),X.projectionMatrixInverse.copy(C.projectionMatrixInverse),D===null&&j.isPerspectiveCamera&&(D={camera:j,fov:j.fov,zoom:j.zoom}),st(j,X,qt)};function st(j,Rt,Nt){Nt===null?j.matrix.copy(Rt.matrixWorld):(j.matrix.copy(Nt.matrixWorld),j.matrix.invert(),j.matrix.multiply(Rt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Rt.projectionMatrix),j.projectionMatrixInverse.copy(Rt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ss*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(j){return g[j]};let at=null;function Ft(j,Rt){if(h=Rt.getViewerPose(c||a),p=Rt,h!==null){let Nt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let qt=!1;Nt.length!==X.cameras.length&&(X.cameras.length=0,qt=!0);for(let Jt=0;Jt<Nt.length;Jt++){let ie=Nt[Jt],ae=null;if(f!==null)ae=f.getViewport(ie);else{let St=u.getViewSubImage(d,ie);ae=St.viewport,Jt===0&&(t.setRenderTargetTextures(v,St.colorTexture,St.depthStencilTexture),t.setRenderTarget(v))}let nt=z[Jt];nt===void 0&&(nt=new Ue,nt.layers.enable(Jt),nt.viewport=new ve,z[Jt]=nt),nt.matrix.fromArray(ie.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(ie.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(ae.x,ae.y,ae.width,ae.height),Jt===0&&(X.matrix.copy(nt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),qt===!0&&X.cameras.push(nt)}let xt=i.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let Jt=u.getDepthInformation(Nt[0]);Jt&&Jt.isValid&&Jt.texture&&m.init(Jt,i.renderState)}if(xt&&xt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let Jt=0;Jt<Nt.length;Jt++){let ie=Nt[Jt].camera;if(ie){let ae=g[ie];ae||(ae=new Lr,g[ie]=ae);let nt=u.getCameraImage(ie);ae.sourceTexture=nt}}}}for(let Nt=0;Nt<E.length;Nt++){let qt=w[Nt],xt=E[Nt];qt!==null&&xt!==void 0&&xt.update(qt,Rt,c||a)}at&&at(j,Rt),Rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Rt}),p=null}let Mt=new ag;Mt.setAnimationLoop(Ft),this.setAnimationLoop=function(j){at=j},this.dispose=function(){}}},ZM=new ne,_g=new re;_g.set(-1,0,0,0,1,0,0,0,1);function $M(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,$d(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,y,M,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,y,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===on&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===on&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=t.get(g),M=y.envMap,v=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(ZM.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(_g),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=M*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===on&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function QM(s,t,e,n){let i={},r={};function a(y,M){let v=M.program;n.uniformBlockBinding(y,v,i[y.id])}function o(y,M){let v=i[y.id];v===void 0&&(p(y),v=l(y),i[y.id]=v,y.addEventListener("dispose",m));let E=M.program;n.updateUBOMapping(y,E);let w=t.render.frame;r[y.id]!==w&&(c(y),r[y.id]=w)}function l(y){let M=s.createBuffer(),v=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,v,E),s.bindBuffer(s.UNIFORM_BUFFER,null),M}function c(y){let M=i[y.id],v=y.uniforms,E=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let w=0,x=v.length;w<x;w++){let b=v[w];if(Array.isArray(b))for(let D=0,C=b.length;D<C;D++)h(b[D],w,D,E);else h(b,w,0,E)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,M,v,E){if(d(y,M,v,E)===!0){let w=y.__offset,x=y.value;if(Array.isArray(x)){let b=0;for(let D=0;D<x.length;D++){let C=x[D],U=_(C,!0);u(C,y.__data,b),b+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,y.__data)}}function u(y,M,v){typeof y=="number"||typeof y=="boolean"?M[v]=y:y.isMatrix3?(M[v]=y.elements[0],M[v+1]=y.elements[1],M[v+2]=y.elements[2],M[v+3]=0,M[v+4]=y.elements[3],M[v+5]=y.elements[4],M[v+6]=y.elements[5],M[v+7]=0,M[v+8]=y.elements[6],M[v+9]=y.elements[7],M[v+10]=y.elements[8],M[v+11]=0):ArrayBuffer.isView(y)?M.set(y.subarray(0,M.length-v),v):y.toArray(M,v)}function d(y,M,v,E){let w=y.value,x=M+"_"+v;if(Array.isArray(w)){E[x]===void 0&&(E[x]=[]);let b=E[x],D=!1;for(let C=0;C<w.length;C++)f(w[C],b,C)===!0&&(D=!0);return D}return f(w,E,x)}function f(y,M,v){if(M[v]===void 0)return typeof y=="number"||typeof y=="boolean"?M[v]=y:ArrayBuffer.isView(y)?M[v]=y.slice():M[v]=y.clone(),!0;{let E=M[v];if(typeof y=="number"||typeof y=="boolean"){if(E!==y)return M[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(E.equals(y)===!1)return E.copy(y),!0}}return!1}function p(y){let M=y.uniforms,v=0,E=16;for(let x=0,b=M.length;x<b;x++){let D=Array.isArray(M[x])?M[x]:[M[x]];for(let C=0,U=D.length;C<U;C++){let z=D[C],X=Array.isArray(z.value)?z.value:[z.value],P=Array.isArray(M[x])||Array.isArray(z.value),H=v;for(let W=0,dt=X.length;W<dt;W++){let q=X[W],st=_(q,P),at=v%E,Ft=at%st.boundary,Mt=at+Ft;v+=Ft,Mt!==0&&E-Mt<st.storage&&(v+=E-Mt),W===0&&(H=v),v+=st.storage}let Z=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new Z((v-H)/Float32Array.BYTES_PER_ELEMENT),z.__offset=H}}let w=v%E;return w>0&&(v+=E-w),y.__size=v,y.__cache={},this}function _(y,M){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Ct("WebGLRenderer: Unsupported uniform value type.",y),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(y){let M=y.target;M.removeEventListener("dispose",m),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function g(){for(let y in i)s.deleteBuffer(i[y]);i={},r={}}return{bind:a,update:o,dispose:g}}var KM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gi=null;function jM(){return gi===null&&(gi=new pn(KM,16,16,Di,Gn),gi.name="DFG_LUT",gi.minFilter=we,gi.magFilter=we,gi.wrapS=fn,gi.wrapT=fn,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}var Nl=class{constructor(t={}){let{canvas:e=Jd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=_n}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let _=f,m=new Set([Ko,Qo,ta]),g=new Set([_n,Pn,Ws,ss,Yo,Zo]),y=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},E=null,w=null,x=[],b=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,U=!1,z=null,X=null,P=null,H=null;this._outputColorSpace=$e;let Z=0,W=0,dt=null,q=-1,st=null,at=new ve,Ft=new ve,Mt=null,j=new Lt(0),Rt=0,Nt=e.width,qt=e.height,xt=1,Gt=null,Me=null,Jt=new ve(0,0,Nt,qt),ie=new ve(0,0,Nt,qt),ae=!1,nt=new li,St=new Rr,_t=!1,Dt=!1,At=new ne,$t=new I,zt=new ve,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function me(){return dt===null?xt:1}let F=n;function Ae(T,O){return e.getContext(T,O)}let oe,_e,yt,Xt,Vt,Yt,R,S,k,ht,it,bt,mt,K,tt,vt,N,et,Q,gt,ft,pt,Bt;try{let T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ht,!1),e.addEventListener("webglcontextrestored",te,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),F===null){let O="webgl2";if(F=Ae(O,T),F===null)throw Ae(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qt()}catch(T){throw e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),Wt("WebGLRenderer: "+T.message),T}function Qt(){oe=new uv(F),oe.init(),ft=new gg(F,oe),_e=new tv(F,oe,t,ft),yt=new XM(F,oe),_e.reversedDepthBuffer&&d&&yt.buffers.depth.setReversed(!0),X=F.createFramebuffer(),P=F.createFramebuffer(),H=F.createFramebuffer(),Xt=new pv(F),Vt=new PM,Yt=new JM(F,oe,yt,Vt,_e,ft,Xt),R=new hv(C),S=new g_(F),pt=new Ky(F,S),k=new dv(F,S,Xt,pt),ht=new gv(F,k,S,pt,Xt),et=new mv(F,_e,Yt),tt=new ev(Vt),it=new IM(C,R,oe,_e,pt,tt),bt=new $M(C,Vt),mt=new DM,K=new zM(oe),N=new Qy(C,R,yt,ht,p,l),vt=new WM(C,ht,_e),Bt=new QM(F,Xt,_e,yt),Q=new jy(F,oe,Xt),gt=new fv(F,oe,Xt),Xt.programs=it.programs,C.capabilities=_e,C.extensions=oe,C.properties=Vt,C.renderLists=mt,C.shadowMap=vt,C.state=yt,C.info=Xt}_!==_n&&(D=new xv(_,e.width,e.height,o,i,r));let ct=new uf(C,F);this.xr=ct,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=oe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=oe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(T){T!==void 0&&(xt=T,this.setSize(Nt,qt,!1))},this.getSize=function(T){return T.set(Nt,qt)},this.setSize=function(T,O,J=!0){if(ct.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}Nt=T,qt=O,e.width=Math.floor(T*xt),e.height=Math.floor(O*xt),J===!0&&(e.style.width=T+"px",e.style.height=O+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(Nt*xt,qt*xt).floor()},this.setDrawingBufferSize=function(T,O,J){Nt=T,qt=O,xt=J,e.width=Math.floor(T*J),e.height=Math.floor(O*J),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(_===_n){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){Ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(at)},this.getViewport=function(T){return T.copy(Jt)},this.setViewport=function(T,O,J,G){T.isVector4?Jt.set(T.x,T.y,T.z,T.w):Jt.set(T,O,J,G),yt.viewport(at.copy(Jt).multiplyScalar(me()).round())},this.getScissor=function(T){return T.copy(ie)},this.setScissor=function(T,O,J,G){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,O,J,G),yt.scissor(Ft.copy(ie).multiplyScalar(me()).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(T){yt.setScissorTest(ae=T)},this.setOpaqueSort=function(T){Gt=T},this.setTransparentSort=function(T){Me=T},this.getClearColor=function(T){return T.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,J=!0){let G=0;if(T){let V=!1;if(dt!==null){let wt=dt.texture.format;V=m.has(wt)}if(V){let wt=dt.texture.type,Ut=g.has(wt),Et=N.getClearColor(),It=N.getClearAlpha(),kt=Et.r,se=Et.g,A=Et.b;Ut?(y[0]=kt,y[1]=se,y[2]=A,y[3]=It,F.clearBufferuiv(F.COLOR,0,y)):(M[0]=kt,M[1]=se,M[2]=A,M[3]=It,F.clearBufferiv(F.COLOR,0,M))}else G|=F.COLOR_BUFFER_BIT}O&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),z=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),N.dispose(),mt.dispose(),K.dispose(),Yt.dispose(),Vt.dispose(),R.dispose(),ht.dispose(),k.dispose(),pt.dispose(),Bt.dispose(),it.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",xi),ct.removeEventListener("sessionend",ii),We.stop()};function Ht(T){T.preventDefault(),Sr("WebGLRenderer: Context Lost."),U=!0}function te(){Sr("WebGLRenderer: Context Restored."),U=!1;let T=Xt.autoReset,O=vt.enabled,J=vt.autoUpdate,G=vt.needsUpdate,V=vt.type;Qt(),Xt.autoReset=T,vt.enabled=O,vt.autoUpdate=J,vt.needsUpdate=G,vt.type=V}function Tt(T){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function de(T){let O=T.target;O.removeEventListener("dispose",de),De(O)}function De(T){En(T),Vt.remove(T)}function En(T){let O=Vt.get(T).programs;O!==void 0&&(O.forEach(function(J){it.releaseProgram(J)}),T.isShaderMaterial&&it.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,J,G,V,wt){O===null&&(O=ce);let Ut=V.isMesh&&V.matrixWorld.determinantAffine()<0,Et=cn(T,O,J,G,V);yt.setMaterial(G,Ut);let It=J.index,kt=1;if(G.wireframe===!0){if(It=k.getWireframeAttribute(J),It===void 0)return;kt=2}let se=J.drawRange,A=J.attributes.position,L=se.start*kt,B=(se.start+se.count)*kt;wt!==null&&(L=Math.max(L,wt.start*kt),B=Math.min(B,(wt.start+wt.count)*kt)),It!==null?(L=Math.max(L,0),B=Math.min(B,It.count)):A!=null&&(L=Math.max(L,0),B=Math.min(B,A.count));let $=B-L;if($<0||$===1/0)return;pt.setup(V,G,Et,J,It);let Y,rt=Q;if(It!==null&&(Y=S.get(It),rt=gt,rt.setIndex(Y)),V.isMesh)G.wireframe===!0?(yt.setLineWidth(G.wireframeLinewidth*me()),rt.setMode(F.LINES)):rt.setMode(F.TRIANGLES);else if(V.isLine){let ot=G.linewidth;ot===void 0&&(ot=1),yt.setLineWidth(ot*me()),V.isLineSegments?rt.setMode(F.LINES):V.isLineLoop?rt.setMode(F.LINE_LOOP):rt.setMode(F.LINE_STRIP)}else V.isPoints?rt.setMode(F.POINTS):V.isSprite&&rt.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))rt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let ot=V._multiDrawStarts,ut=V._multiDrawCounts,ee=V._multiDrawCount,Kt=It?S.get(It).bytesPerElement:1,Te=Vt.get(G).currentProgram.getUniforms();for(let Se=0;Se<ee;Se++)Te.setValue(F,"_gl_DrawID",Se),rt.render(ot[Se]/Kt,ut[Se])}else if(V.isInstancedMesh)rt.renderInstances(L,$,V.count);else if(J.isInstancedBufferGeometry){let ot=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ut=Math.min(J.instanceCount,ot);rt.renderInstances(L,$,ut)}else rt.render(L,$)};function _i(T,O,J,G){z!==null&&T.isNodeMaterial&&z.setObject(G,T),_t===!0&&tt.setState(T,J,!1),T.transparent===!0&&T.side===wn&&T.forceSinglePass===!1?(T.side=on,T.needsUpdate=!0,os(T,O,G),T.side=Li,T.needsUpdate=!0,os(T,O,G),T.side=wn):os(T,O,G)}this.compile=function(T,O,J=null){J===null&&(J=T),z!==null&&z.renderStart(T,O,J),w=K.get(J),w.init(O),b.push(w),J.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),T!==J&&T.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),Dt=this.localClippingEnabled,_t=tt.init(this.clippingPlanes,Dt),_t===!0&&tt.setGlobalState(this.clippingPlanes,O),z!==null&&vt.render(w.state.shadowsArray,J,O);let G=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let wt=V.material;if(wt)if(Array.isArray(wt))for(let Ut=0;Ut<wt.length;Ut++){let Et=wt[Ut];_i(Et,J,O,V),G.add(Et)}else _i(wt,J,O,V),G.add(wt)}),w=b.pop(),z!==null&&z.renderEnd(),G},this.compileAsync=function(T,O,J=null){let G=this.compile(T,O,J);return new Promise(V=>{function wt(){if(G.forEach(function(Ut){let It=Vt.get(Ut).currentProgram;(It===void 0||It.isReady())&&G.delete(Ut)}),G.size===0){V(T);return}setTimeout(wt,10)}oe.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let He=null;function Js(T){He&&He(T)}function xi(){We.stop()}function ii(){We.start()}let We=new ag;We.setAnimationLoop(Js),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(T){He=T,ct.setAnimationLoop(T),T===null?We.stop():We.start()},ct.addEventListener("sessionstart",xi),ct.addEventListener("sessionend",ii),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(T,O);let J=ct.enabled===!0&&ct.isPresenting===!0,G=D!==null&&(dt===null||J)&&D.begin(C,dt);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(O),O=ct.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,O,dt),w=K.get(T,b.length),w.init(O),w.state.textureUnits=Yt.getTextureUnits(),b.push(w),At.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?St.setFromArrayCamera(O):nt.setFromProjectionMatrix(At,Mn,O.reversedDepth),Dt=this.localClippingEnabled,_t=tt.init(this.clippingPlanes,Dt),E=mt.get(T,x.length),E.init(),x.push(E),this.info.render.frame++,ct.enabled===!0&&ct.isPresenting===!0){let Ut=C.xr.getDepthSensingMesh();Ut!==null&&rs(Ut,O,-1/0,C.sortObjects)}rs(T,O,0,C.sortObjects),E.finish(),z!==null&&z.updateLights(w.state.lightsArray),C.sortObjects===!0&&E.sort(Gt,Me),fe=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,fe&&N.addToRenderList(E,T),this.info.autoReset===!0&&this.info.reset(),_t===!0&&tt.beginShadows();let V=w.state.shadowsArray;if(vt.render(V,T,O),_t===!0&&tt.endShadows(),(G&&D.hasRenderPass())===!1){let Ut=E.opaque,Et=E.transmissive;if(w.setupLights(),O.isArrayCamera){let It=O.cameras;if(Et.length>0)for(let kt=0,se=It.length;kt<se;kt++){let A=It[kt];ua(Ut,Et,T,A)}fe&&N.render(T);for(let kt=0,se=It.length;kt<se;kt++){let A=It[kt];Ol(E,T,A,A.viewport)}}else Et.length>0&&ua(Ut,Et,T,O),fe&&N.render(T),Ol(E,T,O)}dt!==null&&W===0&&(Yt.updateMultisampleRenderTarget(dt),Yt.updateRenderTargetMipmap(dt)),G&&D.end(C),T.isScene===!0&&T.onAfterRender(C,T,O),pt.resetDefaultState(),q=-1,st=null,b.pop(),b.length>0?(w=b[b.length-1],Yt.setTextureUnits(w.state.textureUnits),_t===!0&&tt.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,z!==null&&z.renderEnd()};function rs(T,O,J,G){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){let Ut=O.isArrayCamera?St:nt;if(!T.frustumCulled||T.intersectsFrustum(Ut)){G&&zt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(At);let Et=ht.update(T),It=T.material;It.visible&&E.push(T,Et,It,J,zt.z,null,O)}}else if(T.isMesh||T.isLine||T.isPoints){let Ut=O.isArrayCamera?St:nt;if(!T.frustumCulled||T.intersectsFrustum(Ut)){let Et=ht.update(T),It=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),zt.copy(T.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),zt.copy(Et.boundingSphere.center)),zt.applyMatrix4(T.matrixWorld).applyMatrix4(At)),Array.isArray(It)){let kt=Et.groups;for(let se=0,A=kt.length;se<A;se++){let L=kt[se],B=It[L.materialIndex];B&&B.visible&&E.push(T,Et,B,J,zt.z,L,O)}}else It.visible&&E.push(T,Et,It,J,zt.z,null,O)}}}let wt=T.children;for(let Ut=0,Et=wt.length;Ut<Et;Ut++)rs(wt[Ut],O,J,G)}function Ol(T,O,J,G){let{opaque:V,transmissive:wt,transparent:Ut}=T;w.setupLightsView(J),_t===!0&&tt.setGlobalState(C.clippingPlanes,J),G&&yt.viewport(at.copy(G)),V.length>0&&as(V,O,J),wt.length>0&&as(wt,O,J),Ut.length>0&&as(Ut,O,J),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function ua(T,O,J,G){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){let L=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new rn(1,1,{generateMipmaps:!0,type:L?Gn:_n,minFilter:zn,samples:Math.max(4,_e.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let wt=w.state.transmissionRenderTarget[G.id],Ut=G.viewport||at;wt.setSize(Ut.z*C.transmissionResolutionScale,Ut.w*C.transmissionResolutionScale);let Et=C.getRenderTarget(),It=C.getActiveCubeFace(),kt=C.getActiveMipmapLevel();C.setRenderTarget(wt),C.getClearColor(j),Rt=C.getClearAlpha(),Rt<1&&C.setClearColor(16777215,.5),C.clear(),fe&&N.render(J);let se=C.toneMapping;C.toneMapping=ei;let A=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),_t===!0&&tt.setGlobalState(C.clippingPlanes,G),as(T,J,G),Yt.updateMultisampleRenderTarget(wt),Yt.updateRenderTargetMipmap(wt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let L=!1;for(let B=0,$=O.length;B<$;B++){let Y=O[B],{object:rt,geometry:ot,material:ut,group:ee}=Y;if(ut.side===wn&&rt.layers.test(G.layers)){let Kt=ut.side;ut.side=on,ut.needsUpdate=!0,da(rt,J,G,ot,ut,ee),ut.side=Kt,ut.needsUpdate=!0,L=!0}}L===!0&&(Yt.updateMultisampleRenderTarget(wt),Yt.updateRenderTargetMipmap(wt))}C.setRenderTarget(Et,It,kt),C.setClearColor(j,Rt),A!==void 0&&(G.viewport=A),C.toneMapping=se}function as(T,O,J){let G=O.isScene===!0?O.overrideMaterial:null;for(let V=0,wt=T.length;V<wt;V++){let Ut=T[V],{object:Et,geometry:It,group:kt}=Ut,se=Ut.material;se.allowOverride===!0&&G!==null&&(se=G),Et.layers.test(J.layers)&&da(Et,O,J,It,se,kt)}}function da(T,O,J,G,V,wt){z!==null&&V.isNodeMaterial&&z.setObject(T,V),T.onBeforeRender(C,O,J,G,V,wt),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(C,O,J,G,T,wt),V.transparent===!0&&V.side===wn&&V.forceSinglePass===!1?(V.side=on,V.needsUpdate=!0,C.renderBufferDirect(J,O,G,V,T,wt),V.side=Li,V.needsUpdate=!0,C.renderBufferDirect(J,O,G,V,T,wt),V.side=wn):C.renderBufferDirect(J,O,G,V,T,wt),T.onAfterRender(C,O,J,G,V,wt)}function Fl(T){let O=0;for(let J of T)J.texture!==null&&O++;return O}function os(T,O,J){O.isScene!==!0&&(O=ce);let G=Vt.get(T),V=w.state.lights,wt=w.state.shadowsArray,Ut=V.state.version,Et=it.getParameters(T,V.state,wt,O,J,w.state.lightProbeGridArray),It=it.getProgramCacheKey(Et),kt=G.programs;G.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;let se=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;G.envMap=R.get(T.envMap||G.environment,se),G.envMapRotation=G.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,kt===void 0&&(T.addEventListener("dispose",de),kt=new Map,G.programs=kt,G.programVariants=new Map);let A=kt.get(It);if(A!==void 0){if(G.currentProgram===A&&G.lightsStateVersion===Ut)return Bl(T,Et),A}else Et.uniforms=it.getUniforms(T),z!==null&&T.isNodeMaterial&&z.build(T,J,Et),T.onBeforeCompile(Et,C),A=it.acquireProgram(Et,It),kt.set(It,A),G.uniforms=Et.uniforms;let L=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(L.clippingPlanes=tt.uniform),Bl(T,Et),G.needsLights=pu(T),G.lightsStateVersion=Ut,G.needsLights&&(L.ambientLightColor.value=V.state.ambient,L.lightProbe.value=V.state.probe,L.sunLights.value=V.state.sun,L.sunLightShadows.value=V.state.sunShadow,L.directionalLights.value=V.state.directional,L.directionalLightShadows.value=V.state.directionalShadow,L.spotLights.value=V.state.spot,L.spotLightShadows.value=V.state.spotShadow,L.rectAreaLights.value=V.state.rectArea,L.ltc_1.value=V.state.rectAreaLTC1,L.ltc_2.value=V.state.rectAreaLTC2,L.pointLights.value=V.state.point,L.pointLightShadows.value=V.state.pointShadow,L.hemisphereLights.value=V.state.hemi,L.sunShadowMatrix.value=V.state.sunShadowMatrix,L.sunShadowCascade.value=V.state.sunShadowCascade,L.directionalShadowMatrix.value=V.state.directionalShadowMatrix,L.spotLightMatrix.value=V.state.spotLightMatrix,L.spotLightMap.value=V.state.spotLightMap,L.pointShadowMatrix.value=V.state.pointShadowMatrix),G.numLightProbeGrids=Fl(w.state.lightProbeGridArray),G.currentProgram=A,G.uniformsList=null,A}function Hn(T,O,J,G,V){let wt=Vt.get(T),Ut=wt.currentProgram.id+","+G+","+V,Et=wt.programVariants.get(Ut);return Et===void 0?(Et=os(T,O,J),wt.programVariants.set(Ut,Et)):(wt.currentProgram=Et,wt.uniformsList=null,wt.outputColorSpace=G,wt.toneMapping=V),Et}function fa(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=la.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Bl(T,O){let J=Vt.get(T);J.outputColorSpace=O.outputColorSpace,J.batching=O.batching,J.batchingColor=O.batchingColor,J.instancing=O.instancing,J.instancingColor=O.instancingColor,J.instancingMorph=O.instancingMorph,J.skinning=O.skinning,J.morphTargets=O.morphTargets,J.morphNormals=O.morphNormals,J.morphColors=O.morphColors,J.morphTargetsCount=O.morphTargetsCount,J.numClippingPlanes=O.numClippingPlanes,J.numIntersection=O.numClipIntersection,J.vertexAlphas=O.vertexAlphas,J.vertexTangents=O.vertexTangents,J.toneMapping=O.toneMapping}function cn(T,O,J,G,V){O.isScene!==!0&&(O=ce),Yt.resetTextureUnits();let wt=O.fog,Ut=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,Et=dt===null?C.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:pe.workingColorSpace,It=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,kt=R.get(G.envMap||Ut,It),se=G.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,A=!!J.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),L=!!J.morphAttributes.position,B=!!J.morphAttributes.normal,$=!!J.morphAttributes.color,Y=ei;G.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Y=C.toneMapping);let rt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ot=rt!==void 0?rt.length:0,ut=Vt.get(G),ee=w.state.lights;if(_t===!0&&(Dt===!0||T!==st)){let Re=T===st&&G.id===q;tt.setState(G,T,Re)}let Kt=!1,Te=!1;G.version===ut.__version?ut.needsLights&&ut.lightsStateVersion!==ee.state.version||V.isBatchedMesh&&ut.batching===!1||!V.isBatchedMesh&&ut.batching===!0||V.isBatchedMesh&&ut.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&ut.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&ut.instancing===!1||!V.isInstancedMesh&&ut.instancing===!0||V.isSkinnedMesh&&ut.skinning===!1||!V.isSkinnedMesh&&ut.skinning===!0||V.isInstancedMesh&&ut.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ut.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ut.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ut.instancingMorph===!1&&V.morphTexture!==null||ut.envMap!==kt||G.fog===!0&&ut.fog!==wt||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==tt.numPlanes||ut.numIntersection!==tt.numIntersection)||ut.vertexAlphas!==se||ut.vertexTangents!==A||ut.morphTargets!==L||ut.morphNormals!==B||ut.morphColors!==$||ut.morphTargetsCount!==ot||ut.numLightProbeGrids!==Fl(w.state.lightProbeGridArray)?Kt=!0:(ut.outputColorSpace!==Et||ut.toneMapping!==Y)&&(Te=!0):(Kt=!0,ut.__version=G.version);let Se=ut.currentProgram;(Kt===!0||Te===!0)&&(Se=Te===!0?Hn(G,O,V,Et,Y):os(G,O,V),z&&G.isNodeMaterial&&z.onUpdateProgram(G,Se,ut));let hn=!1,un=!1,Wn=!1,Zt=Se.getUniforms(),Ge=ut.uniforms;if(yt.useProgram(Se.program)&&(hn=!0,un=!0,Wn=!0),G.id!==q&&(q=G.id,un=!0),hn||st!==T){yt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Zt.setValue(F,"projectionMatrix",T.projectionMatrix),Zt.setValue(F,"viewMatrix",T.matrixWorldInverse);let Xe=Zt.map.cameraPosition;Xe!==void 0&&Xe.setValue(F,$t.setFromMatrixPosition(T.matrixWorld)),_e.logarithmicDepthBuffer&&Zt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Zt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),st!==T&&(st=T,un=!0,Wn=!0)}if(ut.needsLights&&(ee.state.sunShadowMap.length>0&&Zt.setValue(F,"sunShadowMap",ee.state.sunShadowMap,Yt),ee.state.directionalShadowMap.length>0&&Zt.setValue(F,"directionalShadowMap",ee.state.directionalShadowMap,Yt),ee.state.spotShadowMap.length>0&&Zt.setValue(F,"spotShadowMap",ee.state.spotShadowMap,Yt),ee.state.pointShadowMap.length>0&&Zt.setValue(F,"pointShadowMap",ee.state.pointShadowMap,Yt)),V.isSkinnedMesh){Zt.setOptional(F,V,"bindMatrix"),Zt.setOptional(F,V,"bindMatrixInverse");let Re=V.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),Zt.setValue(F,"boneTexture",Re.boneTexture,Yt))}V.isBatchedMesh&&(Zt.setOptional(F,V,"batchingTexture"),Zt.setValue(F,"batchingTexture",V._matricesTexture,Yt),Zt.setOptional(F,V,"batchingIdTexture"),Zt.setValue(F,"batchingIdTexture",V._indirectTexture,Yt),Zt.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&Zt.setValue(F,"batchingColorTexture",V._colorsTexture,Yt));let xn=J.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&et.update(V,J,Se),(un||ut.receiveShadow!==V.receiveShadow)&&(ut.receiveShadow=V.receiveShadow,Zt.setValue(F,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(Ge.envMapIntensity.value=O.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=jM()),un){if(Zt.setValue(F,"toneMappingExposure",C.toneMappingExposure),ut.needsLights&&pa(Ge,Wn),wt&&G.fog===!0&&bt.refreshFogUniforms(Ge,wt),bt.refreshMaterialUniforms(Ge,G,xt,qt,w.state.transmissionRenderTarget[T.id]),ut.needsLights&&ut.numLightProbeGrids>0){let Re=v,Xe=0;for(let yi of w.state.lightProbeGridArray)yi.texture!==null&&(Re.textures[Xe]=yi.texture,Re.min[Xe]=yi.boundingBox.min,Re.max[Xe]=yi.boundingBox.max,Re.resolution[Xe]=yi.resolution,Xe++);for(let yi in Re)Re[yi].length=Xe;Ge.probesSH.value=Re.textures,Ge.probesMin.value=Re.min,Ge.probesMax.value=Re.max,Ge.probesResolution.value=Re.resolution}la.upload(F,fa(ut),Ge,Yt)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(la.upload(F,fa(ut),Ge,Yt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Zt.setValue(F,"center",V.center),Zt.setValue(F,"modelViewMatrix",V.modelViewMatrix),Zt.setValue(F,"normalMatrix",V.normalMatrix),Zt.setValue(F,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){let Re=G.uniformsGroups;for(let Xe=0,yi=Re.length;Xe<yi;Xe++){let df=Re[Xe];Bt.update(df,Se),Bt.bind(df,Se)}}return Se}function pa(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.sunLights.needsUpdate=O,T.sunLightShadows.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function pu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return dt},this.setRenderTargetTextures=function(T,O,J){let G=Vt.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Vt.get(T.texture).__webglTexture=O,Vt.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:J,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){let J=Vt.get(T);J.__webglFramebuffer=O,J.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,J=0){dt=T,Z=O,W=J;let G=null,V=!1,wt=!1;if(T){let Et=Vt.get(T);if(Et.__useDefaultFramebuffer!==void 0){yt.bindFramebuffer(F.FRAMEBUFFER,Et.__webglFramebuffer),at.copy(T.viewport),Ft.copy(T.scissor),Mt=T.scissorTest,yt.viewport(at),yt.scissor(Ft),yt.setScissorTest(Mt),q=-1;return}else if(Et.__webglFramebuffer===void 0)Yt.setupRenderTarget(T);else if(Et.__hasExternalTextures)Yt.rebindTextures(T,Vt.get(T.texture).__webglTexture,Vt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let se=T.depthTexture;if(Et.__boundDepthTexture!==se){if(se!==null&&Vt.has(se)&&(T.width!==se.image.width||T.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Yt.setupDepthRenderbuffer(T)}}let It=T.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(wt=!0);let kt=Vt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(kt[O])?G=kt[O][J]:G=kt[O],V=!0):T.samples>0&&Yt.useMultisampledRTT(T)===!1?G=Vt.get(T).__webglMultisampledFramebuffer:Array.isArray(kt)?G=kt[J]:G=kt,at.copy(T.viewport),Ft.copy(T.scissor),Mt=T.scissorTest}else at.copy(Jt).multiplyScalar(xt).floor(),Ft.copy(ie).multiplyScalar(xt).floor(),Mt=ae;if(J!==0&&(G=X),yt.bindFramebuffer(F.FRAMEBUFFER,G)&&yt.drawBuffers(T,G),yt.viewport(at),yt.scissor(Ft),yt.setScissorTest(Mt),V){let Et=Vt.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,Et.__webglTexture,J)}else if(wt){let Et=O;for(let It=0;It<T.textures.length;It++){let kt=Vt.get(T.textures[It]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+It,kt.__webglTexture,J,Et)}}else if(T!==null&&J!==0){let Et=Vt.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Et.__webglTexture,J)}q=-1};function ma(T){let O=Vt.get(T);return(O.__readFormat!==T.format||O.__readType!==T.type)&&(O.__readFormat=T.format,O.__readType=T.type,O.__formatReadable=_e.textureFormatReadable(T.format),O.__typeReadable=_e.textureTypeReadable(T.type)),O}this.readRenderTargetPixels=function(T,O,J,G,V,wt,Ut,Et=0){if(!(T&&T.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Vt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ut!==void 0&&(It=It[Ut],Array.isArray(It)&&(It=It[0])),It){yt.bindFramebuffer(F.FRAMEBUFFER,It);try{let kt=T.textures[Et],se=kt.format,A=kt.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Et);let L=ma(kt);if(L.__formatReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(L.__typeReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-G&&J>=0&&J<=T.height-V&&F.readPixels(O,J,G,V,ft.convert(se),ft.convert(A),wt)}finally{let kt=dt!==null?Vt.get(dt).__webglFramebuffer:null;yt.bindFramebuffer(F.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(T,O,J,G,V,wt,Ut,Et=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Vt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ut!==void 0&&(It=It[Ut],Array.isArray(It)&&(It=It[0])),It)if(O>=0&&O<=T.width-G&&J>=0&&J<=T.height-V){yt.bindFramebuffer(F.FRAMEBUFFER,It);let kt=T.textures[Et],se=kt.format,A=kt.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Et);let L=ma(kt);if(L.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(L.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let B=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,B),F.bufferData(F.PIXEL_PACK_BUFFER,wt.byteLength,F.STREAM_READ),F.readPixels(O,J,G,V,ft.convert(se),ft.convert(A),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let $=dt!==null?Vt.get(dt).__webglFramebuffer:null;yt.bindFramebuffer(F.FRAMEBUFFER,$);let Y=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Am(F,Y,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,B),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,wt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(B),F.deleteSync(Y),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,J=0){let G=Math.pow(2,-J),V=Math.floor(T.image.width*G),wt=Math.floor(T.image.height*G),Ut=O!==null?O.x:0,Et=O!==null?O.y:0;Yt.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,J,0,0,Ut,Et,V,wt),yt.unbindTexture()},this.copyTextureToTexture=function(T,O,J=null,G=null,V=0,wt=0){let Ut,Et,It,kt,se,A,L,B,$,Y=T.isCompressedTexture?T.mipmaps[wt]:T.image;if(J!==null)Ut=J.max.x-J.min.x,Et=J.max.y-J.min.y,It=J.isBox3?J.max.z-J.min.z:1,kt=J.min.x,se=J.min.y,A=J.isBox3?J.min.z:0;else{let Zt=Math.pow(2,-V);Ut=Math.floor(Y.width*Zt),Et=Math.floor(Y.height*Zt),T.isDataArrayTexture?It=Y.depth:T.isData3DTexture?It=Math.floor(Y.depth*Zt):It=1,kt=0,se=0,A=0}G!==null?(L=G.x,B=G.y,$=G.z):(L=0,B=0,$=0);let rt=ft.convert(O.format),ot=ft.convert(O.type),ut;O.isData3DTexture?(Yt.setTexture3D(O,0),ut=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Yt.setTexture2DArray(O,0),ut=F.TEXTURE_2D_ARRAY):(Yt.setTexture2D(O,0),ut=F.TEXTURE_2D),yt.activeTexture(F.TEXTURE0),yt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),yt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),yt.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);let ee=yt.getParameter(F.UNPACK_ROW_LENGTH),Kt=yt.getParameter(F.UNPACK_IMAGE_HEIGHT),Te=yt.getParameter(F.UNPACK_SKIP_PIXELS),Se=yt.getParameter(F.UNPACK_SKIP_ROWS),hn=yt.getParameter(F.UNPACK_SKIP_IMAGES);yt.pixelStorei(F.UNPACK_ROW_LENGTH,Y.width),yt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Y.height),yt.pixelStorei(F.UNPACK_SKIP_PIXELS,kt),yt.pixelStorei(F.UNPACK_SKIP_ROWS,se),yt.pixelStorei(F.UNPACK_SKIP_IMAGES,A);let un=T.isDataArrayTexture||T.isData3DTexture,Wn=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){let Zt=Vt.get(T),Ge=Vt.get(O),xn=Vt.get(Zt.__renderTarget),Re=Vt.get(Ge.__renderTarget);yt.bindFramebuffer(F.READ_FRAMEBUFFER,xn.__webglFramebuffer),yt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Xe=0;Xe<It;Xe++)un&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vt.get(T).__webglTexture,V,A+Xe),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vt.get(O).__webglTexture,wt,$+Xe)),F.blitFramebuffer(kt,se,kt+Ut,se+Et,L,B,L+Ut,B+Et,F.DEPTH_BUFFER_BIT,F.NEAREST);yt.bindFramebuffer(F.READ_FRAMEBUFFER,null),yt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||Vt.has(T)){let Zt=Vt.get(T),Ge=Vt.get(O);yt.bindFramebuffer(F.READ_FRAMEBUFFER,P),yt.bindFramebuffer(F.DRAW_FRAMEBUFFER,H);for(let xn=0;xn<It;xn++)un?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Zt.__webglTexture,V,A+xn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Zt.__webglTexture,V),Wn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ge.__webglTexture,wt,$+xn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ge.__webglTexture,wt),V!==0?F.blitFramebuffer(kt,se,kt+Ut,se+Et,L,B,L+Ut,B+Et,F.COLOR_BUFFER_BIT,F.NEAREST):Wn?F.copyTexSubImage3D(ut,wt,L,B,$+xn,kt,se,Ut,Et):F.copyTexSubImage2D(ut,wt,L,B,kt,se,Ut,Et);yt.bindFramebuffer(F.READ_FRAMEBUFFER,null),yt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Wn?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(ut,wt,L,B,$,Ut,Et,It,rt,ot,Y.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(ut,wt,L,B,$,Ut,Et,It,rt,Y.data):F.texSubImage3D(ut,wt,L,B,$,Ut,Et,It,rt,ot,Y):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,wt,L,B,Ut,Et,rt,ot,Y.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,wt,L,B,Y.width,Y.height,rt,Y.data):F.texSubImage2D(F.TEXTURE_2D,wt,L,B,Ut,Et,rt,ot,Y);yt.pixelStorei(F.UNPACK_ROW_LENGTH,ee),yt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Kt),yt.pixelStorei(F.UNPACK_SKIP_PIXELS,Te),yt.pixelStorei(F.UNPACK_SKIP_ROWS,Se),yt.pixelStorei(F.UNPACK_SKIP_IMAGES,hn),wt===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&F.generateMipmap(ut),yt.unbindTexture()},this.initRenderTarget=function(T){Vt.get(T).__webglFramebuffer===void 0&&Yt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Yt.setTextureCube(T,0):T.isData3DTexture?Yt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Yt.setTexture2DArray(T,0):Yt.setTexture2D(T,0),yt.unbindTexture()},this.resetState=function(){Z=0,W=0,dt=null,yt.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var xg="data:image/jpeg;base64,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";var le=s=>document.getElementById(s);try{eS()}catch(s){console.error(s),le("error").hidden=!1,le("start").disabled=!0}function eS(){let s=new Rs;s.background=new Lt(11126741),s.fog=new As(11126741,.009);let t=new Ue(59,1,.1,250),e=new Nl({antialias:!0});e.shadowMap.enabled=!0,e.shadowMap.type=ts,e.setPixelRatio(Math.min(devicePixelRatio,1.65)),le("world").append(e.domElement),s.add(new Us(14807295,7631447,2.1));let n=new zs(16769201,2.35);n.position.set(-33,55,27),n.castShadow=!0,Object.assign(n.shadow.camera,{left:-65,right:65,top:65,bottom:-65,far:170}),n.shadow.mapSize.set(2048,2048),n.shadow.normalBias=.035,s.add(n);let i=A=>new jn({color:A,roughness:.94}),r=new Map,a=A=>(r.has(A)||r.set(A,i(A)),r.get(A)),o=new hi(1,1,1);function l(A,L,B,$,Y,rt=s){let ot=new Ee(A,typeof L=="number"?a(L):L);return ot.position.set(B,$,Y),ot.castShadow=!0,ot.receiveShadow=!0,rt.add(ot),ot}function c(A,L,B,$,Y,rt,ot,ut){let ee=l(o,ot,A,L,B,ut);return ee.scale.set($,Y,rt),ee}let h=134,u=()=>(h=Math.imul(h,1664525)+1013904223>>>0)/4294967296;function d(A,L,B=1){let $=document.createElement("canvas");$.width=$.height=A,L($.getContext("2d"));let Y=new Ir($);return Y.colorSpace=$e,Y.wrapS=Y.wrapT=ki,Y.repeat.set(B,B),Y.anisotropy=e.capabilities.getMaxAnisotropy(),Y}function f(A,L){let B=A.image,$=B.width,Y=B.getContext("2d").getImageData(0,0,$,$).data,rt=(ut,ee)=>Y[((ee+$)%$*$+(ut+$)%$)*4]/255,ot=d($,ut=>{let ee=ut.createImageData($,$);for(let Kt=0;Kt<$;Kt++)for(let Te=0;Te<$;Te++){let Se=(rt(Te-1,Kt)-rt(Te+1,Kt))*L,hn=(rt(Te,Kt+1)-rt(Te,Kt-1))*L,un=Math.hypot(Se,hn,1);ee.data.set([128+127*Se/un,128+127*hn/un,128+127/un,255],(Kt*$+Te)*4)}ut.putImageData(ee,0,0)});return ot.colorSpace=Vn,ot.repeat.copy(A.repeat),ot}function p(A,L,B,$=!1){let Y=d(128,rt=>{rt.fillStyle=A,rt.fillRect(0,0,128,128);for(let ot=0;ot<2200;ot++)rt.fillStyle=L[ot%L.length],rt.fillRect(u()*128,u()*128,1+u()*4,1+u()*3);if($){rt.fillStyle="#848477";for(let ot=0;ot<128;ot+=32)rt.fillRect(0,ot,128,1),rt.fillRect(ot,0,1,128)}},B);return new jn({map:Y,normalMap:f(Y,$?3:1.4)})}let _=p("#688052",["#789459","#60784b","#71854b","#84915b"],52),m=p("#b1ad9f",["#aaa99d","#bbb7aa","#a29f92"],9,!0),g=p("#62696a",["#737879","#626868","#585f60"],12);c(0,-.17,0,240,.3,240,_).castShadow=!1,c(-6,-.035,3,57,.09,33,m).castShadow=!1,c(-44,-.04,20,17,.08,108,g).castShadow=!1,c(-25,-.025,22,35,.08,9,g).castShadow=!1,c(26,-.028,-6,4,.07,59,m).castShadow=!1,c(10,-.021,18,34,.08,3.6,m).castShadow=!1,c(8,.015,8,22,.07,13,_).castShadow=!1;for(let A=0;A<11;A++)c(-39,.015,-21+A*4.1,4,.018,.08,14211005).castShadow=!1;let y=d(128,A=>{A.fillStyle="#b38374",A.fillRect(0,0,128,128);for(let L=0;L<12;L++)for(let B=-1;B<5;B++){let $=42+u()*9;A.fillStyle="hsl(10 34% "+$+"%)",A.fillRect(B*32+L%2*16,L*128/12,31,128/12-1)}}),M=f(y,5);function v(A,L){let B=y.clone();B.repeat.set(A/2.9,L/2.35);let $=M.clone();return $.repeat.copy(B.repeat),new jn({map:B,normalMap:$,roughness:1})}let E=[];function w(A,L,B,$,Y,rt){let ot=new Qe;ot.position.set(A,0,L),ot.rotation.y=Y,s.add(ot);let ut=Math.floor(B/(rt?4.1:2.45));for(let ee=0;ee<3;ee++)for(let Kt=0;Kt<ut;Kt++){if(rt&&ee===0)continue;let Te=(Kt-(ut-1)/2)*B/ut,Se=2.05+ee*2.62,hn=rt&&ee===1?.68:1.47;c(Te,Se,.025,1.57,hn,.09,14868434,ot),c(Te,Se,.081,1.36,hn-.17,.035,[2902616,4612202,2308675][Math.floor(u()*3)],ot),c(Te,Se,.108,.07,hn-.12,.035,14934228,ot),rt||c(Te,Se-.11,.109,1.42,.062,.035,14934228,ot),c(Te,Se-hn/2,.092,1.7,.085,.19,14868176,ot)}}function x(A,L,B,$,Y,rt=!1){E.push({x:A,z:L,w:B,d:$});let ot=rt?b:v(B,Y),ut=rt?ot:v($,Y);c(A,Y/2,L,B,Y,$,[ut,ut,a(5593691),ot,ot,ot]),c(A,Y+.09,L,B+.26,.21,$+.26,rt?4279378:9793124),c(A,.23,L,B+.07,.46,$+.07,8158320),w(A,L+$/2,B,Y,0,rt),w(A,L-$/2,B,Y,Math.PI,rt),w(A+B/2,L,$,Y,Math.PI/2,rt),w(A-B/2,L,$,Y,-Math.PI/2,rt)}let b=p("#68777d",["#627177","#6b797e","#647176"],5);x(-11,-16,31,12,9.1),x(10,-19,12,23,9.25),x(21,-32,23,12,9.05),x(22,-10,12,15,10.5,!0),x(-29,-12,12,14,9.8,!0),x(-39,-20,9,20,8.8),x(-36,-31,15,10,8.8),x(-39,-43,11,14,8.5);function D(A,L,B){c(A,1.35,L,4.9,2.6,.16,13817034);for(let ot=-2;ot<=2;ot++)c(A+ot*.89,1.37,L+.11,.77,2.32,.08,3427408),c(A+ot*.89,1.06,L+.17,.74,.07,.04,15000533);c(A,2.84,L+.84,5.8,.15,2.18,8360338);for(let ot of[-2.65,2.65])c(A+ot,1.39,L+1.85,.09,2.78,.09,14212048);for(let ot=0;ot<3;ot++){let ut=(3-ot)*.15;c(A,ut/2,L+.57+ot*.53,5.6,ut,1.15,b)}for(let ot of[-2.69,2.69]){for(let ut=0;ut<3;ut++)c(A+ot,.91-ut*.13,L+.5+ut*.57,.05,.96,.05,13226960);c(A+ot,1.26,L+1.02,.055,.055,1.74,13226960).rotation.x=.24}let $=new an({transparent:!0,depthWrite:!1,map:d(256,ot=>{ot.fillStyle="#d5dfd8",ot.font="600 23px sans-serif",ot.textAlign="center",B.forEach((ut,ee)=>ot.fillText(ut,128,110+ee*28,246))})});l(new On(7,2.4),$,A,3.58,L+.18).castShadow=!1;let Y=d(512,ot=>{ot.fillStyle="#c0cbca",ot.font="54px sans-serif";let ut=["N","e","r","d","O","Y","m","a","J","p","^"],ee=[[41,95],[100,183],[237,158],[54,315],[339,327],[409,425],[410,68],[280,96],[133,410],[399,231],[333,451]];ut.forEach((Kt,Te)=>ot.fillText(Kt,...ee[Te]))}),rt=new an({map:Y,transparent:!0,depthWrite:!1});l(new On(11.5,9.2),rt,A,4.9,L+.019).castShadow=!1}D(-29,-4.96,["NEMEN\u010CIN\u0116S GEDIMINO GIMNAZIJA","Non scholae sed vitae discimus"]),D(22,-2.46,["NEMEN\u010CIN\u0116","GEDIMINO GIMNAZIJA"]);let C=new bn(.13,.28,1,7),U=new qi(1,1,8),z=[];function X(A,L,B){z.push({x:A,z:L}),l(C,6836540,A,B*.39,L).scale.set(B*.115,B*.78,B*.115);for(let Y=0;Y<3;Y++){let rt=l(U,[2706486,3431229,4614725][Y],A,B*(.66+Y*.115),L);rt.scale.set(B*(.22-Y*.04),B*.48,B*(.22-Y*.04)),rt.rotation.y=u()*6}}X(-2,10,12),X(16,12,13),X(-15,16,10),X(31,1,13);for(let A=0;A<165;A++){let L=u()*180-90,B=u()*150-78;(L<-53||L>36||B<-40||B>40)&&!(L>-55&&L<-34)&&X(L,B,6+u()*10)}for(let[A,L]of[[-27,5],[-12,6],[1,3],[18,17],[29,9],[-32,17]])c(A,1.58,L,.085,3.16,.085,5264976),l(new bn(.32,.12,.18,8),4081731,A,3.23,L);for(let[A,L]of[[-13,1],[4,15],[24,3]]){c(A,.47,L,2.15,.1,.52,8410937),c(A,.75,L-.23,2.15,.24,.09,8410937);for(let B of[-.82,.82])c(A+B,.23,L,.095,.46,.43,4475715)}let P={left:24,right:33,z:-.99,width:1.35,height:.45},H=P.right-P.left,Z=c((P.left+P.right)/2,.18,P.z,H,.09,P.width,b);Z.rotation.z=-Math.atan2(P.height,H);for(let A of[-1,1]){let L=P.z+A*P.width/2;c((P.left+P.right)/2,1.16,L,H,.05,.05,13226960).rotation.z=Z.rotation.z;for(let B=0;B<=6;B++)c(P.left+H*B/6,.45+P.height*(1-B/6),L,.045,.92,.045,13226960)}for(let[A,L,B,$]of[[-42,-53,18,3],[30,-26,3,51],[1,-42,52,2.5],[-27,-38,2.5,35]])c(A,-.012,L,B,.07,$,m).castShadow=!1;let W=[{x:8,z:10,r:5.8,h:.86},{x:33,z:17,r:5.6,h:1.15},{x:-22,z:31,r:7.1,h:1.35},{x:41,z:-20,r:8,h:1.65}];function dt(A,L,B){let $=Math.hypot(L-A.x,B-A.z)/A.r;return A.h*Math.max(0,1-$*$)**2}function q(A,L){let B=.03;for(let $ of W)B=Math.max(B,dt($,A,L)+.03);for(let $ of[-29,22]){let Y=$===22?-2.46:-4.96;if(!(Math.abs(A-$)>2.8))for(let rt=0;rt<3;rt++)Math.abs(L-Y-.57-rt*.53)<.575&&(B=Math.max(B,(3-rt)*.15+.03))}return A>=P.left&&A<=P.right&&Math.abs(L-P.z)<P.width/2&&(B=Math.max(B,P.height*(P.right-A)/H+.03)),B}for(let A of W){let L=new On(A.r*2,A.r*2,34,34);L.rotateX(-Math.PI/2);let B=L.attributes.position;for(let Y=0;Y<B.count;Y++)B.setY(Y,dt(A,A.x+B.getX(Y),A.z+B.getZ(Y))-.07);L.computeVertexNormals();let $=_.clone();$.map=_.map.clone(),$.normalMap=_.normalMap.clone(),$.map.repeat.setScalar(4),$.normalMap.repeat.setScalar(4),l(L,$,A.x,.069,A.z).castShadow=!1}let st=new $i(1,0);for(let[A,L]of[[8,10],[15,12],[-23,30],[33,17],[-25,-3],[26,1]])for(let B=0;B<17;B++){let $=A+(u()-.5)*3.7,Y=L+(u()-.5)*1.8,rt=q($,Y),ot=.12+u()*.14;c($,rt+ot/2,Y,.024,ot,.024,4350772).castShadow=!1,l(st,[16311970,15901092,15527140,12426718][B%4],$,rt+ot,Y).scale.set(.069,.049,.069)}for(let[A,L]of[[-25,-.8],[29,1],[-17,4],[34,-16],[-30,-43]])for(let B=0;B<6;B++)l(new $i(.6,1),B%2?4546625:5796936,A+B*.62,.35,L).scale.set(1,.85,1);let at=-24,Ft=-1;c(at,3.7,Ft,.085,7.4,.085,13226184),[15251506,4027985,11552322].forEach((A,L)=>c(at+.56,7.15-L*.25,Ft,1.14,.25,.045,A)),c(18,.28,.15,.72,.56,.72,8750202),l(new bn(.17,.25,1.46,7),7885625,18,1.28,.15),c(18,2.04,.15,.27,.39,.26,9266760);let Mt=new Qe;s.add(Mt);let j=3426650,Rt=3424330,Nt=11961193,qt=new Ii(1,16,12);function xt(A,L,B,$,Y,rt,ot,ut){let ee=l(qt,L,B,$,Y,A);return ee.scale.set(rt,ot,ut),ee}let Gt=new Qe;Mt.add(Gt),xt(Gt,j,0,1.22,0,.27,.38,.16),xt(Gt,2436653,0,1.22,-.145,.21,.28,.105),c(0,1.17,-.236,.29,.12,.018,5202260,Gt),xt(Gt,Nt,0,1.61,0,.078,.1,.075),xt(Gt,Nt,0,1.77,.016,.128,.166,.119),xt(Gt,2630688,0,1.865,-.018,.133,.111,.113);let Me=new Image;Me.onload=()=>{let A=d(128,B=>{B.beginPath(),B.ellipse(64,66,61,63,0,0,Math.PI*2),B.clip(),B.drawImage(Me,176,155,72,94,0,0,128,128)}),L=l(new On(.218,.295),new jn({map:A,transparent:!0,alphaTest:.5}),0,1.774,.132,Gt);L.castShadow=!1},Me.src=xg;let Jt=[];for(let A of[-1,1]){let L=new Qe,B=new Qe;L.position.set(A*.126,.9,0),B.position.set(A*.271,1.45,0),Mt.add(L),Gt.add(B),xt(L,Rt,0,-.29,0,.104,.37,.103),xt(L,2698541,0,-.825,.052,.103,.072,.179),xt(L,Rt,0,-.64,0,.084,.18,.083),xt(B,j,A*.021,-.2,0,.081,.254,.079),xt(B,Nt,A*.024,-.445,.023,.058,.083,.059),Jt.push({leg:L,arm:B,side:A})}let ie=!1,ae=0,nt=.35,St=0,_t=!1,Dt=0,At=0,$t=new Set,zt=new Map,ce=new I,fe=new I,me=new Qn,F=new Oe,Ae=new I,oe=new I,_e=new I,yt=e.domElement,Xt=le("radar").getContext("2d"),Vt=pf(fu,s,c,p,d),Yt={x:22,z:.65},R=l(new Qi(.65,.73,32),new an({color:13168e3,side:wn}),22,.065,2.05);R.rotation.x=-Math.PI/2,R.castShadow=!1;let S=A=>A>200,k=(A,L,B)=>A.some($=>Math.abs(L-$.x)<$.w/2+.38&&Math.abs(B-$.z)<$.d/2+.38),ht=(A,L)=>S(A)?k(Vt.walls,A,L):Math.abs(A)>63||Math.abs(L)>58||E.some(B=>Math.abs(A-B.x)<B.w/2+.38&&Math.abs(L-B.z)<B.d/2+.38)||z.some(B=>(A-B.x)**2+(L-B.z)**2<.58**2),it=mf(fu,s,c,xt,q,ht),bt={name:"Fists",damage:18,range:2,aim:.42,cooldown:.48},mt=null,K=0,tt=0,vt=new Qe;vt.position.set(.025,-.43,.1),Jt[1].arm.add(vt);function N(A,L){A==="dagger"?(c(0,.064,0,.055,.128,.053,6705464,L),c(0,.13,0,.14,.032,.055,13805391,L),c(0,.235,0,.075,.19,.024,14016988,L),c(0,.331,0,.043,.047,.022,14016988,L).rotation.z=Math.PI/4):(c(0,.08,0,.075,.16,.09,3822176,L),c(0,.17,.065,.105,.085,.23,5406613,L),c(0,.17,.185,.112,.087,.028,15438666,L))}function et(A){mt=mt===A?null:A,vt.clear(),mt&&N(mt,vt),T()}function Q(){if(K>0)return;let A=mt?Je[mt].weapon:bt;K=A.cooldown,tt=.26,cn(A.name+" \xB7 "+it.attack(Mt.position,ae,A))}let gt=ff(),ft=0,pt=null,Bt=!1,Qt=100,ct=100,Ht=!1,te=0,Tt=!1,de=0,De="",En=0,_i=[],He={dizzy:0,gas:0,bladder:0},Js=0,xi=0,ii=0,We=new Ee(new Ii(.21,12,8),new an({color:11519349,transparent:!0,depthWrite:!1}));We.visible=!1,s.add(We);function rs(A=ft){let L=gt.slots[A];if(L&&Je[L.id].weapon){et(L.id);return}let B=gt.take(A);if(!B){cn("Selected slot is empty");return}for(let $ of Je[B].effects)$.type==="stamina"?(ct=Math.min(100,ct+$.amount),ct>=22&&(Ht=!1)):He[$.type]=$.seconds;B==="juice"&&(xi=4),cn({juice:"Juice finished \xB7 Find a restroom when the urge hits",bun:"Sausage bun eaten \xB7 +40 stamina",beer:"Beer finished \xB7 Feeling dizzy"}[B]),pt=null,T(),G()}function Ol(A,L){for(let $ of Object.keys(He))He[$]=Math.max(0,He[$]-A);Js=Math.max(0,Js-A),He.gas&&L&&!Js&&(Js=2.2,ii=.65,We.position.copy(Mt.position),We.position.y+=.89,We.position.x-=Math.sin(Mt.rotation.y)*.4,We.position.z-=Math.cos(Mt.rotation.y)*.4,cn("Prrrt!")),ii=Math.max(0,ii-A),We.visible=ii>0,We.material.opacity=ii*.65,We.scale.setScalar(1+(.65-ii)*1.3),He.bladder&&(xi-=A,xi<=0&&(cn("Rom needs to pee \xB7 Find the WC"),xi=8));let B=[He.dizzy&&"Dizzy",He.gas&&"Gassy",He.bladder&&(xi>8?"Restroom relief":"Needs the WC")].filter(Boolean).join(" \xB7 ");le("effects").textContent!==B&&(le("effects").textContent=B),le("effects").hidden=!B}function ua(){let{x:A,z:L}=Mt.position,B=$=>Math.hypot(A-$.x,L-$.z)<2.35;return!S(A)&&B(Yt)?{label:"Enter school",run:()=>as(!0)}:S(A)&&B(Vt.exit)?{label:"Exit to courtyard",run:()=>as(!1)}:He.bladder&&S(A)&&B(Vt.restroom)?{label:"Use restroom",run:()=>{xi=9,cn("Much better. The juice will catch up again soon.")}}:null}function as(A){Mt.position.set(A?Vt.origin:Yt.x,.03,A?9:3.2),ae=A?0:Math.PI,nt=.22,Mt.rotation.y=A?Math.PI:0,de=0,Tt=!1,cn(A?"Inside Gedimino gimnazija":"School courtyard")}function da(){let A=ua();A?A.run():Bl()}let Fl=new bn(.077,.078,.24,12),os=new bn(.035,.055,.14,12);function Hn(A,L,B,$=q(L,B),Y=null){let rt=new Qe;s.add(rt),rt.position.set(L,$,B),Je[A].weapon?N(A,rt):A==="juice"?(c(0,.135,0,.18,.27,.13,15768886,rt),c(0,.15,.067,.11,.12,.012,16314559,rt),c(.04,.197,.079,.017,.15,.015,15067611,rt).rotation.z=.11):A==="bun"?(xt(rt,13867603,0,.071,0,.097,.07,.22),xt(rt,11226678,0,.113,0,.055,.046,.212),c(0,.156,0,.022,.011,.32,15576626,rt)):(l(Fl,5518626,0,.12,0,rt),l(os,5518626,0,.29,0,rt),l(new bn(.079,.079,.105,12),14070645,0,.136,0,rt),l(new bn(.039,.039,.031,12),11054225,0,.37,0,rt));let ot=l(new Qi(.25,.29,20),new an({color:15070365,side:wn}),L,q(L,B)+.022,B);ot.rotation.x=-Math.PI/2,ot.castShadow=!1,ot.visible=!Y,_i.push({id:A,model:rt,marker:ot,velocity:Y,delay:Y?.y?.6:0})}Hn("dagger",-4,23),Hn("blaster",3,24),Hn("juice",-9,19),Hn("bun",-6,16.6),Hn("beer",-12,15),Hn("juice",8,10),Hn("bun",-27,1),Hn("beer",35,14);function fa(){let A=null,L=2.25;for(let B of _i){if(B.delay>0||B.velocity)continue;let $=B.model.position.distanceTo(Mt.position);$<L&&(L=$,A=B)}return A}function Bl(){let A=fa();if(A){if(!gt.add(A.id)){cn("Inventory full");return}cn("Picked up "+Je[A.id].name),s.remove(A.model,A.marker),A.marker.material.dispose(),A.marker.geometry.dispose(),_i.splice(_i.indexOf(A),1),T()}}function cn(A){De=A,En=1.3}function pa(A=ft){let L=gt.take(A);if(!L){cn("Selected slot is empty");return}let B=Mt.position,$=new I(-Math.sin(ae),0,-Math.cos(ae)),Y=B.x+$.x*.7,rt=B.z+$.z*.7;$.multiplyScalar(8.5),$.y=3.2;let ot=ht(Y,rt);Hn(L,ot?B.x:Y,ot?B.z:rt,B.y+1.28,$),pt=null,T()}function pu(A){for(let L of _i){L.delay=Math.max(0,L.delay-A);let{model:B,marker:$,velocity:Y}=L;if(!Y)continue;let rt=B.position;Y.y-=14*A,ht(rt.x+Y.x*A,rt.z)&&(Y.x*=-.35),ht(rt.x,rt.z+Y.z*A)&&(Y.z*=-.35),rt.addScaledVector(Y,A),B.rotation.x+=A*7,B.rotation.z+=A*2;let ot=q(rt.x,rt.z);rt.y>ot||(rt.y=ot,Y.y<-2.6?(Y.y*=-.31,Y.x*=.65,Y.z*=.65):(L.velocity=null,B.rotation.set(0,B.rotation.y,0),$.position.set(rt.x,ot+.022,rt.z),$.visible=!0))}}let ma=[[le("hotbar"),0,9],[le("backpack"),9,36],[le("packHotbar"),0,9]];for(let[A,L,B]of ma)for(let $=L;$<B;$++){let Y=document.createElement("button");Y.className="slot",Y.onclick=()=>{A===le("hotbar")?ft=$:pt===null?gt.slots[$]&&(pt=$):(gt.move(pt,$),pt=null),T()},A.append(Y)}function T(){mt&&!gt.slots.some(L=>L?.id===mt)&&(mt=null,vt.clear()),le("equipped").textContent=mt?Je[mt].name:"Fists";for(let[L,B,$]of ma)for(let Y=B;Y<$;Y++){let rt=L.children[Y-B],ot=gt.slots[Y],ut=ot?Je[ot.id].name+" \xD7 "+ot.count:"Empty";if(rt.setAttribute("aria-label","Slot "+(Y+1)+": "+ut),rt.title=ot&&Je[ot.id].description?ut+" \xB7 "+Je[ot.id].description:ut,rt.classList.toggle("selected",L===le("hotbar")?Y===ft:Y===pt),rt.textContent=ot?Je[ot.id].icon:"",Y<9){let ee=document.createElement("small");ee.textContent=Y+1,rt.append(ee)}if(ot){let ee=document.createElement("b");ee.textContent=ot.count,rt.append(ee)}}let A=gt.slots[pt??ft];le("itemDetails").textContent=pt!==null&&A?Je[A.id].name+" \xD7 "+A.count+" \xB7 Choose a destination slot.":"Select an item, then click a slot to move or stack it.",le("packThrow").disabled=!A,le("packUse").disabled=!A,le("packUse").textContent=A&&Je[A.id].weapon?A.id===mt?"Unequip":"Equip":A?.id==="bun"?"Eat one":"Drink one",A&&Je[A.id].description&&(le("itemDetails").textContent=Je[A.id].description)}function O(A){Bt=A,pt=null,$t.clear(),zt.clear(),_t=!1,le("inventory").hidden=!A,A&&document.pointerLockElement===yt&&document.exitPointerLock(),T(),A?le("closePack").focus():le("packButton").blur()}le("packButton").onclick=()=>O(!0),le("closePack").onclick=()=>O(!1),le("packThrow").onclick=()=>pa(pt??ft),le("jumpButton").onclick=()=>J(),le("pickButton").onclick=da,le("useButton").onclick=()=>rs(),le("attackButton").onclick=Q,le("packUse").onclick=()=>rs(pt??ft),le("throwButton").onclick=()=>pa(),T();function J(){Tt||ct<9||(Tt=!0,de=6.4,ct-=9,te=.45)}function G(){le("health").value=Qt,le("stamina").value=ct,le("hpValue").textContent=Math.ceil(Qt),le("spValue").textContent=Math.ceil(ct)}function V(){Mt.position.set(-9,.03,22),Mt.rotation.y=Math.PI,ae=0,nt=.35,St=0,Tt=!1,de=0,Qt=100,ct=100,te=0,Ht=!1;for(let A of Object.keys(He))He[A]=0;ii=0,We.visible=!1,G()}V();function wt(){t.aspect=innerWidth/innerHeight,t.fov=oa.clamp(68-t.aspect*8,59,75),t.updateProjectionMatrix(),e.setSize(innerWidth,innerHeight)}window.addEventListener("resize",wt),wt();function Ut(A){ie=A,$t.clear(),zt.clear(),_t=!1,!A&&Bt&&O(!1),le("menu").hidden=A,le("hud").hidden=!A,le("start").textContent="Resume game \u2197",A||(document.pointerLockElement&&document.exitPointerLock(),le("start").focus())}le("start").onclick=()=>Ut(!0),le("menuButton").onclick=()=>Ut(!1);let Et=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","KeyR"];window.addEventListener("keydown",A=>{if(ie){if(A.code==="Escape"){Bt?O(!1):Ut(!1);return}if(A.code==="KeyI"){A.preventDefault(),A.repeat||O(!Bt);return}if(!Bt){if(/^Digit[1-9]$/.test(A.code)){ft=Number(A.code.at(-1))-1,T();return}if(["Space","KeyE","KeyQ","KeyF","KeyX"].includes(A.code)){A.preventDefault(),A.repeat||(A.code==="Space"?J():A.code==="KeyE"?da():A.code==="KeyF"?rs():A.code==="KeyX"?Q():pa());return}Et.includes(A.code)&&(A.preventDefault(),$t.add(A.code),A.code==="KeyR"&&V())}}}),window.addEventListener("keyup",A=>$t.delete(A.code)),window.addEventListener("blur",()=>{$t.clear(),zt.clear(),_t=!1}),yt.addEventListener("pointerdown",A=>{!ie||Bt||(_t=!0,Dt=A.clientX,At=A.clientY,yt.setPointerCapture(A.pointerId),A.pointerType==="mouse"&&yt.requestPointerLock?.()?.catch(()=>{}))}),yt.addEventListener("lostpointercapture",()=>_t=!1),yt.addEventListener("pointerup",()=>_t=!1),document.addEventListener("pointerlockchange",()=>{ie&&!Bt&&document.pointerLockElement!==yt&&Ut(!1)}),document.addEventListener("pointermove",A=>{if(!ie||Bt)return;let L=document.pointerLockElement===yt;!L&&!_t||(ae-=(L?A.movementX:A.clientX-Dt)*.004,nt=oa.clamp(nt+(L?A.movementY:A.clientY-At)*.003,.07,.94),Dt=A.clientX,At=A.clientY)});for(let A of le("touch").querySelectorAll("button"))A.addEventListener("pointerdown",L=>{A.setPointerCapture(L.pointerId),zt.set(L.pointerId,A.dataset.key)}),A.addEventListener("lostpointercapture",L=>zt.delete(L.pointerId));let It=(...A)=>A.some(L=>$t.has(L)||[...zt.values()].includes(L));function kt(){let{x:A,z:L}=Mt.position;if(S(A)){Xt.fillStyle="#293830",Xt.fillRect(0,0,158,128),Xt.fillStyle="#9b876c",Xt.fillRect(23,8,112,112),Xt.fillStyle="#463f33";for(let Y of Vt.walls)Xt.fillRect(79+(Y.x-Vt.origin-Y.w/2)*4,64+(Y.z-Y.d/2)*4,Math.max(1,Y.w*4),Math.max(1,Y.d*4));Xt.fillStyle="#d6fa87",Xt.beginPath(),Xt.arc(79+(A-Vt.origin)*4,64+L*4,3,0,Math.PI*2),Xt.fill(),le("zone").textContent=A<Vt.origin-5?"Classroom":A>Vt.origin+5?L>5.5?"Restroom":"Assembly hall":"School corridor";return}let B=Y=>79+Y*1.15,$=Y=>63+Y*.98;Xt.fillStyle="#273e30",Xt.fillRect(0,0,158,128),Xt.fillStyle="#526455",Xt.fillRect(B(-35),$(-13),65,33),Xt.fillStyle="#78847b",Xt.fillRect(B(-52),0,19,128),Xt.fillStyle="#91a887";for(let Y of z)Xt.fillRect(B(Y.x),$(Y.z),1.6,1.6);Xt.fillStyle="#cda291";for(let Y of E)Xt.fillRect(B(Y.x-Y.w/2),$(Y.z-Y.d/2),Y.w*1.15,Y.d*.98);Xt.fillStyle="#d6fa87",Xt.fillRect(B(Yt.x)-2,$(Yt.z)-2,4,4),Xt.fillStyle="#f0d574";for(let{model:Y,velocity:rt}of _i)rt||Xt.fillRect(B(Y.position.x)-1,$(Y.position.z)-1,2,2);Xt.save(),Xt.translate(B(A),$(L)),Xt.rotate(-Mt.rotation.y),Xt.fillStyle="#d6fa87",Xt.beginPath(),Xt.moveTo(0,7),Xt.lineTo(-4,-4),Xt.lineTo(4,-4),Xt.fill(),Xt.restore(),le("zone").textContent=A<-33?"School approach":L<-25||A>30||L>33?"Pine perimeter":"School courtyard"}let se=performance.now();e.setAnimationLoop(A=>{let L=Math.min((A-se)/1e3,.045);if(se=A,ie&&!Bt){let B=Number(It("KeyW","ArrowUp"))-Number(It("KeyS","ArrowDown")),$=Number(It("KeyD","ArrowRight"))-Number(It("KeyA","ArrowLeft")),Y=(B||$)&&!Ht&&!Tt&&It("ShiftLeft","ShiftRight");oe.set($,0,-B).normalize().applyAxisAngle(ge.DEFAULT_UP,ae);let{x:rt,z:ot}=Mt.position,ut=(Y?7.6:4.05)*L;ht(rt+oe.x*ut,ot)||(Mt.position.x+=oe.x*ut),ht(Mt.position.x,ot+oe.z*ut)||(Mt.position.z+=oe.z*ut);let ee=Mt.position.x!==rt||Mt.position.z!==ot,Kt=q(Mt.position.x,Mt.position.z);if(!Tt&&Mt.position.y-Kt>.22&&(Tt=!0,de=0),Tt?(de-=16*L,Mt.position.y+=de*L,Mt.position.y<=Kt&&de<=0&&(Qt=Math.max(0,Qt-Math.max(0,-de-8)*8),Tt=!1,de=0,Mt.position.y=Kt,Qt===0&&(V(),cn("Back at the courtyard")))):Mt.position.y=Kt,Y&&ee?(ct=Math.max(0,ct-21*L),te=.7,ct===0&&(Ht=!0)):(te=Math.max(0,te-L),te||(ct=Math.min(100,ct+16*L)),ct>=22&&(Ht=!1)),K=Math.max(0,K-L),tt=Math.max(0,tt-L),it.update(L,Mt,Zt=>{Qt=Math.max(0,Qt-Zt),Qt?cn("Practice bot hit \xB7 \u2212"+Zt+" health"):(V(),cn("Back at the courtyard"))}),Ol(L,Y&&ee),G(),ee){let Zt=Math.atan2(oe.x,oe.z);Mt.rotation.y+=Math.atan2(Math.sin(Zt-Mt.rotation.y),Math.cos(Zt-Mt.rotation.y))*(1-Math.exp(-L*16)),St+=L*(Y?13:9)}for(let{leg:Zt,arm:Ge,side:xn}of Jt)Zt.rotation.x=oa.lerp(Zt.rotation.x,Tt?xn*.32:ee?Math.sin(St)*xn*(Y?.9:.58):0,.24),Ge.rotation.x=-Zt.rotation.x*.76;tt&&(Jt[1].arm.rotation.x=-Math.sin(tt/.26*Math.PI)*1.8),Gt.position.y=ee?Math.abs(Math.sin(St))*.045:0,ce.copy(Mt.position).add(_e.set(0,1.4,0)),_e.set(0,Math.sin(nt),Math.cos(nt)).applyAxisAngle(ge.DEFAULT_UP,ae).normalize(),me.set(ce,_e);let Te=S(Mt.position.x),Se=Te?3.4:t.aspect<.65?7.2:5.9;for(let Zt of Te?Vt.walls:E)F.min.set(Zt.x-Zt.w/2-.26,0,Zt.z-Zt.d/2-.26),F.max.set(Zt.x+Zt.w/2+.26,11,Zt.z+Zt.d/2+.26),me.intersectBox(F,Ae)&&(Se=Math.min(Se,Math.max(.65,ce.distanceTo(Ae)-.12)));t.position.copy(fe.copy(ce).addScaledVector(_e,Se)),Te&&(t.position.y=Math.min(t.position.y,3.35)),t.lookAt(ce),He.dizzy&&t.rotateZ(Math.sin(A*.005)*.095*Math.min(1,He.dizzy/3)),pu(L),En=Math.max(0,En-L);let hn=fa(),un=ua(),Wn=En?De:un?"E \xB7 "+un.label:hn?"E \xB7 Pick up "+Je[hn.id].name:"";le("prompt").hidden=!Wn,le("prompt").textContent!==Wn&&(le("prompt").textContent=Wn),kt()}else ie||(t.position.set(-31+Math.sin(A*16e-5)*3,7.2,36),t.lookAt(0,4,-13));e.render(s,t)})}})();
