console.log("this is content script");

chrome.runtime.sendMessage({requier: "dom-modify"}, function(response){
  var target = $("#"+response.id);
  target.attr(response.name, response.value);
  console.log(target);
})
