---
title: NX30pro刷openwrt
published: 2026-02-27
description: 'web'
tags: [Web]
category: 'OpenWrt'
draft: false
---

## 目标:给NX30pro路由器刷入openwrt稳定运行

## 需要准备的

1.把你的NX30pro开启telnet

2.软件:xshell winscp uboot.img 机器的的bin固件

#以上文件的下载链接放到了文章末尾

## 1.开启路由器的ssh
    
1.先使用xshell连接到已经打开telent的NX30pro    
地址192.168.124.1 用户名H3C 密码就是你路由器后台的密码 协议使用telnet
![](https://im.213578848.xyz/nx30pro/x01.png)
![](https://im.213578848.xyz/nx30pro/x03.png)
2.准备使用Tftpd64将dropbear.ipk文件上传到路由器的/TMP目录中

首先搭建tftp服务器

先打开Ttfpd64软件
,然后找到设置

在设置中只保留TFTP服务
![](https://im.213578848.xyz/nx30pro/x04.png)
接着在TFTP目录中将目录设置为下载dropbear.ipk的目录
![](https://im.213578848.xyz/nx30pro/x05.png)
最后将网卡设置为192.168.124.1,
![](https://im.213578848.xyz/nx30pro/x06.png)
此时你的tftp服务器就弄好了

3.在telnet客户端中,使用tftp协议将文件下载到服务器

登录到你的路由器

输入
    
    cd /tmp

    tftp -gr dropbear_2019.78-2_aarch64_cortex-a53.ipk 192.168.124.X(要将X替换为你主机的实际ip)

![](https://im.213578848.xyz/nx30pro/x07.png)

看一眼Tftpd日志

![](https://im.213578848.xyz/nx30pro/x08.png)

这样就成功了


接着在telnet客户端输入

    opkg install /tmp/dropbear_2019.78-2_aarch64_cortex-a53.ipk

安装ipk

最后输入 

    /etc/init.d/dropbear enable
    /etc/init.d/dropbear start

这样ssh就开启成功了(准备开始刷机)

## 2.将路由器刷入不死uboot并写入openwrt

1.首先备份系统到tmp目录下
    
在telent客户端输入下面命令

    dd if=/dev/mtd5 of=/tmp/backup.img

然后打开WinSCP, 
新建一个SCP协议的连接

主机名192.168.124.1

端口号22 用户名H3C

密码为你路由器后台设置的密码

![](https://im.213578848.xyz/nx30pro/x10.png)

登录后将tmp目录下的 backup.img 文件下载到你的电脑上

![](https://im.213578848.xyz/nx30pro/x11.png)

完成备份


2.刷入uboot
将下载好的uboot.img文件上传到路由器的tmp目录下

![](https://im.213578848.xyz/nx30pro/x12.png)

进入telnet终端
输入指令

    mtd write /tmp/uboot.bin FIP

随后将路由器断电,按住Reset恢复键,然后插电,等待10s左右松开
路由器就进入了uboot 用网线连接到LAN1,在电脑配置好静态ip地址以连接到uboot


IP地址 192.168.1.2 网关 192.168.1.1 DNS 192.168.1.1 子网掩码点击自动填充

![](https://im.213578848.xyz/nx30pro/x13.png)

在浏览器输入 192.168.1.1 进入不死uboot界面

![](https://im.213578848.xyz/nx30pro/x14.png)

3.刷入openwrt

上传下载好的openwrt固件,然后刷入

![](https://im.213578848.xyz/nx30pro/x15.png)

重启后自动进入openwrt界面

后台地址192.168.6.1,用户名root，密码password

记得将你电脑的ip地址改为与路由器同网段

![](https://im.213578848.xyz/nx30pro/x16.png)

## 如何刷回原来系统？

同上述步骤,将路由器按住Reset恢复键,然后插电,等待10s左右松开

再次进入uboot,上传你原来备份的镜像

## 资料参考 
    https://blog.csdn.net/weixin_45131306/article/details/157174340
    https://blog.qust.me/nx30pro

## END
https://re.213578848.xyz/resources/NX30Pro