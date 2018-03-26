import Toast from './Toast'

export default {
	/**
	 * 每个插件都有的install方法，用于安装插件
	 * @param {Object} Vue                  Vue类
	 * @param {Object} defaultOptions       插件安装配置
	 * @param {Number} defaultOptions.delay 延迟消失时间
	 * @param {Object} defaultOptions.style 样式
	 * @return {undefined} undefined
	 */
	install (Vue, defaultOptions = {}) {
		const ToastConstructor = Vue.extend(Toast)
		let toastVm = null

		/**
		 * toast
		 * @param  {String} message 提示信息
		 * @param  {Object} options 插件安装配置（同defaultOptions）
		 * @return {undefined} undefined
		 */
		function toast (message = '', options = {}) {
			options = Object.assign(defaultOptions, options)
			options.parent = options.parent || 'body'
			options.message = message || options.message || ''

			if (!toastVm) {
				toastVm = new ToastConstructor()
				toastVm.$mount()
				document.querySelector(options.parent).appendChild(toastVm.$el)
			}

			Object.assign(toastVm, options)
			toastVm.toggleShow(true)
		}

		toast.hide = () => {
			toastVm.toggleShow()
		}

		Vue.prototype.$toast = toast
	}
}
