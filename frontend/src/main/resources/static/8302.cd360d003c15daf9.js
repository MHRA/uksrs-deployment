"use strict";(self.webpackChunkgsrs_client=self.webpackChunkgsrs_client||[]).push([[8302],{48302:function(Ye,T,r){r.d(T,{V:function(){return Ae}});var g=r(78069),h=r(48047),x=r(33567),R=r(42827),v=r(91770),u=r(95758),e=r(76442),C=r(61534),b=r(40089),l=r(97217),p=r(36362),_=r(87317);function Z(n,a){1&n&&(e.TgZ(0,"th",17),e._uU(1," Apply "),e.qZA())}function D(n,a){if(1&n){var t=e.EpF();e.TgZ(0,"td",18),e.TgZ(1,"mat-checkbox",3),e.NdJ("change",function(s){var m=e.CHM(t).$implicit;return e.oxw().toggleReference(s,m)}),e.qZA(),e.qZA()}if(2&n){var i=a.$implicit,o=e.oxw();e.xp6(1),e.Q6J("checked",o.domainReferenceUuids.indexOf(i.uuid)>-1)}}function y(n,a){1&n&&(e.TgZ(0,"th",17),e._uU(1," Type "),e.qZA())}function U(n,a){if(1&n&&(e.TgZ(0,"td",18),e._uU(1),e.qZA()),2&n){var t=a.$implicit,i=e.oxw();e.xp6(1),e.hij(" ",i.documentTypes[t.docType]&&i.documentTypes[t.docType].value," ")}}function N(n,a){1&n&&(e.TgZ(0,"th",17),e._uU(1," Citation "),e.qZA())}function A(n,a){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){var t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.citation)}}function k(n,a){if(1&n&&(e.TgZ(0,"a",21),e._uU(1),e.qZA()),2&n){var t=e.oxw().$implicit;e.Q6J("href",t.url,e.LSH),e.xp6(1),e.Oqu(t.citation)}}function Y(n,a){if(1&n&&(e.TgZ(0,"td",18),e.YNc(1,A,2,1,"span",19),e.YNc(2,k,2,2,"a",20),e.qZA()),2&n){var t=a.$implicit;e.xp6(1),e.Q6J("ngIf",!t.url),e.xp6(1),e.Q6J("ngIf",t.url)}}function O(n,a){1&n&&(e.TgZ(0,"th",17),e._uU(1," Public Domain "),e.qZA())}function w(n,a){if(1&n&&(e.TgZ(0,"td",18),e._uU(1),e.qZA()),2&n){var t=a.$implicit;e.xp6(1),e.hij(" ",t.publicDomain?"Yes":"No"," ")}}function q(n,a){1&n&&(e.TgZ(0,"th",17),e._uU(1," Access "),e.qZA())}function I(n,a){1&n&&(e.TgZ(0,"span"),e._uU(1," Public "),e.qZA())}function J(n,a){1&n&&(e.TgZ(0,"span"),e._uU(1,", "),e.qZA())}function Q(n,a){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.YNc(2,J,2,0,"span",19),e.qZA()),2&n){var t=a.$implicit,i=a.last;e.xp6(1),e.hij(" ",t," "),e.xp6(1),e.Q6J("ngIf",!i)}}function E(n,a){if(1&n&&(e.TgZ(0,"span"),e.YNc(1,Q,3,2,"span",22),e.qZA()),2&n){var t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",t.access)}}function S(n,a){if(1&n&&(e.TgZ(0,"td",18),e.YNc(1,I,2,0,"span",19),e.YNc(2,E,2,1,"span",19),e.qZA()),2&n){var t=a.$implicit;e.xp6(1),e.Q6J("ngIf",!t.access||0===t.access.length),e.xp6(1),e.Q6J("ngIf",t.access&&t.access.length>0)}}function M(n,a){1&n&&e._UZ(0,"tr",23)}function F(n,a){1&n&&e._UZ(0,"tr",24)}var P=function(){var n=function(){function a(t,i,o){(0,g.Z)(this,a),this.dialogRef=t,this.data=i,this.cvService=o,this.domainReferenceUuids=[],this.documentTypes={},this.displayedColumns=["apply","type","citation","publicDomain","access"],this.filter=!1,this.domainReferenceUuids=i.domainRefereceUuids.slice(),this.substanceReferences=i.substanceReferences}return(0,h.Z)(a,[{key:"ngOnInit",value:function(){var i=this;this.unfiltered=JSON.parse(JSON.stringify(this.substanceReferences)),this.getVocabularies(),this.dialogRef.beforeClosed().subscribe(function(){return i.dialogRef.close(i.domainReferenceUuids&&i.domainReferenceUuids.length>0?i.domainReferenceUuids:null)}),this.filterRefs()}},{key:"filterRefs",value:function(){this.filter=!this.filter,this.substanceReferences=this.filter?this.substanceReferences.filter(function(i){return"SYSTEM"!==i.docType&&"VALIDATION_MESSAGE"!==i.docType}):JSON.parse(JSON.stringify(this.unfiltered))}},{key:"getVocabularies",value:function(){var i=this;this.cvService.getDomainVocabulary("DOCUMENT_TYPE").subscribe(function(o){i.documentTypes=o.DOCUMENT_TYPE.dictionary})}},{key:"toggleReference",value:function(i,o){var c=this.domainReferenceUuids.indexOf(o.uuid);i.checked&&-1===c?this.domainReferenceUuids.push(o.uuid):!i.checked&&c>-1&&this.domainReferenceUuids.splice(c,1)}},{key:"save",value:function(){this.dialogRef.close(this.domainReferenceUuids)}},{key:"cancel",value:function(){this.dialogRef.close()}}]),a}();return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.so),e.Y36(u.WI),e.Y36(R.I))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-reuse-references-dialog"]],decls:30,vars:4,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"form-row"],["matTooltip","Apply",3,"checked","change"],["mat-table","",3,"dataSource"],["matColumnDef","apply"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","type"],["matColumnDef","citation"],["matColumnDef","publicDomain"],["matColumnDef","access"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["matDialogActions",""],[1,"middle-fill"],["mat-button","",3,"click"],["mat-header-cell",""],["mat-cell",""],[4,"ngIf"],["target","_blank",3,"href",4,"ngIf"],["target","_blank",3,"href"],[4,"ngFor","ngForOf"],["mat-header-row",""],["mat-row",""]],template:function(t,i){1&t&&(e.TgZ(0,"h1",0),e._uU(1,"Reuse Substance References"),e.qZA(),e.TgZ(2,"div",1),e.TgZ(3,"div",2),e.TgZ(4,"mat-checkbox",3),e.NdJ("change",function(){return i.filterRefs()}),e._uU(5,"Filter Out System / Validation references "),e.qZA(),e.qZA(),e.TgZ(6,"table",4),e.ynx(7,5),e.YNc(8,Z,2,0,"th",6),e.YNc(9,D,2,1,"td",7),e.BQk(),e.ynx(10,8),e.YNc(11,y,2,0,"th",6),e.YNc(12,U,2,1,"td",7),e.BQk(),e.ynx(13,9),e.YNc(14,N,2,0,"th",6),e.YNc(15,Y,3,2,"td",7),e.BQk(),e.ynx(16,10),e.YNc(17,O,2,0,"th",6),e.YNc(18,w,2,1,"td",7),e.BQk(),e.ynx(19,11),e.YNc(20,q,2,0,"th",6),e.YNc(21,S,3,2,"td",7),e.BQk(),e.YNc(22,M,1,0,"tr",12),e.YNc(23,F,1,0,"tr",13),e.qZA(),e.qZA(),e.TgZ(24,"div",14),e._UZ(25,"span",15),e.TgZ(26,"button",16),e.NdJ("click",function(){return i.cancel()}),e._uU(27,"Cancel"),e.qZA(),e.TgZ(28,"button",16),e.NdJ("click",function(){return i.save()}),e._uU(29," Save "),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("checked",i.filter),e.xp6(2),e.Q6J("dataSource",i.substanceReferences),e.xp6(16),e.Q6J("matHeaderRowDef",i.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",i.displayedColumns))},directives:[u.uh,u.xY,C.oG,b.gM,l.BZ,l.w1,l.fO,l.ge,l.Dz,l.ev,p.O5,p.sg,l.as,l.XQ,l.nj,l.Gk,u.H8,_.lW],styles:["tr.mat-row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom-width:0}"]}),n}(),$=r(52149),B=r(24936),H=r(66088),d=r(16531),j=r(70178),z=r(65590),V=r(98827);function X(n,a){if(1&n){var t=e.EpF();e.TgZ(0,"button",11),e.NdJ("click",function(o){return e.CHM(t),e.oxw().reuseExistingReference(),o.stopPropagation()}),e._uU(1," Reuse "),e._UZ(2,"mat-icon",12),e.qZA()}}function G(n,a){1&n&&(e.TgZ(0,"th",27),e._uU(1," Type "),e.qZA())}function L(n,a){if(1&n&&(e.TgZ(0,"td",28),e._uU(1),e.qZA()),2&n){var t=a.$implicit,i=e.oxw(2);e.xp6(1),e.hij(" ",i.documentTypesDictionary[t.docType]&&i.documentTypesDictionary[t.docType].value," ")}}function W(n,a){1&n&&(e.TgZ(0,"th",27),e._uU(1," Citation "),e.qZA())}function K(n,a){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){var t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.citation)}}function ee(n,a){if(1&n&&(e.TgZ(0,"a",31),e._uU(1),e.qZA()),2&n){var t=e.oxw().$implicit;e.Q6J("href",t.url,e.LSH),e.xp6(1),e.Oqu(t.citation)}}function ne(n,a){if(1&n&&(e.TgZ(0,"td",28),e.YNc(1,K,2,1,"span",29),e.YNc(2,ee,2,2,"a",30),e.qZA()),2&n){var t=a.$implicit;e.xp6(1),e.Q6J("ngIf",!t.url),e.xp6(1),e.Q6J("ngIf",t.url)}}function te(n,a){1&n&&(e.TgZ(0,"th",27),e._uU(1," Public Domain "),e.qZA())}function ie(n,a){if(1&n&&(e.TgZ(0,"td",28),e._uU(1),e.qZA()),2&n){var t=a.$implicit;e.xp6(1),e.hij(" ",t.publicDomain?"Yes":"No"," ")}}function ae(n,a){1&n&&(e.TgZ(0,"th",27),e._uU(1," Access "),e.qZA())}function oe(n,a){1&n&&(e.TgZ(0,"span"),e._uU(1," Public "),e.qZA())}function ce(n,a){1&n&&(e.TgZ(0,"span"),e._uU(1,", "),e.qZA())}function se(n,a){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.YNc(2,ce,2,0,"span",29),e.qZA()),2&n){var t=a.$implicit,i=a.last;e.xp6(1),e.hij(" ",t," "),e.xp6(1),e.Q6J("ngIf",!i)}}function le(n,a){if(1&n&&(e.TgZ(0,"span"),e.YNc(1,se,3,2,"span",32),e.qZA()),2&n){var t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",t.access)}}function re(n,a){if(1&n&&(e.TgZ(0,"td",28),e.YNc(1,oe,2,0,"span",29),e.YNc(2,le,2,1,"span",29),e.qZA()),2&n){var t=a.$implicit;e.xp6(1),e.Q6J("ngIf",!t.access||0===t.access.length),e.xp6(1),e.Q6J("ngIf",t.access&&t.access.length>0)}}function fe(n,a){1&n&&(e.TgZ(0,"th",27),e._uU(1," Edit "),e.qZA())}function ue(n,a){if(1&n){var t=e.EpF();e.TgZ(0,"td",28),e.TgZ(1,"button",33),e.NdJ("click",function(){var c=e.CHM(t).$implicit;return e.oxw(2).openExistingReferenceForm(c)}),e._UZ(2,"mat-icon",34),e.qZA(),e.qZA()}}function me(n,a){1&n&&(e.TgZ(0,"th",27),e._uU(1," Deselect "),e.qZA())}function pe(n,a){if(1&n){var t=e.EpF();e.TgZ(0,"td",28),e.TgZ(1,"button",35),e.NdJ("click",function(){var c=e.CHM(t).$implicit;return e.oxw(2).removeDomainReference(c.uuid)}),e._UZ(2,"mat-icon",36),e.qZA(),e.qZA()}}function de(n,a){1&n&&e._UZ(0,"th",27)}function _e(n,a){if(1&n){var t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"a",37),e.NdJ("click",function(){e.CHM(t);var o=e.oxw().$implicit;return e.oxw(2).downloadDocument(o.uploadedFile)}),e._UZ(2,"mat-icon",38),e.qZA(),e.qZA()}}function ge(n,a){if(1&n&&(e.TgZ(0,"td",28),e.YNc(1,_e,3,0,"div",29),e.qZA()),2&n){var t=a.$implicit;e.xp6(1),e.Q6J("ngIf",t.uploadedFile)}}function he(n,a){1&n&&(e.TgZ(0,"th",27),e._uU(1," Tags "),e.qZA())}function Re(n,a){if(1&n&&(e.TgZ(0,"span",41),e._uU(1),e.qZA()),2&n){var t=a.$implicit;e.xp6(1),e.hij(" ",t," ")}}function ve(n,a){if(1&n){var t=e.EpF();e.TgZ(0,"a",42),e.NdJ("click",function(){e.CHM(t);var o=e.oxw(4);return o.showmore=!o.showmore}),e._uU(1,"hide"),e.qZA()}}function be(n,a){if(1&n&&(e.TgZ(0,"span"),e.YNc(1,Re,2,1,"span",39),e.YNc(2,ve,2,0,"a",40),e.qZA()),2&n){var t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",t.tags),e.xp6(1),e.Q6J("ngIf",t.tags.length>1)}}function Te(n,a){if(1&n){var t=e.EpF();e.TgZ(0,"a",42),e.NdJ("click",function(){e.CHM(t);var o=e.oxw(4);return o.showmore=!o.showmore}),e._uU(1,"more..."),e.qZA()}}function xe(n,a){if(1&n&&(e.TgZ(0,"span"),e.TgZ(1,"span",41),e._uU(2),e.qZA(),e.YNc(3,Te,2,0,"a",40),e.qZA()),2&n){var t=e.oxw().$implicit;e.xp6(2),e.hij(" ",t.tags.length>0?t.tags[0]:null,""),e.xp6(1),e.Q6J("ngIf",t.tags.length>1)}}function Ce(n,a){if(1&n&&(e.TgZ(0,"td",28),e.YNc(1,be,3,2,"span",29),e.YNc(2,xe,4,2,"span",29),e.qZA()),2&n){var t=a.$implicit,i=e.oxw(2);e.xp6(1),e.Q6J("ngIf",i.showmore&&t.tags&&t.tags.length>0),e.xp6(1),e.Q6J("ngIf",!i.showmore&&t.tags&&t.tags.length>0)}}function Ze(n,a){1&n&&e._UZ(0,"th",27)}function De(n,a){if(1&n&&(e.TgZ(0,"td",28),e._UZ(1,"app-apply-reference",43),e.qZA()),2&n){var t=a.$implicit;e.xp6(1),e.Q6J("subReferenceUuid",t.uuid)}}function ye(n,a){1&n&&e._UZ(0,"tr",44)}function Ue(n,a){1&n&&e._UZ(0,"tr",45)}function Ne(n,a){if(1&n&&(e.TgZ(0,"table",13),e.ynx(1,14),e.YNc(2,G,2,0,"th",15),e.YNc(3,L,2,1,"td",16),e.BQk(),e.ynx(4,17),e.YNc(5,W,2,0,"th",15),e.YNc(6,ne,3,2,"td",16),e.BQk(),e.ynx(7,18),e.YNc(8,te,2,0,"th",15),e.YNc(9,ie,2,1,"td",16),e.BQk(),e.ynx(10,19),e.YNc(11,ae,2,0,"th",15),e.YNc(12,re,3,2,"td",16),e.BQk(),e.ynx(13,20),e.YNc(14,fe,2,0,"th",15),e.YNc(15,ue,3,0,"td",16),e.BQk(),e.ynx(16,21),e.YNc(17,me,2,0,"th",15),e.YNc(18,pe,3,0,"td",16),e.BQk(),e.ynx(19,22),e.YNc(20,de,1,0,"th",15),e.YNc(21,ge,2,1,"td",16),e.BQk(),e.ynx(22,23),e.YNc(23,he,2,0,"th",15),e.YNc(24,Ce,3,2,"td",16),e.BQk(),e.ynx(25,24),e.YNc(26,Ze,1,0,"th",15),e.YNc(27,De,2,1,"td",16),e.BQk(),e.YNc(28,ye,1,0,"tr",25),e.YNc(29,Ue,1,0,"tr",26),e.qZA()),2&n){var t=e.oxw();e.Q6J("dataSource",t.tableData),e.xp6(28),e.Q6J("matHeaderRowDef",t.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",t.displayedColumns)}}var Ae=function(){var n=function(){function a(t,i,o,c,s,f,m){(0,g.Z)(this,a),this.cvService=t,this.substanceFormReferencesService=i,this.dialog=o,this.element=c,this.utilsService=s,this.overlayContainerService=f,this.substanceFormService=m,this.canReuse=!1,this.references=[],this.documentTypesDictionary={},this.displayedColumns=["type","citation","publicDomain","access","goToReference","remove","attachment","tags","apply"],this.isExpanded=!1,this.showmore=!1,this.subscriptions=[]}return(0,h.Z)(a,[{key:"ngOnInit",value:function(){var i=this;this.getVocabularies();var o=this.substanceFormReferencesService.substanceReferences.subscribe(function(c){i.substanceReferences=c&&c.length?c.filter(function(s){return!s.$$deletedCode}):[],i.canReuse=i.substanceReferences&&i.substanceReferences.length>0,i.loadReferences()});this.subscriptions.push(o),this.overlayContainer=this.overlayContainerService.getContainerElement()}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach(function(i){i.unsubscribe()})}},{key:"referencesUuids",get:function(){return this.domainReferenceUuids},set:function(i){this.domainReferenceUuids=i||[],this.loadReferences()}},{key:"getVocabularies",value:function(){var i=this,o=this.cvService.getDomainVocabulary("DOCUMENT_TYPE").subscribe(function(c){i.documentTypesDictionary=c.DOCUMENT_TYPE.dictionary});this.subscriptions.push(o)}},{key:"loadReferences",value:function(){var i=this;this.domainReferenceUuids&&this.substanceReferences?(this.references=[],this.domainReferenceUuids.forEach(function(o){var c=i.substanceReferences.find(function(s){return s.uuid===o});null!=c&&i.references.push(c)}),this.tableData=new l.by(this.references)):this.references=[]}},{key:"addNewReference",value:function(){var i=this,c=this.dialog.open(v.n,{data:{tags:[],access:[]},width:"900px"});this.overlayContainer.style.zIndex="1002";var s=c.afterClosed().subscribe(function(f){i.overlayContainer.style.zIndex=null,null!=f&&(f=i.substanceFormReferencesService.addSubstanceReference(f),setTimeout(function(){i.addDomainReference(f.uuid)}),i.canReuse=!0)});this.subscriptions.push(s)}},{key:"openExistingReferenceForm",value:function(i){var o=this,c=this.dialog.open(v.n,{data:i,width:"900px"});this.overlayContainer.style.zIndex="1002";var s=c.afterClosed().subscribe(function(f){o.overlayContainer.style.zIndex=null});this.subscriptions.push(s)}},{key:"addDomainReference",value:function(i){-1===this.domainReferenceUuids.indexOf(i)&&this.domainReferenceUuids.push(i);var o=this.references.find(function(c){return c.uuid===i});null==o&&null!=(o=this.substanceReferences.find(function(c){return c.uuid===i}))&&(this.references.unshift(o),this.tableData.data=this.references)}},{key:"reuseExistingReference",value:function(){var i=this,c=this.dialog.open(P,{data:{domainRefereceUuids:this.domainReferenceUuids,substanceReferences:this.substanceReferences},width:"900px"});this.overlayContainer.style.zIndex="1002";var s=c.afterClosed().subscribe(function(f){i.overlayContainer.style.zIndex=null,null!=f&&i.updateDomainReferences(f)});this.subscriptions.push(s)}},{key:"updateDomainReferences",value:function(){var i=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.domainReferenceUuids.length=0,o.forEach(function(s){i.domainReferenceUuids.push(s)});var c=[];this.domainReferenceUuids.forEach(function(s){var f=i.substanceReferences.find(function(m){return m.uuid===s});null!=f&&c.push(f)}),this.references=c,this.tableData.data=this.references}},{key:"removeDomainReference",value:function(i){var o=this.domainReferenceUuids.indexOf(i);o>-1&&this.domainReferenceUuids.splice(o,1);var c=this.references.findIndex(function(s){return s.uuid===i});c>-1&&this.references.splice(c,1),this.tableData.data=this.references}},{key:"panelOpened",value:function(){this.isExpanded=!0;var i=new Event("focusin",{bubbles:!0,cancelable:!0});this.element.nativeElement.dispatchEvent(i)}},{key:"panelClosed",value:function(){this.isExpanded=!1;var i=new Event("focusout",{bubbles:!0,cancelable:!0});this.element.nativeElement.dispatchEvent(i)}},{key:"downloadDocument",value:function(i){this.substanceFormService.bypassUpdateCheck(),window.open(i)}}]),a}();return n.\u0275fac=function(t){return new(t||n)(e.Y36(R.I),e.Y36(B.v),e.Y36(u.uw),e.Y36(e.SBq),e.Y36($.F),e.Y36(H.Xj),e.Y36(x.B))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-domain-references"]],inputs:{card:"card",referencesUuids:"referencesUuids"},decls:16,vars:4,consts:[[1,"domain-references-content"],[3,"closed","opened"],[1,"domain-reference-header"],["matTooltip","Expand references",1,"title","ref-title"],["matBadgeOverlap","false",1,"custom-badge",3,"matBadge"],[1,"middle-fill"],[1,"title-actions"],["mat-flat-button","","color","primary","matTooltip","Create new reference",3,"click"],["svgIcon","add_circle_outline"],["mat-flat-button","","color","primary","matTooltip","Reuse existing reference",3,"click",4,"ngIf"],["mat-table","",3,"dataSource",4,"ngIf"],["mat-flat-button","","color","primary","matTooltip","Reuse existing reference",3,"click"],["svgIcon","move_to_inbox"],["mat-table","",3,"dataSource"],["matColumnDef","type"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","citation"],["matColumnDef","publicDomain"],["matColumnDef","access"],["matColumnDef","goToReference"],["matColumnDef","remove"],["matColumnDef","attachment"],["matColumnDef","tags"],["matColumnDef","apply"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[4,"ngIf"],["target","_blank",3,"href",4,"ngIf"],["target","_blank",3,"href"],[4,"ngFor","ngForOf"],["mat-icon-button","","matTooltip","Open reference form",3,"click"],["svgIcon","edit"],["mat-icon-button","","matTooltip","Remove reference",3,"click"],["svgIcon","clear"],["mat-icon-button","","matTooltip","Download document",3,"click"],["svgIcon","cloud_download"],["class","badge",4,"ngFor","ngForOf"],["class","morelink",3,"click",4,"ngIf"],[1,"badge"],[1,"morelink",3,"click"],[3,"subReferenceUuid"],["mat-header-row",""],["mat-row",""]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"mat-accordion"),e.TgZ(2,"mat-expansion-panel",1),e.NdJ("closed",function(){return i.panelClosed()})("opened",function(){return i.panelOpened()}),e.TgZ(3,"mat-expansion-panel-header",2),e.TgZ(4,"mat-panel-title"),e.TgZ(5,"h4",3),e._uU(6),e._UZ(7,"span",4),e.qZA(),e._UZ(8,"div",5),e.TgZ(9,"div",6),e.TgZ(10,"button",7),e.NdJ("click",function(c){return i.addNewReference(),c.stopPropagation()}),e._uU(11," Create new "),e._UZ(12,"mat-icon",8),e.qZA(),e.YNc(13,X,3,0,"button",9),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"div"),e.YNc(15,Ne,30,3,"table",10),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(6),e.hij(" ",i.card&&"definition"===i.card?"Definitional ":"","References "),e.xp6(1),e.Q6J("matBadge",i.referencesUuids&&i.referencesUuids.length||0),e.xp6(6),e.Q6J("ngIf",i.canReuse),e.xp6(2),e.Q6J("ngIf",i.referencesUuids))},directives:[d.pp,d.ib,d.yz,d.yK,b.gM,j.k,_.lW,z.Hw,p.O5,l.BZ,l.w1,l.fO,l.ge,l.Dz,l.ev,p.sg,_.zs,V.U,l.as,l.XQ,l.nj,l.Gk],styles:[".domain-reference[_ngcontent-%COMP%]{display:block;padding:5px 0 10px;color:#448aff}.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-expansion-panel[_ngcontent-%COMP%]{box-shadow:none}.domain-reference-header[_ngcontent-%COMP%]     .mat-expansion-indicator:after{margin-right:7px}.mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0}.domain-references-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-bottom:5px;padding:0 7px}.domain-references-content[_ngcontent-%COMP%]     .mat-expansion-panel-body{padding:0}.mat-expansion-panel-header-title.block-display[_ngcontent-%COMP%]{display:block}.custom-badge[_ngcontent-%COMP%] > .mat-badge-content[_ngcontent-%COMP%]{background-color:#fff!important;color:#4793d1!important}.title-actions[_ngcontent-%COMP%]{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:end;align-items:flex-end;padding-bottom:5px}.title-actions[_ngcontent-%COMP%]   .mat-flat-button[_ngcontent-%COMP%]{min-width:0;padding:0 10px;line-height:30px}.title-actions[_ngcontent-%COMP%]   .mat-flat-button[_ngcontent-%COMP%]:not(:last-child){margin-right:10px}.ref-title[_ngcontent-%COMP%]{min-width:200px}"]}),n}()}}]);
//# sourceMappingURL=8302.cd360d003c15daf9.js.map