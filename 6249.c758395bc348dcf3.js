"use strict";(self.webpackChunkadminDesign=self.webpackChunkadminDesign||[]).push([[6249],{6249:(K,x,r)=>{r.r(x),r.d(x,{NewsModule:()=>pt});var e=r(6895),I=r(7466),h=r(2453),T=r(4144),p=r(4006),C=r(6257),D=r(5593),A=r(1795),b=r(5121),y=r(4859),o=r(2137),s=r(7729),N=r(1236),O=r(9764),Z=r(2210),E=r(8796),P=r(9602),F=r(3238),R=r(5362),u=r(1167),w=r(3608),n=r(3214),c=r(2124),i=r(7957),d=r(7392),g=r(4850),S=r(6338),U=r(9549),G=r(3848),J=r(3546),B=r(1740),k=r(4364),H=r(5226),M=r.n(H),t=r(4650),Y=r(2820),Q=r(6102),j=r(5620),W=r(805);function V(m,_){1&m&&(t.TgZ(0,"mat-icon",32),t._uU(1,"trending_up"),t.qZA(),t._uU(2," News & Announcements Entry "))}function z(m,_){1&m&&(t.TgZ(0,"mat-icon",32),t._uU(1,"list"),t.qZA(),t._uU(2," View News & Announcements "))}function X(m,_){if(1&m){const a=t.EpF();t.TgZ(0,"div",33)(1,"button",34),t.NdJ("click",function(){t.CHM(a);const f=t.oxw(),v=t.MAs(42);return t.KtG(f.clear(v))}),t.qZA(),t.TgZ(2,"span",35),t._UZ(3,"i",36),t.TgZ(4,"input",37),t.NdJ("input",function(f){t.CHM(a);const v=t.oxw(),L=t.MAs(42);return t.KtG(L.filterGlobal(v.getEventValue(f),"contains"))}),t.qZA()()()}}function $(m,_){1&m&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"ID"),t.qZA(),t.TgZ(3,"th",38),t._uU(4,"News Description "),t._UZ(5,"p-sortIcon",39),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Download Attechment "),t.qZA(),t.TgZ(8,"th",40),t._uU(9,"Status "),t._UZ(10,"p-sortIcon",41),t.qZA(),t.TgZ(11,"th",42),t._uU(12,"Date & time "),t._UZ(13,"p-sortIcon",43),t.qZA(),t.TgZ(14,"th"),t._uU(15," Action "),t.qZA(),t.TgZ(16,"th",44),t._uU(17,"Edit "),t._UZ(18,"p-sortIcon",45),t.qZA(),t.TgZ(19,"th",46),t._uU(20,"Delete "),t._UZ(21,"p-sortIcon",47),t.qZA()())}function q(m,_){1&m&&t._UZ(0,"div")}function tt(m,_){if(1&m&&(t.TgZ(0,"span")(1,"a",55),t._UZ(2,"i",56),t.qZA()()),2&m){const a=t.oxw().$implicit,l=t.oxw();t.xp6(1),t.hYB("href","",l.defaultPicture,"",a.file_url,"",t.LSH)}}function et(m,_){}function it(m,_){1&m&&t._UZ(0,"div")}function nt(m,_){if(1&m){const a=t.EpF();t.TgZ(0,"button",57),t.NdJ("click",function(){t.CHM(a);const f=t.oxw().$implicit,v=t.oxw();return t.KtG(v.onChange(v.inActiveStatus,f.id))}),t._uU(1,"Active"),t.qZA()}}function st(m,_){if(1&m){const a=t.EpF();t.TgZ(0,"button",58),t.NdJ("click",function(){t.CHM(a);const f=t.oxw().$implicit,v=t.oxw();return t.KtG(v.onChange(v.activeStatus,f.id))}),t._uU(1,"Inactive"),t.qZA()}}function at(m,_){if(1&m){const a=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t.YNc(6,q,1,0,"div",48),t.TgZ(7,"p"),t.YNc(8,tt,3,2,"ng-template",null,49,t.W1O),t.qZA(),t.TgZ(10,"p"),t.YNc(11,et,0,0,"ng-template",null,50,t.W1O),t.qZA()(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t.YNc(18,it,1,0,"div",48),t.TgZ(19,"p"),t.YNc(20,nt,2,0,"ng-template",null,51,t.W1O),t.qZA(),t.TgZ(22,"p"),t.YNc(23,st,2,0,"ng-template",null,52,t.W1O),t.qZA()(),t.TgZ(25,"td")(26,"p-button",53),t.NdJ("click",function(){const v=t.CHM(a).$implicit,L=t.oxw();return t.KtG(L.editNews(v))}),t.qZA()(),t.TgZ(27,"td")(28,"p-button",54),t.NdJ("click",function(){const v=t.CHM(a).$implicit,L=t.oxw();return t.KtG(L.deleteNews(v))}),t.qZA()()()}if(2&m){const a=_.$implicit,l=_.rowIndex,f=t.MAs(9),v=t.MAs(12),L=t.MAs(21),ut=t.MAs(24);t.xp6(2),t.Oqu(l+1),t.xp6(2),t.Oqu(a.news_description),t.xp6(2),t.Q6J("ngIf",a.file_url)("ngIfThen",f)("ngIfElse",v),t.xp6(8),t.Oqu(a.status),t.xp6(2),t.Oqu(a.created_at),t.xp6(2),t.Q6J("ngIf",a.inforce>0)("ngIfThen",L)("ngIfElse",ut)}}function ot(m,_){1&m&&t._UZ(0,"p-button",59)}function rt(m,_){1&m&&(t.TgZ(0,"mat-icon",32),t._uU(1,"thumb_up"),t.qZA(),t._uU(2," Upcoming Birthday "))}const ct=function(){return[5,10,25,50]},lt=function(){return["id","news_description","status","created_at"]},dt=[{path:"",component:(()=>{class m{constructor(a,l,f){this.reportService=a,this.courseService=l,this.commonService=f,this.UserID=0,this.organisationId=0,this.newsDataArray=[],this.activeStatus=1,this.inActiveStatus=0,this.courseArray=[],this.defaultPicture="",this.selectedIndex=0;const v=localStorage.getItem("user");v&&(this.UserID=JSON.parse(v).uniqueId,this.organisationId=JSON.parse(v).organisationId,console.log("user localUserID:",this.UserID),console.log("user organisationId:",this.organisationId)),this.getNewsList(this.organisationId),this.getCourseList(this.organisationId)}onTabChanged(a){console.log(a)}ngOnInit(){this.defaultPicture=this.commonService.getPublic()+"/file_upload/",this.newsFormGroup=new p.cw({newsDescription:new p.NI(null,[p.kI.required]),course_id:new p.NI(null),image:new p.NI(null),organisationId:new p.NI(this.organisationId)})}uploadImage(a){this.files=a.target.files[0],console.log("Image:",this.files)}onSubmit(){if(this.files&&this.newsFormGroup.value.newsDescription&&this.newsFormGroup.value.course_id){const a=new FormData;a.append("image",this.files,this.files.name),a.append("courseId",this.newsFormGroup.value.course_id),a.append("organisationId",this.newsFormGroup.value.organisationId),a.append("newsDescription",this.newsFormGroup.value.newsDescription),this.courseService.uploadData(a).subscribe(l=>{this.data=l,console.log(this.data)})}else if(this.files&&this.newsFormGroup.value.newsDescription){const a=new FormData;a.append("image",this.files,this.files.name),a.append("organisationId",this.newsFormGroup.value.organisationId),a.append("newsDescription",this.newsFormGroup.value.newsDescription),this.courseService.uploadData(a).subscribe(l=>{this.data=l,console.log(this.data)})}else if(this.newsFormGroup.value.course_id){const a=new FormData;a.append("courseId",this.newsFormGroup.value.course_id),a.append("organisationId",this.newsFormGroup.value.organisationId),a.append("newsDescription",this.newsFormGroup.value.newsDescription),this.courseService.uploadData(a).subscribe(l=>{this.data=l,console.log(this.data)})}else{const a=new FormData;a.append("organisationId",this.newsFormGroup.value.organisationId),a.append("newsDescription",this.newsFormGroup.value.newsDescription),this.courseService.uploadData(a).subscribe(l=>{this.data=l,console.log(this.data)})}}saveNews(){this.newsDataArray=[],M().fire({title:"Are you sure?",text:"To Save This Record!",icon:"info",showCancelButton:!0,confirmButtonText:"Yes, Save it!",cancelButtonText:"No, keep it"}).then(a=>{if(a.isConfirmed)if(this.files&&this.newsFormGroup.value.newsDescription&&this.newsFormGroup.value.course_id){const l=new FormData;l.append("image",this.files,this.files.name),l.append("courseId",this.newsFormGroup.value.course_id),l.append("organisationId",this.newsFormGroup.value.organisationId),l.append("newsDescription",this.newsFormGroup.value.newsDescription),this.courseService.uploadData(l).subscribe(f=>{this.data=f,console.log(this.data),1===this.data.success&&(M().fire({position:"top-end",icon:"success",title:"News has been saved",showConfirmButton:!1,timer:1500}),this.getNewsList(this.organisationId),this.newsFormGroup=new p.cw({newsDescription:new p.NI(null,[p.kI.required]),course_id:new p.NI(null),image:new p.NI(null),organisationId:new p.NI(this.organisationId)}))})}else if(this.files&&this.newsFormGroup.value.newsDescription){const l=new FormData;l.append("image",this.files,this.files.name),l.append("organisationId",this.newsFormGroup.value.organisationId),l.append("newsDescription",this.newsFormGroup.value.newsDescription),this.courseService.uploadData(l).subscribe(f=>{this.data=f,console.log(this.data),1===this.data.success&&(M().fire({position:"top-end",icon:"success",title:"News has been saved",showConfirmButton:!1,timer:1500}),this.getNewsList(this.organisationId),this.newsFormGroup=new p.cw({newsDescription:new p.NI(null,[p.kI.required]),course_id:new p.NI(null),image:new p.NI(null),organisationId:new p.NI(this.organisationId)}))})}else if(this.newsFormGroup.value.course_id){const l=new FormData;l.append("courseId",this.newsFormGroup.value.course_id),l.append("organisationId",this.newsFormGroup.value.organisationId),l.append("newsDescription",this.newsFormGroup.value.newsDescription),this.courseService.uploadData(l).subscribe(f=>{this.data=f,console.log(this.data),1===this.data.success&&(M().fire({position:"top-end",icon:"success",title:"News has been saved",showConfirmButton:!1,timer:1500}),this.getNewsList(this.organisationId),this.newsFormGroup=new p.cw({newsDescription:new p.NI(null,[p.kI.required]),course_id:new p.NI(null),image:new p.NI(null),organisationId:new p.NI(this.organisationId)}))})}else{const l=new FormData;l.append("organisationId",this.newsFormGroup.value.organisationId),l.append("newsDescription",this.newsFormGroup.value.newsDescription),this.courseService.uploadData(l).subscribe(f=>{this.data=f,console.log(this.data),1===this.data.success&&(M().fire({position:"top-end",icon:"success",title:"News has been saved",showConfirmButton:!1,timer:1500}),this.getNewsList(this.organisationId),this.newsFormGroup=new p.cw({newsDescription:new p.NI(null,[p.kI.required]),course_id:new p.NI(null),image:new p.NI(null),organisationId:new p.NI(this.organisationId)}))})}else a.dismiss===M().DismissReason.cancel&&M().fire("Cancelled","Your imaginary file is safe :)","error")})}getCourseList(a){this.courseService.fetchAllCourses(a).subscribe(l=>{this.courseArray=l.data,console.log("courseList:",this.courseArray)})}onChange(a,l){this.itemValue={id:l,inforce:a},M().fire({text:"",title:"Are you sure ?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Save it!",cancelButtonText:"No, keep it"}).then(f=>{f.isConfirmed?this.reportService.updateNewsStatus(this.itemValue).subscribe(v=>{1===v.success&&(M().fire({position:"top-end",icon:"success",title:"News Status has been Updated..",showConfirmButton:!1,timer:1500}),this.getNewsList(this.organisationId))},v=>{M().fire({icon:"error",title:"Oops...",text:v,footer:"<a href>Why do I have this issue?</a>",timer:0})}):f.dismiss===M().DismissReason.cancel&&M().fire("Cancelled","Your imaginary file is safe :)","error")})}editNews(a){console.log("newsDataEdit:",a)}deleteNews(a){console.log("newsDataDelete:",a)}getNewsList(a){this.reportService.fetchNewsListReport(a).subscribe(l=>{this.newsDataArray=l.data,console.log("newsDataArray:",this.newsDataArray)})}getEventValue(a){return a.target.value}clear(a){a.clear()}}return m.\u0275fac=function(a){return new(a||m)(t.Y36(Y.r),t.Y36(Q.N),t.Y36(j.v))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-news"]],decls:50,vars:13,consts:[[1,"container-fluid","page"],[1,"page__box","p-3","mt-1","ml-1"],[1,"page__content","shadow","p-3","position-relative"],[1,"container"],[1,"row"],[1,"col-xs-12","col-sm-12"],[1,"main-div"],["animationDuration","200ms",2,"background-image","linear-gradient(to bottom right, rgb(8, 2, 68), rgb(7, 32, 146))","color","aliceblue","padding","12px","border-radius","5px","padding","0px",3,"selectedIndex","selectedIndexChange"],["mat-tab-label",""],[1,"card"],[1,"card-body"],[3,"formGroup"],[1,"col-sm-5"],["fxFlex","100","bindLabel","full_name","bindValue","id","appendTo","body","formControlName","course_id","placeholder","select Course / Class Name",1,"custom",3,"items"],["type","file","id","formFile","formControlName","image",1,"form-control",3,"change"],[1,"col-sm-5",2,"display","none"],["type","text","value","","formControlName","organisationId",1,"form-control"],[1,"col-sm-8"],[1,"example-full-width"],["matInput","","formControlName","newsDescription","placeholder","Ex. Examination will be held from 25th Dec 2023...","maxlength","1000"],["message",""],["align","start",2,"color","brown"],["align","end",2,"color","brown"],[1,"col-sm-2"],["pButton","",1,"p-button-rounded","p-button-info",3,"disabled","click"],[1,"bi","bi-save",2,"font-size","1rem"],["dataKey","id","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","paginator","rows","showCurrentPageReport","rowsPerPageOptions","globalFilterFields"],["newsList",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","paginatorleft"],[1,"example-tab-icon"],[1,"flex"],["pButton","","label","Clear","icon","pi pi-filter-slash",1,"p-button-outlined",3,"click"],[1,"p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search keyword",3,"input"],["pSortableColumn","news_description"],["field","news_description"],["pSortableColumn","status"],["field","status"],["pSortableColumn","created_at"],["field","created_at"],["pSortableColumn","edit"],["field","edit"],["pSortableColumn","delete"],["field","delete"],[4,"ngIf","ngIfThen","ngIfElse"],["thenBlock",""],["elseBlock",""],["thenBlockInforce",""],["elseBlockInforce",""],["type","button","icon","pi pi-pencil","styleClass","p-button-text",3,"click"],["type","button","icon","pi pi-trash","styleClass","p-button-text",3,"click"],["download","filename",3,"href"],[1,"bi","bi-download"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],["type","button","icon","pi pi-plus","styleClass","p-button-text"]],template:function(a,l){if(1&a&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"News & Announcements Entry Form"),t.qZA(),t.TgZ(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"mat-tab-group",7),t.NdJ("selectedIndexChange",function(v){return l.onTabChanged(v)})("selectedIndexChange",function(v){return l.selectedIndex=v}),t.TgZ(9,"mat-tab"),t.YNc(10,V,3,0,"ng-template",8),t.TgZ(11,"div",9)(12,"div",10)(13,"form",11)(14,"div",4)(15,"div",12),t._UZ(16,"ng-select",13),t.qZA()(),t.TgZ(17,"div",4)(18,"div",12)(19,"input",14),t.NdJ("change",function(v){return l.uploadImage(v)}),t.qZA()(),t.TgZ(20,"div",15),t._UZ(21,"input",16),t.qZA()(),t.TgZ(22,"div",4)(23,"div",17)(24,"mat-form-field",18)(25,"mat-label"),t._uU(26,"Description"),t.qZA(),t._UZ(27,"textarea",19,20),t.TgZ(29,"mat-hint",21)(30,"strong"),t._uU(31,"Broadcast Your News & Announcement To Every Student "),t.qZA()(),t.TgZ(32,"mat-hint",22),t._uU(33),t.qZA()()(),t.TgZ(34,"div",23)(35,"button",24),t.NdJ("click",function(){return l.saveNews()}),t.TgZ(36,"i",25),t._uU(37," Save "),t.qZA()()()()()()()(),t.TgZ(38,"mat-tab"),t.YNc(39,z,3,0,"ng-template",8),t.TgZ(40,"div",10)(41,"p-table",26,27),t.YNc(43,X,5,0,"ng-template",28),t.YNc(44,$,22,0,"ng-template",29),t.YNc(45,at,29,10,"ng-template",30),t.YNc(46,ot,1,0,"ng-template",31),t.qZA()()(),t.TgZ(47,"mat-tab"),t.YNc(48,rt,3,0,"ng-template",8),t._uU(49," Content 3 "),t.qZA()()()()()()()()),2&a){const f=t.MAs(28);t.xp6(8),t.Q6J("selectedIndex",l.selectedIndex),t.xp6(5),t.Q6J("formGroup",l.newsFormGroup),t.xp6(3),t.Q6J("items",l.courseArray),t.xp6(17),t.hij("",f.value.length," / 1000"),t.xp6(2),t.Q6J("disabled",!l.newsFormGroup.valid),t.xp6(6),t.Q6J("value",l.newsDataArray)("paginator",!0)("rows",5)("showCurrentPageReport",!0)("rowsPerPageOptions",t.DdM(11,ct))("globalFilterFields",t.DdM(12,lt))}},dependencies:[e.O5,W.jx,U.KE,U.bx,U.hX,T.Nt,p._Y,p.Fj,p.JJ,p.JL,p.nD,p.sg,p.u,D.Hq,D.zx,I.iA,I.lQ,I.fz,E.w9,d.Hw,G.SP,G.uD,G.uX,B.o],styles:[".page[_ngcontent-%COMP%]{color:#0c0c0c;background:whitesmoke}.page__box[_ngcontent-%COMP%]{min-height:100px;background:whitesmoke;margin:0 -3rem;font-size:24px}.page__content[_ngcontent-%COMP%]{min-height:50vh;border-radius:10px;margin-top:-3rem;background:rgb(224,224,224);border:2px solid black;color:#000;font-size:20px}.example-form[_ngcontent-%COMP%]{min-width:100%;max-width:100%;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}  .mat-form-field .mat-input-element{color:#080808;font-size:medium;font-family:Roboto,sans-serif}  .mat-form-field .mat-form-field-label{color:#0a0a0a;font-family:Roboto,sans-serif;font-size:medium}  .mat-form-field .mat-form-field-underline{background-color:#04203b}  .mat-form-field .mat-form-field-ripple{background-color:#708090}  .mat-form-field .mat-form-field-required-marker{color:#be1509}"]}),m})()}];let mt=(()=>{class m{}return m.\u0275fac=function(a){return new(a||m)},m.\u0275mod=t.oAB({type:m}),m.\u0275inj=t.cJS({imports:[k.Bz.forChild(dt),k.Bz]}),m})(),pt=(()=>{class m{}return m.\u0275fac=function(a){return new(a||m)},m.\u0275mod=t.oAB({type:m}),m.\u0275inj=t.cJS({imports:[e.ez,mt,h.EV,T.c,p.u5,p.UX,C.T5,D.hJ,A.T,b.Z_,I.U$,y.ot,o.D,s.S,N.q,O.Q,Z.kW,E.A0,P.FA,F.XK,R.Qy,u.KZ,w.z,n.l,c.IJ,i.Bb,d.Ps,g.t,S.ie,G.Nh,J.QW,B.j,U.lN]}),m})()},2820:(K,x,r)=>{r.d(x,{r:()=>A});var e=r(262),I=r(7579),h=r(8505),T=r(4650),p=r(5620),C=r(4889),D=r(529);let A=(()=>{class b{constructor(o,s,N){this.commonService=o,this.errorService=s,this.http=N,this.incomeReportList=[],this.newsDataList=[],this.incomeReportSubject=new I.x}fetchCheckMerchantTransactionId(o){return this.http.get(this.commonService.getAPI()+"/checkMerchantTransaction/"+o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{this.newsDataList=s.data}))}fetchCourseCompletedId(o){return this.http.get(this.commonService.getAPI()+"/updateCourseCompleted/"+o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{this.newsDataList=s.data}))}fetchPivotTableIncomeList(o){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getPivotTableIncomeListReport/"+o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{this.newsDataList=s.data}))}fetchPivotTableAdmissionList(o){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getPivotTableAdmissionList/"+o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{this.newsDataList=s.data}))}fetchStudentMarksList(o){return this.newsDataList=[],this.http.post(this.commonService.getAPI()+"/getMarkStudents",o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{this.newsDataList=s.data}))}fetchSubjectListByCourseId(o){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getSubjectsByCourseId/"+o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{this.newsDataList=s.data}))}fetchStudentNewsListReport(o){return this.http.post(this.commonService.getAPI()+"/getStudentNewsList",o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{console.log("at service newsDataList:",s),1===s.success&&this.newsDataList.unshift(s.data)}))}fetchStudentSyllabusListReport(o){return this.http.post(this.commonService.getAPI()+"/getStudentSyllabusList",o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{console.log("at service newsDataList:",s),1===s.success&&this.newsDataList.unshift(s.data)}))}fetchStudentOnlineClassList(o){return this.newsDataList=[],this.http.post(this.commonService.getAPI()+"/getStudentOnlineClassList",o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{console.log("at service newsDataList:",s),1===s.success&&this.newsDataList.unshift(s.data)}))}fetchStudentEbookList(o){return this.newsDataList=[],this.http.post(this.commonService.getAPI()+"/getStudentEbookList",o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{console.log("at service newsDataList:",s),1===s.success&&this.newsDataList.unshift(s.data)}))}fetchStudentQuestionPaperList(o){return this.http.post(this.commonService.getAPI()+"/getStudentQuestionPaperList",o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{console.log("at service newsDataList:",s),1===s.success&&this.newsDataList.unshift(s.data)}))}fetchStudentAssignmentListReport(o){return this.http.post(this.commonService.getAPI()+"/getStudentAssignmentList",o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{console.log("at service newsDataList:",s),1===s.success&&this.newsDataList.unshift(s.data)}))}onlinePaymentService(o){return this.http.post(this.commonService.getAPI()+"/phonepe",o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{console.log("at service phonepe:",s)}))}updateNewsStatus(o){return this.http.patch(this.commonService.getAPI()+"/updateNewsStatus",o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{console.log("at news status update",s),1===s.success&&this.newsDataList.unshift(s.data)}))}fetchNewsListReport(o){return this.http.get(this.commonService.getAPI()+"/getNewsList/"+o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{this.newsDataList=s.data}))}fetchSyllabusListReport(o){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getSyllabusList/"+o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{this.newsDataList=s.data}))}fetchAssignmentListReport(o){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getAssignmentList/"+o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{this.newsDataList=s.data}))}fetchEbookListReport(o){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getEbookList/"+o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{this.newsDataList=s.data}))}fetchOnlineClassReport(o){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getOnlineClassList/"+o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{this.newsDataList=s.data}))}fetchQuestionPaperListReport(o){return this.newsDataList=[],this.http.get(this.commonService.getAPI()+"/getQuestionPaperList/"+o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{this.newsDataList=s.data}))}saveNews(o){return this.http.post(this.commonService.getAPI()+"/saveNews",o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{console.log("at service newsDataList:",s),1===s.success&&this.newsDataList.unshift(s.data)}))}fetchAllReceiptIncomeReport(o){return this.http.get(this.commonService.getAPI()+"/getAllIncomeReport/"+o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{this.incomeReportList=s.data,this.incomeReportSubject.next([...this.incomeReportList]),console.log("all Income:",this.incomeReportList)}))}fetchWorkingDaysReport(o){return this.http.get(this.commonService.getAPI()+"/transactions/workingDays/"+o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{this.incomeReportList=s.data,this.incomeReportSubject.next([...this.incomeReportList])}))}fetchStudentBirthDayDaysReport(o){return this.http.get(this.commonService.getAPI()+"/reportStudentBirthday/"+o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{this.incomeReportList=s.data}))}fetchStudentUpcomingDueListReport(o){return this.http.get(this.commonService.getAPI()+"/reportUpcomingDueList/"+o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{this.incomeReportList=s.data}))}fetchStudentToCourseRegistrationReport(o){return this.http.get(this.commonService.getAPI()+"/reportStudentToCourseRegistrationList/"+o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{this.incomeReportList=s.data,this.incomeReportSubject.next([...this.incomeReportList])}))}fetchStudentToCourseRegistrationReportLedgerId(o){return this.http.get(this.commonService.getAPI()+"/reportStudentToCourseRegistrationListLedgerId/"+o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{this.incomeReportList=s.data,this.incomeReportSubject.next([...this.incomeReportList])}))}fetchAllIncomeReport(o){return this.http.post(this.commonService.getAPI()+"/getAllIncomeListReport",o).pipe((0,e.K)(this.errorService.serverError),(0,h.b)(s=>{this.incomeReportList=s.data,this.incomeReportSubject.next([...this.incomeReportList])}))}}return b.\u0275fac=function(o){return new(o||b)(T.LFG(p.v),T.LFG(C.T),T.LFG(D.eN))},b.\u0275prov=T.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"}),b})()},3546:(K,x,r)=>{r.d(x,{$j:()=>o,C1:()=>n,QW:()=>c,a8:()=>u,dn:()=>b,n5:()=>y,vP:()=>Z});var e=r(4650),I=r(3238);const h=["*",[["mat-card-footer"]]],T=["*","mat-card-footer"],D=[[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],[["img"]],"*"],A=["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","img","*"];let b=(()=>{class i{}return i.\u0275fac=function(g){return new(g||i)},i.\u0275dir=e.lG2({type:i,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),i})(),y=(()=>{class i{}return i.\u0275fac=function(g){return new(g||i)},i.\u0275dir=e.lG2({type:i,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),i})(),o=(()=>{class i{}return i.\u0275fac=function(g){return new(g||i)},i.\u0275dir=e.lG2({type:i,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-card-subtitle"]}),i})(),Z=(()=>{class i{}return i.\u0275fac=function(g){return new(g||i)},i.\u0275dir=e.lG2({type:i,selectors:[["","mat-card-sm-image",""],["","matCardImageSmall",""]],hostAttrs:[1,"mat-card-sm-image"]}),i})(),u=(()=>{class i{constructor(g){this._animationMode=g}}return i.\u0275fac=function(g){return new(g||i)(e.Y36(e.QbO,8))},i.\u0275cmp=e.Xpm({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(g,S){2&g&&e.ekj("_mat-animation-noopable","NoopAnimations"===S._animationMode)},exportAs:["matCard"],ngContentSelectors:T,decls:2,vars:0,template:function(g,S){1&g&&(e.F$t(h),e.Hsn(0),e.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card._mat-animation-noopable{transition:none !important;animation:none !important}.mat-card>.mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card>.mat-divider-horizontal{left:auto;right:0}.mat-card>.mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card>.mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],encapsulation:2,changeDetection:0}),i})(),n=(()=>{class i{}return i.\u0275fac=function(g){return new(g||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["mat-card-title-group"]],hostAttrs:[1,"mat-card-title-group"],ngContentSelectors:A,decls:4,vars:0,template:function(g,S){1&g&&(e.F$t(D),e.TgZ(0,"div"),e.Hsn(1),e.qZA(),e.Hsn(2,1),e.Hsn(3,2))},encapsulation:2,changeDetection:0}),i})(),c=(()=>{class i{}return i.\u0275fac=function(g){return new(g||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[I.BQ,I.BQ]}),i})()},2453:(K,x,r)=>{r.d(x,{EV:()=>R,FN:()=>F});var e=r(4650),I=r(6895),h=r(805),T=r(982),p=r(1795),C=r(7340);const D=["container"],A=function(u,w,n,c){return{"pi-info-circle":u,"pi-exclamation-triangle":w,"pi-times-circle":n,"pi-check":c}};function b(u,w){if(1&u&&(e.ynx(0),e._UZ(1,"span",6),e.TgZ(2,"div",7)(3,"div",8),e._uU(4),e.qZA(),e.TgZ(5,"div",9),e._uU(6),e.qZA()(),e.BQk()),2&u){const n=e.oxw();e.xp6(1),e.Tol("p-toast-message-icon pi"+(n.message.icon?" "+n.message.icon:"")),e.Q6J("ngClass",e.l5B(5,A,"info"==n.message.severity,"warn"==n.message.severity,"error"==n.message.severity,"success"==n.message.severity)),e.xp6(3),e.Oqu(n.message.summary),e.xp6(2),e.Oqu(n.message.detail)}}function y(u,w){1&u&&e.GkF(0)}function o(u,w){if(1&u){const n=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(i){e.CHM(n);const d=e.oxw();return e.KtG(d.onCloseIconClick(i))})("keydown.enter",function(i){e.CHM(n);const d=e.oxw();return e.KtG(d.onCloseIconClick(i))}),e._UZ(1,"span",11),e.qZA()}}const s=function(u){return[u,"p-toast-message"]},N=function(u,w,n,c){return{showTransformParams:u,hideTransformParams:w,showTransitionParams:n,hideTransitionParams:c}},O=function(u){return{value:"visible",params:u}},Z=function(u){return{$implicit:u}};function E(u,w){if(1&u){const n=e.EpF();e.TgZ(0,"p-toastItem",3),e.NdJ("onClose",function(i){e.CHM(n);const d=e.oxw();return e.KtG(d.onMessageClose(i))})("@toastAnimation.start",function(i){e.CHM(n);const d=e.oxw();return e.KtG(d.onAnimationStart(i))})("@toastAnimation.done",function(i){e.CHM(n);const d=e.oxw();return e.KtG(d.onAnimationEnd(i))}),e.qZA()}if(2&u){const n=w.$implicit,c=w.index,i=e.oxw();e.Q6J("message",n)("index",c)("template",i.template)("@toastAnimation",void 0)("showTransformOptions",i.showTransformOptions)("hideTransformOptions",i.hideTransformOptions)("showTransitionOptions",i.showTransitionOptions)("hideTransitionOptions",i.hideTransitionOptions)}}let P=(()=>{class u{constructor(n){this.zone=n,this.onClose=new e.vpe}ngAfterViewInit(){this.initTimeout()}initTimeout(){this.message.sticky||this.zone.runOutsideAngular(()=>{this.timeout=setTimeout(()=>{this.onClose.emit({index:this.index,message:this.message})},this.message.life||3e3)})}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.initTimeout()}onCloseIconClick(n){this.clearTimeout(),this.onClose.emit({index:this.index,message:this.message}),n.preventDefault()}ngOnDestroy(){this.clearTimeout()}}return u.\u0275fac=function(n){return new(n||u)(e.Y36(e.R0b))},u.\u0275cmp=e.Xpm({type:u,selectors:[["p-toastItem"]],viewQuery:function(n,c){if(1&n&&e.Gf(D,5),2&n){let i;e.iGM(i=e.CRH())&&(c.containerViewChild=i.first)}},hostAttrs:[1,"p-element"],inputs:{message:"message",index:"index",template:"template",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onClose:"onClose"},decls:6,vars:21,consts:[[3,"ngClass","mouseenter","mouseleave"],["container",""],["role","alert","aria-live","assertive","aria-atomic","true",1,"p-toast-message-content",3,"ngClass"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button","class","p-toast-icon-close p-link","pRipple","",3,"click","keydown.enter",4,"ngIf"],[3,"ngClass"],[1,"p-toast-message-text"],[1,"p-toast-summary"],[1,"p-toast-detail"],["type","button","pRipple","",1,"p-toast-icon-close","p-link",3,"click","keydown.enter"],[1,"p-toast-icon-close-icon","pi","pi-times"]],template:function(n,c){1&n&&(e.TgZ(0,"div",0,1),e.NdJ("mouseenter",function(){return c.onMouseEnter()})("mouseleave",function(){return c.onMouseLeave()}),e.TgZ(2,"div",2),e.YNc(3,b,7,10,"ng-container",3),e.YNc(4,y,1,0,"ng-container",4),e.YNc(5,o,2,0,"button",5),e.qZA()()),2&n&&(e.Tol(c.message.styleClass),e.Q6J("ngClass",e.VKq(10,s,"p-toast-message-"+c.message.severity))("@messageState",e.VKq(17,O,e.l5B(12,N,c.showTransformOptions,c.hideTransformOptions,c.showTransitionOptions,c.hideTransitionOptions))),e.uIk("id",c.message.id),e.xp6(2),e.Q6J("ngClass",c.message.contentStyleClass),e.xp6(1),e.Q6J("ngIf",!c.template),e.xp6(1),e.Q6J("ngTemplateOutlet",c.template)("ngTemplateOutletContext",e.VKq(19,Z,c.message)),e.xp6(1),e.Q6J("ngIf",!1!==c.message.closable))},dependencies:[I.mk,I.O5,I.tP,p.H],encapsulation:2,data:{animation:[(0,C.X$)("messageState",[(0,C.SB)("visible",(0,C.oB)({transform:"translateY(0)",opacity:1})),(0,C.eR)("void => *",[(0,C.oB)({transform:"{{showTransformParams}}",opacity:0}),(0,C.jt)("{{showTransitionParams}}")]),(0,C.eR)("* => void",[(0,C.jt)("{{hideTransitionParams}}",(0,C.oB)({height:0,opacity:0,transform:"{{hideTransformParams}}"}))])])]},changeDetection:0}),u})(),F=(()=>{class u{constructor(n,c,i){this.messageService=n,this.cd=c,this.config=i,this.autoZIndex=!0,this.baseZIndex=0,this.position="top-right",this.preventOpenDuplicates=!1,this.preventDuplicates=!1,this.showTransformOptions="translateY(100%)",this.hideTransformOptions="translateY(-100%)",this.showTransitionOptions="300ms ease-out",this.hideTransitionOptions="250ms ease-in",this.onClose=new e.vpe,this.id=(0,T.Th)()}ngOnInit(){this.messageSubscription=this.messageService.messageObserver.subscribe(n=>{if(n)if(n instanceof Array){const c=n.filter(i=>this.canAdd(i));this.add(c)}else this.canAdd(n)&&this.add([n])}),this.clearSubscription=this.messageService.clearObserver.subscribe(n=>{n?this.key===n&&(this.messages=null):this.messages=null,this.cd.markForCheck()})}ngAfterViewInit(){this.breakpoints&&this.createStyle()}add(n){this.messages=this.messages?[...this.messages,...n]:[...n],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...n]:[...n]),this.cd.markForCheck()}canAdd(n){let c=this.key===n.key;return c&&this.preventOpenDuplicates&&(c=!this.containsMessage(this.messages,n)),c&&this.preventDuplicates&&(c=!this.containsMessage(this.messagesArchieve,n)),c}containsMessage(n,c){return!!n&&null!=n.find(i=>i.summary===c.summary&&i.detail==c.detail&&i.severity===c.severity)}ngAfterContentInit(){this.templates.forEach(n=>{n.getType(),this.template=n.template})}onMessageClose(n){this.messages.splice(n.index,1),this.onClose.emit({message:n.message}),this.cd.detectChanges()}onAnimationStart(n){"void"===n.fromState&&(this.containerViewChild.nativeElement.setAttribute(this.id,""),this.autoZIndex&&T.P9.set("modal",this.containerViewChild.nativeElement,this.baseZIndex||this.config.zIndex.modal))}onAnimationEnd(n){"void"===n.toState&&this.autoZIndex&&T.gb.isEmpty(this.messages)&&T.P9.clear(this.containerViewChild.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let n="";for(let c in this.breakpoints){let i="";for(let d in this.breakpoints[c])i+=d+":"+this.breakpoints[c][d]+" !important;";n+=`\n                    @media screen and (max-width: ${c}) {\n                        .p-toast[${this.id}] {\n                           ${i}\n                        }\n                    }\n                `}this.styleElement.innerHTML=n}}destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.containerViewChild&&this.autoZIndex&&T.P9.clear(this.containerViewChild.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle()}}return u.\u0275fac=function(n){return new(n||u)(e.Y36(h.ez),e.Y36(e.sBO),e.Y36(h.b4))},u.\u0275cmp=e.Xpm({type:u,selectors:[["p-toast"]],contentQueries:function(n,c,i){if(1&n&&e.Suo(i,h.jx,4),2&n){let d;e.iGM(d=e.CRH())&&(c.templates=d)}},viewQuery:function(n,c){if(1&n&&e.Gf(D,5),2&n){let i;e.iGM(i=e.CRH())&&(c.containerViewChild=i.first)}},hostAttrs:[1,"p-element"],inputs:{key:"key",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",style:"style",styleClass:"styleClass",position:"position",preventOpenDuplicates:"preventOpenDuplicates",preventDuplicates:"preventDuplicates",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",breakpoints:"breakpoints"},outputs:{onClose:"onClose"},decls:3,vars:5,consts:[[3,"ngClass","ngStyle"],["container",""],[3,"message","index","template","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","onClose",4,"ngFor","ngForOf"],[3,"message","index","template","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","onClose"]],template:function(n,c){1&n&&(e.TgZ(0,"div",0,1),e.YNc(2,E,1,8,"p-toastItem",2),e.qZA()),2&n&&(e.Tol(c.styleClass),e.Q6J("ngClass","p-toast p-component p-toast-"+c.position)("ngStyle",c.style),e.xp6(2),e.Q6J("ngForOf",c.messages))},dependencies:[P,I.mk,I.PC,I.sg],styles:[".p-toast{position:fixed;width:25rem}.p-toast-message{overflow:hidden}.p-toast-message-content{display:flex;align-items:flex-start}.p-toast-message-text{flex:1 1 auto}.p-toast-top-right{top:20px;right:20px}.p-toast-top-left{top:20px;left:20px}.p-toast-bottom-left{bottom:20px;left:20px}.p-toast-bottom-right{bottom:20px;right:20px}.p-toast-top-center{top:20px;left:50%;transform:translate(-50%)}.p-toast-bottom-center{bottom:20px;left:50%;transform:translate(-50%)}.p-toast-center{left:50%;top:50%;min-width:20vw;transform:translate(-50%,-50%)}.p-toast-icon-close{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-toast-icon-close.p-link{cursor:pointer}\n"],encapsulation:2,data:{animation:[(0,C.X$)("toastAnimation",[(0,C.eR)(":enter, :leave",[(0,C.IO)("@*",(0,C.pV)())])])]},changeDetection:0}),u})(),R=(()=>{class u{}return u.\u0275fac=function(n){return new(n||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[[I.ez,p.T],h.m8]}),u})()}}]);