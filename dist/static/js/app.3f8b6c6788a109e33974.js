webpackJsonp([1],{"2HKO":function(t,e){},"4U3R":function(t,e){},"5y2u":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},i,!1,function(t){a("gsu9")},null,null).exports,s=a("/ocq"),c=a("a6Am"),p={name:"PriceGraph",props:["pricedata"],data:function(){return{graphObject:{init:!1,holder:{}}}},methods:{initGraph:function(){var t={chart:{type:"line"},series:[{name:"sales",data:this.data}],xaxis:{type:"datetime",categories:this.categories}},e=new c.a(document.querySelector("#pricegraph"),t);e.render(),this.graphObject.holder=e,this.graphObject.init=!0},rerenderGraph:function(){var t={chart:{type:"line"},series:[{name:"sales",data:this.data}],xaxis:{type:"datetime",categories:this.categories}};this.graphObject.holder.updateOptions(t,!0,!0,!0),this.graphObject.holder.render()},drawGraph:function(){this.graphObject.init?this.rerenderGraph():this.initGraph()}},computed:{data:function(){for(var t=[],e=0;e<this.pricedata.length;e++)t.push(this.pricedata[e].close);return t},categories:function(){for(var t=[],e=0;e<this.pricedata.length;e++)t.push(this.pricedata[e].date);return t}},watch:{pricedata:function(){this.drawGraph()},graph:function(){this.drawGraph()}}},d={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"graph",attrs:{id:"pricegraph"}})},staticRenderFns:[]};var o=a("VU/8")(p,d,!1,function(t){a("4U3R")},"data-v-6f449ffb",null).exports,h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pricetable"},[t._m(0),t._v(" "),t._l(t.pricedata,function(e){return a("div",{key:e.date,staticClass:"row"},[a("div",{staticClass:"cell right-border"},[t._v(t._s(e.date))]),t._v(" "),a("div",{staticClass:"cell"},[t._v(t._s(e.close))])])})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"header right-border"},[this._v("Date")]),this._v(" "),e("div",{staticClass:"header"},[this._v("Price")])])}]};var l={name:"Page",components:{PriceTable:a("VU/8")({name:"PriceTable",props:["pricedata"]},h,!1,function(t){a("5y2u")},"data-v-17d14a77",null).exports,PriceGraph:o},data:function(){return{data:{pricedata:{}}}},methods:{fetchData:function(){var t=this;fetch("https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?serietype=line").then(function(t){return!0===t.ok&&200===t.status?t.json():{}}).then(function(e){if(console.log(e),0!==Object.length){t.data.pricedata=e.historical;for(var a=[],r=0;r<t.data.pricedata.length;r++)t.data.pricedata[r].date>"2015"&&a.push(t.data.pricedata[r]);t.data.pricedata=a,t.$forceUpdate()}})}},mounted:function(){this.fetchData()}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h1",[this._v("Apple Inc. Stock Historical Price")]),this._v(" "),e("price-graph",{attrs:{pricedata:this.data.pricedata}}),this._v(" "),e("price-table",{attrs:{pricedata:this.data.pricedata}})],1)},staticRenderFns:[]};var f=a("VU/8")(l,u,!1,function(t){a("2HKO")},"data-v-66e35681",null).exports;r.a.use(s.a);var v=new s.a({routes:[{path:"/",name:"Page",component:f}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:v,components:{App:n},template:"<App/>"})},gsu9:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3f8b6c6788a109e33974.js.map