---
title: 用OpenWrt软路由实现网关代理
published: 2026-02-06
description: 'web'
tags: [Web]
category: 'OpenWrt'
draft: false
---
##  目标:
  让你摆脱每次科学上网都需要打开代理软件的烦恼

  让你家里的网络直通国际信道(为部分无法使用代理的设备上网)

  并且实现一些代理软件做不到的功能(比如纯净ip环境)

##  前提:
  1.有一个已经安装好代理服务的节点(或订阅链接)

  2.有一台闲置的设备

  3.有魔法的环境()

需要软件放在了文章末尾

前期软路由安装视频

##  使用openclash实现网关代理

  更新软件源,安装 OpenClash
  ![a2](https://im.2xc.top/Openwrt/a2.png)

  ![a1](https://im.2xc.top/Openwrt/a1.png)

  安装好服务后在左栏找到服务,点击OpenClash

  ![a3](https://im.2xc.top/Openwrt/a3.png)

##  方式一:添加自建服务器节点(ss协议)

  在上侧的配置栏中找到(一键生成)  
  按照图中方式配置
  ![a4](https://im.2xc.top/Openwrt/a4.png)

  下方找到服务器节点配置，选择添加配置

  ![a5](https://im.2xc.top/Openwrt/a5.png)

  填写好代理服务器的相关信息

  ![a6](https://im.2xc.top/Openwrt/a6.png)

  保存后,继续按照图中所示

  ![a7](https://im.2xc.top/Openwrt/a7.png)
  
  找到配置管理,如下图所示

  ![a8](https://im.2xc.top/Openwrt/a8.png)

  ![a9](https://im.2xc.top/Openwrt/a9.png)

  回到主界面,将运行模式改为Tun,绕过大陆,最后点击运行

  ![a10](https://im.2xc.top/Openwrt/a10.png)

##  方式二:添加订阅链接(最简单)


  ![a10_1](https://im.2xc.top/Openwrt/a10_1.png)


##  上网设备配置
  将你的设备ip改为手动,其他不变,将默认网关改为你的软路由ip

  ![a11](https://im.2xc.top/Openwrt/a11.png)

##  开始愉快的上网冲浪吧!

  ![a12](https://im.2xc.top/Openwrt/a12.png)

##  文件链接
  [PVE系统镜像](https://www.proxmox.com/en/downloads/proxmox-virtual-environment/iso)

  [ImmortalWrt 固件](https://fwselector.kyarucloud.moe/?version=23.05.1&target=x86%2F64&id=generic)

  [img2kvm](https://github.com/ywjno/img2kvm-rs/releases/tag/v0.2.0) (将img文件转换为KVM)
  
  [winscp](https://winscp.net/eng/download.php)

##  End