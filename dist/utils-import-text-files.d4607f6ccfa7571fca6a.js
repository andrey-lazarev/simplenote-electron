(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{335:function(t,e,r){"use strict";var o=r(5),a=r.n(o),i=r(42),n=r(24);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d=["content","creationDate","deleted","markdown","modificationDate","pinned","tags"];class p extends i.EventEmitter{constructor(t){var e;super(),e=this,a()(this,"importNote",(function(t){var{isTrashed:r=!1,isMarkdown:o=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object(n.pick)(t,d);if(a.publishURL="",a.shareURL="",a.deleted=r,a.tags=Object(n.get)(a,"tags",[]),a.systemTags=Object(n.get)(a,"systemTags",[]),a.pinned&&(a.systemTags.push("pinned"),delete a.pinned),(a.markdown||o)&&(a.systemTags.push("markdown"),delete a.markdown),a.creationDate&&isNaN(a.creationDate)&&(a.creationDate=new Date(a.creationDate).getTime()/1e3),a.creationDate=a.creationDate||a.modificationDate||Date.now(),a.modificationDate=a.modificationDate||a.creationDate||Date.now(),Object.prototype.hasOwnProperty.call(a,"content")||(a.content=""),a.tags){var i=a.tags.map(t=>{var e=t.replace(/(\r\n|\n|\r|\s|,)/gm,"");return Object(n.isEmpty)(e)?void 0:e});a.tags=i.filter(t=>void 0!==t)}e.addNote(a)})),a()(this,"importNotes",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;if(Object(n.isEmpty)(t))e.emit("status","error","No notes to import.");else{if(t.activeNotes||t.trashedNotes){var o=Object(n.get)(t,"activeNotes",[]).map(t=>e.importNote(t,r)),a=Object(n.get)(t,"trashedNotes",[]).map(t=>e.importNote(t,c(c({},r),{},{isTrashed:!0})));return Promise.all(o.concat(a))}e.emit("status","error","Invalid import format: No active or trashed notes found.")}})),this.addNote=t}}e.a=p},940:function(t,e,r){"use strict";r.r(e);var o=r(5),a=r.n(o),i=r(42),n=r(335),s=r(24);class c extends i.EventEmitter{constructor(t,e,r){super(),a()(this,"importNotes",t=>{var e=new n.a(this.addNote),r=0,o="";if(t)for(var a=t=>{var a;if(/\.(txt|md)$/.test(null!==(a=null==t?void 0:t.name.toLowerCase())&&void 0!==a?a:"")&&!(t.size>1e6)){var i=new FileReader;i.onload=a=>{var i=a.target.result,n=t.name.substring(0,t.name.lastIndexOf("."));if(Object(s.startsWith)(i,n)||(i=n+"\n\n"+i),i){var c=t.lastModified/1e3;e.importNote({content:i,modificationDate:c,creationDate:c},this.options),r++,t.name===o?(this.emit("status","complete",r),this.recordEvent("importer_import_completed",{source:"plaintext",note_count:r})):this.emit("status","progress",r)}},i.readAsText(t)}},i=0;i<t.length;i++){var c=t[i];i+1===t.length&&(o=c.name),a(c)}else this.emit("status","error","No files to import.")}),this.addNote=t,this.options=e,this.recordEvent=r}}e.default=c}}]);