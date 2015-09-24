module.exports = {
  options: {
    browsers: ['last 2 version']
  },
  multiple_files: {
    expand: true,
    flatten: true,
    src: 'dist/css/src/*.css',
    dest: 'dist/css'
  }
}