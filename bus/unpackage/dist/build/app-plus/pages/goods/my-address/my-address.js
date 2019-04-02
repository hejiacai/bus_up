
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body{background-color: #E7E6EB;}\n",],undefined,{path:"./pages/goods/my-address/my-address.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/goods/my-address/my-address.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      