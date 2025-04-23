![screenshot](https://raw.githubusercontent.com/albertodeago/vue-aspect-ratio/master/assets/screen.png)

# vue-aspect-ratio

A component to render a certain aspect ratio element without javascript computations.  
It exposes a default slot that will have the desided ratio.  
Weights 3.8kb not gzipped. No dependencies.  
100% responsive

![responsiveness gif](https://raw.githubusercontent.com/albertodeago/vue-aspect-ratio/master/assets/responsive.gif)

<a href="https://www.buymeacoffee.com/albertodeago" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>


## How to install and use

To install the package in your application just type
```
npm install vue-aspect-ratio
```

Then, to install as a global component
``` javascript
import Vue from "vue";
import VueAspectRatio from "vue-aspect-ratio";

Vue.component("vue-aspect-ratio", VueAspectRatio)
```

Or you can register locally in one of your components as follows
``` javascript
import VueAspectRatio from "vue-aspect-ratio";

export default {
    name: "AmazingComponent",
    props: [myprop],
    components: {
        "vue-aspect-ratio": VueAspectRatio
    }
}
```

Using in templates
``` html
<div class="my-container">
    <vue-aspect-ratio ar="16:9" width="640px">
        <div>your content goes here</div>
    </vue-aspect-ratio>
</div>
```

NOTE: You may need to set in css "height: 100%" on your content that goes inside vue-aspect-ratio to fill the entire space if your content is not long enough.

## Parameters and events

Component props:

| Name   | Type   | Mandatory | Example | Description      |
|--------|--------|-----------|---------|------------------|
| ar     | String | false     | "16:9"  | the aspect ratio |
| width  | String | false     | "640px" | the css value of the width to set on the element |

It does not emit any event

## Contributing

The project is opened to contributes, suggestions and improvements. You can use the [Issues](https://github.com/albertodeago/vue-aspect-ratio/issues) section.


### Project setup

Fork the project, open it up and type
```
npm install
```

To run the example page, it will open a dev server listening to localhost:8080 (usually), type:
```
npm run dev
```

To build for production
```
npm run build
```

To lint the project
```
npm run lint
```

To prepare for pubblication
```
npm run prepublish
```

### Test

The project uses [Cypress](https://www.cypress.io/)
If you want to open the interactive cypress dashboard to run and check tests
```
npm run test:open
```

If you instead just want to run the tests in headless mode
```
npm run test
```

Note: tests required dev server to be up and running

## Author and License

[Alberto De Agostini](https://twitter.com/albertodeago88)

Licensed under MIT 
