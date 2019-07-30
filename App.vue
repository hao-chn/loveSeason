

<script>
	export default {
		data(){
			return{
				txt:''
			}
		},
		onLaunch: function() {
			switch(uni.getSystemInfoSync().platform){
				case 'android':
					 console.log('运行Android上')
					 break;
				case 'ios':
					 console.log('运行iOS上')
					 break;
				default:
					 console.log('运行在开发者工具上')
					 break;
				};
			console.log('App Launch')
			let Hour = new Date().getHours(); 
			switch (true){
				case Hour>=23 && Hour<=5:
					this.txt = '夜深了，注意身体！'
					break;
				case Hour>=6 && Hour<=9:
					this.txt = '早上好,一日之计在于晨'
					break;
				case Hour>=10 && Hour<=12 :
					this.txt = '上午好，努力奋斗每一天！'
					break;
				case Hour>=13 && Hour<=18:
					this.txt = '下午好，要注意劳逸结合。'
					break;
				case Hour>=19 && Hour<=22:
					this.txt = '晚上好，辛苦一天了，记得早点休息'	
					break;
				default:
					break;
			}
			
			
		},
		onShow: function() {
			uni.showToast({
				title: this.txt,
				position:'bottom',
				duration:1200
			})
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>



<style>
	/*每个页面公共css */
	@import './common/uni.css';
	html,body{

		height: 100%;

	}
	* {
		margin: 0;
		padding: 0;
	}
	li{
		list-style: none;
	}
</style>
