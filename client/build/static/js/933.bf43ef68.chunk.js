"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[933],{9518:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var r=n(2791),a=n(4165),i=n(5861),s=n(3504),c=n(6060),o=n(9746),l=n(184),u=function(){var e=(0,c.a)().logout,t=function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,l.jsx)("nav",{className:"navbar",style:{backgroundColor:"#e3f2fd"},children:(0,l.jsxs)("div",{className:"container-fluid",children:[(0,l.jsx)(s.rU,{to:"/",className:"navbar-brand",children:"Taskin MS"}),(0,l.jsx)(o.Z,{onClick:t,children:"Log out"})]})})},d=n(885),h=n(1933),x=n(6628),p=n(763),f="/api/task",v=function(e,t,n){var r=function(e,t,n){var r="";if((0,p.isEmpty)(e)||Object.keys(e).forEach((function(t){r="".concat(r,"&").concat(t,"=").concat(e[t])})),!(0,p.isEmpty)(t)){var a="";t.forEach((function(e){a="".concat((0,p.isEmpty)(a)?"":","),a="".concat(a).concat(e)})),r=(0,p.isEmpty)(r)?"sort=".concat(a):"".concat(r,"&sort=").concat(a)}return(0,p.isEmpty)(e)||(0,p.isEmpty)(t)?"?".concat(r):""}(e,t);return x.Z.get("".concat(f).concat(r))},m=n(350),j={maxWidth:"40rem",minWidth:"60%"},Z={description:"Description",priority:"Priority",dueDate:"Due Date"},y=[{value:"isDone:0",name:"active first"},{value:"isDone:-1",name:"completed first"},{value:"dueDate:1",name:"duration date"},{value:"priority:-1",name:"by higher priority"}],g=n(1413),w=function(e){switch(e){case 1:return"low";case 2:return"medium";case 3:return"high";case 4:return"hot"}},k=function(e,t){return(0,h.useQuery)(["tasks",e,t],(function(){return v(e,t)}),{keepPreviousData:!0})},b=function(e){return(0,h.useQuery)(["task",e],(function(){return t=e,x.Z.get("".concat(f,"/").concat(t));var t}),{select:function(e){var t=e.data;return t=(0,g.Z)((0,g.Z)({},t),{},{priority:w(t.priority)})}})},D=function(e){var t=e.showModal,n=e.setShowModal,r=e.taskId,a=b(r),i=a.isLoading,s=a.data;return(0,l.jsxs)(m.Z,{show:t,onHide:n,children:[(0,l.jsx)(m.Z.Header,{closeButton:!0,children:(0,l.jsx)(m.Z.Title,{children:!(0,p.isEmpty)(s)&&s.title})}),(0,l.jsx)(m.Z.Body,{children:i?(0,l.jsx)("div",{children:"Loading..."}):(0,p.isEmpty)(s)?(0,l.jsx)("div",{children:"Can't find data"}):Object.keys(Z).map((function(e,t){return"dueDate"===e?(0,l.jsxs)("div",{children:[(0,l.jsxs)("b",{children:[Z[e],": "]}),(0,l.jsx)("span",{children:new Date(s[e]).toDateString()})]},t):(0,l.jsxs)("div",{children:[(0,l.jsxs)("b",{children:[Z[e],": "]}),(0,l.jsx)("span",{children:s[e]})]},t)}))})]})},C=n(6157),N=n(5705),S={title:"",description:"",priority:2,dueDate:new Date((new Date).getTime()+864e5).toISOString()},M=[{value:1,name:"low"},{value:2,name:"medium"},{value:3,name:"high"},{value:4,name:"hot"}],E=n(5987),I=n(9719),O=n(4259),A=["onChange","defaultOption","value","options","label","inputWidth"],T=function(e){var t=e.onChange,n=(e.defaultOption,e.value),r=e.options,a=e.label,i=e.inputWidth,s=void 0===i?I.b:i,c=(0,E.Z)(e,A);return(0,l.jsxs)("div",{style:{display:"inline-block",width:s,textAlign:"left"},children:[!!a&&(0,l.jsx)(O.Z,{children:a}),(0,l.jsx)("select",(0,g.Z)((0,g.Z)({className:"form-select",style:{textAlign:"left"},value:n,onChange:t},c),{},{children:r.map((function(e){return(0,l.jsx)("option",{value:e.value,name:e.name,children:e.name},e.name)}))}))]})},_=["onChange","defaultOption","value"],L=function(e){var t=e.onChange,n=e.defaultOption,r=e.value,a=(0,E.Z)(e,_);return(0,l.jsx)(T,(0,g.Z)({options:M,onChange:t,defaultOption:n,value:r,label:"priority"},a))},F=n(9513),W=n.n(F),q=(n(8639),["startDate"]),B=function(e){e.startDate;var t=(0,E.Z)(e,q),n=(0,N.u6)().setFieldValue,r=(0,N.U$)(t),a=(0,d.Z)(r,1)[0],i=new Date(a.value).toLocaleDateString();return(0,l.jsxs)("div",{style:{margin:"1.5rem"},children:[(0,l.jsx)("p",{style:{textAlign:"left"},children:"due date"}),(0,l.jsx)(W(),(0,g.Z)((0,g.Z)((0,g.Z)({},a),t),{},{value:i,selected:new Date(a.value),minDate:new Date,dateFormat:"dd/mm/yyyy",onChange:function(e){var t=new Date(e).toISOString();n(a.name,t)},wrapperClassName:"datePicker"}))]})},H=n(4739),U=["label"],P=function(e){var t=e.label,n=(0,E.Z)(e,U),r=(0,N.U$)(n.name),a=(0,d.Z)(r,2),i=a[0],s=a[1];return(0,l.jsxs)(O.Z,{children:[t,(0,l.jsx)("textarea",(0,g.Z)((0,g.Z)({className:s.touched&&s.error?"form-control is-invalid":"form-control",id:n.name,style:{width:I.b}},i),n)),s.touched&&s.error?(0,l.jsx)("div",{style:{color:"#dc3545"},children:s.error}):null]})},V=n(6863),$=(0,V.Ry)({title:(0,V.Z_)().required("Title is required"),description:(0,V.Z_)().required("Description is required"),priority:(0,V.Rx)().required("Priority is required"),dueDate:(0,V.hT)().required("Choose the due date, please")}),J=function(e){var t=e.children;return(0,l.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:t})},Q=function(e){var t=e.setShowModal,n=k().refetch,r=(0,h.useMutation)("create-task",(function(e){return function(e){return x.Z.post(f,e)}(e)})).mutateAsync,s=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(i){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r((0,g.Z)((0,g.Z)({},i),{},{priority:+i.priority}));case 3:return t(!1),e.next=6,n();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("Failed to add task");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return(0,l.jsx)(N.J9,{initialValues:S,validationSchema:$,onSubmit:s,children:function(e){var t=e.handleChange,n=e.values;return(0,l.jsx)(N.l0,{children:(0,l.jsxs)(J,{children:[(0,l.jsx)(H.Z,{type:"text",name:"title",label:"title",onChange:t,value:n.title}),(0,l.jsx)(P,{type:"text",name:"description",label:"description",onChange:t,value:n.description}),(0,l.jsx)(L,{id:"priority",name:"priority",onChange:t,value:n.priority}),(0,l.jsx)(B,{id:"dueDate",name:"dueDate"}),(0,l.jsx)("div",{className:"mt-3",children:(0,l.jsx)(o.Z,{type:"submit",children:"Add task"})})]})})}})},R=function(e){var t=e.showModal,n=e.setShowModal;return(0,l.jsxs)(m.Z,{show:t,onHide:n,children:[(0,l.jsx)(m.Z.Header,{closeButton:!0,children:(0,l.jsx)(m.Z.Title,{children:" Add task "})}),(0,l.jsx)(m.Z.Body,{children:(0,l.jsx)(Q,{setShowModal:n})})]})},G=function(e){var t=e.setShowModal,n=e.taskId,r=k().refetch,s=b(n),c=s.isLoading,u=s.data,d=s.refetch,p=(0,h.useMutation)("edit-task",(function(e){return function(e){return x.Z.put("".concat(f,"/").concat(e._id),e)}(e)})),v=p.mutateAsync,m=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v(n);case 3:return t(!1),e.next=6,d();case 6:return e.next=8,r();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert("Failed to edit task");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return(0,l.jsx)(l.Fragment,{children:c?(0,l.jsx)("div",{children:"Loading..."}):(0,l.jsx)(N.J9,{initialValues:u,onSubmit:m,children:function(e){var t=e.handleChange,n=e.values;return(0,l.jsx)(N.l0,{children:(0,l.jsxs)(J,{children:[(0,l.jsx)(H.Z,{type:"text",name:"title",label:"title",onChange:t,value:n.title}),(0,l.jsx)(P,{type:"text",name:"description",label:"description",onChange:t,value:n.description}),(0,l.jsx)(L,{id:"priority",name:"priority",onChange:t,value:n.priority}),(0,l.jsx)(B,{id:"dueDate",name:"dueDate"}),(0,l.jsx)("div",{className:"mt-3",children:(0,l.jsx)(o.Z,{type:"submit",children:"Edit"})})]})})}})})},z=function(e){var t=e.showModal,n=e.setShowModal,r=e.taskId;return(0,l.jsxs)(m.Z,{show:t,onHide:n,children:[(0,l.jsx)(m.Z.Header,{closeButton:!0,children:(0,l.jsx)(m.Z.Title,{children:" Edit task "})}),(0,l.jsx)(m.Z.Body,{children:(0,l.jsx)(G,{setShowModal:n,taskId:r})})]})},K=function(e){var t=e.task,n=e.sorter,s=(0,r.useState)(!1),c=(0,d.Z)(s,2),o=c[0],u=c[1],p=(0,r.useState)(!1),v=(0,d.Z)(p,2),m=v[0],j=v[1],Z=(0,r.useState)(!1),y=(0,d.Z)(Z,2),g=y[0],w=y[1],b=k({},n).refetch,N=(0,h.useMutation)(["delete-task",t._id],(function(){return e=t._id,x.Z.delete("".concat(f,"/").concat(e));var e})).mutateAsync,S=(0,h.useMutation)(["change-is-done",t._id],(function(){return e=t._id,x.Z.put("".concat(f,"/changeIsDone/").concat(e));var e})).mutateAsync,M=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:return e.next=4,b();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:return e.next=4,b();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,l.jsxs)(l.Fragment,{children:[g&&(0,l.jsx)(D,{showModal:g,setShowModal:w,taskId:t._id}),o&&(0,l.jsx)(z,{showModal:o,setShowModal:u,taskId:t._id}),(0,l.jsxs)("div",{className:"card shadow p-2 m-3 d-flex\n          ".concat(t.isDone?"shadow-sm":"card-hover card-active shadow","\n          "),style:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:64},onClick:function(e){"BUTTON"!==e.target.tagName&&"INPUT"!==e.target.tagName&&w(!0)},onMouseEnter:function(){return j(!0)},onMouseLeave:function(){return j(!1)},children:[(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",checked:t.isDone,onChange:E,id:"is-done-checkbox"}),(0,l.jsx)("label",{className:"form-check-label ".concat(t.isDone&&"done-task-title"),children:t.title})]}),m&&(0,l.jsxs)("div",{className:"ms-2",children:[(0,l.jsx)(C.Z,{variant:"outline-danger",style:{height:25,width:60,padding:"0px 5px"},onClick:M,children:"Delete"}),(0,l.jsx)("br",{}),(0,l.jsx)(C.Z,{variant:"outline-warning",style:{height:25,width:60,padding:"0px 5px"},onClick:function(){u(!0)},children:"Edit"})]})]})]})},X=["onChange","value","inputWidth"],Y=function(e){var t=e.onChange,n=e.value,r=e.inputWidth,a=(0,E.Z)(e,X);return(0,l.jsx)(T,(0,g.Z)({inputWidth:r,options:y,defaultOption:y[0],value:n,onChange:t},a))},ee=function(){var e=(0,r.useState)(!1),t=(0,d.Z)(e,2),n=t[0],a=t[1],i=(0,r.useState)(y[0]),s=(0,d.Z)(i,2),c=s[0],u=s[1],h=k({},[c.value]),x=h.isLoading,p=h.data,f=h.isError;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(R,{showModal:n,setShowModal:a}),(0,l.jsxs)("div",{className:"card shadow mt-3",style:j,children:[(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"10px 18px 0 10px"},children:[(0,l.jsx)(o.Z,{onClick:function(){return a(!0)},children:"+ Add task"}),(0,l.jsx)(Y,{inputWidth:150,value:c.value,onChange:function(e){u({value:e.target.value,name:e.target.options[e.target.selectedIndex].text})}})]}),x?(0,l.jsx)("div",{children:"LOADING..."}):p.data.length?p.data.map((function(e){return(0,l.jsx)(K,{task:e,sorter:[c.value]},e._id)})):f?(0,l.jsx)("h4",{className:"m-3",children:"Error Occured!"}):(0,l.jsx)("h4",{className:"m-3",children:"No tasks yet, add one!"})]})]})},te=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u,{}),(0,l.jsx)(J,{children:(0,l.jsx)(ee,{})})]})}},9746:function(e,t,n){var r=n(1413),a=n(5987),i=(n(2791),n(184)),s=["children"];t.Z=function(e){var t=e.children,n=(0,a.Z)(e,s);return(0,i.jsx)("button",(0,r.Z)((0,r.Z)({type:"button ",className:"btn btn-".concat(n.variant?n.variant:"primary"," m-2")},n),{},{children:t}))}},4259:function(e,t,n){n(2791);var r=n(184);t.Z=function(e){var t=e.children;return(0,r.jsx)("label",{className:"form-label",style:{textAlign:"left"},children:t})}},4739:function(e,t,n){var r=n(1413),a=n(885),i=n(5987),s=(n(2791),n(9719)),c=n(5705),o=n(4259),l=n(184),u=["label"];t.Z=function(e){var t=e.label,n=(0,i.Z)(e,u),d=(0,c.U$)(n.name),h=(0,a.Z)(d,2),x=h[0],p=h[1];return(0,l.jsxs)(o.Z,{children:[t,(0,l.jsx)("input",(0,r.Z)((0,r.Z)({className:p.touched&&p.error?"form-control is-invalid":"form-control",id:n.name,style:{width:s.b}},x),n)),p.touched&&p.error?(0,l.jsx)("div",{style:{color:"#dc3545"},children:p.error}):null]})}},9719:function(e,t,n){n.d(t,{b:function(){return r}});var r=250}}]);
//# sourceMappingURL=933.bf43ef68.chunk.js.map