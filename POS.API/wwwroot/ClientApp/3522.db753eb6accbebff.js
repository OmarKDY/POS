"use strict";(self.webpackChunkposadminportal=self.webpackChunkposadminportal||[]).push([[3522],{2852:(R,S,r)=>{r.d(S,{c:()=>Z});var _=r(9838),C=r(4850),h=r(5e3),i=r(520);let Z=(()=>{class t extends _.c8{constructor(A,T){super("Action",A),this.httpClient=T}getActionByPage(A){return this.getAll().pipe((0,C.U)(T=>T.filter(l=>l.pageId==A)))}}return t.\u0275fac=function(A){return new(A||t)(h.LFG(_.yV),h.LFG(i.eN))},t.\u0275prov=h.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},8853:(R,S,r)=>{r.d(S,{P:()=>h});var _=r(9838),C=r(5e3);let h=(()=>{class i extends _.c8{constructor(t){super("Page",t)}}return i.\u0275fac=function(t){return new(t||i)(C.LFG(_.yV))},i.\u0275prov=C.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},3522:(R,S,r)=>{r.r(S),r.d(S,{PageModule:()=>xt});var _=r(9808),C=r(2554),h=r(319),i=r(1490),Z=r(2868),t=r(5e3),b=r(8853),A=r(2290),T=r(6107),l=r(3075),L=r(2349),U=r(1062);function y(e,a){1&e&&(t.TgZ(0,"div",24),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"PAGE_NAME_IS_REQUIRED")," "))}function O(e,a){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,y,3,3,"div",23),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.pageForm.get("name").touched&&(null==n.pageForm.get("name").errors?null:n.pageForm.get("name").errors.required))}}function I(e,a){1&e&&(t.TgZ(0,"div",24),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"ORDER_IS_REQUIRED")," "))}function v(e,a){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,I,3,3,"div",23),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.pageForm.get("order").touched&&(null==n.pageForm.get("order").errors?null:n.pageForm.get("order").errors.required))}}function Y(e,a){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",25),t.NdJ("click",function(){t.CHM(n);const d=t.oxw();return t.KtG(d.savePage())}),t._UZ(2,"i",26),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.BQk()}2&e&&(t.xp6(3),t.hij(" ",t.lcZ(4,1,"SAVE"),""))}function w(e,a){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",25),t.NdJ("click",function(){t.CHM(n);const d=t.oxw();return t.KtG(d.savePage())}),t._UZ(2,"i",26),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.BQk()}2&e&&(t.xp6(3),t.hij(" ",t.lcZ(4,1,"SAVE"),""))}let g=(()=>{class e extends i.H{constructor(n,o,d,m,f,k){super(k),this.dialogRef=n,this.data=o,this.pageService=d,this.toastrServoce=m,this.fb=f,this.translationService=k,this.isEdit=!1}ngOnInit(){this.createForm(),this.data.id&&(this.pageForm.patchValue(this.data),this.isEdit=!0)}createForm(){this.pageForm=this.fb.group({name:["",l.kI.required],order:["",[l.kI.required]]})}onNoClick(){this.dialogRef.close()}savePage(){if(!this.pageForm.valid)return void this.pageForm.markAllAsTouched();const n=this.pageForm.value;this.data.id?(n.id=this.data.id,this.pageService.update(n).subscribe(o=>{this.toastrServoce.success(this.translationService.getValue("PAGE_UPDATED_SUCCESSFULLY")),this.dialogRef.close()})):this.pageService.add(n).subscribe(()=>{this.toastrServoce.success(this.translationService.getValue("PAGE_ADDED_SUCCESSFULLY")),this.dialogRef.close()})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(L.so),t.Y36(L.WI),t.Y36(b.P),t.Y36(A._W),t.Y36(l.QS),t.Y36(T.D))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-manage-page"]],features:[t.qOj],decls:37,vars:17,consts:[[1,"modal-content1"],[1,"modal-header"],[1,"d-flex","w-100","align-items-center","justify-content-between"],[1,"col-md-8","col"],[1,"modal-title"],[1,"col-sm-auto","ml-auto","col-auto"],["type","button","data-dismiss","modal",1,"close",3,"click"],[1,"fas","fa-times"],[3,"formGroup"],[1,"modal-body"],[1,"row"],[1,"col-md-12"],[1,"form-group"],["for","pageName",1,"text-danger"],["formControlName","name","type","text","id","pageName",1,"form-control"],[4,"ngIf"],["for","order",1,"text-danger"],["formControlName","order","type","number","id","order",1,"form-control"],[1,"modal-footer"],[1,"form-row","w-100","justify-content-end"],[1,"col-md-auto","col-auto"],[1,"btn","btn-danger","btn-sm",3,"click"],[1,"fas","fa-times-circle"],["class","text-danger",4,"ngIf"],[1,"text-danger"],["cdkFocusInitial","",1,"btn","btn-success","btn-sm","m-right-10",3,"click"],[1,"fas","fa-save"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5),t.ALo(6,"translate"),t.qZA()(),t.TgZ(7,"div",5)(8,"button",6),t.NdJ("click",function(){return o.onNoClick()}),t._UZ(9,"i",7),t.qZA()()()(),t.TgZ(10,"form",8)(11,"div",9)(12,"div",10)(13,"div",11)(14,"div",12)(15,"label",13),t._uU(16),t.ALo(17,"translate"),t.qZA(),t._UZ(18,"input",14),t.YNc(19,O,2,1,"div",15),t.qZA()()(),t.TgZ(20,"div",10)(21,"div",11)(22,"div",12)(23,"label",16),t._uU(24),t.ALo(25,"translate"),t.qZA(),t._UZ(26,"input",17),t.YNc(27,v,2,1,"div",15),t.qZA()()()(),t.TgZ(28,"div",18)(29,"div",19)(30,"div",20),t.YNc(31,Y,5,3,"ng-container",15),t.YNc(32,w,5,3,"ng-container",15),t.TgZ(33,"button",21),t.NdJ("click",function(){return o.onNoClick()}),t._UZ(34,"i",22),t._uU(35),t.ALo(36,"translate"),t.qZA()()()()()()),2&n&&(t.xp6(5),t.hij(" ",t.lcZ(6,9,"PAGE")," "),t.xp6(5),t.Q6J("formGroup",o.pageForm),t.xp6(6),t.hij("",t.lcZ(17,11,"NAME")," *"),t.xp6(3),t.Q6J("ngIf",o.pageForm.get("name").touched&&o.pageForm.get("name").errors),t.xp6(5),t.hij(" ",t.lcZ(25,13,"ORDER_NUMBER"),"*"),t.xp6(3),t.Q6J("ngIf",o.pageForm.get("order").touched&&o.pageForm.get("order").errors),t.xp6(4),t.Q6J("ngIf",!o.isEdit),t.xp6(1),t.Q6J("ngIf",o.isEdit),t.xp6(3),t.hij(" ",t.lcZ(36,15,"CANCEL"),""))},dependencies:[_.O5,l._Y,l.Fj,l.wV,l.JJ,l.JL,l.sg,l.u,U.X$]}),e})();var c=r(2852);function s(e,a){1&e&&(t.TgZ(0,"div",26),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"ACTION_NAME_IS_REQUIRED ")," "))}function p(e,a){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,s,3,3,"div",25),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.actionForm.get("name").touched&&(null==n.actionForm.get("name").errors?null:n.actionForm.get("name").errors.required))}}function E(e,a){1&e&&(t.TgZ(0,"div",26),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"ORDER_IS_REQUIRED")," "))}function u(e,a){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,E,3,3,"div",25),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.actionForm.get("order").touched&&(null==n.actionForm.get("order").errors?null:n.actionForm.get("order").errors.required))}}function D(e,a){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",27),t.NdJ("click",function(){t.CHM(n);const d=t.oxw();return t.KtG(d.saveAction())}),t._UZ(2,"i",28),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.BQk()}2&e&&(t.xp6(3),t.hij(" ",t.lcZ(4,1,"SAVE")," "))}function N(e,a){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",27),t.NdJ("click",function(){t.CHM(n);const d=t.oxw();return t.KtG(d.saveAction())}),t._UZ(2,"i",28),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.BQk()}2&e&&(t.xp6(3),t.hij(" ",t.lcZ(4,1,"SAVE")," "))}let M=(()=>{class e extends i.H{constructor(n,o,d,m,f,k){super(k),this.dialogRef=n,this.data=o,this.actionService=d,this.toastrService=m,this.fb=f,this.translationService=k,this.isEdit=!1,this.isDisabled=!0}ngOnInit(){this.createForm(),this.data.id&&(this.actionForm.patchValue(this.data),this.isEdit=!0)}createForm(){this.actionForm=this.fb.group({pagename:[{value:this.data.pagename,disabled:this.isDisabled}],name:["",l.kI.required],order:["",[l.kI.required]]})}onCancel(){this.dialogRef.close()}saveAction(){if(!this.actionForm.valid)return void this.actionForm.markAllAsTouched();const n=this.actionForm.value;n.pageId=this.data.pageId,this.data.id?(n.id=this.data.id,this.actionService.update(n).subscribe(()=>{this.toastrService.success(this.translationService.getValue("ACTION_UPDATED_SUCCESSFULLY")),this.dialogRef.close(this.data)})):this.actionService.add(n).subscribe(()=>{this.toastrService.success(this.translationService.getValue("ACTION_SAVED_SUCCESSFULLY")),this.dialogRef.close(this.data)})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(L.so),t.Y36(L.WI),t.Y36(c.c),t.Y36(A._W),t.Y36(l.QS),t.Y36(T.D))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-manage-action"]],features:[t.qOj],decls:45,vars:20,consts:[[1,"modal-content1"],[1,"modal-header"],[1,"d-flex","w-100","align-items-center","justify-content-between"],[1,"col-md-10","col"],[1,"modal-title"],[1,"col-sm-auto","col-auto","ml-auto"],["type","button","data-dismiss","modal",1,"close",3,"click"],[1,"fas","fa-times"],[3,"formGroup"],[1,"modal-body"],[1,"row"],[1,"col-md-12"],[1,"form-group"],[1,"input-group"],["formControlName","pagename","type","text","id","actionName",1,"form-control"],["for","actionName",1,"text-danger"],["formControlName","name","type","text","id","actionName",1,"form-control"],[4,"ngIf"],["for","order",1,"text-danger"],["formControlName","order","type","number","id","order",1,"form-control"],[1,"modal-footer"],[1,"form-row","w-100","justify-content-end"],[1,"col-md-auto","col-auto"],[1,"btn","btn-danger","btn-sm",3,"click"],[1,"fas","fa-times-circle"],["class","text-danger",4,"ngIf"],[1,"text-danger"],["cdkFocusInitial","",1,"btn","btn-success","btn-sm","m-right-10",3,"click"],[1,"fas","fa-save"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5),t.ALo(6,"translate"),t.qZA()(),t.TgZ(7,"div",5)(8,"button",6),t.NdJ("click",function(){return o.onCancel()}),t._UZ(9,"i",7),t.qZA()()()(),t.TgZ(10,"form",8)(11,"div",9)(12,"div",10)(13,"div",11)(14,"div",12)(15,"label"),t._uU(16),t.ALo(17,"translate"),t.qZA(),t.TgZ(18,"div",13),t._UZ(19,"input",14),t.qZA()()()(),t.TgZ(20,"div",10)(21,"div",11)(22,"div",12)(23,"label",15),t._uU(24),t.ALo(25,"translate"),t.qZA(),t._UZ(26,"input",16),t.YNc(27,p,2,1,"div",17),t.qZA()()(),t.TgZ(28,"div",10)(29,"div",11)(30,"div",12)(31,"label",18),t._uU(32),t.ALo(33,"translate"),t.qZA(),t._UZ(34,"input",19),t.YNc(35,u,2,1,"div",17),t.qZA()()()(),t.TgZ(36,"div",20)(37,"div",21)(38,"div",22),t.YNc(39,D,5,3,"ng-container",17),t.YNc(40,N,5,3,"ng-container",17),t.TgZ(41,"button",23),t.NdJ("click",function(){return o.onCancel()}),t._UZ(42,"i",24),t._uU(43),t.ALo(44,"translate"),t.qZA()()()()()()),2&n&&(t.xp6(5),t.hij(" ",t.lcZ(6,10,"MANAGE_ACTION")," "),t.xp6(5),t.Q6J("formGroup",o.actionForm),t.xp6(6),t.Oqu(t.lcZ(17,12,"PAGE")),t.xp6(8),t.hij("",t.lcZ(25,14,"NAME")," *"),t.xp6(3),t.Q6J("ngIf",o.actionForm.get("name").touched&&o.actionForm.get("name").errors),t.xp6(5),t.hij("",t.lcZ(33,16,"ORDER_NUMBER")," *"),t.xp6(3),t.Q6J("ngIf",o.actionForm.get("order").touched&&o.actionForm.get("order").errors),t.xp6(4),t.Q6J("ngIf",!o.isEdit),t.xp6(1),t.Q6J("ngIf",o.isEdit),t.xp6(3),t.hij(" ",t.lcZ(44,18,"CANCEL")," "))},dependencies:[_.O5,l._Y,l.Fj,l.wV,l.JJ,l.JL,l.sg,l.u,U.X$]}),e})();var P=r(1777),B=r(5485),J=r(226),x=r(2075),F=r(773),j=r(5245);function Q(e,a){1&e&&(t.TgZ(0,"div",22),t._UZ(1,"mat-spinner"),t.qZA())}function $(e,a){1&e&&t._UZ(0,"th",23)}function V(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"mat-icon",26),t.NdJ("click",function(){t.CHM(n);const d=t.oxw().$implicit,m=t.oxw();return t.KtG(m.toggleRow(d))}),t._uU(1," chevron_right"),t.qZA()}}function q(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"mat-icon",26),t.NdJ("click",function(){t.CHM(n);const d=t.oxw().$implicit,m=t.oxw();return t.KtG(m.toggleRow(d))}),t._uU(1," expand_more"),t.qZA()}}function W(e,a){if(1&e&&(t.TgZ(0,"td",24),t.YNc(1,V,2,0,"mat-icon",25),t.YNc(2,q,2,0,"mat-icon",25),t.qZA()),2&e){const n=a.$implicit,o=t.oxw();t.xp6(1),t.Q6J("ngIf",n!=o.expandedElement),t.xp6(1),t.Q6J("ngIf",n==o.expandedElement)}}function H(e,a){1&e&&(t.TgZ(0,"th",27),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij("",t.lcZ(2,1,"ACTION")," "))}function G(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"td",28)(1,"button",29),t.NdJ("click",function(){const m=t.CHM(n).$implicit,f=t.oxw();return t.KtG(f.managePage(m))}),t._UZ(2,"i",30),t.TgZ(3,"span",31),t._uU(4),t.ALo(5,"translate"),t.qZA()(),t.TgZ(6,"button",32),t.NdJ("click",function(){const m=t.CHM(n).$implicit,f=t.oxw();return t.KtG(f.deletePage(m))}),t._UZ(7,"i",33),t.TgZ(8,"span",31),t._uU(9),t.ALo(10,"translate"),t.qZA()()()}2&e&&(t.xp6(4),t.hij(" ",t.lcZ(5,2,"EDIT"),""),t.xp6(5),t.hij(" ",t.lcZ(10,4,"DELETE"),""))}function X(e,a){1&e&&(t.TgZ(0,"th",23),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"NAME")," "))}function K(e,a){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.hij(" ",n.name," ")}}function z(e,a){1&e&&(t.TgZ(0,"th",23),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"ORDER")," "))}function tt(e,a){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.hij(" ",n.order," ")}}function et(e,a){1&e&&(t.TgZ(0,"th",23),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij("",t.lcZ(2,1,"ACTION")," "))}function nt(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"td",24)(1,"button",29),t.NdJ("click",function(){const m=t.CHM(n).$implicit,f=t.oxw(2);return t.KtG(f.manageAction(m))}),t._UZ(2,"i",43),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"button",32),t.NdJ("click",function(){const m=t.CHM(n).$implicit,f=t.oxw(2);return t.KtG(f.deleteAction(m))}),t._UZ(6,"i",44),t._uU(7),t.ALo(8,"translate"),t.qZA()()}2&e&&(t.xp6(3),t.hij(" ",t.lcZ(4,2,"EDIT")," "),t.xp6(4),t.hij(" ",t.lcZ(8,4,"DELETE")," "))}function ot(e,a){1&e&&(t.TgZ(0,"th",23),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"NAME")," "))}function at(e,a){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.hij(" ",n.name," ")}}function it(e,a){1&e&&(t.TgZ(0,"th",23),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"ORDER")," "))}function rt(e,a){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.hij(" ",n.order," ")}}function st(e,a){1&e&&(t.TgZ(0,"th",23),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"CODE")," "))}function ct(e,a){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.hij(" ",n.code," ")}}function dt(e,a){1&e&&t._UZ(0,"tr",45)}function lt(e,a){1&e&&t._UZ(0,"tr",46)}function mt(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"td",24)(1,"div",34)(2,"div",35)(3,"div",36)(4,"div",37)(5,"div",38)(6,"h2"),t._uU(7),t.ALo(8,"translate"),t.qZA()()(),t.TgZ(9,"div",37)(10,"h4",39)(11,"button",5),t.NdJ("click",function(){const m=t.CHM(n).$implicit,f=t.oxw();return t.KtG(f.addAction(m))}),t._UZ(12,"i",40),t._uU(13),t.ALo(14,"translate"),t.qZA()()()(),t.TgZ(15,"table",41),t.ynx(16,13),t.YNc(17,et,3,3,"th",11),t.YNc(18,nt,9,6,"td",12),t.BQk(),t.ynx(19,16),t.YNc(20,ot,3,3,"th",11),t.YNc(21,at,2,1,"td",12),t.BQk(),t.ynx(22,17),t.YNc(23,it,3,3,"th",11),t.YNc(24,rt,2,1,"td",12),t.BQk(),t.ynx(25,42),t.YNc(26,st,3,3,"th",11),t.YNc(27,ct,2,1,"td",12),t.BQk(),t.YNc(28,dt,1,0,"tr",19),t.YNc(29,lt,1,0,"tr",20),t.qZA()()()()}if(2&e){const n=a.$implicit,o=t.oxw();t.uIk("colspan",o.displayedColumns.length),t.xp6(1),t.Q6J("@detailExpand",n==o.expandedElement?"expanded":"collapsed"),t.xp6(6),t.hij(" ",t.lcZ(8,8,"ACTION"),""),t.xp6(6),t.hij(" ",t.lcZ(14,10,"ADD_ACTION")," "),t.xp6(2),t.Q6J("dataSource",o.subActions),t.xp6(13),t.Q6J("matHeaderRowDef",o.subActionColumnToDisplay)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",o.subActionColumnToDisplay)}}function gt(e,a){1&e&&t._UZ(0,"tr",45)}function _t(e,a){1&e&&t._UZ(0,"tr",46)}function pt(e,a){1&e&&t._UZ(0,"tr",47)}const ut=function(){return["expandedDetail"]};let ft=(()=>{class e extends i.H{constructor(n,o,d,m,f,k){super(k),this.dialog=n,this.commonDialogService=o,this.actionService=d,this.cd=m,this.toastrServoce=f,this.translationService=k,this.deletePageHandler=new t.vpe,this.displayedColumns=["subaction","action","name","order"],this.subActionColumnToDisplay=["action","name","order","code"],this.subActions=[],this.getLangDir()}ngOnInit(){}toggleRow(n){this.subActions=[],n&&this.actionService.getActionByPage(n.id).subscribe(o=>{this.subActions=o}),this.expandedElement=this.expandedElement===n?null:n,this.cd.detectChanges()}deletePage(n){this.sub$.sink=this.commonDialogService.deleteConformationDialog(`${this.translationService.getValue("ARE_YOU_SURE_YOU_WANT_TO_DELETE")} ${n.name}`).subscribe(o=>{o&&this.deletePageHandler.emit(n.id)})}manageAction(n){const o=this.dialog.open(M,{width:"350px",direction:this.langDir,data:Object.assign({},n,{pageId:this.expandedElement.id},{pagename:this.expandedElement.name})});this.sub$.sink=o.afterClosed().subscribe(d=>{d&&this.actionService.getActionByPage(this.expandedElement.id).subscribe(m=>{this.subActions=m})})}deleteAction(n){this.sub$.sink=this.commonDialogService.deleteConformationDialog(`${this.translationService.getValue("ARE_YOU_SURE_YOU_WANT_TO_DELETE")} ${n.name}?`).subscribe(o=>{o&&(this.sub$.sink=this.actionService.delete(n.id).subscribe(()=>{this.toastrServoce.success(this.translationService.getValue("ACTION_DELETED_SUCCESSFULLY")),this.actionService.getActionByPage(this.expandedElement.id).subscribe(d=>{this.subActions=d})}))})}managePage(n){this.dialog.open(g,{width:"350px",direction:this.langDir,data:Object.assign({},n)})}addAction(n){this.manageAction({id:"",name:"",code:""})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(L.uw),t.Y36(B.V),t.Y36(c.c),t.Y36(t.sBO),t.Y36(A._W),t.Y36(T.D))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-page-list-presentation"]],inputs:{pages:"pages",loading:"loading"},outputs:{deletePageHandler:"deletePageHandler"},features:[t.qOj],decls:32,vars:14,consts:[[1,"page-header-main"],[1,"row","align-items-center","justify-content-between"],[1,"col-md-auto","col-sm-auto","col"],[1,"content-header"],[1,"col-md-auto","col-sm-auto","col-auto"],[1,"btn","blue-btn","btn-sm","m-right-10",3,"click"],[1,"fas","fa-plus"],["class","loading-shade",4,"ngIf"],[1,"table-responsive"],["mat-table","","multiTemplateDataRows","",1,"table","table-bordered","table-hover","grid-height",3,"dir","dataSource"],["matColumnDef","subaction"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","action"],["style","width:30%","mat-header-cell","",4,"matHeaderCellDef"],["style","width:30%","mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","order"],["matColumnDef","expandedDetail"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-row","","class","example-detail-row",4,"matRowDef","matRowDefColumns"],[1,"loading-shade"],["mat-header-cell",""],["mat-cell",""],["class","cursor-pointer",3,"click",4,"ngIf"],[1,"cursor-pointer",3,"click"],["mat-header-cell","",2,"width","30%"],["mat-cell","",2,"width","30%"],["type","button",1,"btn","btn-success","btn-sm","m-right-10",3,"click"],[1,"fas","fa-pencil-alt"],[1,"d-none","d-sm-inline"],["type","button",1,"btn","btn-danger","btn-sm",3,"click"],[1,"fas","fa-trash-alt"],[1,"example-element-detail"],[1,"inner-table","mat-elevation-z8"],[1,"row","mb-3","align-items-center","justify-content-between"],[1,"col-md-auto","col-sm-auto"],[1,"section-title"],[1,"widget-title"],[1,"las","la-plus"],["mat-table","","multiTemplateDataRows","",1,"table",3,"dataSource"],["matColumnDef","code"],[1,"las","la-pen"],[1,"las","la-trash"],["mat-header-row",""],["mat-row",""],["mat-row","",1,"example-detail-row"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1"),t._uU(5),t.ALo(6,"translate"),t.qZA()()(),t.TgZ(7,"div",4)(8,"button",5),t.NdJ("click",function(){return o.managePage({})}),t._UZ(9,"i",6),t._uU(10),t.ALo(11,"translate"),t.qZA()()()(),t.YNc(12,Q,2,0,"div",7),t.TgZ(13,"div",8)(14,"table",9),t.ynx(15,10),t.YNc(16,$,1,0,"th",11),t.YNc(17,W,3,2,"td",12),t.BQk(),t.ynx(18,13),t.YNc(19,H,3,3,"th",14),t.YNc(20,G,11,6,"td",15),t.BQk(),t.ynx(21,16),t.YNc(22,X,3,3,"th",11),t.YNc(23,K,2,1,"td",12),t.BQk(),t.ynx(24,17),t.YNc(25,z,3,3,"th",11),t.YNc(26,tt,2,1,"td",12),t.BQk(),t.ynx(27,18),t.YNc(28,mt,30,12,"td",12),t.BQk(),t.YNc(29,gt,1,0,"tr",19),t.YNc(30,_t,1,0,"tr",20),t.YNc(31,pt,1,0,"tr",21),t.qZA()()),2&n&&(t.xp6(5),t.Oqu(t.lcZ(6,9,"PAGES")),t.xp6(5),t.hij(" ",t.lcZ(11,11,"ADD_PAGE")," "),t.xp6(2),t.Q6J("ngIf",!o.loading),t.xp6(2),t.Q6J("dir",o.langDir)("dataSource",o.pages),t.xp6(15),t.Q6J("matHeaderRowDef",o.displayedColumns)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",t.DdM(13,ut)))},dependencies:[_.O5,J.Lv,x.BZ,x.fO,x.as,x.w1,x.Dz,x.nj,x.ge,x.ev,x.XQ,x.Gk,F.Ou,j.Hw,U.X$],data:{animation:[(0,P.X$)("detailExpand",[(0,P.SB)("collapsed",(0,P.oB)({height:"0px",minHeight:"0"})),(0,P.SB)("expanded",(0,P.oB)({height:"*"})),(0,P.eR)("expanded <=> collapsed",(0,P.jt)("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}}),e})();const ht=[{path:"",component:(()=>{class e extends i.H{constructor(n,o,d){super(d),this.pageService=n,this.toastrServoce=o,this.translationService=d,this.displayedColumns=["action","name"]}ngOnInit(){this.loading$=this.pageService.loaded$.pipe((0,Z.b)(n=>{n||this.getPages()})),this.pages$=this.pageService.entities$}deletePage(n){this.sub$.sink=this.pageService.delete(n).subscribe(()=>{this.toastrServoce.success(this.translationService.getValue("PAGE_DELETED_SUCCESSFULLY"))})}getPages(){this.pageService.getAll()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(b.P),t.Y36(A._W),t.Y36(T.D))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-page-list"]],features:[t.qOj],decls:3,vars:6,consts:[[3,"pages","loading","deletePageHandler"]],template:function(n,o){1&n&&(t.TgZ(0,"app-page-list-presentation",0),t.NdJ("deletePageHandler",function(m){return o.deletePage(m)}),t.ALo(1,"async"),t.ALo(2,"async"),t.qZA()),2&n&&t.Q6J("pages",t.lcZ(1,2,o.pages$))("loading",t.lcZ(2,4,o.loading$))},dependencies:[ft,_.Ov]}),e})(),canActivate:[h.a]}];let At=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[C.Bz.forChild(ht),C.Bz]}),e})();var vt=r(7108);let xt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[_.ez,l.u5,At,x.p0,F.Cq,L.Is,vt.m,l.UX,j.Ps]}),e})()},773:(R,S,r)=>{r.d(S,{Cq:()=>Y,Ou:()=>v});var _=r(3191),C=r(925),h=r(9808),i=r(5e3),Z=r(508),t=r(2654),b=r(9071);function A(g,c){if(1&g&&(i.O4$(),i._UZ(0,"circle",4)),2&g){const s=i.oxw(),p=i.MAs(1);i.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+s._spinnerAnimationLabel)("stroke-dashoffset",s._getStrokeDashOffset(),"px")("stroke-dasharray",s._getStrokeCircumference(),"px")("stroke-width",s._getCircleStrokeWidth(),"%")("transform-origin",s._getCircleTransformOrigin(p)),i.uIk("r",s._getCircleRadius())}}function T(g,c){if(1&g&&(i.O4$(),i._UZ(0,"circle",4)),2&g){const s=i.oxw(),p=i.MAs(1);i.Udp("stroke-dashoffset",s._getStrokeDashOffset(),"px")("stroke-dasharray",s._getStrokeCircumference(),"px")("stroke-width",s._getCircleStrokeWidth(),"%")("transform-origin",s._getCircleTransformOrigin(p)),i.uIk("r",s._getCircleRadius())}}const U=(0,Z.pj)(class{constructor(g){this._elementRef=g}},"primary"),y=new i.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function O(){return{diameter:100}}});class v extends U{constructor(c,s,p,E,u,D,N,M){super(c),this._document=p,this._diameter=100,this._value=0,this._resizeSubscription=t.w.EMPTY,this.mode="determinate";const P=v._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),P.has(p.head)||P.set(p.head,new Set([100])),this._noopAnimations="NoopAnimations"===E&&!!u&&!u._forceAnimations,"mat-spinner"===c.nativeElement.nodeName.toLowerCase()&&(this.mode="indeterminate"),u&&(u.color&&(this.color=this.defaultColor=u.color),u.diameter&&(this.diameter=u.diameter),u.strokeWidth&&(this.strokeWidth=u.strokeWidth)),s.isBrowser&&s.SAFARI&&N&&D&&M&&(this._resizeSubscription=N.change(150).subscribe(()=>{"indeterminate"===this.mode&&M.run(()=>D.markForCheck())}))}get diameter(){return this._diameter}set diameter(c){this._diameter=(0,_.su)(c),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(c){this._strokeWidth=(0,_.su)(c)}get value(){return"determinate"===this.mode?this._value:0}set value(c){this._value=Math.max(0,Math.min(100,(0,_.su)(c)))}ngOnInit(){const c=this._elementRef.nativeElement;this._styleRoot=(0,C.kV)(c)||this._document.head,this._attachStyleNode(),c.classList.add("mat-progress-spinner-indeterminate-animation")}ngOnDestroy(){this._resizeSubscription.unsubscribe()}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const c=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${c} ${c}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_getCircleTransformOrigin(c){var s;const p=50*(null!==(s=c.currentScale)&&void 0!==s?s:1);return`${p}% ${p}%`}_attachStyleNode(){const c=this._styleRoot,s=this._diameter,p=v._diameters;let E=p.get(c);if(!E||!E.has(s)){const u=this._document.createElement("style");u.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),u.textContent=this._getAnimationText(),c.appendChild(u),E||(E=new Set,p.set(c,E)),E.add(s)}}_getAnimationText(){const c=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*c).replace(/END_VALUE/g,""+.2*c).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}v._diameters=new WeakMap,v.\u0275fac=function(c){return new(c||v)(i.Y36(i.SBq),i.Y36(C.t4),i.Y36(h.K0,8),i.Y36(i.QbO,8),i.Y36(y),i.Y36(i.sBO),i.Y36(b.rL),i.Y36(i.R0b))},v.\u0275cmp=i.Xpm({type:v,selectors:[["mat-progress-spinner"],["mat-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner","mat-spinner"],hostVars:10,hostBindings:function(c,s){2&c&&(i.uIk("aria-valuemin","determinate"===s.mode?0:null)("aria-valuemax","determinate"===s.mode?100:null)("aria-valuenow","determinate"===s.mode?s.value:null)("mode",s.mode),i.Udp("width",s.diameter,"px")("height",s.diameter,"px"),i.ekj("_mat-animation-noopable",s._noopAnimations))},inputs:{color:"color",diameter:"diameter",strokeWidth:"strokeWidth",mode:"mode",value:"value"},exportAs:["matProgressSpinner"],features:[i.qOj],decls:4,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["svg",""],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(c,s){1&c&&(i.O4$(),i.TgZ(0,"svg",0,1),i.YNc(2,A,1,11,"circle",2),i.YNc(3,T,1,9,"circle",3),i.qZA()),2&c&&(i.Udp("width",s.diameter,"px")("height",s.diameter,"px"),i.Q6J("ngSwitch","indeterminate"===s.mode),i.uIk("viewBox",s._getViewBox()),i.xp6(2),i.Q6J("ngSwitchCase",!0),i.xp6(1),i.Q6J("ngSwitchCase",!1))},dependencies:[h.RF,h.n9],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:rgba(0,0,0,0);transition:stroke-dashoffset 225ms linear}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}.mat-progress-spinner[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}.mat-progress-spinner._mat-animation-noopable svg,.mat-progress-spinner._mat-animation-noopable circle{animation:none;transition:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}"],encapsulation:2,changeDetection:0});let Y=(()=>{class g{}return g.\u0275fac=function(s){return new(s||g)},g.\u0275mod=i.oAB({type:g}),g.\u0275inj=i.cJS({imports:[Z.BQ,h.ez,Z.BQ]}),g})()}}]);