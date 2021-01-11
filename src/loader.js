// Injects an iframe into the page which then loads the widget script.
// Use of the iframe prevents unexpected css interactions with the parent page.
// Additionally if 'theme.height = auto' is set, it will monitor the height
// of the widget element and resize the iframe accordingly

window.SmartPodcastWidget = function (
  urls,
  theme,
  socialLinks,
  primaryApps,
  elName = 'podcast-widget'
  ) {

  const parentElement = document.getElementById(elName);

  if (parentElement) {
    const iframeHtml = `
    <!DOCTYPE html>
    <html lang="en" style="overflow:auto">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <script src="https://cdn.jsdelivr.net/npm/smart-podcast-widget/dist/widget.js" type="text/javascript"></script>
      </head>
      <body>
        <noscript>
          <strong>Sorry but Smart Podcast Widget requires JavaScript to work. Please enable it to continue.</strong>
        </noscript>
        <div id="podcast-widget-iframe"></div>
      </body>
    </html>`;
    const iframe = document.createElement("iframe");
    iframe.style = "border: none; background-color: transparent;"
    parentElement.appendChild(iframe);
    const iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(iframeHtml);
    iframeDocument.close();
    
    const widgetMountedCallback = (appEl, theme) => {
      iframe.width = theme.width;
    
      if (theme.standalone === true) {
        parentElement.style.width = (parentElement.style.width) ? parentElement.style.width : "100vw";
        parentElement.style.height = (parentElement.style.height) ? parentElement.style.height : "100vh";
      }
    
      if (theme.height === 'auto') {
        if (ResizeObserver) {
          const observer = new ResizeObserver(entries => {
            iframe.height = entries[0].contentRect.height
          });
          observer.observe(appEl);
        } else {
          // For IE & FF android
          iframe.contentWindow.onresize = () => {
            iframe.height = appEl.scrollHeight
          }
        }
        
        // Hack to fix Firefox ResizeObserver bug
        // FF does not detect initial size correctly
        if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
          window.setTimeout(() => {
            iframe.height = appEl.scrollHeight
          }, 100);
        }
        
        iframe.height = appEl.scrollHeight;
      } else {
        iframe.height = theme.height;
      }
    }
    
    iframe.onload = () => {
      const iframeWidgetContainer = iframeDocument.getElementById('podcast-widget-iframe');
      iframe.contentWindow.InitSmartPodcastWidgetInternal(urls, theme, socialLinks, primaryApps, iframeWidgetContainer, widgetMountedCallback);
    }

  } else {
    console.error(`SmartPodcastWidget: Could not find element with the ID '#${elName}'. Make sure there is an element in the page with this exact ID.`)
  }

}