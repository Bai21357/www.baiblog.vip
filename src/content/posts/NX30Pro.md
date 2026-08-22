---
title: NX30Pro刷入OpenWrt教程
published: 2026-02-27
description: 'H3C NX30Pro路由器刷入OpenWrt固件全流程'
tags: [NX30pro]
category: 'OpenWrt'
draft: false
---
免责:本文仅为个人记录,本文的部分设备固件和文章所涉及到的部分操作来源于这些教程  

https://blog.csdn.net/weixin_45131306/article/details/157174340

https://blog.qust.me/nx30pro

## 目标:给NX30pro路由器刷入openwrt稳定运行

## 需要准备的

1.一台开启telnet的NX30pro

2.软件工具Xshell、WinSCP、Tftpd64

3.固件文件uboot.img、OpenWrt 固件

4.一台电脑

### 所有所需文件的下载链接已整理在文末。

## 1.开启路由器的ssh
    
### 1.1使用 Xshell 连接 Telnet

先使用xshell连接到已经打开telent的NX30pro    

地址:192.168.124.1 

用户名:H3C

密码:路由器后台的密码

协议:telnet
![](https://im.213578848.xyz/nx30pro/x01.png)
![](https://im.213578848.xyz/nx30pro/x03.png)

### 1.2搭建 TFTP 服务器

准备使用Tftpd64将dropbear.ipk文件上传到路由器的/TMP目录中

先打开Ttfpd64软件,找到设置,在服务选项卡仅勾选 TFTP 服务
![](https://im.213578848.xyz/nx30pro/x04.png)

接着在TFTP目录中将 根目录 设置为存放 dropbear.ipk 文件的文件夹

![](https://im.213578848.xyz/nx30pro/x05.png)

在网卡选项卡中将服务器IP绑定为 192.168.124.1

![](https://im.213578848.xyz/nx30pro/x06.png)
此时你的tftp服务器就弄好了

### 1.3在telnet客户端中,使用tftp协议将文件下载到服务器并安装

回到 Xshell 的 Telnet 终端,登录到你的路由器

然后依次执行以下命令
    
    cd /tmp

    tftp -gr dropbear_2019.78-2_aarch64_cortex-a53.ipk 192.168.124.X(要将X替换为你主机的实际ip)

![](https://im.213578848.xyz/nx30pro/x07.png)

查看Tftpd日志

![](https://im.213578848.xyz/nx30pro/x08.png)

如图所示即为成功


接着安装 dropbear

    opkg install /tmp/dropbear_2019.78-2_aarch64_cortex-a53.ipk

最后输入 

    /etc/init.d/dropbear enable
    /etc/init.d/dropbear start

至此ssh就开启成功了(准备开始刷机)

## 2.将路由器刷入不死uboot并写入openwrt

### 2.1首先备份原厂固件至tmp目录下
    
在telent客户端输入下面命令

    dd if=/dev/mtd5 of=/tmp/backup.img

然后打开WinSCP, 
新建一个SCP协议的连接

主机名:192.168.124.1

端口号:22 

用户名:H3C

密码:路由器后台设置的密码

![](https://im.213578848.xyz/nx30pro/x10.png)

登录后将tmp目录下的 backup.img 文件下载到你的电脑上

![](https://im.213578848.xyz/nx30pro/x11.png)

完成备份


### 2.2刷入uboot

使用 WinSCP 将下载好的uboot.img文件上传到路由器的/tmp目录下

![](https://im.213578848.xyz/nx30pro/x12.png)

进入Telnet终端
输入指令

    mtd write /tmp/uboot.bin FIP

等待刷写完成后

1. 将路由器断电

2. 用网线将电脑连接到路由器的LAN口

3. 按住路由器背面的Reset复位键,同时插入电源

4. 保持按住Reset键约10秒,直到指示灯闪烁后松开


配置连接电脑的静态IP

IP地址 192.168.1.2 

网关 192.168.1.1 

DNS 192.168.1.1 

子网掩码 255.255.255.0

![](https://im.213578848.xyz/nx30pro/x13.png)

在浏览器输入 192.168.1.1 即可看到U-Boot界面

![](https://im.213578848.xyz/nx30pro/x14.png)

### 3.刷入Openwrt固件

上传下载好的openwrt固件,然后刷入

![](https://im.213578848.xyz/nx30pro/x15.png)

重启后自动进入openwrt界面

后台地址192.168.6.1,用户名root，密码password

记得将你电脑的ip地址改为与路由器同网段

![](https://im.213578848.xyz/nx30pro/x16.png)

## 如何刷回原原厂系统？

同上述步骤,将路由器按住Reset恢复键,然后插电,等待10s左右松开

再次进入uboot,上传你原来备份的backup.img文件

## 所需文件下载
https://re.213578848.xyz/resources/NX30Pro


## END
