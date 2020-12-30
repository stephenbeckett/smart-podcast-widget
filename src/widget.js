
import './lib/js/app'
import './lib/js/chunk-vendors'
import './lib/css/app.css'
import './lib/css/chunk-vendors.css'

var head = document.getElementsByTagName('head')[0];

function add(filename){
  var inject = document.createElement('link');
  inject.href = filename;
  inject.type = "text/css";
  inject.rel = "stylesheet";
  head.append(inject);
}

[
  "https://fonts.googleapis.com/css?family=Roboto:400,500"
].map(add);