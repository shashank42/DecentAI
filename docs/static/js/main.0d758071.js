/*! For license information please see main.0d758071.js.LICENSE.txt */
width: 100%;

background: #5008FF;
border-radius: 16px;
margin-top: 20px;

display: flex;
flexDirection row

padding-top: 30px;
padding-bottom: 30px;
`,Xk=(Uf.img`
width: 273px;
height: 195px;
left: 0px;
top: 0px;

`,Uf.p`
margin-left: 24px;
margin-right: 24px;
margin-top: 24px;
margin-bottom: -5px;

font-family: 'Satoshi';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 100%;
/* identical to box height, or 32px */

letter-spacing: -0.04em;
background: linear-gradient(93.84deg, #FFFFFF -16.51%, rgba(255, 255, 255, 0.86) 48.85%, #FFFFFF 110.24%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
`),tE=Uf.p`
margin-left: 24px;
margin-right: 24px;
margin-top: 10px;

font-family: 'Satoshi';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 100%;
/* identical to box height, or 18px */

letter-spacing: -0.04em;

background: linear-gradient(93.84deg, #FFFFFF -16.51%, rgba(255, 255, 255, 0.86) 48.85%, #FFFFFF 110.24%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;

opacity: 0.6;
`,eE=(Uf.img`
width: 32px;
height: 32px;
left: 20px;
margin-top: 40px;
margin-left: 20px;

background: #FFFFFF;
border-radius: 103.571px;
`,Uf.span`
height: 18px;
left: 341px;
margin-top: 10px;
margin-left: 24px;

font-family: 'Satoshi';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 100%;

/* identical to box height, or 18px */
letter-spacing: -0.04em;

background: linear-gradient(93.84deg, #FFFFFF -16.51%, rgba(255, 255, 255, 0.86) 48.85%, #FFFFFF 110.24%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
`),rE=Uf.button`
width: 151px;
height: 45px;
paddingLeft: 12px;
background-color: white;
background: #FFFFFF;
border-radius: 100px;
font-family: 'Satoshi';
margin-right: 16px;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 100%;
color: #000000;
margin-top: 20px;
margin-left: 400px;

`;class nE extends t.Component{constructor(t){super(),this.onStartClick=async()=>{console.log("clicked"),this.setState({isTxConfirming:!0});try{let t=await async function(t,e,r){let n=await Kk(),i=window.gaslessWallet.getGaslessWallet();if(await i.init(),n.allowance(e)<r){console.log("not enough allowance.");let t=await n.populateTransaction.approve(e,Fk.PS);await i.sponsorTransaction(t.to,t.data)}else console.log("enough allowance.");let o=await Zk(),a=await o.populateTransaction.requestInference(t,e,r);await i.sponsorTransaction(a.to,a.data);let s=await o.requestId(),u=parseInt(s)+1;return console.log("inference request success: new Id"+u),u}(this.text,this.node.address,0);this.setState({isTxConfirming:!1}),this.routeToPage("result",t)}catch(t){console.log(t),this.setState({isTxConfirming:!1})}},this.node=t.node1,this.text=t.text,this.routeToPage=t.routeToPage,this.state={isTxConfirming:!1}}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(Qk,{children:[(0,o.jsxs)("div",{style:{dislay:"flex",flexDirection:"column"},children:[(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"row",textAlign:"left",justifyContent:"space-between",flexGrow:1},children:[(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,o.jsx)(Xk,{children:0==this.node.cost?"Free":$k.parseEther(this.node.cost)}),(0,o.jsxs)(tE,{children:[this.node.address.substring(36,42),(0,o.jsx)("br",{})]}),(0,o.jsxs)(eE,{children:[this.node.countInferences," previous outputs"]})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,o.jsx)(rE,{onClick:this.onStartClick,children:"Confirm"}),(0,o.jsxs)("span",{className:"attendee-lens-text",style:{fontSize:"16px",marginRight:"40px"},children:[(0,o.jsx)(Jk,{children:this.node.averageRating}),"  score"]})]})]}),(0,o.jsx)("div",{style:{display:"flex",flexDirection:"row",marginTop:"25px",marginLeft:"px"},children:this.node.responses.slice(0,4).map(((t,e)=>(0,o.jsx)("img",{width:100,height:100,src:t.url,style:{objectFit:"cover",margin:"16px"}},e)))}),this.state.isTxConfirming&&(0,o.jsx)("div",{className:"inline-loader"})]}),(0,o.jsx)("div",{})]})})}}const iE=Uf.p`

font-family: 'Satoshi';
font-style: normal;
font-weight: 500;
font-size: 30px;
line-height: 100%;
/* identical to box height, or 96px */

text-align: center;
letter-spacing: -0.04em;
margin-top: 16px;
`;class oE extends t.Component{constructor(t){super(),this.getNodes=async()=>{const t=await(async()=>await Gk())();console.log(t),console.log("TOTAL NODES: "+t.length);let e=[];for(let r=0;r<t.length;++r)e.push('"'+t[r].lockAddress+'"');this.setState({nodes:t,loading:!1})},this.routeToPage=t.routeToPage,this.text=t.text,this.state={nodes:[],attendeeCount:{},loading:!0}}componentDidMount(){this.getNodes()}render(){return(0,o.jsxs)("div",{style:{paddingLeft:"200px",paddingRight:"200px",display:"flex",flexDirection:"column"},children:[!this.state.loading&&(0,o.jsx)(iE,{children:"Select a node"}),this.state.loading&&(0,o.jsx)("div",{className:"loader"}),(0,o.jsx)("div",{id:"node-list-bg",children:this.state.nodes.map(((t,e)=>(0,o.jsx)(nE,{node1:t,text:this.text,routeToPage:this.routeToPage},e)))})]})}}const aE=Uf.p`

font-family: 'Satoshi';
font-style: normal;
font-weight: 500;
font-size: 30px;
/* identical to box height, or 96px */

text-align: center;
letter-spacing: -0.04em;

margin-bottom: 150px;
`;class sE extends t.Component{constructor(t){super(),this.addListener=async()=>{!async function(t,e){console.log("listening for event "+t),new Cr.Contract(Vk,Uk,await Hk(Wk)).on("ResponseRecieved",((r,n,i)=>{console.log("Response is here: "+r,n,i),console.log("original requestId: "+t),r==t&&(console.log("requestid matches"),e(i))}))}(this.requestId,(async t=>{console.log("all done, updating state");let e="https://punksvsapes.mypinata.cloud/ipfs/"+t,r=await fetch(e),n="https://punksvsapes.mypinata.cloud/ipfs/"+(await r.json()).image;this.setState({loading:!1,resultImage:n})}))},this.requestId=t.requestId,this.routeToPage=t.routeToPage,this.state={loading:!0,resultImage:""}}componentDidMount(){this.addListener()}render(){return(0,o.jsxs)("div",{style:{paddingLeft:"200px",paddingRight:"200px",display:"flex",flexDirection:"column",textAlign:"center"},children:[this.state.loading&&(0,o.jsxs)(aE,{children:["Waiting for results...",(0,o.jsx)("br",{}),"It usually takes less than 20s"]}),this.state.loading&&(0,o.jsx)("div",{className:"loader"}),!this.state.loading&&(0,o.jsx)(aE,{children:"Here is your output"}),(0,o.jsx)("img",{src:this.state.resultImage,style:{marginTop:"20px"}}),!this.state.loading&&(0,o.jsx)(g,{id:"start-button",onClick:()=>this.routeToPage("home"),children:"Generate another image"})," "]})}}var uE=r(53889);const cE=Uf.p`
width: 100%;

background: #5008FF;
border-radius: 16px;
margin-top: 20px;

display: flex;
flexDirection row

padding-top: 30px;
padding-bottom: 30px;
`,lE=(Uf.img`
width: 273px;
height: 195px;
left: 0px;
top: 0px;

`,Uf.p`
margin-left: 24px;
margin-right: 24px;
margin-top: 24px;
margin-bottom: -5px;

font-family: 'Satoshi';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 100%;
/* identical to box height, or 32px */

letter-spacing: -0.04em;
background: linear-gradient(93.84deg, #FFFFFF -16.51%, rgba(255, 255, 255, 0.86) 48.85%, #FFFFFF 110.24%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
`),hE=Uf.p`
margin-left: 24px;
margin-right: 24px;
margin-top: 10px;

font-family: 'Satoshi';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 100%;
/* identical to box height, or 18px */

letter-spacing: -0.04em;

background: linear-gradient(93.84deg, #FFFFFF -16.51%, rgba(255, 255, 255, 0.86) 48.85%, #FFFFFF 110.24%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;

opacity: 0.6;
`,dE=(Uf.img`
width: 32px;
height: 32px;
left: 20px;
margin-top: 40px;
margin-left: 20px;

background: #FFFFFF;
border-radius: 103.571px;
`,Uf.span`
height: 18px;
left: 341px;
margin-top: 10px;
margin-left: 24px;

font-family: 'Satoshi';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 100%;

/* identical to box height, or 18px */
letter-spacing: -0.04em;

background: linear-gradient(93.84deg, #FFFFFF -16.51%, rgba(255, 255, 255, 0.86) 48.85%, #FFFFFF 110.24%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
`,Uf.button`
width: 151px;
height: 45px;
paddingLeft: 12px;
background-color: white;
background: #FFFFFF;
border-radius: 100px;
font-family: 'Satoshi';
margin-right: 16px;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 100%;
color: #000000;
margin-top: 20px;
margin-left: 400px;

`);class fE extends t.Component{constructor(t){super(),this.onStartClick=async t=>{console.log("clicked"),this.setState({isTxConfirming:!0});try{await async function(t,e,r){console.log("submitting rating "+t,e,r);let n=window.gaslessWallet.getGaslessWallet();await n.init();let i=await Zk(),o=await i.populateTransaction.rateInference(t,e,r);await n.sponsorTransaction(o.to,o.data)}(this.node.requestId,this.node.inferenceId,t?9:1),this.setState({isTxConfirming:!1,isRatingSubmitted:!0})}catch(e){console.log(e),this.setState({isTxConfirming:!1})}},this.node=t.image,this.routeToPage=t.routeToPage,this.state={isTxConfirming:!1,isRatingSubmitted:!1}}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(cE,{children:[(0,o.jsxs)("div",{style:{dislay:"flex",flexDirection:"column"},children:[(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"row",textAlign:"left",justifyContent:"space-between",flexGrow:1},children:[(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,o.jsx)("img",{width:100,height:100,src:this.node.url,style:{objectFit:"cover",margin:"16px"}}),(0,o.jsx)(lE,{children:0==this.node.cost?"Free":$k.parseEther(this.node.cost)}),(0,o.jsxs)(hE,{children:[this.node.address.substring(36,42),(0,o.jsx)("br",{})]})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,o.jsx)(dE,{onClick:()=>{this.onStartClick(!0)},children:"Like"}),(0,o.jsx)(dE,{onClick:()=>{this.onStartClick(!0)},style:{marginTop:"8px"},children:"Dislike"}),this.state.isRatingSubmitted&&(0,o.jsx)("span",{className:"attendee-lens-text",style:{fontSize:"16px",marginRight:"40px"},children:(0,o.jsx)(Jk,{children:"Rating submitted"})})]})]}),this.state.isTxConfirming&&(0,o.jsx)("div",{className:"inline-loader"})]}),(0,o.jsx)("div",{})]})})}}const pE=Uf.p`

font-family: 'Satoshi';
font-style: normal;
font-weight: 500;
font-size: 30px;
line-height: 100%;
/* identical to box height, or 96px */

text-align: center;
letter-spacing: -0.04em;
margin-top: 16px;
`;class mE extends t.Component{constructor(t){super(),this.getImages=async()=>{const t=await async function(){const t=await Gk();console.log("nodes",t);let e=[];return t.forEach((t=>{e=e.concat(t.responses.map(((e,r)=>({...e,address:t.address,cost:t.cost}))))})),console.log("outputs",e),e}();console.log(t),console.log("TOTAL images: "+t.length),this.setState({images:t,loading:!1})},this.routeToPage=t.routeToPage,this.text=t.text,this.state={images:[],attendeeCount:{},loading:!0}}componentDidMount(){this.getImages()}render(){return(0,o.jsxs)("div",{style:{paddingLeft:"300px",paddingRight:"300px",display:"flex",flexDirection:"column"},children:[!this.state.loading&&(0,o.jsxs)(pE,{children:[this.state.images.length," previous creations"]}),this.state.loading&&(0,o.jsx)("div",{className:"loader"}),(0,o.jsx)("div",{id:"node-list-bg",children:this.state.images.map(((t,e)=>(0,o.jsx)(fE,{image:t,routeToPage:this.routeToPage},e)))})]})}}const gE=function(t){let{queryClient:e=new _e({defaultOptions:{queries:{cacheTime:864e5,networkMode:"offlineFirst",refetchOnWindowFocus:!1,retry:0},mutations:{networkMode:"offlineFirst"}}}),persister:r=("undefined"!==typeof window?ft({key:"wagmi.cache",storage:window.localStorage,serialize:wn,deserialize:yn}):void 0),...n}=t;const i=function(t){const e=new _r(t);return Er=e,e}(n);return r&&Te({queryClient:e,persister:r,dehydrateOptions:{shouldDehydrateQuery:t=>0!==t.cacheTime&&t.queryHash!==JSON.stringify(mn())}}),Object.assign(i,{queryClient:e})}(function(t){var e=t.autoConnect,r=void 0===e||e,n=t.appName,i=void 0===n?"ConnectKit":n,o=t.chains,a=void 0===o?wp:o,s=t.alchemyId,u=t.infuraId,c=t.connectors,l=t.provider;dp=i;var h=[];s&&h.push(function(){let{apiKey:t=y,priority:e,stallTimeout:r,weight:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(i){return i.rpcUrls.alchemy?{chain:{...i,rpcUrls:{...i.rpcUrls,default:"".concat(i.rpcUrls.alchemy,"/").concat(t)}},provider:()=>{const o=new ii.D(i.id,t);return Object.assign(o,{priority:e,stallTimeout:r,weight:n})},webSocketProvider:()=>new ii.V(i.id,t)}:null}}({apiKey:s})),u&&h.push(function(){let{apiKey:t=v,priority:e,stallTimeout:r,weight:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(i){return i.rpcUrls.infura?{chain:{...i,rpcUrls:{...i.rpcUrls,default:"".concat(i.rpcUrls.infura,"/").concat(t)}},provider:()=>{const o=new oi.J(i.id,t);return Object.assign(o,{priority:e,stallTimeout:r,weight:n})},webSocketProvider:()=>new oi.m(i.id,t)}:null}}({apiKey:u})),h.push(function(t){let{priority:e,rpc:r,stallTimeout:n,static:i=!0,weight:o}=t;return function(t){const a=r(t);return a&&""!==a.http?{chain:{...t,rpcUrls:{...t.rpcUrls,default:a.http}},provider:()=>{var r;const s=new(i?ai.c:si.r)(a.http,{ensAddress:null===(r=t.ens)||void 0===r?void 0:r.address,chainId:t.id,name:t.network});return Object.assign(s,{priority:e,stallTimeout:n,weight:o})},...a.webSocket&&{webSocketProvider:()=>new ui.q(a.webSocket,t.id)}}:null}}({rpc:function(t){return t.id!==ht.mainnet.id?null:{http:t.rpcUrls.default}}})),h.push(function(){let{priority:t,stallTimeout:e,weight:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(n){return n.rpcUrls.default?{chain:n,provider:()=>{const i=new ai.c(n.rpcUrls.default,{chainId:n.id,name:n.network});return Object.assign(i,{priority:t,stallTimeout:e,weight:r})}}:null}}());var d=Pr(a,h),f=d.provider,p=d.chains;d.webSocketProvider;var m={autoConnect:r,connectors:null!=c?c:xp({chains:p,appName:i}),provider:null!=l?l:f};return pp({},m)}({appName:"Decent AI",alchemyId:{NODE_ENV:"production",PUBLIC_URL:"/DecentAI",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.ALCHEMY_ID,chains:[ht.polygon]})),yE=Uf.p`

font-family: 'Satoshi';
font-style: normal;
font-weight: 700;
font-size: 65px;
line-height: 100%;

margin-top: 80px;
letter-spacing: -0.04em;

`,vE=Uf.p`

font-family: 'Satoshi';
font-style: normal;
font-weight: 500;
font-size: 30px;
line-height: 100%;
/* identical to box height, or 96px */

text-align: center;
letter-spacing: -0.04em;

margin-top: 120px;

`;class bE extends t.Component{constructor(t){super(),this.routeToPage=(t,e)=>{console.log("btn clicked"),this.setState({page:t,pageData:e})},this.state={page:"home"}}componentDidMount(){}render(){return(0,o.jsx)("div",{className:"App",children:(0,o.jsx)("header",{className:"App-header",children:(0,o.jsx)(en,{client:gE,children:(0,o.jsxs)(Y_,{children:["home"===this.state.page?(0,o.jsx)(wE,{routeToPage:this.routeToPage}):"","start"===this.state.page?(0,o.jsx)(oE,{routeToPage:this.routeToPage,text:this.state.pageData}):"","result"===this.state.page?(0,o.jsx)(sE,{routeToPage:this.routeToPage,requestId:this.state.pageData}):"","rate"===this.state.page?(0,o.jsx)(mE,{routeToPage:this.routeToPage}):""]})})})})}}const wE=e=>{const{isConnected:r}=xn(),[n,i]=(0,t.useState)(""),{routeToPage:a}=e,[s,u]=(0,t.useState)("true"==localStorage.getItem("gasless_connected")),[c,l]=(0,t.useState)("Checking wallet..."),[h,d]=(0,t.useState)(0);var f="";console.log("connected"+s);let p=new uE.GaslessOnboarding({chain:{id:84531,rpcUrl:"https://goerli.base.org"},domains:["http://localhost:3000"]},{apiKey:"3vA3QjzNh9099IAw5VA_wlGaNpGSf2rDh_tfhtt4alY_"});window.gaslessWallet=p;const m=async()=>{await p.init(),null!=p.getProvider()?(u(!0),localStorage.setItem("gasless_connected",!0),localStorage.setItem("gasless_address",p.getGaslessWallet().getAddress())):l("Connect wallet")},y=async()=>{let t=await async function(){const t=new Cr.Contract(Vk,Uk,await Hk(Wk));let e=t.filters.ResponderAdded();return(await t.queryFilter(e)).length}();d(t)};return(0,t.useEffect)((()=>{m()}),[]),(0,t.useEffect)((()=>{y()}),[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%",top:"0px"},children:[(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",zIndex:100},children:[(0,o.jsx)(Bk,{routeToPage:a,gaslessConnected:s}),(0,o.jsx)(yE,{children:"Create AI images in a decentralised way "})]}),(0,o.jsx)("img",{style:{width:"100%",height:"350px",position:"absolute",top:"0px",zIndex:0},src:"https://shashank42.github.io/DecentAI/images/header-background.png"}),s&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(vE,{children:"Start by typing a prompt"}),(0,o.jsx)("input",{className:"Prompt-Input",placeholder:"Type a prompt",onChange:t=>{f=t.target.value}}),(0,o.jsx)(g,{id:"start-button",onClick:()=>a("start",f),children:"Generate now"})," "]}),!s&&(0,o.jsx)(g,{id:"start-button",onClick:()=>(async()=>{await p.init(),await p.login(),m()})(),children:c}),h>0&&(0,o.jsxs)(vE,{style:{marginTop:"0px",paddingTop:"18px",fontSize:"20px"},children:[h," nodes online"]})]})})},xE=bE;window.Buffer=r(66303).Buffer;e.createRoot(document.getElementById("root")).render((0,o.jsx)(t.StrictMode,{children:(0,o.jsx)(xE,{})}))})()})();
//# sourceMappingURL=main.0d758071.js.map