
import './lib/js/app'
import './lib/js/chunk-vendors'
import './css/app.css'
import './css/chunk-vendors.css'

var head = document.getElementsByTagName('head')[0];

function add(filename){
  var isCss = (filename.includes("css"));
  var inject = document.createElement((isCss) ? 'link' : 'script');
  inject[(isCss) ? 'href' : 'src'] = filename;
  inject.type = "text/" + ((isCss) ? 'css' : 'javascript');
  if (isCss) inject.rel = "stylesheet";
  head.append(inject);
}

[
  "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900", 
  "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css",
].map(add);