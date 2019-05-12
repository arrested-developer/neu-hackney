!function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var a={};t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,a){"use strict";var n=function(e){return e.filter(function(e){return"string"===typeof e}).join("<br>")};t.a=n},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a(2),a(5),a(6),a(9),a(12)},function(e,t,a){"use strict";var n=a(3),r=(a.n(n),a(4)),l=(a.n(r),wp.i18n.__),i=wp.blocks.registerBlockType,o=wp.editor.MediaUpload,c=wp.components,s=c.Button,m=c.BaseControl,u=(c.Notice,!1);i("neu-hackney/newsletter",{title:l("NEU Hackney - Newsletter Block"),icon:"shield",category:"common",keywords:[l("neu-hackney-newsletter \u2014 CGB Block"),l("CGB Example"),l("create-guten-block")],attributes:{newsletterID:{type:"number"},newsletterURL:{type:"string",source:"attribute",selector:"embed",attribute:"src"},__newsletterURL:{type:"string",source:"meta",meta:"neuhack_attachment_url"}},edit:function(e){var t=e.attributes,a=t.newsletterID,n=t.newsletterURL,r=e.className,l=e.setAttributes,i=function(e){l({newsletterID:e.id,newsletterURL:e.url,__newsletterURL:e.url})};return u||(wp.data.dispatch("core/notices").createNotice("warning",'Newsletter will be published with the current month and year. To publish with a different date, change the publish settings from "Immediately" to your chosen date in the "Status & Visibility" options at the top right of the screen. There is no need to add a title, as this will be set using the selected date',{isDismissible:!0,actions:[]}),u=!0),wp.element.createElement("div",{className:r},wp.element.createElement(m,{label:a?null:"Upload NEU Hackney Newsletter in pdf format",id:"newsletter-upload"},wp.element.createElement(o,{onSelect:i,allowedTypes:"application/pdf",value:a,id:"newsletter-upload",render:function(e){var t=e.open;return wp.element.createElement("div",{style:{width:"100%"}},a&&wp.element.createElement("embed",{src:n,type:"application/pdf",width:"100%",height:"600px"}),wp.element.createElement(s,{className:"button button-large",onClick:t},a?"Choose another file":"Upload newsletter"))}})))},save:function(e){var t=e.className,a=e.attributes.newsletterURL;return wp.element.createElement("div",{className:t},wp.element.createElement("embed",{src:a,type:"application/pdf",width:"100%",height:"600px"}))}})},function(e,t){},function(e,t){},function(e,t,a){"use strict";var n=a(0),r=wp.blocks.registerBlockType,l=wp.editor,i=l.MediaUpload,o=l.RichText,c=wp.components,s=c.Button,m=c.TextareaControl,u=c.BaseControl,p=c.TimePicker,d=c.RadioControl,h=!1;r("neu-hackney/event",{title:"Event Details",icon:"format-image",category:"common",attributes:{mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:"img",attribute:"src"},__mediaURL:{type:"string",source:"meta",meta:"neuhack_image_url"},imageAlt:{type:"string",source:"attribute",selector:"img",attribute:"alt"},__imageAlt:{type:"string",source:"meta",meta:"neuhack_image_alt"},__dateTime:{type:"string",source:"meta",meta:"neuhack_date_time"},date:{type:"array",source:"children",selector:".neuhack-event-date"},time:{type:"array",source:"children",selector:".neuhack-event-time"},eventDetails:{type:"array",source:"children",selector:".neuhack-event-details"},__eventDetails:{type:"string",source:"meta",meta:"neuhack_details"},eventIsGeneralMeeting:{type:"number"},__eventIsGeneralMeeting:{type:"number",source:"meta",meta:"neuhack_event_is_general_meeting"},agendaID:{type:"number"},agendaURL:{type:"string",source:"attribute",selector:"a",attribute:"href"},__agendaURL:{type:"string",source:"meta",meta:"neuhack_attachment_url"}},edit:function(e){var t=e.className,a=e.attributes,r=a.mediaID,l=a.mediaURL,c=a.imageAlt,g=a.__eventIsGeneralMeeting,w=a.__dateTime,b=a.eventDetails,f=a.agendaID,y=a.__agendaURL,_=e.setAttributes,v=function(e){_({mediaID:e.id,mediaURL:e.url,__mediaURL:e.url})},k=function(e){_({imageAlt:e,__imageAlt:e})},E=function(e){var t=new Date(e),a=t.toLocaleDateString("en-GB",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),n=t.toLocaleTimeString("en-GB",{hour12:!0,hour:"numeric",minute:"2-digit"});_({__dateTime:e,date:a,time:n})},U=function(e){_({eventDetails:e,__eventDetails:Object(n.a)(e)})},N=function(e){var t=Number(e);_({eventIsGeneralMeeting:t,__eventIsGeneralMeeting:t})},D=function(e){_({agendaID:e.id,agendaURL:e.url,__agendaURL:e.url})};return h||(wp.data.dispatch("core/notices").createNotice("warning","Please make sure that all text information contained in the flyer is added either in the image alt text field to be read out by screen readers, or in the event details field where it can be read by all users.",{isDismissible:!0,actions:[]}),h=!0),wp.element.createElement("section",{className:t},wp.element.createElement(u,{label:"Add a flyer for the event, which can include the event details.",id:"flyer-upload"},wp.element.createElement(i,{onSelect:v,allowedTypes:"image",value:r,id:"flyer-upload",render:function(e){var t=e.open;return wp.element.createElement(s,{className:r?"image-button":"button button-large",onClick:t},r?wp.element.createElement("img",{src:l,alt:"Event Flyer"}):"Upload image")}})),wp.element.createElement(m,{label:"Flyer Alt Text",placeholder:"Describe the important details from the flyer for those who cannot see the image. This will be read out for visually impaired users.",value:c,onChange:k}),wp.element.createElement(u,{label:"Enter date and time for the event, using 24 hour time (e.g. 18:00)",id:"date-time"},wp.element.createElement(p,{id:"date-time",currentTime:w,onChange:E})),wp.element.createElement(u,{label:"Event Details",id:"event-details"},wp.element.createElement(o,{tagName:"div",format:"string",id:"event-details",placeholder:"Enter the key event details, e.g. location",value:b,onChange:U,style:{marginTop:"1rem",marginBottom:"1rem"}})),wp.element.createElement(d,{label:"Select event type",selected:g,onChange:N,options:[{label:"Other",value:0},{label:"General Meeting",value:1}]}),g?wp.element.createElement(u,{label:"Upload a full flyer with agenda and previous meeting's minutes, as a pdf",id:"agenda-upload"},wp.element.createElement(i,{onSelect:D,allowedTypes:"application/pdf",value:f,id:"agenda-upload",render:function(e){var t=e.open;return wp.element.createElement("div",{style:{width:"100%"}},f&&wp.element.createElement("embed",{src:y,type:"application/pdf",width:"100%",height:"600px"}),wp.element.createElement(s,{className:"button button-large",onClick:t},f?"Choose again":"Upload agenda"))}})):null)},save:function(e){var t=e.className,a=e.attributes,n=a.mediaURL,r=a.imageAlt,l=a.date,i=a.time,o=a.eventDetails,c=a.eventIsGeneralMeeting,s=a.agendaURL;return wp.element.createElement("article",{className:t},wp.element.createElement("img",{src:n,alt:r}),wp.element.createElement("p",{className:"neuhack-event-date-time"},wp.element.createElement("div",{className:"neuhack-event-date"},l),wp.element.createElement("div",{className:"neuhack-event-time"},i)),wp.element.createElement("p",{className:"neuhack-event-details"},o),c?wp.element.createElement("p",{className:"neuhack-agenda-link"},wp.element.createElement("a",{href:s},"View Agenda")):null)}})},function(e,t,a){"use strict";var n=a(0),r=a(7),l=(a.n(r),a(8)),i=(a.n(l),wp.i18n.__),o=wp.blocks.registerBlockType,c=wp.editor,s=c.MediaUpload,m=c.RichText,u=wp.components,p=u.Button,d=u.BaseControl,h=u.TextControl;o("neu-hackney/campaign",{title:i("NEU Hackney - Campaign Block"),icon:"shield",category:"common",keywords:[i("neu-hackney-campaign \u2014 CGB Block"),i("CGB Example"),i("create-guten-block")],attributes:{mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:"img",attribute:"src"},__mediaURL:{type:"string",source:"meta",meta:"neuhack_image_url"},campaignDetails:{type:"array",source:"children",selector:".neu-hackney-campaign-details"},__campaignDetails:{type:"string",source:"meta",meta:"neuhack_details"},headline:{type:"array",source:"children",selector:".neu-hackney-campaign-headline"},__headline:{type:"string",source:"meta",meta:"neuhack_headline"}},edit:function(e){var t=e.className,a=e.setAttributes,r=e.attributes,l=r.mediaID,i=r.mediaURL,o=r.campaignDetails,c=r.headline,u=function(e){a({mediaID:e.id,mediaURL:e.url,__mediaURL:e.url})},g=function(e){a({campaignDetails:e,__campaignDetails:Object(n.a)(e)})},w=function(e){a({headline:e,__headline:e})};return wp.element.createElement("section",{className:t},wp.element.createElement(d,{label:"Add a photo for the campaign",id:"flyer-upload"},wp.element.createElement(s,{onSelect:u,allowedTypes:"image",value:l,id:"flyer-upload",render:function(e){var t=e.open;return wp.element.createElement(p,{className:l?"image-button":"button button-large",onClick:t},l?wp.element.createElement("img",{src:i,alt:""}):"Upload image")}})),wp.element.createElement(h,{label:"Short Description",placeholder:"A short headline description of the campaign",value:c,onChange:w}),wp.element.createElement(d,{label:"Campaign Details",id:"campaign-details"},wp.element.createElement(m,{tagName:"div",multiline:"br",id:"event-details",placeholder:"Enter the key event details, e.g. location",value:o,onChange:g,style:{marginTop:"1rem",marginBottom:"1rem"}})))},save:function(e){var t=e.className,a=e.attributes,n=a.mediaURL,r=a.campaignDetails,l=a.headline;return wp.element.createElement("article",{className:t},wp.element.createElement("img",{src:n,alt:""}),wp.element.createElement("h3",{className:"neu-hackney-campaign-headline"},l),wp.element.createElement("p",{className:"neu-hackney-campaign-details"},r))}})},function(e,t){},function(e,t){},function(e,t,a){"use strict";var n=a(10),r=(a.n(n),a(11)),l=(a.n(r),wp.i18n.__),i=wp.blocks.registerBlockType,o=wp.editor.MediaUpload,c=wp.components,s=c.Button,m=c.BaseControl,u=c.TextControl,p=(c.SelectControl,window.location.href.split("/wp-admin")[0]),d=p+"/wp-content/plugins/neu-hackney/assets/img/team-member.png",h=!1;i("neu-hackney/team-member",{title:l("NEU Hackney - Team Member Block"),icon:"shield",category:"common",keywords:[l("neu-hackney-team-member \u2014 CGB Block"),l("CGB Example"),l("create-guten-block")],attributes:{mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:".neu-hackney-team-member-photo",attribute:"data-src"},__mediaURL:{type:"string",source:"meta",meta:"neuhack_image_url"},email:{type:"array",source:"children",selector:"a"},__email:{type:"string",source:"meta",meta:"neuhack_team_member_email"},selectedPosition:{type:"string",source:"meta",meta:"neuhack_team_member_position"},positionName:{type:"string"}},edit:function(e){var t=e.className,a=e.setAttributes,n=e.attributes,r=n.mediaID,l=n.mediaURL,i=n.email;n.selectedPosition;window.addEventListener("load",function(){document.querySelector(".editor-post-title__input").placeholder="Name"});var c=function(e){a({mediaID:e.id,mediaURL:e.url,__mediaURL:e.url})},p=function(e){a({email:e,__email:e})},d=function(e){var t=e.src;return wp.element.createElement("div",{className:"neu-hackney-team-member-photo",style:{backgroundImage:"url("+t+")"}})};return h||(wp.data.dispatch("core/notices").createNotice("warning","Make sure to select the team member's position(s) and the page(s) to show them on from the Document settings on the right hand side",{isDismissible:!0,actions:[]}),h=!0),wp.element.createElement("section",{className:t},wp.element.createElement(u,{label:"Email",placeholder:"someone@neu.org.uk",value:i,onChange:p}),wp.element.createElement(m,{label:"Add a photo for the team member (if no photo is selected, a placeholder will be used)",id:"flyer-upload"},wp.element.createElement(o,{onSelect:c,allowedTypes:"image",value:r,id:"flyer-upload",render:function(e){var t=e.open;return wp.element.createElement(s,{className:r?"image-button":"button button-large",onClick:t},r?wp.element.createElement(d,{src:l}):"Select Photo")}})))},save:function(e){var t=e.className,a=e.attributes,n=a.mediaURL,r=a.positionName,l=a.email,i=function(e){var t=e.src;return wp.element.createElement("div",{className:"neu-hackney-team-member-photo","data-src":t,style:{backgroundImage:"url("+t+")"}})};return wp.element.createElement("article",{className:t},wp.element.createElement(i,{src:n||d,"data-src":n}),wp.element.createElement("h4",null,r),wp.element.createElement("a",{href:"mailto:"+l},l))}})},function(e,t){},function(e,t){},function(e,t,a){"use strict";var n=a(13),r=(a.n(n),a(14)),l=(a.n(r),wp.i18n.__),i=wp.blocks.registerBlockType,o=wp.editor.MediaUpload,c=wp.components,s=c.Button,m=c.BaseControl,u=c.TextControl,p=c.RadioControl,d=!1;i("neu-hackney/useful-resource",{title:l("NEU Hackney - Useful Resource Block"),icon:"sos",category:"common",keywords:[l("neu-hackney-useful-resource \u2014 CGB Block"),l("CGB Example"),l("create-guten-block")],attributes:{resourceDetails:{type:"array",source:"children",selector:"a"},__resourceDetails:{type:"string",source:"meta",meta:"neuhack_details"},resourceFileID:{type:"number"},resourceFileURL:{type:"string",source:"attribute",selector:"a",attribute:"href"},__resourceFileURL:{type:"string",source:"meta",meta:"neuhack_resource_file"},resourceLink:{type:"string",source:"attribute",selector:"a",attribute:"href"},__resourceLink:{type:"string",source:"meta",meta:"neuhack_resource_url"},resourceIsExternal:{type:"number"},__resourceIsExternal:{type:"number",source:"meta",meta:"neuhack_resource_is_external"}},edit:function(e){var t=e.className,a=e.setAttributes,n=e.attributes,r=n.__resourceIsExternal,l=n.resourceDetails,i=n.resourceID,c=n.resourceLink,h=function(e){a({resourceFileID:e.id,resourceFileURL:e.url,__resourceFileURL:e.url})},g=function(e){a({resourceLink:e,__resourceLink:e})},w=function(e){var t=Number(e);a({resourceIsExternal:t,__resourceIsExternal:t})},b=function(e){a({resourceDetails:e,__resourceDetails:e})};return d||(wp.data.dispatch("core/notices").createNotice("info","Don't forget to use Settings -> Document -> Show On Page(s) to select where this resource should be displayed.",{isDismissible:!0,actions:[]}),d=!0),wp.element.createElement("section",{className:t},wp.element.createElement(p,{label:"Select resource type",selected:r,onChange:w,options:[{label:"File Upload",value:0},{label:"External link URL",value:1}]}),r?wp.element.createElement(u,{label:"URL (including https:// or http://)",placeholder:"https://anotherwebsite.com",value:c,onChange:g}):wp.element.createElement(m,{label:"Upload a resource (accepts images, PDFs, word documents, powerpoint, excel, zip files and mp3 audio)",id:"flyer-upload"},wp.element.createElement(o,{onSelect:h,allowedTypes:"image/*,.pdf,application/pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.ppt,.pptx,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.zip,application/zip,.mp3,audio/mpeg",value:i,id:"media-upload",render:function(e){var t=e.open;return wp.element.createElement(s,{className:"button button-large",onClick:t},i?"File Uploaded - click to choose again":"Upload file")}})),wp.element.createElement(u,{label:"Description",placeholder:"A short description of the file or resource",value:l,onChange:b}))},save:function(e){var t=e.className,a=e.attributes,n=a.resourceIsExternal,r=a.resourceFileURL,l=a.resourceLink,i=a.resourceDetails;return wp.element.createElement("li",{className:t},wp.element.createElement("a",{href:n?l:r},i))}})},function(e,t){},function(e,t){}]);