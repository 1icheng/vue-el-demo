(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vue-overflow"],{"463f":function(t,i,l){},9720:function(t,i,l){},a098:function(t,i,l){"use strict";l("9720")},b024:function(t,i,l){"use strict";l.r(i);var e=function(){var t=this,i=t._self._c;return i("div",{staticClass:"container"},t._l(t.dataList,(function(t,l){return i("div",{key:l,staticClass:"list"},[i("foldText",{attrs:{showContent:t.text}})],1)})),0)},a=[],p=function(){var t=this,i=t._self._c;return i("div",{class:t.textOver?"wrap":""},[i("div",{ref:"divRef",class:t.btnFold?"inner":"inner over"},[i("span",{ref:"spanRef",staticClass:"content"},[t._v(t._s(t.showContent))])]),t.textOver?i("span",{staticClass:"btn",on:{click:function(i){t.btnFold=!t.btnFold}}},[t._v(t._s(t.btnFold?"收起":"展开"))]):t._e()])},n=[],g={data(){return{textOver:!1,btnFold:!1}},props:{showContent:{type:String,default:!1}},created(){this.$nextTick(()=>{if(this.$refs.divRef){let t=window.getComputedStyle(this.$refs.divRef).height.replace("px","");console.log("descHeight:"+t),this.textOver=t>60}})},mounted(){},methods:{}},s=g,o=(l("ecb9"),l("2877")),c=Object(o["a"])(s,p,n,!1,null,"c64b80e6",null),r=c.exports,d={components:{foldText:r},props:{},data(){return{dataList:[{text:"这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字111"},{text:"这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字222"},{text:"这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字333"},{text:"这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字444"},{text:"a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig555"},{text:"a little pig a little pig a little piga little piga little piga little piga little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig666"}]}},watch:{},computed:{},methods:{},created(){},mounted(){}},u=d,f=(l("a098"),Object(o["a"])(u,e,a,!1,null,"9e1fa968",null));i["default"]=f.exports},ecb9:function(t,i,l){"use strict";l("463f")}}]);
//# sourceMappingURL=vue-overflow.4845e4aa.js.map