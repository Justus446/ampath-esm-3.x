"use strict";(globalThis.webpackChunk_openmrs_esm_form_builder_app=globalThis.webpackChunk_openmrs_esm_form_builder_app||[]).push([[626],{40626:(e,r,n)=>{n.r(r),n.d(r,{ProgramEnrollmentSubmissionAction:()=>c,default:()=>d});var t=n(81132),o=n(11261),l=n(27484),i=n.n(l);function a(e,r,n,t,o,l,i){try{var a=e[l](i),s=a.value}catch(e){return void n(e)}a.done?r(s):Promise.resolve(s).then(t,o)}var s,u,c={applyAction:(s=function(e,r){var n,l,a,s,u,c,d,p,m,f,h,b,v,g,w,P,y;return function(e,r){var n,t,o,l,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function a(l){return function(a){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,t&&(o=2&l[0]?t.return:l[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,l[1])).done)return o;switch(t=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,t=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(6===l[0]&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=r.call(e,i)}catch(e){l=[6,e],t=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,a])}}}(this,(function(E){switch(E.label){case 0:return n=e.patient,l=e.encounters,a=e.sessionMode,p=l[0],m=p.location.uuid,"view"===a?[2]:(f=null===(u=p.obs)||void 0===u||null===(s=u.find((function(e){return e.formFieldPath.includes(r.enrollmentDate)})))||void 0===s?void 0:s.value,h=null===(d=p.obs)||void 0===d||null===(c=d.find((function(e){return e.formFieldPath.includes(r.completionDate)})))||void 0===c?void 0:c.value,(b=r.programUuid)?(v=new AbortController,g={patient:n.id,program:b,dateEnrolled:f?i()(f).format():null,dateCompleted:h?i()(h).format():null,location:m},"enter"!==a?[3,2]:[4,(0,o.getPatientEnrolledPrograms)(n.id)]):[3,5]);case 1:if((w=E.sent())&&w.results.some((function(e){return e.program.uuid===b&&null===e.dateCompleted})))throw new Error("Cannot enroll patient to program. Patient already has an active enrollment");return(0,o.createProgramEnrollment)(g,v).subscribe((function(e){201===e.status&&(0,t.showToast)({critical:!0,kind:"success",description:"It is now visible in the Programs table",title:"Program enrollment saved"})}),(function(e){(0,t.showToast)({title:"Error saving program enrollment",kind:"error",critical:!1,description:null==e?void 0:e.message})})),[3,4];case 2:return[4,(0,o.getPatientEnrolledPrograms)(n.id)];case 3:P=E.sent(),y=null,P&&(y=P.results.find((function(e){return e.program.uuid===b&&null===e.dateCompleted}))),y&&(g.dateEnrolled||(g.dateEnrolled=y.dateEnrolled),(0,o.updateProgramEnrollment)(y.uuid,g,v).subscribe((function(e){200===e.status&&(0,t.showToast)({critical:!0,kind:"success",description:"Changes to the program are now visible in the Programs table",title:"Program enrollment updated"})}),(function(e){(0,t.showToast)({title:"Error saving enrollment",kind:"error",critical:!1,description:null==e?void 0:e.message})}))),E.label=4;case 4:return[3,6];case 5:throw new Error("Please provide Program Uuid to enroll patient to.");case 6:return[2]}}))},u=function(){var e=this,r=arguments;return new Promise((function(n,t){var o=s.apply(e,r);function l(e){a(o,n,t,l,i,"next",e)}function i(e){a(o,n,t,l,i,"throw",e)}l(void 0)}))},function(e,r){return u.apply(this,arguments)})};const d=c}}]);