'use strict';

module.exports = function(grunt) {
	
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
  	concat: {
  	  options: {
  	    // define a string to put between each file in the concatenated output
  	    separator: ';'
  	  },
  	  dist: {
  	    // the files to concatenate
  	    src: ['app/**/*.js'],
  	    // the location of the resulting JS file
  	    dest: 'dist/<%= pkg.name %>.js'
  	  }
	  },
  	uglify: {
  	  options: {},
  	  dist: {
  	    files: {
  	      'dist/scripts/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
  	    }
  	  }
  	},
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish'),
        globals: {
            jQuery: true,
            console: true,
            module: true
        }
      },
      all: {
        src: [
          'Gruntfile.js',
          'app/**/*.js'
        ]
      }
    },
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['app/scripts/{,*/}*.js'],
        tasks: ['jshint:all'],
        options: {
          livereload: 'true'
        }
      },
      styles: {
        files: ['app/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer'],
        options: {
          livereload: 'true'
        }
      },
      gruntfile: {
        files: ['Gruntfile.js'],
        options: {
          livereload: 'true'
        }
      }
    },
    // The actual grunt server settings
    connect: {
      options: {
        port: 8000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: '0.0.0.0',
        livereload: 35728,
        app: "firefox"
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect().use(
                '/app/styles',
                connect.static('./app/styles')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: 'dist'
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            'dist/{,*/}*',
            '!dist/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      server: {
        options: {
          map: true,
        },
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      } 
    },
    cssmin: {
      dist: {
        files: {
          'dist/styles/main.css': [
            'app/styles/{,*/}*.css'
          ]
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true
        },
        files: {
          'dist/index.html': 'app/index.html',
          'dist/views/views.html': [
            'app/views/agegrade.html',
            'app/views/bmi.html',
            'app/views/pacecalc.html'
          ],
          'dist/views/directives.html': [
            'app/views/calcdir.html',
            'app/views/calcoutputdir.html',
            'app/views/calctitledir.html',
            'app/views/tabdir.html',
          ]
        }
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'app/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: 'dist/images'
        }]
      }
    },
    useminPrepare: {
      html: 'app/index.html',
      options: {
        dest: 'dist',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },
    usemin: {
      html: ['dist/{,*/}*.html'],
      css: ['dist/styles/{,*/}*.css'],
      js: ['dist/scripts/{,*/}*.js'],
      options: {
        assetsDirs: [
          'dist',
          'dist/images',
          'dist/styles'
        ],
        patterns: {
          js: [[/(images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']]
        }
      }
    }
  });

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:livereload:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'autoprefixer:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'autoprefixer',
    'concat',
    'cssmin',
    'uglify',
    'htmlmin',
    'imagemin',
    'usemin',
  ]);

  grunt.registerTask('default', [
    'jshint',
    'build'
  ]);

}; 
