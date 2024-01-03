"use strict";(self.webpackChunkposadminportal=self.webpackChunkposadminportal||[]).push([[9334],{9334:(ne,f,i)=>{i.r(f),i.d(f,{WarehouseModule:()=>oe});var u=i(9808),W=i(7108),m=i(2349),d=i(773),r=i(2075),l=i(3075),b=i(2868),h=i(1490),e=i(5e3),g=i(8381),_=i(2290),p=i(6107),v=i(6087),A=i(9785),Z=i(1062);function L(t,a){1&t&&(e.TgZ(0,"div",31),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"NAME_IS_REQUIRED")," "))}function x(t,a){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,L,3,3,"div",30),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.warehouseForm.get("name").touched&&(null==o.warehouseForm.get("name").errors?null:o.warehouseForm.get("name").errors.required))}}function E(t,a){1&t&&(e.TgZ(0,"div",31),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij("",e.lcZ(2,1,"PLEASE_ENTER_VALID_EMAIL"),". "))}function U(t,a){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,E,3,3,"div",30),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.warehouseForm.get("email").touched&&(null==o.warehouseForm.get("email").errors?null:o.warehouseForm.get("email").errors.email))}}function N(t,a){if(1&t){const o=e.EpF();e.TgZ(0,"button",32),e.NdJ("click",function(){e.CHM(o);const s=e.oxw();return e.KtG(s.saveWarehouse())}),e._UZ(1,"i",33),e._uU(2),e.ALo(3,"translate"),e.qZA()}2&t&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"SAVE")," "))}function w(t,a){1&t&&e._UZ(0,"mat-spinner")}function S(t,a){if(1&t&&(e.TgZ(0,"div",34),e.YNc(1,w,1,0,"mat-spinner",15),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.isLoading)}}let O=(()=>{class t extends h.H{constructor(o,n,s,c,ae,T){super(T),this.dialogRef=o,this.data=n,this.warehouseService=s,this.toastrService=c,this.fb=ae,this.translationService=T,this.isLoading=!1,this.isEdit=!1,this.getLangDir()}ngOnInit(){this.createForm(),this.data.id&&(this.warehouseForm.patchValue(this.data),this.isEdit=!0)}createForm(){this.warehouseForm=this.fb.group({id:[""],name:["",l.kI.required],address:[""],contactPerson:[""],mobileNumber:[""],email:["",[l.kI.email]]})}onCancel(){this.dialogRef.close()}saveWarehouse(){if(!this.warehouseForm.valid)return void this.warehouseForm.markAllAsTouched();const o=this.warehouseForm.value;this.isLoading=!0,this.data.id?this.warehouseService.update(o).subscribe(()=>{this.isLoading=!1,this.toastrService.success(this.translationService.getValue("WAREHOUSE_UPDATED_SUCCESSFULLY")),this.dialogRef.close()},()=>this.isLoading=!1):this.warehouseService.add(o).subscribe(()=>{this.isLoading=!1,this.toastrService.success(this.translationService.getValue("WAREHOUSE_ADDED_SUCCESSFULLY")),this.dialogRef.close()},()=>this.isLoading=!1)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(m.so),e.Y36(m.WI),e.Y36(g.l),e.Y36(_._W),e.Y36(l.QS),e.Y36(p.D))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-manage-warehouse"]],features:[e.qOj],decls:63,vars:29,consts:[[1,"modal-content1"],[1,"modal-header"],[1,"d-flex","w-100","align-items-center","justify-content-between"],[1,"col-md-9","col"],[1,"modal-title"],[1,"col-sm-auto","col-auto","ml-auto"],["type","button","data-dismiss","modal",1,"close",3,"click"],[1,"fas","fa-times"],[3,"formGroup"],[1,"modal-body"],[1,"row"],[1,"col-md-12"],[1,"form-group"],["for","warehouseName",1,"text-danger"],["formControlName","name","type","text","id","warehouseName",1,"form-control"],[4,"ngIf"],[1,"container","border"],[1,"col-md-12","mt-2"],[1,"col-md-6"],["formControlName","contactPerson","type","text",1,"form-control"],["formControlName","mobileNumber","type","text",1,"form-control"],["formControlName","email","type","text","id","warehouseEmail",1,"form-control"],["formControlName","address",1,"form-control"],[1,"modal-footer"],[1,"form-row","w-100"],[1,"col-md-auto","col-auto"],["class","btn btn-success btn-sm m-right-10","cdkFocusInitial","",3,"click",4,"hasClaim"],[1,"btn","btn-danger","btn-sm",3,"click"],[1,"fas","fa-times-circle"],["class","loading-shade",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"text-danger"],["cdkFocusInitial","",1,"btn","btn-success","btn-sm","m-right-10",3,"click"],[1,"fas","fa-save"],[1,"loading-shade"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),e._uU(5),e.ALo(6,"translate"),e.qZA()(),e.TgZ(7,"div",5)(8,"button",6),e.NdJ("click",function(){return n.onCancel()}),e._UZ(9,"i",7),e.qZA()()()(),e.TgZ(10,"form",8)(11,"div",9)(12,"div",10)(13,"div",11)(14,"div",10)(15,"div",11)(16,"div",12)(17,"label",13),e._uU(18),e.ALo(19,"translate"),e.qZA(),e._UZ(20,"input",14),e.YNc(21,x,2,1,"div",15),e.qZA()()(),e.TgZ(22,"h6"),e._uU(23),e.ALo(24,"translate"),e.qZA(),e.TgZ(25,"div",16)(26,"div",17)(27,"div",10)(28,"div",18)(29,"div",12)(30,"label"),e._uU(31),e.ALo(32,"translate"),e.qZA(),e._UZ(33,"input",19),e.qZA()(),e.TgZ(34,"div",18)(35,"div",12)(36,"label"),e._uU(37),e.ALo(38,"translate"),e.qZA(),e._UZ(39,"input",20),e.qZA()()()(),e.TgZ(40,"div",11)(41,"div",12)(42,"label"),e._uU(43),e.ALo(44,"translate"),e.qZA(),e._UZ(45,"input",21),e.YNc(46,U,2,1,"div",15),e.qZA(),e.TgZ(47,"div",10)(48,"div",11)(49,"div",12)(50,"label"),e._uU(51),e.ALo(52,"translate"),e.qZA(),e._UZ(53,"textarea",22),e.qZA()()()()()()()(),e.TgZ(54,"div",23)(55,"div",24)(56,"div",25),e.YNc(57,N,4,3,"button",26),e.TgZ(58,"button",27),e.NdJ("click",function(){return n.onCancel()}),e._UZ(59,"i",28),e._uU(60),e.ALo(61,"translate"),e.qZA()()()()()(),e.YNc(62,S,2,1,"div",29)),2&o&&(e.xp6(5),e.hij(" ",e.lcZ(6,13,"MANAGE_WAREHOUSE")," "),e.xp6(5),e.Q6J("formGroup",n.warehouseForm),e.xp6(8),e.hij("",e.lcZ(19,15,"WAREHOUSE_NAME")," *"),e.xp6(3),e.Q6J("ngIf",n.warehouseForm.get("name").touched&&n.warehouseForm.get("name").errors),e.xp6(2),e.Oqu(e.lcZ(24,17,"CONTACT_INFORMATION")),e.xp6(8),e.Oqu(e.lcZ(32,19,"CONTACT_PERSON")),e.xp6(6),e.Oqu(e.lcZ(38,21,"MOBILE_NUMBER")),e.xp6(6),e.hij("",e.lcZ(44,23,"EMAIL")," "),e.xp6(3),e.Q6J("ngIf",n.warehouseForm.get("email").touched&&n.warehouseForm.get("email").errors),e.xp6(5),e.hij(" ",e.lcZ(52,25,"ADDRESS"),""),e.xp6(6),e.Q6J("hasClaim","PRO_MANAGE_WAREHOUSE"),e.xp6(3),e.hij(" ",e.lcZ(61,27,"CANCEL")," "),e.xp6(2),e.Q6J("ngIf",n.isLoading))},dependencies:[u.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,d.Ou,A.d,Z.X$]}),t})();var D=i(5485),M=i(226);function R(t,a){if(1&t){const o=e.EpF();e.TgZ(0,"div",19)(1,"button",20),e.NdJ("click",function(){e.CHM(o);const s=e.oxw();return e.KtG(s.manageWarehouse({}))}),e._UZ(2,"i",21),e._uU(3),e.ALo(4,"translate"),e.qZA()()}2&t&&(e.xp6(3),e.hij(" ",e.lcZ(4,1,"ADD_WAREHOUSE")," "))}function Y(t,a){1&t&&(e.TgZ(0,"div",22),e._UZ(1,"mat-spinner"),e.qZA())}function y(t,a){1&t&&(e.TgZ(0,"th",23),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"ACTION")," "))}function P(t,a){if(1&t){const o=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){e.CHM(o);const s=e.oxw().$implicit,c=e.oxw();return e.KtG(c.manageWarehouse(s))}),e._UZ(1,"i",28),e.TgZ(2,"span",29),e._uU(3),e.ALo(4,"translate"),e.qZA()()}2&t&&(e.xp6(3),e.hij(" ",e.lcZ(4,1,"EDIT"),""))}function F(t,a){if(1&t){const o=e.EpF();e.TgZ(0,"button",30),e.NdJ("click",function(){e.CHM(o);const s=e.oxw().$implicit,c=e.oxw();return e.KtG(c.deleteWarehouse(s))}),e._UZ(1,"i",31),e.TgZ(2,"span",29),e._uU(3),e.ALo(4,"translate"),e.qZA()()}2&t&&(e.xp6(3),e.hij(" ",e.lcZ(4,1,"DELETE"),""))}function H(t,a){1&t&&(e.TgZ(0,"td",24),e.YNc(1,P,5,3,"button",25),e.YNc(2,F,5,3,"button",26),e.qZA()),2&t&&(e.xp6(1),e.Q6J("hasClaim","PRO_MANAGE_WAREHOUSE"),e.xp6(1),e.Q6J("hasClaim","PRO_MANAGE_WAREHOUSE"))}function I(t,a){1&t&&(e.TgZ(0,"th",32),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"NAME")," "))}function j(t,a){if(1&t&&(e.TgZ(0,"td",33),e._uU(1),e.qZA()),2&t){const o=a.$implicit;e.xp6(1),e.hij(" ",o.name," ")}}function q(t,a){1&t&&(e.TgZ(0,"th",32),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"CONTACT_PERSON")," "))}function J(t,a){if(1&t&&(e.TgZ(0,"td",33),e._uU(1),e.qZA()),2&t){const o=a.$implicit;e.xp6(1),e.hij(" ",o.contactPerson," ")}}function Q(t,a){1&t&&(e.TgZ(0,"th",32),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"MOBILE_NUMBER")," "))}function k(t,a){if(1&t&&(e.TgZ(0,"td",33),e._uU(1),e.qZA()),2&t){const o=a.$implicit;e.xp6(1),e.hij(" ",o.mobileNumber," ")}}function $(t,a){1&t&&(e.TgZ(0,"th",32),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"EMAIL")," "))}function G(t,a){if(1&t&&(e.TgZ(0,"td",33),e._uU(1),e.qZA()),2&t){const o=a.$implicit;e.xp6(1),e.hij(" ",o.email," ")}}function B(t,a){1&t&&e._UZ(0,"tr",34)}function V(t,a){1&t&&e._UZ(0,"tr",35)}let X=(()=>{class t extends h.H{constructor(o,n,s){super(s),this.dialog=o,this.commonDialogService=n,this.translationService=s,this.columnsToDisplay=["footer"],this.dataSource=new r.by,this.loading=!1,this.deleteWarehousesHandler=new e.vpe,this.displayedColumns=["action","name","contactPerson","mobileNumber","email"],this.getLangDir()}set warehouses(o){this.dataSource=new r.by(o),this.dataSource.paginator=this.paginator}ngOnInit(){}deleteWarehouse(o){const n=this.translationService.getValue("ARE_YOU_SURE_YOU_WANT_TO_DELETE");this.sub$.sink=this.commonDialogService.deleteConformationDialog(`${n} :: ${o.name}`).subscribe(s=>{s&&this.deleteWarehousesHandler.emit(o.id)})}manageWarehouse(o){this.dialog.open(O,{width:"60vw",direction:this.langDir,data:Object.assign({},o)})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(m.uw),e.Y36(D.V),e.Y36(p.D))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-warehouse-list-presentation"]],viewQuery:function(o,n){if(1&o&&e.Gf(v.NW,7),2&o){let s;e.iGM(s=e.CRH())&&(n.paginator=s.first)}},inputs:{warehouses:"warehouses",loading:"loading"},outputs:{deleteWarehousesHandler:"deleteWarehousesHandler"},features:[e.qOj],decls:28,vars:10,consts:[[1,"page-header-main"],[1,"row","align-items-center","justify-content-between"],[1,"col-md-auto","col-sm-auto","col"],[1,"content-header"],["class","col-md-auto col-sm-auto col-auto",4,"hasClaim"],["class","loading-shade",4,"ngIf"],[1,"table-responsive"],["mat-table","",1,"table","table-bordered","table-hover",3,"dir","dataSource"],["matColumnDef","action"],["class","table-column-200","mat-header-cell","",4,"matHeaderCellDef"],["class","table-column-200","mat-cell","",4,"matCellDef"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","contactPerson"],["matColumnDef","mobileNumber"],["matColumnDef","email"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"col-md-auto","col-sm-auto","col-auto"],[1,"btn","blue-btn","btn-sm","m-right-10",3,"click"],[1,"fas","fa-plus"],[1,"loading-shade"],["mat-header-cell","",1,"table-column-200"],["mat-cell","",1,"table-column-200"],["class","btn btn-success btn-sm m-right-10","type","button",3,"click",4,"hasClaim"],["class","btn btn-danger btn-sm","type","button",3,"click",4,"hasClaim"],["type","button",1,"btn","btn-success","btn-sm","m-right-10",3,"click"],[1,"fas","fa-pencil-alt"],[1,"d-none","d-sm-inline"],["type","button",1,"btn","btn-danger","btn-sm",3,"click"],[1,"fas","fa-trash-alt"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1"),e._uU(5),e.ALo(6,"translate"),e.qZA()()(),e.YNc(7,R,5,3,"div",4),e.qZA()(),e.YNc(8,Y,2,0,"div",5),e.TgZ(9,"div",6)(10,"table",7),e.ynx(11,8),e.YNc(12,y,3,3,"th",9),e.YNc(13,H,3,2,"td",10),e.BQk(),e.ynx(14,11),e.YNc(15,I,3,3,"th",12),e.YNc(16,j,2,1,"td",13),e.BQk(),e.ynx(17,14),e.YNc(18,q,3,3,"th",12),e.YNc(19,J,2,1,"td",13),e.BQk(),e.ynx(20,15),e.YNc(21,Q,3,3,"th",12),e.YNc(22,k,2,1,"td",13),e.BQk(),e.ynx(23,16),e.YNc(24,$,3,3,"th",12),e.YNc(25,G,2,1,"td",13),e.BQk(),e.YNc(26,B,1,0,"tr",17),e.YNc(27,V,1,0,"tr",18),e.qZA()()),2&o&&(e.xp6(5),e.Oqu(e.lcZ(6,8,"WAREHOUSE")),e.xp6(2),e.Q6J("hasClaim","PRO_MANAGE_WAREHOUSE"),e.xp6(1),e.Q6J("ngIf",!n.loading),e.xp6(2),e.Q6J("dir",n.langDir)("dataSource",n.dataSource),e.xp6(16),e.Q6J("matHeaderRowDef",n.displayedColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",n.displayedColumns))},dependencies:[u.O5,M.Lv,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,d.Ou,A.d,Z.X$]}),t})(),z=(()=>{class t extends h.H{constructor(o,n,s){super(s),this.warehouseService=o,this.toastrService=n,this.translationService=s,this.getLangDir()}ngOnInit(){this.loading$=this.warehouseService.loaded$.pipe((0,b.b)(o=>{o||this.getWarehouse()})),this.warehouses$=this.warehouseService.entities$}getWarehouse(){this.warehouseService.getAll()}deleteWarehouse(o){this.sub$.sink=this.warehouseService.delete(o).subscribe(()=>{this.toastrService.success(this.translationService.getValue("WAREHOUSE_DELETED_SUCCESSFULLY"))})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(g.l),e.Y36(_._W),e.Y36(p.D))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-warehouse-list"]],features:[e.qOj],decls:3,vars:6,consts:[[3,"warehouses","loading","deleteWarehousesHandler"]],template:function(o,n){1&o&&(e.TgZ(0,"app-warehouse-list-presentation",0),e.NdJ("deleteWarehousesHandler",function(c){return n.deleteWarehouse(c)}),e.ALo(1,"async"),e.ALo(2,"async"),e.qZA()),2&o&&e.Q6J("warehouses",e.lcZ(1,2,n.warehouses$))("loading",e.lcZ(2,4,n.loading$))},dependencies:[X,u.Ov]}),t})();var C=i(2554);const ee=[{path:"",component:z,data:{claimType:"PRO_MANAGE_WAREHOUSE"},canActivate:[i(319).a]}];let te=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[C.Bz.forChild(ee),C.Bz]}),t})(),oe=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,te,l.UX,r.p0,d.Cq,m.Is,W.m,v.TU]}),t})()}}]);