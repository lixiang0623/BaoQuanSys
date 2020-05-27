var Gulp=require("gulp"),Gutil=require("gulp-util"),Uglify=require("gulp-uglify"),Concat=require("gulp-concat"),Fs=require("fs-extra"),Path=require("path"),Request=require("request"),Babel=require("gulp-babel"),Replace=require("gulp-replace"),Rename=require("gulp-rename"),RemoveLog=require("gulp-remove-logging"),Optimize=require("gulp-optimize-js"),Exec=require("sync-exec"),Color=require("cli-color"),error=Color.red.bold,warn=Color.yellow,notice=Color.blue,rootPath=process.cwd(),srcPath=Path.join(rootPath,"./src"),babelPath=Path.join(rootPath,"./babel"),docsPath=Path.join(rootPath,"./docs"),docsBackupPath=Path.join(rootPath,"./_docs"),distPath=Path.join(rootPath,"./dist"),tnpmLibPath=Path.join(rootPath,"./lib"),testPath=Path.join(rootPath,"./test"),vendorPath=Path.join(rootPath,"./vendor"),openDocsPath=Path.join(rootPath,"../open-nebula/docs/alipayjsapi"),openDocsDistPath=Path.join(rootPath,"../open-nebula/dist/alipayjsapi"),packageConfig=Fs.readJsonSync(Path.join(rootPath,"./package.json")),verPlaceholder="{%ALIPAYJSAPI_VERSION%}",jsPlaceholder="{%ALIPAYJSAPI_JS_FILE%}",incMarkerPlaceholder="{%ALIPAYJSAPI_INC%}",incMarkerContent='<span style="padding:1px 3px;margin:1px 3px;border-radius:2px;background:#0ae;font-size:10px;color:#fff;">inc</span>',incPlaceHolder=/\/\*<<< inc >>>\*\/[\S\s]+?\/\*<<< endinc >>>\*\//gm,swPlaceHolder=/\/\*<<< sw >>>\*\/[\S\s]+?\/\*<<< endsw >>>\*\//,bizPlaceHolder=/\/\*<<< biz >>>\*\/[\S\s]+?\/\*<<< endbiz >>>\*\//,promisePlaceHolder=/\/\*<<< promise >>>\*\/[\S\s]+?\/\*<<< endpromise >>>\*\//,debugPlaceholder="{%ALIPAYJSAPI_ENABLE_DEBUG%}",siteJSPath="https://a.alipayobjects.com/g/h5-lib/alipayjsapi/"+packageConfig.version+"/alipayjsapi.inc.min.js",myappJSPath="https://a.alipayobjects.com/g/h5-lib/alipayjsapi/"+packageConfig.version+"/alipayjsapi.min.js",localJSName="alipayjsapi.inc.js",debugSnippet="<script>ap.enableDebug(true);<\/script>";const env=process.env.NODE_ENV,isOnline=!("online"!==env);var timeoutId;function copyDevJS(){"dev"===env&&(clearTimeout(timeoutId),timeoutId=setTimeout(()=>{Gulp.src(distPath+"/*.js").pipe(Gulp.dest(openDocsDistPath))},1e3))}function swallowError(e){console.log(warn(e.toString())),this.emit("end")}console.log("is online: "+isOnline),Gulp.task("src:babel:optimize",["dist:remove"],function(){return Gulp.src(srcPath+"/main.js").on("error",swallowError).pipe(Babel({plugins:[[Path.resolve(__dirname,"./scripts/optimize-plugin.js")]]})).pipe(Rename("main_optimized.js")).pipe(Gulp.dest(srcPath))}),Gulp.task("src:babel",["src:babel:optimize"],function(){return Gulp.src(srcPath+"/*.js").on("error",swallowError).pipe(Replace(verPlaceholder,packageConfig.version)).pipe(isOnline?RemoveLog({namespace:["_sw_"],methods:["log"]}):Gutil.noop()).pipe(Babel({presets:[["es2015",{modules:!1}]]})).pipe(Gulp.dest(babelPath))}),Gulp.task("dist:output",["src:babel"],()=>Gulp.src(babelPath+"/main.js").on("error",swallowError).pipe(Rename("alipayjsapi.inc.js")).pipe(Gulp.dest(distPath)).pipe(Gulp.dest(tnpmLibPath)).pipe(Replace(incPlaceHolder,"")).pipe(Rename("alipayjsapi.js")).pipe(Gulp.dest(distPath)).pipe(Gulp.dest(tnpmLibPath))),Gulp.task("dist:output:optimize",["src:babel"],()=>Gulp.src(babelPath+"/main_optimized.js").on("error",swallowError).pipe(Rename("alipayjsapi.optimize.inc.js")).pipe(Gulp.dest(distPath)).pipe(Gulp.dest(tnpmLibPath)).pipe(Replace(incPlaceHolder,"")).pipe(Rename("alipayjsapi.optimize.js")).pipe(Gulp.dest(distPath)).pipe(Gulp.dest(tnpmLibPath))),Gulp.task("dist:sw",["dist:output","dist:output:optimize"],function(){const e=Fs.readFileSync(Path.join(babelPath,"./worker.js"),"utf8"),t=Fs.readFileSync(Path.join(babelPath,"./biz.js"),"utf8");return Gulp.src(distPath+"/*.js").on("error",swallowError).pipe(Replace(swPlaceHolder,e)).pipe(Replace(bizPlaceHolder,t)).pipe(Rename({suffix:".sw"})).pipe(Gulp.dest(tnpmLibPath))}),Gulp.task("dist:promise",["dist:sw"],function(){const e=Fs.readFileSync(Path.join(vendorPath,"./es6-promise.auto.js"),"utf8");return Gulp.src(distPath+"/*.js").on("error",swallowError).pipe(Replace(promisePlaceHolder,e)).pipe(Gulp.dest(distPath))}),Gulp.task("dist:others",["dist:promise"],function(){return Gulp.src(tnpmLibPath+"/*.sw.js").on("error",swallowError).pipe(Gulp.dest(distPath))}),Gulp.task("dist:min",["dist:others"],function(){return Gulp.src(distPath+"/*.js").on("error",swallowError).pipe(Uglify()).pipe(Rename({suffix:".min"})).pipe(Gulp.dest(distPath))}),Gulp.task("dist:remove",function(){Fs.existsSync(distPath)&&Fs.removeSync(distPath)}),Gulp.task("src:build",["dist:min"],function(){copyDevJS()}),Gulp.task("doc:build",function(){var e={dev:"/alipayjsapi/"+localJSName,myapp:myappJSPath,online:siteJSPath}[env],t={dev:debugSnippet,online:""}[env];Gulp.src(docsPath+"/**/*").pipe(Replace(verPlaceholder,packageConfig.version)).pipe(Replace(jsPlaceholder,e)).pipe(Replace(incMarkerPlaceholder,incMarkerContent)).pipe(Replace(debugPlaceholder,t)).pipe(Gulp.dest(openDocsPath)).pipe(Gulp.dest(docsBackupPath)),copyDevJS()}),Gulp.task("doc:remove",function(){Fs.existsSync(openDocsPath)&&Fs.removeSync(openDocsPath)}),Gulp.task("doc:publish",["doc:remove","doc:build"]),Gulp.task("test:build",function(){var e={dev:"../../dist/"+localJSName,myapp:myappJSPath,online:siteJSPath}[env],t={dev:debugSnippet,online:""}[env];Gulp.src(testPath+"/src/**/*").pipe(Replace(verPlaceholder,packageConfig.version)).pipe(Replace(jsPlaceholder,e)).pipe(Replace(debugPlaceholder,t)).pipe(Gulp.dest(testPath+"/dist"))}),Gulp.task("tnpm:publish",function(){var e=Exec("tnpm publish");e.stdout&&console.log(e.stdout),e.stderr&&console.error(e.stderr)}),Gulp.task("tnpm:publish-beta",function(){var e=Exec("tnpm publish --tag beta");e.stdout&&console.log(e.stdout),e.stderr&&console.error(e.stderr)}),Gulp.task("deploy",["doc:remove","src:build","doc:build","test:build"],function(){var e=packageConfig.version,t=Exec("git branch | grep \\* | cut -d ' ' -f2");if(t.stdout){var i=t.stdout.replace("\n","");if("master"!==i)return void console.error(error(`注意：当前在 ${i} 分支，请切换到 master 分支合并后再发布！`))}var a=Exec("git add ."+` && git commit -am "online ${e}"`+" && git push origin"+` && git tag ${e}`+` && git push origin ${e}`+" && tnpm publish && qtdeploy all");a.stdout&&console.log(a.stdout),a.stderr&&console.error(a.stderr)}),Gulp.task("src:watch",["src:build"],function(){Gulp.watch([srcPath+"/*.js"],["src:build"])}),Gulp.task("doc:watch",["doc:build"],function(){Gulp.watch([docsPath+"/**/*"],["doc:build"])}),Gulp.task("test:watch",["test:build"],function(){Gulp.watch([testPath+"/src/**/*"],["test:build"])}),Gulp.task("watch",["src:watch","doc:watch","test:watch"]),Gulp.task("default",["src:build","doc:build","test:build"]);