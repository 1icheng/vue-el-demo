(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vue-tree"],{faae:function(e,t,l){"use strict";l.r(t);var i=function(){var e=this,t=e._self._c;return t("div",[t("ul",[t("Item",{attrs:{model:e.treeData}})],1)])},n=[],r=function(){var e=this,t=e._self._c;return t("li",[t("div",{on:{click:e.toggle}},[e._v(" "+e._s(e.model.title)+" "),e.isFolder?t("span",[e._v("["+e._s(e.open?"-":"+")+"]")]):e._e()]),e.isFolder?t("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}]},e._l(e.model.children,(function(e){return t("Item",{key:e.title,attrs:{model:e}})})),1):e._e()])},o=[],d={name:"Item",props:{model:{type:Object,required:!0}},data(){return{open:!1}},computed:{isFolder(){return this.model.children&&this.model.children.length}},methods:{toggle(){this.isFolder&&(this.open=!this.open)}}},s=d,a=l("2877"),c=Object(a["a"])(s,r,o,!1,null,null,null),u=c.exports,p={name:"App",data(){return{treeData:{title:"Web全栈架构师",children:[{title:"Java架构师"},{title:"JS高级",children:[{title:"ES6"},{title:"动效"}]},{title:"Web全栈",children:[{title:"Vue训练营",expand:!0,children:[{title:"组件化"},{title:"源码"},{title:"docker部署"}]},{title:"React",children:[{title:"JSX"},{title:"虚拟DOM"}]},{title:"Node"}]}]}}},components:{Item:u}},h=p,m=Object(a["a"])(h,i,n,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=vue-tree.2721e71a.js.map