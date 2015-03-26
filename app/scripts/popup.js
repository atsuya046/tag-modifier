$("#load-button").on("click", function(){
  chrome.tabs.reload(null, null, function(obj){});
});

(function() {
  chrome.extension.onMessage.addListener(function(request, sender, sendResponse){
    console.log(request);
    if (request.requier == "dom-modify"){
      var elmId = $("#elm-id").val();
      var attrName = $("#attr-name").val();
      var attrVal = $("#attr-val").val();
      sendResponse({id: elmId, name: attrName, value: attrVal});
    }
  });
})();
