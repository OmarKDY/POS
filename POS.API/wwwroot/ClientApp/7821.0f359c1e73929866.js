"use strict";(self.webpackChunkposadminportal=self.webpackChunkposadminportal||[]).push([[7821],{6946:(A,c,o)=>{o.d(c,{C:()=>i});const i=[{id:0,name:"CASH"},{id:1,name:"CHEQUE"},{id:2,name:"CREDIT_CARD"},{id:3,name:"GIFT_CARD"},{id:4,name:"OTHER"}]},708:(A,c,o)=>{o.d(c,{e:()=>h});var m=o(5519),i=o(2);class h extends m.r{constructor(){super(...arguments),this.orderNumber="",this.customerName="",this.customerId="",this.isSalesOrderRequest=!1,this.status=i.q.All}}},2:(A,c,o)=>{o.d(c,{q:()=>m});var m=(()=>{return(i=m||(m={}))[i.Not_Return=0]="Not_Return",i[i.Return=1]="Return",i[i.All=2]="All",m;var i})()},7821:(A,c,o)=>{o.r(c),o.d(c,{SalesPaymentReportModule:()=>Pt});var m=o(9808),i=o(2554),h=o(319),g=o(6087),d=o(4847),p=o(708),f=o(8287),u=o(8708),y=o(7432),D=o(2989),C=o(8017),M=o(6787),b=o(2868),U=o(1490),P=o(591),L=o(2654),Y=o(1086),j=o(7221),I=o(537);class F{constructor(n){this.salesPaymentReportService=n,this._salesOrderSubject$=new P.X([]),this._responseHeaderSubject$=new P.X(null),this.loadingSubject=new P.X(!1),this.loading$=this.loadingSubject.asObservable(),this._count=0,this.responseHeaderSubject$=this._responseHeaderSubject$.asObservable()}get count(){return this._count}connect(){return this.sub$=new L.w,this._salesOrderSubject$.asObservable()}disconnect(){this._salesOrderSubject$.complete(),this.loadingSubject.complete(),this.sub$.unsubscribe()}loadData(n){this.loadingSubject.next(!0),this.sub$=this.salesPaymentReportService.getAllSalesOrderPaymentReport(n).pipe((0,j.K)(()=>(0,Y.of)([])),(0,I.x)(()=>this.loadingSubject.next(!1))).subscribe(e=>{if(e&&e.headers){const r=JSON.parse(e.headers.get("X-Pagination"));this._responseHeaderSubject$.next(r);const s=[...e.body];this._count=s.length,this._salesOrderSubject$.next(s)}})}}var Z=o(574),t=o(5e3),N=o(520);let B=(()=>{class a{constructor(e){this.httpClient=e}getAllSalesOrderPaymentReport(e){const s=(new N.LE).set("Fields",e.fields).set("OrderBy",e.orderBy).set("PageSize",e.pageSize.toString()).set("Skip",e.skip.toString()).set("SearchQuery",e.searchQuery).set("name",e.name).set("orderNumber",e.orderNumber).set("customerName",e.customerName).set("fromDate",e.fromDate?e.fromDate.toDateString():"").set("toDate",e.toDate?e.toDate.toDateString():"").set("productId",e.productId?e.productId:"").set("customerId",e.customerId?e.customerId:"").set("isSalesOrderRequest",e.isSalesOrderRequest);return this.httpClient.get("SalesOrderPayment/report",{params:s,observe:"response"})}getAllSalesOrderPaymentReportExcel(e){const s=(new N.LE).set("Fields",e.fields).set("OrderBy",e.orderBy).set("PageSize","0").set("Skip","0").set("SearchQuery",e.searchQuery).set("name",e.name).set("orderNumber",e.orderNumber).set("customerName",e.customerName).set("fromDate",e.fromDate?e.fromDate.toDateString():"").set("toDate",e.toDate?e.toDate.toDateString():"").set("productId",e.productId?e.productId:"").set("customerId",e.customerId?e.customerId:"").set("isSalesOrderRequest",e.isSalesOrderRequest);return this.httpClient.get("SalesOrderPayment/report",{params:s,observe:"response"})}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(N.eN))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var Q=o(2290),J=o(5485),$=o(6107),S=o(3075),z=o(226),l=o(2075),x=o(773),O=o(1122),H=o(1062);function _(a,n){1&a&&(t.TgZ(0,"div",41),t._UZ(1,"mat-spinner"),t.qZA())}function V(a,n){1&a&&(t.TgZ(0,"div",43),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"DATE_RANGE_VALIDATION_MSG")," "))}function w(a,n){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,V,3,3,"div",42),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.searchForm.errors?null:e.searchForm.errors.dateRange)}}function G(a,n){1&a&&(t.TgZ(0,"th",44),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"PAYMENT_DATE")," "))}function W(a,n){if(1&a&&(t.TgZ(0,"td",45),t._uU(1),t.ALo(2,"utcToLocalTime"),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.paymentDate,"shortDate")," ")}}function X(a,n){1&a&&(t.TgZ(0,"th",44),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a&&(t.xp6(1),t.hij("",t.lcZ(2,1,"SO_NUMBER")," "))}const K=function(a){return["/sales-order/detail",a]};function k(a,n){if(1&a&&(t.TgZ(0,"td",45)(1,"a",46),t._uU(2),t.qZA()()),2&a){const e=n.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(2,K,e.salesOrderId)),t.xp6(1),t.hij("",e.orderNumber," ")}}function q(a,n){1&a&&(t.TgZ(0,"th",44),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"REFERENCE_NUMBER")," "))}function tt(a,n){if(1&a&&(t.TgZ(0,"td",45),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.hij(" ",e.referenceNumber," ")}}function et(a,n){1&a&&(t.TgZ(0,"th",44),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"AMOUNT")," "))}function at(a,n){if(1&a&&(t.TgZ(0,"td",45),t._uU(1),t.ALo(2,"customCurrency"),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,e.amount)," ")}}function ot(a,n){1&a&&(t.TgZ(0,"th",44),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"PAID_BY"),""))}function nt(a,n){if(1&a&&(t.TgZ(0,"td",45),t._uU(1),t.ALo(2,"paymentmethod"),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,e.paymentMethod)," ")}}const rt=function(){return[10,20,30]};function st(a,n){if(1&a&&(t.TgZ(0,"td",47),t._UZ(1,"mat-paginator",48),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("length",e.salesOrderResource.totalCount)("pageSize",e.salesOrderResource.pageSize)("pageSizeOptions",t.DdM(3,rt))}}function it(a,n){1&a&&(t.TgZ(0,"tr")(1,"td",49)(2,"span",50)(3,"b"),t._uU(4),t.ALo(5,"translate"),t.qZA()()()()),2&a&&(t.xp6(4),t.hij(" ",t.lcZ(5,1,"NO_DATA_FOUND"),""))}function lt(a,n){1&a&&t._UZ(0,"tr",51)}function mt(a,n){1&a&&t._UZ(0,"tr",52)}function ct(a,n){1&a&&t._UZ(0,"tr",53)}const dt=[{path:"",component:(()=>{class a extends U.H{constructor(e,r,s,R,T,E,v,Nt){super(R),this.salesPaymentReportService=e,this.toastrService=r,this.commonDialogService=s,this.translationService=R,this.fb=T,this.utcToLocalTime=E,this.customCurrencyPipe=v,this.paymentMethodPipe=Nt,this.isData=!1,this.isDeleted=!1,this.currentDate=new Date,this.displayedColumns=["paymentDate","orderNumber","referenceNumber","amount","paymentMethod"],this.footerToDisplayed=["footer"],this.getLangDir(),this.salesOrderResource=new p.e}ngOnInit(){this.createSearchFormGroup(),this.dataSource=new F(this.salesPaymentReportService),this.dataSource.loadData(this.salesOrderResource),this.getResourceParameter()}createSearchFormGroup(){this.searchForm=this.fb.group({fromDate:[""],toDate:[""],filterProductValue:[""]},{validators:(0,f.L)()})}onSearch(){this.searchForm.valid&&(this.salesOrderResource.fromDate=this.searchForm.get("fromDate").value,this.salesOrderResource.toDate=this.searchForm.get("toDate").value,this.dataSource.loadData(this.salesOrderResource))}onClear(){this.searchForm.reset(),this.salesOrderResource.fromDate=this.searchForm.get("fromDate").value,this.salesOrderResource.toDate=this.searchForm.get("toDate").value,this.dataSource.loadData(this.salesOrderResource)}ngAfterViewInit(){this.sort.sortChange.subscribe(()=>this.paginator.pageIndex=0),this.sub$.sink=(0,M.T)(this.sort.sortChange,this.paginator.page).pipe((0,b.b)(e=>{this.salesOrderResource.skip=this.paginator.pageIndex*this.paginator.pageSize,this.salesOrderResource.pageSize=this.paginator.pageSize,this.salesOrderResource.orderBy=this.sort.active+" "+this.sort.direction,this.dataSource.loadData(this.salesOrderResource)})).subscribe()}getResourceParameter(){this.sub$.sink=this.dataSource.responseHeaderSubject$.subscribe(e=>{e&&(this.salesOrderResource.pageSize=e.pageSize,this.salesOrderResource.skip=e.skip,this.salesOrderResource.totalCount=e.totalCount)})}onDownloadReport(){this.salesPaymentReportService.getAllSalesOrderPaymentReportExcel(this.salesOrderResource).subscribe(e=>{const r=[...e.body];let s=[[this.translationService.getValue("PAYMENT_DATE"),this.translationService.getValue("SO_NUMBER"),this.translationService.getValue("REFERENCE_NUMBER"),this.translationService.getValue("AMOUNT"),this.translationService.getValue("PAID_BY")]],R=[];r.forEach(v=>{R.push({PAYMENT_DATE:this.utcToLocalTime.transform(v.paymentDate,"shortDate"),SO_NUMBER:v.orderNumber,REFERENCE_NUMBER:v.referenceNumber,AMOUNT:this.customCurrencyPipe.transform(v.amount),PAID_BY:this.paymentMethodPipe.transform(v.paymentMethod)})});let T=Z.P6.book_new();Z.P6.sheet_add_aoa(T,s);let E=Z.P6.sheet_add_json(T,R,{origin:"A2",skipHeader:!0});Z.P6.book_append_sheet(T,E,this.translationService.getValue("SALES_PAYMENT_ORDER_REPORT")),Z.NC(T,this.translationService.getValue("SALES_PAYMENT_ORDER_REPORT")+".xlsx")})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(B),t.Y36(Q._W),t.Y36(J.V),t.Y36($.D),t.Y36(S.QS),t.Y36(C.M),t.Y36(u.R),t.Y36(y.D))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-sales-payment-report"]],viewQuery:function(e,r){if(1&e&&(t.Gf(g.NW,5),t.Gf(d.YE,5)),2&e){let s;t.iGM(s=t.CRH())&&(r.paginator=s.first),t.iGM(s=t.CRH())&&(r.sort=s.first)}},features:[t._Bn([C.M,u.R,D.r,y.D]),t.qOj],decls:72,vars:44,consts:[[1,"page-header-main"],[1,"row","align-items-center","justify-content-between"],[1,"col-md-auto","col-sm-auto"],[1,"content-header"],["class","loading-shade",4,"ngIf"],[1,"row"],[1,"col-sm-12","mb-3"],[3,"formGroup"],[1,"col-md-3"],[1,"form-group"],["for","fromDate"],["id","fromDate","formControlName","fromDate",1,"form-control",3,"max","owlDateTimeTrigger","owlDateTime","placeholder"],[3,"pickerType"],["fromDate",""],["for","toDate"],["id","toDate","formControlName","toDate",1,"form-control",3,"max","owlDateTimeTrigger","owlDateTime","placeholder"],["toDate",""],[1,"col-md-4","report-tool-bar"],["type","submit",1,"btn","btn-primary","btn-sm","m-right-10",3,"click"],[1,"fas","fa-search"],["type","submit",1,"btn","btn-danger","btn-sm","m-right-10",3,"click"],[1,"fas","fa-eraser"],["type","submit",1,"btn","btn-warning","btn-sm","m-right-10",3,"click"],[1,"fas","fa-download"],[1,"col-sm-12"],[4,"ngIf"],[1,"table-responsive"],["mat-table","","matSort","","matSortActive","paymentDate",1,"table","table-bordered","table-hover",3,"dir","dataSource"],["matColumnDef","paymentDate"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","orderNumber"],["matColumnDef","referenceNumber"],["matColumnDef","amount"],["matColumnDef","paymentMethod"],["matColumnDef","footer"],["mat-footer-cell","","colspan","12",4,"matFooterCellDef"],[4,"matNoDataRow"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-footer-row","",4,"matFooterRowDef","matFooterRowDefSticky"],[1,"loading-shade"],["class","text-danger",4,"ngIf"],[1,"text-danger"],["mat-header-cell",""],["mat-cell",""],[3,"routerLink"],["mat-footer-cell","","colspan","12"],[3,"length","pageSize","pageSizeOptions"],["colspan","9"],[1,"p-4","mt-4"],["mat-header-row",""],["mat-row",""],["mat-footer-row",""]],template:function(e,r){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1"),t._uU(5),t.ALo(6,"translate"),t.qZA()()()()(),t.YNc(7,_,2,0,"div",4),t.ALo(8,"async"),t.TgZ(9,"div",5)(10,"div",6)(11,"form",7)(12,"div",5)(13,"div",8)(14,"div",9)(15,"label",10),t._uU(16),t.ALo(17,"translate"),t.qZA(),t._UZ(18,"input",11),t.ALo(19,"translate"),t._UZ(20,"owl-date-time",12,13),t.qZA()(),t.TgZ(22,"div",8)(23,"div",9)(24,"label",14),t._uU(25),t.ALo(26,"translate"),t.qZA(),t._UZ(27,"input",15),t.ALo(28,"translate"),t._UZ(29,"owl-date-time",12,16),t.qZA()(),t.TgZ(31,"div",17)(32,"button",18),t.NdJ("click",function(){return r.onSearch()}),t._UZ(33,"i",19),t._uU(34),t.ALo(35,"translate"),t.qZA(),t.TgZ(36,"button",20),t.NdJ("click",function(){return r.onClear()}),t._UZ(37,"i",21),t._uU(38),t.ALo(39,"translate"),t.qZA(),t.TgZ(40,"button",22),t.NdJ("click",function(){return r.onDownloadReport()}),t._UZ(41,"i",23),t._uU(42),t.ALo(43,"translate"),t.qZA()()(),t.TgZ(44,"div",5)(45,"div",24),t.YNc(46,w,2,1,"div",25),t.qZA()()()()(),t.TgZ(47,"div",5)(48,"div",24)(49,"div",26)(50,"table",27),t.ynx(51,28),t.YNc(52,G,3,3,"th",29),t.YNc(53,W,3,4,"td",30),t.BQk(),t.ynx(54,31),t.YNc(55,X,3,3,"th",29),t.YNc(56,k,3,4,"td",30),t.BQk(),t.ynx(57,32),t.YNc(58,q,3,3,"th",29),t.YNc(59,tt,2,1,"td",30),t.BQk(),t.ynx(60,33),t.YNc(61,et,3,3,"th",29),t.YNc(62,at,3,3,"td",30),t.BQk(),t.ynx(63,34),t.YNc(64,ot,3,3,"th",29),t.YNc(65,nt,3,3,"td",30),t.BQk(),t.ynx(66,35),t.YNc(67,st,2,4,"td",36),t.BQk(),t.YNc(68,it,6,3,"tr",37),t.YNc(69,lt,1,0,"tr",38),t.YNc(70,mt,1,0,"tr",39),t.YNc(71,ct,1,0,"tr",40),t.qZA()()()()),2&e){const s=t.MAs(21),R=t.MAs(30);t.xp6(5),t.Oqu(t.lcZ(6,26,"SALES_PAYMENT_REPORT")),t.xp6(2),t.Q6J("ngIf",t.lcZ(8,28,r.dataSource.loading$)),t.xp6(4),t.Q6J("formGroup",r.searchForm),t.xp6(5),t.hij("",t.lcZ(17,30,"FROM_DATE")," "),t.xp6(2),t.s9C("placeholder",t.lcZ(19,32,"FROM_DATE")),t.Q6J("max",r.currentDate)("owlDateTimeTrigger",s)("owlDateTime",s),t.xp6(2),t.Q6J("pickerType","calendar"),t.xp6(5),t.hij("",t.lcZ(26,34,"TO_DATE")," "),t.xp6(2),t.s9C("placeholder",t.lcZ(28,36,"TO_DATE")),t.Q6J("max",r.currentDate)("owlDateTimeTrigger",R)("owlDateTime",R),t.xp6(2),t.Q6J("pickerType","calendar"),t.xp6(5),t.hij(" ",t.lcZ(35,38,"SEARCH")," "),t.xp6(4),t.hij(" ",t.lcZ(39,40,"CLEAR")," "),t.xp6(4),t.hij(" ",t.lcZ(43,42,"DOWNLOAD_REPORT")," "),t.xp6(4),t.Q6J("ngIf",r.searchForm.errors),t.xp6(4),t.Q6J("dir",r.langDir)("dataSource",r.dataSource),t.xp6(19),t.Q6J("matHeaderRowDef",r.displayedColumns)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",r.displayedColumns),t.xp6(1),t.Q6J("matFooterRowDef",r.footerToDisplayed)("matFooterRowDefSticky",!0)}},dependencies:[m.O5,i.yS,S._Y,S.Fj,S.JJ,S.JL,S.sg,S.u,z.Lv,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.mD,l.Ke,l.ge,l.ev,l.yh,l.XQ,l.Gk,l.Q2,l.Ee,g.NW,d.YE,x.Ou,O.sZ,O.BO,O.hV,m.Ov,u.R,y.D,C.M,H.X$]}),a})(),data:{claimType:"REP_SO_PAYMENT_REP"},canActivate:[h.a]}];let pt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[i.Bz.forChild(dt),i.Bz]}),a})();var ut=o(7108),ht=o(6856),ft=o(508),St=o(7531),gt=o(7322),Rt=o(9224),yt=o(2181),vt=o(5245),Dt=o(7423),Tt=o(4107),At=o(7446),Ct=o(4834),Zt=o(2349),Ot=o(1079);let Pt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[m.ez,pt,S.u5,S.UX,ut.m,ht.FA,ft.XK,St.c,gt.lN,Rt.QW,l.p0,g.TU,d.JX,yt.Tx,vt.Ps,Dt.ot,Tt.LD,x.Cq,O.Ll,O.x,At.p9,Ct.t,Zt.Is,Ot.Bb]}),a})()},7432:(A,c,o)=>{o.d(c,{D:()=>g});var m=o(6946),i=o(5e3),h=o(6107);let g=(()=>{class d{constructor(f){this.translationService=f}transform(f,...u){const y=m.C.find(D=>D.id==f);return y?this.translationService.getValue(y.name):""}}return d.\u0275fac=function(f){return new(f||d)(i.Y36(h.D,16))},d.\u0275pipe=i.Yjl({name:"paymentmethod",type:d,pure:!0}),d})()},2989:(A,c,o)=>{o.d(c,{r:()=>d});const i=[{id:0,name:"Paid"},{id:1,name:"Pending"},{id:2,name:"Partial"}];var h=o(5e3),g=o(6107);let d=(()=>{class p{constructor(u){this.translationService=u}transform(u,...y){const D=i.find(C=>C.id==u);return D?this.translationService.getValue(D.name.replace(" ","_").toUpperCase()):""}}return p.\u0275fac=function(u){return new(u||p)(h.Y36(g.D,16))},p.\u0275pipe=h.Yjl({name:"paymentStatus",type:p,pure:!0}),p})()}}]);