"use strict";(self.webpackChunkgsrs_client=self.webpackChunkgsrs_client||[]).push([[6597],{66597:function(w,p,i){i.r(p),i.d(p,{SubstanceConceptDefinitionModule:function(){return O}});var r=i(48047),d=i(78069),f=i(36362),m=i(24582),h=i(7318),g=i(2756),v=i(50253),n=i(76442),C=i(9292),l=i(98002),b=function(o){return["/substances",o]};function x(t,o){if(1&t&&(n.TgZ(0,"div",3),n._UZ(1,"img",4),n.TgZ(2,"div"),n.TgZ(3,"a",5),n._uU(4),n.qZA(),n.qZA(),n.qZA()),2&t){var e=o.$implicit;n.xp6(1),n.Q6J("entityId",e.refuuid),n.xp6(2),n.Q6J("routerLink",n.VKq(3,b,e.refuuid)),n.xp6(1),n.hij(" ",e.refPname," ")}}function S(t,o){if(1&t&&(n.TgZ(0,"div"),n._uU(1," This record is a subconcept of "),n.TgZ(2,"div",1),n.YNc(3,x,5,5,"div",2),n.qZA(),n.qZA()),2&t){var e=n.oxw();n.xp6(3),n.Q6J("ngForOf",e.definitions)}}function Z(t,o){1&t&&(n.TgZ(0,"div"),n.TgZ(1,"i"),n._uU(2,"This is a non-substance concept"),n.qZA(),n.qZA())}var D=function(){var t=function(o){(0,m.Z)(s,o);var e=(0,h.Z)(s);function s(){var c;return(0,d.Z)(this,s),(c=e.call(this)).relationships=[],c.definitions=[],c.substanceUpdated=new v.x,c}return(0,r.Z)(s,[{key:"ngOnInit",value:function(){var a=this;this.substanceUpdated.subscribe(function(u){a.substance=u,null!=a.substance&&a.getConceptDefinition()})}},{key:"getConceptDefinition",value:function(){var a=this;this.definitions=[],this.substance.relationships&&this.substance.relationships.length>0&&(this.substance.relationships.forEach(function(u){"SUBSTANCE->SUB_CONCEPT"===u.type&&a.definitions.push(u.relatedSubstance)}),this.countUpdate.emit(this.definitions.length))}}]),s}(g.B);return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-substance-concept-definition"]],features:[n.qOj],decls:2,vars:2,consts:[[4,"ngIf"],[1,"thumb-row"],["class","thumb-col",4,"ngFor","ngForOf"],[1,"thumb-col"],["appSubstanceImage","",1,"image-thumb",3,"entityId"],[1,"substance-name",3,"routerLink"]],template:function(e,s){1&e&&(n.YNc(0,S,4,1,"div",0),n.YNc(1,Z,3,0,"div",0)),2&e&&(n.Q6J("ngIf",s.definitions.length>0),n.xp6(1),n.Q6J("ngIf",0==s.definitions.length))},directives:[f.O5,f.sg,C.m,l.yS],styles:[".thumb-row[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%}.thumb-col[_ngcontent-%COMP%]{max-width:400px;min-width:25%;padding-bottom:25px}.image-icon[_ngcontent-%COMP%]{width:150px;height:auto}.substance-icon-container[_ngcontent-%COMP%]{text-align:center;padding-left:10px;padding-right:10px;max-width:250px}.wrap[_ngcontent-%COMP%]{-ms-flex-wrap:wrap;flex-wrap:wrap}"]}),t}(),T=i(64061),y=i(24054),O=function(){var t=(0,r.Z)(function o(){(0,d.Z)(this,o)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[f.ez,T.o.forChild(D),l.Bz,y.f]]}),t}()}}]);
//# sourceMappingURL=6597.156fe57317ecd262.js.map