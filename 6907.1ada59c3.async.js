(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6907],{8212:function(H,R,l){"use strict";l.d(R,{Z:function(){return j}});var h=l(67294),b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},o=b,V=l(27029),U=function(Z,X){return h.createElement(V.Z,Object.assign({},Z,{ref:X,icon:o}))};U.displayName="EditOutlined";var j=h.forwardRef(U)},47828:function(H){H.exports={"ant-typography":"ant-typography","ant-typography-secondary":"ant-typography-secondary","ant-typography-success":"ant-typography-success","ant-typography-warning":"ant-typography-warning","ant-typography-danger":"ant-typography-danger","ant-typography-disabled":"ant-typography-disabled","ant-typography-ellipsis":"ant-typography-ellipsis","ant-typography-expand":"ant-typography-expand","ant-typography-edit":"ant-typography-edit","ant-typography-copy":"ant-typography-copy","ant-typography-copy-success":"ant-typography-copy-success","ant-typography-edit-content":"ant-typography-edit-content","ant-typography-edit-content-confirm":"ant-typography-edit-content-confirm","ant-typography-single-line":"ant-typography-single-line","ant-typography-ellipsis-single-line":"ant-typography-ellipsis-single-line","ant-typography-ellipsis-multiple-line":"ant-typography-ellipsis-multiple-line","ant-typography-rtl":"ant-typography-rtl"}},3771:function(H,R,l){"use strict";l.d(R,{Z:function(){return it}});var h=l(82124),b=l(65497),o=l(67294),V=l(75177),U=l.n(V),j=l(74214),E=l(21458),Z=l(31784),X=function(r,n){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(i[e[t]]=r[e[t]]);return i},_=function(n,i){var e=n.prefixCls,t=n.component,a=t===void 0?"article":t,s=n.className,p=n["aria-label"],c=n.setContentRef,d=n.children,y=X(n,["prefixCls","component","className","aria-label","setContentRef","children"]),u=i;return c&&((0,Z.Z)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),u=(0,j.sQ)(i,c)),o.createElement(E.C,null,function(O){var x=O.getPrefixCls,A=O.direction,w=a,N=x("typography",e),k=U()(N,(0,b.Z)({},"".concat(N,"-rtl"),A==="rtl"),s);return o.createElement(w,(0,h.Z)({className:k,"aria-label":p,ref:u},y),d)})},F=o.forwardRef(_);F.displayName="Typography";var W=F,C=W,z=l(33156),ee=l(62010),K=l(49682),J=l(66221),ge=l(16710),me=l(96114),Ee=l(72504),Y=l(28821),Ce=l(47246),xe=l.n(Ce),be=l(8212),Oe=l(79508),Se=l(99165),Te=l(55439),Ze=l(20817),Ne=l(37161),ue=l(49297),ne=l(41508),fe=l(64439),re=l(99352),Pe=l(21814),ye=l(79045),Re={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},Le=Re,De=l(27029),ve=function(n,i){return o.createElement(De.Z,Object.assign({},n,{ref:i,icon:Le}))};ve.displayName="EnterOutlined";var we=o.forwardRef(ve),Ie=l(18776),je=function(n){var i=n.prefixCls,e=n["aria-label"],t=n.className,a=n.style,s=n.direction,p=n.maxLength,c=n.autoSize,d=c===void 0?!0:c,y=n.value,u=n.onSave,O=n.onCancel,x=n.onEnd,A=o.useRef(),w=o.useRef(!1),N=o.useRef(),k=o.useState(y),$=(0,Pe.Z)(k,2),I=$[0],B=$[1];o.useEffect(function(){B(y)},[y]),o.useEffect(function(){if(A.current&&A.current.resizableTextArea){var m=A.current.resizableTextArea.textArea;m.focus();var g=m.value.length;m.setSelectionRange(g,g)}},[]);var G=function(g){var P=g.target;B(P.value.replace(/[\n\r]/g,""))},v=function(){w.current=!0},S=function(){w.current=!1},T=function(g){var P=g.keyCode;w.current||(N.current=P)},L=function(){u(I.trim())},M=function(g){var P=g.keyCode,se=g.ctrlKey,ce=g.altKey,pe=g.metaKey,de=g.shiftKey;N.current===P&&!w.current&&!se&&!ce&&!pe&&!de&&(P===ye.Z.ENTER?(L(),x==null||x()):P===ye.Z.ESC&&O())},D=function(){L()},Q=U()(i,"".concat(i,"-edit-content"),(0,b.Z)({},"".concat(i,"-rtl"),s==="rtl"),t);return o.createElement("div",{className:Q,style:a},o.createElement(Ie.Z,{ref:A,maxLength:p,value:I,onChange:G,onKeyDown:T,onKeyUp:M,onCompositionStart:v,onCompositionEnd:S,onBlur:D,"aria-label":e,autoSize:d}),o.createElement(we,{className:"".concat(i,"-edit-content-confirm")}))},Ae=je,ae=l(73935),ke=1,Me=3,Ke=8,f,ie={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function oe(r){if(!r)return 0;var n=r.match(/^\d*(\.\d*)?/);return n?Number(n[0]):0}function Ue(r){var n=Array.prototype.slice.apply(r);return n.map(function(i){return"".concat(i,": ").concat(r.getPropertyValue(i),";")}).join("")}function ze(r){var n=[];return r.forEach(function(i){var e=n[n.length-1];typeof i=="string"&&typeof e=="string"?n[n.length-1]+=i:n.push(i)}),n}var $e=function(r,n,i,e,t){f||(f=document.createElement("div"),f.setAttribute("aria-hidden","true")),f.parentNode||document.body.appendChild(f);var a=n.rows,s=n.suffix,p=s===void 0?"":s,c=window.getComputedStyle(r),d=Ue(c),y=oe(c.lineHeight),u=Math.round(y*(a+1)+oe(c.paddingTop)+oe(c.paddingBottom));f.setAttribute("style",d),f.style.position="fixed",f.style.left="0",f.style.height="auto",f.style.minHeight="auto",f.style.maxHeight="auto",f.style.top="-999999px",f.style.zIndex="-1000",f.style.textOverflow="clip",f.style.whiteSpace="normal",f.style.webkitLineClamp="none";var O=ze((0,Y.Z)(i));(0,ae.render)(o.createElement("div",{style:ie},o.createElement("span",{style:ie},O,p),o.createElement("span",{style:ie},e)),f);function x(){return f.offsetHeight<u}if(x())return(0,ae.unmountComponentAtNode)(f),{content:i,text:f.innerHTML,ellipsis:!1};var A=Array.prototype.slice.apply(f.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(v){var S=v.nodeType;return S!==Ke}),w=Array.prototype.slice.apply(f.childNodes[0].childNodes[1].cloneNode(!0).childNodes);(0,ae.unmountComponentAtNode)(f);var N=[];f.innerHTML="";var k=document.createElement("span");f.appendChild(k);var $=document.createTextNode(t+p);k.appendChild($),w.forEach(function(v){f.appendChild(v)});function I(v){k.insertBefore(v,$)}function B(v,S){var T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,L=arguments.length>3&&arguments[3]!==void 0?arguments[3]:S.length,M=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,D=Math.floor((T+L)/2),Q=S.slice(0,D);if(v.textContent=Q,T>=L-1)for(var m=L;m>=T;m-=1){var g=S.slice(0,m);if(v.textContent=g,x()||!g)return m===S.length?{finished:!1,reactNode:S}:{finished:!0,reactNode:g}}return x()?B(v,S,D,L,D):B(v,S,T,D,M)}function G(v,S){var T=v.nodeType;if(T===ke)return I(v),x()?{finished:!1,reactNode:O[S]}:(k.removeChild(v),{finished:!0,reactNode:null});if(T===Me){var L=v.textContent||"",M=document.createTextNode(L);return I(M),B(M,L)}return{finished:!1,reactNode:null}}return A.some(function(v,S){var T=G(v,S),L=T.finished,M=T.reactNode;return M&&N.push(M),L}),{content:N,text:f.innerHTML,ellipsis:!0}},Be=function(r,n){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(i[e[t]]=r[e[t]]);return i},He=(0,fe.GL)("webkitLineClamp"),We=(0,fe.GL)("textOverflow");function Fe(r,n){var i=r.mark,e=r.code,t=r.underline,a=r.delete,s=r.strong,p=r.keyboard,c=r.italic,d=n;function y(u,O){!u||(d=o.createElement(O,{},d))}return y(s,"strong"),y(t,"u"),y(a,"del"),y(e,"code"),y(i,"mark"),y(p,"kbd"),y(c,"i"),d}var he="...",le=function(r){(0,me.Z)(i,r);var n=(0,Ee.Z)(i);function i(){var e;return(0,J.Z)(this,i),e=n.apply(this,arguments),e.contentRef=o.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls,a=e.context.getPrefixCls;return a("typography",t)},e.onExpandClick=function(t){var a,s=e.getEllipsis(),p=s.onExpand;e.setState({expanded:!0}),(a=p)===null||a===void 0||a(t)},e.onEditClick=function(t){t.preventDefault(),e.triggerEdit(!0)},e.onEditChange=function(t){var a=e.getEditable(),s=a.onChange;s==null||s(t),e.triggerEdit(!1)},e.onEditCancel=function(){var t,a;(a=(t=e.getEditable()).onCancel)===null||a===void 0||a.call(t),e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var a=e.props,s=a.children,p=a.copyable,c=(0,h.Z)({},(0,z.Z)(p)==="object"?p:null);c.text===void 0&&(c.text=String(s)),xe()(c.text||""),e.setState({copied:!0},function(){c.onCopy&&c.onCopy(),e.copyId=window.setTimeout(function(){e.setState({copied:!1})},3e3)})},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var a=e.getEditable(),s=a.onStart;t&&s&&s(),e.setState({edit:t},function(){!t&&e.editIcon&&e.editIcon.focus()})},e.resizeOnNextFrame=function(){ne.Z.cancel(e.rafId),e.rafId=(0,ne.Z)(function(){e.syncEllipsis()})},e}return(0,ge.Z)(i,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(t){var a=this.props.children,s=this.getEllipsis(),p=this.getEllipsis(t);(a!==t.children||s.rows!==p.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),ne.Z.cancel(this.rafId)}},{key:"getEditable",value:function(t){var a=this.state.edit,s=t||this.props,p=s.editable;return p?(0,h.Z)({editing:a},(0,z.Z)(p)==="object"?p:null):{editing:a}}},{key:"getEllipsis",value:function(t){var a=t||this.props,s=a.ellipsis;return s?(0,h.Z)({rows:1,expandable:!1},(0,z.Z)(s)==="object"?s:null):{}}},{key:"canUseCSSEllipsis",value:function(){var t=this.state.clientRendered,a=this.props,s=a.editable,p=a.copyable,c=this.getEllipsis(),d=c.rows,y=c.expandable,u=c.suffix,O=c.onEllipsis,x=c.tooltip;return u||x||s||p||y||!t||O?!1:d===1?We:He}},{key:"syncEllipsis",value:function(){var t=this.state,a=t.ellipsisText,s=t.isEllipsis,p=t.expanded,c=this.getEllipsis(),d=c.rows,y=c.suffix,u=c.onEllipsis,O=this.props.children;if(!(!d||d<0||!this.contentRef.current||p)&&!this.canUseCSSEllipsis()){(0,Z.Z)((0,Y.Z)(O).every(function(k){return typeof k=="string"}),"Typography","`ellipsis` should use string as children only.");var x=$e(this.contentRef.current,{rows:d,suffix:y},O,this.renderOperations(!0),he),A=x.content,w=x.text,N=x.ellipsis;(a!==w||s!==N)&&(this.setState({ellipsisText:w,ellipsisContent:A,isEllipsis:N}),s!==N&&u&&u(N))}}},{key:"renderExpand",value:function(t){var a=this.getEllipsis(),s=a.expandable,p=a.symbol,c=this.state,d=c.expanded,y=c.isEllipsis;if(!s||!t&&(d||!y))return null;var u;return p?u=p:u=this.expandStr,o.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},u)}},{key:"renderEdit",value:function(){var t=this.props.editable;if(!!t){var a=t.icon,s=t.tooltip,p=(0,Y.Z)(s)[0]||this.editStr,c=typeof p=="string"?p:"";return o.createElement(re.Z,{key:"edit",title:s===!1?"":p},o.createElement(ue.Z,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":c},a||o.createElement(be.Z,{role:"button"})))}}},{key:"renderCopy",value:function(){var t=this.state.copied,a=this.props.copyable;if(!!a){var s=this.getPrefixCls(),p=a.tooltips,c=(0,Y.Z)(p);c.length===0&&(c=[this.copyStr,this.copiedStr]);var d=t?c[1]:c[0],y=typeof d=="string"?d:"",u=(0,Y.Z)(a.icon);return o.createElement(re.Z,{key:"copy",title:p===!1?"":d},o.createElement(ue.Z,{className:U()("".concat(s,"-copy"),t&&"".concat(s,"-copy-success")),onClick:this.onCopyClick,"aria-label":y},t?u[1]||o.createElement(Oe.Z,null):u[0]||o.createElement(Se.Z,null)))}}},{key:"renderEditInput",value:function(){var t=this.props,a=t.children,s=t.className,p=t.style,c=this.context.direction,d=this.getEditable(),y=d.maxLength,u=d.autoSize,O=d.onEnd;return o.createElement(Ae,{value:typeof a=="string"?a:"",onSave:this.onEditChange,onCancel:this.onEditCancel,onEnd:O,prefixCls:this.getPrefixCls(),className:s,style:p,direction:c,maxLength:y,autoSize:u})}},{key:"renderOperations",value:function(t){return[this.renderExpand(t),this.renderEdit(),this.renderCopy()].filter(function(a){return a})}},{key:"renderContent",value:function(){var t=this,a=this.state,s=a.ellipsisContent,p=a.isEllipsis,c=a.expanded,d=this.props,y=d.component,u=d.children,O=d.className,x=d.type,A=d.disabled,w=d.style,N=Be(d,["component","children","className","type","disabled","style"]),k=this.context.direction,$=this.getEllipsis(),I=$.rows,B=$.suffix,G=$.tooltip,v=this.getPrefixCls(),S=(0,ee.Z)(N,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard"].concat((0,K.Z)(Ze.nf))),T=this.canUseCSSEllipsis(),L=I===1&&T,M=I&&I>1&&T,D=u;if(I&&p&&!c&&!T){var Q=N.title,m=Q||"";!Q&&(typeof u=="string"||typeof u=="number")&&(m=String(u)),m=m.slice(String(s||"").length),D=o.createElement(o.Fragment,null,s,o.createElement("span",{title:m,"aria-hidden":"true"},he),B),G&&(D=o.createElement(re.Z,{title:G===!0?u:G},o.createElement("span",null,D)))}else D=o.createElement(o.Fragment,null,u,B);return D=Fe(this.props,D),o.createElement(Ne.Z,{componentName:"Text"},function(g){var P,se=g.edit,ce=g.copy,pe=g.copied,de=g.expand;return t.editStr=se,t.copyStr=ce,t.copiedStr=pe,t.expandStr=de,o.createElement(Te.Z,{onResize:t.resizeOnNextFrame,disabled:T},o.createElement(C,(0,h.Z)({className:U()((P={},(0,b.Z)(P,"".concat(v,"-").concat(x),x),(0,b.Z)(P,"".concat(v,"-disabled"),A),(0,b.Z)(P,"".concat(v,"-ellipsis"),I),(0,b.Z)(P,"".concat(v,"-single-line"),I===1),(0,b.Z)(P,"".concat(v,"-ellipsis-single-line"),L),(0,b.Z)(P,"".concat(v,"-ellipsis-multiple-line"),M),P),O),style:(0,h.Z)((0,h.Z)({},w),{WebkitLineClamp:M?I:void 0}),component:y,ref:t.contentRef,direction:k},S),D,t.renderOperations()))})}},{key:"render",value:function(){var t=this.getEditable(),a=t.editing;return a?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(t){var a=t.children,s=t.editable;return(0,Z.Z)(!s||typeof a=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),i}(o.Component);le.contextType=E.E_,le.defaultProps={children:""};var te=le,Ge=function(r,n){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(i[e[t]]=r[e[t]]);return i},Ve=function(n){var i=n.ellipsis,e=Ge(n,["ellipsis"]),t=o.useMemo(function(){return i&&(0,z.Z)(i)==="object"?(0,ee.Z)(i,["expandable","rows"]):i},[i]);return(0,Z.Z)((0,z.Z)(i)!=="object"||!i||!("expandable"in i)&&!("rows"in i),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),o.createElement(te,(0,h.Z)({},e,{ellipsis:t,component:"span"}))},Xe=Ve,Qe=function(r,n){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(i[e[t]]=r[e[t]]);return i},Je=function(n,i){var e=n.ellipsis,t=n.rel,a=Qe(n,["ellipsis","rel"]);(0,Z.Z)((0,z.Z)(e)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var s=o.useRef(null);o.useImperativeHandle(i,function(){var c;return(c=s.current)===null||c===void 0?void 0:c.contentRef.current});var p=(0,h.Z)((0,h.Z)({},a),{rel:t===void 0&&a.target==="_blank"?"noopener noreferrer":t});return delete p.navigate,o.createElement(te,(0,h.Z)({},p,{ref:s,ellipsis:!!e,component:"a"}))},Ye=o.forwardRef(Je),qe=l(92897),_e=function(r,n){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(i[e[t]]=r[e[t]]);return i},et=(0,qe.a)(1,2,3,4,5),tt=function(n){var i=n.level,e=i===void 0?1:i,t=_e(n,["level"]),a;return et.indexOf(e)!==-1?a="h".concat(e):((0,Z.Z)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),a="h1"),o.createElement(te,(0,h.Z)({},t,{component:a}))},nt=tt,rt=function(n){return o.createElement(te,(0,h.Z)({},n,{component:"div"}))},at=rt,q=C;q.Text=Xe,q.Link=Ye,q.Title=nt,q.Paragraph=at;var it=q},84877:function(H,R,l){"use strict";var h=l(65056),b=l.n(h),o=l(47828),V=l.n(o),U=l(38313),j=l(59094)},47246:function(H,R,l){"use strict";var h=l(28177),b={"text/plain":"Text","text/html":"Url",default:"Text"},o="Copy to clipboard: #{key}, Enter";function V(j){var E=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return j.replace(/#{\s*key\s*}/g,E)}function U(j,E){var Z,X,_,F,W,C,z=!1;E||(E={}),Z=E.debug||!1;try{_=h(),F=document.createRange(),W=document.getSelection(),C=document.createElement("span"),C.textContent=j,C.style.all="unset",C.style.position="fixed",C.style.top=0,C.style.clip="rect(0, 0, 0, 0)",C.style.whiteSpace="pre",C.style.webkitUserSelect="text",C.style.MozUserSelect="text",C.style.msUserSelect="text",C.style.userSelect="text",C.addEventListener("copy",function(K){if(K.stopPropagation(),E.format)if(K.preventDefault(),typeof K.clipboardData=="undefined"){Z&&console.warn("unable to use e.clipboardData"),Z&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var J=b[E.format]||b.default;window.clipboardData.setData(J,j)}else K.clipboardData.clearData(),K.clipboardData.setData(E.format,j);E.onCopy&&(K.preventDefault(),E.onCopy(K.clipboardData))}),document.body.appendChild(C),F.selectNodeContents(C),W.addRange(F);var ee=document.execCommand("copy");if(!ee)throw new Error("copy command was unsuccessful");z=!0}catch(K){Z&&console.error("unable to copy using execCommand: ",K),Z&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(E.format||"text",j),E.onCopy&&E.onCopy(window.clipboardData),z=!0}catch(J){Z&&console.error("unable to copy using clipboardData: ",J),Z&&console.error("falling back to prompt"),X=V("message"in E?E.message:o),window.prompt(X,j)}}finally{W&&(typeof W.removeRange=="function"?W.removeRange(F):W.removeAllRanges()),C&&document.body.removeChild(C),_()}return z}H.exports=U},28177:function(H){H.exports=function(){var R=document.getSelection();if(!R.rangeCount)return function(){};for(var l=document.activeElement,h=[],b=0;b<R.rangeCount;b++)h.push(R.getRangeAt(b));switch(l.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":l.blur();break;default:l=null;break}return R.removeAllRanges(),function(){R.type==="Caret"&&R.removeAllRanges(),R.rangeCount||h.forEach(function(o){R.addRange(o)}),l&&l.focus()}}}}]);
