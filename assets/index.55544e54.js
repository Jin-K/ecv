const a=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};a();async function i(r){return new Promise(n=>setTimeout(n,r))}console.log("started app");u();async function u(){const r=document.querySelector("#myTextArea");for(await i(1e3),r.innerHTML=r.value=`Hello jeune padawan, \r
`,await i(1500),r.innerHTML=r.value+=`Bienvenue dans ma matrice.\r
`;;)await i(1e3),r.innerHTML=r.value+="."}
