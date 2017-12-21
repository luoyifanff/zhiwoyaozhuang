//获取css样式
function getstyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj)[attr];
	}
}

//多属性缓冲运动
function move(obj,json,fn){
	clearInterval(obj.timer);//每次开始运动前先消除上一次定时器
	obj.timer=setInterval(function(){
		var bstop=true;
		for(var attr in json){
			var current=null;
			if(attr=='opacity'){
				current=Math.round(getstyle(obj,attr)*100);
			}else{
				current=parseInt(getstyle(obj,attr));
			}		 
			var speed=(json[attr]-current)/5;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(current!=json[attr]){
				if(attr=='opacity'){
					obj.style.opacity=(current+speed)/100;
					obj.style.filter='alpha(opacity='+(current+speed)+')';
				}else{
					obj.style[attr]=current+speed+'px';
				}
				bstop=false;
			}
		}
		if(bstop){
			clearInterval(obj.timer);
			fn&&fn();
		}
	},30);
}


//碰撞检测
function hit(obj1,obj2){
	if(!(obj1.offsetLeft+obj1.offsetWidth<obj2.offsetLeft || obj1.offsetLeft>obj2.offsetLeft+obj2.offsetWidth || obj1.offsetTop+obj1.offsetHeight<obj2.offsetTop || obj1.offsetTop>obj2.offsetTop+obj2.offsetHeight)){
		return true;//碰上了
	}else{
		return false;//没碰上
	}
}



var tool={
	ranNum:function(min,max){//获取随机数
		return Math.floor(Math.random()*(max-min+1))+min;
	},
	
	//通过类名获取元素
	$:function(id){
		return document.getElementById(id);
	},
	
	getclass:function(sclass,sparent){//sclass:类名  sparent:父框
		sparent=sparent||document;
		var arr=[];//存放匹配正确的元素对象
		var reg=new RegExp('\\b'+sclass+'\\b');//单词边界
		var eles=sparent.getElementsByTagName('*');//父框下面所有的元素
		for(var i=0;i<eles.length;i++){
			if(reg.test(eles[i].className)){
				arr.push(eles[i]);//符合条件的元素追加数组中
			}
		}
		return arr;
	},
	
	//取数组最小值下标
	getMinIndex:function(array){
		var minIndex=0;//假设最小值的索引
		for(var i=0;i<array.length;i++){
			if(array[i]<array[minIndex]){
				minIndex=i;
			}
		}
		return minIndex;//返回最小的索引
	}
}


var cookie={
	//添加cookie
	setcookie:function (key,value,day){
		var date=new Date();
		date.setDate(date.getDate()+day);//设置过期时间
		document.cookie=key+'='+JSON.stringify(value)+';expires='+date;
	},
	//获取cookie
	getcookie:function (key){
								//分号后面空格不能少必须有
		var arr=decodeURI(document.cookie).split('; ');//解码后拆分成数组 ,

		for(var i=0;i<arr.length;i++){
			
			var newarr=arr[i].split('=');//对数组的每一项再次拆分

			if(newarr[0]==key){//比较key值
				
				return newarr[1];//输出key对应的value
			}
		}
	},
	//删除cookie
	deletecookie:function (key){
		cookie.setcookie(key,{},-1);//-1:代表过去时间
	}
}
/*************************  AJAX发送数据*************************/
function datastr(dataobj){
		var arr=[];
		for(var attr in dataobj){
			arr.push(attr+'='+dataobj[attr]);
		}
		return arr.join('&');
}

function ajax(obj){
	obj.type=obj.type || 'get';//默认提交方式
	if(typeof obj.data!='string'){
		obj.data=datastr(obj.data);
	}else{
		obj.data=obj.data|| '';
	}
	
	var ajax=null;
	try{
		ajax=new XMLHttpRequest();
	}catch(e){
		ajax=new ActiveXObject('Microsoft.XMLHTTP');
	}
	
	//如果type是get且数据存在，obj.url变化
	if(obj.type=='get' && obj.data){
		obj.url+='?'+obj.data;
	}	
	ajax.open(obj.type,obj.url,true);
	
	if(obj.type=='get'){
		ajax.send();
	}else{
		ajax.setRequestHeader('content-type','application/x-www-form-urlencoded');
		ajax.send(obj.data);
	}
	
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4){
			if(ajax.status==200){
				obj.success&&obj.success(ajax.responseText);//将获取的数据传输给形参。
			}else{
				obj.error&&obj.error(ajax.status);//如果error函数存在，调用error，将ajax状态码传入形参
			}
		}
	}
}
