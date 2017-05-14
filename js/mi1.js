/*
* @Author: Administrator
* @Date:   2017-05-01 20:13:03
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-01 20:36:51
*/

'use strict';
function $(selector,ranger=document){
	let sele=typeof selector;
	if (sele == 'string') {
		let select=selector.trim();
		let sel=select.charAt(0)
		if(sel=='.'){
			//获取
			return ranger.getElementsByClassName(select.substring(1));
		}else if(sel == '#'){
			//获取
			return document.getElementById(select.substring(1));
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select)){
			return ranger.getElementsByTagName(select);
		}
	}
	if (sele == 'function') {
		//添加事件
		window.onload=function(){
			selector();
		}
	}
}
