<template>
	<transition :name="transition">
		<div
			class="toast"
			v-show="show"
			:style="style">
			{{ message }}
		</div>
	</transition>
</template>

<script>
	let timer = null

	export default {
		data () {
			return {
				delay: 1800,
				style: {},
				message: '',
				show: false,
				transition: 'fade'
			}
		},
		methods: {
			toggleShow (isShow = false) {
				this.show = isShow

				if (!isShow) {
					return false
				}

				if (timer) {
					clearTimeout(timer)
				}

				timer = setTimeout(this.toggleShow, this.delay)
			}
		}
	}
</script>

<style scoped lang="less">
	.toast {
		box-sizing: border-box;
		position: fixed;
		z-index: 9999;
		top: 50%;
		left: 50%;
		min-width: 200px;
		max-width: 350px;
		padding: 15px;
		transform: translate(-50%, -50%);
		background: rgba(0,0,0,.6);
		color: #fff;
		font-size: 16px;
		text-align: center;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}

  .fade-enter-active,
  .fade-leave-active,
  .fade-transition {
    transition: opacity .5s ease;
  }
  .fade-enter,
  .fade-leave,
  .fade-leave-active {
    opacity: 0;
  }
</style>