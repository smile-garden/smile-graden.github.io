import{a8 as e,a9 as a,aa as l,ab as r,ac as o,ad as u,ae as t,af as n,ag as s,ah as d,ai as m,aj as i,d as c,r as f,f as p,o as v,j as b,k as _,m as h,a5 as y,ak as g,e as q,x as k,y as F,l as x,u as C,al as U,a7 as w,F as M,am as N,A as L,b as P,E as j}from"./ant-design-vue.07f5f87d.js";import{_ as I}from"./index.5fc53803.js";function R(e){return null==e?[]:function(e,a){return r(a,(function(a){return e[a]}))}(e,o(e))}var S=u?u.iterator:void 0;function T(r){if(!r)return[];if(t(r))return function(r){return"string"==typeof r||!e(r)&&a(r)&&"[object String]"==l(r)}(r)?n(r):s(r);if(S&&r[S])return function(e){for(var a,l=[];!(a=e.next()).done;)l.push(a.value);return l}(r[S]());var o=d(r);return("[object Map]"==o?m:"[object Set]"==o?i:R)(r)}const Y=c({__name:"FormCommon",props:{formItemLayout:{type:Object,required:!0}},setup(e,{expose:a}){const{useForm:l}=g,r=f({common1:"",common2:"",common3:""}),o=f({common1:[{required:!0,message:"请输入common1"}],common2:[{required:!0,message:"请输入common2"}],common3:[{required:!0,message:"请输入common3"}]}),{resetFields:u,validate:t,validateInfos:n}=l(r,o);return a({resetFields:u,validate:t,validateInfos:n}),(a,l)=>{const o=p("a-input"),u=p("a-form-item"),t=p("a-form");return v(),b(t,y({ref:"formRef",model:r},e.formItemLayout),{default:_((()=>[h(u,{label:"common1",required:""},{default:_((()=>[h(o,{value:r.common1,"onUpdate:value":l[0]||(l[0]=e=>r.common1=e),valueModifiers:{trim:!0},placeholder:"请输入common1"},null,8,["value"])])),_:1}),h(u,{label:"common2",required:""},{default:_((()=>[h(o,{value:r.common2,"onUpdate:value":l[1]||(l[1]=e=>r.common2=e),valueModifiers:{trim:!0},placeholder:"请输入common2"},null,8,["value"])])),_:1}),h(u,{label:"common3",required:""},{default:_((()=>[h(o,{value:r.common3,"onUpdate:value":l[2]||(l[2]=e=>r.common3=e),valueModifiers:{trim:!0},placeholder:"请输入common3"},null,8,["value"])])),_:1})])),_:1},16,["model"])}}});const D={class:"box-item"},A=L(" 新增 "),O=L("Submit"),B=L("Reset");var E=I(c({__name:"FormField",props:{labelName:{default:"联系人"},showSubmit:{type:Boolean,default:!1}},setup(e,{expose:a}){const l={wrapperCol:{lg:{offset:9,span:7},sm:{offset:7,span:17}}},r={labelCol:{lg:{span:9},sm:{span:7}},wrapperCol:{lg:{span:7},sm:{span:17}}},o=q(),u=f({fieldList:[{key:1,valueName:""}]}),t=()=>{u.fieldList.push({valueName:"",key:Date.now()})},n=()=>o.value.validate(),s=()=>o.value.resetFields(),d=()=>{n().then((e=>{})).catch((e=>{}))};return a({submit:n,resetForm:s}),(a,n)=>{const m=p("a-input"),i=p("a-form-item"),c=p("a-button"),f=p("a-space"),g=p("a-form");return v(),b(g,y({ref_key:"formRef",ref:o,model:u},l),{default:_((()=>[(v(!0),k(M,null,F(u.fieldList,((a,l)=>(v(),b(i,y({key:a.key},0===l?r:{},{label:0===l?e.labelName:"",name:["fieldList",l,"valueName"],rules:{required:!0,message:"please input field",trigger:"change"}}),{default:_((()=>[x("div",D,[h(m,{value:a.valueName,"onUpdate:value":e=>a.valueName=e,placeholder:"请输入"},null,8,["value","onUpdate:value"]),u.fieldList.length>1?(v(),b(C(U),{key:0,class:"box-action",onClick:e=>(e=>{const a=u.fieldList.indexOf(e);-1!==a&&u.fieldList.splice(a,1)})(a)},null,8,["onClick"])):w("",!0)])])),_:2},1040,["label","name"])))),128)),h(i,null,{default:_((()=>[h(c,{type:"dashed",style:{width:"100%"},onClick:t},{default:_((()=>[h(C(N)),A])),_:1})])),_:1}),e.showSubmit?(v(),b(i,{key:0},{default:_((()=>[h(f,null,{default:_((()=>[h(c,{type:"primary",onClick:d},{default:_((()=>[O])),_:1}),h(c,{onClick:s},{default:_((()=>[B])),_:1})])),_:1})])),_:1})):w("",!0)])),_:1},16,["model"])}}}),[["__scopeId","data-v-9f40626c"]]);const V=L("个体工商户"),z=L("独资企业"),G=L("注册公司"),H=L("重置"),J=c({__name:"FormAdvanced",setup(e){const{useForm:a}=g,l={labelCol:{lg:{span:9},sm:{span:7}},wrapperCol:{lg:{span:7},sm:{span:17}}},r=f({companyName:"",type:"",number:"",legalPerson:"",idcard:"",applyTime:"",phone:"",email:"",address:""}),o=f({companyName:[{required:!0,message:"请输入公司名称"}],type:[{required:!0,message:"请选择公司类型"}],number:[{required:!0,message:"请输入员工数量"}],legalPerson:[{required:!0,message:"请输入法人"}],idcard:[{required:!0,message:"请输入身份证号"}],applyTime:[{required:!0,message:"请选择申请时间"}],phone:[{required:!0,message:"请输入电话"}],email:[{required:!0,message:"请输入邮箱"}],address:[{required:!0,message:"请输入办公地址"}]}),{resetFields:u,validate:t,validateInfos:n,mergeValidateInfo:s}=a(r,o),d=q(),m=q(),i=q(),c=()=>{const e=new Promise(((e,a)=>{t().then((a=>{e(a)})).catch((e=>{a(e)}))})),a=new Promise(((e,a)=>{var l;null==(l=i.value)||l.validate().then((a=>{e(a)})).catch((e=>{a(e)}))})),l=new Promise(((e,a)=>{var l;null==(l=d.value)||l.submit().then((a=>{e(a)})).catch((e=>{a(e)}))})),r=new Promise(((e,a)=>{var l;null==(l=m.value)||l.submit().then((a=>{e(a)})).catch((e=>{a(e)}))}));Promise.all([a,e,l,r]).then((e=>{})).catch((e=>{}))},k=()=>{var e,a,l;u(),null==(e=i.value)||e.resetFields(),null==(a=d.value)||a.resetForm(),null==(l=m.value)||l.resetForm()},F=P((()=>{var e;const a=[...T(n),...T(null==(e=i.value)?void 0:e.validateInfos)];return s(a)}));return(e,a)=>{const o=p("a-input"),u=p("a-form-item"),t=p("a-radio"),n=p("a-radio-group"),s=p("a-input-number"),f=p("a-date-picker"),g=p("a-textarea"),q=p("a-form"),x=p("a-divider"),U=p("a-button"),w=p("a-card");return v(),b(w,{bordered:!1},{default:_((()=>[h(q,y(l,{autocomplete:"off","scroll-to-first-error":{block:"end"}}),{default:_((()=>[h(u,{label:"公司名称",required:""},{default:_((()=>[h(o,{value:r.companyName,"onUpdate:value":a[0]||(a[0]=e=>r.companyName=e),valueModifiers:{trim:!0},placeholder:"请输入公司名称",maxlength:10},null,8,["value"])])),_:1}),h(u,{label:"公司类型",required:""},{default:_((()=>[h(n,{value:r.type,"onUpdate:value":a[1]||(a[1]=e=>r.type=e),placeholder:"请输入公司类型"},{default:_((()=>[h(t,{value:1},{default:_((()=>[V])),_:1}),h(t,{value:3},{default:_((()=>[z])),_:1})])),_:1},8,["value"])])),_:1}),h(u,{label:"员工数量",required:""},{default:_((()=>[h(s,{value:r.number,"onUpdate:value":a[2]||(a[2]=e=>r.number=e),placeholder:"请输入",precision:0,min:0,max:999999},null,8,["value"])])),_:1}),h(u,{label:"法人",required:""},{default:_((()=>[h(o,{value:r.legalPerson,"onUpdate:value":a[3]||(a[3]=e=>r.legalPerson=e),valueModifiers:{trim:!0},placeholder:"请输入法人"},null,8,["value"])])),_:1}),h(u,{label:"身份证号",required:""},{default:_((()=>[h(o,{value:r.idcard,"onUpdate:value":a[4]||(a[4]=e=>r.idcard=e),valueModifiers:{trim:!0},placeholder:"请输入身份证号"},null,8,["value"])])),_:1}),h(u,{label:"申请时间",required:""},{default:_((()=>[h(f,{value:r.applyTime,"onUpdate:value":a[5]||(a[5]=e=>r.applyTime=e),placeholder:"请输入申请时间","value-format":"YYYY-MM-DD"},null,8,["value"])])),_:1}),h(u,{label:"电话",required:""},{default:_((()=>[h(o,{value:r.phone,"onUpdate:value":a[6]||(a[6]=e=>r.phone=e),valueModifiers:{trim:!0},placeholder:"请输入电话"},null,8,["value"])])),_:1}),h(u,{label:"邮箱",required:""},{default:_((()=>[h(o,{value:r.email,"onUpdate:value":a[7]||(a[7]=e=>r.email=e),valueModifiers:{trim:!0},placeholder:"请输入邮箱"},null,8,["value"])])),_:1}),h(u,{label:"办公地址",required:""},{default:_((()=>[h(g,{value:r.address,"onUpdate:value":a[8]||(a[8]=e=>r.address=e),valueModifiers:{trim:!0},placeholder:"请输入办公地址",maxlength:100},null,8,["value"])])),_:1})])),_:1},16),h(Y,{ref_key:"commonRef",ref:i,"form-item-layout":l},null,512),h(x),h(E,{ref_key:"contactRef",ref:d},null,512),h(x),h(E,{ref_key:"websiteRef",ref:m,"label-name":"网址"},null,512),h(u,y({"wrapper-col":{span:24},style:{"text-align":"center"}},C(F)),{default:_((()=>[h(U,{type:"primary",onClick:j(c,["prevent"])},{default:_((()=>[G])),_:1},8,["onClick"]),h(U,{class:"ml10",onClick:k},{default:_((()=>[H])),_:1})])),_:1},16)])),_:1})}}});export{J as default};
