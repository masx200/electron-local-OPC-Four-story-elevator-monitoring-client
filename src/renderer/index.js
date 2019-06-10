// Initial welcome page. Delete the following line to remove it.
"use strict";

import "./renderer.css";
import "bootstrap/dist/css/bootstrap.min.css";

import $ from "jquery/dist/jquery.min";
import "popper.js/dist/esm/popper.min";
import "bootstrap/dist/js/bootstrap.bundle.min";

import cmd from "./cmd.js";
// import consoleLocalSyncWrapper from "./console-LocalSyncWrapper.exe";
// console.log(consoleLocalSyncWrapper);
/* const vueScript = document.createElement("script");
vueScript.setAttribute("type", "text/javascript"),
  vueScript.setAttribute("src", "https://unpkg.com/vue"),
  (vueScript.onload = init),
  document.head.appendChild(vueScript);
 */

// import devtools from "@vue/devtools";
import Vue from "vue/dist/vue.esm.browser.min";

// import fs from "fs";
import path from "path";

const pathToAsset1 = path.join(__static, "/console-LocalSyncWrapper.exe");
// console.log(__static)
// console.log(pathToAsset);
// init();
// if (process.env.NODE_ENV === "development") {
//   devtools.connect(/* host, port */);
// }
(function init() {
  (Vue.config.devtools = false),
    (Vue.config.productionTip = false),
    new Vue({
      data: {},
      methods: {},
      template: `
      
      <div id="app">
      <div class="container-fluid">
      <nav
        class="navbar navbar-default navbar navbar-expand-sm bg-light navbar-light"
        role="navigation"
      >
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" style="font-size: 30px;"> 四层电梯监控</a>
          </div>
          <ul class="nav navbar-nav">
            <li class="nav-item">
              <h4 class="nav-link navbar-text navbar-left">OPC服务器名称</h4>
            </li>
            <!-- <li class="nav-item"></li> -->

            <li class="nav-item">
              <form class="navbar-form navbar-left" role="search">
                <div class="form-group">
                  <div class="btn-group ">
                    <input
                      id="server"
                      type="text"
                      style="text-align: center;"
                      class="nav-link form-control  input-lg"
                      placeholder="OPC服务器名称"
                      value=""
                    />
                    <button
                      type="button"
                      class="nav-link btn-lg btn-default dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      选择 <span class="caret"></span>
                    </button>
                    <ul
                      id="xialiacaidan"
                      class="nav-item dropdown-menu"
                      role="menu"
                    ></ul>
                  </div>
                </div>
              </form>
            </li>
            <li class="nav-item">
              <button
                id="connect"
                type="button"
                class="nav-link btn-lg btn-default"
              >
                连接
              </button>
            </li>
            <li class="nav-item">
              <!-- <span class="input-group-addon"> -->
              <input
                class="nav-link "
                name="refresh"
                type="radio"
                checked="true"
                id="zdsx"
              />
            </li>
            <!-- </span -->
            <!-- ><span> -->
            <li class="nav-item">
              <h4 id="zizd" class="nav-link ">自动刷新</h4>
              <!-- </span> -->
            </li>
            <li class="nav-item">
              <input name="refresh" type="radio" id="tzsx" class="nav-link " />
            </li>
            <li class="nav-item">
              <h4 id="zitz" class="nav-link ">停止刷新</h4>
            </li>
            <li class="nav-item">
              <h4 id="connectstatus" class="navbar-text nav-link ">未连接</h4>
            </li>
            <!-- <form class="navbar-form navbar-left" role="search">
                                <div class="form-group">
                                    <div class="btn-group "></div>
                                    <div class="input-group"></div>
                                    <div class="input-group">
                                        <span class="input-group-addon"> </span>
                                        <span> </span>
                                    </div>
                                </div>
                            </form> -->

            <li class="nav-item">
              <h4 id="allruntime" class="navbar-text nav-link ">
                已启动时间:0秒 已刷新次数:0次
              </h4>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="row container-fluid">
      <div class="container  col-lg-3  col-md-3 col-sm-3 col-xs-6">
        <table class="table table-hover table-condensed">
          <caption style="text-align: center;">
            基本的状态表
          </caption>
          <thead>
            <tr>
              <th style="text-align: center;">名称</th>

              <th style="text-align: center;">状态</th>
            </tr>
          </thead>
          <tbody id="app01">
            <tr>
              <td>所在楼层</td>

              <td class="allmyzhuang" id="myz1">未知</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container  col-lg-3  col-md-3 col-sm-3 col-xs-6">
        <table class="table table-hover table-condensed">
          <caption style="text-align: center;">
            基本的状态表
          </caption>
          <thead>
            <tr>
              <th style="text-align: center;">名称</th>

              <th style="text-align: center;">状态</th>
            </tr>
          </thead>
          <tbody id="app02">
            <tr>
              <td>门状态</td>

              <td class="allmyzhuang" id="myz2">未知</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container  col-lg-3  col-md-3 col-sm-3 col-xs-6">
        <table class="table table-hover table-condensed">
          <caption style="text-align: center;">
            基本的状态表
          </caption>
          <thead>
            <tr>
              <th style="text-align: center;">名称</th>

              <th style="text-align: center;">状态</th>
              <th style="text-align: center;">修改</th>
            </tr>
          </thead>
          <tbody id="app03">
            <tr>
              <td>运行电机</td>

              <td class="allmyzhuang" id="myz3">未知</td>
              <td class="allmyzhuang" id="myxg1">
                <div class="btn-group ">
                  <button
                    type="button"
                    class=" btn-block btn-default dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    修改 <span class="caret"></span>
                  </button>
                  <ul id="" class=" dropdown-menu" role="menu">
                    <li><a id="up1">上</a></li>
                    <li><a id="down1">下</a></li>
                    <li><a id="stop1">停</a></li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container  col-lg-3  col-md-3 col-sm-3 col-xs-6">
        <table class="table table-hover table-condensed">
          <caption style="text-align: center;">
            基本的状态表
          </caption>
          <thead>
            <tr>
              <th style="text-align: center;">名称</th>

              <th style="text-align: center;">状态</th>
              <th style="text-align: center;">修改</th>
            </tr>
          </thead>
          <tbody id="app04">
            <tr>
              <td>门电机</td>

              <td class="allmyzhuang" id="myz4">未知</td>
              <td class="allmyzhuang" id="myxg2">
                <div class="btn-group ">
                  <button
                    type="button"
                    class="btn-block btn-default dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    修改 <span class="caret"></span>
                  </button>
                  <ul id="" class=" dropdown-menu" role="menu">
                    <li><a id="on2">开</a></li>
                    <li><a id="off2">关</a></li>
                    <li><a id="stop2">停</a></li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container  col-lg-3  col-md-3 col-sm-3 col-xs-6">
        <table class="table table-hover table-condensed">
          <caption style="text-align: center;">
            基本的统计表
          </caption>
          <thead>
            <tr>
              <th style="text-align: center;">名称</th>

              <th style="text-align: center;">占比</th>
            </tr>
          </thead>
          <tbody id="">
            <tr class="table-info">
              <td>空闲</td>

              <td id="myfreetime">未知</td>
            </tr>
            <tr class="table-info">
              <td>忙碌</td>

              <td id="mybusytime">未知</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container  col-lg-3  col-md-3 col-sm-3 col-xs-6">
        <table class="table table-hover table-condensed">
          <caption style="text-align: center;">
            基本的统计表
          </caption>
          <thead>
            <tr>
              <th style="text-align: center;">名称</th>

              <th style="text-align: center;">占比</th>
            </tr>
          </thead>
          <tbody id="">
            <tr class="table-info">
              <td>停靠1层</td>

              <td id="my1floortime">未知</td>
            </tr>
            <tr class="table-info">
              <td>停靠2层</td>

              <td id="my2floortime">未知</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container  col-lg-3  col-md-3 col-sm-3 col-xs-6">
        <table class="table table-hover table-condensed">
          <caption style="text-align: center;">
            基本的统计表
          </caption>
          <thead>
            <tr>
              <th style="text-align: center;">名称</th>

              <th style="text-align: center;">占比</th>
            </tr>
          </thead>
          <tbody id="">
            <tr class="table-info">
              <td>停靠3层</td>

              <td id="my3floortime">未知</td>
            </tr>
            <tr class="table-info">
              <td>停靠4层</td>

              <td id="my4floortime">未知</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container  col-lg-3  col-md-3 col-sm-3 col-xs-6">
        <table class="table table-hover table-condensed">
          <caption style="text-align: center;">
            基本的统计表
          </caption>
          <thead>
            <tr>
              <th style="text-align: center;">名称</th>

              <th style="text-align: center;">占比</th>
            </tr>
          </thead>
          <tbody id="">
            <tr class="table-info">
              <td>开门</td>

              <td id="myopentime">未知</td>
            </tr>
            <tr class="table-info">
              <td>关门</td>

              <td id="myclosetime">未知</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container  col-lg-6  col-md-6 col-sm-6 col-xs-12">
        <table class="table table-hover table-condensed">
          <caption style="text-align: center;">
            基本的状态表
          </caption>
          <thead>
            <tr>
              <th style="text-align: center;">名称</th>
              <th style="text-align: center;">地址</th>
              <th style="text-align: center;">状态</th>
            </tr>
          </thead>
          <tbody id="app1">
            <tr>
              <td>一层内呼</td>
              <td>X0</td>
              <td class="allmyzhuang" id="myx0">未知</td>
            </tr>
            <tr>
              <td>二层内呼</td>
              <td>X1</td>
              <td class="allmyzhuang" id="myx1">未知</td>
            </tr>
            <tr>
              <td>三层内呼</td>
              <td>X2</td>
              <td class="allmyzhuang" id="myx2">未知</td>
            </tr>
            <tr>
              <td>四层内呼</td>
              <td>X3</td>
              <td class="allmyzhuang" id="myx3">未知</td>
            </tr>
            <tr>
              <td>一层外呼上</td>
              <td>X4</td>
              <td class="allmyzhuang" id="myx4">未知</td>
            </tr>
            <tr>
              <td>二层外呼下</td>
              <td>X5</td>
              <td class="allmyzhuang" id="myx5">未知</td>
            </tr>
            <tr>
              <td>二层外呼上</td>
              <td>X6</td>
              <td class="allmyzhuang" id="myx6">未知</td>
            </tr>
            <tr>
              <td>三层外呼下</td>
              <td>X7</td>
              <td class="allmyzhuang" id="myx7">未知</td>
            </tr>
            <tr>
              <td>三层外呼上</td>
              <td>X10</td>
              <td class="allmyzhuang" id="myx10">未知</td>
            </tr>
            <tr>
              <td>四层外呼下</td>
              <td>X11</td>
              <td class="allmyzhuang" id="myx11">未知</td>
            </tr>
            <tr>
              <td>一层平层</td>
              <td>X12</td>
              <td class="allmyzhuang" id="myx12">未知</td>
            </tr>
            <tr>
              <td>二层平层</td>
              <td>X13</td>
              <td class="allmyzhuang" id="myx13">未知</td>
            </tr>
            <tr>
              <td>三层平层</td>
              <td>X14</td>
              <td class="allmyzhuang" id="myx14">未知</td>
            </tr>
            <tr>
              <td>四层平层</td>
              <td>X15</td>
              <td class="allmyzhuang" id="myx15">未知</td>
            </tr>
            <tr>
              <td>开门限位</td>
              <td>X16</td>
              <td class="allmyzhuang" id="myx16">未知</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container  col-lg-6  col-md-6 col-sm-6 col-xs-12">
        <table class="table table-hover table-condensed">
          <caption style="text-align: center;">
            基本的状态表
          </caption>
          <thead>
            <tr>
              <th style="text-align: center;">名称</th>
              <th style="text-align: center;">地址</th>
              <th style="text-align: center;">状态</th>
            </tr>
          </thead>
          <tbody id="app2">
            <tr>
              <td>关门限位</td>
              <td>X17</td>
              <td class="allmyzhuang" id="myx17">未知</td>
            </tr>
            <tr>
              <td>一层内呼指示</td>
              <td>Y0</td>
              <td class="allmyzhuang" id="myy0">未知</td>
            </tr>
            <tr>
              <td>二层内呼指示</td>
              <td>Y1</td>
              <td class="allmyzhuang" id="myy1">未知</td>
            </tr>
            <tr>
              <td>三层内呼指示</td>
              <td>Y2</td>
              <td class="allmyzhuang" id="myy2">未知</td>
            </tr>
            <tr>
              <td>四层内呼指示</td>
              <td>Y3</td>
              <td class="allmyzhuang" id="myy3">未知</td>
            </tr>
            <tr>
              <td>一层外呼上指示</td>
              <td>Y4</td>
              <td class="allmyzhuang" id="myy4">未知</td>
            </tr>
            <tr>
              <td>二层外呼下指示</td>
              <td>Y5</td>
              <td class="allmyzhuang" id="myy5">未知</td>
            </tr>
            <tr>
              <td>二层外呼上指示</td>
              <td>Y6</td>
              <td class="allmyzhuang" id="myy6">未知</td>
            </tr>
            <tr>
              <td>三层外呼下指示</td>
              <td>Y7</td>
              <td class="allmyzhuang" id="myy7">未知</td>
            </tr>
            <tr>
              <td>三层外呼上指示</td>
              <td>Y10</td>
              <td class="allmyzhuang" id="myy10">未知</td>
            </tr>
            <tr>
              <td>四层外听下指示</td>
              <td>Y11</td>
              <td class="allmyzhuang" id="myy11">未知</td>
            </tr>
            <tr>
              <td>电梯上行</td>
              <td>Y12</td>
              <td class="allmyzhuang" id="myy12">未知</td>
            </tr>
            <tr>
              <td>电梯下行</td>
              <td>Y13</td>
              <td class="allmyzhuang" id="myy13">未知</td>
            </tr>
            <tr>
              <td>门电机开</td>
              <td>Y14</td>
              <td class="allmyzhuang" id="myy14">未知</td>
            </tr>
            <tr>
              <td>门电机关</td>
              <td>Y15</td>
              <td class="allmyzhuang" id="myy15">未知</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    </div>`,
      mounted() {
        (() => {
          var meihangarray1;
          var shuaxinjiange = 50;
          var myallruntime = 0;
          var allrefreshcishu = 0;
          var my空闲时间次数 = 0;
          var my停靠1层次数 = 0;
          var my停靠2层次数 = 0;
          var my停靠3层次数 = 0;
          var my停靠4层次数 = 0;
          var my开门次数 = 0;
          var my关门次数 = 0;
          var usefuloutput1, myservename, strt, lasttime;
          document.getElementById("allruntime").innerText =
            "已启动时间:" +
            myallruntime / 1000 +
            "秒" +
            " 已刷新次数:" +
            allrefreshcishu +
            "次";

          var initclick = 0;
          var isrunfresh = 0;
          // cmd = nodeRequire("./cmd.js");
          onload = chushihuachazhaofwq;
          $("#up1").click(function() {
            if (
              typeof myservename != "undefined" &&
              document.getElementById("zdsx").checked == true &&
              document.getElementById("connect").innerText == "断开"
            ) {
              console.log(
                "修改运行电机状态为上",
                Date()
                  .split(" ")
                  .join("-")
              );
              var mycommand =
                pathToAsset1 +
                " -w " +
                myservename +
                " Channel1.Device1.y12  " +
                1;
              console.log("执行命令", mycommand);
              cmd.get(mycommand, mycallbacktongyong);
              var mycommand =
                pathToAsset1 +
                " -w " +
                myservename +
                " Channel1.Device1.y13  " +
                0;
              console.log("执行命令", mycommand);
              cmd.get(mycommand, mycallbacktongyong);
            } else {
              var tanchu = "先连接服务器之后,开启自动刷新,才能修改";
              alert(tanchu);
              console.log(tanchu);
            }
          });
          $("#down1").click(function() {
            if (
              typeof myservename != "undefined" &&
              document.getElementById("zdsx").checked == true &&
              document.getElementById("connect").innerText == "断开"
            ) {
              console.log(
                "修改运行电机状态为下",
                Date()
                  .split(" ")
                  .join("-")
              );
              var mycommand =
                pathToAsset1 +
                " -w " +
                myservename +
                " Channel1.Device1.y13  " +
                1;
              console.log("执行命令", mycommand);
              cmd.get(mycommand, mycallbacktongyong);
              var mycommand =
                pathToAsset1 +
                " -w " +
                myservename +
                " Channel1.Device1.y12  " +
                0;
              console.log("执行命令", mycommand);
              cmd.get(mycommand, mycallbacktongyong);
            } else {
              var tanchu = "先连接服务器之后,开启自动刷新,才能修改";
              alert(tanchu);
              console.log(tanchu);
            }
          });
          $("#stop1").click(function() {
            if (
              typeof myservename != "undefined" &&
              document.getElementById("zdsx").checked == true &&
              document.getElementById("connect").innerText == "断开"
            ) {
              console.log(
                "修改运行电机状态为停",
                Date()
                  .split(" ")
                  .join("-")
              );
              var mycommand =
                pathToAsset1 +
                " -w " +
                myservename +
                " Channel1.Device1.y12  " +
                0;
              console.log("执行命令", mycommand);
              cmd.get(mycommand, mycallbacktongyong);
              var mycommand =
                pathToAsset1 +
                " -w " +
                myservename +
                " Channel1.Device1.y13  " +
                0;
              console.log("执行命令", mycommand);
              cmd.get(mycommand, mycallbacktongyong);
            } else {
              var tanchu = "先连接服务器之后,开启自动刷新,才能修改";
              alert(tanchu);
              console.log(tanchu);
            }
          });
          $("#on2").click(function() {
            if (
              typeof myservename != "undefined" &&
              document.getElementById("zdsx").checked == true &&
              document.getElementById("connect").innerText == "断开"
            ) {
              console.log(
                "修改门电机状态为开",
                Date()
                  .split(" ")
                  .join("-")
              );
              var mycommand =
                pathToAsset1 +
                " -w " +
                myservename +
                " Channel1.Device1.y14  " +
                1;
              console.log("执行命令", mycommand);
              cmd.get(mycommand, mycallbacktongyong);
              var mycommand =
                pathToAsset1 +
                " -w " +
                myservename +
                " Channel1.Device1.y15  " +
                0;
              console.log("执行命令", mycommand);
              cmd.get(mycommand, mycallbacktongyong);
            } else {
              var tanchu = "先连接服务器之后,开启自动刷新,才能修改";
              alert(tanchu);
              console.log(tanchu);
            }
          });
          $("#off2").click(function() {
            if (
              typeof myservename != "undefined" &&
              document.getElementById("zdsx").checked == true &&
              document.getElementById("connect").innerText == "断开"
            ) {
              console.log(
                "修改门电机状态为关",
                Date()
                  .split(" ")
                  .join("-")
              );
              var mycommand =
                pathToAsset1 +
                " -w " +
                myservename +
                " Channel1.Device1.y15  " +
                1;
              console.log("执行命令", mycommand);
              cmd.get(mycommand, mycallbacktongyong);
              var mycommand =
                pathToAsset1 +
                " -w " +
                myservename +
                " Channel1.Device1.y14  " +
                0;
              console.log("执行命令", mycommand);
              cmd.get(mycommand, mycallbacktongyong);
            } else {
              var tanchu = "先连接服务器之后,开启自动刷新,才能修改";
              alert(tanchu);
              console.log(tanchu);
            }
          });
          $("#stop2").click(function() {
            if (
              typeof myservename != "undefined" &&
              document.getElementById("zdsx").checked == true &&
              document.getElementById("connect").innerText == "断开"
            ) {
              console.log(
                "修改门电机状态为停",
                Date()
                  .split(" ")
                  .join("-")
              );
              var mycommand =
                pathToAsset1 +
                " -w " +
                myservename +
                " Channel1.Device1.y14  " +
                0;
              console.log("执行命令", mycommand);
              cmd.get(mycommand, mycallbacktongyong);
              var mycommand =
                pathToAsset1 +
                " -w " +
                myservename +
                " Channel1.Device1.y15  " +
                0;
              console.log("执行命令", mycommand);
              cmd.get(mycommand, mycallbacktongyong);
            } else {
              var tanchu = "先连接服务器之后,开启自动刷新,才能修改";
              alert(tanchu);
              console.log(tanchu);
            }
          });

          function mycallbacktongyong(err, data, stderr) {
            if (!err) {
              var meihangarray1 = data.split("\n");
              console.log(meihangarray1);
            } else {
              console.log("error", err);
            }
          }
          document.getElementById("zdsx").onchange = document.getElementById(
            "tzsx"
          ).onchange = function() {
            // console.log(
            //   "是否刷新",
            //   document.getElementById("zdsx").checked,
            //   document.getElementById("tzsx").checked
            // );
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
                    console.log(
                      "开始连接服务器",
                      myservename,
                      Date()
                        .split(" ")
                        .join("-")
                    );
                    myrefresh(myservename);
                  } else {
                    lianjiefailure("服务器名称不能为空");
                    console.log("服务器名称不能为空");
                    document.getElementById("connect").innerText = "连接";
                  }
                }
              }
            }
          };
          $("#zizd").click(function() {
            document.getElementById("zdsx").click();
          });
          $("#zitz").click(function() {
            document.getElementById("tzsx").click();
          });
          $("#connect").click(function() {
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
              document.getElementById("connect").innerText = "断开";
              initclick = 1;

              myservename = $("#server").val();
              if (myservename) {
                console.log("开始连接服务器", myservename);
                myrefresh(myservename);
              } else {
                lianjiefailure("服务器名称不能为空");
                console.log("服务器名称不能为空");
                alert("服务器名称不能为空");
                document.getElementById("connect").innerText = "连接";
              }
            } else if (document.getElementById("connect").innerText == "断开") {
              document.getElementById("connect").innerText = "连接";
              lianjiesuccess("断开成功");
              myallruntime = 0;
              allrefreshcishu = 0;
              my空闲时间次数 = 0;
              my停靠1层次数 = 0;
              my停靠2层次数 = 0;
              my停靠3层次数 = 0;
              my停靠4层次数 = 0;
              my开门次数 = 0;
              my关门次数 = 0;
              document.getElementById("allruntime").innerText =
                "已启动时间:" +
                myallruntime / 1000 +
                "秒" +
                " 已刷新次数:" +
                allrefreshcishu +
                "次";
            }
          });

          function chushihuachazhaofwq() {
            console.log(
              "初始化查找服务器",
              Date()
                .split(" ")
                .join("-")
            );
            console.log("执行命令", pathToAsset1 + " -l");
            cmd.get(pathToAsset1 + " -l ", mycallback3);
          }

          function mycallback3(err, data, stderr) {
            var mykaishi, myserverlist, myjiewei;
            if (!err) {
              meihangarray1 = data.split("\n");

              if (meihangarray1.length >= 2) {
                usefuloutput1 = [];

                for (var key in meihangarray1) {
                  if ((mykaishi = meihangarray1[key].indexOf("ProgID:")) >= 0) {
                    usefuloutput1.push(meihangarray1[key]);
                  }
                }

                if (usefuloutput1.length > 0) {
                  console.log(
                    "找到" + usefuloutput1.length + "个opc服务器",
                    Date()
                      .split(" ")
                      .join("-")
                  );
                  myserverlist = [];
                  for (key in usefuloutput1) {
                    if (
                      (myjiewei = usefuloutput1[key].indexOf("CLSID:")) >= 0
                    ) {
                      myserverlist.push(
                        usefuloutput1[key].slice(
                          mykaishi + 2 + "ProgID:".length,
                          myjiewei - 1
                        )
                      );
                    }
                  }
                  console.log(myserverlist);
                  myserverlist.forEach(function(currentValue, index) {
                    var fuwuqianniu = [];
                    fuwuqianniu[index] = $("<a></a>").text(currentValue);
                    $("#xialiacaidan").append(
                      $("<li></li>").append(fuwuqianniu[index])
                    );

                    console.log("下拉菜单添加项目", currentValue);
                    fuwuqianniu[index].click(function() {
                      $("#server").val(currentValue);
                    });
                  });
                } else {
                  alert("没有找到任何opc服务器");
                  console.log("没有找到任何opc服务器");
                }
              } else {
                alert("执行失败,请使用管理员权限执行");
                console.log("执行失败,请使用管理员权限执行");
              }
            } else {
              console.log("error", err);
            }
          }

          function myrefresh(myservename) {
            console.log("执行命令", pathToAsset1 + " -l");
            cmd.get(pathToAsset1 + " -l ", mycallback1);
          }

          function mycallback1(err, data, stderr) {
            var mykaishi, myserverlist, myjiewei, lasttime;
            if (!err) {
              meihangarray1 = data.split("\n");

              if (meihangarray1.length >= 2) {
                usefuloutput1 = [];

                for (var key in meihangarray1) {
                  if ((mykaishi = meihangarray1[key].indexOf("ProgID:")) >= 0) {
                    usefuloutput1.push(meihangarray1[key]);
                  }
                }

                if (usefuloutput1.length > 0) {
                  console.log("找到" + usefuloutput1.length + "个opc服务器");
                  myserverlist = [];
                  for (key in usefuloutput1) {
                    if (
                      (myjiewei = usefuloutput1[key].indexOf("CLSID:")) >= 0
                    ) {
                      myserverlist.push(
                        usefuloutput1[key].slice(mykaishi + 2 + 7, myjiewei - 1)
                      );
                    }
                  }
                  console.log(myserverlist);

                  function checkAdult(age) {
                    return age == myservename;
                  }
                  var chazhaofuwuqi = myserverlist.filter(checkAdult);
                  //   console.log(chazhaofuwuqi);
                  lasttime = new Date().getTime();
                  myallruntime = lasttime - strt;
                  document.getElementById("allruntime").innerText =
                    "已启动时间:" +
                    myallruntime / 1000 +
                    "秒" +
                    " 已刷新次数:" +
                    allrefreshcishu +
                    "次";
                  if (chazhaofuwuqi.length > 0) {
                    console.log(
                      "成功找到指定的服务器",
                      "从指定的服务器刷新数据",
                      myservename,
                      Date()
                        .split(" ")
                        .join("-")
                    );

                    if (document.getElementById("zdsx").checked == true) {
                      console.log(
                        "执行命令",
                        pathToAsset1 + " -d " + myservename
                      );

                      cmd.get(pathToAsset1 + " -d " + myservename, mycallback2);
                      //   console.log(
                      //     "是否刷新",
                      //     document.getElementById("zdsx").checked,
                      //     document.getElementById("tzsx").checked
                      //   );
                    }
                  } else {
                    console.log("未找到指定的服务器", myservename);
                    alert("未找到指定的服务器");
                    lianjiefailure("未找到指定的服务器");
                    document.getElementById("connect").innerText = "连接";
                  }
                } else {
                  console.log("没有找到任何opc服务器");
                  alert("没有找到任何opc服务器");
                }
              } else {
                alert("执行失败,请使用管理员权限执行");
                console.log("执行失败,请使用管理员权限执行");
              }
            } else {
              console.log("error", err);
            }
          }

          function mycallback2(err, data, stderr) {
            var meihangarray,
              usefuloutput,
              zhuangtaibiao,
              jiequkai,
              jiequend,
              mytiqu;
            isrunfresh = 1;
            var diantidata = {};
            if (!err) {
              meihangarray = data.split("\n");

              usefuloutput = [];
              for (var key in meihangarray) {
                if (meihangarray[key].indexOf("read-uint-") >= 0) {
                  usefuloutput.push(meihangarray[key]);
                }
              }

              if (usefuloutput.length > 0) {
                lianjiesuccess();
                document.title = "四层电梯监控-" + myservename;
                zhuangtaibiao = [];
                usefuloutput.forEach(function(value, index, arr) {
                  jiequkai =
                    value.indexOf("read-uint-Channel1.Device1.") +
                    "read-uint-Channel1.Device1.".length;
                  jiequend = value.indexOf("-read-finish");
                  mytiqu = value.slice(jiequkai, jiequend);

                  zhuangtaibiao.push(mytiqu);
                });

                //   console.log(zhuangtaibiao);

                zhuangtaibiao.forEach(function(value) {
                  var chaifenshu = value.split("=");
                  diantidata[chaifenshu[0]] = chaifenshu[1];
                  $("#my" + chaifenshu[0]).text(chaifenshu[1]);
                  /* 
                      if (chaifenshu[0] == "x0") {
                        $("#myx0").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "x1") {
                        $("#myx1").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "x2") {
                        $("#myx2").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "x3") {
                        $("#myx3").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "x4") {
                        $("#myx4").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "x5") {
                        $("#myx5").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "x6") {
                        $("#myx6").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "x7") {
                        $("#myx7").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "x10") {
                        $("#myx10").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "x11") {
                        $("#myx11").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "x12") {
                        $("#myx12").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "x13") {
                        $("#myx13").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "x14") {
                        $("#myx14").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "x15") {
                        $("#myx15").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "x16") {
                        $("#myx16").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "x17") {
                        $("#myx17").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "y0") {
                        $("#myy0").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "y1") {
                        $("#myy1").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "y2") {
                        $("#myy2").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "y3") {
                        $("#myy3").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "y4") {
                        $("#myy4").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "y5") {
                        $("#myy5").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "y6") {
                        $("#myy6").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "y7") {
                        $("#myy7").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "y10") {
                        $("#myy10").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "y11") {
                        $("#myy11").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "y12") {
                        $("#myy12").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "y13") {
                        $("#myy13").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "y14") {
                        $("#myy14").text(chaifenshu[1]);
                      } else if (chaifenshu[0] == "y15") {
                        $("#myy15").text(chaifenshu[1]);
                      } */
                });
                console.log(diantidata);
                //   JSON.stringify(temp1)
                var mytemphangids = [
                  "#myx0",
                  "#myx1",
                  "#myx2",
                  "#myx3",
                  "#myx4",
                  "#myx5",
                  "#myx6",
                  "#myx7",
                  "#myx10",
                  "#myx11",
                  "#myx12",
                  "#myx13",
                  "#myx14",
                  "#myx15",
                  "#myx16",
                  "#myx17",
                  "#myy0",
                  "#myy1",
                  "#myy2",
                  "#myy3",
                  "#myy4",
                  "#myy5",
                  "#myy6",
                  "#myy7",
                  "#myy10",
                  "#myy11",
                  "#myy12",
                  "#myy13",
                  "#myy14",
                  "#myy15"
                ];
                /* bootstrap4的表格class不一样,success改成table-success */
                mytemphangids.forEach(function(val) {
                  if ($(val).text() == "1" || $(val).text() != "0") {
                    $(val).text("1");
                    $(val)
                      .parent()
                      .addClass("table-success")
                      .removeClass("table-warning");
                  } else {
                    $(val)
                      .parent()
                      .addClass("table-warning")
                      .removeClass("table-success");
                  }
                });

                if ($("#myx12").text() == "1") {
                  $("#myz1").text("1");
                } else if ($("#myx13").text() == "1") {
                  $("#myz1").text("2");
                } else if ($("#myx14").text() == "1") {
                  $("#myz1").text("3");
                } else if ($("#myx15").text() == "1") {
                  $("#myz1").text("4");
                } else {
                  $("#myz1").text("中");
                }

                if ($("#myz1").text() == "中") {
                  $("#myz1")
                    .parent()
                    .addClass("table-warning")
                    .removeClass("table-success");
                } else {
                  $("#myz1")
                    .parent()
                    .addClass("table-success")
                    .removeClass("table-warning");
                }

                if ($("#myx16").text() == "1") {
                  $("#myz2").text("开");
                } else if ($("#myx15").text() == "1") {
                  $("#myz2").text("关");
                } else {
                  $("#myz2").text("中");
                }

                if ($("#myz2").text() == "中") {
                  $("#myz2")
                    .parent()
                    .addClass("table-warning")
                    .removeClass("table-success");
                } else {
                  $("#myz2")
                    .parent()
                    .addClass("table-success")
                    .removeClass("table-warning");
                }

                if ($("#myy12").text() == "1") {
                  $("#myz3").text("上");
                } else if ($("#myy13").text() == "1") {
                  $("#myz3").text("下");
                } else {
                  $("#myz3").text("停");
                }

                if ($("#myz3").text() == "停") {
                  $("#myz3")
                    .parent()
                    .addClass("table-warning")
                    .removeClass("table-success");
                } else {
                  $("#myz3")
                    .parent()
                    .addClass("table-success")
                    .removeClass("table-warning");
                }

                if ($("#myy14").text() == "1") {
                  $("#myz4").text("开");
                } else if ($("#myy15").text() == "1") {
                  $("#myz4").text("关");
                } else {
                  $("#myz4").text("停");
                }

                if ($("#myz4").text() == "停") {
                  $("#myz4")
                    .parent()
                    .addClass("table-warning")
                    .removeClass("table-success");
                } else {
                  $("#myz4")
                    .parent()
                    .addClass("table-success")
                    .removeClass("table-warning");
                }

                allrefreshcishu++;

                var lasttime = new Date().getTime();
                myallruntime = lasttime - strt;
                document.getElementById("allruntime").innerText =
                  "已启动时间:" +
                  myallruntime / 1000 +
                  "秒" +
                  " 已刷新次数:" +
                  allrefreshcishu +
                  "次";

                if (
                  $("#myy14").text() == "0" &&
                  $("#myy15").text() == "0" &&
                  $("#myy12").text() == "0" &&
                  $("#myy13").text() == "0"
                ) {
                  my空闲时间次数++;
                }

                $("#myfreetime").text(
                  Math.round((my空闲时间次数 / allrefreshcishu) * 100 * 100) /
                    100 +
                    "%"
                );

                $("#mybusytime").text(
                  100 -
                    Math.round((my空闲时间次数 / allrefreshcishu) * 100 * 100) /
                      100 +
                    "%"
                );

                if ($("#myy12").text() == "0" && $("#myy13").text() == "0") {
                  if ($("#myx12").text() == "1") {
                    my停靠1层次数++;
                  } else if ($("#myx13").text() == "1") {
                    my停靠2层次数++;
                  } else if ($("#myx14").text() == "1") {
                    my停靠3层次数++;
                  } else if ($("#myx15").text() == "1") {
                    my停靠4层次数++;
                  }
                }
                $("#my1floortime").text(
                  Math.round((my停靠1层次数 / allrefreshcishu) * 100 * 100) /
                    100 +
                    "%"
                );
                $("#my2floortime").text(
                  Math.round((my停靠2层次数 / allrefreshcishu) * 100 * 100) /
                    100 +
                    "%"
                );
                $("#my3floortime").text(
                  Math.round((my停靠3层次数 / allrefreshcishu) * 100 * 100) /
                    100 +
                    "%"
                );
                $("#my4floortime").text(
                  Math.round((my停靠4层次数 / allrefreshcishu) * 100 * 100) /
                    100 +
                    "%"
                );
                if ($("#myx16").text() == "1") {
                  my开门次数++;
                } else if ($("#myx17").text() == "1") {
                  my关门次数++;
                }
                $("#myopentime").text(
                  Math.round((my开门次数 / allrefreshcishu) * 100 * 100) / 100 +
                    "%"
                );
                $("#myclosetime").text(
                  Math.round((my关门次数 / allrefreshcishu) * 100 * 100) / 100 +
                    "%"
                );
              } else {
                lianjiefailure();
              }
            } else {
              console.log("error", err);

              alert("连接服务器失败");
              document.getElementById("connect").click();

              lianjiefailure();
            }
            var shuaxin = function() {
              setTimeout(function() {
                if (
                  document.getElementById("zdsx").checked == true &&
                  document.getElementById("connect").innerText == "断开"
                ) {
                  //   console.log(
                  //     "是否刷新",
                  //     document.getElementById("zdsx").checked,
                  //     document.getElementById("tzsx").checked
                  //   );
                  console.log(
                    "自动刷新",
                    Date()
                      .split(" ")
                      .join("-")
                  );
                  setTimeout(function() {
                    console.log(
                      "执行命令",
                      pathToAsset1 + " -d " + myservename
                    );
                    cmd.get(pathToAsset1 + " -d " + myservename, mycallback2);
                  }, shuaxinjiange);
                } else {
                  //   console.log(
                  //     "是否刷新",
                  //     document.getElementById("zdsx").checked,
                  //     document.getElementById("tzsx").checked
                  //   );
                  console.log(
                    "停止刷新",
                    Date()
                      .split(" ")
                      .join("-")
                  );
                  isrunfresh = 0;
                  lianjiesuccess("断开成功");
                  myallruntime = 0;
                  allrefreshcishu = 0;
                  my空闲时间次数 = 0;
                  my停靠1层次数 = 0;
                  my停靠2层次数 = 0;
                  my停靠3层次数 = 0;
                  my停靠4层次数 = 0;
                  my开门次数 = 0;
                  my关门次数 = 0;
                  document.getElementById("allruntime").innerText =
                    "已启动时间:" +
                    myallruntime / 1000 +
                    "秒" +
                    " 已刷新次数:" +
                    allrefreshcishu +
                    "次";
                }
              }, 0);
            };
            shuaxin();
          }

          function lianjiesuccess(ymrktext = "连接成功") {
            $("#connectstatus").text(ymrktext);
            $("#connectstatus").attr("style", "color:green");
          }

          function lianjiefailure(mytext = "连接失败") {
            $("#connectstatus").text(mytext);
            $("#connectstatus").attr("style", "color:red");
          }
        })();
      }
    }).$mount("#app");
})();

window.nodeRequire = window.require;
// delete window.require;
