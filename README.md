Stump
=====

### Jade, Stylus Gulp Boilerplate

A simple project starter I use. It compiles [Jade](http://jade-lang.com/) and [Stylus](http://stylus-lang.com/) from a `src` folder to a `dist` folder using [Gulp](http://gulpjs.com/). I've included [grub.css](https://github.com/rnarrkus/grub) (a simple inline-block grid), [jquery](https://jquery.com/download/) and [Classie.js](https://github.com/desandro/classie).

Forked from [bootstrap-jade-stylus-gulp-boilerplate](https://github.com/FarhadG/bootstrap-jade-stylus-gulp-boilerplate).

### Installation

```
  $ git clone https://github.com/rnarrkus/stump.git [project-directory]
  $ cd [project-directory]
  $ npm install
  $ gulp
```

### Usage

`$ gulp` builds all of the files from the `src` folder to the `dist` folder, watches for changes, and then opens/reloads your browser at http://localhost:4000/dist

`$ gulp build` builds all of the files from the `src` folder to the `dist` folder, without watching or opening your browser