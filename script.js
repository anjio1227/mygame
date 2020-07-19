//获取需操作的元素
var oBegin = document.getElementById('begin'),
    oTimeInp = document.getElementById('timeInp'),
    oScoreInp = document.getElementById('scoreInp'),
    omsgScore = document.getElementById('msg_score'),
    oMsg = document.getElementById('msg'),
    aImg = document.getElementsByTagName('img'),//得到所有图片的集合
    time = 30,
    score = 0;

var timer1 = null;
//监听开始按钮的点击事件
oBegin.onclick = function(){
    timer1 = setInterval(show,700);
    function show(){
        //获取随机数作为图片的索引
        var i = Math.round(Math.random()*15);//得到0-15之间的随机数
        aImg[i].style.display = 'block';//图片显示
        setTimeout(function(){
            aImg[i].style.display = 'none';//图片隐藏
        },700)
        oBegin.disabled = true;
    }

//计时器
    function timing(){
    var timer2 = setInterval(function(){
            time--;
            oTimeInp.value = time;//将变量的值赋值给input框
            if(time === 0){
                clearInterval(timer1);
                clearInterval(timer2);
                //弹出分数
                omsgScore.innerHTML = score;
                oMsg.style.display = 'block';
            }
        },1000)
    }
    timing()
};


//监听图片的点击事件
for(var i = 0; i<aImg.length;i++){
    aImg[i].onclick = function(){
        if(this.style.display === 'block'){
            score+=5;}//判断被点击的图片是否显示
           oScoreInp.value = score;  
        }        
}



