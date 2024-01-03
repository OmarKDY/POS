"use strict";(self.webpackChunkposadminportal=self.webpackChunkposadminportal||[]).push([[9741],{5519:(U,x,i)=>{i.d(x,{r:()=>p});class p{constructor(){this.fields="",this.orderBy="",this.searchQuery="",this.pageSize=30,this.skip=0,this.name="",this.totalCount=0}}},2845:(U,x,i)=>{i.r(x),i.d(x,{ExpenseModule:()=>mt});var p=i(9808),h=i(520),f=i(6087),g=i(4847),d=i(5355),C=i(8527),m=i(8929),v=i(6787),X=i(13),k=i(5778),H=i(2868),R=i(1490),A=i(591),G=i(2654),F=i(1086),z=i(7221),V=i(537);class K{constructor(o){this.expenseService=o,this._expenseSubject$=new A.X([]),this._responseHeaderSubject$=new A.X(null),this.loadingSubject=new A.X(!1),this.loading$=this.loadingSubject.asObservable(),this._count=0,this.responseHeaderSubject$=this._responseHeaderSubject$.asObservable()}get count(){return this._count}connect(){return this.sub$=new G.w,this._expenseSubject$.asObservable()}disconnect(){this._expenseSubject$.complete(),this.loadingSubject.complete(),this.sub$.unsubscribe()}loadData(o){this.loadingSubject.next(!0),this.sub$=this.expenseService.getExpenses(o).pipe((0,z.K)(()=>(0,F.of)([])),(0,V.x)(()=>this.loadingSubject.next(!1))).subscribe(n=>{const s=JSON.parse(n.headers.get("X-Pagination"));this._responseHeaderSubject$.next(s);const a=[...n.body];this._count=a.length,this._expenseSubject$.next(a)})}}var e=i(5e3),b=i(5941),M=i(2290),W=i(5485),u=i(2554),Y=i(6107),O=i(2916),I=i(1584),Q=i(9785),J=i(226),c=i(3075),y=i(773),N=i(4107),D=i(508),l=i(2075),Z=i(2181),j=i(5245),w=i(7423),ee=i(8708),te=i(8017),P=i(1062);function ne(t,o){1&t&&(e.TgZ(0,"a",43),e._UZ(1,"i",44),e._uU(2),e.ALo(3,"translate"),e.qZA()),2&t&&(e.Q6J("routerLink","/expense/add"),e.xp6(2),e.hij(" ",e.lcZ(3,2,"ADD_EXPENSE")," "))}function se(t,o){1&t&&(e.TgZ(0,"div",45),e._UZ(1,"mat-spinner"),e.qZA())}function oe(t,o){1&t&&e._UZ(0,"th",46)}function ie(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"button",52),e.NdJ("click",function(){e.CHM(n);const a=e.oxw().$implicit,r=e.oxw();return e.KtG(r.editExpense(a.id))}),e.TgZ(1,"mat-icon"),e._uU(2,"edit"),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"translate"),e.qZA()()}2&t&&(e.xp6(4),e.Oqu(e.lcZ(5,1,"EDIT")))}function ae(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"button",52),e.NdJ("click",function(){e.CHM(n);const a=e.oxw().$implicit,r=e.oxw();return e.KtG(r.downloadReceipt(a))}),e.TgZ(1,"mat-icon"),e._uU(2,"cloud_download"),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"translate"),e.qZA()()}2&t&&(e.xp6(4),e.Oqu(e.lcZ(5,1,"DOWNLOAD_RECEIPT")))}function re(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"button",52),e.NdJ("click",function(){e.CHM(n);const a=e.oxw().$implicit,r=e.oxw();return e.KtG(r.deleteExpense(a))}),e.TgZ(1,"mat-icon"),e._uU(2,"delete"),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"translate"),e.qZA()()}2&t&&(e.xp6(4),e.Oqu(e.lcZ(5,1,"DELETE")))}function ce(t,o){if(1&t&&(e.TgZ(0,"td",47)(1,"button",48)(2,"mat-icon"),e._uU(3,"more_vert"),e.qZA()(),e.TgZ(4,"mat-menu",null,49),e.YNc(6,ie,6,3,"button",50),e.YNc(7,ae,6,3,"button",51),e.YNc(8,re,6,3,"button",50),e.qZA()()),2&t){const n=o.$implicit,s=e.MAs(5);e.xp6(1),e.Q6J("matMenuTriggerFor",s),e.xp6(5),e.Q6J("hasClaim","EXP_UPDATE_EXPENSE"),e.xp6(1),e.Q6J("ngIf",n.receiptName),e.xp6(1),e.Q6J("hasClaim","EXP_DELETE_EXPENSE")}}function le(t,o){1&t&&(e.TgZ(0,"th",53),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"CREATED_DATE")," "))}function pe(t,o){if(1&t&&(e.TgZ(0,"td",54),e._uU(1),e.ALo(2,"utcToLocalTime"),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,n.createdDate,"shortDate")," ")}}function me(t,o){1&t&&(e.TgZ(0,"th",53),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"EXPENSE_DATE")," "))}function ue(t,o){if(1&t&&(e.TgZ(0,"td",54),e._uU(1),e.ALo(2,"utcToLocalTime"),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,n.expenseDate,"shortDate")," ")}}function de(t,o){1&t&&(e.TgZ(0,"th",55),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"AMOUNT")," "))}function xe(t,o){if(1&t&&(e.TgZ(0,"td",56),e._uU(1),e.ALo(2,"customCurrency"),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",e.lcZ(2,1,n.amount)," ")}}function ge(t,o){1&t&&(e.TgZ(0,"th",55),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"REFERENCE")," "))}function he(t,o){if(1&t&&(e.TgZ(0,"td",56),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n.reference," ")}}function fe(t,o){1&t&&(e.TgZ(0,"th",57),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"EXPENSE_CATEGORY")," "))}function _e(t,o){if(1&t&&(e.TgZ(0,"td",58),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",null==n.expenseCategory?null:n.expenseCategory.name," ")}}function Ee(t,o){1&t&&(e.TgZ(0,"th",59),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"USER")," "))}function Ce(t,o){if(1&t&&(e.TgZ(0,"td",60),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.AsE(" ",null==n.expenseBy?null:n.expenseBy.firstName," ",null==n.expenseBy?null:n.expenseBy.lastName," ")}}function ve(t,o){1&t&&e._UZ(0,"th",61)}function Ze(t,o){1&t&&e._UZ(0,"th",61)}function Te(t,o){1&t&&e._UZ(0,"th",61)}function Ae(t,o){1&t&&e._UZ(0,"th",61)}function be(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"th",61)(1,"input",62),e.NdJ("ngModelChange",function(a){e.CHM(n);const r=e.oxw();return e.KtG(r.ReferenceFilter=a)}),e.ALo(2,"translate"),e.qZA()()}if(2&t){const n=e.oxw();e.xp6(1),e.s9C("placeholder",e.lcZ(2,2,"REFERENCE")),e.Q6J("ngModel",n.ReferenceFilter)}}function ye(t,o){if(1&t&&(e.TgZ(0,"mat-option",66),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.Q6J("value",n.id),e.xp6(1),e.hij(" ",n.name," ")}}function Ne(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"th",61)(1,"mat-select",63),e.NdJ("ngModelChange",function(a){e.CHM(n);const r=e.oxw();return e.KtG(r.CategoryFilter=a)}),e.ALo(2,"translate"),e.TgZ(3,"mat-option",64),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.YNc(6,ye,2,2,"mat-option",65),e.qZA()()}if(2&t){const n=e.oxw();e.xp6(1),e.s9C("placeholder",e.lcZ(2,5,"EXPENSE_CATEGORY")),e.Q6J("dir",n.langDir)("ngModel",n.CategoryFilter),e.xp6(3),e.Oqu(e.lcZ(5,7,"NONE")),e.xp6(2),e.Q6J("ngForOf",n.expenseCategories)}}function De(t,o){if(1&t&&(e.TgZ(0,"mat-option",66),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.Q6J("value",n.id),e.xp6(1),e.AsE(" ",n.firstName," ",n.lastName," ")}}function Le(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"th",61)(1,"mat-select",67),e.NdJ("ngModelChange",function(a){e.CHM(n);const r=e.oxw();return e.KtG(r.UserFilter=a)}),e.ALo(2,"translate"),e.TgZ(3,"mat-option",66),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.YNc(6,De,2,3,"mat-option",65),e.qZA()()}if(2&t){const n=e.oxw();e.xp6(1),e.s9C("placeholder",e.lcZ(2,5,"USER")),e.Q6J("dir",n.langDir)("ngModel",n.UserFilter),e.xp6(3),e.Oqu(e.lcZ(5,7,"NONE")),e.xp6(2),e.Q6J("ngForOf",n.users)}}const Se=function(){return[15,20,30]};function Ue(t,o){if(1&t&&(e.TgZ(0,"td",68),e._UZ(1,"mat-paginator",69),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("length",n.expenseResource.totalCount)("pageSize",n.expenseResource.pageSize)("pageSizeOptions",e.DdM(3,Se))}}function Re(t,o){1&t&&(e.TgZ(0,"td",68)(1,"b"),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&t&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"NO_DATA_FOUND"),""))}function Fe(t,o){1&t&&(e.ynx(0,70),e.YNc(1,Re,4,3,"td",37),e.BQk())}function Me(t,o){1&t&&(e.TgZ(0,"tr")(1,"td",71)(2,"span",72)(3,"b"),e._uU(4),e.ALo(5,"translate"),e.qZA()()()()),2&t&&(e.xp6(4),e.hij(" ",e.lcZ(5,1,"NO_DATA_FOUND"),""))}function Ye(t,o){1&t&&e._UZ(0,"tr",73)}function Oe(t,o){1&t&&e._UZ(0,"tr",74)}function Ie(t,o){1&t&&e._UZ(0,"tr",73)}function Qe(t,o){1&t&&e._UZ(0,"tr",75)}const Je=function(){return["action-search","date-search","expensedate-search","amount-search","reference-search","expenseCategoryId-search","expenseBy-search"]};let je=(()=>{class t extends R.H{constructor(n,s,a,r,E,S,T){super(E),this.expenseService=n,this.toastrService=s,this.commonDialogService=a,this.router=r,this.translationService=E,this.expenseCategoryService=S,this.userService=T,this.expenses=[],this.displayedColumns=["action","createdDate","expenseDate","amount","reference","expenseCategoryId","expenseBy"],this.footerToDisplayed=["footer"],this.isLoadingResults=!0,this.users=[],this.expenseCategories=[],this.filterObservable$=new m.xQ,this.getLangDir(),this.expenseResource=new d.I,this.expenseResource.pageSize=15,this.expenseResource.orderBy="createdDate asc"}get ReferenceFilter(){return this._referenceFilter}set ReferenceFilter(n){this._referenceFilter=n,this.filterObservable$.next(`reference:${n}`)}get CategoryFilter(){return this._categoryFilter}set CategoryFilter(n){this._categoryFilter=n,this.filterObservable$.next(`expenseCategoryId:${n}`)}get UserFilter(){return this._userFilter}set UserFilter(n){this._userFilter=n||"",this.filterObservable$.next(`expenseById:${this._userFilter}`)}ngOnInit(){this.dataSource=new K(this.expenseService),this.dataSource.loadData(this.expenseResource),this.getResourceParameter(),this.getExpenseCategories(),this.getUsers(),this.sub$.sink=this.filterObservable$.pipe((0,X.b)(1e3),(0,k.x)()).subscribe(n=>{this.expenseResource.skip=0,this.paginator.pageIndex=0;const s=n.split(":");"reference"===s[0]?this.expenseResource.reference=s[1]:"expenseCategoryId"===s[0]?this.expenseResource.expenseCategoryId=s[1]:"expenseById"===s[0]&&(this.expenseResource.expenseById=s[1]),this.dataSource.loadData(this.expenseResource)})}ngAfterViewInit(){this.sort.sortChange.subscribe(()=>this.paginator.pageIndex=0),this.sub$.sink=(0,v.T)(this.sort.sortChange,this.paginator.page).pipe((0,H.b)(n=>{this.expenseResource.skip=this.paginator.pageIndex*this.paginator.pageSize,this.expenseResource.pageSize=this.paginator.pageSize,this.expenseResource.orderBy=this.sort.active+" "+this.sort.direction,this.dataSource.loadData(this.expenseResource)})).subscribe()}getExpenseCategories(){this.expenseCategoryService.getAll().subscribe(n=>{this.expenseCategories=n})}getUsers(){let n=new C.q;n.pageSize=10,n.orderBy="firstName desc",this.sub$.sink=this.userService.getUsers(n).subscribe(s=>{this.users=s.body})}deleteExpense(n){this.sub$.sink=this.commonDialogService.deleteConformationDialog(`${this.translationService.getValue("ARE_YOU_SURE_YOU_WANT_TO_DELETE")}?`).subscribe(s=>{s&&(this.sub$.sink=this.expenseService.deleteExpense(n.id).subscribe(()=>{this.toastrService.success(this.translationService.getValue("EXPENSE_DELETED_SUCCESSFULLY")),this.dataSource.loadData(this.expenseResource)}))})}getResourceParameter(){this.sub$.sink=this.dataSource.responseHeaderSubject$.subscribe(n=>{n&&(this.expenseResource.pageSize=n.pageSize,this.expenseResource.skip=n.skip,this.expenseResource.totalCount=n.totalCount)})}editExpense(n){this.router.navigate(["/expense/manage",n])}downloadReceipt(n){this.sub$.sink=this.expenseService.downloadReceipt(n.id).subscribe(s=>{s.type===h.dt.Response&&this.downloadFile(s,n.receiptName)},s=>{this.toastrService.error(this.translationService.getValue("ERROR_WHILE_DOWNLOADING_DOCUMENT"))})}downloadFile(n,s){const a=new Blob([n.body],{type:n.body.type}),r=document.createElement("a");r.setAttribute("style","display:none;"),document.body.appendChild(r),r.download=s,r.href=URL.createObjectURL(a),r.target="_blank",r.click(),document.body.removeChild(r)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(b.$),e.Y36(M._W),e.Y36(W.V),e.Y36(u.F0),e.Y36(Y.D),e.Y36(O.z),e.Y36(I.K))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-expense-list"]],viewQuery:function(n,s){if(1&n&&(e.Gf(f.NW,5),e.Gf(g.YE,5)),2&n){let a;e.iGM(a=e.CRH())&&(s.paginator=a.first),e.iGM(a=e.CRH())&&(s.sort=a.first)}},features:[e.qOj],decls:58,vars:15,consts:[[1,"page-header-main"],[1,"row","align-items-center","justify-content-between"],[1,"col-md-auto","col-sm-auto","col"],[1,"content-header"],[1,"col-md-auto","col-sm-auto"],["class","btn blue-btn btn-sm m-right-10","routerLinkActive","router-link-active","routerLinkActive","router-link-active",3,"routerLink",4,"hasClaim"],[1,"row"],[1,"col-sm-12"],["class","loading-shade",4,"ngIf"],[1,"table-responsive"],["mat-table","","matSort","","matSortActive","createdDate","matSortDirection","desc",1,"table","table-bordered","table-hover",3,"dir","dataSource"],["matColumnDef","action","sticky",""],["mat-header-cell","","class","table-column-50",4,"matHeaderCellDef"],["mat-cell","","class","table-column-50",4,"matCellDef"],["matColumnDef","createdDate","sticky",""],["mat-header-cell","","mat-sort-header","","class","table-column-150",4,"matHeaderCellDef"],["mat-cell","","class","table-column-150",4,"matCellDef"],["matColumnDef","expenseDate","sticky",""],["matColumnDef","amount"],["mat-header-cell","","mat-sort-header","","class","table-column-200 pl-3",4,"matHeaderCellDef"],["mat-cell","","class","table-column-200 pl-3",4,"matCellDef"],["matColumnDef","reference"],["matColumnDef","expenseCategoryId"],["mat-header-cell","","mat-sort-header","","class","table-column-300",4,"matHeaderCellDef"],["mat-cell","","class","table-column-300",4,"matCellDef"],["matColumnDef","expenseBy"],["mat-header-cell","","mat-sort-header","","class","table-column-200",4,"matHeaderCellDef"],["mat-cell","","class","table-column-200",4,"matCellDef"],["matColumnDef","action-search","sticky",""],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","date-search","sticky",""],["matColumnDef","expensedate-search","sticky",""],["matColumnDef","amount-search","sticky",""],["matColumnDef","reference-search"],["matColumnDef","expenseCategoryId-search"],["matColumnDef","expenseBy-search","sticky",""],["matColumnDef","footer"],["mat-footer-cell","","colspan","7",4,"matFooterCellDef"],["matColumnDef","no-records",4,"ngIf"],[4,"matNoDataRow"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-footer-row","",4,"matFooterRowDef"],["routerLinkActive","router-link-active","routerLinkActive","router-link-active",1,"btn","blue-btn","btn-sm","m-right-10",3,"routerLink"],[1,"fas","fa-plus"],[1,"loading-shade"],["mat-header-cell","",1,"table-column-50"],["mat-cell","",1,"table-column-50"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click",4,"hasClaim"],["mat-menu-item","",3,"click",4,"ngIf"],["mat-menu-item","",3,"click"],["mat-header-cell","","mat-sort-header","",1,"table-column-150"],["mat-cell","",1,"table-column-150"],["mat-header-cell","","mat-sort-header","",1,"table-column-200","pl-3"],["mat-cell","",1,"table-column-200","pl-3"],["mat-header-cell","","mat-sort-header","",1,"table-column-300"],["mat-cell","",1,"table-column-300"],["mat-header-cell","","mat-sort-header","",1,"table-column-200"],["mat-cell","",1,"table-column-200"],["mat-header-cell",""],["type","text",1,"form-control",3,"placeholder","ngModel","ngModelChange"],[1,"form-control","w-90",3,"dir","placeholder","ngModel","ngModelChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"form-control","w-90",3,"dir","ngModel","placeholder","ngModelChange"],["mat-footer-cell","","colspan","7"],[1,"float-left",3,"length","pageSize","pageSizeOptions"],["matColumnDef","no-records"],["colspan","9"],[1,"p-4","mt-4"],["mat-header-row",""],["mat-row",""],["mat-footer-row",""]],template:function(n,s){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1"),e._uU(5),e.ALo(6,"translate"),e.qZA()()(),e.TgZ(7,"div",4),e.YNc(8,ne,4,4,"a",5),e.qZA()()(),e.TgZ(9,"div",6)(10,"div",7),e.YNc(11,se,2,0,"div",8),e.ALo(12,"async"),e.TgZ(13,"div",9)(14,"table",10),e.ynx(15,11),e.YNc(16,oe,1,0,"th",12),e.YNc(17,ce,9,4,"td",13),e.BQk(),e.ynx(18,14),e.YNc(19,le,3,3,"th",15),e.YNc(20,pe,3,4,"td",16),e.BQk(),e.ynx(21,17),e.YNc(22,me,3,3,"th",15),e.YNc(23,ue,3,4,"td",16),e.BQk(),e.ynx(24,18),e.YNc(25,de,3,3,"th",19),e.YNc(26,xe,3,3,"td",20),e.BQk(),e.ynx(27,21),e.YNc(28,ge,3,3,"th",19),e.YNc(29,he,2,1,"td",20),e.BQk(),e.ynx(30,22),e.YNc(31,fe,3,3,"th",23),e.YNc(32,_e,2,1,"td",24),e.BQk(),e.ynx(33,25),e.YNc(34,Ee,3,3,"th",26),e.YNc(35,Ce,2,2,"td",27),e.BQk(),e.ynx(36,28),e.YNc(37,ve,1,0,"th",29),e.BQk(),e.ynx(38,30),e.YNc(39,Ze,1,0,"th",29),e.BQk(),e.ynx(40,31),e.YNc(41,Te,1,0,"th",29),e.BQk(),e.ynx(42,32),e.YNc(43,Ae,1,0,"th",29),e.BQk(),e.ynx(44,33),e.YNc(45,be,3,4,"th",29),e.BQk(),e.ynx(46,34),e.YNc(47,Ne,7,9,"th",29),e.BQk(),e.ynx(48,35),e.YNc(49,Le,7,9,"th",29),e.BQk(),e.ynx(50,36),e.YNc(51,Ue,2,4,"td",37),e.BQk(),e.YNc(52,Fe,2,0,"ng-container",38),e.YNc(53,Me,6,3,"tr",39),e.YNc(54,Ye,1,0,"tr",40),e.YNc(55,Oe,1,0,"tr",41),e.YNc(56,Ie,1,0,"tr",40),e.YNc(57,Qe,1,0,"tr",42),e.qZA()()()()),2&n&&(e.xp6(5),e.Oqu(e.lcZ(6,10,"EXPENSE_LIST")),e.xp6(3),e.Q6J("hasClaim","EXP_ADD_EXPENSE"),e.xp6(3),e.Q6J("ngIf",e.lcZ(12,12,s.dataSource.loading$)),e.xp6(3),e.Q6J("dir",s.langDir)("dataSource",s.dataSource),e.xp6(38),e.Q6J("ngIf",0===s.dataSource.count),e.xp6(2),e.Q6J("matHeaderRowDef",s.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",s.displayedColumns),e.xp6(1),e.Q6J("matHeaderRowDef",e.DdM(14,Je)),e.xp6(1),e.Q6J("matFooterRowDef",s.footerToDisplayed))},dependencies:[p.sg,p.O5,u.yS,u.Od,Q.d,J.Lv,c.Fj,c.JJ,c.On,y.Ou,N.gD,D.ey,f.NW,g.YE,g.nU,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.mD,l.Ke,l.ge,l.ev,l.yh,l.XQ,l.Gk,l.Q2,l.Ee,Z.VK,Z.OP,Z.p6,j.Hw,w.lW,p.Ov,ee.R,te.M,P.X$]}),t})();var L=i(319),B=i(7322),_=i(1122);function we(t,o){1&t&&(e.TgZ(0,"div",15),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"EXPENSE_DATE_IS_REQUIRED")," "))}function Pe(t,o){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,we,3,3,"div",20),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",null==n.expenseForm.get("expenseDate").errors?null:n.expenseForm.get("expenseDate").errors.required)}}function Be(t,o){1&t&&(e.TgZ(0,"div",15),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"AMOUNT_IS_REQUIRED")," "))}function $e(t,o){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,Be,3,3,"div",20),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",null==n.expenseForm.get("amount").errors?null:n.expenseForm.get("amount").errors.required)}}function qe(t,o){if(1&t&&(e.TgZ(0,"mat-option",31),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.Q6J("value",n.id),e.xp6(1),e.hij(" ",n.name," ")}}function Xe(t,o){1&t&&(e.TgZ(0,"div",15),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"EXPENSE_CATEGORY_IS_REQUIRED")," "))}function ke(t,o){if(1&t&&(e.TgZ(0,"mat-option",31),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.Q6J("value",n.id),e.xp6(1),e.AsE(" ",n.firstName," ",n.lastName," ")}}function He(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"div",6)(1,"div",7)(2,"label",32),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"input",33,34),e.NdJ("change",function(a){e.CHM(n);const r=e.oxw();return e.KtG(r.fileEvent(a))}),e.qZA()()()}2&t&&(e.xp6(3),e.hij("",e.lcZ(4,1,"ATTACH_RECEIPT"),":"))}function Ge(t,o){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"a",40),e.NdJ("click",function(){e.CHM(n);const a=e.oxw(3);return e.KtG(a.downloadReceipt())}),e._uU(2),e.qZA(),e.BQk()}if(2&t){const n=e.oxw(3);e.xp6(2),e.hij(" ",n.ReceiptName,"")}}function ze(t,o){if(1&t&&e._uU(0),2&t){const n=e.oxw(3);e.hij(" ",n.ReceiptName," ")}}function Ve(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"div",6)(1,"span",35)(2,"b"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.YNc(5,Ge,3,1,"ng-container",36),e.YNc(6,ze,1,1,"ng-template",null,37,e.W1O),e.qZA(),e.TgZ(8,"span",38),e.NdJ("click",function(){e.CHM(n);const a=e.oxw(2);return e.KtG(a.removeReceipt())}),e._UZ(9,"i",39),e.qZA()()}if(2&t){const n=e.MAs(7),s=e.oxw(2);e.xp6(3),e.hij("",e.lcZ(4,3,"RECEIPT"),":"),e.xp6(2),e.Q6J("ngIf",!s.isReceiptDeleted)("ngIfElse",n)}}function Ke(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"div",6)(1,"span",35)(2,"b"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e._uU(5),e.qZA(),e.TgZ(6,"span",38),e.NdJ("click",function(){e.CHM(n);const a=e.oxw(2);return e.KtG(a.removeReceipt())}),e._UZ(7,"i",39),e.qZA()()}if(2&t){const n=e.oxw(2);e.xp6(3),e.hij("",e.lcZ(4,2,"RECEIPT"),":"),e.xp6(2),e.hij(" ",n.ReceiptName,"")}}function We(t,o){if(1&t&&(e.ynx(0),e.YNc(1,Ve,10,5,"div",25),e.YNc(2,Ke,8,4,"div",25),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.expenseForm.get("id").value),e.xp6(1),e.Q6J("ngIf",!n.expenseForm.get("id").value)}}function et(t,o){1&t&&(e.TgZ(0,"button",41),e._UZ(1,"i",42),e._uU(2),e.ALo(3,"translate"),e.qZA()),2&t&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"SAVE")," "))}function tt(t,o){1&t&&e._UZ(0,"mat-spinner")}function nt(t,o){if(1&t&&(e.TgZ(0,"div",43),e.YNc(1,tt,1,0,"mat-spinner",10),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.isLoading)}}const st=function(){return["EXP_ADD_EXPENSE","EXP_UPDATE_EXPENSE"]},ot=function(){return["/expense"]};let $=(()=>{class t extends R.H{constructor(n,s,a,r,E,S,T,ut){super(T),this.router=n,this.fb=s,this.expenseCategoryService=a,this.userService=r,this.expenseService=E,this.toastrService=S,this.translationService=T,this.activatedRoute=ut,this.users=[],this.expenseCategories=[],this.isLoading=!1,this.isReceiptDeleted=!1,this.getLangDir()}get ReceiptName(){return this.expenseForm.get("receiptName").value}ngOnInit(){this.createExpenseForm(),this.getExpenseCategories(),this.getUsers(),this.activatedRoute.data.subscribe(n=>{this.expenseForm.patchValue(n.expense)})}createExpenseForm(){this.expenseForm=this.fb.group({id:[""],reference:[""],expenseCategoryId:["",[c.kI.required]],amount:["",[c.kI.required]],expenseById:[""],description:[""],expenseDate:[new Date,[c.kI.required]],receiptName:[""],documentData:[],isReceiptChange:[!1]})}getExpenseCategories(){this.expenseCategoryService.getAll().subscribe(n=>{this.expenseCategories=n})}getUsers(){let n=new C.q;n.pageSize=10,n.orderBy="firstName desc",this.userService.getUsers(n).subscribe(s=>{this.users=s.body})}removeReceipt(){this.expenseForm.get("isReceiptChange").setValue(!0),this.expenseForm.get("documentData").setValue(""),this.expenseForm.get("receiptName").setValue("")}fileEvent(n){this.isReceiptDeleted=!0;let s=n.target.files;if(0==s.length)return;const a=s[0],r=new FileReader;r.readAsDataURL(a),r.onload=E=>{this.expenseForm.get("documentData").setValue(r.result.toString()),this.expenseForm.get("receiptName").setValue(a.name),this.expenseForm.get("isReceiptChange").setValue(!0)}}onExpenseSubmit(){if(this.expenseForm.invalid)return void this.expenseForm.markAllAsTouched();const n=this.expenseForm.getRawValue();this.isLoading=!0,n.id?this.expenseService.updateExpense(n.id,n).subscribe(s=>{this.isLoading=!1,this.toastrService.success(this.translationService.getValue("EXPENSE_SAVED_SUCCESSFULLY")),this.router.navigate(["expense"])},()=>this.isLoading=!1):this.expenseService.addExpense(n).subscribe(s=>{this.isLoading=!1,this.toastrService.success(this.translationService.getValue("EXPENSE_SAVED_SUCCESSFULLY")),this.router.navigate(["expense"])},()=>this.isLoading=!1)}downloadReceipt(){const n=this.expenseForm.get("id").value;!n||this.expenseService.downloadReceipt(n).subscribe(s=>{s.type===h.dt.Response&&this.downloadFile(s,this.ReceiptName)},s=>{this.toastrService.error(this.translationService.getValue("ERROR_WHILE_DOWNLOADING_DOCUMENT"))})}downloadFile(n,s){const a=new Blob([n.body],{type:n.body.type}),r=document.createElement("a");r.setAttribute("style","display:none;"),document.body.appendChild(r),r.download=s,r.href=URL.createObjectURL(a),r.target="_blank",r.click(),document.body.removeChild(r)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u.F0),e.Y36(c.QS),e.Y36(O.z),e.Y36(I.K),e.Y36(b.$),e.Y36(M._W),e.Y36(Y.D),e.Y36(u.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-manage-expense"]],features:[e.qOj],decls:73,vars:57,consts:[[1,"page-header-main"],[1,"row","align-items-center","justify-content-between"],[1,"col-md-auto","col-sm-auto"],[1,"content-header"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md-6"],[1,"form-group"],["for","expenseDate",1,"text-danger"],["id","expenseDate","formControlName","expenseDate",1,"form-control",3,"owlDateTimeTrigger","owlDateTime","placeholder"],[4,"ngIf"],[3,"pickerType"],["expenseDate",""],["formControlName","reference","type","text",1,"form-control","w-100"],[1,"col-md-4"],[1,"text-danger"],["formControlName","amount","type","number",1,"form-control","w-100"],["formControlName","expenseCategoryId",1,"form-control",3,"dir","placeholder"],["value",""],[3,"value",4,"ngFor","ngForOf"],["class","text-danger",4,"ngIf"],["formControlName","expenseById",1,"form-control",3,"dir","placeholder"],[1,"col-md-12"],["formControlName","description","cols","30","rows","5",1,"form-control","w-100"],[1,"row","mt-2"],["class","col-md-6",4,"ngIf"],[1,"col-md-12","mb-1"],["type","submit","class","btn btn-success btn-sm m-right-10",4,"hasClaim"],["type","button",1,"btn","btn-danger","btn-sm",3,"routerLink"],[1,"fas","fa-times-circle"],["class","loading-shade",4,"ngIf"],[3,"value"],["for","txtName",1,"col-form-label","mr-2"],["name","file","type","file","name","Upload File","fxFlex","30",3,"change"],["fileInput",""],[1,"mr-3"],[4,"ngIf","ngIfElse"],["showReceipt",""],[1,"btn","btn-sm",3,"click"],[1,"fas","fa-trash-alt","text-danger"],["href","javascript:;",3,"click"],["type","submit",1,"btn","btn-success","btn-sm","m-right-10"],[1,"fas","fa-save"],[1,"loading-shade"]],template:function(n,s){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1"),e._uU(5),e.ALo(6,"translate"),e.qZA()()()()(),e.TgZ(7,"form",4),e.NdJ("ngSubmit",function(){return s.onExpenseSubmit()}),e.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"label",8),e._uU(12),e.ALo(13,"translate"),e.qZA(),e._UZ(14,"input",9),e.ALo(15,"translate"),e.YNc(16,Pe,2,1,"div",10),e._UZ(17,"owl-date-time",11,12),e.qZA()(),e.TgZ(19,"div",6)(20,"div",7)(21,"label"),e._uU(22),e.ALo(23,"translate"),e.qZA(),e._UZ(24,"input",13),e.qZA()()(),e.TgZ(25,"div",5)(26,"div",14)(27,"div",7)(28,"label",15),e._uU(29),e.ALo(30,"translate"),e.qZA(),e._UZ(31,"input",16),e.YNc(32,$e,2,1,"div",10),e.qZA()(),e.TgZ(33,"div",14)(34,"div",7)(35,"mat-label",15),e._uU(36),e.ALo(37,"translate"),e.qZA(),e.TgZ(38,"mat-select",17),e.ALo(39,"translate"),e.TgZ(40,"mat-option",18),e._uU(41),e.ALo(42,"translate"),e.qZA(),e.YNc(43,qe,2,2,"mat-option",19),e.qZA(),e.YNc(44,Xe,3,3,"div",20),e.qZA()(),e.TgZ(45,"div",14)(46,"div",7)(47,"mat-label"),e._uU(48),e.ALo(49,"translate"),e.qZA(),e.TgZ(50,"mat-select",21),e.ALo(51,"translate"),e.TgZ(52,"mat-option"),e._uU(53),e.ALo(54,"translate"),e.qZA(),e.YNc(55,ke,2,3,"mat-option",19),e.qZA()()()(),e.TgZ(56,"div",5)(57,"div",22)(58,"label"),e._uU(59),e.ALo(60,"translate"),e.qZA(),e._UZ(61,"textarea",23),e.qZA()(),e.TgZ(62,"div",24),e.YNc(63,He,7,3,"div",25),e.YNc(64,We,3,2,"ng-container",10),e.qZA(),e.TgZ(65,"div",24)(66,"div",26),e.YNc(67,et,4,3,"button",27),e.TgZ(68,"button",28),e._UZ(69,"i",29),e._uU(70),e.ALo(71,"translate"),e.qZA()()()(),e.YNc(72,nt,2,1,"div",30)),2&n){const a=e.MAs(18);e.xp6(5),e.Oqu(e.lcZ(6,29,"MANAGE_EXPENSE")),e.xp6(2),e.Q6J("formGroup",s.expenseForm),e.xp6(5),e.hij("",e.lcZ(13,31,"DATE")," *"),e.xp6(2),e.s9C("placeholder",e.lcZ(15,33,"DATE")),e.Q6J("owlDateTimeTrigger",a)("owlDateTime",a),e.xp6(2),e.Q6J("ngIf",s.expenseForm.get("expenseDate").touched&&s.expenseForm.get("expenseDate").errors),e.xp6(1),e.Q6J("pickerType","calendar"),e.xp6(5),e.hij("",e.lcZ(23,35,"REFERENCE")," "),e.xp6(7),e.hij("",e.lcZ(30,37,"AMOUNT")," * "),e.xp6(3),e.Q6J("ngIf",s.expenseForm.get("amount").touched&&s.expenseForm.get("amount").errors),e.xp6(4),e.hij("",e.lcZ(37,39,"EXPENSE_CATEGORY")," *"),e.xp6(2),e.s9C("placeholder",e.lcZ(39,41,"EXPENSE_CATEGORY")),e.Q6J("dir",s.langDir),e.xp6(3),e.Oqu(e.lcZ(42,43,"NONE")),e.xp6(2),e.Q6J("ngForOf",s.expenseCategories),e.xp6(1),e.Q6J("ngIf",s.expenseForm.get("expenseCategoryId").touched&&(null==s.expenseForm.get("expenseCategoryId").errors?null:s.expenseForm.get("expenseCategoryId").errors.required)),e.xp6(4),e.hij("",e.lcZ(49,45,"USER")," "),e.xp6(2),e.s9C("placeholder",e.lcZ(51,47,"USER")),e.Q6J("dir",s.langDir),e.xp6(3),e.Oqu(e.lcZ(54,49,"NONE")),e.xp6(2),e.Q6J("ngForOf",s.users),e.xp6(4),e.hij("",e.lcZ(60,51,"NOTE")," "),e.xp6(4),e.Q6J("ngIf",!s.ReceiptName),e.xp6(1),e.Q6J("ngIf",s.ReceiptName),e.xp6(3),e.Q6J("hasClaim",e.DdM(55,st)),e.xp6(1),e.Q6J("routerLink",e.DdM(56,ot)),e.xp6(2),e.hij(" ",e.lcZ(71,53,"CANCEL")," "),e.xp6(2),e.Q6J("ngIf",s.isLoading)}},dependencies:[p.sg,p.O5,u.rH,Q.d,J.Lv,c._Y,c.Fj,c.wV,c.JJ,c.JL,c.sg,c.u,B.hX,y.Ou,N.gD,D.ey,_.sZ,_.BO,_.hV,P.X$]}),t})();var it=i(2986),at=i(1709);let q=(()=>{class t{constructor(n,s){this.expenseService=n,this.router=s}resolve(n,s){const a=n.paramMap.get("id");return"addItem"===a?null:this.expenseService.getExpense(a).pipe((0,it.q)(1),(0,at.zg)(r=>r?(0,F.of)(r):(this.router.navigate(["/expense"]),null)))}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(b.$),e.LFG(u.F0))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();const rt=[{path:"",component:je,data:{claimType:"EXP_VIEW_EXPENSES"},canActivate:[L.a]},{path:"add",component:$,data:{claimType:"EXP_ADD_EXPENSE"},canActivate:[L.a]},{path:"manage/:id",component:$,resolve:{expense:q},data:{claimType:"EXP_UPDATE_EXPENSE"},canActivate:[L.a]}];let ct=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(rt),u.Bz]}),t})();var lt=i(7108),pt=i(7531);let mt=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[q],imports:[p.ez,ct,D.XK,lt.m,c.u5,c.UX,B.lN,pt.c,y.Cq,N.LD,f.TU,g.JX,l.p0,Z.Tx,j.Ps,w.ot,_.Ll,_.x]}),t})()},8708:(U,x,i)=>{i.d(x,{R:()=>g});var p=i(5e3),h=i(9808),f=i(130);let g=(()=>{class d{constructor(m,v){this.currencyPipe=m,this.securityService=v}transform(m,v){return this.currencyPipe.transform(m=null!=m?m:0,this.securityService.currencyCode)}}return d.\u0275fac=function(m){return new(m||d)(p.Y36(h.H9,16),p.Y36(f.I,16))},d.\u0275pipe=p.Yjl({name:"customCurrency",type:d,pure:!0}),d})()}}]);