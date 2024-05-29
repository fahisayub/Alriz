(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[686],{5165:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register-home",function(){return t(4567)}])},4567:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(7294),l=t(7963),a=t(7747),s=t(5970),u=t(5418),o=t(3090),d=t(4225);n.default=()=>{let[e,n]=(0,i.useState)(""),[t,c]=(0,i.useState)(""),[m,f]=(0,i.useState)(""),p=(0,l.p)(),h=async r=>{r.preventDefault();let i=await fetch("/api/home/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:e,masjidId:t,userId:m})}),l=await i.json();i.ok?(p({title:"Home registered successfully.",status:"success",duration:5e3,isClosable:!0}),n(""),c(""),f("")):p({title:"Error registering home.",description:l.message,status:"error",duration:5e3,isClosable:!0})};return(0,r.jsx)(a.xu,{maxW:"md",mx:"auto",mt:8,p:4,borderWidth:1,borderRadius:"md",boxShadow:"md",children:(0,r.jsxs)("form",{onSubmit:h,children:[(0,r.jsxs)(s.NI,{id:"address",mb:4,children:[(0,r.jsx)(u.l,{children:"Address"}),(0,r.jsx)(o.I,{type:"text",value:e,onChange:e=>n(e.target.value),required:!0})]}),(0,r.jsxs)(s.NI,{id:"masjidId",mb:4,children:[(0,r.jsx)(u.l,{children:"Masjid ID"}),(0,r.jsx)(o.I,{type:"text",value:t,onChange:e=>c(e.target.value),required:!0})]}),(0,r.jsxs)(s.NI,{id:"userId",mb:4,children:[(0,r.jsx)(u.l,{children:"User ID"}),(0,r.jsx)(o.I,{type:"text",value:m,onChange:e=>f(e.target.value),required:!0})]}),(0,r.jsx)(d.z,{type:"submit",colorScheme:"teal",width:"full",children:"Register Home"})]})})}},4225:function(e,n,t){"use strict";t.d(n,{z:function(){return x}});var r=t(7294),[i,l]=(0,t(5227).k)({strict:!1,name:"ButtonGroupContext"}),a=t(6914),s=t(5432),u=t(5893);function o(e){let{children:n,className:t,...i}=e,l=(0,r.isValidElement)(n)?(0,r.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,o=(0,s.cx)("chakra-button__icon",t);return(0,u.jsx)(a.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...i,className:o,children:l})}o.displayName="ButtonIcon";var d=t(1136);function c(e){let{label:n,placement:t,spacing:i="0.5rem",children:l=(0,u.jsx)(d.$,{color:"currentColor",width:"1em",height:"1em"}),className:o,__css:c,...m}=e,f=(0,s.cx)("chakra-button__spinner",o),p="start"===t?"marginEnd":"marginStart",h=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:n?"relative":"absolute",[p]:n?i:0,fontSize:"1em",lineHeight:"normal",...c}),[c,n,p,i]);return(0,u.jsx)(a.m.div,{className:f,...m,__css:h,children:l})}c.displayName="ButtonSpinner";var m=t(1103),f=t(6554),p=t(7030),h=t(3179),x=(0,f.G)((e,n)=>{let t=l(),i=(0,p.mq)("Button",{...t,...e}),{isDisabled:o=null==t?void 0:t.isDisabled,isLoading:d,isActive:f,children:x,leftIcon:b,rightIcon:y,loadingText:j,iconSpacing:_="0.5rem",type:g,spinner:N,spinnerPlacement:I="start",className:k,as:C,...S}=(0,h.Lr)(e),q=(0,r.useMemo)(()=>{let e={...null==i?void 0:i._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...i,...!!t&&{_focus:e}}},[i,t]),{ref:B,type:P}=function(e){let[n,t]=(0,r.useState)(!e);return{ref:(0,r.useCallback)(e=>{e&&t("BUTTON"===e.tagName)},[]),type:n?"button":void 0}}(C),F={rightIcon:y,leftIcon:b,iconSpacing:_,children:x};return(0,u.jsxs)(a.m.button,{ref:(0,m.qq)(n,B),as:C,type:null!=g?g:P,"data-active":(0,s.PB)(f),"data-loading":(0,s.PB)(d),__css:q,className:(0,s.cx)("chakra-button",k),...S,disabled:o||d,children:[d&&"start"===I&&(0,u.jsx)(c,{className:"chakra-button__spinner--start",label:j,placement:"start",spacing:_,children:N}),d?j||(0,u.jsx)(a.m.span,{opacity:0,children:(0,u.jsx)(v,{...F})}):(0,u.jsx)(v,{...F}),d&&"end"===I&&(0,u.jsx)(c,{className:"chakra-button__spinner--end",label:j,placement:"end",spacing:_,children:N})]})});function v(e){let{leftIcon:n,rightIcon:t,children:r,iconSpacing:i}=e;return(0,u.jsxs)(u.Fragment,{children:[n&&(0,u.jsx)(o,{marginEnd:i,children:n}),r,t&&(0,u.jsx)(o,{marginStart:i,children:t})]})}x.displayName="Button"},8912:function(e,n,t){"use strict";t.d(n,{Y:function(){return l}});var r=t(5970),i=t(5432);function l(e){let{isDisabled:n,isInvalid:t,isReadOnly:l,isRequired:a,...s}=function(e){var n,t,l;let a=(0,r.NJ)(),{id:s,disabled:u,readOnly:o,required:d,isRequired:c,isInvalid:m,isReadOnly:f,isDisabled:p,onFocus:h,onBlur:x,...v}=e,b=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==a?void 0:a.hasFeedbackText)&&(null==a?void 0:a.isInvalid)&&b.push(a.feedbackId),(null==a?void 0:a.hasHelpText)&&b.push(a.helpTextId),{...v,"aria-describedby":b.join(" ")||void 0,id:null!=s?s:null==a?void 0:a.id,isDisabled:null!=(n=null!=u?u:p)?n:null==a?void 0:a.isDisabled,isReadOnly:null!=(t=null!=o?o:f)?t:null==a?void 0:a.isReadOnly,isRequired:null!=(l=null!=d?d:c)?l:null==a?void 0:a.isRequired,isInvalid:null!=m?m:null==a?void 0:a.isInvalid,onFocus:(0,i.v0)(null==a?void 0:a.onFocus,h),onBlur:(0,i.v0)(null==a?void 0:a.onBlur,x)}}(e);return{...s,disabled:n,readOnly:l,required:a,"aria-invalid":(0,i.Qm)(t),"aria-required":(0,i.Qm)(a),"aria-readonly":(0,i.Qm)(l)}}},5970:function(e,n,t){"use strict";t.d(n,{NI:function(){return x},NJ:function(){return h},e:function(){return f}});var r=t(5227),i=t(1103),l=t(6554),a=t(7030),s=t(3179),u=t(6914),o=t(5432),d=t(7294),c=t(5893),[m,f]=(0,r.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[p,h]=(0,r.k)({strict:!1,name:"FormControlContext"}),x=(0,l.G)(function(e,n){let t=(0,a.jC)("Form",e),{getRootProps:r,htmlProps:l,...f}=function(e){let{id:n,isRequired:t,isInvalid:r,isDisabled:l,isReadOnly:a,...s}=e,u=(0,d.useId)(),c=n||`field-${u}`,m=`${c}-label`,f=`${c}-feedback`,p=`${c}-helptext`,[h,x]=(0,d.useState)(!1),[v,b]=(0,d.useState)(!1),[y,j]=(0,d.useState)(!1),_=(0,d.useCallback)((e={},n=null)=>({id:p,...e,ref:(0,i.lq)(n,e=>{e&&b(!0)})}),[p]),g=(0,d.useCallback)((e={},n=null)=>({...e,ref:n,"data-focus":(0,o.PB)(y),"data-disabled":(0,o.PB)(l),"data-invalid":(0,o.PB)(r),"data-readonly":(0,o.PB)(a),id:void 0!==e.id?e.id:m,htmlFor:void 0!==e.htmlFor?e.htmlFor:c}),[c,l,y,r,a,m]),N=(0,d.useCallback)((e={},n=null)=>({id:f,...e,ref:(0,i.lq)(n,e=>{e&&x(!0)}),"aria-live":"polite"}),[f]),I=(0,d.useCallback)((e={},n=null)=>({...e,...s,ref:n,role:"group","data-focus":(0,o.PB)(y),"data-disabled":(0,o.PB)(l),"data-invalid":(0,o.PB)(r),"data-readonly":(0,o.PB)(a)}),[s,l,y,r,a]);return{isRequired:!!t,isInvalid:!!r,isReadOnly:!!a,isDisabled:!!l,isFocused:!!y,onFocus:()=>j(!0),onBlur:()=>j(!1),hasFeedbackText:h,setHasFeedbackText:x,hasHelpText:v,setHasHelpText:b,id:c,labelId:m,feedbackId:f,helpTextId:p,htmlProps:s,getHelpTextProps:_,getErrorMessageProps:N,getRootProps:I,getLabelProps:g,getRequiredIndicatorProps:(0,d.useCallback)((e={},n=null)=>({...e,ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[])}}((0,s.Lr)(e)),h=(0,o.cx)("chakra-form-control",e.className);return(0,c.jsx)(p,{value:f,children:(0,c.jsx)(m,{value:t,children:(0,c.jsx)(u.m.div,{...r({},n),className:h,__css:t.container})})})});x.displayName="FormControl",(0,l.G)(function(e,n){let t=h(),r=f(),i=(0,o.cx)("chakra-form__helper-text",e.className);return(0,c.jsx)(u.m.div,{...null==t?void 0:t.getHelpTextProps(e,n),__css:r.helperText,className:i})}).displayName="FormHelperText"},5418:function(e,n,t){"use strict";t.d(n,{l:function(){return d}});var r=t(5970),i=t(6554),l=t(7030),a=t(3179),s=t(6914),u=t(5432),o=t(5893),d=(0,i.G)(function(e,n){var t;let i=(0,l.mq)("FormLabel",e),d=(0,a.Lr)(e),{className:m,children:f,requiredIndicator:p=(0,o.jsx)(c,{}),optionalIndicator:h=null,...x}=d,v=(0,r.NJ)(),b=null!=(t=null==v?void 0:v.getLabelProps(x,n))?t:{ref:n,...x};return(0,o.jsxs)(s.m.label,{...b,className:(0,u.cx)("chakra-form__label",d.className),__css:{display:"block",textAlign:"start",...i},children:[f,(null==v?void 0:v.isRequired)?p:h]})});d.displayName="FormLabel";var c=(0,i.G)(function(e,n){let t=(0,r.NJ)(),i=(0,r.e)();if(!(null==t?void 0:t.isRequired))return null;let l=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,o.jsx)(s.m.span,{...null==t?void 0:t.getRequiredIndicatorProps(e,n),__css:i.requiredIndicator,className:l})});c.displayName="RequiredIndicator"},3090:function(e,n,t){"use strict";t.d(n,{I:function(){return d}});var r=t(8912),i=t(6554),l=t(7030),a=t(3179),s=t(6914),u=t(5432),o=t(5893),d=(0,i.G)(function(e,n){let{htmlSize:t,...i}=e,d=(0,l.jC)("Input",i),c=(0,a.Lr)(i),m=(0,r.Y)(c),f=(0,u.cx)("chakra-input",e.className);return(0,o.jsx)(s.m.input,{size:t,...m,__css:d.field,ref:n,className:f})});d.displayName="Input",d.id="Input"},7747:function(e,n,t){"use strict";t.d(n,{xu:function(){return a}});var r=t(6914),i=t(6554),l=t(5893),a=(0,r.m)("div");a.displayName="Box";var s=(0,i.G)(function(e,n){let{size:t,centerContent:r=!0,...i}=e;return(0,l.jsx)(a,{ref:n,boxSize:t,__css:{...r?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...i})});s.displayName="Square",(0,i.G)(function(e,n){let{size:t,...r}=e;return(0,l.jsx)(s,{size:t,ref:n,borderRadius:"9999px",...r})}).displayName="Circle"},1103:function(e,n,t){"use strict";t.d(n,{lq:function(){return i},qq:function(){return l}});var r=t(7294);function i(...e){return n=>{e.forEach(e=>{!function(e,n){if(null!=e){if("function"==typeof e){e(n);return}try{e.current=n}catch(t){throw Error(`Cannot assign value '${n}' to ref '${e}'`)}}}(e,n)})}}function l(...e){return(0,r.useMemo)(()=>i(...e),e)}},7963:function(e,n,t){"use strict";t.d(n,{p:function(){return s}});var r=t(8266),i=t(2321),l=t(3058),a=t(7294);function s(e){let{theme:n}=(0,l.uP)(),t=(0,r.OX)();return(0,a.useMemo)(()=>(0,i.Cj)(n.direction,{...t,...e}),[e,n.direction,t])}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5165)}),_N_E=e.O()}]);