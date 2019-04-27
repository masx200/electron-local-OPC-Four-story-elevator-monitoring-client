#electron-local-OPC-Four-story-elevator-monitoring-client
A minimal Electron application based on OPC-Client-console-LocalSyncWrapper
electron-local-OPC-Four-story-elevator-monitoring-client
本地四层电梯监控的gui实现,基于electron和OPC-Client-console-LocalSyncWrapper
读取本地opc服务器上的数据并展示,包括的opc标签有如下,可用ICONICS Simulator OPC Server 3.12进行模拟

 Channel1.Device1.x0 Channel1.Device1.x1 Channel1.Device1.x2 Channel1.Device1.x3 Channel1.Device1.x4 Channel1.Device1.x5 Channel1.Device1.x6 Channel1.Device1.x7 Channel1.Device1.x10 Channel1.Device1.x11 Channel1.Device1.x12 Channel1.Device1.x13 Channel1.Device1.x14 Channel1.Device1.x15  Channel1.Device1.x16  Channel1.Device1.x17 Channel1.Device1.y0 Channel1.Device1.y1 Channel1.Device1.y2 Channel1.Device1.y3 Channel1.Device1.y4 Channel1.Device1.y5 Channel1.Device1.y6 Channel1.Device1.y7 Channel1.Device1.y10 Channel1.Device1.y11 Channel1.Device1.y12 Channel1.Device1.y13 Channel1.Device1.y14 Channel1.Device1.y15
 
这个项目需要在windows系统中，以管理员身份运行

This project needs to be run as an administrator on the windows system.

run "npm install" to install node_modules

run "startrunadmin.bat" to start electron