const {src, dest, watch, parallel} = require('gulp')
const scss = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify-es').default
const concat = require('gulp-concat')
const autoPrefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()
// const newer = require('gulp-newer')
const imagemin = require('gulp-imagemin')


const scripts = () => {
    return src([
            'node_modules/swiper/swiper-bundle.js',
            'node_modules/aos/dist/aos.js',
            'src/assets/js/scripts/**/*.js',
            'src/assets/js/*.js',
            '!src/assets/js/app.min.js'
        ])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(dest('src/assets/js'))
        .pipe(browserSync.stream())
}

const styles = () => {
    return src([
        'src/assets/scss/style.scss',
        ])
        .pipe(concat('style.min.css'))
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(autoPrefixer())
        .pipe(dest('src/assets/css'))
        .pipe(browserSync.stream())
}

const watching = () => {
    watch(['src/assets/js/**/*.js', '!src/assets/js/app.min.js'], scripts)
    watch('src/assets/scss/**/*.scss', styles)
    watch('src/**.*.html').on('change', browserSync.reload)
}

const browser = () => {
    browserSync.init({
        notify: false,
        server: {
            baseDir: './'
        }
    })
}

const build = () => {
    return src([
        'src/assets/img/**',
        'src/assets/css/style.min.css',
        'src/assets/js/app.min.js',
        'src/**/*.html'
    ], { base: 'src'})
        .pipe(imagemin())
        .pipe(dest('./'))
}

exports.scripts = scripts
exports.styles = styles
exports.build = build
exports.default = parallel(scripts, styles, browser, watching)
