This document is currently a WIP and contains errors & omissions 

# smart-podcast-widget
**Make it easy for people to subscribe and rate your podcast**

* Adapts depending on the user's device, so they always see the right apps & links for them.
* Embeds into your existing website, or as its own page/microsite.
* Clear instructions to help users leave ratings & reviews across podcast platforms.
* Works on all modern browsers - desktop & mobile.

[Try it now](https://www.google.com) | [Copy the code](https://www.google.com)
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Embedded") | [Remix on Glitch](https://www.google.com)

[Try it now](https://www.google.com) | [Copy the code](https://www.google.com)
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Full page") | [Remix on Glitch](https://www.google.com)

# Quick Start
## Embed in your website
1. ✅  &nbsp;Paste this in your page wherever you want the widget to appear:

    _Using Wordpress? Paste this code into a 'Custom HTML' block._

```html
<div id="podcast-widget"></div>
<script src="https://cdn.jsdelivr.net/npm/smart-podcast-widget" type="text/javascript"></script>
<script type="text/javascript">
  PodcastRedirectWidget(
  // 2. ✅ Add your podcast's links here & delete any you don't want to use: 
  {
    'website': 'https://wapin7.com',
    'podchaser': 'https://podchaser.com/wapin7',
    'podcast-addict': 'https://podcastaddict.com/wapin7',
    'castbox': 'https://castbox.com/wapin7',
    'apple-podcasts-mobile': 'https://fakelink.com/wapin7',
    'spotify-mobile': 'https://fakelink.com/wapin7',
    'spotify-desktop': 'https://fakelink.com/wapin7',
    'acast': 'https://fakelink.com/wapin7',
    'stitcher': 'https://fakelink.com/wapin7',
    'pocket-casts': 'https://fakelink.com/wapin7',
    'tunein': 'https://fakelink.com/wapin7',
    'podbean': 'https://fakelink.com/wapin7',
    'deezer': 'https://fakelink.com/wapin7',
    'google-podcasts': 'https://fakelink.com/wapin7',
    'iheart-radio': 'https://fakelink.com/wapin7',
    'rss': 'https://wapin7.com'
  }, 
  {
    // 3. ✅ Customise the appearance (see the examples & docs for more options)
    title: "Podcast Name Here",
    subtitle: "This is a short description of the podcast, it should fit in a couple of lines.",
    defaultAction: 'subscribe', // Can also be 'rate'
  });
</script>
```

See the [full code for this example](/examples/embedded-basic.html), or [Remix it on Glitch]().

You can customise nearly everything in the widget - see the [Examples](#examples) and [Documentation](#documentation).

## Add as a standalone page
Copy the [Standalone Page example](/examples/standalone-basic.html) or use the _Embedded_ code above, but with `standalone: true`, e.g:
```js
{
  standalone: true, // ✅ Set this to true 
  title: "Podcast Name Here",
  subtitle: "This is a short description of the podcast, it should fit in a couple of lines.",
  defaultAction: 'subscribe' 
}
```

You can customise nearly everything in the widget - see the [Examples](#examples) and [Documentation](#documentation).

# Examples
These examples show how you can customise appearance & content of the widget. See the [Documentation](#documentation) for detailed information. 

All of these examples are available to [remix on Glitch]().

## Embedded in a page
* [Basic options](/examples/embedded-basic.html)
* [Basic options + app ordering & prioritisation](/examples/embedded-basic-app-priority.html)
* [Basic options + events](/examples/embedded-basic-events.html)
* [Required options only](/examples/embedded-required-parameters.html)
* [All parameters](/examples/embedded-all-parameters.html)

## As a Standalone page
The _Embedded_ examples above will also work in _Standalone_ mode providing `standalone: true` is set as a theme parameter.

* [Basic options](/examples/standalone-basic.html)
* [Basic options + background image](/examples/standalone-basic-background-image.html)
* [Basic options + background colour](/examples/standalone-basic-background-colour.html)

## Run the examples locally
Clone or download this repository then run:
```
  npm install
  npm run start
```
and visit [http://localhost:8888/examples](http://localhost:8888/examples)

# Documentation
Take a look at the [all parameters example](/examples/embedded-all-parameters.html) to see the options detailed below, or [remix the example on Glitch]() to try it out now. There are more examples in the [Examples](#examples) section.

## Initialisation
The widget will only be shown once the `PodcastRedirectWidget` function is called. Currently there is no way to change parameters after initialisation.

 `PodcastRedirectWidget(Urls*, Theme*, SocialLinks, PriorityApps, ElementId)`  accepts 5 parameters:

| Parameter name | Required (*)? | Description                                                                                        |
| -------------- | ------------- | -------------------------------------------------------------------------------------------------- |
| Urls           | Yes           | URLs for the  app & website listings associated with your podcast                                  |
| Theme          | Yes           | Custom theming options that will override the default settings                                     |
| SocialLinks    | No            | Social URLs associated with your podcast, e.g. twitter, facebook, your website                     |
| PriorityApps   | No            | Specifies which apps should always shown full size in the widget, as well as the order of the apps |
| ElementId      | No            | The ID of the element that should contain the widget (by default `#podcast-widget`)                |

### Urls (required*)
An object containing the various app & website listing URLs of your podcast as key-value pairs.

Keys/property names must exactly match one of:
```js
{
  'website': 'https://wapin7.com',
  'podchaser': 'https://podchaser.com/wapin7',
  'podcast-addict': 'https://podcastaddict.com/wapin7',
  'castbox': 'https://castbox.com/wapin7',
  'apple-podcasts-mobile': 'https://fakelink.com/wapin7',
  'spotify-mobile': 'https://fakelink.com/wapin7',
  'spotify-desktop': 'https://fakelink.com/wapin7',
  'acast': 'https://fakelink.com/wapin7',
  'stitcher': 'https://fakelink.com/wapin7',
  'pocket-casts': 'https://fakelink.com/wapin7',
  'tunein': 'https://fakelink.com/wapin7',
  'podbean': 'https://fakelink.com/wapin7',
  'deezer': 'https://fakelink.com/wapin7',
  'google-podcasts': 'https://fakelink.com/wapin7',
  'iheart-radio': 'https://fakelink.com/wapin7',
  'rss': 'xxx'
}
```

If you don't want to show a particular app, just delete the line or set it to an empty string, e.g.:
```js
'deezer': '' // This will not be shown
```

### Theme (required*)
Customise the content & look of the widget with these properties:

| Property name | Type | Default | Description |
| ------------- | ---- | ------- | ----------- |
| WIP...        |      |         |             |

### SocialLinks (optional)
An object containing your the social URLs associated with your podcast as key-value pairs.

Keys/property names must exactly match one of:
```js
{
  website: 'https://wapin7.com',
  instagram: 'https://instagram.com/wapin7podcast',
  email: 'mailto:tolstoy@wapin7.com',
  facebook: 'https://facebook.com/wapin7'
}
```

### PriorityApps (optional)
A list of app IDs specifying which apps should be shown full size in the widget, as well as the order of the apps. IDs must exactly match a key from the [Urls](#urls-required) parameter.

By default `PriorityApps` is:
```js
[
  'apple-podcasts-mobile', 
  'spotify-mobile', 
  'google-podcasts',
  'stitcher',
  'podcast-addict',
  'acast'
]
```

Priority apps will be shown in the full size slots (i.e. with a Subscribe/Rate button) rather than just as icons. If there are more priority apps than the value specified by `theme.numPrimaryApps` then the excess apps will be added to the start of the icon only list.

The order of `PriorityApps` determines the order of apps shown in the visual list.

If an app is not available on a given device, then it will never be shown to a user on that device. For example, the iOS only app `apple-podcasts-mobile` will never be shown to an Android user, even though it is in the priority list.

### ElementId (optional)
The ID of an existing page element that will be used as the container of the widget when it is injected, by default this is `#podcast-widget`. 

If an element matching `ElementId` cannot be found in the page when `PodcastRedirectWidget()` is called, the widget will not appear and an error will output to the console. 

## Events
See the [Events example](/examples/embedded-basic-events.html). The root widget container element produces the following events:

| Name                      | Description                                                                                                                                                                                          |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| app-choice (appId)        | Fires when the user first clicks on an app to access a link, or the rate instructions. `appId` will be one of the property names listed in [Urls](#urls-required).                                   |
| action-changed (actionId) | Fires when the action changes, e.g. the user presses the 'Rate' button when in 'Subscribe' mode. `actionId` will be one of: `rate` or `subscribe`                                                    |
| ready (platformId)        | Fires when the widget component has loaded, includes the detected platform ID of the device. `platformId` will be one of: `windows`, `osx`, `android`, `ios`, `windows-phone`, `linux` or `unknown`. |

# Feature requests
The underlying Vue/Vuetify component source code for this widget is not currently available, but may be released in the future. In the meantime feel free to make a feature request by raising a new issue. 

Possible future features:
* Font customisation
* Support for more podcast apps & websites
* Embedded RSS reader & audio player
* Integration with analytics services