(()=>{var e,t={4423:(e,t,r)=>{const{Readability:n}=r(6107);document.addEventListener("DOMContentLoaded",(function(){if(generic_ajax_object.fetch_news){let e=[],t=generic_ajax_object.tags;console.log(t);let r="https://newsapi.org/v2/everything?q="+t+"&sortBy=publishedAt&pageSize="+generic_ajax_object.fetch_daily+"&apiKey="+generic_ajax_object.newsApiKey;jQuery.ajax({url:r,method:"GET"}).then((function(t){let r=t.articles.map((function(t){return jQuery.ajax({url:t.url,method:"GET"}).then((function(r){jQuery(r);const o=(new DOMParser).parseFromString(r,"text/html");let a=new n(o).parse().textContent;e.push({description:t.description,publishedAt:t.publishedAt,title:t.title,url:t.url,urlToImage:t.urlToImage,content:a.replace(/\n/g,"\n\n")})})).catch((function(e){return 403===e.status?console.log("Skipped article due to 403 error:",t.url):console.log("Error fetching article:",e),Promise.resolve()}))}));return Promise.all(r)})).then((function(){console.log(e);var t={action:"parse_external_news_api",finalResults:e};jQuery.ajax({type:"POST",url:generic_ajax_object.ajax_url,data:t,success:function(e){jQuery(document).ajaxStart((function(){})).ajaxStop((function(){}))},error:function(e,t,r){console.log(e),console.log(r),alert(t)}})})).catch((function(e){console.log("Error fetching articles:",e)}))}}))}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,o,a]=e[u],c=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(c=!1,a<i&&(i=a));if(c){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={119:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,c,l]=r,s=0;if(i.some((t=>0!==e[t]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(l)var u=l(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self.webpackChunkwebpack=self.webpackChunkwebpack||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[107],(()=>n(4423)));o=n.O(o)})();