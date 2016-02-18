module.exports = function(grunt) {

  // Utility to load the different option files
  // based on their names
  function loadConfig(path) {
    var glob = require('glob');
    var object = {};
    var key;

    glob.sync('*', {cwd: path}).forEach(function(option) {
      key = option.replace(/\.js$/,'');
      object[key] = require(path + option);
    });

    return object;
  }

  // Initial config
  var config = {
    pkg: grunt.file.readJSON('package.json'),


    depserve: {
        options: {
            open: '<%= depserveOpenUrl %>'
        }
    },
    concurrent: {
        devmode: {
            tasks: ['watch', 'depserve'],
            options: {
                logConcurrentOutput: true
            }
        }
    }


  };

  // Load tasks from the tasks folder
  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-dep-serve');
  grunt.loadNpmTasks('grunt-concurrent');

  // Load all the tasks options in tasks/options base on the name:
  // watch.js => watch{}
  grunt.util._.extend(config, loadConfig('./tasks/options/'));

  grunt.initConfig(config);

  require('load-grunt-tasks')(grunt);

  // Default Task is basically a rebuild
  grunt.registerTask('default', ['htmlmin', 'sass', 'autoprefixer', 'sassdoc', 'clean']);

  // First run task.
  grunt.registerTask('firstrun', 'Basic first run', function() {
      grunt.config.set('depserveOpenUrl', 'src/index.html');
      grunt.task.run('default');
      grunt.task.run('depserve');
  });
};
