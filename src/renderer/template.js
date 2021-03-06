export default `
      
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

          <li class="nav-item">
            <form class="navbar-form navbar-left" role="search">
              <div class="form-group">
                <div class="btn-group">
                  <input
                    id="server"
                    type="text"
                    style="text-align: center;"
                    class="nav-link form-control input-lg"
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
            <input
              class="nav-link"
              name="refresh"
              type="radio"
              checked="true"
              id="zdsx"
            />
          </li>

          <li class="nav-item">
            <h4 id="zizd" class="nav-link">自动刷新</h4>
          </li>
          <li class="nav-item">
            <input name="refresh" type="radio" id="tzsx" class="nav-link" />
          </li>
          <li class="nav-item">
            <h4 id="zitz" class="nav-link">停止刷新</h4>
          </li>
          <li class="nav-item">
            <h4 id="connectstatus" class="navbar-text nav-link">未连接</h4>
          </li>

          <li class="nav-item">
            <h4 id="allruntime" class="navbar-text nav-link">
              已启动时间:0秒 已刷新次数:0次
            </h4>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <div class="row container-fluid">
    <div class="container col-lg-3 col-md-3 col-sm-3 col-xs-6">
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
    <div class="container col-lg-3 col-md-3 col-sm-3 col-xs-6">
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
    <div class="container col-lg-3 col-md-3 col-sm-3 col-xs-6">
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
              <div class="btn-group">
                <button
                  type="button"
                  class="btn-block btn-default dropdown-toggle"
                  data-toggle="dropdown"
                >
                  修改 <span class="caret"></span>
                </button>
                <ul id="" class="dropdown-menu" role="menu">
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
    <div class="container col-lg-3 col-md-3 col-sm-3 col-xs-6">
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
              <div class="btn-group">
                <button
                  type="button"
                  class="btn-block btn-default dropdown-toggle"
                  data-toggle="dropdown"
                >
                  修改 <span class="caret"></span>
                </button>
                <ul id="" class="dropdown-menu" role="menu">
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
    <div class="container col-lg-3 col-md-3 col-sm-3 col-xs-6">
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
    <div class="container col-lg-3 col-md-3 col-sm-3 col-xs-6">
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
    <div class="container col-lg-3 col-md-3 col-sm-3 col-xs-6">
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
    <div class="container col-lg-3 col-md-3 col-sm-3 col-xs-6">
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
    <div class="container col-lg-6 col-md-6 col-sm-6 col-xs-12">
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
    <div class="container col-lg-6 col-md-6 col-sm-6 col-xs-12">
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
</div>
`;
