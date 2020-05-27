var postcss=require("postcss"),loaderUtils=require("loader-utils"),loadPostcssConfig=require("postcss-load-config"),selectorParser=require("postcss-selector-parser"),addId=postcss.plugin("add-id",function(s){return function(e){e.each(function e(t){t.selector?t.selector=selectorParser(function(e){e.each(function(e){var t=null;e.each(function(s){"pseudo"!==s.type&&(t=s)}),e.insertAfter(t,selectorParser.attribute({attribute:s.id}))})}).process(t.selector).result:"atrule"===t.type&&"media"===t.name&&t.each(e)})}}),trim=postcss.plugin("trim",function(s){return function(s){s.walk(function(s){"rule"!==s.type&&"atrule"!==s.type||(s.raws.before=s.raws.after="\n")})}});function isObject(s){return s&&"object"==typeof s}module.exports=function(s,e){this.cacheable();var t=this.async(),o=loaderUtils.getOptions(this)||{},n=this.options.__vueOptions__;n||(o.hasInlineConfig&&this.emitError("\n  [vue-loader] It seems you are using HappyPack with inline postcss options for vue-loader. This is not supported because loaders running in different threads cannot share non-serializable options. It is recommended to use a postcss config file instead.\n\n  See http://vue-loader.vuejs.org/en/features/postcss.html#using-a-config-file for more details.\n"),n=Object.assign({},this.options.vue,this.vue)),loadPostcssConfig({webpack:this},null,{argv:!1}).catch(()=>{}).then(i=>{var r,a,c=n.postcss;"function"==typeof c&&(c=c.call(this,this)),Array.isArray(c)?r=c:isObject(c)&&(r=c.plugins,a=c.options),r=[trim].concat(r||[]),a=Object.assign({to:this.resourcePath,from:this.resourcePath,map:!1},a),i&&i.plugins&&(r=r.concat(i.plugins)),i&&i.options&&(a=Object.assign({},i.options,a)),o.scoped&&r.push(addId({id:o.id})),!this.sourceMap||this.minimize||!1===n.cssSourceMap||"production"===process.env.NODE_ENV||a.map||(a.map={inline:!1,annotation:!1,prev:e}),postcss(r).process(s,a).then(function(s){var e=s.map&&s.map.toJSON();return t(null,s.css,e),null}).catch(function(s){console.log(s),t(s)})})};