"use strict";(self.webpackChunkposadminportal=self.webpackChunkposadminportal||[]).push([[838],{796:(A,v,i)=>{i.d(v,{f:()=>m});var h=i(5519);class m extends h.r{constructor(){super(...arguments),this.name="",this.unitId="",this.barcode="",this.categoryId="",this.brandId="",this.id=""}}},2:(A,v,i)=>{i.d(v,{q:()=>h});var h=(()=>{return(m=h||(h={}))[m.Not_Return=0]="Not_Return",m[m.Return=1]="Return",m[m.All=2]="All",h;var m})()},1781:(A,v,i)=>{i.d(v,{v:()=>x});var h=i(1086),m=i(520),C=i(5e3);let x=(()=>{class _{constructor(l){this.http=l}getCustomers(l){const d=(new m.LE).set("fields",l.fields).set("orderBy",l.orderBy).set("pageSize",l.pageSize.toString()).set("skip",l.skip.toString()).set("searchQuery",l.searchQuery).set("customerName",l.customerName).set("mobileNo",l.mobileNo).set("phoneNo",l.phoneNo).set("email",l.email).set("contactPerson",l.contactPerson).set("website",l.website);return this.http.get("customer",{params:d,observe:"response"})}getCustomersForDropDown(l,o){if(o&&l){let f=`?searchQuery=${o.trim()}&searchBy=${l}&pageSize=10`;return this.http.get("customer/search"+f)}return(0,h.of)([])}getWalkInCustomer(){return this.http.get("customer/walkIn")}getCustomer(l){return this.http.get("customer/"+l)}deleteCustomer(l){return this.http.delete("customer/"+l)}updateCustomer(l,o){return this.http.put("customer/"+l,o)}saveCustomer(l){return this.http.post("customer",l)}checkEmailOrPhoneExist(l,o,d){return this.http.get(`customer/${d}/Exist?email=${l}&mobileNo=${o}`)}getCustomerPayments(l){const d=(new m.LE).set("Fields",l.fields).set("OrderBy",l.orderBy).set("PageSize",l.pageSize.toString()).set("Skip",l.skip.toString()).set("SearchQuery",l.searchQuery).set("customerName",l.customerName);return this.http.get("customer/GetCustomerPayment",{params:d,observe:"response"})}getCustomerPaymentsReport(l){const d=(new m.LE).set("Fields",l.fields).set("OrderBy",l.orderBy).set("PageSize",l.pageSize.toString()).set("Skip",l.skip.toString()).set("SearchQuery",l.searchQuery).set("customerName",l.customerName);return this.http.get("customer/GetCustomerPayment/report",{params:d,observe:"response"})}}return _.\u0275fac=function(l){return new(l||_)(C.LFG(m.eN))},_.\u0275prov=C.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},838:(A,v,i)=>{i.r(v),i.d(v,{PosModule:()=>Wt});var h=i(2554),m=i(319),C=i(9147),x=i(8394),_=i(3349),a=i(3075),l=i(3231),o=i(3007),d=i(2746),f=i(796),q=i(2),J=i(2340),T=i(6521),S=i(6695),Z=i(13),y=i(5778),D=i(7545),Y=i(2868),V=i(1490),t=i(5e3),j=i(1781),$=i(2290),H=i(2679),w=i(5528),G=i(6107),K=i(8265),N=i(9808),z=i(9785),k=i(226),P=i(4107),U=i(508),E=i(5245),b=i(7423),F=i(773),L=i(4834),W=i(8929),X=i(5254),tt=i(3753),et=i(1709),rt=i(4850),ot=i(2198),st=i(7625);let nt=(()=>{class r{constructor(e){this.elementRef=e,this.debounce=0,this.skipStart=0,this.onDelete=new t.vpe,this.onDetected=new t.vpe,this.destroy$=new W.xQ}ngAfterViewInit(){const n={};(0,X.D)(["keydown","keyup"]).pipe((0,et.zg)(s=>(0,tt.R)(this.elementRef.nativeElement,s)),(0,rt.U)(s=>{switch(s.type){case"keydown":n[s.which]=s.timeStamp;break;case"keyup":Object.assign(s,{duration:(s.timeStamp-n[s.which])/1e3})}return s}),(0,ot.h)(s=>((8===s.keyCode||"Backspace"===s.code||8===s.which)&&this.onDelete.emit({event:s,value:s.target.value,type:"delete"}),s.target.value.length>this.skipStart)),(0,Z.b)(this.debounce),(0,y.x)()).pipe((0,st.R)(this.destroy$)).subscribe(s=>{s.duration>.02?this.onDetected.emit({event:s,value:s.target.value,time:s.duration,type:"keyboard"}):s.duration<=.02&&this.onDetected.emit({event:s,value:s.target.value,time:s.duration,type:"scanner"})})}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(t.SBq))},r.\u0275dir=t.lG2({type:r,selectors:[["","ngxBarCodePut",""]],inputs:{debounce:"debounce",skipStart:"skipStart"},outputs:{onDelete:"onDelete",onDetected:"onDetected"}}),r})(),it=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({}),r})();var at=i(8708),lt=i(1062);const ct=["filterValue"];function dt(r,c){if(1&r&&(t.TgZ(0,"mat-option",41),t._uU(1),t.qZA()),2&r){const e=c.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.customerName," ")}}function ut(r,c){1&r&&(t.TgZ(0,"mat-option",41),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"NO_RECORDS")," "))}function mt(r,c){1&r&&(t.TgZ(0,"div",7),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"CUSTOMER_NAME_IS_REQUIRED")," "))}function pt(r,c){if(1&r&&(t.TgZ(0,"div"),t.YNc(1,mt,3,3,"div",42),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.salesOrderForm.get("customerId").errors?null:e.salesOrderForm.get("customerId").errors.required)}}function ht(r,c){if(1&r&&(t.TgZ(0,"mat-option",52),t._uU(1),t.qZA()),2&r){const e=c.$implicit,n=t.oxw(2);t.Q6J("dir",n.langDir)("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function gt(r,c){1&r&&(t.TgZ(0,"div",7),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"UNIT_IS_REQUIRED")," "))}function ft(r,c){if(1&r&&(t.TgZ(0,"div"),t.YNc(1,gt,3,3,"div",42),t.qZA()),2&r){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",null==e.get("unitId").errors?null:e.get("unitId").errors.required)}}function vt(r,c){1&r&&(t.TgZ(0,"div",7),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"UNIT_PER_PRICE_IS_REQUIRED")," "))}function xt(r,c){1&r&&(t.TgZ(0,"div",7),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"PRICE_SHOULD_BE_MORE_THEN_0")," "))}function _t(r,c){if(1&r&&(t.TgZ(0,"div"),t.YNc(1,vt,3,3,"div",42),t.YNc(2,xt,3,3,"div",42),t.qZA()),2&r){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",null==e.get("unitPrice").errors?null:e.get("unitPrice").errors.required),t.xp6(1),t.Q6J("ngIf",null==e.get("unitPrice").errors?null:e.get("unitPrice").errors.min)}}function Ct(r,c){1&r&&(t.TgZ(0,"div",7),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"QUANTITY_IS_REQUIRED")," "))}function Ot(r,c){1&r&&(t.TgZ(0,"div",7),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"QUANTITY_SHOULD_BE_MORE_THEN_0")," "))}function At(r,c){if(1&r&&(t.TgZ(0,"div"),t.YNc(1,Ct,3,3,"div",42),t.YNc(2,Ot,3,3,"div",42),t.qZA()),2&r){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",null==e.get("quantity").errors?null:e.get("quantity").errors.required),t.xp6(1),t.Q6J("ngIf",null==e.get("quantity").errors?null:e.get("quantity").errors.min)}}function It(r,c){1&r&&(t.TgZ(0,"div",7),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"DISCOUNT_SHOULD_BE_MORE_THEN_0")," "))}function Tt(r,c){if(1&r&&(t.TgZ(0,"mat-option",41),t._uU(1),t.qZA()),2&r){const e=c.$implicit;t.Q6J("value",e.id),t.xp6(1),t.AsE("",e.name," (",e.percentage,"%) ")}}function St(r,c){1&r&&(t.TgZ(0,"div",7),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"TAX_IS_REQUIRED")," "))}function Zt(r,c){if(1&r&&(t.TgZ(0,"div"),t.YNc(1,St,3,3,"div",42),t.qZA()),2&r){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",null==e.get("taxValue").errors?null:e.get("taxValue").errors.required)}}const M=function(r,c,e,n,s){return[r,c,e,n,s]};function yt(r,c){if(1&r&&(t.TgZ(0,"div",7),t._uU(1),t.ALo(2,"translate"),t.ALo(3,"customCurrency"),t.ALo(4,"quantitiesunitpriceTax"),t.qZA()),2&r){const e=t.oxw(),n=e.$implicit,s=e.index,u=t.oxw();t.xp6(1),t.AsE(" ",t.lcZ(2,2,"TAX_AMOUNT"),": ",t.lcZ(3,4,t.G7q(4,6,t.qbA(12,M,n.get("quantity").value,n.get("unitPrice").value,n.get("discountPercentage").value,n.get("taxValue").value,u.taxsMap[s])))," ")}}function Nt(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"button",53),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().index,u=t.oxw();return t.KtG(u.onRemoveSalesOrderItem(s))}),t.TgZ(1,"mat-icon",54),t._uU(2,"delete_forever "),t.qZA()()}}function Dt(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"tr",43)(1,"td"),t._UZ(2,"input",44),t.qZA(),t.TgZ(3,"td")(4,"mat-select",45),t.NdJ("selectionChange",function(s){const p=t.CHM(e).index,g=t.oxw();return t.KtG(g.onSelectionChange(s.value,p))}),t.YNc(5,ht,2,3,"mat-option",46),t.qZA(),t.YNc(6,ft,2,1,"div",13),t.qZA(),t.TgZ(7,"td")(8,"input",47),t.NdJ("change",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onUnitPriceChange())}),t.ALo(9,"translate"),t.qZA(),t.YNc(10,_t,3,2,"div",13),t.qZA(),t.TgZ(11,"td")(12,"input",48),t.NdJ("change",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onQuantityChange())}),t.ALo(13,"translate"),t.qZA(),t.YNc(14,At,3,2,"div",13),t.qZA(),t.TgZ(15,"td")(16,"input",49),t.NdJ("change",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onDiscountChange())}),t.ALo(17,"translate"),t.qZA(),t.YNc(18,It,3,3,"div",42),t.qZA(),t.TgZ(19,"td")(20,"mat-select",50),t.NdJ("selectionChange",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onTaxSelectionChange())}),t.YNc(21,Tt,2,3,"mat-option",11),t.qZA(),t.YNc(22,Zt,2,1,"div",13),t.qZA(),t.TgZ(23,"td"),t._uU(24),t.ALo(25,"customCurrency"),t.ALo(26,"quantitiesunitprice"),t.YNc(27,yt,5,18,"div",42),t.qZA(),t.TgZ(28,"td"),t.YNc(29,Nt,3,0,"button",51),t.qZA()()}if(2&r){const e=c.$implicit,n=c.index,s=t.oxw();t.Q6J("formGroupName",n),t.xp6(4),t.Q6J("dir",s.langDir),t.xp6(1),t.Q6J("ngForOf",s.unitsMap[n]),t.xp6(1),t.Q6J("ngIf",e.get("unitId").touched&&e.get("unitId").errors),t.xp6(2),t.s9C("placeholder",t.lcZ(9,16,"UNIT_PER_PRICE")),t.xp6(2),t.Q6J("ngIf",e.get("unitPrice").touched&&e.get("unitPrice").errors),t.xp6(2),t.s9C("placeholder",t.lcZ(13,18,"QUANTITY")),t.xp6(2),t.Q6J("ngIf",e.get("quantity").touched&&e.get("quantity").errors),t.xp6(2),t.s9C("placeholder",t.lcZ(17,20,"DISCOUNT")),t.xp6(2),t.Q6J("ngIf",null==e.get("discountPercentage").errors?null:e.get("discountPercentage").errors.min),t.xp6(2),t.Q6J("dir",s.langDir),t.xp6(1),t.Q6J("ngForOf",s.taxsMap[n]),t.xp6(1),t.Q6J("ngIf",e.get("taxValue").touched&&e.get("taxValue").errors),t.xp6(2),t.hij(" ",t.lcZ(25,22,t.G7q(26,24,t.qbA(30,M,e.get("quantity").value,e.get("unitPrice").value,e.get("discountPercentage").value,e.get("taxValue").value,s.taxsMap[n])))," "),t.xp6(3),t.Q6J("ngIf",e.get("taxValue").value),t.xp6(2),t.Q6J("ngIf",1!==(null==s.salesOrderItemsArray?null:s.salesOrderItemsArray.controls.length))}}function Pt(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"button",55),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onSalesOrderSubmit())}),t._UZ(1,"i",56),t._uU(2),t.ALo(3,"translate"),t.qZA()}2&r&&(t.xp6(2),t.hij(" ",t.lcZ(3,1,"SAVE"),""))}function Ut(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"button",55),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onSaveAndNew())}),t._UZ(1,"i",56),t._uU(2),t.ALo(3,"translate"),t.qZA()}2&r&&(t.xp6(2),t.hij(" ",t.lcZ(3,1,"SAVE_AND_NEW"),""))}function Et(r,c){if(1&r&&(t.ynx(0),t._UZ(1,"img",62),t.BQk()),2&r){const e=t.oxw().$implicit,n=t.oxw();t.xp6(1),t.Q6J("src",n.baseUrl+e.productUrl,t.LSH)}}function bt(r,c){1&r&&(t._UZ(0,"img",63),t.ALo(1,"translate")),2&r&&t.s9C("alt",t.lcZ(1,1,"PRODUCT_IMAGE"))}function Ft(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"div",57)(1,"div",58),t.NdJ("click",function(){const s=t.CHM(e),u=s.$implicit,p=s.index,g=t.oxw();return t.KtG(g.onProductSelect(u,p))}),t.TgZ(2,"div",6),t.YNc(3,Et,2,1,"ng-container",59),t.YNc(4,bt,2,3,"ng-template",null,60,t.W1O),t.TgZ(6,"div",61),t._uU(7),t.qZA()()()()}if(2&r){const e=c.$implicit,n=t.MAs(5);t.xp6(3),t.Q6J("ngIf",e.productUrl)("ngIfElse",n),t.xp6(4),t.Oqu(e.name)}}function Lt(r,c){1&r&&(t.TgZ(0,"div")(1,"b"),t._uU(2),t.ALo(3,"translate"),t.qZA()()),2&r&&(t.xp6(2),t.hij(" ",t.lcZ(3,1,"NO_DATA_FOUND"),""))}function Mt(r,c){1&r&&t._UZ(0,"mat-spinner")}function Rt(r,c){if(1&r&&(t.TgZ(0,"div",64),t.YNc(1,Mt,1,0,"mat-spinner",13),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.isLoading)}}const R=function(){return["SO_ADD_SO","SO_UPDATE_SO","SO_RETURN_SO","POS_POS"]},Qt=[{path:"",component:(()=>{class r extends V.H{constructor(e,n,s,u,p,g,O,I,Xt,B,te){super(B),this.fb=e,this.customerService=n,this.toastrService=s,this.salesOrderService=u,this.router=p,this.productService=g,this.route=O,this.quantitiesUnitPricePipe=I,this.quantitiesUnitPriceTaxPipe=Xt,this.translationService=B,this.clonerService=te,this.products=[],this.filterProducts=[],this.customers=[],this.isLoading=!1,this.isCustomerLoading=!1,this.filterProductsMap={},this.unitsMap={},this.unitConversationlist=[],this.taxsMap={},this.totalBeforeDiscount=0,this.totalAfterDiscount=0,this.totalDiscount=0,this.grandTotal=0,this.totalTax=0,this.isEdit=!1,this.baseUrl=J.N.apiUrl,this.isFromScanner=!1,this.getLangDir(),this.customerResource=new l.H,this.productResource=new f.f}get salesOrderItemsArray(){return this.salesOrderForm.get("salesOrderItems")}ngOnInit(){this.unitConversationlist=[...this.route.snapshot.data.units],this.createSalesOrder(),this.getProducts(),this.customerNameChangeValue(),this.getNewSalesOrderNumber(),this.salesOrderForm.get("filterProductValue").setValue("")}ngAfterViewInit(){this.filterValue.nativeElement.focus()}createSalesOrder(){this.route.data.pipe().subscribe(e=>{this.salesOrder=e.salesorder,this.isEdit=!1,this.getCustomers(),this.salesOrderForm=this.fb.group({orderNumber:["",[a.kI.required]],filerCustomer:[""],deliveryDate:[new Date,[a.kI.required]],soCreatedDate:[new Date,[a.kI.required]],deliveryStatus:[1],customerId:["",[a.kI.required]],note:[""],termAndCondition:[""],salesOrderItems:this.fb.array([]),filterProductValue:[""]})})}setUnitConversationForProduct(e,n){this.unitsMap[n]=this.unitConversationlist.filter(s=>s.id==e||s.parentId==e)}onSelectionChange(e,n,s=!0){const u=this.salesOrderItemsArray.controls[n].get("productId").value,p=this.filterProducts.find(I=>I.id===u),g=this.unitConversationlist.find(I=>I.id===e);let O=0;if(g.value){switch(g.operator){case d.d.Plush:O=p.salesPrice+parseFloat(g.value);break;case d.d.Minus:O=p.salesPrice-parseFloat(g.value);break;case d.d.Multiply:O=p.salesPrice*parseFloat(g.value);break;case d.d.Divide:O=p.salesPrice/parseFloat(g.value)}this.salesOrderItemsArray.controls[n].patchValue({unitPrice:O})}else this.salesOrderItemsArray.controls[n].patchValue({unitPrice:p.salesPrice})}onProductSelect(e,n){let s=this.salesOrderForm.get("salesOrderItems").value;const u=s.findIndex(g=>g.productId==e.id);let p=u;if(u>=0){let g=s[u];this.salesOrderItemsArray.at(u).get("quantity").patchValue(g.quantity+1)}else p=this.salesOrderItemsArray.length,this.salesOrderItemsArray.push(this.createSalesOrderItem(this.salesOrderItemsArray.length,e));this.setUnitConversationForProduct(e.unitId,p),this.getAllTotal(),this.filterValue.nativeElement.focus()}createSalesOrderItem(e,n){const s=n.productTaxes.map(p=>p.taxId),u=this.fb.group({productId:[n.id],warehouseId:[n.warehouseId],unitPrice:[n.salesPrice,[a.kI.required,a.kI.min(0)]],quantity:[1,[a.kI.required,a.kI.min(1)]],taxValue:[s],unitId:[n.unitId,[a.kI.required]],discountPercentage:[0,[a.kI.min(0)]],productName:[n.name]});return this.unitsMap[e]=this.unitConversationlist.filter(p=>p.id==n.unitId||p.parentId==n.unitId),this.taxsMap[e]=[...this.route.snapshot.data.taxs],u}onDetected(e){this.isFromScanner="scanner"==(null==e?void 0:e.type)}getProducts(){this.sub$.sink=this.salesOrderForm.get("filterProductValue").valueChanges.pipe((0,Z.b)(500),(0,y.x)(),(0,D.w)(e=>(this.isFromScanner?this.productResource.barcode=e:this.productResource.name=e,this.productResource.pageSize=12,this.productService.getProducts(this.productResource)))).subscribe(e=>{e&&e.headers&&(this.isFromScanner?(this.isFromScanner=!1,1==e.body.length?(this.onProductSelect(this.clonerService.deepClone(e.body[0]),null),this.toastrService.success("Product Added Successfully")):this.toastrService.warning("Product not found"),this.productResource.barcode="",this.salesOrderForm.get("filterProductValue").patchValue("")):this.filterProducts=this.clonerService.deepClone(e.body))},e=>{this.isFromScanner=!1})}getAllTotal(){let e=this.salesOrderForm.get("salesOrderItems").value;this.totalBeforeDiscount=0,this.grandTotal=0,this.totalDiscount=0,this.totalTax=0,e&&e.length>0&&e.forEach(n=>{if(n.unitPrice&&n.quantity){const s=this.totalBeforeDiscount+parseFloat(this.quantitiesUnitPricePipe.transform(n.quantity,n.unitPrice));this.totalBeforeDiscount=parseFloat(s.toFixed(2));const u=this.grandTotal+parseFloat(this.quantitiesUnitPricePipe.transform(n.quantity,n.unitPrice,n.discountPercentage,n.taxValue,this.taxsMap[0]));this.grandTotal=parseFloat(u.toFixed(2));const p=this.totalTax+parseFloat(this.quantitiesUnitPriceTaxPipe.transform(n.quantity,n.unitPrice,n.discountPercentage,n.taxValue,this.taxsMap[0]));this.totalTax=parseFloat(p.toFixed(2));const g=this.totalDiscount+parseFloat(this.quantitiesUnitPriceTaxPipe.transform(n.quantity,n.unitPrice,n.discountPercentage));this.totalDiscount=parseFloat(g.toFixed(2))}})}onUnitPriceChange(){this.getAllTotal()}onQuantityChange(){this.getAllTotal()}onDiscountChange(){this.getAllTotal()}onTaxSelectionChange(){this.getAllTotal()}onRemoveSalesOrderItem(e){this.salesOrderItemsArray.removeAt(e),this.getAllTotal()}getNewSalesOrderNumber(){this.salesOrderService.getNewSalesOrderNumber().subscribe(e=>{this.salesOrder||this.salesOrderForm.patchValue({orderNumber:e.orderNumber})})}customerNameChangeValue(){this.sub$.sink=this.salesOrderForm.get("filerCustomer").valueChanges.pipe((0,Y.b)(e=>this.isCustomerLoading=!0),(0,Z.b)(500),(0,y.x)(),(0,D.w)(e=>(this.customerResource.customerName=e,this.customerResource.id=null,this.customerService.getCustomers(this.customerResource)))).subscribe(e=>{this.isCustomerLoading=!1,e&&e.headers&&(this.customers=[...e.body])},e=>{this.isCustomerLoading=!1})}getCustomers(){this.salesOrder?this.customerResource.id=this.salesOrder.customerId:(this.customerResource.customerName="",this.customerResource.id=null),this.customerService.getCustomers(this.customerResource).subscribe(e=>{if(e&&e.headers){this.customers=[...e.body];const n=this.customers.find(s=>s.isWalkIn);n?this.salesOrderForm.get("customerId").setValue(n.id):this.getWalkinCustomer()}})}getWalkinCustomer(){this.customerService.getWalkInCustomer().subscribe(e=>{e&&(this.customers.push(e),this.salesOrderForm.get("customerId").setValue(e.id))})}onSaveAndNew(){this.onSalesOrderSubmit(!0)}onSalesOrderSubmit(e=!1){if(this.salesOrderForm.valid){const n=this.buildSalesOrder();let s=this.salesOrderForm.get("salesOrderItems").value;s&&0==s.length?this.toastrService.error(this.translationService.getValue("PLEASE_SELECT_ATLEASE_ONE_PRODUCT")):this.salesOrderService.addSalesOrder(n).subscribe(u=>{this.toastrService.success(this.translationService.getValue("SALES_ORDER_ADDED_SUCCESSFULLY")),e?(this.router.navigate(["/pos"]),this.ngOnInit()):this.router.navigate(["/sales-order/list"])})}else this.salesOrderForm.markAllAsTouched()}reloadCurrentRoute(){let e=this.router.url;this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>{this.router.navigate([e])})}buildSalesOrder(){const e={id:this.salesOrder?this.salesOrder.id:"",orderNumber:this.salesOrderForm.get("orderNumber").value,deliveryDate:this.salesOrderForm.get("deliveryDate").value,deliveryStatus:o.I.UnDelivery,isSalesOrderRequest:!1,soCreatedDate:this.salesOrderForm.get("soCreatedDate").value,salesOrderStatus:q.q.Not_Return,customerId:this.salesOrderForm.get("customerId").value,totalAmount:this.grandTotal,totalDiscount:this.totalDiscount,totalTax:this.totalTax,note:this.salesOrderForm.get("note").value,termAndCondition:this.salesOrderForm.get("termAndCondition").value,salesOrderItems:[]},n=this.salesOrderForm.get("salesOrderItems").value;return n&&n.length>0&&n.forEach(s=>{e.salesOrderItems.push({discount:parseFloat(this.quantitiesUnitPriceTaxPipe.transform(s.quantity,s.unitPrice,s.discountPercentage)),discountPercentage:s.discountPercentage,productId:s.productId,unitId:s.unitId,quantity:s.quantity,warehouseId:s.warehouseId,taxValue:parseFloat(this.quantitiesUnitPriceTaxPipe.transform(s.quantity,s.unitPrice,s.discountPercentage,s.taxValue,this.taxsMap[0])),unitPrice:parseFloat(s.unitPrice),salesOrderItemTaxes:s.taxValue?[...s.taxValue.map(u=>({taxId:u}))]:[]})}),e}onSalesOrderList(){this.router.navigate(["/"])}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(a.QS),t.Y36(j.v),t.Y36($._W),t.Y36(H.V),t.Y36(h.F0),t.Y36(w.M),t.Y36(h.gz),t.Y36(S.q),t.Y36(T.S),t.Y36(G.D),t.Y36(K.$))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-pos"]],viewQuery:function(e,n){if(1&e&&t.Gf(ct,5),2&e){let s;t.iGM(s=t.CRH())&&(n.filterValue=s.first)}},features:[t._Bn([],[S.q,T.S]),t.qOj],decls:109,vars:76,consts:[[1,"content-area-pos"],["autocomplete","off",3,"formGroup"],[1,"row"],[1,"col-sm-12","col-md-12","col-lg-12"],[1,"col-sm-12","col-12","order-2","order-md-1","col-md-8"],[1,"card"],[1,"card-body"],[1,"text-danger"],["role","group",1,"input-group","input-customer"],["formControlName","customerId",1,"form-control",3,"dir","placeholder"],["formControlName","filerCustomer","focused","'true'","type","text","autocomplete","off",1,"form-control","w-100",3,"placeholder"],[3,"value",4,"ngFor","ngForOf"],[3,"value",4,"ngIf"],[4,"ngIf"],["formArrayName","salesOrderItems",1,"col-sm-12"],[1,"col"],[1,"table-responsive"],[1,"table","table-bordered","table-hover"],[1,"table-column-200"],[1,"table-column-150"],[1,"table-column-130"],[1,"table-column-110"],[1,"table-column-100"],[2,"text-align","center"],[1,"fas","fa-trash-alt",2,"opacity","0.5","filter","alpha(opacity=50)"],[3,"formGroupName",4,"ngFor","ngForOf"],[1,"row","mt-1"],[1,"col-10","text-right","font-weight-bold"],[1,"col-2","text-left","font-weight-bold"],[1,"col-2","text-left","text-danger","font-weight-bold"],[1,"col-12"],[1,"col-md-12","mb-1","text-center"],["type","button","class","btn btn-success btn-sm m-right-10 ",3,"click",4,"hasClaim"],["type","button",1,"btn","btn-danger","btn-sm",3,"click"],[1,"fas","fa-times-circle"],[1,"col-sm-12","col-12","order-1","order-md-2","col-md-4"],["ngxBarCodePut","","formControlName","filterProductValue","type","text","autocomplete","off",1,"form-control","w-100",3,"placeholder","onDetected"],["filterValue",""],[1,"form-row","mt-3","card-scroller"],["class","col-sm-6 col-lg-4",4,"ngFor","ngForOf"],["class","loading-shade",4,"ngIf"],[3,"value"],["class","text-danger",4,"ngIf"],[3,"formGroupName"],["disabled","","formControlName","productName","focused","'true'","type","text","autocomplete","off",1,"form-control","w-100"],["formControlName","unitId",1,"form-control",3,"dir","selectionChange"],[3,"dir","value",4,"ngFor","ngForOf"],["type","number","formControlName","unitPrice",1,"form-control",3,"placeholder","change"],["type","number","formControlName","quantity",1,"form-control",3,"placeholder","change"],["formControlName","discountPercentage",1,"form-control",3,"placeholder","change"],["formControlName","taxValue","placeholder","Select Tax","multiple","",1,"form-control",3,"dir","selectionChange"],["type","button","mat-icon-button","","aria-label","Action",3,"click",4,"ngIf"],[3,"dir","value"],["type","button","mat-icon-button","","aria-label","Action",3,"click"],[1,"btn-danger"],["type","button",1,"btn","btn-success","btn-sm","m-right-10",3,"click"],[1,"fas","fa-save"],[1,"col-sm-6","col-lg-4"],[1,"card","card-pos",3,"click"],[4,"ngIf","ngIfElse"],["noImage",""],[1,"text-center","card-text"],[1,"img-circle",3,"src"],["src","assets/images/no-preview.jpg",1,"img-circle",3,"alt"],[1,"loading-shade"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"div",3)(4,"div",2)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",3)(9,"label",7),t._uU(10),t.ALo(11,"translate"),t.qZA(),t.TgZ(12,"div",8)(13,"mat-select",9),t.ALo(14,"translate"),t._UZ(15,"input",10),t.ALo(16,"translate"),t._UZ(17,"mat-divider"),t.YNc(18,dt,2,2,"mat-option",11),t.YNc(19,ut,3,3,"mat-option",12),t.qZA()(),t.YNc(20,pt,2,1,"div",13),t.qZA(),t._UZ(21,"br"),t.TgZ(22,"div",3)(23,"div",2)(24,"div",14)(25,"div",2)(26,"div",15)(27,"div",16)(28,"table",17)(29,"tr")(30,"th",18),t._uU(31),t.ALo(32,"translate"),t.qZA(),t.TgZ(33,"th",19),t._uU(34),t.ALo(35,"translate"),t.qZA(),t.TgZ(36,"th",20),t._uU(37),t.ALo(38,"translate"),t.qZA(),t.TgZ(39,"th",21),t._uU(40),t.ALo(41,"translate"),t.qZA(),t.TgZ(42,"th",22),t._uU(43),t.ALo(44,"translate"),t.qZA(),t.TgZ(45,"th",22),t._uU(46),t.ALo(47,"translate"),t.qZA(),t.TgZ(48,"th",19),t._uU(49),t.ALo(50,"translate"),t.qZA(),t.TgZ(51,"th",23),t._UZ(52,"i",24),t.qZA()(),t.YNc(53,Dt,30,36,"tr",25),t.qZA()()()()()(),t.TgZ(54,"div",26)(55,"div",27),t._uU(56),t.ALo(57,"translate"),t.qZA(),t.TgZ(58,"div",28),t._uU(59),t.ALo(60,"customCurrency"),t.qZA()(),t.TgZ(61,"div",2)(62,"div",27),t._uU(63),t.ALo(64,"translate"),t.qZA(),t.TgZ(65,"div",29),t._uU(66),t.ALo(67,"customCurrency"),t.qZA()(),t.TgZ(68,"div",2)(69,"div",27),t._uU(70),t.ALo(71,"translate"),t.qZA(),t.TgZ(72,"div",28),t._uU(73),t.ALo(74,"customCurrency"),t.qZA()(),t.TgZ(75,"div",2)(76,"div",30),t._UZ(77,"mat-divider"),t.qZA()(),t.TgZ(78,"div",2)(79,"div",27),t._uU(80),t.ALo(81,"translate"),t.qZA(),t.TgZ(82,"div",28),t._uU(83),t.ALo(84,"customCurrency"),t.qZA()()(),t.TgZ(85,"div",2)(86,"div",31),t.YNc(87,Pt,4,3,"button",32),t.YNc(88,Ut,4,3,"button",32),t.TgZ(89,"button",33),t.NdJ("click",function(){return n.onSalesOrderList()}),t._UZ(90,"i",34),t._uU(91),t.ALo(92,"translate"),t.qZA()()()()()(),t.TgZ(93,"div",35)(94,"div",5)(95,"div",6)(96,"div",3)(97,"h6"),t._uU(98),t.ALo(99,"translate"),t.qZA(),t.TgZ(100,"input",36,37),t.NdJ("onDetected",function(u){return n.onDetected(u)}),t.ALo(102,"translate"),t.qZA()(),t.TgZ(103,"div",3)(104,"div",38),t.YNc(105,Ft,8,3,"div",39),t.qZA(),t._UZ(106,"br"),t.YNc(107,Lt,4,3,"div",13),t.qZA()()()()()()()(),t.YNc(108,Rt,2,1,"div",40),t.qZA()),2&e&&(t.xp6(1),t.Q6J("formGroup",n.salesOrderForm),t.xp6(9),t.hij("",t.lcZ(11,32,"CUSTOMER_NAME")," *"),t.xp6(3),t.s9C("placeholder",t.lcZ(14,34,"SELECT_CUSTOMER")),t.Q6J("dir",n.langDir),t.xp6(2),t.MGl("placeholder","",t.lcZ(16,36,"SEARCH_OTHER_CUSTOMERS")," "),t.xp6(3),t.Q6J("ngForOf",n.customers),t.xp6(1),t.Q6J("ngIf",0==n.customers.length),t.xp6(1),t.Q6J("ngIf",n.salesOrderForm.get("customerId").touched&&n.salesOrderForm.get("customerId").errors),t.xp6(11),t.hij(" ",t.lcZ(32,38,"PRODUCT")," "),t.xp6(3),t.hij(" ",t.lcZ(35,40,"UNIT")," "),t.xp6(3),t.hij(" ",t.lcZ(38,42,"PRICE")," "),t.xp6(3),t.hij(" ",t.lcZ(41,44,"QUANTITY")," "),t.xp6(3),t.hij(" ",t.lcZ(44,46,"DISCOUNT"),"% "),t.xp6(3),t.hij(" ",t.lcZ(47,48,"TAX")," "),t.xp6(3),t.hij(" ",t.lcZ(50,50,"TOTAL")," "),t.xp6(4),t.Q6J("ngForOf",null==n.salesOrderItemsArray?null:n.salesOrderItemsArray.controls),t.xp6(3),t.hij(" ",t.lcZ(57,52,"SUB_TOTAL_BEFORE_DISCOUNT"),": "),t.xp6(3),t.hij(" ",t.lcZ(60,54,n.totalBeforeDiscount)," "),t.xp6(4),t.hij(" ",t.lcZ(64,56,"TOTAL_DISCOUNT"),": "),t.xp6(3),t.hij(" ",t.lcZ(67,58,n.totalDiscount)," "),t.xp6(4),t.hij(" ",t.lcZ(71,60,"TOTAL_TAX"),": "),t.xp6(3),t.hij(" ",t.lcZ(74,62,n.totalTax)," "),t.xp6(7),t.hij(" ",t.lcZ(81,64,"GRAND_TOTAL")," : "),t.xp6(3),t.hij(" ",t.lcZ(84,66,n.grandTotal)," "),t.xp6(4),t.Q6J("hasClaim",t.DdM(74,R)),t.xp6(1),t.Q6J("hasClaim",t.DdM(75,R)),t.xp6(3),t.hij(" ",t.lcZ(92,68,"CANCEL")," "),t.xp6(7),t.Oqu(t.lcZ(99,70,"PRODUCT")),t.xp6(2),t.s9C("placeholder",t.lcZ(102,72,"SEARCH_OTHER_PRODUCTS_WITH_NAME_AND_SCAN_BARCODE")),t.xp6(5),t.Q6J("ngForOf",n.filterProducts),t.xp6(2),t.Q6J("ngIf",0==n.filterProducts.length),t.xp6(1),t.Q6J("ngIf",n.isLoading))},dependencies:[N.sg,N.O5,z.d,k.Lv,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.sg,a.u,a.x0,a.CE,P.gD,U.ey,E.Hw,b.lW,F.Ou,L.d,nt,at.R,lt.X$,S.q,T.S],styles:[".mat-card-header-text[_ngcontent-%COMP%]{margin:0!important}.list-inline-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;position:relative}.ul-block[_ngcontent-%COMP%]{display:inline}.pos[_ngcontent-%COMP%]{padding:10px}.content-area[_ngcontent-%COMP%]{margin-top:0!important}#pos[_ngcontent-%COMP%]   #leftdiv[_ngcontent-%COMP%]{width:100%;padding:10px 10px 5px;background:#f5f5f5;margin:0}"]}),r})(),data:{claimType:["POS_POS"]},canActivate:[m.a],resolve:{units:_.l,taxs:x.B,products:C.S}}];let Bt=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[h.Bz.forChild(Qt),h.Bz]}),r})();var qt=i(7108),Jt=i(1079),Yt=i(9224),Vt=i(7446),jt=i(6856),$t=i(7322),Ht=i(7531),wt=i(2181),Gt=i(6087),Kt=i(9814),zt=i(4847),kt=i(2075),Q=i(1122);let Wt=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[N.ez,Bt,qt.m,a.u5,a.UX,jt.FA,U.XK,Ht.c,$t.lN,Kt.Fk,P.LD,Yt.QW,kt.p0,Gt.TU,zt.JX,wt.Tx,E.Ps,b.ot,Jt.Bb,F.Cq,Q.Ll,Q.x,Vt.p9,L.t,it]}),r})()},5528:(A,v,i)=>{i.d(v,{M:()=>C});var h=i(520),m=i(5e3);let C=(()=>{class x{constructor(a){this.http=a}getProducts(a){const o=(new h.LE).set("fields",a.fields).set("orderBy",a.orderBy).set("pageSize",a.pageSize.toString()).set("skip",a.skip.toString()).set("searchQuery",a.searchQuery).set("name",a.name).set("id",a.id).set("categoryId",a.categoryId?a.categoryId:"").set("unitId",a.unitId?a.unitId:"").set("barcode",a.barcode?a.barcode:"").set("brandId",a.brandId);return this.http.get("product",{params:o,observe:"response"})}getProudct(a){return this.http.get(`product/${a}`)}addProudct(a){return this.http.post("product",a)}updateProudct(a,l){return this.http.put(`product/${a}`,l)}deleteProudct(a){return this.http.delete(`product/${a}`)}}return x.\u0275fac=function(a){return new(a||x)(m.LFG(h.eN))},x.\u0275prov=m.Yz7({token:x,factory:x.\u0275fac,providedIn:"root"}),x})()},2679:(A,v,i)=>{i.d(v,{V:()=>_});var h=i(520),m=i(7221),C=i(5e3),x=i(8032);let _=(()=>{class a{constructor(o,d){this.http=o,this.commonHttpErrorService=d}getAllSalesOrder(o){const f=(new h.LE).set("Fields",o.fields).set("OrderBy",o.orderBy).set("PageSize",o.pageSize.toString()).set("Skip",o.skip.toString()).set("SearchQuery",o.searchQuery).set("name",o.name).set("orderNumber",o.orderNumber).set("customerName",o.customerName).set("fromDate",o.fromDate?o.fromDate.toDateString():"").set("toDate",o.toDate?o.toDate.toDateString():"").set("productId",o.productId?o.productId:"").set("customerId",o.customerId?o.customerId:"").set("status",o.status);return this.http.get("salesOrder",{params:f,observe:"response"})}getAllSalesOrderExcel(o){const f=(new h.LE).set("Fields",o.fields).set("OrderBy",o.orderBy).set("PageSize",0).set("Skip",0).set("SearchQuery",o.searchQuery).set("name",o.name).set("orderNumber",o.orderNumber).set("customerName",o.customerName).set("fromDate",o.fromDate?o.fromDate.toDateString():"").set("toDate",o.toDate?o.toDate.toDateString():"").set("productId",o.productId?o.productId:"").set("customerId",o.customerId?o.customerId:"");return this.http.get("salesOrder",{params:f,observe:"response"})}addSalesOrder(o){return this.http.post("salesOrder",o).pipe((0,m.K)(this.commonHttpErrorService.handleError))}updateSalesOrder(o){return this.http.put(`salesOrder/${o.id}`,o).pipe((0,m.K)(this.commonHttpErrorService.handleError))}updateSalesOrderReturn(o){return this.http.put(`salesOrder/${o.id}/return`,o).pipe((0,m.K)(this.commonHttpErrorService.handleError))}deleteSalesOrder(o){return this.http.delete(`salesOrder/${o}`).pipe((0,m.K)(this.commonHttpErrorService.handleError))}getNewSalesOrderNumber(){return this.http.get("salesOrder/newOrderNumber")}getSalesOrderById(o){return this.http.get(`salesOrder/${o}`)}getSalesOrderItems(o,d=!1){return this.http.get(`salesOrder/${o}/items?isReturn=${d}`)}downloadAttachment(o){return this.http.get(`salesOrderAttachment/${o}/download`,{reportProgress:!0,observe:"events",responseType:"blob"})}getSalesOrderItemReport(o){const f=(new h.LE).set("Fields",o.fields).set("OrderBy",o.orderBy).set("PageSize",o.pageSize.toString()).set("Skip",o.skip.toString()).set("SearchQuery",o.searchQuery).set("name",o.name).set("orderNumber",o.orderNumber).set("customerName",o.customerName).set("fromDate",o.fromDate?o.fromDate.toDateString():"").set("toDate",o.toDate?o.toDate.toDateString():"").set("productId",o.productId?o.productId:"").set("productName",o.productName?o.productName:"").set("customerId",o.customerId?o.customerId:"").set("isSalesOrderRequest",o.isSalesOrderRequest);return this.http.get("salesOrder/items/reports",{params:f,observe:"response"})}}return a.\u0275fac=function(o){return new(o||a)(C.LFG(h.eN),C.LFG(x.U))},a.\u0275prov=C.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);