module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        autoprefixer: {
            single: {
                flatten: true,
                src: 'css/styles.css',
                dest: 'css/styles.css'
            }
        },
        cssmin: {
            minify: {
                src: 'css/styles.css',
                dest: 'build/styles.min.css'
            }
        },
        'ftp-deploy': {
            build: {
                auth: {
                    host: 'ftp.precisepixels.co.uk',
                    port: 21,
                    authKey: 'key'
                },
                src: '.',
                dest: '/precisepixels/cell',
                exclusions: ['.git', '.sass-cache', 'css', './img/user', 'js', 'node_modules', 'sass', '.ftppass', '.gitignore', 'Gruntfile.js', 'package.json', 'README.md']
            }
        },
        jshint: {
            all: ['js/*.js'],
            options: {
                camelcase: true,
                curly: true,
                indent: 4,
                noempty: true,
                quotmark: 'single',
                undef: true,
                unused: true,
                trailing: true,
                multistr: true
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/styles.css': 'sass/styles.scss'
                }
            },
            dev: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'sass/',
                    src: ['*.scss', '!_*.scss'],
                    dest: 'css/',
                    ext: '.css'
                }]
            }
        },
        uglify: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'js',
                    src: '*.js',
                    dest: 'build',
                    ext: '.min.js'
                }]
            }
        },
        watch: {
            scripts: {
                files: [
                    'sass/**/*'
                ],
                tasks: ['sass:dev', 'autoprefixer'],
                options: {
                    spawn: false
                }
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ftp-deploy');

    // Register tasks
    grunt.registerTask('default', 'List grunt tasks', function() {
        grunt.log.writeln('\n  grunt sass:watch : watches for Sass changes and adds vendor prefixes\
                           \n  grunt jshint     : runs the JS through jshint\
                           \n  grunt build      : minifies the JS and CSS\
                           \n  grunt ftp        : FTPs the required files to the server');
    });

    grunt.registerTask('sass:watch', ['sass:dev', 'watch']);
    grunt.registerTask('build', ['cssmin', 'uglify']);
    grunt.registerTask('ftp', ['ftp-deploy']);
};