# Bootstrap Cards
&mdash; *Responsive Bootstrap template implementing card-based design. Demo [here](http://suyashlakhotia.com/BootstrapCards/).*

![Screenshot](demo.gif)

## How to Install

### Default *Bootstrap Cards*

1. Download this repo [here](https://github.com/SuyashLakhotia/BootstrapCards/archive/master.zip).
2. Navigate to the `dist/` folder on Terminal.
3. Install all the Bower dependencies using `bower install`.
4. Copy the contents of `dist/` to your project folder.

### Customising *Bootstrap Cards*

#### Setup

1. Download this repo [here](https://github.com/SuyashLakhotia/BootstrapCards/archive/master.zip).
2. Install Gulp globally using `npm install -g gulp-cli`.
3. Install the Node.js modules needed in this project using `npm install`.
4. Navigate to `dist/` and install all the Bower dependencies using `bower install`.
5. (Optional) This project uses [HTML-CSS-JS Prettify for Sublime Text](https://github.com/victorporof/Sublime-HTMLPrettify) to maintain a consistent coding style. The custom options are defined in `.jsbeautifyrc`.

#### Writing Code

1. Navigate to this repo and run `gulp`. This will serve the files in `dist/` through a local web server and take care of JS linting, Sass compilation and refreshing the browser when any changes are made.
2. To change the CSS, edit the Sass code inside `src/sass/`.
3. To change the JS, edit the JS code inside `src/js/`.

#### Contents of Source Folder &amp; Overview of Gulp Tasks
```
BootstrapCards/
└── src/
    ├── fonts/
    ├── img/
    ├── js/
    ├── sass/
    │   ├── layout/
    │   ├── pages/
    │   ├── utils/
    │   └── main.scss
    ├── blog-post.html
    ├── blog.html
    └── index.html
```

- `src/fonts/`: Contains all custom fonts. Gulp copies them over to `dist/fonts/`.
- `src/img/`: Contains all images. Gulp copies them over to `dist/img/`.
- `src/js/`: Contains all custom JavaScript files. Gulp lints them and then copies them over to `dist/js/`.
- `src/sass/`: Contains all custom styles. Gulp compiles `main.scss` into `dist/css/cards.css`.
- `src/*.html`: Gulp lints the Bootstrap styles and then copies the files over to `dist/`.

##### Sass Files
- `sass/layout/`: Contains styles for the cards, navbar, jumbotrons &amp; footer.
- `sass/pages/`: Contains page-specific styles.
- `sass/utils/`: Contains globally used variables, mixins & base styles.
- `sass/main.scss`: Imports all the necessary Sass files.

## Bower Components

Listed below are all the Bower components used in *Bootstrap Cards*. The ones in **bold** are necessary while the others are optional.

- **Normalize.css** ([https://necolas.github.io/normalize.css/](https://necolas.github.io/normalize.css/))
- **jQuery** ([https://jquery.com/](https://jquery.com/))
- **Bootstrap** ([http://getbootstrap.com/](http://getbootstrap.com/))
- Font Awesome ([http://fontawesome.io/](http://fontawesome.io/))
- Animate.css ([https://daneden.github.io/animate.css/](https://daneden.github.io/animate.css/))
- wow.js ([http://mynameismatthieu.com/WOW/](http://mynameismatthieu.com/WOW/))
- jQuery Easing Plugin ([https://github.com/gdsmith/jquery.easing](https://github.com/gdsmith/jquery.easing))
