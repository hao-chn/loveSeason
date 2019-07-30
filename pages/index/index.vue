<template>

	<view class="time-center" style='background-color: #182f59;text-align: center;height: 100%;'>
		<!-- banner -->
		<view class="page-section swiper" style="padding-top:10vw">
			<view class="page-section-spacing">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
				 :circular='true'>
					<swiper-item v-for="(i,index) in bannerArrer" :key = 'index'>
						<view class="swiper-item">
							<image :src="'../../static/banner/' + i.img + '.jpg'" mode="" width=''></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!-- 计时器 -->
		<ul>
			<li style='background-color: #ef2f3c'><span>Day</span><span>{{time.d | add()}}</span></li>
			<li style='background-color: #f5f4f2'><span>Hour</span><span>{{time.h | add()}}</span></li>
			<li style='background-color: #2770bf'><span>Minute</span><span>{{time.m | add()}}</span></li>
			<li style='background-color: #f0a202'><span>Seconds</span><span>{{time.s | add()}}</span></li>
		</ul>
	</view>

</template>

<script>
	import { uniSwiperDot } from "@dcloudio/uni-ui"
	export default {
		components: {
			uniSwiperDot
		},
		data() {
			return {
				time: {
					d: '',
					h: '',
					m: '',
					s: ''
				},
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 3500,
				duration: 1000,
				
				info: [{
						content: '内容 A'
				}, {
						content: '内容 B'
				}, {
						content: '内容 C'
				}],
				current: 0,
				mode: 'long',
				bannerArrer:[{
					img:'banner1'
				},{
					img:'banner2'
				},{
					img:'banner3'
				},]
			}
		},
		filters: {
			add: function(data) {
				return data >= 10 ? data : '0' + data
			}
		},
		onLoad() {
			setInterval(() => {
				this.fun()
			}, 1000);

		},
		methods: {
			fun() {
				let presentTime = new Date();
				let endTime = new Date("2016/12/15");
				let T = parseInt((presentTime - endTime) / 1000);
				this.time.s = T % 60;
				this.time.m = parseInt(T / 60) % 60;
				this.time.h = parseInt(T / 3600) % 24;
				this.time.d = parseInt(T / (3600 * 24));
			},
			 change(e) {
					this.current = e.detail.current;
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}


	li {
		list-style: none;
	}

	.time-center ul {
		width: 90%;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		padding-top: 125rpx;
	}

	.time-center li {
		padding: 10rpx 5rpx;
		width: 85%;
		font-size: 14rpx;
		font-family: "楷书";
		border-radius: 20rpx;
	}

	ul li span:nth-child(1) {
		margin-top: 5rpx;
		font-size: 24rpx;
	}

	ul li span:nth-child(2) {
		display: block;
		font-size: 60rpx;
	}

	nav {
		font-size: 88rpx;
		color: aliceblue;
		font-family: "楷书";
		padding: 200rpx 0 50rpx;
	}

	footer {
		color: #ccc;
		font-size: 60rpx;
		margin-top: 20rpx;
	}
</style>
