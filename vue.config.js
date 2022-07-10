const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack:config=>{
    const dir = path.resolve(__dirname,'src/assets/icons')

    config.module
    .rule('svg-sprite')
    .test(/\.svg$/)
    .include.add(dir).end() // 包含 icons 目录
    .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()
    //以下两行为了去掉svg中的fill颜色
    // .use('svgo-loader').loader('svgo-loader')
    // .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]})).end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir) // 其他 svg loader 排除 icons 目录
  }
})
