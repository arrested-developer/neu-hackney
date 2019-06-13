!function(e){function t(a){if(n[a])return n[a].exports;var l=n[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";t.a=function(){var e=!1,t=function(){return null},n=function(){if(e){wp.data.dispatch("core/notices").removeNotice("LOCK_NOTICE");var n=t();n.isValid?wp.data.dispatch("core/editor").unlockPostSaving("my_lock_key"):(wp.data.dispatch("core/editor").lockPostSaving("my_lock_key"),wp.data.dispatch("core/notices").createInfoNotice(n.message,{id:"LOCK_NOTICE",isDismissible:!0}))}else e=!0},a=function(e){return t=e},l=function(e){return{isValid:!1,message:e}},r=function(){return{isValid:!0}},i={},o=function(e){return i[e]},c=function(e,t){i[e]=t},s=function(e,t){c(e,t),n()},m=function(){return i},u=function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)};return{run:n,use:a,fail:l,pass:r,emailIsValid:u,emailIsInvalid:function(e){return!u(e)},get:o,set:c,check:s,getAll:m}}},function(e,t,n){"use strict";var a=function(e){return e.filter(function(e){return"string"===typeof e}).join("<br>")};t.a=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(3),n(6),n(7),n(10),n(13),n(16),n(19)},function(e,t,n){"use strict";var a=n(0),l=n(4),r=(n.n(l),n(5)),i=(n.n(r),wp.i18n.__),o=wp.blocks.registerBlockType,c=wp.editor.MediaUpload,s=wp.components,m=s.Button,u=s.BaseControl,d=!1,p=Object(a.a)();p.use(function(){return console.log("validating"),p.get("newsletter")?p.pass():p.fail("A newsletter is required, please upload a file in pdf format")}),o("neu-hackney/newsletter",{title:i("NEU Hackney - Newsletter Block"),icon:"shield",category:"common",keywords:[i("neu-hackney-newsletter \u2014 CGB Block"),i("CGB Example"),i("create-guten-block")],attributes:{newsletterID:{type:"number"},newsletterURL:{type:"string",source:"attribute",selector:"embed",attribute:"src"},__newsletterURL:{type:"string",source:"meta",meta:"neuhack_attachment_url"}},edit:function(e){var t=e.attributes,n=t.newsletterID,a=t.newsletterURL,l=e.className,r=e.setAttributes;window.addEventListener("load",function(){document.querySelector(".editor-post-title__input").style.display="none",p.set("newsletter",n)});var i=function(e){r({newsletterID:e.id,newsletterURL:e.url,__newsletterURL:e.url}),p.check("newsletter",e.id)};return d||(wp.data.dispatch("core/notices").createNotice("info",'Newsletter will be published with the current month and year. To publish with a different date, change the publish settings from "Immediately" to your chosen date in the "Status & Visibility" options at the top right of the screen.',{isDismissible:!0,actions:[]}),d=!0),wp.element.createElement("div",{className:l},wp.element.createElement(u,{label:n?null:"Upload NEU Hackney Newsletter in pdf format",id:"newsletter-upload"},wp.element.createElement(c,{onSelect:i,allowedTypes:"application/pdf",value:n,id:"newsletter-upload",render:function(e){var t=e.open;return wp.element.createElement("div",{style:{width:"100%"}},n&&wp.element.createElement("embed",{src:a,type:"application/pdf",width:"100%",height:"600px"}),wp.element.createElement(m,{className:"button button-large",onClick:t},n?"Choose another file":"Upload newsletter"))}})))},save:function(e){var t=e.className,n=e.attributes.newsletterURL;return wp.element.createElement("div",{className:t},wp.element.createElement("embed",{src:n,type:"application/pdf",width:"100%",height:"600px"}))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var a=n(1),l=n(0),r=wp.blocks.registerBlockType,i=wp.editor,o=i.MediaUpload,c=i.RichText,s=wp.components,m=s.Button,u=s.TextareaControl,d=s.BaseControl,p=s.TimePicker,h=s.RadioControl,g=Object(l.a)();g.use(function(){var e=g.getAll(),t=e.title,n=e.image,a=e.alt,l=e.isGeneralMeeting,r=e.agenda;return t?n?a?l&&!r?g.fail("General meetings require an agenda, please upload a pdf file"):g.pass():g.fail("Please enter alt text to describe the image for screen readers"):g.fail("Please upload a flyer for the event"):g.fail("Please enter a title for the event")});var f=!1;r("neu-hackney/event",{title:"Event Details",icon:"format-image",category:"common",attributes:{mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:"img",attribute:"src"},__mediaURL:{type:"string",source:"meta",meta:"neuhack_image_url"},imageAlt:{type:"string",source:"attribute",selector:"img",attribute:"alt"},__imageAlt:{type:"string",source:"meta",meta:"neuhack_image_alt"},__dateTime:{type:"string",source:"meta",meta:"neuhack_date_time"},date:{type:"array",source:"children",selector:".neuhack-event-date"},time:{type:"array",source:"children",selector:".neuhack-event-time"},eventDetails:{type:"array",source:"children",selector:".neuhack-event-details"},__eventDetails:{type:"string",source:"meta",meta:"neuhack_details"},eventIsGeneralMeeting:{type:"number"},__eventIsGeneralMeeting:{type:"number",source:"meta",meta:"neuhack_event_is_general_meeting"},agendaID:{type:"number"},agendaURL:{type:"string",source:"attribute",selector:"a",attribute:"href"},__agendaURL:{type:"string",source:"meta",meta:"neuhack_attachment_url"}},edit:function(e){var t=e.className,n=e.attributes,l=n.mediaID,r=n.mediaURL,i=n.imageAlt,s=n.__eventIsGeneralMeeting,w=n.__dateTime,_=n.eventDetails,y=n.agendaID,b=n.__agendaURL,v=e.setAttributes;window.addEventListener("load",function(){var e=document.querySelector(".editor-post-title__input");g.set("title",e.value),g.set("image",l),g.set("alt",i),g.set("isGeneralMeeting",s),g.set("agenda",y),e.addEventListener("input",function(){g.check("title",e.value)})});var k=function(e){v({mediaID:e.id,mediaURL:e.url,__mediaURL:e.url}),g.check("image",e.id)},E=function(e){v({imageAlt:e,__imageAlt:e}),g.check("alt",e)},U=function(e){var t=new Date(e),n=t.toLocaleDateString("en-GB",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),a=t.toLocaleTimeString("en-GB",{hour12:!0,hour:"numeric",minute:"2-digit"});v({__dateTime:e,date:n,time:a})},L=function(e){v({eventDetails:e,__eventDetails:Object(a.a)(e)})},C=function(e){var t=Number(e);v({eventIsGeneralMeeting:t,__eventIsGeneralMeeting:t}),g.check("isGeneralMeeting",t)},N=function(e){v({agendaID:e.id,agendaURL:e.url,__agendaURL:e.url}),g.check("agenda",e.id)};return f||(wp.data.dispatch("core/notices").createNotice("warning","For accessibility, please make sure that all text information contained in the flyer is added either in the image alt text field to be read out by screen readers, or in the event details field where it can be read by all users.",{isDismissible:!0,actions:[]}),f=!0),wp.element.createElement("section",{className:t},wp.element.createElement(d,{label:"Add a flyer for the event, which can include the event details.",id:"flyer-upload"},wp.element.createElement(o,{onSelect:k,allowedTypes:"image",value:l,id:"flyer-upload",render:function(e){var t=e.open;return wp.element.createElement(m,{className:l?"image-button":"button button-large",onClick:t},l?wp.element.createElement("img",{src:r,alt:"Event Flyer"}):"Upload image")}})),wp.element.createElement(u,{label:"Flyer Alt Text",placeholder:"Describe the important details from the flyer for those who cannot see the image. This will be read out for visually impaired users.",value:i,onChange:E}),wp.element.createElement(d,{label:"Enter date and time for the event, using 24 hour time (e.g. 18:00)",id:"date-time"},wp.element.createElement(p,{id:"date-time",currentTime:w,onChange:U})),wp.element.createElement(d,{label:"Event Details (optional)",id:"event-details"},wp.element.createElement(c,{tagName:"div",format:"string",id:"event-details",placeholder:"Enter the key event details, e.g. location",value:_,onChange:L,style:{marginTop:"1rem",marginBottom:"1rem"}})),wp.element.createElement(h,{label:"Select event type",selected:s,onChange:C,options:[{label:"Other",value:0},{label:"General Meeting",value:1}]}),s?wp.element.createElement(d,{label:"Upload a full flyer with agenda and previous meeting's minutes, as a pdf",id:"agenda-upload"},wp.element.createElement(o,{onSelect:N,allowedTypes:"application/pdf",value:y,id:"agenda-upload",render:function(e){var t=e.open;return wp.element.createElement("div",{style:{width:"100%"}},y&&wp.element.createElement("embed",{src:b,type:"application/pdf",width:"100%",height:"600px"}),wp.element.createElement(m,{className:"button button-large",onClick:t},y?"Choose again":"Upload agenda"))}})):null)},save:function(e){var t=e.className,n=e.attributes,a=n.mediaURL,l=n.imageAlt,r=n.date,i=n.time,o=n.eventDetails,c=n.eventIsGeneralMeeting,s=n.agendaURL;return wp.element.createElement("article",{className:t},wp.element.createElement("img",{src:a,alt:l}),wp.element.createElement("p",{className:"neuhack-event-date-time"},wp.element.createElement("div",{className:"neuhack-event-date"},r),wp.element.createElement("div",{className:"neuhack-event-time"},i)),wp.element.createElement("p",{className:"neuhack-event-details"},o),c?wp.element.createElement("p",{className:"neuhack-agenda-link"},wp.element.createElement("a",{href:s},"View Agenda")):null)}})},function(e,t,n){"use strict";var a=n(1),l=n(8),r=(n.n(l),n(9)),i=(n.n(r),n(0)),o=wp.i18n.__,c=wp.blocks.registerBlockType,s=wp.editor,m=s.MediaUpload,u=s.RichText,d=wp.components,p=d.Button,h=d.BaseControl,g=d.TextControl,f=Object(i.a)();f.use(function(){console.log("validating");var e=f.getAll(),t=e.image,n=e.headline,a=e.details;return e.title?t?n?a?f.pass():f.fail("Please enter the campaign details"):f.fail("Please enter a short description"):f.fail("Please upload an image"):f.fail("Please enter a title")}),c("neu-hackney/campaign",{title:o("NEU Hackney - Campaign Block"),icon:"shield",category:"common",keywords:[o("neu-hackney-campaign \u2014 CGB Block"),o("CGB Example"),o("create-guten-block")],attributes:{mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:"img",attribute:"src"},__mediaURL:{type:"string",source:"meta",meta:"neuhack_image_url"},campaignDetails:{type:"array",source:"children",selector:".wp-block-neu-hackney-campaign"},__campaignDetails:{type:"string",source:"meta",meta:"neuhack_details"},headline:{type:"array",source:"children",selector:".neu-hackney-campaign-headline"},__headline:{type:"string",source:"meta",meta:"neuhack_headline"}},edit:function(e){var t=e.className,n=e.setAttributes,l=e.attributes,r=l.mediaID,i=l.__mediaURL,o=l.__campaignDetails,c=l.__headline;window.addEventListener("load",function(){f.set("image",r),f.set("headline",c),f.set("details",o);var e=document.querySelector(".editor-post-title__input");f.set("title",e.value),e.addEventListener("input",function(){f.check("title",e.value)})});var s=function(e){n({mediaID:e.id,mediaURL:e.url,__mediaURL:e.url}),f.check("image",e.id)},d=function(e){n({campaignDetails:e,__campaignDetails:Object(a.a)(e)}),f.check("details",Object(a.a)(e))},w=function(e){n({headline:e,__headline:e}),f.check("headline",e)};return wp.element.createElement("section",{className:t},wp.element.createElement(h,{label:"Add a photo for the campaign",id:"flyer-upload"},wp.element.createElement(m,{onSelect:s,allowedTypes:"image",value:r,id:"flyer-upload",render:function(e){var t=e.open;return wp.element.createElement(p,{className:r?"image-button":"button button-large",onClick:t},r?wp.element.createElement("img",{src:i,alt:""}):"Upload image")}})),wp.element.createElement(g,{label:"Short Description",placeholder:"A short headline description of the campaign",value:c,onChange:w}),wp.element.createElement(h,{label:"Campaign Details",id:"campaign-details"},wp.element.createElement(u,{tagName:"div",multiline:"br",id:"event-details",placeholder:"Enter the key event details, e.g. location",value:o,onChange:d,style:{marginTop:"1rem",marginBottom:"1rem"}})))},save:function(e){var t=e.attributes.campaignDetails;return wp.element.createElement("p",null,t)}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var a=n(0),l=n(11),r=(n.n(l),n(12)),i=(n.n(r),wp.i18n.__),o=wp.blocks.registerBlockType,c=wp.editor.MediaUpload,s=wp.components,m=s.Button,u=s.BaseControl,d=s.TextControl,p=(s.SelectControl,window.location.href.split("/wp-admin")[0]),h=p+"/wp-content/plugins/neu-hackney/assets/img/team-member.png",g=!1,f=Object(a.a)();f.use(function(){var e=f.getAll(),t=e.name,n=e.email;return t?!n||f.emailIsInvalid(n)?f.fail("Please enter a valid email address for this team member"):f.pass():f.fail("Please enter a name")}),o("neu-hackney/team-member",{title:i("NEU Hackney - Team Member Block"),icon:"shield",category:"common",keywords:[i("neu-hackney-team-member \u2014 CGB Block"),i("CGB Example"),i("create-guten-block")],attributes:{mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:".neu-hackney-team-member-photo",attribute:"data-src"},__mediaURL:{type:"string",source:"meta",meta:"neuhack_image_url"},email:{type:"array",source:"children",selector:"a"},__email:{type:"string",source:"meta",meta:"neuhack_team_member_email"},selectedPosition:{type:"string",source:"meta",meta:"neuhack_team_member_position"},positionName:{type:"string"}},edit:function(e){var t=e.className,n=e.setAttributes,a=e.attributes,l=a.mediaID,r=a.mediaURL,i=a.email,o=(a.selectedPosition,function(e){n({mediaID:e.id,mediaURL:e.url,__mediaURL:e.url})}),s=function(e){n({email:e,__email:e}),f.check("email",e)},p=function(e){var t=e.src;return wp.element.createElement("div",{className:"neu-hackney-team-member-photo",style:{backgroundImage:"url("+t+")"}})};return g||(wp.data.dispatch("core/notices").createNotice("info","Make sure to select the team member's position(s) and the page(s) to show them on from the Document settings on the right hand side",{isDismissible:!0,actions:[]}),g=!0),window.addEventListener("load",function(){var e=document.querySelector(".editor-post-title__input");e.placeholder="Name",f.set("name",e.value),f.set("email",i),e.addEventListener("input",function(){return f.check("name",e.value)})}),wp.element.createElement("section",{className:t},wp.element.createElement(d,{label:"Email",placeholder:"someone@neu.org.uk",value:i,onChange:s,id:"emailInput"}),wp.element.createElement(u,{label:"Add a photo for the team member (if no photo is selected, a placeholder will be used)",id:"flyer-upload"},wp.element.createElement(c,{onSelect:o,allowedTypes:"image",value:l,id:"flyer-upload",render:function(e){var t=e.open;return wp.element.createElement(m,{className:l?"image-button":"button button-large",onClick:t},l?wp.element.createElement(p,{src:r}):"Select Photo")}})))},save:function(e){var t=e.className,n=e.attributes,a=n.mediaURL,l=n.positionName,r=n.email,i=function(e){var t=e.src;return wp.element.createElement("div",{className:"neu-hackney-team-member-photo","data-src":t,style:{backgroundImage:"url("+t+")"}})};return wp.element.createElement("article",{className:t},wp.element.createElement(i,{src:a||h,"data-src":a}),wp.element.createElement("h4",null,l),wp.element.createElement("a",{href:"mailto:"+r},r))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var a=n(0),l=n(14),r=(n.n(l),n(15)),i=(n.n(r),wp.i18n.__),o=wp.blocks.registerBlockType,c=wp.editor.MediaUpload,s=wp.components,m=s.Button,u=s.BaseControl,d=s.TextControl,p=s.RadioControl,h=!1,g=Object(a.a)();g.use(function(){var e=g.getAll(),t=e.title,n=e.resourceIsExternal,a=e.file,l=e.link,r=e.details;return t?n&&!l?g.fail("Please enter a link for this resource"):n||a?!r||Array.isArray(r)&&0===r.length?g.fail("Please enter a description of the resource"):g.pass():g.fail("Please upload a file for this resource"):g.fail("Please enter a title for this resource")}),o("neu-hackney/useful-resource",{title:i("NEU Hackney - Useful Resource Block"),icon:"sos",category:"common",keywords:[i("neu-hackney-useful-resource \u2014 CGB Block"),i("CGB Example"),i("create-guten-block")],attributes:{resourceDetails:{type:"array",source:"children",selector:"a"},__resourceDetails:{type:"string",source:"meta",meta:"neuhack_details"},resourceFileID:{type:"number"},resourceFileURL:{type:"string",source:"attribute",selector:"a",attribute:"href"},__resourceFileURL:{type:"string",source:"meta",meta:"neuhack_resource_file"},resourceLink:{type:"string",source:"attribute",selector:"a",attribute:"href"},__resourceLink:{type:"string",source:"meta",meta:"neuhack_resource_url"},resourceIsExternal:{type:"number"},__resourceIsExternal:{type:"number",source:"meta",meta:"neuhack_resource_is_external"}},edit:function(e){var t=e.className,n=e.setAttributes,a=e.attributes,l=a.__resourceIsExternal,r=a.resourceDetails,i=a.resourceFileID,o=a.resourceLink,s=function(e){n({resourceFileID:e.id,resourceFileURL:e.url,__resourceFileURL:e.url}),g.check("file",e.id)},f=function(e){n({resourceLink:e,__resourceLink:e}),g.check("link",e)},w=function(e){var t=Number(e);n({resourceIsExternal:t,__resourceIsExternal:t}),g.check("resourceIsExternal",t)},_=function(e){n({resourceDetails:e,__resourceDetails:e}),g.check("details",e)};return h||(wp.data.dispatch("core/notices").createNotice("info","Don't forget to use Settings -> Document -> Show On Page(s) to select where this resource should be displayed.",{isDismissible:!0,actions:[]}),h=!0),window.addEventListener("load",function(){var e=document.querySelector(".editor-post-title__input");g.set("title",e.value),g.set("link",o),g.set("file",i),g.set("resourceIsExternal",l),g.set("details",r),e.addEventListener("input",function(){return g.check("title",e.value)})}),wp.element.createElement("section",{className:t},wp.element.createElement(p,{label:"Select resource type",selected:l,onChange:w,options:[{label:"File Upload",value:0},{label:"External link URL",value:1}]}),l?wp.element.createElement(d,{label:"URL (including https:// or http://)",placeholder:"https://anotherwebsite.com",value:o,onChange:f}):wp.element.createElement(u,{label:"Upload a resource (accepts images, PDFs, word documents, powerpoint, excel, zip files and mp3 audio)",id:"flyer-upload"},wp.element.createElement(c,{onSelect:s,allowedTypes:"image/*,.pdf,application/pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.ppt,.pptx,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.zip,application/zip,.mp3,audio/mpeg",value:i,id:"media-upload",render:function(e){var t=e.open;return wp.element.createElement(m,{className:"button button-large",onClick:t},i?"File Uploaded - click to choose again":"Upload file")}})),wp.element.createElement(d,{label:"Description",placeholder:"A short description of the file or resource",value:r,onChange:_}))},save:function(e){var t=e.className,n=e.attributes,a=n.resourceIsExternal,l=n.resourceFileURL,r=n.resourceLink,i=n.resourceDetails;return wp.element.createElement("li",{className:t},wp.element.createElement("a",{href:a?r:l},i))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var a=n(0),l=n(17),r=(n.n(l),n(18)),i=(n.n(r),wp.i18n.__),o=wp.blocks.registerBlockType,c=wp.editor.MediaUpload,s=wp.components,m=s.Button,u=s.BaseControl,d=s.TextControl,p=Object(a.a)();p.use(function(){var e=p.getAll(),t=e.title,n=e.image,a=e.alt;return t?n?a?p.pass():p.fail("Please add a short description of the image for screen readers"):p.fail("An image is required, please upload an image."):p.fail("Please enter a title")}),o("neu-hackney/gallery",{title:i("NEU Hackney - Gallery Photo Block"),icon:"shield",category:"common",keywords:[i("neu-hackney-gallery \u2014 CGB Block"),i("CGB Example"),i("create-guten-block")],attributes:{mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:"img",attribute:"src"},__mediaURL:{type:"string",source:"meta",meta:"neuhack_image_url"},alt:{type:"string",source:"attribute",selector:"img",attribute:"alt"},__alt:{type:"string",source:"meta",meta:"neuhack_image_alt"}},edit:function(e){var t=e.className,n=e.setAttributes,a=e.attributes,l=a.mediaID,r=a.mediaURL,i=a.__alt;window.addEventListener("load",function(){p.set("image",l),p.set("alt",i);var e=document.querySelector(".editor-post-title__input");p.set("title",e.value),e.addEventListener("input",function(){p.check("title",e.value)})});var o=function(e){n({mediaID:e.id,mediaURL:e.url,__mediaURL:e.url}),p.check("image",e.id)},s=function(e){n({alt:e,__alt:e}),p.check("alt",e)};return wp.element.createElement("section",{className:t},wp.element.createElement(u,{label:"Add a photo for the gallery",id:"flyer-upload"},wp.element.createElement(c,{onSelect:o,allowedTypes:"image",value:l,id:"flyer-upload",render:function(e){var t=e.open;return wp.element.createElement(m,{className:l?"image-button":"button button-large",onClick:t},l?wp.element.createElement("img",{src:r,alt:""}):"Upload image")}})),wp.element.createElement(d,{label:"Short Description",placeholder:"A short description of the image to be read out by screen readers",value:i,onChange:s}))},save:function(e){var t=e.className,n=e.attributes,a=n.mediaURL,l=n.alt;return wp.element.createElement("article",{className:t},wp.element.createElement("img",{src:a,alt:l}))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var a=n(0),l=(n(1),n(20)),r=(n.n(l),n(21)),i=(n.n(r),wp.i18n.__),o=wp.blocks.registerBlockType,c=wp.editor,s=c.MediaUpload,m=c.RichText,u=wp.components,d=u.Button,p=u.BaseControl,h=u.TextControl,g=Object(a.a)();g.use(function(){return g.pass()}),o("neu-hackney/settings",{title:i("NEU Hackney Settings - CGB Block"),icon:"admin-standard",category:"common",keywords:[i("NEU Hackney Settings \u2014 CGB Block"),i("CGB Example"),i("create-guten-block")],attributes:{nominationID:{type:"number"},nominationURL:{type:"string"},__nominationURL:{type:"string",source:"meta",meta:"neuhack_settings_nomination_form"},electionCalendarID:{type:"number"},electionCalendarURL:{type:"string"},__electionCalendarURL:{type:"string",source:"meta",meta:"neuhack_settings_election_calendar"},twitter:{type:"string"},__twitter:{type:"string",source:"meta",meta:"neuhack_settings_links_twitter"},facebook:{type:"string"},__facebook:{type:"string",source:"meta",meta:"neuhack_settings_links_facebook"},phone:{type:"string"},__phone:{type:"string",source:"meta",meta:"neuhack_settings_contact_phone"},email:{type:"string"},__email:{type:"string",source:"meta",meta:"neuhack_settings_contact_email"},address:{type:"string"},__address:{type:"string",source:"meta",meta:"neuhack_settings_contact_address"}},edit:function(e){var t=e.className,n=e.setAttributes,a=e.attributes,l=a.nominationID,r=a.nominationURL,i=a.electionCalendarID,o=a.electionCalendarURL,c=a.twitter,u=a.facebook,g=a.phone,f=a.address,w=a.email;window.addEventListener("load",function(){document.querySelector(".editor-post-title__input").style.display="none",document.querySelector(".editor-post-trash").style.display="none",document.querySelector(".editor-post-switch-to-draft").style.display="none"});var _=function(e){n({nominationID:e.id,nominationURL:e.url,__nominationURL:e.url})},y=function(e){n({electionCalendarID:e.id,electionCalendarURL:e.url,__electionCalendarURL:e.url})},b=function(e){n({twitter:e,__twitter:e})},v=function(e){n({facebook:e,__facebook:e})},k=function(e){n({phone:e,__phone:e})},E=function(e){n({email:e,__email:e})},U=function(e){n({address:e,__address:e})};return wp.element.createElement("section",{className:t},wp.element.createElement("h1",null,"Site Settings"),wp.element.createElement("h2",null,"Contact Details"),wp.element.createElement(p,{label:"Branch Address",id:"contact-address"},wp.element.createElement(m,{tagName:"div",multiline:"br",format:"string",id:"contact-address",placeholder:"Your address",value:f,onChange:U,style:{marginTop:"1rem",marginBottom:"1rem"}})),wp.element.createElement(h,{label:"Branch phone contact number",placeholder:"0123 456 789",value:g,onChange:k}),wp.element.createElement(h,{label:"Branch contact email",placeholder:"you@neu.org.uk",value:w,onChange:E}),wp.element.createElement("h2",null,"Social Media Links"),wp.element.createElement(h,{label:"Twitter URL",placeholder:"https://twitter.com/youraccount",value:c,onChange:b}),wp.element.createElement(h,{label:"Facebook URL",placeholder:"https://facebook.com/youraccount",value:u,onChange:v}),wp.element.createElement("h2",null,"Elections"),wp.element.createElement(p,{label:"Upload Election Nomination Form in pdf format",id:"nomination-upload"},wp.element.createElement(s,{onSelect:_,allowedTypes:"application/pdf",value:l,id:"nomination-upload",render:function(e){var t=e.open;return wp.element.createElement("div",{style:{width:"100%"}},l?wp.element.createElement("div",null,r):null,wp.element.createElement(d,{className:"button button-large",onClick:t},l?"Choose another file":"Upload form"))}})),wp.element.createElement(p,{label:"Upload Election Calendar in pdf format",id:"calendar-upload"},wp.element.createElement(s,{onSelect:y,allowedTypes:"application/pdf",value:i,id:"calendar-upload",render:function(e){var t=e.open;return wp.element.createElement("div",{style:{width:"100%"}},i?wp.element.createElement("div",null,o):null,wp.element.createElement(d,{className:"button button-large",onClick:t},i?"Choose another file":"Upload form"))}})))},save:function(e){return wp.element.createElement("div",null,wp.element.createElement("p",null,"\u2014 Hello from the frontend."),wp.element.createElement("p",null,"CGB BLOCK: ",wp.element.createElement("code",null,"mercury")," is a new Gutenberg block."),wp.element.createElement("p",null,"It was created via"," ",wp.element.createElement("code",null,wp.element.createElement("a",{href:"https://github.com/ahmadawais/create-guten-block"},"create-guten-block")),"."))}})},function(e,t){},function(e,t){}]);