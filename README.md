# podcast-widget-cdn
**A smart widget that makes it simple for people to subscribe and rate your podcast.**

* Adapts depending on the user's device, so they always see the right apps & links for them.
* Embeds into your existing website, or as its own page/microsite.
* Clear instructions to help users leave ratings & reviews across podcast platforms.
* Works on all modern browsers - desktop & mobile.

[Try it now](https://www.google.com) | [Copy the code](https://www.google.com)
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Embedded") | [Remix on Glitch](https://www.google.com)

[Try it now](https://www.google.com) | [Copy the code](https://www.google.com)
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Full page") | [Remix on Glitch](https://www.google.com)

# Installation
## Embed in your website
1. ✅  &nbsp;Paste this in your page wherever you want the widget to appear:

    _Using Wordpress? Paste this code into a 'Custom HTML' block._

```html
<div id="podcast-widget"></div>
<script src="https://cdn.jsdelivr.net/gh/stephenbeckett/podcast-widget-cdn" type="text/javascript"></script>
<script type="text/javascript">
  PodcastRedirectWidget(
  // 2. ✅ Add your podcast's links here & delete any you don't want to use: 
  {
    'website': "https://wapin7.com",
    'podchaser': "https://podchaser.com/wapin7",
    'podcast-addict': "https://podcastaddict.com/wapin7",
    'castbox': "https://castbox.com/wapin7",
    'apple-podcasts-mobile': "https://fakelink.com/wapin7",
    'spotify-mobile': "https://fakelink.com/wapin7",
    'spotify-desktop': "https://fakelink.com/wapin7",
    'acast': "https://fakelink.com/wapin7",
    'stitcher': "https://fakelink.com/wapin7",
    'pocket-casts': "https://fakelink.com/wapin7",
    'tunein': "https://fakelink.com/wapin7",
    'podbean': "https://fakelink.com/wapin7",
    'deezer': "https://fakelink.com/wapin7",
    'google-podcasts': "https://fakelink.com/wapin7",
    'iheart-radio': "https://fakelink.com/wapin7",
    'rss': "https://wapin7.com"
  }, 
  {
    // 3. ✅ Customise the appearance (see the examples & docs for more options)
    title: "Podcast Name Here",
    subtitle: "This is a short description of the podcast, it should fit in a couple of lines.",
    defaultAction: 'subscribe', // Can also be 'rate'
  });
</script>
```

See the [full code for this example](/example/embedded-basic.html), or [Remix it on Glitch]().

You can customise nearly everything in the widget - see the [Examples](#examples) and [Documentation](#documentation).

## Add as a standalone page
Copy the [Standalone page example](/example/standalone-basic.html) or use the Embed code above, but with `standalone: true`, e.g:
```js
{
  title: "Podcast Name Here",
  subtitle: "This is a short description of the podcast, it should fit in a couple of lines.",
  defaultAction: 'subscribe', 
  standalone: true // ✅ Set this to true 
}
```

You can customise nearly everything in the widget - see the [Examples](#examples) and [Documentation](#documentation).

# Examples
Take a look at these examples to see how you can customise appearance & content of the widget.

See the [Documentation](#documentation) for detailed information.

## Embedded in a page
* [Basic options](/example/embedded-basic.html)
* [Basic options + app ordering & prioritisation](/example/embedded-basic-app-priority.html)
* [Basic options + events](/example/embedded-basic-events.html)
* [Required options only](/example/embedded-required-parameters.html)
* [All parameters](/example/embedded-all-parameters.html)

## As a Standalone page
The Embedded examples above will also work in Standalone mode providing `standalone: true` is set as a theme parameter.

* [Basic options](/example/standalone-basic.html)
* [Basic options + background image](/example/standalone-basic-background-image.html)
* [Basic options + background colour](/example/standalone-basic-background-colour.html)

# Documentation
Take a look at the [all parameters example](/example/embedded-all-parameters.html) to see the options detailed below, or [remix the example on Glitch]() to try it out now.

## Initialisation
The widget will only be shown once the `PodcastRedirectWidget` function is called. Currently there is no way to change parameters after initialisation.

 `PodcastRedirectWidget(Urls*, Theme*, SocialLinks, PriorityApps, ElementId)`  accepts 5 parameters:

| Parameter name | Required (*)? | Description                                                                                        |
| -------------- | ------------- | -------------------------------------------------------------------------------------------------- |
| Urls           | Yes           | URLs for the  app & website listings associated with your podcast                                  |
| Theme          | Yes           | Custom theming options that will override the default settings                                            |
| SocialLinks    | No            | Social URLs associated with your podcast, e.g. twitter, facebook, your website                     |
| PriorityApps   | No            | Specifies which apps should always shown full size in the widget, as well as the order of the apps |
| ElementId      | No            | The ID of the element that should contain the widget (by default `#podcast-widget`)                    |

### Urls (required*)
An object containing the various app & website listing URLs of your podcast as key-value pairs.

Keys must exactly match one of:
```js
{
  'website': "https://wapin7.com",
  'podchaser': "https://podchaser.com/wapin7",
  'podcast-addict': "https://podcastaddict.com/wapin7",
  'castbox': "https://castbox.com/wapin7",
  'apple-podcasts-mobile': "https://fakelink.com/wapin7",
  'spotify-mobile': "https://fakelink.com/wapin7",
  'spotify-desktop': "https://fakelink.com/wapin7",
  'acast': "https://fakelink.com/wapin7",
  'stitcher': "https://fakelink.com/wapin7",
  'pocket-casts': "https://fakelink.com/wapin7",
  'tunein': "https://fakelink.com/wapin7",
  'podbean': "https://fakelink.com/wapin7",
  'deezer': "https://fakelink.com/wapin7",
  'google-podcasts': "https://fakelink.com/wapin7",
  'iheart-radio': "https://fakelink.com/wapin7"
}
```

If you don't want to show a particular app, just delete the line or set it to an empty string, e.g.:
```js
'deezer': '' // This will not be shown
```

### Theme (required*)
Customise the content & look of the widget with these properties:

| Property name | Default | Description
| --- | --- | --- |
| WIP... | | |

### SocialLinks (optional)
An object containing your the social URLs associated with your podcast as key-value pairs.

Keys must exactly match one of:
```js
{
  website: 'https://wapin7.com',
  instagram: 'https://instagram.com/wapin7podcast',
  email: 'mailto:tolstoy@wapin7.com',
  facebook: 'https://facebook.com/wapin7'
}
```

### PriorityApps (optional)
A list of app IDs specifiying which apps should be shown full size in the widget, as well as the order of the apps. IDs must exactly match a key from the `Urls` parameter.

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

Priority apps will be shown in the full size slots (the ones with a Subscribe/Rate button) rather than just as icons. If there are more priority apps than the value specified by `theme.numPrimaryApps` then the excess apps will be added to the start of the icon only list.

The order of `PriorityApps` determines the order of apps shown in the visual list.

If an app is not available on a given device, then it will never be shown to a user on that device. For example, `apple-podcasts-mobile` will never be shown to an Android user, even though it is in the priority list.

### ElementId (optional)
The ID of an existing page element that will become the container of the widget when it is injected, by default this is `#podcast-widget`. 

If `ElementId` cannot be found, the widget will not appear and an error will output to the console. 

## Events
See the [Events example](/example/embedded-basic-events.html). The root widget container element produces the following events:

| Name                      | Description                                                                                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| app-choice (appId)        | Fires when the user first clicks on an app to access a link, or the rate instructions                                                                                           |
| action-changed (actionId) | Fires when the action changes, e.g. the user presses the 'Rate' button when in 'Subscribe' mode                                                                                 |
| ready (platformId)        | Fires when the widget component has loaded, includes the detected platform ID of the device, one of: `windows`, `osx`, `android`, `ios`, `windows-phone`, `linux` or `unknown`. |

# Feature requests
The underlying Vue/Vuetify component source code for this widget is not currently available, but may be released in the future. In the meantime feel free to make a feature request by raising a new issue. 

Possible future features:
* Font customisation
* Support for more apps & websites
* Embedded RSS reader & audio player
* Integration with analytics services