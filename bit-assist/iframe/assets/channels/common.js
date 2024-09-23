const $=t=>document.querySelector(t),createElm=(t,e)=>{const s=document.createElement(t);if(e)for(const t in e)s.setAttribute(t,e[t]);return s},globalAppend=(t,e)=>Array.isArray(e)?t.append(...e):t.append(e),globalEventListener=(t,e,s)=>t.addEventListener(e,s),globalSetProperty=(t,e,s)=>t.setProperty(e,s),globalPostMessage=(t,e,s)=>t.postMessage(e,s),globalQuerySelectorAll=(t,e)=>t.querySelectorAll(e),globalClassListRemove=(t,e)=>t?.classList.remove(e),globalClassListAdd=(t,e)=>t?.classList.add(e),globalClassListContains=(t,e)=>t?.classList.contains(e),globalClassListToggle=(t,e)=>t?.classList.toggle(e),globalSetAttribute=(t,e,s)=>{t.setAttribute(e,s)},globalInnerHTML=(t,e)=>{t.innerHTML=e},globalInnerText=(t,e)=>{t.innerText=e},common={hideChannels(){globalClassListContains(this.channels,"show")&&globalClassListRemove(this.channels,"show")},debounce(t,e){let s;return function(){const i=this,r=arguments;clearTimeout(s),s=setTimeout((()=>t.apply(i,r)),e)}},renderCard(){if($("#card"))return void globalClassListAdd(this.card,"show");this.card=createElm("div",{id:"card",class:"show"});const t=createElm("div",{id:"cardHeader"}),e=createElm("h4"),s=createElm("button",{class:"iconBtn closeCardBtn",title:"Close"});globalInnerHTML(s,'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="currentColor"><path d="M6.061 5l2.969-2.969A.75.75 0 0 0 9.03.97.75.75 0 0 0 7.969.969L5 3.938 2.031.969a.75.75 0 0 0-1.062 0 .75.75 0 0 0 0 1.063L3.938 5 .969 7.969a.75.75 0 0 0 0 1.062.75.75 0 0 0 1.063 0L5 6.063l2.969 2.969a.75.75 0 0 0 1.063 0 .75.75 0 0 0 0-1.062L6.061 5z"/></svg>'),globalAppend(t,[e,s]),this.cardBody=createElm("div",{id:"cardBody"}),globalAppend(this.card,[t,this.cardBody]),globalAppend(this.contentWrapper,this.card),globalEventListener(s,"click",this.closeWidget)},setCardStyle(t){this.selectedFormBg=t?.card_config?.card_bg_color?.str,globalInnerHTML($("#cardHeader>h4"),t?.title),globalSetProperty(this.root.style,"--card-theme-color",this.selectedFormBg),globalSetProperty(this.root.style,"--card-text-color",t?.card_config?.card_text_color?.str)},hideCard(){globalClassListContains(this.card,"show")&&globalClassListRemove(this.card,"show")},itemListAppend(t){const e=[];t?.forEach((t=>{const s=createElm("div",{class:"listItem"}),i=createElm("button",{class:"listItemTitleWrapper","data-item_id":t.id?t.id:t.order_id}),r=createElm("p",{class:"title"});globalInnerHTML(r,t.title?t.title:(t.order_id?"Order Id: "+t.order_id+` (${t.shipping_status})`:"")||""),globalInnerHTML(i,'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" fill="currentColor"><path d="M7.397 14.176a7.09 7.09 0 0 0 7.088-7.088A7.09 7.09 0 0 0 7.397 0 7.09 7.09 0 0 0 .31 7.088a7.09 7.09 0 0 0 7.088 7.088z" fill-opacity=".2"/><path d="M6.504 10.122c-.135 0-.269-.05-.376-.156-.099-.1-.154-.235-.154-.376s.055-.276.154-.376l2.126-2.126-2.126-2.126c-.099-.1-.154-.235-.154-.376s.055-.276.154-.376c.206-.206.546-.206.751 0l2.502 2.502c.206.206.206.546 0 .751L6.88 9.966c-.106.106-.241.156-.376.156z"/></svg>'),globalAppend(i,r),globalAppend(s,i),e.push(s)})),globalAppend($("#lists"),e)},searchList(t){const e=t.target.value.toLowerCase();globalQuerySelectorAll(document,".listItem").forEach((t=>{t.querySelector(".title").innerText.toLowerCase().includes(e)?globalClassListRemove(t,"hide"):globalClassListAdd(t,"hide")}))},resetClientWidgetSize(){globalPostMessage(parent,{action:"resetWidgetSize",height:this.widgetWrapper.offsetHeight,width:this.widgetWrapper.offsetWidth},`${this.clientDomain}`)}};export{$,common,createElm,globalAppend,globalClassListAdd,globalClassListContains,globalClassListRemove,globalClassListToggle,globalEventListener,globalInnerHTML,globalInnerText,globalPostMessage,globalQuerySelectorAll,globalSetAttribute,globalSetProperty};
