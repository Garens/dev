module.exports = function(grunt) {
  //配置参数
  grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),
     concat: {    //合并js代码
         options: {
             separator: ';',
             stripBanners: true
         },
         dist: {
            expand: true,
            cwd: './',
             src: [
                 "dist/admin/**/*.js"
             ],
             dest: "assets",
             ext:'.js'
         }
     },
     uglify: {    //压缩js代码，并生成source map文件
         options: {
         },
         dist: {
            expand: true,
            cwd: './',
             src: [
                 "dist/admin/**/*.js"
             ],
             dest: "assets",
             ext:'.js'
         }
     },
     cssmin: {
         options: {
             keepSpecialComments: 0
         },
         compress: {
             files: {
                 'assets/css/default.css': [
                     "css/global.css",
                     "css/pops.css",
                     "css/index.css"
                 ]
             }
         }
     }
  });

  //载入concat和uglify插件，分别对于合并和压缩
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  //注册任务
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
}
