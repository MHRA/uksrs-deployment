"use strict";(self.webpackChunkgsrs_client=self.webpackChunkgsrs_client||[]).push([[3127],{14900:function(A,C,e){e.d(C,{n:function(){return Z}});var f=e(78069),g=e(48047),t=e(76442),b=e(36362);function L(r,v){if(1&r&&(t.TgZ(0,"div",5),t.TgZ(1,"b",6),t._uU(2,"Created By:"),t.qZA(),t._uU(3),t.qZA()),2&r){var l=t.oxw(2);t.xp6(3),t.hij(" ",l.source.createdBy," ")}}function y(r,v){if(1&r&&(t.TgZ(0,"div",7),t.TgZ(1,"b",6),t._uU(2,"on"),t.qZA(),t._uU(3),t.ALo(4,"date"),t.qZA()),2&r){var l=t.oxw(2);t.xp6(3),t.hij(" ",t.xi3(4,1,l.source.created,"medium"),"")}}function h(r,v){1&r&&(t.TgZ(0,"div",8),t.TgZ(1,"b"),t._uU(2,"-"),t.qZA(),t.qZA())}function k(r,v){if(1&r&&(t.TgZ(0,"div",5),t.TgZ(1,"b",6),t._uU(2,"Last Edited By"),t.qZA(),t._uU(3),t.qZA()),2&r){var l=t.oxw(2);t.xp6(3),t.hij(": ",l.source.lastEditedBy," ")}}function x(r,v){if(1&r&&(t.TgZ(0,"div",7),t.TgZ(1,"b",6),t._uU(2,"on"),t.qZA(),t._uU(3),t.ALo(4,"date"),t.qZA()),2&r){var l=t.oxw(2);t.xp6(3),t.hij(" ",t.xi3(4,1,l.source.lastEdited,"medium"),"")}}function T(r,v){if(1&r&&(t.TgZ(0,"div",1),t.YNc(1,L,4,1,"div",2),t.YNc(2,y,5,4,"div",3),t.YNc(3,h,3,0,"div",4),t.YNc(4,k,4,1,"div",2),t.YNc(5,x,5,4,"div",3),t.qZA()),2&r){var l=t.oxw();t.xp6(1),t.Q6J("ngIf",l.source.createdBy),t.xp6(1),t.Q6J("ngIf",l.source.created),t.xp6(1),t.Q6J("ngIf",l.source.created&&l.source.lastEdited),t.xp6(1),t.Q6J("ngIf",l.source.lastEditedBy),t.xp6(1),t.Q6J("ngIf",l.source.lastEdited)}}var Z=function(){var r=function(){function v(){(0,f.Z)(this,v)}return(0,g.Z)(v,[{key:"ngOnInit",value:function(){}}]),v}();return r.\u0275fac=function(l){return new(l||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-audit-info"]],inputs:{source:"source"},decls:1,vars:1,consts:[["class","audit-container",4,"ngIf"],[1,"audit-container"],["class","name",4,"ngIf"],["class","date",4,"ngIf"],["class","spacer",4,"ngIf"],[1,"name"],[1,"static"],[1,"date"],[1,"spacer"]],template:function(l,S){1&l&&t.YNc(0,T,6,5,"div",0),2&l&&t.Q6J("ngIf",S.source)},directives:[b.O5],pipes:[b.uU],styles:[".audit-container[_ngcontent-%COMP%]{width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:start;align-items:flex-start;padding-left:15px;font-family:Roboto,Helvetica Neue,sans-serif;padding-top:10px;padding-bottom:2px}.spacer[_ngcontent-%COMP%]{padding-left:5px;padding-right:10px}.static[_ngcontent-%COMP%]{padding-right:3px}.name[_ngcontent-%COMP%], .date[_ngcontent-%COMP%]{padding-right:5px}"]}),r}()},93127:function(A,C,e){e.r(C),e.d(C,{SubstanceFormLinksModule:function(){return G}});var f=e(48047),g=e(78069),t=e(36362),b=e(75143),L=e(7168),y=e(19975),h=e(65590),k=e(87317),x=e(94673),T=e(44770),Z=e(90587),r=e(26439),v=e(43365),l=e(40089),S=e(31959),_=e(24582),O=e(7318),F=e(79550),I=e(33567),D=e(40104),U=e(21109),n=e(76442),M=e(78444),E=e(51279),P=e(18291),J=e(63169),N=e(39401),R=e(95758),Y=e(66088),Q=e(16667),j=e(14900);function B(a,u){if(1&a){var o=n.EpF();n.TgZ(0,"div",15),n._uU(1," Deleted\xa0 "),n.TgZ(2,"button",16),n.NdJ("click",function(){return n.CHM(o),n.oxw().undoDelete()}),n._UZ(3,"mat-icon",17),n.qZA(),n.qZA()}}var V=function(){var a=function(){function u(o,i,c,s,p){(0,g.Z)(this,u),this.cvService=o,this.dialog=i,this.utilsService=c,this.overlayContainerService=s,this.substanceFormService=p,this.linkDeleted=new n.vpe,this.subscriptions=[]}return(0,f.Z)(u,[{key:"ngOnInit",value:function(){this.getVocabularies(),this.overlayContainer=this.overlayContainerService.getContainerElement(),this.updateDisplay()}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach(function(i){i.unsubscribe()})}},{key:"link",get:function(){return this.updateDisplay(),this.privateLink},set:function(i){this.privateLink=i}},{key:"addRemainingSites",value:function(){this.privateLink.sites=this.privateLink.sites?this.privateLink.sites.concat(this.remaining):this.remaining,this.updateDisplay(),this.substanceFormService.emitLinkUpdate()}},{key:"updateDisplay",value:function(){this.privateLink&&(this.siteDisplay=this.substanceFormService.siteString(this.privateLink.sites))}},{key:"deleteLink",value:function(){var i=this;this.privateLink.$$deletedCode=this.utilsService.newUUID(),this.deleteTimer=setTimeout(function(){i.linkDeleted.emit(i.link),i.substanceFormService.emitLinkUpdate()},2e3)}},{key:"undoDelete",value:function(){clearTimeout(this.deleteTimer),delete this.privateLink.$$deletedCode}},{key:"getVocabularies",value:function(){var i=this,c=this.cvService.getDomainVocabulary("NUCLEIC_ACID_LINKAGE").subscribe(function(s){i.linkageTypes=s.NUCLEIC_ACID_LINKAGE.list});this.subscriptions.push(c)}},{key:"openDialog",value:function(){var i=this,c=this.dialog.open(N.r,{data:{card:"link",link:this.privateLink.sites},width:"1040px"});this.overlayContainer.style.zIndex="1002";var s=c.afterClosed().subscribe(function(p){i.overlayContainer.style.zIndex=null,p&&(i.privateLink.sites=p),i.updateDisplay(),i.substanceFormService.emitLinkUpdate()});this.subscriptions.push(s)}}]),u}();return a.\u0275fac=function(o){return new(o||a)(n.Y36(P.I),n.Y36(R.uw),n.Y36(J.FW),n.Y36(Y.Xj),n.Y36(I.B))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-link-form"]],inputs:{remaining:"remaining",link:"link"},outputs:{linkDeleted:"linkDeleted"},decls:18,vars:7,consts:[[1,"link-form-container"],["class","notification-backdrop",4,"ngIf"],[1,"form-row"],[1,"delete-container"],["mat-icon-button","","matTooltip","Delete link",3,"click"],["svgIcon","delete_forever"],[1,"type"],["domain","NUCLEIC_ACID_LINKAGE","title","Sequence Type",3,"model","valueChange"],[1,"addRemaining"],["mat-flat-button","","mat-primary","",3,"matTooltip","disabled","click"],[1,"links"],[1,"label"],["mat-icon-button","","matTooltip","Select sites from display",3,"click"],["svgIcon","edit"],[3,"source"],[1,"notification-backdrop"],["mat-icon-button","","matTooltip","Undo",3,"click"],["svgIcon","undo"]],template:function(o,i){1&o&&(n.TgZ(0,"div",0),n.YNc(1,B,4,0,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.TgZ(4,"button",4),n.NdJ("click",function(){return i.deleteLink()}),n._UZ(5,"mat-icon",5),n.qZA(),n.qZA(),n.TgZ(6,"div",6),n.TgZ(7,"app-cv-input",7),n.NdJ("valueChange",function(s){return i.privateLink.linkage=s}),n.qZA(),n.qZA(),n.TgZ(8,"div",8),n.TgZ(9,"button",9),n.NdJ("click",function(){return i.addRemainingSites()}),n._uU(10),n.qZA(),n.qZA(),n.TgZ(11,"div",10),n.TgZ(12,"div",11),n._uU(13,"link"),n.qZA(),n._uU(14),n.TgZ(15,"button",12),n.NdJ("click",function(){return i.openDialog()}),n._UZ(16,"mat-icon",13),n.qZA(),n.qZA(),n.qZA(),n._UZ(17,"app-audit-info",14),n.qZA()),2&o&&(n.xp6(1),n.Q6J("ngIf",i.link.$$deletedCode),n.xp6(6),n.Q6J("model",i.privateLink.linkage),n.xp6(2),n.MGl("matTooltip","Add remaining ",i.remaining.length," sites"),n.Q6J("disabled",0===i.remaining.length),n.xp6(1),n.hij(" add remaining ",i.remaining.length," sites "),n.xp6(4),n.hij(" ",i.siteDisplay," "),n.xp6(3),n.Q6J("source",i.privateLink))},directives:[t.O5,k.lW,l.gM,h.Hw,Q.S,j.n],styles:[".link-form-container[_ngcontent-%COMP%]{padding:30px 10px 12px;position:relative}.notification-backdrop[_ngcontent-%COMP%]{position:absolute;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;z-index:10;background-color:#fffc;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:30px;font-weight:700;color:#666}.form-row[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:end;align-items:flex-end}.form-row[_ngcontent-%COMP%]   .delete-container[_ngcontent-%COMP%]{padding:0 10px 8px 0}.form-row[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1;padding-right:15px}.form-row[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{width:30%}.form-row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{width:40%}.form-row[_ngcontent-%COMP%]   .addRemaining[_ngcontent-%COMP%]{width:20%}.selectedSite[_ngcontent-%COMP%]{padding-left:2px;padding-right:2px}"]}),a}();function $(a,u){1&a&&n._UZ(0,"mat-divider",10),2&a&&n.Q6J("inset",!0)}function K(a,u){if(1&a){var o=n.EpF();n.TgZ(0,"div",7),n.TgZ(1,"app-link-form",8),n.NdJ("linkDeleted",function(d){return n.CHM(o),n.oxw().deleteLink(d)}),n.qZA(),n.YNc(2,$,1,1,"mat-divider",9),n.qZA()}if(2&a){var i=u.$implicit,c=u.last,s=u.index,p=n.oxw();n.Q6J("id","substance-other-links-"+s),n.xp6(1),n.Q6J("link",i)("remaining",p.remainingSites),n.xp6(1),n.Q6J("ngIf",!c)}}var W=function(){var a=function(u){(0,_.Z)(i,u);var o=(0,O.Z)(i);function i(c,s,p,m){var d;return(0,g.Z)(this,i),(d=o.call(this,m)).substanceFormLinksService=c,d.substanceFormService=s,d.scrollToService=p,d.gaService=m,d.remainingSites=[],d.invalidSites=0,d.subscriptions=[],d.analyticsEventCategory="substance form links",d}return(0,f.Z)(i,[{key:"ngOnInit",value:function(){this.canAddItemUpdate.emit(!0),this.menuLabelUpdate.emit("Links")}},{key:"ngAfterViewInit",value:function(){var s=this,p=this.substanceFormLinksService.substanceLinks.subscribe(function(d){s.links=d,s.getRemainingSites()});this.subscriptions.push(p);var m=this.substanceFormService.substanceSubunits.subscribe(function(d){s.subunits=d,s.getRemainingSites()});this.subscriptions.push(m)}},{key:"ngOnDestroy",value:function(){this.componentDestroyed.emit(),this.subscriptions.forEach(function(s){s.unsubscribe()})}},{key:"getRemainingSites",value:function(){var s=[],p=[];this.subunits&&this.links&&(this.subunits.forEach(function(m){if(null!=m.sequence&&m.sequence.length>0)for(var d=2;d<=m.sequence.length;d++)p.push({subunitIndex:m.subunitIndex,residueIndex:d})}),this.links.forEach(function(m){s=s.concat(m.sites)})),this.remainingSites=p.filter(function(m){return!s.some(function(d){return m.subunitIndex===d.subunitIndex&&m.residueIndex===d.residueIndex})}),this.invalidSites=p.length-s.length}},{key:"addItem",value:function(){this.addOtherLink()}},{key:"addOtherLink",value:function(){var s=this;this.substanceFormLinksService.addSubstanceLink(),setTimeout(function(){s.scrollToService.scrollToElement("substance-other-links-0","center")})}},{key:"deleteLink",value:function(s){this.substanceFormLinksService.deleteSubstanceLink(s)}}]),i}(F.u);return a.\u0275fac=function(o){return new(o||a)(n.Y36(U.e),n.Y36(I.B),n.Y36(M.i),n.Y36(D.$))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-substance-form-links"]],features:[n.qOj],decls:10,vars:3,consts:[[1,"responsive"],[1,"form-row"],[1,"form-row",3,"ngClass"],["class","alternate-backgrounds","appScrollToTarget","",3,"id",4,"ngFor","ngForOf"],[1,"middle-fill"],["mat-button","",3,"click"],["svgIcon","add_circle_outline"],["appScrollToTarget","",1,"alternate-backgrounds",3,"id"],[3,"link","remaining","linkDeleted"],["class","form-divider",3,"inset",4,"ngIf"],[1,"form-divider",3,"inset"]],template:function(o,i){1&o&&(n.TgZ(0,"div",0),n._UZ(1,"div",1),n.TgZ(2,"div",2),n._uU(3),n.qZA(),n.YNc(4,K,3,4,"div",3),n.TgZ(5,"div",1),n._UZ(6,"span",4),n.TgZ(7,"button",5),n.NdJ("click",function(){return i.addOtherLink()}),n._uU(8," Add linkage "),n._UZ(9,"mat-icon",6),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.xp6(2),n.Q6J("ngClass",0===i.invalidSites?"":"too-many"),n.xp6(1),n.hij("Remaining Links: ",0===i.invalidSites?i.remainingSites.length:i.invalidSites,""),n.xp6(1),n.Q6J("ngForOf",i.links))},directives:[t.mk,t.sg,E.P,V,t.O5,y.d,k.lW,h.Hw],styles:[".form-row[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding:5 10px;-ms-flex-align:end;align-items:flex-end;font-size:18px;margin-bottom:5px}.too-many[_ngcontent-%COMP%]{color:red}"]}),a}(),z=e(91434),G=(e(64061),function(){var a=(0,f.Z)(function u(){(0,g.Z)(this,u)});return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[[t.ez,b.o0.forChild(W),L.O,y.t,h.Ps,k.ot,x.w,T.lN,Z.UX,Z.u5,r.TU,l.AV,S.vV,v.c,z.LD]]}),a}())}}]);
//# sourceMappingURL=3127.82704a28d22f17a2.js.map