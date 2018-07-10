//右键菜单

///////////////////////////////////

jQuery(document).ready(function ($) {

    $("#spig").mousedown(function (e) {

        if(e.which==3){

        showMessage("恭喜你，发现秘密通道:<br /><br /><a href=\"http://7575.tk\" title=\"入口通道1\">入口通道1</a>        <a href=\"http://7575.ml\" title=\"入口通道2\">入口通道2</a>",10000);

}

});

$("#spig").bind("contextmenu", function(e) {

    return false;

});

});



//鼠标在消息上时

jQuery(document).ready(function ($) {

    $("#message").hover(function () {

       $("#message").fadeTo("100", 1);

     });

});





//鼠标在上方时

jQuery(document).ready(function ($) {

    //$(".mumu").jrumble({rangeX: 2,rangeY: 2,rangeRot: 1});

    $(".mumu").mouseover(function () {

       $(".mumu").fadeTo("300", 0.3);

       msgs = ["来到honey_badger博客，我就跟你玩~", "本小助理可远观不可亵玩！", "我会隐身哦！嘿嘿！", "别动手动脚的，把手拿开！！", "再不把手拿开小心我横竖竖你！！", "主人，他摸我，呜呜呜呜~~~", "你把手拿开我就出来！"];

       var i = Math.floor(Math.random() * msgs.length);

        showMessage(msgs[i]);

    });

    $(".mumu").mouseout(function () {

        $(".mumu").fadeTo("300", 1)

    });

});



//开始

jQuery(document).ready(function ($) {

    if (isindex) { //如果是主页

        var now = (new Date()).getHours();

        if (now > 0 && now <= 6) {

            showMessage(visitor + ' 你是夜猫子呀？还不睡觉，明天起的来么你？', 6000);

        } else if (now > 6 && now <= 11) {

            showMessage(visitor + ' 早上好，早起的鸟儿有虫吃噢！早起的虫儿被鸟吃，你是鸟儿还是虫儿？嘻嘻！', 6000);

        } else if (now > 11 && now <= 14) {

            showMessage(visitor + ' 中午了，吃饭了么？不要饿着了，饿死了谁来挺我呀！', 6000);

        } else if (now > 14 && now <= 18) {

            showMessage(visitor + ' 中午的时光真难熬！还好有你在！', 6000);

        } else {

            showMessage(visitor + ' 快来逗我玩吧！我好无聊啊~~', 6000);

        }

    }

    else {

        showMessage('欢迎' + visitor + '来到<span style="color:#0099cc;">honey_badger博客</span> ' + title + ' ', 6000);

    }

    $(".spig").animate({

        top: $(".spig").offset().top + 300,

        left: document.body.offsetWidth - 160

    },

	{

	    queue: false,

	    duration: 1000

	});


});







//无聊讲点什么

jQuery(document).ready(function ($) {



    window.setInterval(function () {

        msgs = ["终于找到借口 趁着醉意上心头 、 表达 我所有感受！", "好无聊哦，你都不陪我玩~", "…@……!………", "^%#&*!@*(&#)(!)(", "我是网站的小小助理哦~_~", "我可爱吧！嘻嘻!~^_^!~~","谁淫荡呀?~谁淫荡?，你淫荡呀!~~你淫荡！~~","从前有座山，山上有座庙，庙里有个老和尚给小和尚讲故事，讲：“从前有座……”"];

        var i = Math.floor(Math.random() * msgs.length);

        showMessage(msgs[i], 10000);

    }, 35000);

});



//无聊动动

jQuery(document).ready(function ($) {

    window.setInterval(function () {

        msgs = ["我嫉妒你的爱 气势如虹、像个人气高居不下的天后、你要的不是我而是一种虚荣 ！", "乾坤大挪移！", "我飘过来了！~", "我飘过去了", "我得意地飘！~飘！~"];

        var i = Math.floor(Math.random() * msgs.length);

        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];

        var i1 = Math.floor(Math.random() * s.length);

        var i2 = Math.floor(Math.random() * s.length);

            $(".spig").animate({

            left: document.body.offsetWidth/2*(1+s[i1]),

            top:  document.body.offsetheight/2*(1+s[i1])

        },

			{

			    duration: 2000,

			    complete: showMessage(msgs[i])

			});

    }, 45000);

});



var spig_top = 50;

//滚动条移动

jQuery(document).ready(function ($) {

    var f = $(".spig").offset().top;

    $(window).scroll(function () {

        $(".spig").animate({

            top: $(window).scrollTop() + f +300

        },

		{

		    queue: false,

		    duration: 1000

		});

    });

});



//鼠标点击时

jQuery(document).ready(function ($) {

    var stat_click = 0;

    $(".mumu").click(function () {

        if (!ismove) {

            stat_click++;

            if (stat_click > 4) {

                msgs = ["你有完没完呀？", "你已经摸我" + stat_click + "次了，人家脸都红色...", "非礼呀！救命！OH，My ladygaga"];

                var i = Math.floor(Math.random() * msgs.length);

                //showMessage(msgs[i]);

            } else {

                msgs = ["筋斗云！~我飞！", "我跑呀跑呀跑！~~", "别摸我了，再摸我就脸红了！", "惹不起你，我还躲不起你么？", "不要摸我了，我会告诉主人来打你的哦！", "干嘛动我呀！小心我咬你！"];

                var i = Math.floor(Math.random() * msgs.length);

                //showMessage(msgs[i]);

            }

        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];

        var i1 = Math.floor(Math.random() * s.length);

        var i2 = Math.floor(Math.random() * s.length);

            $(".spig").animate({

            left: document.body.offsetWidth/2*(1+s[i1]),

            top:  document.body.offsetheight/2*(1+s[i1])

            },

			{

			    duration: 500,

			    complete: showMessage(msgs[i])

			});

        } else {

            ismove = false;

        }

    });

});

//显示消息函数 

function showMessage(a, b) {

    if (b == null) b = 10000;

    jQuery("#message").hide().stop();

    jQuery("#message").html(a);

    jQuery("#message").fadeIn();

    jQuery("#message").fadeTo("1", 1);

    jQuery("#message").fadeOut(b);

};



//拖动

var _move = false;

var ismove = false; //移动标记

var _x, _y; //鼠标离控件左上角的相对位置

jQuery(document).ready(function ($) {

    $("#spig").mousedown(function (e) {

        _move = true;

        _x = e.pageX - parseInt($("#spig").css("left"));

        _y = e.pageY - parseInt($("#spig").css("top"));

     });

    $(document).mousemove(function (e) {

        if (_move) {

            var x = e.pageX - _x; 

            var y = e.pageY - _y;

            var wx = $(window).width() - $('#spig').width();

            var dy = $(document).height() - $('#spig').height();

            if(x >= 0 && x <= wx && y > 0 && y <= dy) {

                $("#spig").css({

                    top: y,

                    left: x

                }); //控件新位置

            ismove = true;

            }

        }

    }).mouseup(function () {

        _move = false;

    });

});

