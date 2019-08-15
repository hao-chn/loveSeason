<template>
	<div>
		<h3 style="color:#CCC;margin: 10vw auto;font-size: 80rpx;text-align: center;">空空如也</h3>
		<view class="">
			<uni-card v-if="uniCardList.length" v-for="(v, i) in uniCardList" :key="i" :title="v.title" :thumbnail="v.thumbnail" :extra="v.extra" is-shadow="true" :note="v.note">
				{{ v.msg }}
				<template v-slot:footer>
					<view class="footer-box">
						<view>喜欢</view>
						<view>评论</view>
						<view>分享</view>
					</view>
				</template>
			</uni-card>
			<div v-else>暂无内容</div>
		</view>
		<uni-fab :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical" :direction="direction" @trigger="trigger"></uni-fab>
	</div>
</template>

<script>
import { uniCard } from '@dcloudio/uni-ui/lib/uni-card/uni-card.vue';
import { uniFab } from '@dcloudio/uni-ui/lib/uni-fab/uni-fab.vue';

export default {
	components: { uniCard, uniFab },
	data() {
		return {
			uniCardList: [
				{
					title: '标题',
					thumbnail: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png',
					extra: 'new Date',
					note: '',
					msg: '内容主体'
				},
				{
					title: '标题',
					thumbnail: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png',
					extra: 'new Date',
					note: 'Tips',
					msg: '内容主体'
				}
			],
			// 浮窗按钮
			horizontal: 'right',
			vertical: 'bottom',
			direction: 'vertical',
			pattern: {
				color: '#7A7E83',
				backgroundColor: '#fff',
				selectedColor: '#007AFF',
				buttonColor: '#007AFF'
			},
			content: [
				{
					iconPath: '/static/component.png',
					selectedIconPath: '/static/componentHL.png',
					text: '组件',
					active: false
				},
				{
					iconPath: '/static/api.png',
					selectedIconPath: '/static/apiHL.png',
					text: 'API',
					active: false
				},
				{
					iconPath: '/static/template.png',
					selectedIconPath: '/static/templateHL.png',
					text: '模版',
					active: false
				}
			]
		};
	},
	filters: {},
	onLoad() {},
	methods: {
		trigger(e) {
			console.log(e,'81');
			this.content.map(v => {
				console.log(v,'83')
				v.active = false
			})
			// this.trigger()
			// this.content[e.index].active = !e.item.active;
			uni.showModal({
				title: '提示',
				content: `您${this.content[e.index].active ? '选中了' : '取消了'}${e.item.text}`,
				success: function(res) {
					if (res.confirm) {
						console.log('用户点击确定');
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		}
	}
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
</style>
