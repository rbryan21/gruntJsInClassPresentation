/* 

    An example Gruntfile 

*/

// Node.js convention to make something accesible like a "public" method
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
              // What do you what the CSS to look like within the file?
              outputStyle : 'compressed'
          },
          iCanBeNamedAnything : {
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
              // What files do we want to watch?
              files : ['sass/*.scss', 'site/js/*.js', 'site/index.html'],
              // Run these tasks again when the above files are modified
              tasks : ['concat', 'sass'] 
          }
      }
  });

  // Load the plugin that provide the "concat", "sass", and "watch" tasks. 
  //                    &
  // npm install grunt-contrib-concat --save-dev
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s)
  //    - Automatically run when you enter 'grunt' in command line
  // Otherwise run a task with grunt 'taskName'
  grunt.registerTask('default', ['concat', 'sass', 'watch']);
};


