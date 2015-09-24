module.exports = {
  options: {
    livereload: true,
  },
  css: {
    files: ['*.scss', 'src/*.scss'],
    tasks: ['sass', 'autoprefixer']
  },
  html:{
    files: ['src/*.html'],
    tasks: ['htmlmin']
  }
}