/*
* @Author: Administrator
* @Date:   2017-05-01 22:14:53
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-08 21:21:13
*/

'use strict';
$(function(){
		let text=$('.text')[0];
        let lis=$('.hoverli');
        let navmenu=$('.navmenu')[0];
        let uls=$('ul',navmenu);
        let navcontainer=$('.navcontainer')[0];

        for(let i=0;i<lis.length;i++){
            lis[i].onmouseenter=function () {
                for(let j=0;j<uls.length;j++){
                    uls[j].className='navphone hidden';
                }
                navcontainer.style.height=230+'px';
                navcontainer.style.borderTop='1px solid #e3e3e3'
                uls[i].className='navphone show';
                lis[i].onmouseleave=function () {
                    navcontainer.style.height=0+'px';
                    navcontainer.style.borderTop='none';
                }
            }
        }
        navcontainer.onmouseenter=function () {
            navcontainer.style.height=230+'px';
            navcontainer.style.borderTop='1px solid #e3e3e3'
        }
    navcontainer.onmouseleave=function () {
        navcontainer.style.height=0+'px';
        navcontainer.style.borderTop='none';

    }
        // text.onmouseenter=function () {
        //      navcontainer.style.height='230px';
        //
        // }
        // text.onmouseleave=function () {
        //      navcontainer.style.height='0';
        //
        // }

        let categoryli=document.getElementsByClassName('childrenlist1');
        let childerenlistcol1=document.getElementsByClassName('childrenlist-col-1');
        let childerenlistcol2=document.getElementsByClassName('childrenlist-col-2');
        let childerenlistcol3=document.getElementsByClassName('childrenlist-col-3');
        /*for (let i = 0; i < categoryli.length; i++) {
          categoryli[i].onmouseover=function(){
          // categoryli[i].style.background='#FF6700';
          categoryli[i].style.background='#ff6700';
          childerenlistcol1[0].className='childrenlist-col-1 show';
          childerenlistcol2[0].className='childrenlist-col-2 show';
          childerenlistcol3[0].className='childrenlist-col-3 show';
        }
         categoryli[i].onmouseout=function(){
          categoryli[i].style.background='#5A524A';
          childerenlistcol1[0].className='childrenlist-col-1 hidden';
          childerenlistcol2[0].className='childrenlist-col-2 hidden';
          childerenlistcol3[0].className='childrenlist-col-3 hidden';
          // categoryli[i].style.background='#5A524A';
        }
        }*/
        let banner=$('.banner')[0];
        let imgs=$('img',banner);
        let circle=$('.circle')[0];
        let circles=$('li',circle);
        let index=0;
		let t=setInterval(move,4000);
        let btnl=$('.btnl')[0];
        let btnr=$('.btnr')[0];
        banner.onmouseover=function(){
        	clearInterval(t);
        }
        banner.onmouseout=function(){
        	t=setInterval(move,4000);
        }
        btnl.onclick=function(){
        	move();
        }
        btnr.onclick=function(){
        	moveDown();
        }
        for(let i=0;i<circles.length;i++){
        	circles[i].onclick=function(){
        		for(let j=0;j<circles.length;j++){
        			circles[j].className='';
        			imgs[j].style.display='none';
        		}
        		circles[i].className='hot';
        		imgs[i].style.display='block';
        		index=i;
        	}
        	

        }
        function move(){
			index++;
			if(index==circles.length){
				index=0;
			}
			for (let j = 0; j < circles.length; j++) {
				imgs[j].style.display='none';
				circles[j].className='';
			}
			imgs[index].style.display='block';
			circles[index].className='hot';
		}
		function moveDown(){
			index--;
			if(index<0){
				index=circles.length-1;
			}
			for (let j = 0; j < circles.length; j++) {
				imgs[j].style.display='none';
				circles[j].className='';
			}
			imgs[index].style.display='block';
			circles[index].className='hot';
		}
		//明星单品轮播
        let mingxing=$('.mingxing')[0];
        let mingxing1=$('.mingxing')[1];
        let mxt;
        let controls=$('.controls')[0];
        let controls1=$('.controls')[1];
        let controla=$('a',controls);
        let controla1=$('a',controls1);
        let left=$('i',controla[0]);
        let right=$('i',controla[1]);
        let lefts=$('i',controla1[0]);
        let rights=$('i',controla1[1]);
        let xmControls=$('.xm-controls');
        let conprev=$('.control-prev',xmControls[0])[0];
        let connext=$('.control-next',xmControls[0])[0];
        let itemList=$('.item-list')[0];
        let itemListli=$('li',itemList);
        let widths=itemListli[0].offsetWidth;
        let current=0,next=0;
        let xmPagers=$('.xm-pagers');
        let dot=$('li',xmPagers[0]);
        mxt=setInterval(mxMove1,4000);
        let num=0,num1=0,num2=0,num3=0;
        let conprev1=$('.control-prev',xmControls[1])[0];
        let connext1=$('.control-next',xmControls[1])[0];
        let itemList1=$('.item-list')[1];
        let itemListli1=$('li',itemList1);
        let dot1=$('li',xmPagers[1]);
        let conprev2=$('.control-prev',xmControls[2])[0];
        let connext2=$('.control-next',xmControls[2])[0];
        let itemList2=$('.item-list')[2];
        let itemListli2=$('li',itemList2);
        let dot2=$('li',xmPagers[2]);
        let conprev3=$('.control-prev',xmControls[3])[0];
        let connext3=$('.control-next',xmControls[3])[0];
        let itemList3=$('.item-list')[3];
        let itemListli3=$('li',itemList3);
        let dot3=$('li',xmPagers[3]);


        function mxMove1() {
            next++;
            if(next==controla.length){
                next=0;
            }
            if(current<next){
                left[0].className='iconfont icon-iconfontjiantou3 left1 show';
                left[1].className='iconfont icon-iconfontjiantou3 left2 hidden';
                right[0].className='iconfont icon-jiantouyou right1 hidden';
                right[1].className='iconfont icon-jiantouyou right2 show';

                mingxing.style.marginLeft='-1240px';
            }
            if(current>next){
                left[0].className='iconfont icon-iconfontjiantou3 left1 hidden';
                left[1].className='iconfont icon-iconfontjiantou3 left2 show';
                right[0].className='iconfont icon-jiantouyou right1 show';
                right[1].className='iconfont icon-jiantouyou right2 hidden';

                mingxing.style.marginLeft='0';
            }
            current=next;
        }


        controla[0].onclick=function () {
            if(mingxing.style.marginLeft==0+'px'){
                return;
            }
            if(mingxing.style.marginLeft==-1240+'px'){
                mingxing.style.marginLeft=0+'px';
            }
        }
        controla[1].onclick=function () {
            if(mingxing.style.marginLeft==-1240+'px'){
                return;
            }
            if(mingxing.style.marginLeft==0+'px'){
                mingxing.style.marginLeft=-1240+'px';
            }
        }
        controla[0].onmouseenter=function () {
            clearInterval(mxt);
        }
        controla[0].onmouseleave=function () {
            mxt=setInterval(mxMove1,4000);
        }
        controla[1].onmouseenter=function () {
            clearInterval(mxt);
        }
        controla[1].onmouseleave=function () {
            mxt=setInterval(mxMove1,4000);
        }
    controla1[0].onclick=function () {
        if(mingxing1.style.marginLeft==0+'px'){
            return;
        }
        if(mingxing1.style.marginLeft==-1240+'px'){
            lefts[0].className='iconfont icon-iconfontjiantou3 left1 hidden';
            lefts[1].className='iconfont icon-iconfontjiantou3 left2 show';
            rights[0].className='iconfont icon-jiantouyou right1 show';
            rights[1].className='iconfont icon-jiantouyou right2 hidden';
            mingxing1.style.marginLeft=0+'px';
        }
    }
    controla1[1].onclick=function () {
        if(mingxing1.style.marginLeft==-1240+'px'){
            return;
        }
        if(mingxing1.style.marginLeft==0+'px'){
            lefts[0].className='iconfont icon-iconfontjiantou3 left1 show';
            lefts[1].className='iconfont icon-iconfontjiantou3 left2 hidden';
            rights[0].className='iconfont icon-jiantouyou right1 hidden';
            rights[1].className='iconfont icon-jiantouyou right2 show';
            mingxing1.style.marginLeft=-1240+'px';
        }
    }
    connext.onclick=function(){
            num++;
            if(num>itemListli.length-1){
                num=itemListli.length-1;
            }
            for(let i=0;i<dot.length;i++){
                dot[i].classList.remove('pager-active');
            }
            dot[num].classList.add('pager-active');
            itemList.style.marginLeft=-widths*num+'px';
    }
    conprev.onclick=function () {
            num--;
            if(num<0){
                num=0;
            }
        for(let i=0;i<dot.length;i++){
            dot[i].classList.remove('pager-active');
        }
        dot[num].classList.add('pager-active');
            itemList.style.marginLeft=-widths*num+'px';
    }
    connext1.onclick=function(){
        num1++;
        if(num1>itemListli1.length-1){
            num1=itemListli1.length-1;
        }
        for(let i=0;i<dot1.length;i++){
            dot1[i].classList.remove('pager-active');
        }
        dot1[num1].classList.add('pager-active');
        itemList1.style.marginLeft=-widths*num1+'px';
    }
    conprev1.onclick=function () {
        num1--;
        if(num1<0){
            num1=0;
        }
        for(let i=0;i<dot1.length;i++){
            dot1[i].classList.remove('pager-active');
        }
        dot1[num1].classList.add('pager-active');
        itemList1.style.marginLeft=-widths*num1+'px';
    }
    connext2.onclick=function(){
        num2++;
        if(num2>itemListli2.length-1){
            num2=itemListli2.length-1;
        }
        for(let i=0;i<dot2.length;i++){
            dot2[i].classList.remove('pager-active');
        }
        dot2[num2].classList.add('pager-active');
        itemList2.style.marginLeft=-widths*num2+'px';
    }
    conprev2.onclick=function () {
        num2--;
        if(num2<0){
            num2=0;
        }
        for(let i=0;i<dot2.length;i++){
            dot2[i].classList.remove('pager-active');
        }
        dot2[num2].classList.add('pager-active');
        itemList2.style.marginLeft=-widths*num2+'px';
    }
    connext3.onclick=function(){
        num3++;
        if(num3>itemListli3.length-1){
            num3=itemListli3.length-1;
        }
        for(let i=0;i<dot3.length;i++){
            dot3[i].classList.remove('pager-active');
        }
        dot3[num3].classList.add('pager-active');
        itemList3.style.marginLeft=-widths*num3+'px';
    }
    conprev3.onclick=function () {
        num3--;
        if(num3<0){
            num3=0;
        }
        for(let i=0;i<dot3.length;i++){
            dot3[i].classList.remove('pager-active');
        }
        dot3[num3].classList.add('pager-active');
        itemList3.style.marginLeft=-widths*num3+'px';
    }
    // hover变内容
    let tabList=$('.tab-list');
    let tabListli=$('li',tabList[0]);
    let brickList=$('.brick-list')[0];
    let brickList2=$('.brick-list2',brickList);
    let list=$('.list');
    let brickList22=$('.brick-list2',list[0]);
    let tabListli1=$('li',tabList[1]);
    let brickList23=$('.brick-list2',list[1]);
    let tabListli2=$('li',tabList[2]);
    let brickList24=$('.brick-list2',list[2]);
    let tabListli3=$('li',tabList[3]);
    for(let i=0;i<tabListli.length;i++){
        tabListli[i].onmouseenter=function () {
            for(let j=0;j<tabListli.length;j++){
                tabListli[j].className='';
                brickList2[j].classList.add('hidden');
            }
            tabListli[i].className='tab-active';
            brickList2[i].classList.remove('hidden');
        }
        tabListli[i].onmouseout=function () {
            for(let j=0;j<tabListli.length;j++){
                tabListli[j].className='';
                brickList2[j].classList.add('hidden');
            }
            tabListli[i].className='tab-active';
            brickList2[i].classList.remove('hidden');
        }
    }
    for(let i=0;i<tabListli1.length;i++){
        tabListli1[i].onmouseenter=function () {
            for(let j=0;j<tabListli1.length;j++){
                tabListli1[j].className='';
                brickList22[j].classList.add('hidden');
            }
            tabListli1[i].className='tab-active';
            brickList22[i].classList.remove('hidden');
        }
        tabListli1[i].onmouseout=function () {
            for(let j=0;j<tabListli1.length;j++){
                tabListli1[j].className='';
                brickList22[j].classList.add('hidden');
            }
            tabListli1[i].className='tab-active';
            brickList22[i].classList.remove('hidden');
        }
    }
    for(let i=0;i<tabListli2.length;i++){
        tabListli2[i].onmouseenter=function () {
            for(let j=0;j<tabListli2.length;j++){
                tabListli2[j].className='';
                brickList23[j].classList.add('hidden');
            }
            tabListli2[i].className='tab-active';
            brickList23[i].classList.remove('hidden');
        }
        tabListli2[i].onmouseout=function () {
            for(let j=0;j<tabListli2.length;j++){
                tabListli2[j].className='';
                brickList23[j].classList.add('hidden');
            }
            tabListli2[i].className='tab-active';
            brickList23[i].classList.remove('hidden');
        }
    }
    for(let i=0;i<tabListli3.length;i++){
        tabListli3[i].onmouseenter=function () {
            for(let j=0;j<tabListli3.length;j++){
                tabListli3[j].className='';
                brickList24[j].classList.add('hidden');
            }
            tabListli3[i].className='tab-active';
            brickList24[i].classList.remove('hidden');
        }
        tabListli3[i].onmouseout=function () {
            for(let j=0;j<tabListli3.length;j++){
                tabListli3[j].className='';
                brickList24[j].classList.add('hidden');
            }
            tabListli3[i].className='tab-active';
            brickList24[i].classList.remove('hidden');
        }
    }





})