import{jsx as e,jsxs as t}from"react/jsx-runtime";import n from"react";import o from"react-dom";import r from"vue";function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t.indexOf(n=s[o])>=0||(r[n]=e[n]);return r}var a={vueInstanceOptions:{}};const c=["component"],i=["component","on"],u=(t,n)=>t("vuera-internal-react-wrapper",{props:{component:()=>e("div",{children:n},void 0)}});class d extends n.Component{constructor(e){super(e),this.currentVueComponent=e.component;const t=this.createVueInstance,n=this;this.createVueInstance=function(e,o,r){t(e,n,o,r)}}componentWillReceiveProps(e){const{component:t}=e,n=p(e,c);this.currentVueComponent!==t&&this.updateVueComponent(this.props.component,t),Object.assign(this.vueInstance.$data,n)}componentWillUnmount(){this.vueInstance.$destroy()}createVueInstance(e,t,n,o){const c=t.props,{component:d,on:m}=c,l=p(c,i);t.vueInstance=new r(s({el:e,data:l},a.vueInstanceOptions,{render(e){return e("vuera-internal-component-name",{props:this.$data,on:m},[u(e,this.children)])},components:{"vuera-internal-component-name":d,"vuera-internal-react-wrapper":h}}))}updateVueComponent(e,t){this.currentVueComponent=t,this.vueInstance.$options.components["vuera-internal-component-name"]=t,this.vueInstance.$forceUpdate()}render(){return e("div",{ref:this.createVueInstance},void 0)}}const m=["children",""],l=t=>{var o;return(o=class extends n.Component{constructor(e){super(e),this.state=s({},e)}wrapVueChildren(e){return e?{render:t=>t("div",e)}:null}render(){const n=this.state,{children:o}=n,r=p(n,m),a=this.wrapVueChildren(o);return e(t,s({},r,{children:a&&e(d,{component:a},void 0)}),void 0)}}).displayName=`ReactInVue${t.displayName||t.name||"Component"}`,o};var h={name:"ReactInVueRawVueComp",props:["component","passedProps"],render(e){return this.createElement=e,e("div",{ref:"react"})},methods:{mountReactComponent(t){const n=this,r=void 0!==n.$slots.default?{children:n.$slots.default}:{};let p;const a=l(t);p=t=>e(a,s({},t,{ref:e=>n.reactComponentRef=e}),void 0),o.render(e(p,s({},n.$props.passedProps,n.$attrs,n.$listeners,r),void 0),n.$refs.react)}},mounted(){this.mountReactComponent(this.$props.component)},beforeDestroy(){o.unmountComponentAtNode(this.$refs.react)},updated(){this.reactComponentRef.setState(void 0!==this.$slots.default?{children:this.$slots.default}:{children:null})},inheritAttrs:!1,watch:{$attrs:{handler(){this.reactComponentRef.setState(s({},this.$attrs))},deep:!0},"$props.component":{handler(e){this.mountReactComponent(e)}},$listeners:{handler(){this.reactComponentRef.setState(s({},this.$listeners))},deep:!0},"$props.passedProps":{handler(){this.reactComponentRef.setState(s({},this.$props.passedProps))},deep:!0}}};function f(e){return!("object"==typeof e&&!function(e){return e.$$typeof&&"Symbol(react.forward_ref)"===e.$$typeof.toString()}(e)||"function"==typeof e&&e.prototype&&(e.prototype.constructor.super&&e.prototype.constructor.super.isVue||e.prototype instanceof r))}function v(e){return{components:{ReactWrapper:h},props:["passedProps"],inheritAttrs:!1,render(t){return t("react-wrapper",{props:{component:e,passedProps:this.$props.passedProps},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}}}var $={install(e,t){console.log("Installing Vuera VuePlugin");const n=e.config.optionMergeStrategies.components;e.config.optionMergeStrategies.components=function(e,...t){const o=n(e,...t),r=o?Object.entries(o).reduce((e,[t,n])=>s({},e,{[t]:f(n)?v(n):n}),{}):o;return Object.assign(o,r)},e.prototype.constructor.isVue=!0}};function y(t){return f(t)?t:n=>e(d,s({},n,{component:t}),void 0)}function V(e,t,o){return f(e)?n.createElement(e,t,o):n.createElement(d,Object.assign({component:e},t),o)}const C=({name:e})=>t("div",{children:["Hey ",e,", say hello to TypeScript."]},void 0);export{v as ReactInVue,h as ReactWrapper,C as SayHello,y as VueInReact,$ as VuePlugin,d as VueWrapper,V as __vueraReactResolver,a as config};
//# sourceMappingURL=index.modern.js.map
