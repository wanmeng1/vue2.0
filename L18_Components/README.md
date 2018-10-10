1.安装element-ui
	npm i element-ui -S

2.安装按需加载的依赖
	npm install babel-plugin-component -D

3.修改.babelrc文件
	{
	  "presets": [
	    ["env", {
	      "modules": false,
	      "targets": {
	        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
	      }
	    }],
	    "stage-2"
	  ],
	  "plugins": ["transform-vue-jsx", "transform-runtime",["component", [
	    {
	      "libraryName": "element-ui",
	      "styleLibraryName": "theme-chalk"
	    }
	  ]]]
	}

4.进入组件
	import { Button } from 'element-ui'
	Vue.use(Button)
5.swiper
  安装 https://github.com/surmon-china/vue-awesome-swiper
  swiper 官网
6.lazyload
  安装使用 https://github.com/hilongjw/vue-lazyload
  npm install vue-lazyload -D
7.rem less
  安装less less-loader style-loader css-loader
  npm install --save-dev less less-loader style-loader css-loader
  修改webpack.base.conf.js
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      }
  index.html里添加内容
   <script>
       (function (doc, win) {
            var docEl = doc.documentElement,
                    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                    recalc = function () {
                        var clientWidth = docEl.clientWidth;
                        console.log('clientWidth:',clientWidth)
                        if (!clientWidth) return;
                        if(clientWidth>=750){
                            docEl.style.fontSize = '100px';
                        }else{
                            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                        }
                    };

            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);
    </script>

  样式：
  // 200px*300px
  .box{
  	width: 200 / 50rem; //
  	height: 300 / 50rem;
  	background: red;
  	font-size: 16 / 50rem;
  }






