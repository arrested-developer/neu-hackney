!function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var a={};t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,a){"use strict";t.a=function(){var e=!1,t=function(t){if(e){wp.data.dispatch("core/notices").removeNotice("LOCK_NOTICE");var a=t();a.isValid?wp.data.dispatch("core/editor").unlockPostSaving("my_lock_key"):(wp.data.dispatch("core/editor").lockPostSaving("my_lock_key"),wp.data.dispatch("core/notices").createInfoNotice(a.message,{id:"LOCK_NOTICE",isDismissible:!0}))}else e=!0},a=function(e){return{isValid:!1,message:e}},n=function(){return{isValid:!0}},r=function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)};return{run:t,fail:a,pass:n,emailIsValid:r,emailIsInvalid:function(e){return!r(e)}}}},function(e,t,a){"use strict";var n=function(e){return e.filter(function(e){return"string"===typeof e}).join("<br>")};t.a=n},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a(3),a(6),a(7),a(10),a(13),a(16)},function(e,t,a){"use strict";var n=a(0),r=a(4),i=(a.n(r),a(5)),l=(a.n(i),wp.i18n.__),o=wp.blocks.registerBlockType,c=wp.editor.MediaUpload,s=wp.components,m=s.Button,u=s.BaseControl,d=!1,p=Object(n.a)();o("neu-hackney/newsletter",{title:l("NEU Hackney - Newsletter Block"),icon:"shield",category:"common",keywords:[l("neu-hackney-newsletter \u2014 CGB Block"),l("CGB Example"),l("create-guten-block")],attributes:{newsletterID:{type:"number"},newsletterURL:{type:"string",source:"attribute",selector:"embed",attribute:"src"},__newsletterURL:{type:"string",source:"meta",meta:"neuhack_attachment_url"}},edit:function(e){var t=e.attributes,a=t.newsletterID,r=t.newsletterURL,i=e.className,l=e.setAttributes;window.addEventListener("load",function(){document.querySelector(".editor-post-title__input").style.display="none"});var o=function(e){l({newsletterID:e.id,newsletterURL:e.url,__newsletterURL:e.url})};return d||(wp.data.dispatch("core/notices").createNotice("info",'Newsletter will be published with the current month and year. To publish with a different date, change the publish settings from "Immediately" to your chosen date in the "Status & Visibility" options at the top right of the screen.',{isDismissible:!0,actions:[]}),d=!0),p(function(){return a?Object(n.passValidation)():Object(n.failValidation)("A newsletter is required, please upload a file in pdf format")}),wp.element.createElement("div",{className:i},wp.element.createElement(u,{label:a?null:"Upload NEU Hackney Newsletter in pdf format",id:"newsletter-upload"},wp.element.createElement(c,{onSelect:o,allowedTypes:"application/pdf",value:a,id:"newsletter-upload",render:function(e){var t=e.open;return wp.element.createElement("div",{style:{width:"100%"}},a&&wp.element.createElement("embed",{src:r,type:"application/pdf",width:"100%",height:"600px"}),wp.element.createElement(m,{className:"button button-large",onClick:t},a?"Choose another file":"Upload newsletter"))}})))},save:function(e){var t=e.className,a=e.attributes.newsletterURL;return wp.element.createElement("div",{className:t},wp.element.createElement("embed",{src:a,type:"application/pdf",width:"100%",height:"600px"}))}})},function(e,t){},function(e,t){},function(e,t,a){"use strict";var n=a(1),r=wp.blocks.registerBlockType,i=wp.editor,l=i.MediaUpload,o=i.RichText,c=wp.components,s=c.Button,m=c.TextareaControl,u=c.BaseControl,d=c.TimePicker,p=c.RadioControl,h=!1;r("neu-hackney/event",{title:"Event Details",icon:"format-image",category:"common",attributes:{mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:"img",attribute:"src"},__mediaURL:{type:"string",source:"meta",meta:"neuhack_image_url"},imageAlt:{type:"string",source:"attribute",selector:"img",attribute:"alt"},__imageAlt:{type:"string",source:"meta",meta:"neuhack_image_alt"},__dateTime:{type:"string",source:"meta",meta:"neuhack_date_time"},date:{type:"array",source:"children",selector:".neuhack-event-date"},time:{type:"array",source:"children",selector:".neuhack-event-time"},eventDetails:{type:"array",source:"children",selector:".neuhack-event-details"},__eventDetails:{type:"string",source:"meta",meta:"neuhack_details"},eventIsGeneralMeeting:{type:"number"},__eventIsGeneralMeeting:{type:"number",source:"meta",meta:"neuhack_event_is_general_meeting"},agendaID:{type:"number"},agendaURL:{type:"string",source:"attribute",selector:"a",attribute:"href"},__agendaURL:{type:"string",source:"meta",meta:"neuhack_attachment_url"}},edit:function(e){var t=e.className,a=e.attributes,r=a.mediaID,i=a.mediaURL,c=a.imageAlt,g=a.__eventIsGeneralMeeting,f=a.__dateTime,b=a.eventDetails,w=a.agendaID,y=a.__agendaURL,_=e.setAttributes,v=function(e){_({mediaID:e.id,mediaURL:e.url,__mediaURL:e.url})},k=function(e){_({imageAlt:e,__imageAlt:e})},E=function(e){var t=new Date(e),a=t.toLocaleDateString("en-GB",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),n=t.toLocaleTimeString("en-GB",{hour12:!0,hour:"numeric",minute:"2-digit"});_({__dateTime:e,date:a,time:n})},U=function(e){_({eventDetails:e,__eventDetails:Object(n.a)(e)})},N=function(e){var t=Number(e);_({eventIsGeneralMeeting:t,__eventIsGeneralMeeting:t})},L=function(e){_({agendaID:e.id,agendaURL:e.url,__agendaURL:e.url})};return h||(wp.data.dispatch("core/notices").createNotice("warning","Please make sure that all text information contained in the flyer is added either in the image alt text field to be read out by screen readers, or in the event details field where it can be read by all users.",{isDismissible:!0,actions:[]}),h=!0),wp.element.createElement("section",{className:t},wp.element.createElement(u,{label:"Add a flyer for the event, which can include the event details.",id:"flyer-upload"},wp.element.createElement(l,{onSelect:v,allowedTypes:"image",value:r,id:"flyer-upload",render:function(e){var t=e.open;return wp.element.createElement(s,{className:r?"image-button":"button button-large",onClick:t},r?wp.element.createElement("img",{src:i,alt:"Event Flyer"}):"Upload image")}})),wp.element.createElement(m,{label:"Flyer Alt Text",placeholder:"Describe the important details from the flyer for those who cannot see the image. This will be read out for visually impaired users.",value:c,onChange:k}),wp.element.createElement(u,{label:"Enter date and time for the event, using 24 hour time (e.g. 18:00)",id:"date-time"},wp.element.createElement(d,{id:"date-time",currentTime:f,onChange:E})),wp.element.createElement(u,{label:"Event Details",id:"event-details"},wp.element.createElement(o,{tagName:"div",format:"string",id:"event-details",placeholder:"Enter the key event details, e.g. location",value:b,onChange:U,style:{marginTop:"1rem",marginBottom:"1rem"}})),wp.element.createElement(p,{label:"Select event type",selected:g,onChange:N,options:[{label:"Other",value:0},{label:"General Meeting",value:1}]}),g?wp.element.createElement(u,{label:"Upload a full flyer with agenda and previous meeting's minutes, as a pdf",id:"agenda-upload"},wp.element.createElement(l,{onSelect:L,allowedTypes:"application/pdf",value:w,id:"agenda-upload",render:function(e){var t=e.open;return wp.element.createElement("div",{style:{width:"100%"}},w&&wp.element.createElement("embed",{src:y,type:"application/pdf",width:"100%",height:"600px"}),wp.element.createElement(s,{className:"button button-large",onClick:t},w?"Choose again":"Upload agenda"))}})):null)},save:function(e){var t=e.className,a=e.attributes,n=a.mediaURL,r=a.imageAlt,i=a.date,l=a.time,o=a.eventDetails,c=a.eventIsGeneralMeeting,s=a.agendaURL;return wp.element.createElement("article",{className:t},wp.element.createElement("img",{src:n,alt:r}),wp.element.createElement("p",{className:"neuhack-event-date-time"},wp.element.createElement("div",{className:"neuhack-event-date"},i),wp.element.createElement("div",{className:"neuhack-event-time"},l)),wp.element.createElement("p",{className:"neuhack-event-details"},o),c?wp.element.createElement("p",{className:"neuhack-agenda-link"},wp.element.createElement("a",{href:s},"View Agenda")):null)}})},function(e,t,a){"use strict";var n=a(1),r=a(8),i=(a.n(r),a(9)),l=(a.n(i),a(0)),o=wp.i18n.__,c=wp.blocks.registerBlockType,s=wp.editor,m=s.MediaUpload,u=s.RichText,d=wp.components,p=d.Button,h=d.BaseControl,g=d.TextControl,f=Object(l.a)(),b={};c("neu-hackney/campaign",{title:o("NEU Hackney - Campaign Block"),icon:"shield",category:"common",keywords:[o("neu-hackney-campaign \u2014 CGB Block"),o("CGB Example"),o("create-guten-block")],attributes:{mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:"img",attribute:"src"},__mediaURL:{type:"string",source:"meta",meta:"neuhack_image_url"},campaignDetails:{type:"array",source:"children",selector:".neu-hackney-campaign-details"},__campaignDetails:{type:"string",source:"meta",meta:"neuhack_details"},headline:{type:"array",source:"children",selector:".neu-hackney-campaign-headline"},__headline:{type:"string",source:"meta",meta:"neuhack_headline"}},edit:function(e){var t=e.className,a=e.setAttributes,r=e.attributes,i=r.mediaID,l=r.mediaURL,o=r.campaignDetails,c=r.headline,s=function(){var e=b.image,t=b.headline,a=b.details;return b.postTitle?e?t?a?f.pass():f.fail("Please enter the campaign details"):f.fail("Please enter a short description"):f.fail("Please upload an image"):f.fail("Please enter a title")},d=function(e){b.postTitle=e.value,f.run(s)};window.addEventListener("load",function(){var e=document.querySelector(".editor-post-title__input");e.addEventListener("input",function(){return d(e)})});var w=function(e){a({mediaID:e.id,mediaURL:e.url,__mediaURL:e.url}),b.image=e.id,f.run(s)},y=function(e){a({campaignDetails:e,__campaignDetails:Object(n.a)(e)}),b.details=Object(n.a)(e),f.run(s)},_=function(e){a({headline:e,__headline:e}),b.headline=e,f.run(s)};return wp.element.createElement("section",{className:t},wp.element.createElement(h,{label:"Add a photo for the campaign",id:"flyer-upload"},wp.element.createElement(m,{onSelect:w,allowedTypes:"image",value:i,id:"flyer-upload",render:function(e){var t=e.open;return wp.element.createElement(p,{className:i?"image-button":"button button-large",onClick:t},i?wp.element.createElement("img",{src:l,alt:""}):"Upload image")}})),wp.element.createElement(g,{label:"Short Description",placeholder:"A short headline description of the campaign",value:c,onChange:_}),wp.element.createElement(h,{label:"Campaign Details",id:"campaign-details"},wp.element.createElement(u,{tagName:"div",multiline:"br",id:"event-details",placeholder:"Enter the key event details, e.g. location",value:o,onChange:y,style:{marginTop:"1rem",marginBottom:"1rem"}})))},save:function(e){var t=e.className,a=e.attributes,n=a.mediaURL,r=a.campaignDetails,i=a.headline;return wp.element.createElement("article",{className:t},wp.element.createElement("img",{src:n,alt:""}),wp.element.createElement("h3",{className:"neu-hackney-campaign-headline"},i),wp.element.createElement("p",{className:"neu-hackney-campaign-details"},r))}})},function(e,t){},function(e,t){},function(e,t,a){"use strict";var n=a(0),r=a(11),i=(a.n(r),a(12)),l=(a.n(i),wp.i18n.__),o=wp.blocks.registerBlockType,c=wp.editor.MediaUpload,s=wp.components,m=s.Button,u=s.BaseControl,d=s.TextControl,p=(s.SelectControl,window.location.href.split("/wp-admin")[0]),h=p+"/wp-content/plugins/neu-hackney/assets/img/team-member.png",g=!1,f="",b=Object(n.a)();o("neu-hackney/team-member",{title:l("NEU Hackney - Team Member Block"),icon:"shield",category:"common",keywords:[l("neu-hackney-team-member \u2014 CGB Block"),l("CGB Example"),l("create-guten-block")],attributes:{mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:".neu-hackney-team-member-photo",attribute:"data-src"},__mediaURL:{type:"string",source:"meta",meta:"neuhack_image_url"},email:{type:"array",source:"children",selector:"a"},__email:{type:"string",source:"meta",meta:"neuhack_team_member_email"},selectedPosition:{type:"string",source:"meta",meta:"neuhack_team_member_position"},positionName:{type:"string"}},edit:function(e){var t=e.className,a=e.setAttributes,r=e.attributes,i=r.mediaID,l=r.mediaURL,o=r.email,s=(r.selectedPosition,function(e){a({mediaID:e.id,mediaURL:e.url,__mediaURL:e.url})}),p=function(e){a({email:e,__email:e})},h=function(e){var t=e.src;return wp.element.createElement("div",{className:"neu-hackney-team-member-photo",style:{backgroundImage:"url("+t+")"}})};g||(wp.data.dispatch("core/notices").createNotice("info","Make sure to select the team member's position(s) and the page(s) to show them on from the Document settings on the right hand side",{isDismissible:!0,actions:[]}),g=!0);var w=function(){var e=document.querySelector("#emailInput").value;return f?!e||Object(n.emailIsInvalid)(e)?Object(n.failValidation)("Please enter a valid email address for this team member"):Object(n.passValidation)():Object(n.failValidation)("Please enter a name")},y=function(e){f=e.value,b(w)};return window.addEventListener("load",function(){var e=document.querySelector(".editor-post-title__input");e.placeholder="Name",e.addEventListener("input",function(){return y(e)})}),b(w),wp.element.createElement("section",{className:t},wp.element.createElement(d,{label:"Email",placeholder:"someone@neu.org.uk",value:o,onChange:p,id:"emailInput"}),wp.element.createElement(u,{label:"Add a photo for the team member (if no photo is selected, a placeholder will be used)",id:"flyer-upload"},wp.element.createElement(c,{onSelect:s,allowedTypes:"image",value:i,id:"flyer-upload",render:function(e){var t=e.open;return wp.element.createElement(m,{className:i?"image-button":"button button-large",onClick:t},i?wp.element.createElement(h,{src:l}):"Select Photo")}})))},save:function(e){var t=e.className,a=e.attributes,n=a.mediaURL,r=a.positionName,i=a.email,l=function(e){var t=e.src;return wp.element.createElement("div",{className:"neu-hackney-team-member-photo","data-src":t,style:{backgroundImage:"url("+t+")"}})};return wp.element.createElement("article",{className:t},wp.element.createElement(l,{src:n||h,"data-src":n}),wp.element.createElement("h4",null,r),wp.element.createElement("a",{href:"mailto:"+i},i))}})},function(e,t){},function(e,t){},function(e,t,a){"use strict";var n=a(0),r=a(14),i=(a.n(r),a(15)),l=(a.n(i),wp.i18n.__),o=wp.blocks.registerBlockType,c=wp.editor.MediaUpload,s=wp.components,m=s.Button,u=s.BaseControl,d=s.TextControl,p=s.RadioControl,h=!1,g=Object(n.a)(),f="";o("neu-hackney/useful-resource",{title:l("NEU Hackney - Useful Resource Block"),icon:"sos",category:"common",keywords:[l("neu-hackney-useful-resource \u2014 CGB Block"),l("CGB Example"),l("create-guten-block")],attributes:{resourceDetails:{type:"array",source:"children",selector:"a"},__resourceDetails:{type:"string",source:"meta",meta:"neuhack_details"},resourceFileID:{type:"number"},resourceFileURL:{type:"string",source:"attribute",selector:"a",attribute:"href"},__resourceFileURL:{type:"string",source:"meta",meta:"neuhack_resource_file"},resourceLink:{type:"string",source:"attribute",selector:"a",attribute:"href"},__resourceLink:{type:"string",source:"meta",meta:"neuhack_resource_url"},resourceIsExternal:{type:"number"},__resourceIsExternal:{type:"number",source:"meta",meta:"neuhack_resource_is_external"}},edit:function(e){var t=e.className,a=e.setAttributes,r=e.attributes,i=r.__resourceIsExternal,l=r.resourceDetails,o=r.resourceFileID,s=r.resourceLink,b=function(e){a({resourceFileID:e.id,resourceFileURL:e.url,__resourceFileURL:e.url})},w=function(e){a({resourceLink:e,__resourceLink:e})},y=function(e){var t=Number(e);a({resourceIsExternal:t,__resourceIsExternal:t})},_=function(e){a({resourceDetails:e,__resourceDetails:e})};h||(wp.data.dispatch("core/notices").createNotice("info","Don't forget to use Settings -> Document -> Show On Page(s) to select where this resource should be displayed.",{isDismissible:!0,actions:[]}),h=!0);var v=function(){return console.log("link attribute: ",s),f?i||o?i&&!s?Object(n.failValidation)("Please enter a link for this resource"):l?Object(n.passValidation)():Object(n.failValidation)("Please enter a description of the resource"):Object(n.failValidation)("Please upload a file for this resource"):Object(n.failValidation)("Please enter a title for this resource")},k=function(e){f=e.value,g(v)};return window.addEventListener("load",function(){var e=document.querySelector(".editor-post-title__input");e.addEventListener("input",function(){return k(e)})}),g(v),wp.element.createElement("section",{className:t},wp.element.createElement(p,{label:"Select resource type",selected:i,onChange:y,options:[{label:"File Upload",value:0},{label:"External link URL",value:1}]}),i?wp.element.createElement(d,{label:"URL (including https:// or http://)",placeholder:"https://anotherwebsite.com",value:s,onChange:w}):wp.element.createElement(u,{label:"Upload a resource (accepts images, PDFs, word documents, powerpoint, excel, zip files and mp3 audio)",id:"flyer-upload"},wp.element.createElement(c,{onSelect:b,allowedTypes:"image/*,.pdf,application/pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.ppt,.pptx,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.zip,application/zip,.mp3,audio/mpeg",value:o,id:"media-upload",render:function(e){var t=e.open;return wp.element.createElement(m,{className:"button button-large",onClick:t},o?"File Uploaded - click to choose again":"Upload file")}})),wp.element.createElement(d,{label:"Description",placeholder:"A short description of the file or resource",value:l,onChange:_}))},save:function(e){var t=e.className,a=e.attributes,n=a.resourceIsExternal,r=a.resourceFileURL,i=a.resourceLink,l=a.resourceDetails;return wp.element.createElement("li",{className:t},wp.element.createElement("a",{href:n?i:r},l))}})},function(e,t){},function(e,t){},function(e,t,a){"use strict";var n=a(0),r=a(17),i=(a.n(r),a(18)),l=(a.n(i),wp.i18n.__),o=wp.blocks.registerBlockType,c=wp.editor.MediaUpload,s=wp.components,m=s.Button,u=s.BaseControl,d=s.TextControl,p=Object(n.a)();o("neu-hackney/gallery",{title:l("NEU Hackney - Gallery Photo Block"),icon:"shield",category:"common",keywords:[l("neu-hackney-gallery \u2014 CGB Block"),l("CGB Example"),l("create-guten-block")],attributes:{mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:"img",attribute:"src"},__mediaURL:{type:"string",source:"meta",meta:"neuhack_image_url"},alt:{type:"string",source:"attribute",selector:"img",attribute:"alt"},__alt:{type:"string",source:"meta",meta:"neuhack_image_alt"}},edit:function(e){var t=e.className,a=e.setAttributes,r=e.attributes,i=r.mediaID,l=r.mediaURL,o=r.__alt,s=function(e){a({mediaID:e.id,mediaURL:e.url,__mediaURL:e.url})},h=function(e){a({alt:e,__alt:e})};return p(function(){return i?o?Object(n.passValidation)():Object(n.failValidation)("Please add a short description of the image for screen readers"):Object(n.failValidation)("An image is required, please upload an image.")}),wp.element.createElement("section",{className:t},wp.element.createElement(u,{label:"Add a photo for the gallery",id:"flyer-upload"},wp.element.createElement(c,{onSelect:s,allowedTypes:"image",value:i,id:"flyer-upload",render:function(e){var t=e.open;return wp.element.createElement(m,{className:i?"image-button":"button button-large",onClick:t},i?wp.element.createElement("img",{src:l,alt:""}):"Upload image")}})),wp.element.createElement(d,{label:"Short Description",placeholder:"A short description of the image to be read out by screen readers",value:o,onChange:h}))},save:function(e){var t=e.className,a=e.attributes,n=a.mediaURL,r=a.alt;return wp.element.createElement("article",{className:t},wp.element.createElement("img",{src:n,alt:r}))}})},function(e,t){},function(e,t){}]);