#Latincouver App
Version 0.1.3 of the app.


##Features
* ES6
* SCSS
* Automatic compilation
* Livereload
* Development build with source maps
* Automatic bower components injection
* Automatic scripts and stylesheets injection

##Usage

###Running the App during Development
This command automatically compiles ES6 to ES5, scss, injects bower components, generates source maps, starts livereload server and opens your app in the browser.

```sh
gulp serve
```
###Mobile app
When your app is interesting enough to be tested on mobile device, create a build.

Don't forget to compile from sources:
```sh
gulp
```

And then we can create the build for iOS:

```sh
ionic build ios
```

and even test it, if you use OS X:

```sh
ionic emulate ios
``` 

More info about builds, including Android, can be found in Ionic tutorial.
 
One more interesting feature Ionic has: Ionic View. It's amazing thing and I recommend you to try it - pretty simple to use and saves tones of time for debug and testing on real devices. To start, just run:

```sh
ionic upload
```

Another option is to send package to Ionic
```sh
ionic package build android --profile dev
```

##Directory layout

### Source

```sh
latincouver
└── src
    ├── app                  # application folder
    │   ├── components       # components folder
    │   ├── locations        # locations folder
    │   ├── index.config.js  # config file
    │   ├── index.module.js  # main angular module
    │   ├── index.route.js   # ui router config
    │   ├── index.run.js     # file with run loop
    │   └── index.scss       # main scss file
    └── assets               # assets folder
        ├── images           # images folder
        ├── favicon.ico      # favicon
        └── index.html       # main page which will be rendered to a client
```

##Build pack

## Stack
* Ionic application boilerplate for Gulp and ES6
![Ionic and Angular](http://moduscreate.com/wp-content/uploads/2014/01/ionic-angular-opti.png)