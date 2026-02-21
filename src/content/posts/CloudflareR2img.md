---
title: 利用CloudflareR2实现免费图床
published: 2026-02-08
description: 'web'
tags: [Web]
category: 'cloudflare'
draft: false
---
##  目标:白嫖cloudclare的免费桶存储
(cloudflare恩情还不完)

##  前提
1. 开通cloudflareR2
2. 拥有一个链接到cloudflare的域名(可选)

##  创建R2存储桶
找到 R2对象存储,点击概述
![1](https://im.213578848.xyz/img/w1.png)

  使用 银联 或 PayPal 绑定支付方式

  (这一步不会收取任何费用,包括到你开通后)

  (你还不知道paypal已经开通国区了吧)
![2](https://im.213578848.xyz/img/w2.png)
  开通后创建一个R2桶
![3](https://im.213578848.xyz/img/w3.png)
  这里填写你桶的名字
  
  然后点击创建存储桶
![4](https://im.213578848.xyz/img/w4.png)
![5](https://im.213578848.xyz/img/w5.png)

##  使用alist管理存储桶

  我们要先创建一个api令牌

  在R2概述中点击 右栏的令牌管理(Manage)
![6](https://im.213578848.xyz/img/w6.png)

  选择创建 Account API 令牌
  
![7](https://im.213578848.xyz/img/w7.png)

  这里写好令牌名称

  权限选择对象读和写

  指定存存储桶为你刚才创建的桶

  然后创建
![8](https://im.213578848.xyz/img/w8.png)

  创建完成后保存好你的API令牌(最好是截图保存,后面要用)

![9](https://im.213578848.xyz/img/w9.png)

  前往alist发布页 [Github](https://github.com/AlistGo/alist/releases?page=3)

  选择3.40版本

![10](https://im.213578848.xyz/img/w10.png)

下载 可执行文件.exe 并放到一个 无特殊符号或中文 的空目录下 

![11](https://im.213578848.xyz/img/w11.png)

  打开文件目录的cmd,使用 alist.exe server 运行软件
  
  此时会输出一堆日志

  我们只需用记住密码就行(如图上面的框内) 用户名是 admin
    
  管理地址一般是 http://localhost:5244/

![12](https://im.213578848.xyz/img/w12.png)

  打开登录后在页脚处找到管理

![13](https://im.213578848.xyz/img/w13.png)

  在右图中找到存储

![14](https://im.213578848.xyz/img/w14.png)

  选择添加(再选择对象存储)

![15](https://im.213578848.xyz/img/w15.png)

  找到你之前截下的令牌图

  对应下面填写(地区写auto,目录直接写/)
  
![16](https://im.213578848.xyz/img/w16.png)

![17](https://im.213578848.xyz/img/w17.png)

  添加并保存
  
  然后再主界面可以添加文件了

![18](https://im.213578848.xyz/img/w18.png)

  可以看到速度还是不错的

![18_1](https://im.213578848.xyz/img/w18_1.png)

  上传一张照片

![20](https://im.213578848.xyz/img/w20.png)

##  绑定域名

  返回到R2 点到刚才创建的存储桶 点击设置
  
  添加自定义域名  

![21](https://im.213578848.xyz/img/w21.png)

![22](https://im.213578848.xyz/img/w22.png)

  这样就可以通过域名访问桶中的文件了
  
![23](https://im.213578848.xyz/img/w23.png)

##  End
