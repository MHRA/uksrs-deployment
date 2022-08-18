"use strict";(self.webpackChunkgsrs_client=self.webpackChunkgsrs_client||[]).push([[1089],{31089:function(q,v,e){e.r(v),e.d(v,{SubstanceFormStructuralUnitsModule:function(){return W}});var m=e(48047),p=e(78069),d=e(36362),S=e(75143),O=e(7168),h=e(19975),C=e(65590),y=e(87317),x=e(94673),g=e(44770),l=e(90587),P=e(26439),M=e(43365),Z=e(24582),b=e(7318),U=e(79550),T=e(40104),F=e(34470),t=e(76442),A=e(78444),I=e(51279),w=e(27164),J=e(18291),_=e(63169),Y=e(33567),D=e(27299),N=e(95758),R=e(66088),Q=e(9292),j=e(16667),E=e(11307),$=e(14900);function z(o,a){if(1&o&&(t.TgZ(0,"div",26),t._uU(1),t.qZA()),2&o){var i=t.oxw();t.xp6(1),t.hij(" ",i.displayAmount(i.unit.amount)," ")}}function H(o,a){if(1&o&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&o){var i=a.$implicit;t.xp6(1),t.hij(" ",i.text," ")}}function L(o,a){if(1&o&&(t.TgZ(0,"div",27),t.YNc(1,H,2,1,"div",28),t.qZA()),2&o){var i=t.oxw();t.xp6(1),t.Q6J("ngForOf",i.errors)}}var X=function(){var o=function(){function a(i,n,r,s,c,u){var f=this;(0,p.Z)(this,a),this.cvService=i,this.dialog=n,this.utilsService=r,this.substanceService=s,this.overlayContainerService=c,this.substanceFormService=u,this.unitDeleted=new t.vpe,this.subscriptions=[],this.errors=[],this.hidePopup=!1,this.substanceService.showImagePopup.subscribe(function(G){f.hidePopup=G})}return(0,m.Z)(a,[{key:"ngOnInit",value:function(){this.overlayContainer=this.overlayContainerService.getContainerElement()}},{key:"showHidePopup",value:function(){this.hidePopup=!this.hidePopup,this.substanceService.showImagePopup.next(this.hidePopup),this.substanceService.imagePopupUnit.next(this.unit)}},{key:"openAmountDialog",value:function(){var n=this;this.unit.amount||(this.unit.amount={},"SRU-BLOCK"===this.unit.type&&(this.unit.amount={type:"DEGREE OF POLYMERIZATION",units:"per polymer"}));var r=this.dialog.open(w.O,{data:{subsAmount:this.unit.amount},width:"1040px"});this.overlayContainer.style.zIndex="1002";var s=r.afterClosed().subscribe(function(c){n.overlayContainer.style.zIndex=null,n.unit.amount=c});this.subscriptions.push(s)}},{key:"displayAmount",value:function(n){return this.utilsService.displayAmount(n)}},{key:"displayToConnectivity",value:function(n){var r=this.utilsService.sruDisplayToConnectivity(n);this.errors=r.$errors,0===this.errors.length&&(delete r.$errors,this.unit.attachmentMap=r)}},{key:"deleteSRU",value:function(){this.unit.$$deletedCode=this.utilsService.newUUID(),this.unitDeleted.emit(this.unit)}}]),a}();return o.\u0275fac=function(i){return new(i||o)(t.Y36(J.I),t.Y36(N.uw),t.Y36(_.FW),t.Y36(D.d),t.Y36(R.Xj),t.Y36(Y.B))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-structural-unit-form"]],inputs:{unit:"unit"},outputs:{unitDeleted:"unitDeleted"},decls:30,vars:8,consts:[[1,"unit-form-container"],[1,"delete-container"],["mat-icon-button","","matTooltip","Delete SRU",3,"click"],["svgIcon","delete_forever"],[1,"form-row","full"],[1,"flex-column","related-substance"],["appSubstanceImage","",1,"related-image",3,"entityId","click"],[1,"form-container"],[1,"inner-row-top"],["domain","POLYMER_SRU_TYPE","title","SRU Type",1,"type",3,"model","valueChange"],[1,"label"],["matInput","","placeholder","Label","required","","name","label",3,"ngModel","ngModelChange"],[1,"attachment-count"],["matInput","","placeholder","attachment count","required","","name","attachment count","disabled","",3,"ngModel","ngModelChange"],[1,"inner-row-bottom"],[1,"amount"],[1,"label","padded"],["mat-icon-button","","matTooltip","add",3,"click"],["svgIcon","add_circle_outline"],["class","amount-display",4,"ngIf"],[1,"connectivity-container"],[1,"connectivity"],["matInput","","cdkTextareaAutosize","",3,"ngModel","ngModelChange"],["class","error-container",4,"ngIf"],[1,"form-row"],[3,"source"],[1,"amount-display"],[1,"error-container"],[4,"ngFor","ngForOf"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"button",2),t.NdJ("click",function(){return n.deleteSRU()}),t._UZ(3,"mat-icon",3),t.qZA(),t.qZA(),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"img",6),t.NdJ("click",function(){return n.showHidePopup()}),t.qZA(),t.qZA(),t.TgZ(7,"div",7),t.TgZ(8,"div",8),t.TgZ(9,"app-cv-input",9),t.NdJ("valueChange",function(s){return n.unit.type=s}),t.qZA(),t.TgZ(10,"mat-form-field",10),t.TgZ(11,"input",11),t.NdJ("ngModelChange",function(s){return n.unit.label=s}),t.qZA(),t.qZA(),t.TgZ(12,"mat-form-field",12),t.TgZ(13,"input",13),t.NdJ("ngModelChange",function(s){return n.unit.attachmentCount=s}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"div",14),t.TgZ(15,"div",15),t.TgZ(16,"div",16),t._uU(17," Amount "),t.qZA(),t.TgZ(18,"button",17),t.NdJ("click",function(){return n.openAmountDialog()}),t._UZ(19,"mat-icon",18),t.qZA(),t.YNc(20,z,2,1,"div",19),t.qZA(),t.TgZ(21,"div",20),t.TgZ(22,"mat-form-field",21),t.TgZ(23,"mat-label"),t._uU(24,"Connectivity"),t.qZA(),t.TgZ(25,"textarea",22),t.NdJ("ngModelChange",function(s){return n.displayToConnectivity(s)}),t._uU(26,"          "),t.qZA(),t.qZA(),t.YNc(27,L,2,1,"div",23),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(28,"div",24),t._UZ(29,"app-audit-info",25),t.qZA()),2&i&&(t.xp6(6),t.Q6J("entityId",n.unit&&(n.unit.uuid||n.unit._structure&&n.unit._structure.id)),t.xp6(3),t.Q6J("model",n.unit.type),t.xp6(2),t.Q6J("ngModel",n.unit.label),t.xp6(2),t.Q6J("ngModel",n.unit.attachmentCount),t.xp6(7),t.Q6J("ngIf",n.unit.amount),t.xp6(5),t.Q6J("ngModel",n.unit._displayConnectivity),t.xp6(2),t.Q6J("ngIf",n.errors&&n.errors.length>0),t.xp6(2),t.Q6J("source",n.unit))},directives:[y.lW,C.Hw,Q.m,j.S,g.KE,M.Nt,l.Fj,l.Q7,l.JJ,l.On,d.O5,g.hX,E.IC,d.sg,$.n],styles:[".unit-form-container[_ngcontent-%COMP%]{padding:30px 10px 12px;position:relative;display:-ms-flexbox;display:flex}.related-substance[_ngcontent-%COMP%]{max-width:20%;width:20%;cursor:pointer}  .related-substance img{max-width:125px!important;margin:auto}.full[_ngcontent-%COMP%]{width:100%}.form-container[_ngcontent-%COMP%]{width:80%}.notification-backdrop[_ngcontent-%COMP%]{position:absolute;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;z-index:10;background-color:#fffc;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:30px;font-weight:700;color:#666}.form-row[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:end;align-items:flex-end}.form-row[_ngcontent-%COMP%]   .delete-container[_ngcontent-%COMP%]{padding:0 10px 8px 0}.form-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .attachment-count[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .connectivity[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1;padding-right:15px}.form-row[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]{width:50%;padding-right:15px}.inner-row-top[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:end;align-items:flex-end}.inner-row-top[_ngcontent-%COMP%]   .delete-container[_ngcontent-%COMP%]{padding:0 10px 8px 0}.inner-row-top[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .inner-row-top[_ngcontent-%COMP%]   .attachment-count[_ngcontent-%COMP%], .inner-row-top[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1;padding-right:15px}.inner-row-top[_ngcontent-%COMP%]   .connectivity[_ngcontent-%COMP%]{width:100%}.inner-row-top[_ngcontent-%COMP%]   .connectivity-container[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.inner-row-top[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]{width:50%;padding-right:15px}.inner-row-bottom[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex}.inner-row-bottom[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]{width:50%;padding-right:15px}.references-container[_ngcontent-%COMP%]{width:100%}.padded[_ngcontent-%COMP%]{padding-right:20px}.amount-display[_ngcontent-%COMP%]{padding-top:11px}.form-actions[_ngcontent-%COMP%]{-ms-flex-pack:start;justify-content:flex-start;margin:5px 0 10px}.form-content[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1}.mod-type[_ngcontent-%COMP%], .location-type[_ngcontent-%COMP%], .sites[_ngcontent-%COMP%], .group-access[_ngcontent-%COMP%], .extent[_ngcontent-%COMP%], .amount[_ngcontent-%COMP%]{width:33%}.group[_ngcontent-%COMP%], .access[_ngcontent-%COMP%]{width:45%}"]}),o}();function B(o,a){1&o&&t._UZ(0,"mat-divider",5),2&o&&t.Q6J("inset",!0)}function k(o,a){if(1&o){var i=t.EpF();t.TgZ(0,"div",2),t.TgZ(1,"app-structural-unit-form",3),t.NdJ("unitDeleted",function(u){return t.CHM(i),t.oxw().deleteSRU(u)}),t.qZA(),t.YNc(2,B,1,1,"mat-divider",4),t.qZA()}if(2&o){var n=a.$implicit,r=a.last;t.Q6J("id","substance-structural-unit-"+a.index),t.xp6(1),t.Q6J("unit",n),t.xp6(1),t.Q6J("ngIf",!r)}}var K=function(){var o=function(a){(0,Z.Z)(n,a);var i=(0,b.Z)(n);function n(r,s,c){var u;return(0,p.Z)(this,n),(u=i.call(this,c)).substanceFormStructuralUnitsService=r,u.scrollToService=s,u.gaService=c,u.subscriptions=[],u.analyticsEventCategory="substance form structural units",u}return(0,m.Z)(n,[{key:"ngOnInit",value:function(){this.menuLabelUpdate.emit("Structural Units")}},{key:"ngAfterViewInit",value:function(){var s=this,c=this.substanceFormStructuralUnitsService.substanceSRUs.subscribe(function(u){s.structuralUnits=u});this.subscriptions.push(c)}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach(function(s){s.unsubscribe()})}},{key:"deleteSRU",value:function(s){this.substanceFormStructuralUnitsService.deleteSubstanceSRU(s)}}]),n}(U.u);return o.\u0275fac=function(i){return new(i||o)(t.Y36(F.Z),t.Y36(A.i),t.Y36(T.$))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-substance-form-structural-units-card"]],features:[t.qOj],decls:2,vars:1,consts:[[1,"responsive"],["class","alternate-backgrounds","appScrollToTarget","",3,"id",4,"ngFor","ngForOf"],["appScrollToTarget","",1,"alternate-backgrounds",3,"id"],[3,"unit","unitDeleted"],["class","form-divider",3,"inset",4,"ngIf"],[1,"form-divider",3,"inset"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0),t.YNc(1,k,3,3,"div",1),t.qZA()),2&i&&(t.xp6(1),t.Q6J("ngForOf",n.structuralUnits))},directives:[d.sg,I.P,X,d.O5,h.d],styles:[".mat-divider.mat-divider-inset[_ngcontent-%COMP%]{margin-left:0}.mat-divider[_ngcontent-%COMP%]{border-top-color:#0000001f}.code[_ngcontent-%COMP%]:nth-child(odd){background-color:#448aff12}.code[_ngcontent-%COMP%]:nth-child(odd)     .mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background-color:#448aff26}.code[_ngcontent-%COMP%]:nth-child(even)     .mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background-color:#80808026}.code[_ngcontent-%COMP%]     .mat-expansion-panel, .code[_ngcontent-%COMP%]     .mat-table, .code[_ngcontent-%COMP%]     textarea{background-color:transparent}"]}),o}(),V=e(24054),W=(e(64061),function(){var o=(0,m.Z)(function a(){(0,p.Z)(this,a)});return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.ez,S.o0.forChild(K),O.O,h.t,C.Ps,y.ot,x.w,g.lN,l.UX,l.u5,P.TU,M.c,V.f]]}),o}())}}]);
//# sourceMappingURL=1089.bdd00e548b2d7ab9.js.map