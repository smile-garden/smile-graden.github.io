import{a as e,_ as t}from"./index.5fc53803.js";import{d as a,r as l,b as s,t as o,a1 as n,f as d,o as i,j as r,k as u,m as c,u as p,a6 as v,B as m,e as b,x as g,F as y,y as f,l as _,q as x,a7 as k,A as h}from"./ant-design-vue.07f5f87d.js";const w=a({__name:"SelectModal",props:{tableType:{default:"checkbox"},getCheckboxProps:{default:()=>({})}},emits:["save"],setup(t,{expose:a,emit:b}){const g=t,y=[{title:"姓名",dataIndex:"userName"},{title:"年龄",dataIndex:"age"},{title:"分数",dataIndex:"score"},{title:"时间",dataIndex:"date"}],f=l({visible:!1,loading:!1,list:[],selectedRowKeys:[]});let _=[];const x=(e,t)=>{f.selectedRowKeys=e,_=t},k=s((()=>({type:g.tableType,selectedRowKeys:f.selectedRowKeys,onChange:x,getCheckboxProps:g.getCheckboxProps}))),{visible:h,loading:w,list:I}=o(f);n((()=>{f.loading=!0,e({}).then((e=>{f.loading=!1,f.list=e.list||[]})).catch((e=>{f.loading=!1,m.error(e.msg)}))}));const R=()=>{f.selectedRowKeys.length?b("save",f.selectedRowKeys,_,(()=>{f.selectedRowKeys=[],f.visible=!1})):m.error("至少选择一项")};return a({show:()=>{f.visible=!0}}),(e,t)=>{const a=d("a-table"),l=d("a-modal");return i(),r(l,{visible:p(h),"onUpdate:visible":t[0]||(t[0]=e=>v(h)?h.value=e:null),width:600,title:"选择modal",onOk:R},{default:u((()=>[c(a,{size:"small",bordered:"",loading:p(w),"data-source":p(I),columns:y,"row-key":"id","row-selection":p(k)},null,8,["loading","data-source","row-selection"])])),_:1},8,["visible"])}}}),I=a({__name:"ListTable",props:{loading:{type:Boolean,default:!1},list:{default:()=>[]}},setup(e){const t=[{title:"姓名",dataIndex:"userName"},{title:"年龄",dataIndex:"age"},{title:"分数",dataIndex:"score"},{title:"时间",dataIndex:"date"}];return(a,l)=>{const s=d("a-table");return i(),r(s,{size:"middle",bordered:"",loading:e.loading,columns:t,"row-key":"id","data-source":e.list},null,8,["loading","data-source"])}}});const R={class:"step-content"},C={class:"step-action"},K=h("Next"),T=h("Done"),P=h("Previous"),j=h("选择");var N=t(a({__name:"FormStep",setup(e){const t=b(!1),a=b(),s=()=>{var e;null==(e=a.value)||e.show()},o=b([]),n=b([]),p=e=>({disabled:o.value.includes(e.id)}),v=(e,t,a)=>{o.value=[...e,...o.value],n.value=[...t,...n.value],a()},m=b(0),h=l([{title:"One",content:"One content",des:"111"},{title:"Two",content:"Two content",des:"222"},{title:"Three",content:"Three content",des:"333"}]),N=()=>{m.value+=1},O=()=>{m.value-=1};return(e,l)=>{const o=d("a-step"),b=d("a-steps"),S=d("a-button"),z=d("a-space"),B=d("a-card");return i(),g(y,null,[c(B,{bordered:!1},{default:u((()=>[c(b,{current:m.value,class:"mb10"},{default:u((()=>[(i(!0),g(y,null,f(h,(e=>(i(),r(o,{key:e.title,title:e.title,description:e.des},null,8,["title","description"])))),128))])),_:1},8,["current"]),_("div",R,x(h[m.value].content),1),_("div",C,[c(z,null,{default:u((()=>[m.value<h.length-1?(i(),r(S,{key:0,type:"primary",onClick:N},{default:u((()=>[K])),_:1})):k("",!0),m.value==h.length-1?(i(),r(S,{key:1,type:"primary"},{default:u((()=>[T])),_:1})):k("",!0),m.value>0?(i(),r(S,{key:2,onClick:O},{default:u((()=>[P])),_:1})):k("",!0)])),_:1})])])),_:1}),c(B,{bordered:!1},{default:u((()=>[c(S,{type:"primary",onClick:s},{default:u((()=>[j])),_:1}),c(I,{class:"mt10",loading:t.value,list:n.value},null,8,["loading","list"])])),_:1}),c(w,{ref_key:"modalRef",ref:a,"get-checkbox-props":p,onSave:v},null,512)],64)}}}),[["__scopeId","data-v-e2474fe2"]]);export{N as default};
