shuaxinjiange = 50;
myallruntime = 0;
allrefreshcishu = 0;
my空闲时间次数 = 0;
my停靠1层次数 = 0;
my停靠2层次数 = 0;
my停靠3层次数 = 0;
my停靠4层次数 = 0;
my开门次数 = 0;
my关门次数 = 0;
document.getElementById("allruntime").innerText = "已启动时间:" + myallruntime / 1000 + "秒" + " 已刷新次数:" + allrefreshcishu + "次"
//document.getElementById("shuaxinjiange").innerText = "刷新间隔:" + shuaxinjiange + "毫秒"

initclick = 0
isrunfresh = 0
cmd = nodeRequire("./cmd.js");
onload = chushihuachazhaofwq;
$("#up1").click(function () {
    if (typeof (myservename) != "undefined" && document.getElementById("zdsx").checked == true && document.getElementById(
        "connect").innerText == "断开") {
        console.log("修改运行电机状态为上", Date().split(" ").join("-"))
        var mycommand = "%cd%/console-LocalSyncWrapper.exe -w " + myservename + " Channel1.Device1.y12  " + 1
        console.log("执行命令", mycommand)
        cmd.get(mycommand, mycallbacktongyong);
        var mycommand = "%cd%/console-LocalSyncWrapper.exe -w " + myservename + " Channel1.Device1.y13  " + 0
        console.log("执行命令", mycommand)
        cmd.get(mycommand, mycallbacktongyong);
    } else {
        var tanchu = "先连接服务器之后,开启自动刷新,才能修改"
        alert(tanchu)
        console.log(tanchu)
    }

})
$("#down1").click(function () {
    if (typeof (myservename) != "undefined" && document.getElementById("zdsx").checked == true && document.getElementById(
        "connect").innerText == "断开") {
        console.log("修改运行电机状态为下", Date().split(" ").join("-"))
        var mycommand = "%cd%/console-LocalSyncWrapper.exe -w " + myservename + " Channel1.Device1.y13  " + 1
        console.log("执行命令", mycommand)
        cmd.get(mycommand, mycallbacktongyong);
        var mycommand = "%cd%/console-LocalSyncWrapper.exe -w " + myservename + " Channel1.Device1.y12  " + 0
        console.log("执行命令", mycommand)
        cmd.get(mycommand, mycallbacktongyong);
    } else {
        var tanchu = "先连接服务器之后,开启自动刷新,才能修改"
        alert(tanchu)
        console.log(tanchu)
    }
})
$("#stop1").click(function () {
    if (typeof (myservename) != "undefined" && document.getElementById("zdsx").checked == true && document.getElementById(
        "connect").innerText == "断开") {
        console.log("修改运行电机状态为停", Date().split(" ").join("-"))
        var mycommand = "%cd%/console-LocalSyncWrapper.exe -w " + myservename + " Channel1.Device1.y12  " + 0
        console.log("执行命令", mycommand)
        cmd.get(mycommand, mycallbacktongyong);
        var mycommand = "%cd%/console-LocalSyncWrapper.exe -w " + myservename + " Channel1.Device1.y13  " + 0
        console.log("执行命令", mycommand)
        cmd.get(mycommand, mycallbacktongyong);
    } else {
        var tanchu = "先连接服务器之后,开启自动刷新,才能修改"
        alert(tanchu)
        console.log(tanchu)
    }
})
$("#on2").click(function () {
    if (typeof (myservename) != "undefined" && document.getElementById("zdsx").checked == true && document.getElementById(
        "connect").innerText == "断开") {
        console.log("修改门电机状态为开", Date().split(" ").join("-"))
        var mycommand = "%cd%/console-LocalSyncWrapper.exe -w " + myservename + " Channel1.Device1.y14  " + 1
        console.log("执行命令", mycommand)
        cmd.get(mycommand, mycallbacktongyong);
        var mycommand = "%cd%/console-LocalSyncWrapper.exe -w " + myservename + " Channel1.Device1.y15  " + 0
        console.log("执行命令", mycommand)
        cmd.get(mycommand, mycallbacktongyong);
    } else {
        var tanchu = "先连接服务器之后,开启自动刷新,才能修改"
        alert(tanchu)
        console.log(tanchu)
    }
})
$("#off2").click(function () {
    if (typeof (myservename) != "undefined" && document.getElementById("zdsx").checked == true && document.getElementById(
        "connect").innerText == "断开") {
        console.log("修改门电机状态为关", Date().split(" ").join("-"))
        var mycommand = "%cd%/console-LocalSyncWrapper.exe -w " + myservename + " Channel1.Device1.y15  " + 1
        console.log("执行命令", mycommand)
        cmd.get(mycommand, mycallbacktongyong);
        var mycommand = "%cd%/console-LocalSyncWrapper.exe -w " + myservename + " Channel1.Device1.y14  " + 0
        console.log("执行命令", mycommand)
        cmd.get(mycommand, mycallbacktongyong);
    } else {
        var tanchu = "先连接服务器之后,开启自动刷新,才能修改"
        alert(tanchu)
        console.log(tanchu)
    }
})
$("#stop2").click(function () {
    if (typeof (myservename) != "undefined" && document.getElementById("zdsx").checked == true && document.getElementById(
        "connect").innerText == "断开") {
        console.log("修改门电机状态为停", Date().split(" ").join("-"))
        var mycommand = "%cd%/console-LocalSyncWrapper.exe -w " + myservename + " Channel1.Device1.y14  " + 0
        console.log("执行命令", mycommand)
        cmd.get(mycommand, mycallbacktongyong);
        var mycommand = "%cd%/console-LocalSyncWrapper.exe -w " + myservename + " Channel1.Device1.y15  " + 0
        console.log("执行命令", mycommand)
        cmd.get(mycommand, mycallbacktongyong);
    } else {
        var tanchu = "先连接服务器之后,开启自动刷新,才能修改"
        alert(tanchu)
        console.log(tanchu)
    }
})

function mycallbacktongyong(err, data, stderr) {
    if (!err) {
        var meihangarray1 = data.split("\n")
        console.log(meihangarray1)
    } else {
        console.log('error', err)

    }
}
document.getElementById("zdsx").onchange = document.getElementById("tzsx").onchange = function () {
    console.log("是否刷新", document.getElementById("zdsx").checked, document.getElementById("tzsx").checked)
    if (!isrunfresh) {
        if (initclick) {
            if (document.getElementById("connect").innerText == "断开") {
                myallruntime = 0;
                allrefreshcishu = 0;
                my空闲时间次数 = 0;
                my停靠1层次数 = 0;
                my停靠2层次数 = 0;
                my停靠3层次数 = 0;
                my停靠4层次数 = 0;
                my开门次数 = 0;
                my关门次数 = 0;
                myservename = $("#server").val();
                if (myservename) {

                    console.log("开始连接服务器", myservename, Date().split(" ").join("-"))
                    myrefresh(myservename)

                } else {
                    lianjiefailure("服务器名称不能为空")
                    console.log("服务器名称不能为空")
                    document.getElementById("connect").innerText = "连接"

                }
            }

        }

    }
}
$("#zizd").click(function () {
    document.getElementById("zdsx").click()
})
$("#zitz").click(function () {
    document.getElementById("tzsx").click()
})
$("#connect").click(function () {
    allrefreshcishu = 0;
    myallruntime = 0;
    my空闲时间次数 = 0;
    my停靠1层次数 = 0;
    my停靠2层次数 = 0;
    my停靠3层次数 = 0;
    my停靠4层次数 = 0;
    my开门次数 = 0;
    my关门次数 = 0;
    strt = new Date().getTime();
    if (document.getElementById("connect").innerText == "连接") {
        document.getElementById("connect").innerText = "断开"
        initclick = 1



        myservename = $("#server").val();
        if (myservename) {
            console.log("开始连接服务器", myservename)
            myrefresh(myservename)

        } else {
            lianjiefailure("服务器名称不能为空")
            console.log("服务器名称不能为空")
            alert("服务器名称不能为空")
            document.getElementById("connect").innerText = "连接"

        }

    } else
        if (document.getElementById("connect").innerText == "断开") {
            document.getElementById("connect").innerText = "连接"
            lianjiesuccess("断开成功")
            myallruntime = 0;
            allrefreshcishu = 0;
            my空闲时间次数 = 0;
            my停靠1层次数 = 0;
            my停靠2层次数 = 0;
            my停靠3层次数 = 0;
            my停靠4层次数 = 0;
            my开门次数 = 0;
            my关门次数 = 0;
            document.getElementById("allruntime").innerText = "已启动时间:" + myallruntime / 1000 + "秒" + " 已刷新次数:" + allrefreshcishu + "次"
        }


})

function chushihuachazhaofwq() {

    console.log("初始化查找服务器", Date().split(" ").join("-"))
    console.log("执行命令", "%cd%/console-LocalSyncWrapper.exe -l")
    cmd.get('%cd%/console-LocalSyncWrapper.exe -l ', mycallback3);

}

function mycallback3(err, data, stderr) {
    if (!err) {


        meihangarray1 = data.split("\n")
        //console.log(meihangarray1)
        if (meihangarray1.length >= 2) {

            usefuloutput1 = []

            for (key in meihangarray1) {


                if ((mykaishi = meihangarray1[key].indexOf("ProgID:")) >= 0) {


                    usefuloutput1.push(meihangarray1[key])

                }
            }
            //console.log(usefuloutput1)
            if (usefuloutput1.length > 0) {
                console.log("找到" + usefuloutput1.length + "个opc服务器", Date().split(" ").join("-"))
                myserverlist = []
                for (key in usefuloutput1) {


                    if ((myjiewei = usefuloutput1[key].indexOf("CLSID:")) >= 0) {


                        myserverlist.push(usefuloutput1[key].slice(mykaishi + 2 + "ProgID:".length, myjiewei - 1))

                    }
                }
                console.log(myserverlist)
                myserverlist.forEach(function (currentValue, index) {
                    fuwuqianniu = []
                    fuwuqianniu[index] = $("<a></a>").text(currentValue)
                    $("#xialiacaidan").append($("<li></li>").append(fuwuqianniu[index]))


                    console.log("下拉菜单添加项目", currentValue)
                    fuwuqianniu[index].click(function () {
                        $("#server").val(currentValue)

                    })
                })

            } else {
                alert("没有找到任何opc服务器")
                console.log("没有找到任何opc服务器")

            }



        } else {
            alert("执行失败,请使用管理员权限执行")
            console.log("执行失败,请使用管理员权限执行")
        }






    } else {
        console.log('error', err)

    }

}




function myrefresh(myservename) {
    console.log("执行命令", "%cd%/console-LocalSyncWrapper.exe -l")
    cmd.get('%cd%/console-LocalSyncWrapper.exe -l ', mycallback1);

}

function mycallback1(err, data, stderr) {
    if (!err) {


        meihangarray1 = data.split("\n")
        //console.log(meihangarray1)
        if (meihangarray1.length >= 2) {

            usefuloutput1 = []

            for (key in meihangarray1) {


                if ((mykaishi = meihangarray1[key].indexOf("ProgID:")) >= 0) {


                    usefuloutput1.push(meihangarray1[key])

                }
            }
            //console.log(usefuloutput1)
            if (usefuloutput1.length > 0) {
                console.log("找到" + usefuloutput1.length + "个opc服务器")
                myserverlist = []
                for (key in usefuloutput1) {


                    if ((myjiewei = usefuloutput1[key].indexOf("CLSID:")) >= 0) {


                        myserverlist.push(usefuloutput1[key].slice(mykaishi + 2 + 7, myjiewei - 1))

                    }
                }
                console.log(myserverlist)

                function checkAdult(age) {
                    return age == myservename;
                }
                chazhaofuwuqi = myserverlist.filter(checkAdult)
                console.log(chazhaofuwuqi)
                lasttime = new Date().getTime();
                myallruntime = lasttime - strt
                document.getElementById("allruntime").innerText = "已启动时间:" + myallruntime / 1000 + "秒" + " 已刷新次数:" + allrefreshcishu + "次"
                if (chazhaofuwuqi.length > 0) {

                    console.log("成功找到指定的服务器", "从指定的服务器刷新数据", myservename, Date().split(" ").join("-"))

                    if (document.getElementById("zdsx").checked == true) {
                        console.log("执行命令", '%cd%/console-LocalSyncWrapper.exe -d ' + myservename)
                        // qidongtime=new Date().getTime()
                        cmd.get('%cd%/console-LocalSyncWrapper.exe -d ' + myservename, mycallback2);
                        console.log("是否刷新", document.getElementById("zdsx").checked, document.getElementById("tzsx").checked)
                    }



                } else {
                    console.log("未找到指定的服务器", myservename)
                    alert("未找到指定的服务器")
                    lianjiefailure("未找到指定的服务器")
                    document.getElementById("connect").innerText = "连接"
                }

            } else {
                console.log("没有找到任何opc服务器")
                alert("没有找到任何opc服务器")
            }
        } else {
            alert("执行失败,请使用管理员权限执行")
            console.log("执行失败,请使用管理员权限执行")
        }

    } else {
        console.log('error', err)

    }

}

function mycallback2(err, data, stderr) {
    //  	cmdendtime=new Date().getTime()
    // 	cmdruntime=cmdendtime-qidongtime
    // 	console.log("cmd执行时间",cmdruntime/1000)
    // 	qidongtime=new Date().getTime()

    isrunfresh = 1
    if (!err) {



        meihangarray = data.split("\n")
        //console.log(meihangarray)
        usefuloutput = []
        for (key in meihangarray) {


            if (meihangarray[key].indexOf("read-uint-") >= 0) {


                usefuloutput.push(meihangarray[key])

            }
        }
        //console.log(usefuloutput)
        if (usefuloutput.length > 0) {


            // console.log("allrefreshcishu", allrefreshcishu)
            lianjiesuccess()
            document.title = "四层电梯监控-" + myservename
            zhuangtaibiao = []
            usefuloutput.forEach(function (value, index, arr) {
                jiequkai = value.indexOf("read-uint-Channel1.Device1.") + "read-uint-Channel1.Device1.".length
                jiequend = value.indexOf("-read-finish")
                mytiqu = value.slice(jiequkai, jiequend)

                zhuangtaibiao.push(mytiqu)



            })

            console.log(zhuangtaibiao)
            //xinzhuangtai = []
            zhuangtaibiao.forEach(function (value) {
                var chaifenshu = value.split("=")



                if (chaifenshu[0] == "x0") {
                    $("#myx0").text(chaifenshu[1]);
                    //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                } else
                    if (chaifenshu[0] == "x1") {
                        $("#myx1").text(chaifenshu[1]);
                        //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                    } else
                        if (chaifenshu[0] == "x2") {
                            $("#myx2").text(chaifenshu[1]);
                            //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                        } else
                            if (chaifenshu[0] == "x3") {
                                $("#myx3").text(chaifenshu[1]);
                                //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                            } else
                                if (chaifenshu[0] == "x4") {
                                    $("#myx4").text(chaifenshu[1]);
                                    //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                } else
                                    if (chaifenshu[0] == "x5") {
                                        $("#myx5").text(chaifenshu[1]);
                                        //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                    } else
                                        if (chaifenshu[0] == "x6") {
                                            $("#myx6").text(chaifenshu[1]);
                                            //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                        } else
                                            if (chaifenshu[0] == "x7") {
                                                $("#myx7").text(chaifenshu[1]);
                                                //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                            } else
                                                if (chaifenshu[0] == "x10") {
                                                    $("#myx10").text(chaifenshu[1]);
                                                    //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                                } else
                                                    if (chaifenshu[0] == "x11") {
                                                        $("#myx11").text(chaifenshu[1]);
                                                        //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                                    } else
                                                        if (chaifenshu[0] == "x12") {
                                                            $("#myx12").text(chaifenshu[1]);
                                                            //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                                        } else
                                                            if (chaifenshu[0] == "x13") {
                                                                $("#myx13").text(chaifenshu[1]);
                                                                //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                                            } else
                                                                if (chaifenshu[0] == "x14") {
                                                                    $("#myx14").text(chaifenshu[1]);
                                                                    //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                                                } else
                                                                    if (chaifenshu[0] == "x15") {
                                                                        $("#myx15").text(chaifenshu[1]);
                                                                        //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                                                    } else
                                                                        if (chaifenshu[0] == "x16") {
                                                                            $("#myx16").text(chaifenshu[1]);
                                                                            //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                                                        } else
                                                                            if (chaifenshu[0] == "x17") {
                                                                                $("#myx17").text(chaifenshu[1]);
                                                                                //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                                                            } else
                                                                                if (chaifenshu[0] == "y0") {
                                                                                    $("#myy0").text(chaifenshu[1]);
                                                                                    //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                                                                } else
                                                                                    if (chaifenshu[0] == "y1") {
                                                                                        $("#myy1").text(chaifenshu[1]);
                                                                                        //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                                                                    } else
                                                                                        if (chaifenshu[0] == "y2") {
                                                                                            $("#myy2").text(chaifenshu[1]);
                                                                                            //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                                                                        } else
                                                                                            if (chaifenshu[0] == "y3") {
                                                                                                $("#myy3").text(chaifenshu[1]);
                                                                                                //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                                                                            } else
                                                                                                if (chaifenshu[0] == "y4") {
                                                                                                    $("#myy4").text(chaifenshu[1]);
                                                                                                    //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                                                                                } else
                                                                                                    if (chaifenshu[0] == "y5") {
                                                                                                        $("#myy5").text(chaifenshu[1]);
                                                                                                        //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                                                                                    } else
                                                                                                        if (chaifenshu[0] == "y6") {
                                                                                                            $("#myy6").text(chaifenshu[1]);
                                                                                                            //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                                                                                        } else
                                                                                                            if (chaifenshu[0] == "y7") {
                                                                                                                $("#myy7").text(chaifenshu[1]);
                                                                                                                //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                                                                                            } else
                                                                                                                if (chaifenshu[0] == "y10") {
                                                                                                                    $("#myy10").text(chaifenshu[1]);
                                                                                                                    //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                                                                                                } else
                                                                                                                    if (chaifenshu[0] == "y11") {
                                                                                                                        $("#myy11").text(chaifenshu[1]);
                                                                                                                        //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                                                                                                    } else
                                                                                                                        if (chaifenshu[0] == "y12") {
                                                                                                                            $("#myy12").text(chaifenshu[1]);
                                                                                                                            //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                                                                                                        } else
                                                                                                                            if (chaifenshu[0] == "y13") {
                                                                                                                                $("#myy13").text(chaifenshu[1]);
                                                                                                                                //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                                                                                                            } else
                                                                                                                                if (chaifenshu[0] == "y14") {
                                                                                                                                    $("#myy14").text(chaifenshu[1]);
                                                                                                                                    //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                                                                                                                } else
                                                                                                                                    if (chaifenshu[0] == "y15") {
                                                                                                                                        $("#myy15").text(chaifenshu[1]);
                                                                                                                                        //xinzhuangtai.push(chaifenshu[0], chaifenshu[1])

                                                                                                                                    }


            })
            //console.log(xinzhuangtai)
            mytemphangids = ["#myx0", "#myx1", "#myx2", "#myx3", "#myx4", "#myx5", "#myx6", "#myx7", "#myx10", "#myx11",
                "#myx12", "#myx13", "#myx14", "#myx15", "#myx16", "#myx17", "#myy0", "#myy1", "#myy2", "#myy3", "#myy4", "#myy5",
                "#myy6", "#myy7", "#myy10", "#myy11", "#myy12", "#myy13", "#myy14", "#myy15"
            ]
            mytemphangids.forEach(function (val) {
                if ($(val).text() == "1" || $(val).text() != "0") {
                    $(val).text("1")
                    $(val).parent().addClass("success").removeClass("warning");

                } else {
                    $(val).parent().addClass("warning").removeClass("success");

                }
            })

            if ($("#myx12").text() == "1") {
                $("#myz1").text("1")

            } else
                if ($("#myx13").text() == "1") {
                    $("#myz1").text("2")

                } else
                    if ($("#myx14").text() == "1") {

                        $("#myz1").text("3")
                    } else
                        if ($("#myx15").text() == "1") {
                            $("#myz1").text("4")

                        } else {
                            $("#myz1").text("中")
                        }

            if ($("#myz1").text() == "中") {
                $("#myz1").parent().addClass("warning").removeClass("success")
            } else {
                $("#myz1").parent().addClass("success").removeClass("warning")
            }

            if ($("#myx16").text() == "1") {
                $("#myz2").text("开")

            } else
                if ($("#myx15").text() == "1") {
                    $("#myz2").text("关")


                } else {
                    $("#myz2").text("中")
                }

            if ($("#myz2").text() == "中") {
                $("#myz2").parent().addClass("warning").removeClass("success")
            } else {
                $("#myz2").parent().addClass("success").removeClass("warning")
            }



            if ($("#myy12").text() == "1") {
                $("#myz3").text("上")

            } else
                if ($("#myy13").text() == "1") {
                    $("#myz3").text("下")


                } else {
                    $("#myz3").text("停")
                }

            if ($("#myz3").text() == "停") {
                $("#myz3").parent().addClass("warning").removeClass("success")
            } else {
                $("#myz3").parent().addClass("success").removeClass("warning")
            }

            if ($("#myy14").text() == "1") {
                $("#myz4").text("开")

            } else
                if ($("#myy15").text() == "1") {
                    $("#myz4").text("关")


                } else {
                    $("#myz4").text("停")
                }

            if ($("#myz4").text() == "停") {
                $("#myz4").parent().addClass("warning").removeClass("success")
            } else {
                $("#myz4").parent().addClass("success").removeClass("warning")
            }





            allrefreshcishu++

            lasttime = new Date().getTime();
            myallruntime = lasttime - strt
            document.getElementById("allruntime").innerText = "已启动时间:" + myallruntime / 1000 + "秒" + " 已刷新次数:" + allrefreshcishu + "次"

            if ($("#myy14").text() == "0" && $("#myy15").text() == "0" && $("#myy12").text() == "0" && $("#myy13").text() == "0") {
                my空闲时间次数++



            }


            $("#myfreetime").text(Math.round(my空闲时间次数 / allrefreshcishu * 100 * 100) / 100 + "%")

            $("#mybusytime").text((100 - Math.round(my空闲时间次数 / allrefreshcishu * 100 * 100) / 100) + "%")

            if ($("#myy12").text() == "0" && $("#myy13").text() == "0") {
                if ($("#myx12").text() == "1") {
                    my停靠1层次数++
                } else if ($("#myx13").text() == "1") {
                    my停靠2层次数++
                } else if ($("#myx14").text() == "1") {
                    my停靠3层次数++
                } else if ($("#myx15").text() == "1") {
                    my停靠4层次数++
                }

            }
            $("#my1floortime").text(Math.round(my停靠1层次数 / allrefreshcishu * 100 * 100) / 100 + "%")
            $("#my2floortime").text(Math.round(my停靠2层次数 / allrefreshcishu * 100 * 100) / 100 + "%")
            $("#my3floortime").text(Math.round(my停靠3层次数 / allrefreshcishu * 100 * 100) / 100 + "%")
            $("#my4floortime").text(Math.round(my停靠4层次数 / allrefreshcishu * 100 * 100) / 100 + "%")
            if ($("#myx16").text() == "1") {
                my开门次数++
            } else if ($("#myx17").text() == "1") {
                my关门次数++
            }
            $("#myopentime").text(Math.round(my开门次数 / allrefreshcishu * 100 * 100) / 100 + "%")
            $("#myclosetime").text(Math.round(my关门次数 / allrefreshcishu * 100 * 100) / 100 + "%")


        } else {
            lianjiefailure()


        }


    } else {
        console.log('error', err)

        alert("连接服务器失败")
        document.getElementById("connect").click()

        lianjiefailure()
    }
    shuaxin = function () {


        setTimeout(function () {
            if (document.getElementById("zdsx").checked == true && document.getElementById("connect").innerText == "断开") {
                console.log("是否刷新", document.getElementById("zdsx").checked, document.getElementById("tzsx").checked)
                console.log("自动刷新", Date().split(" ").join("-"))
                setTimeout(function () {
                    console.log("执行命令", '%cd%/console-LocalSyncWrapper.exe -d ' + myservename)
                    cmd.get('%cd%/console-LocalSyncWrapper.exe -d ' + myservename, mycallback2);
                }, shuaxinjiange)

            } else {
                console.log("是否刷新", document.getElementById("zdsx").checked, document.getElementById("tzsx").checked)
                console.log("停止刷新", Date().split(" ").join("-"))
                isrunfresh = 0
                lianjiesuccess("断开成功")
                myallruntime = 0;
                allrefreshcishu = 0;
                my空闲时间次数 = 0;
                my停靠1层次数 = 0;
                my停靠2层次数 = 0;
                my停靠3层次数 = 0;
                my停靠4层次数 = 0;
                my开门次数 = 0;
                my关门次数 = 0;
                document.getElementById("allruntime").innerText = "已启动时间:" + myallruntime / 1000 + "秒" + " 已刷新次数:" + allrefreshcishu + "次"
            }
        }, 00)

    }
    shuaxin()
}



function lianjiesuccess(ymrktext = "连接成功") {
    $("#connectstatus").text(ymrktext)
    $("#connectstatus").attr("style", "color:green")
}

function lianjiefailure(mytext = "连接失败") {
    $("#connectstatus").text(mytext)
    $("#connectstatus").attr("style", "color:red")
}
