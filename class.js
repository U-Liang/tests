function getClassName(cls,ele){
	var lebels = [],
		results = [];
	//检查兼容性
	if(document.getElementsByClassName){
		results.push.apply(results,document.getElementsByClassName(cls));
	}else{
		if(ele){
			lebels = document.getElementsByTagName(ele);
		}else {
			lebels = document.getElementsByTagName("*");
		}

		for(var i=0;i<lebels.length;i++){
			var aCls = llebels[i].getAttribute("class");
			if(aCls == cls){
				results.push(cls);
			}
		}
	}
	return results;
}