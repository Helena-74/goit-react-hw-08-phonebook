"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[195],{3195:function(t,e,n){n.r(e),n.d(e,{default:function(){return V}});var r=n(2791),a=n(4942),c=n(1413),u=n(9439),s=n(9434),o="ContactForm_form__dhl+T",i="ContactForm_label__-cVXI",l="ContactForm_input__Bl93P",p="ContactForm_button__eSwX9",h=n(5861),m=n(4687),f=n.n(m),d=n(1243),v=n(9829),_=((0,v.hg)("contacts/fetchAll",function(){var t=(0,h.Z)(f().mark((function t(e,n){var r;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.Z.get("/contacts");case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",n.rejectWithValue(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}()),(0,v.hg)("contacts/addContact",function(){var t=(0,h.Z)(f().mark((function t(e,n){var r;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.Z.post("/contacts",e);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",n.rejectWithValue(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}())),x=(0,v.hg)("contacts/deleteContact",function(){var t=(0,h.Z)(f().mark((function t(e,n){var r;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.Z.delete("/contacts/".concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",n.rejectWithValue(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}()),b=n(184),j=function(){var t=(0,s.I0)(),e=(0,r.useState)({name:"",phone:""}),n=(0,u.Z)(e,2),h=n[0],m=n[1],f=function(t){var e=t.target,n=e.name,r=e.value;m((0,c.Z)((0,c.Z)({},h),{},(0,a.Z)({},n,r)))};return(0,b.jsxs)("form",{className:o,onSubmit:function(e){e.preventDefault(),t(_(h)),m({name:"",phone:""})},children:[(0,b.jsxs)("label",{className:i,children:["Name",(0,b.jsx)("input",{className:l,type:"text",name:"name",placeholder:"Name",value:h.name,onChange:f})]}),(0,b.jsxs)("label",{className:i,children:["Number",(0,b.jsx)("input",{className:l,type:"text",name:"phone",placeholder:"Phone",value:h.phone,onChange:f})]}),(0,b.jsx)("button",{className:p,type:"submit",children:"Add contact"})]})},C="ContactList_list__csErn",N="ContactList_li__dzNT+",g=n(6916),w=function(t){return t.contacts.isLoading},k=function(t){return t.contacts.error},Z=(0,g.P1)([function(t){return t.contacts.items},function(t){return t.filter}],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),y=function(t){return t.filter};var F=function(){var t=(0,s.v9)(Z),e=(0,s.I0)();return(0,b.jsx)("ul",{className:C,children:t.map((function(t){return(0,b.jsxs)("li",{className:N,children:[t.name,": ",t.phone,(0,b.jsx)("button",{onClick:function(){return e(x(t.id))},children:"Delete"})]},t.id)}))})},L="Filter_label__vEd1E",I="Filter_input__N7T3z",P=n(4808);var T=function(){var t=(0,s.v9)(y),e=(0,s.I0)();return(0,b.jsxs)("label",{className:L,children:["Find contacts by name",(0,b.jsx)("input",{className:I,type:"text",placeholder:"Filter by name",value:t,onChange:function(t){e((0,P.T)(t.target.value))}})]})},V=function(){var t=(0,s.v9)(w),e=(0,s.v9)(k);return(0,b.jsxs)("div",{children:[(0,b.jsx)("h1",{children:"Phonebook"}),(0,b.jsx)(j,{}),(0,b.jsx)("h2",{children:"Contacts"}),(0,b.jsx)(T,{}),t&&!e&&(0,b.jsx)("b",{children:"Request in progress..."}),(0,b.jsx)(F,{})]})}}}]);
//# sourceMappingURL=195.de819d2a.chunk.js.map