import"./assets/modulepreload-polyfill-3cfb730f.js";import{i}from"./assets/vendor-3cff2025.js";document.querySelector(".form").addEventListener("submit",function(o){o.preventDefault();const t=parseInt(this.querySelector('[name="delay"]').value),s=this.querySelector('[name="state"]:checked').value;new Promise((e,r)=>{s==="fulfilled"?setTimeout(()=>{e(t)},t):s==="rejected"&&setTimeout(()=>{r(t)},t)}).then(e=>{i.success({title:"Fulfilled promise",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{i.error({title:"Rejected promise",message:`❌ Rejected promise in ${e}ms`})})});
//# sourceMappingURL=commonHelpers2.js.map