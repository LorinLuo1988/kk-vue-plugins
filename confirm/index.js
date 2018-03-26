/**
 * 统一确认框插件
 */

export default {
	install (Vue, defaultOptions = {}) {
		Vue.prototype.$confirm = function (options) {
			options.title = options.title || '提示'
			options.content = options.content || '确认该操作？'
			options.onOk = options.onOk || (() => {})
			options.onCancel = options.onCancel || (() => {})
			options.okText = options.okText || '确定'
			options.cancelText = options.cancelText || '取消'
			this.$Modal.confirm(options)
		}

		Vue.prototype.$info = function (options) {
			options.title = options.title || '提示'
			options.content = options.content || ''
			options.onOk = options.onOk || (() => {})
			options.onCancel = options.onCancel || (() => {})
			options.okText = options.okText || '确定'
			this.$Modal.info(options)
		}
	}
}
