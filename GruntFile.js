module.exports = function(grunt) {
// Import de packages
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-jade');

// Configuration de Grunt
grunt.initConfig({
    jade: {
        options: {
            doctype: 'html',
            pretty: true,
        },
        cours: {
            files: [{
                cwd: 'dev/',
                src: '**/*.jade',
                dest: './',
                expand: true,
                ext: '.html'
            }],
        },
    },
    watch: {
        cours: {
            files: 'dev/**/*.jade',
            tasks: ['jade:cours']
        },
        }
    });

    // Définition des tâches Grunt
    grunt.registerTask('default', ['watch']);

};