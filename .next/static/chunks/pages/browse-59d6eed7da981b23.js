(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[518],{8717:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/browse",function(){return n(2399)}])},1029:function(e,t){"use strict";t.Z={src:"/_next/static/media/blank-thumbnail.4c77c2c0.jpg",height:415,width:622,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAoIP/xAAZEAACAwEAAAAAAAAAAAAAAAABEgARE1L/2gAIAQEAAT8AcZKgvqf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:5}},3025:function(e,t,n){"use strict";n.d(t,{G:function(){return f},P:function(){return y}});var i=n(5893),r=n(7294),a=n(5675),l=n.n(a),s=n(7747),o=n(1293),d=n(4880),A=n(5541),u=n(9778),c=n(5239),p=n(4859),h=n(6205),m=n(4346),x=n(917),g=n(1029);let f=e=>{let{name:t,species:n,family:a,nativity:x,type:f,thumbnail:y}=e,[j,I]=(0,r.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.xu,{w:"100%",textAlign:"center",children:[(0,i.jsx)(s.xu,{cursor:"pointer",onClick:()=>I(!0),children:(0,i.jsx)(l(),{loader:e=>{let{src:t}=e;return t||g.Z},src:y,alt:t,width:"400",height:"225",className:"grid-item-thumbnail",loading:"lazy",style:{objectFit:"cover"}})}),(0,i.jsx)(o.x,{mt:2,fontWeight:"bold",children:t}),(0,i.jsxs)(o.x,{fontSize:14,children:[a," | ",n]}),(0,i.jsx)(d.C,{colorScheme:"native"===x?"green":"non-native"===x?"red":"purple",mr:2,children:x}),(0,i.jsx)(d.C,{colorScheme:"bird"===f?"blue":"pink",children:f})]}),(0,i.jsxs)(A.u_,{isOpen:j,onClose:()=>I(!1),size:"xl",children:[(0,i.jsx)(u.Z,{}),(0,i.jsxs)(c.h,{children:[(0,i.jsx)(p.x,{children:(0,i.jsx)(o.x,{mt:2,fontWeight:"bold",children:t})}),(0,i.jsx)(h.o,{}),(0,i.jsx)(m.f,{children:(0,i.jsx)(l(),{loader:e=>{let{src:t}=e;return t||g.Z},src:y,alt:t,width:"800",height:"450",loading:"lazy",style:{objectFit:"cover"}})})]})]})]})},y=()=>(0,i.jsx)(x.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n        width: 100%;\n        height: auto;\n        object-fit: cover;\n      }\n    "})},6741:function(e,t,n){"use strict";var i=n(5893),r=n(7340),a=n(9008),l=n.n(a),s=n(3025);let o={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};t.Z=e=>{let{children:t,title:n}=e,a="".concat(n," - Wayne Quah");return(0,i.jsx)(r.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:o,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,i.jsxs)(i.Fragment,{children:[n&&(0,i.jsx)(l(),{children:(0,i.jsx)("title",{children:a})}),t,(0,i.jsx)(s.P,{})]})})}},2399:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return X},default:function(){return J}});var i=n(5893),r=n(2338),a=n(2757),l=n(5227),s=n(2495),o=n(6554),d=n(7030),A=n(3179),u=n(9653),c=n(5432),p=n(7052),h=n(7294),[m,x]=(0,l.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),g=(0,o.G)(function(e,t){let n=(0,d.jC)("Input",e),{children:r,className:a,...l}=(0,A.Lr)(e),o=(0,c.cx)("chakra-input__group",a),x={},g=(0,s.W)(r),f=n.field;g.forEach(e=>{var t,i;n&&(f&&"InputLeftElement"===e.type.id&&(x.paddingStart=null!=(t=f.height)?t:f.h),f&&"InputRightElement"===e.type.id&&(x.paddingEnd=null!=(i=f.height)?i:f.h),"InputRightAddon"===e.type.id&&(x.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(x.borderStartRadius=0))});let y=g.map(t=>{var n,i;let r=(0,p.o)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(i=t.props)?void 0:i.variant)||e.variant});return"Input"!==t.type.id?(0,h.cloneElement)(t,r):(0,h.cloneElement)(t,Object.assign(r,x,t.props))});return(0,i.jsx)(u.m.div,{className:o,ref:t,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate",...n.group},"data-group":!0,...l,children:(0,i.jsx)(m,{value:n,children:y})})});g.displayName="InputGroup";var f=(0,u.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),y=(0,o.G)(function(e,t){var n,r;let{placement:a="left",...l}=e,s=x(),o=s.field,d={["left"===a?"insetStart":"insetEnd"]:"0",width:null!=(n=null==o?void 0:o.height)?n:null==o?void 0:o.h,height:null!=(r=null==o?void 0:o.height)?r:null==o?void 0:o.h,fontSize:null==o?void 0:o.fontSize,...s.element};return(0,i.jsx)(f,{ref:t,__css:d,...l})});y.id="InputElement",y.displayName="InputElement";var j=(0,o.G)(function(e,t){let{className:n,...r}=e,a=(0,c.cx)("chakra-input__left-element",n);return(0,i.jsx)(y,{ref:t,placement:"left",className:a,...r})});j.id="InputLeftElement",j.displayName="InputLeftElement";var I=(0,o.G)(function(e,t){let{className:n,...r}=e,a=(0,c.cx)("chakra-input__right-element",n);return(0,i.jsx)(y,{ref:t,placement:"right",className:a,...r})});I.id="InputRightElement",I.displayName="InputRightElement";var E=n(1025),v={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},b=(0,u.m)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),w=(0,o.G)(function(e,t){var n;let{placement:r="left",...a}=e,l=null!=(n=v[r])?n:{},s=x();return(0,i.jsx)(b,{ref:t,...a,__css:{...s.addon,...l}})});w.displayName="InputAddon";var C=(0,o.G)(function(e,t){return(0,i.jsx)(w,{ref:t,placement:"left",...e,className:(0,c.cx)("chakra-input__left-addon",e.className)})});C.displayName="InputLeftAddon",C.id="InputLeftAddon";var _=(0,o.G)(function(e,t){return(0,i.jsx)(w,{ref:t,placement:"right",...e,className:(0,c.cx)("chakra-input__right-addon",e.className)})});_.displayName="InputRightAddon",_.id="InputRightAddon";var S=n(4225),G=(0,o.G)(function(e,t){let{templateAreas:n,gap:r,rowGap:a,columnGap:l,column:s,row:o,autoFlow:d,autoRows:A,templateRows:c,autoColumns:p,templateColumns:h,...m}=e;return(0,i.jsx)(u.m.div,{ref:t,__css:{display:"grid",gridTemplateAreas:n,gridGap:r,gridRowGap:a,gridColumnGap:l,gridAutoColumns:p,gridColumn:s,gridRow:o,gridAutoFlow:d,gridAutoRows:A,gridTemplateRows:c,gridTemplateColumns:h},...m})});G.displayName="Grid";var N=n(8940),Q=n(7634),R=n(3951),z=(0,o.G)(function(e,t){let{columns:n,spacingX:r,spacingY:a,spacing:l,minChildWidth:s,...o}=e,d=(0,N.F)(),A=s?(0,R.XQ)(s,e=>{let t=(0,Q.LP)("sizes",e,"number"==typeof e?`${e}px`:e)(d);return null===e?null:`repeat(auto-fit, minmax(${t}, 1fr))`}):(0,R.XQ)(n,e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`);return(0,i.jsx)(G,{ref:t,gap:l,columnGap:r,rowGap:a,templateColumns:A,...o})});z.displayName="SimpleGrid";var k=n(6741),Z=n(7340),B=n(9777);let M=(0,u.m)(Z.E.div,{shouldForwardProp:e=>(0,B.x)(e)||"transition"===e});var F=e=>{let{children:t,delay:n=0}=e;return(0,i.jsx)(M,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,delay:n},mb:6,children:t})},L=n(1029),D=(0,n(4027).I)({d:"M23.414,20.591l-4.645-4.645a10.256,10.256,0,1,0-2.828,2.829l4.645,4.644a2.025,2.025,0,0,0,2.828,0A2,2,0,0,0,23.414,20.591ZM10.25,3.005A7.25,7.25,0,1,1,3,10.255,7.258,7.258,0,0,1,10.25,3.005Z",displayName:"Search2Icon"}),O=n(3025),P=n(6387),X=!0,J=()=>{let[e,t]=(0,h.useState)([]),[n,l]=(0,h.useState)("");(0,h.useEffect)(()=>{o()},[]);let s=async e=>{let{data:i,error:r}=await P.O.from("animals").select().like("name","%".concat(e,"%"));r?console.error("Error fetching data:",r):""==n?o():t(i)},o=async()=>{let{data:e,error:n}=await P.O.from("animals").select("*");n?console.error("Error fetching data:",n):t(e)};return(0,i.jsx)(k.Z,{title:"Browse",children:(0,i.jsxs)(r.W,{maxW:"full",children:[(0,i.jsx)(a.X,{as:"h2",fontSize:24,mb:4,children:"Browse all Discoveries"}),(0,i.jsxs)(g,{borderRadius:5,size:"sm",maxW:500,mb:8,children:[(0,i.jsx)(j,{pointerEvents:"none",children:(0,i.jsx)(D,{color:"gray.600"})}),(0,i.jsx)(E.I,{type:"text",placeholder:"Search...",border:"1px solid #949494",onChange:e=>{let t=e.target.value;l(t),s(t)},onKeyDown:e=>{"Enter"===e.key&&s(n)}}),(0,i.jsx)(_,{p:0,border:"none",children:(0,i.jsx)(S.z,{size:"sm",borderLeftRadius:0,borderRightRadius:3.3,border:"1px solid #949494",onClick:()=>{s(n)},children:"Search"})})]}),(0,i.jsx)(z,{columns:6,gap:6,children:e.map(e=>(0,i.jsx)(F,{children:(0,i.jsx)(O.G,{thumbnail:e.imageUrl?e.imageUrl:L.Z,name:e.name,species:e.species,family:e.family,nativity:e.nativity,type:e.type},e.name)}))})]})})}},6387:function(e,t,n){"use strict";n.d(t,{O:function(){return i}});let i=(0,n(6490).eI)("https://rrfvmcjejgxfwraysyzb.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyZnZtY2plamd4ZndyYXlzeXpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYzMzIxMDcsImV4cCI6MjA0MTkwODEwN30.IXcQCREcn6JATcg768JIQABiHx3XgOg4IBRCt_A9_2A")}},function(e){e.O(0,[758,695,888,774,179],function(){return e(e.s=8717)}),_N_E=e.O()}]);