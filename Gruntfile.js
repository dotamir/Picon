/*
     _      __  __   _   ____     _____         _                       _
    / \    |  \/  | (_) |  _ \   | ____|  ___  | |   __ _   _ __ ___   (_)
   / _ \   | |\/| | | | | |_) |  |  _|   / __| | |  / _` | | '_ ` _ \  | |
  / ___ \  | |  | | | | |  _ <   | |___  \__ \ | | | (_| | | | | | | | | |
 /_/   \_\ |_|  |_| |_| |_| \_\  |_____| |___/ |_|  \__,_| |_| |_| |_| |_|

 iAMiR(dot_amir) - Feb 2016
*/

module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'dist/css/main.css': 'static/css/main.scss'
        }
      }
    },
    jade: {
      html: {
        files: {
          './': ['*.jade']
        },
        options: {
          client: false,
          pretty: true
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/js/main.min.js': ['static/js/main.js']
        }
      }
    },
    watch: {
      options: {
        nospawn: true,
        livereload: true
      },
      css: {
        files: 'static/css/sources/*.scss',
        tasks: ['sass'],
      },
      src: {
        files: ['*.jade'],
        tasks: ['jade'],
      },
      scripts: {
        files: 'static/js/*.js',
        tasks: ['uglify'],
      },
    },
    browserSync: {
        dev: {
          bsFiles: {
            src : [
              'dist/css/*.css',
              '*.html'
            ]
          },
          options: {
            watchTask: true,
            server: './'
          }
        }
      },
  });

  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-jade');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['browserSync', 'watch']);
};
