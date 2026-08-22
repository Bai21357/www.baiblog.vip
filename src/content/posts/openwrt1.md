---
title: 用OpenWrt软路由实现网关代理
published: 2026-02-06
description: '使用OpenWrt实现全屋科学上网,让设备自动获得科学上网能力'
tags: [Router, OpenWrt, Proxy]
category: 'OpenWrt'
draft: false
---
##  目标:
1. 让你摆脱每次上网都要手动打开代理客户端的操作

2. 让家中智能设备（如电视、游戏机、IoT设备等）获得科学上网能力

3. 实现一些普通代理软件难以做到的功能，例如全局透明代理

##  前提:
1. 已拥有可用的代理服务节点或有效的订阅链接

2. 一台可作为软路由的闲置设备

3. 具备基本的网络知识和动手能力

4. 已搭建好软路由运行环境 ([详见这里](https://www.bilibili.com/video/BV1mjFZzoEn1))

文中所需的软件放在了文章末尾


##  开始

  打开浏览器,登录到软路由设备
  
  更新软件源,在过滤器输入 luci-app-openclash 然后安装 OpenClash
  ![a2](https://im.213578848.xyz/Openwrt/a2.png)

  ![a1](https://im.213578848.xyz/Openwrt/a1.png)

  安装好服务后在左栏找到服务,点击OpenClash

  ![a3](https://im.213578848.xyz/Openwrt/a3.png)

##  方式一:添加自建服务器节点(ss协议为例)

  在上侧的配置栏中找到(一键生成)  
  按照图中方式配置
  ![a4](https://im.213578848.xyz/Openwrt/a4.png)

  下方找到服务器节点配置，选择添加配置

  ![a5](https://im.213578848.xyz/Openwrt/a5.png)

  填写好代理服务器的相关信息

  ![a6](https://im.213578848.xyz/Openwrt/a6.png)

  保存后,继续按照图中所示

  ![a7](https://im.213578848.xyz/Openwrt/a7.png)
  
  找到配置管理,如下图所示

  ![a8](https://im.213578848.xyz/Openwrt/a8.png)

  ![a9](https://im.213578848.xyz/Openwrt/a9.png)

  回到主界面,将运行模式改为Tun,勾选绕过大陆IP,最后点击运行

  ![a10](https://im.213578848.xyz/Openwrt/a10.png)

##  方式二:添加订阅链接(简单)


  ![a10_1](https://im.213578848.xyz/Openwrt/a10_1.png)


##  客户端设备配置
  将你的设备ip分配改为手动,其他不变,将默认网关改为你的软路由ip
  
  DNS可选择公共DNS(114.114.114.114)

  ![a11](https://im.213578848.xyz/Openwrt/a11.png)


##  效果验证

###  开始愉快的上网冲浪吧!

  ![a12](https://im.213578848.xyz/Openwrt/a12.png)

##  文件链接
  [PVE系统镜像](https://www.proxmox.com/en/downloads/proxmox-virtual-environment/iso)

  [ImmortalWrt 固件](https://fwselector.kyarucloud.moe/?version=23.05.1&target=x86%2F64&id=generic)

  [img2kvm](https://github.com/ywjno/img2kvm-rs/releases/tag/v0.2.0) (将img文件转换为KVM)
  
  [winscp](https://winscp.net/eng/download.php)

  [OpenWrt主题](https://github.com/derisamedia/luci-theme-alpha)


##  End