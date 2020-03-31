/**
 * Packages node utilisés
 */
const
    { series, watch, src, dest }            = require('gulp'),
    autoprefixer                            = require('gulp-autoprefixer'),
    sass                                    = require('gulp-sass'),
    rename                                  = require('gulp-rename'),
    pixrem                                  = require('gulp-pixrem')


/**
 * Définitions des variables pour le chemin
 */

const
    path = {
        inputs: {
            styles: 'src/css/*.sass',
        },
        outputs: {
            styles: 'src/css/',
        }
    }


/**
 * Initialisation des tâches
 */

// SASS
exports.styles = cb => {
    src(path.inputs.styles)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(pixrem({atrules:true}))
        .pipe(rename({suffix: '.min'}))
        .pipe(dest(path.outputs.styles))
    cb()
}

/**
 * Définition du watcher
 */
exports.watch = () => {

    watch(path.inputs.styles, series('styles'))
}