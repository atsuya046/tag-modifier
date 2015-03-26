console.log("this is content script");

chrome.runtime.sendMessage({requier: "dom-modify"}, function(response){
  if (response.dom) {
    var target = $("#"+response.id);
    target.attr(response.name, response.value);
  }
});

chrome.runtime.sendMessage({requier: "embeded-js"}, function(response) {
  if (response.embedJs) {
    var script = $("<script>");
    script.html(response.script);
    $("body").append(script);
  }
});
