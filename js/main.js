'use strict'
{
	const btn = document.getElementById('btn');

	btn.addEventListener('click',()=>{
		// const results = [ '大吉','中吉','凶','末吉'];
		// const results = [ '大吉', '大吉', '大吉', '大吉','凶'];
		const n = Math.random();

		let str = null;
		if (n < 0.05){
			str = '大吉';
		} else if(n > 0.2){
			str = '中吉';
		} else{
			str = '凶';
		}
		console.log('n:' + n + " 運勢:" + str)
		btn.textContent = str
		// const n = Math.floor(Math.random() * results.length);

		// btn.textContent = results[n];
		// switch(n){
		// 	case 0:
		// 		btn.textContent = '大吉';
		// 		break;
		// 	case 1:
		// 		btn.textContent = '中吉';
		// 		break;
		// 	case 2:
		// 		btn.textContent = '凶';
		// 		break;
		// }
	});
	btn.addEventListener('mousedown',()=>{
		btn.classList.add('pressed');
	});
	btn.addEventListener('mouseup',()=>{
		btn.classList.remove('pressed');
	});



}
