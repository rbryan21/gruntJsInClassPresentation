module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      concat : {   // create a task named 'concat'
          options : {  // specify options 
              separator : '\n\n//----------------------------------------------------------\n\n',
          },
          dist : {    // create a job for the task
            src: ['site/js/*.js'],  // grab any js file within the js directory
            dest : 'site/concat/script.js'  // concatenate them within the script.js
          },
      },
      sass : {
          options : {
              outputStyle : 'expanded'
          },
          dist : {
              files : [{
                  src : 'sass/style.scss',
                  dest : 'site/css/style.css'
              }]
          }
      },
      watch : {
          options : {
              spawn : false,
              livereload : true
          },
          scripts : {
              files : ['sass/*.scss', 'site/js/*.js', 'site/index.html'],
              tasks : ['concat', 'sass']
          }
      }
  });

  // Load the plugin that provides the "concat" task. 
  //                    &
  // npm install grunt-contrib-concat --save-dev
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s)
  // Automatically run when you enter 'grunt' in command line
  // Otherwise run a task with grunt 'taskName'
  grunt.registerTask('default', ['concat', 'sass', 'watch']);
};


