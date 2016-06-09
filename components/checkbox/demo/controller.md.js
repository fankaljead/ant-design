webpackJsonp([293,357],{512:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(6),a(5)),o=t(p),c=(a(41),a(40)),e=t(c),u=a(1),l=t(u),k=a(2);t(k);n.exports={content:[["p","\u8054\u52a8 checkbox\u3002"]],meta:{order:2,title:"\u548c\u5916\u90e8\u7ec4\u4ef6\u901a\u4fe1",filename:"components/checkbox/demo/controller.md",id:"components-checkbox-demo-controller"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Checkbox<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      checked<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n      disabled<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> label <span class="token operator" >=</span> <span class="token template-string" ><span class="token string" >`</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>checked <span class="token operator" >?</span> <span class="token string" >\'\u9009\u4e2d\'</span> <span class="token punctuation" >:</span> <span class="token string" >\'\u53d6\u6d88\'</span><span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >-</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>disabled <span class="token operator" >?</span> <span class="token string" >\'\u4e0d\u53ef\u7528\'</span> <span class="token punctuation" >:</span> <span class="token string" >\'\u53ef\u7528\'</span><span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginBottom<span class="token punctuation" >:</span> <span class="token string" >\'20px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Checkbox</span> <span class="token attr-name" >checked</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>checked<span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >disabled</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>disabled<span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onChange<span class="token punctuation" >}</span></span>\n          <span class="token punctuation" >></span></span>\n            <span class="token punctuation" >{</span>label<span class="token punctuation" >}</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Checkbox</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span>\n            <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>toggleChecked<span class="token punctuation" >}</span></span>\n          <span class="token punctuation" >></span></span>\n            <span class="token punctuation" >{</span><span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>checked <span class="token operator" >?</span> <span class="token string" >\'\u9009\u4e2d\'</span> <span class="token punctuation" >:</span> <span class="token string" >\'\u53d6\u6d88\'</span><span class="token punctuation" >}</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token string" >\'10px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span>\n            <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>toggleDisable<span class="token punctuation" >}</span></span>\n          <span class="token punctuation" >></span></span>\n            <span class="token punctuation" >{</span><span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>disabled <span class="token operator" >?</span> <span class="token string" >\'\u4e0d\u53ef\u7528\'</span> <span class="token punctuation" >:</span> <span class="token string" >\'\u53ef\u7528\'</span><span class="token punctuation" >}</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >toggleChecked</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> checked<span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>checked <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >toggleDisable</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> disabled<span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>disabled <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onChange</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'checked = \'</span><span class="token punctuation" >,</span> e<span class="token punctuation" >.</span>target<span class="token punctuation" >.</span>checked<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      checked<span class="token punctuation" >:</span> e<span class="token punctuation" >.</span>target<span class="token punctuation" >.</span>checked<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=l["default"].createClass({displayName:"App",getInitialState:function(){return{checked:!0,disabled:!1}},render:function(){var n=(this.state.checked?"\u9009\u4e2d":"\u53d6\u6d88")+"-"+(this.state.disabled?"\u4e0d\u53ef\u7528":"\u53ef\u7528");return l["default"].createElement("div",null,l["default"].createElement("p",{style:{marginBottom:"20px"}},l["default"].createElement(e["default"],{checked:this.state.checked,disabled:this.state.disabled,onChange:this.onChange},n)),l["default"].createElement("p",null,l["default"].createElement(o["default"],{type:"primary",size:"small",onClick:this.toggleChecked},this.state.checked?"\u53d6\u6d88":"\u9009\u4e2d"),l["default"].createElement(o["default"],{style:{marginLeft:"10px"},type:"primary",size:"small",onClick:this.toggleDisable},this.state.disabled?"\u53ef\u7528":"\u4e0d\u53ef\u7528")))},toggleChecked:function(){this.setState({checked:!this.state.checked})},toggleDisable:function(){this.setState({disabled:!this.state.disabled})},onChange:function(n){console.log("checked = ",n.target.checked),this.setState({checked:n.target.checked})}});return l["default"].createElement(n,null)}}}});