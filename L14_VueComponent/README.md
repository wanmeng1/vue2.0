1.单文件组件
	1.三个部分组成
		1.Template
			只能存在一个根元素
		2.Script
		3.Style
			scoped:样式只在当前组件内生效
	2.子父级组件交互(通信)
		父 -> 子：props
			数据传递类型限制(验证)
			数据类型验证
			多数据类型验证
			必选项
			默认值
			obj、arr数据类型的默认值
		子 -> 父：emit Event
	3.插槽
		单个插槽
		具名插槽
		作用域插槽:数据是子传父
			注意：在2.5.0之前，必须使用到template身上
	4.动态组件
		keep-alive
		什么情况下使用缓存：

2.CSS过渡与动画
	在 CSS 过渡和动画中自动应用 class
		过渡类名：
			v-enter：进入开始
			v-enter-active：执行过程中
			v-enter-to：结束动画
			v-leave：离开开始
			v-leave-active：离开过程
			v-leave-to：离开结束
		动画：

	可以配合使用第三方 CSS 动画库，如 Animate.css

3.自定义指令
	1.全局指令
	2.局部指令
		

