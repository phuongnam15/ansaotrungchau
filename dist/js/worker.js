var e={headersReceived:r=>{const{responseHeaders:o}=r;for(const o of e.headersReceived.methods)o.method(r),o.once&&e.headersReceived.methods.delete(o);return{responseHeaders:o}}};e.headersReceived.methods=new Set,e.beforeSendHeaders=r=>{const{requestHeaders:o}=r;for(const o of e.beforeSendHeaders.methods)o.method(r),o.once&&e.beforeSendHeaders.methods.delete(o);return{requestHeaders:o}},e.beforeSendHeaders.methods=new Set,e.install=r=>{e.prefs=r,chrome.webRequest.onHeadersReceived.removeListener(e.headersReceived),chrome.webRequest.onHeadersReceived.addListener(e.headersReceived,{urls:["<all_urls>"]},["blocking","responseHeaders","extraHeaders"]),chrome.webRequest.onBeforeSendHeaders.removeListener(e.beforeSendHeaders);const o=["requestHeaders"];e.prefs["fix-origin"]&&o.push("blocking","extraHeaders"),chrome.webRequest.onBeforeSendHeaders.addListener(e.beforeSendHeaders,{urls:["<all_urls>"]},o)},e.remove=()=>{chrome.webRequest.onHeadersReceived.removeListener(e.headersReceived),chrome.webRequest.onBeforeSendHeaders.removeListener(e.beforeSendHeaders)},e.beforeSendHeaders.methods.add({method:r=>{if("OPTIONS"===r.method){const o=r.requestHeaders.find((({name:e})=>"access-control-request-headers"===e.toLowerCase()));if(o){const{requestId:s}=r;e.headersReceived.methods.add({method:e=>{"OPTIONS"===e.method&&e.requestId===s&&e.responseHeaders.push({name:"Access-Control-Allow-Headers",value:o.value})},once:!0})}}}});{const r={};chrome.tabs.onRemoved.addListener((e=>delete r[e])),e.headersReceived.methods.add({method:o=>{if(e.prefs["overwrite-origin"]&&"main_frame"!==o.type){const{initiator:s,originUrl:t,responseHeaders:a}=o;let n="*";if((e.prefs["unblock-initiator"]||e.prefs["allow-credentials"])&&(!r[o.tabId]||!r[o.tabId][o.requestId]))try{n=new URL(s||t).origin}catch(e){}301!==o.statusCode&&302!==o.statusCode||(r[o.tabId]=r[o.tabId]||{},r[o.tabId][o.requestId]=!0);const l=a.find((({name:e})=>"access-control-allow-origin"===e.toLowerCase()));l?"*"!==l.value&&(l.value=n):a.push({name:"Access-Control-Allow-Origin",value:n})}}})}e.beforeSendHeaders.methods.add({method:r=>{if(e.prefs["fix-origin"])try{const e=new URL(r.url);r.requestHeaders.push({name:"referer",value:r.url},{name:"origin",value:e.origin})}catch(e){}}}),self.DEFAULT_METHODS=["GET","PUT","POST","DELETE","HEAD","OPTIONS","PATCH","PROPFIND","PROPPATCH","MKCOL","COPY","MOVE","LOCK"];var r={"overwrite-origin":()=>chrome.storage.local.get({enabled:!0,"overwrite-origin":!0,"fake-supported-methods":!0,methods:self.DEFAULT_METHODS,"unblock-initiator":!0,"allow-credentials":!0,"fix-origin":!1},(r=>{if(r.enabled&&(r["overwrite-origin"]||r["fix-origin"])?e.install(r):e.remove(),r.enabled&&r["overwrite-origin"]){const e={removeRuleIds:[1,2],addRules:[{id:1,priority:1,action:{type:"modifyHeaders",responseHeaders:[{operation:"set",header:"Access-Control-Allow-Methods",value:r.methods.length===self.DEFAULT_METHODS.length?"*":r.methods.join(", ")}]},condition:{}}]};r["fake-supported-methods"]&&e.addRules.push({id:2,priority:1,action:{type:"modifyHeaders",responseHeaders:[{operation:"set",header:"Allow",value:r.methods.join(", ")}]},condition:{requestMethods:["options"]}}),chrome.declarativeNetRequest.updateDynamicRules(e)}else chrome.declarativeNetRequest.updateDynamicRules({removeRuleIds:[1,2]})}))};const o=(e,r,o)=>chrome.storage.local.get({enabled:!0,[e]:o},(o=>{chrome.declarativeNetRequest.updateEnabledRulesets(o.enabled&&o[e]?{enableRulesetIds:[r]}:{disableRulesetIds:[r]})}));r.csp=()=>o("remove-csp","csp",!1),r["x-frame"]=()=>o("remove-x-frame","x-frame",!0),r["allow-credentials"]=()=>o("allow-credentials","allow-credentials",!0),r["allow-headers"]=()=>o("allow-headers","allow-headers",!1),r.referer=()=>o("remove-referer","referer",!1);{const e=()=>{r["x-frame"](),r["overwrite-origin"](),r["allow-credentials"](),r["allow-headers"](),r.referer(),r.csp()};chrome.runtime.onStartup.addListener(e),chrome.runtime.onInstalled.addListener(e)}