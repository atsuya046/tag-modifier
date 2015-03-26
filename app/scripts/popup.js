$("#load-button").on("click", function(){
  chrome.tabs.reload(null, null, function(obj){});
});

(function() {
  chrome.extension.onMessage.addListener(function(request, sender, sendResponse){
    console.log(request);
    switch (request.requier) {
      case "dom-modify":
        var elmId = $("#elm-id").val();
        var attrName = $("#attr-name").val();
        var attrVal = $("#attr-val").val();
        sendResponse({domModify: true, id: elmId, name: attrName, value: attrVal});
        break;
      case "embeded-js" :
        var embJs = $("#emb-js").val();
        sendResponse({embedJs: true, script: embJs});
        break;
      default:
        break;
    }
  });
})();
