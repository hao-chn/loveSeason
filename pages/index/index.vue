<template>
	<view class="time-center" style="background-color: #182f59;text-align: center;height: 100%;">
		<!-- banner -->
		<view class="page-section swiper" style="padding-top:10vw">
			<view class="page-section-spacing">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="true">
					<swiper-item v-for="(i, index) in bannerArrer" :key="index">
						<view class="swiper-item"><image :src="'../../static/banner/' + i.img + '.jpg'" :mode="i.mode" width=""></image></view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!-- 计时器 -->
		<ul>
			<li style="background-color: #ef2f3c">
				<span>Day</span>
				<span>{{ time.d | add() }}</span>
			</li>
			<li style="background-color: #f5f4f2">
				<span>Hour</span>
				<span>{{ time.h | add() }}</span>
			</li>
			<li style="background-color: #2770bf">
				<span>Minute</span>
				<span>{{ time.m | add() }}</span>
			</li>
			<li style="background-color: #f0a202">
				<span>Seconds</span>
				<span>{{ time.s | add() }}</span>
			</li>
		</ul>

		<view class="graduateount" style="margin: 40rpx 0 40rpx;">
			<h3 style='text-align: center;font-size: 36rpx;color: #ccc;'>灰心生失望，失望生动摇，动摇生失败。</h3>
			<ul style='font-size: 24rpx;color: #fff;'>
				<li>{{ graduateount.d | add() }}</li>
				<li>{{ graduateount.h | add() }}</li>
				<li>{{ graduateount.m | add() }}</li>
				<li>{{ graduateount.s | add() }}</li>
			</ul>
		</view>
	</view>
</template>

<script>
import { uniSwiperDot } from '@dcloudio/uni-ui';
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
			graduateount:{
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

			info: [
				{
					content: '内容 A'
				},
				{
					content: '内容 B'
				},
				{
					content: '内容 C'
				}
			],
			current: 0,
			mode: 'long',
			bannerArrer: [
				{
					img: 'banner1',
					mode: 'aspectFit'
				},
				{
					img: 'banner2',
					mode: 'aspectFit'
				},
				{
					img: 'banner3',
					mode: 'aspectFit'
				}
			]
		};
	},
	filters: {
		add: function(data) {
			return data >= 10 ? data : '0' + data;
		}
	},
	onLoad() {
		setInterval(() => {
			this.fun();
			this.fun1()
		}, 1000);
		// 定位
		navigator.geolocation.getCurrentPosition(
			position => {
				let lat = '';
				let log = '';
				lat = position.coords.latitude; //纬度
				log = position.coords.longitude; //经度
				console.log('纬度:' + lat + ',经度:' + log);
				localStorage.setItem(
					'gps',
					JSON.stringify({
						longitude: log,
						latitude: lat,
						address: ''
					})
				);
			},
			error => {
				switch (error.code) {
				    case error.PERMISSION_DENIED:
				        alert("定位失败,拒绝请求地理定位,请退出刷新重试");
				        break;
				    case error.POSITION_UNAVAILABLE:
				        alert("定位失败,位置信息是不可用,请退出刷新重试");
				        break;
				    case error.TIMEOUT:
				        alert("定位失败,请求获取用户位置超时,请退出刷新重试");
				        break;
				    case error.UNKNOWN_ERROR:
				        alert("定位失败,定位系统失效,请退出刷新重试");
				        break;
				}
			},
			{
				enableHighAcuracy: true, // 指示浏览器获取高精度的位置，默认为false
				timeout: 5000, // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
				maximumAge: 3000 // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
			}
		);
	},
	methods: {
		fun() {
			let presentTime = new Date();
			let endTime = new Date('2016/12/15');
			let T = parseInt((presentTime - endTime) / 1000);
			this.time.s = T % 60;
			this.time.m = parseInt(T / 60) % 60;
			this.time.h = parseInt(T / 3600) % 24;
			this.time.d = parseInt(T / (3600 * 24));
		},
		fun1() {
			let presentTime = new Date();
			let endTime = new Date('2019/12/22');
			let T = parseInt((endTime - presentTime ) / 1000);
			this.graduateount.s = T % 60;
			this.graduateount.m = parseInt(T / 60) % 60;
			this.graduateount.h = parseInt(T / 3600) % 24;
			this.graduateount.d = parseInt(T / (3600 * 24));
		},
		
		
		
		getCommon(presentTime,endTime){
			let p = presentTime || new Date();
			let e = new Date('2019/12/22');
			let s,m,h,d;
			let T = parseInt((e - p ) / 1000);
			s = T % 60;
			m = parseInt(T / 60) % 60;
			h = parseInt(T / 3600) % 24;
			d = parseInt(T / (3600 * 24));
			
			
			
		},
		change(e) {
			this.current = e.detail.current;
		}
	}
};
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
	font-family: '楷书';
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
	font-family: '楷书';
	padding: 200rpx 0 50rpx;
}

footer {
	color: #ccc;
	font-size: 60rpx;
	margin-top: 20rpx;
}

.graduateount li{
	font-size: 44rpx;
}
</style>
