module.exports = {
	publicPath: './', //https://cli.vuejs.org/zh/config/#publicpath
  assetsDir: 'static',
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
		proxy: { //如需跨域请求多个域名，在此对象进行扩展即可
			'/api': {
				target: 'http://api.zhuishushenqi.com/',
				ws: true,
        changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
}
