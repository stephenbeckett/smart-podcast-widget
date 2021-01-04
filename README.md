# podcast-widget-cdn
**A customisable widget that makes it simple to subscribe and rate your podcast.**

* Adapts depending on the user's device, so they always see the right apps & links.
* Embeds into your existing website, or as its own page/microsite.
* Clear instructions to help users leave ratings & reviews on all platforms.
* Works across modern browsers - desktop & mobile.

[Try it now](https://www.google.com) | [Copy the code](https://www.google.com)
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Embedded")

[Try it now](https://www.google.com) | [Copy the code](https://www.google.com)
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Full page")

# Installation
## Embed in your website
1. ✅ Paste this in your page wherever you want the widget to appear:

Using Wordpress? Paste the code into a 'Custom HTML' block.

```
<div id="podcast-widget"></div>
<script src="https://cdn.jsdelivr.net/gh/stephenbeckett/podcast-widget-cdn/" type="text/javascript"></script>
<script type="text/javascript">
  PodcastRedirectWidget(
  // 2. ✅ Paste your podcast's links here & delete any you don't want to use: 
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
    // 3. ✅ Customise the appearance (see the docs for more options)
    title: "Podcast Name Here",
    subtitle: "This is a short description of the podcast, it should fit in a couple of lines.",
    defaultAction: 'subscribe', // Can also be 'rate'
  });
</script>
```

You can customise nearly everything in the widget - see the [Examples](/example/all.html) and [Docs](/example/basic.html) below for more information.

## Add as a standalone page
Copy the [full page example](/example/basic.html) or use the Embed code above, but with `standalone: true`, e.g:
```
...,
{
  title: "Podcast Name Here",
  subtitle: "This is a short description of the podcast, it should fit in a couple of lines.",
  defaultAction: 'subscribe', 
  standalone: true // ✅  Set this to true 
}
```

You can customise nearly everything in the widget - see the [Examples](/example/all.html) and [Docs](/example/basic.html) below for more information.

# Customisation examples
Take a look at these examples to see how you can customise appearance & content of the widget.

See the [documentation](/example/all.html) for detailed information.

## Embedded
* Basic options 
* Basic options + app ordering & prioritisation
* Basic options + disabled switching between rate & subscribe modes
* Required options only
* All options

## Standalone page
* Basic options
* Basic options + background image
* Basic options + background colour

The Embedded examples above will also work in Standalone mode providing `standalone: true` is set as a theme parameter.

# Documentation
Take a look at the [all options example](/example/all.html) to see every available option.

## Initialisation
The widget be shown once the `PodcastRedirectWidget` function is called. 

The `PodcastRedirectWidget(Urls*, Theme*, SocialLinks, PriorityApps, ElementId)` function accepts these parameters:

| Parameter name | Required? | Description                                                                             |
|----------------|-----------|-----------------------------------------------------------------------------------------|
| Urls           | Yes       | URLs for your podcast's various app & website listings                                  |
| Theme          | Yes       | Custom theming options to override the default settings                                 |
| SocialLinks    | No        | Social URLs associated with your podcast, e.g. twitter, facebook, your website          |
| PriorityApps    | No        | Specifies which apps should always shown full size in the widget, as well as the order of the apps |
| ElementId      | No        | The ID of the element to replace with the widget (by default `#podcast-widget`)         |

There is no way currently to change parameters after initialisation.

### Urls (required)
An object containing the various app & website listing URLs of your podcast as key-value pairs.

Keys must exactly match one of:
```
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
```
...
'deezer': '' // This will not be shown
...
```

### Theme (required)
Customise the content & look of the widget with these properties:

### SocialLinks
An object containing your the social URLs associated with your podcast as key-value pairs.

Keys must exactly match one of:
```
{
  website: 'https://wapin7.com',
  instagram: 'https://instagram.com/wapin7podcast',
  email: 'mailto:tolstoy@wapin7.com',
  facebook: 'https://facebook.com/wapin7
}
```

### PriorityApps (optional)
A list of app IDs specifiying which apps should always shown full size in the widget, as well as the order of the apps. IDs must exactly match a key from the `Urls` parameter.

By default `PriorityApps` is:
```
[
  'apple-podcasts-mobile', 
  'spotify-mobile', 
  'google-podcasts',
  'stitcher',
  'podcast-addict',
  'acast'
]
```

'Priority' apps will be shown in the main slots (with the 'Subscribe' or 'Rate' buttons) rather than just as icons. If there are more priority apps than the value specified by `theme.numPrimaryApps` then the excess apps will be added to the start of the icon only list.

The order of apps in the `PriorityApps` list determines the order of apps shown in the visual list.

If an app is not available on a given device, then it will never be shown to a user on that device. For example, `apple-podcasts-mobile` will never be shown to an Android user, even though it is in the priority list.

### ElementId (optional)
The ID of an existing page element that should contain the widget when it is injected, by default `#podcast-widget`. 

If the element cannot be found the widget will not appear and an error will output to the console. 

## Events
The root widget container element produces the following events:

| Name | Description | 
|------|-------------|
|      |             |
|      |             |
|      |             |

Listen for events like this:
```
const widget = document.getElementById('#podcast-widget');
widget.addEventListener('user-choice', (appId) => {
  console.log(`The user chose '${appId}'`)
})
```

# Feature requests
The underlying Vue/Vuetify component source code for this widget is not currently available, but may be released in the future.

In the meantime feel free to make a feature request by raising a new issue. 

Possible future features:
* Font customisation
* Support for more apps & websites
* Embedded RSS reader & audio player
* Integration with analytics services