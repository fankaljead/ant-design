webpackJsonp([105,357],{705:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(23),a(22)),o=t(p),e=a(1),c=t(e),u=a(2);t(u);n.exports={content:[["p","\u914d\u7f6e\u9009\u62e9\u6846\u7684\u9ed8\u8ba4\u5c5e\u6027\u3002"]],meta:{order:3,title:"\u9009\u62e9\u6846\u5c5e\u6027",filename:"components/table/demo/row-selection-props.md",id:"components-table-demo-row-selection-props"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Table <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> columns <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u59d3\u540d\'</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'name\'</span><span class="token punctuation" >,</span>\n  render<span class="token punctuation" >:</span> text <span class="token operator" >=</span><span class="token operator" >></span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u5e74\u9f84\'</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u4f4f\u5740\'</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'address\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> data <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'1\'</span><span class="token punctuation" >,</span>\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u80e1\u5f66\u658c\'</span><span class="token punctuation" >,</span>\n  age<span class="token punctuation" >:</span> <span class="token number" >32</span><span class="token punctuation" >,</span>\n  address<span class="token punctuation" >:</span> <span class="token string" >\'\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'2\'</span><span class="token punctuation" >,</span>\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u80e1\u5f66\u7956\'</span><span class="token punctuation" >,</span>\n  age<span class="token punctuation" >:</span> <span class="token number" >42</span><span class="token punctuation" >,</span>\n  address<span class="token punctuation" >:</span> <span class="token string" >\'\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'3\'</span><span class="token punctuation" >,</span>\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u674e\u5927\u5634\'</span><span class="token punctuation" >,</span>\n  age<span class="token punctuation" >:</span> <span class="token number" >32</span><span class="token punctuation" >,</span>\n  address<span class="token punctuation" >:</span> <span class="token string" >\'\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token comment" spellcheck="true">// \u901a\u8fc7 rowSelection \u5bf9\u8c61\u8868\u660e\u9700\u8981\u884c\u9009\u62e9</span>\n<span class="token keyword" >const</span> rowSelection <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n  <span class="token function" >getCheckboxProps</span><span class="token punctuation" >(</span>record<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      disabled<span class="token punctuation" >:</span> record<span class="token punctuation" >.</span>name <span class="token operator" >===</span> <span class="token string" >\'\u80e1\u5f66\u7956\'</span><span class="token punctuation" >,</span>    <span class="token comment" spellcheck="true">// \u914d\u7f6e\u65e0\u6cd5\u52fe\u9009\u7684\u5217</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Table</span> <span class="token attr-name" >rowSelection</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>rowSelection<span class="token punctuation" >}</span></span> <span class="token attr-name" >columns</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>columns<span class="token punctuation" >}</span></span> <span class="token attr-name" >dataSource</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>data<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=[{title:"\u59d3\u540d",dataIndex:"name",render:function(n){return c["default"].createElement("a",{href:"#"},n)}},{title:"\u5e74\u9f84",dataIndex:"age"},{title:"\u4f4f\u5740",dataIndex:"address"}],s=[{key:"1",name:"\u80e1\u5f66\u658c",age:32,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7"},{key:"2",name:"\u80e1\u5f66\u7956",age:42,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7"},{key:"3",name:"\u674e\u5927\u5634",age:32,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7"}],a={getCheckboxProps:function(n){return{disabled:"\u80e1\u5f66\u7956"===n.name}}};return c["default"].createElement(o["default"],{rowSelection:a,columns:n,dataSource:s})}}}});