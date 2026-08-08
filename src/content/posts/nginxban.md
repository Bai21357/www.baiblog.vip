---
title: 网站服务器被他人恶意解析的解决措施
published: 2026-08-08
description: 'web'
tags: [Web]
category: 'nginx'
draft: false
---
## 序言

某日,当你在搜索引擎上搜索自己的网站时,

突然发现有一个网站的标题,内容和你的Blog一摸一样.

这时你只是认为是一只爬虫爬取了你网站的内容.

但是当你在更新你的网站时,你发现这个网站的更新频率和你的网站完全相同.

这时你发现了不对,于是你解析了这个网站的IP.

结果却令人感到疑惑,解析出的IP正是你VPS的IP.

甚至连网站的证书都是你的.

![1](https://im.213578848.xyz/nginxban/n1.png)

![2](https://im.213578848.xyz/nginxban/n4.png)

![2](https://im.213578848.xyz/nginxban/n2.png)
## 核心原理

这并非黑客攻击服务器,而是利用了域名系统的一个缺陷.

1. **公网IP是前提:** 你的网站服务器有一个能被任意地址(0.0.0.0)访问的公网IP地址.

2. **IP直访是漏洞:** 你的VPS允许通过这个IP地址直接访问你的网站.

3. **恶意绑定是手段:** 攻击者将他自己的域名,通过设置DNS记录,指向了你的服务器IP.

## 造成的危害

**SEO的灾难:** 搜索引擎会因重复内容而难以判断谁是原创,会导致你网站的权重被分散,
排名被假网站挤占.

更严重的是,攻击者常用此手段为域名"镀金",一旦这些域名被举报,你的服务器IP可能因此被牵连,封禁.

## 解决的措施

如果你的VPS使用的是nginx代理

你可以通过新增规则来阻止通过IP直接访问网站

1. **新建全局默认拦截块** 

文件：/etc/nginx/conf.d/00-default-block.conf


```nginx
# 拦截所有未授权的 HTTP 请求
server {
listen 80 default_server;
listen [::]:80 default_server;
server_name _;
return 444;
}

# 拦截所有未授权的 HTTPS 请求
server {
listen 443 ssl default_server;
listen [::]:443 ssl default_server;
server_name _;

    # 使用假证书
    ssl_certificate /etc/nginx/ssl/dummy.crt;
    ssl_certificate_key /etc/nginx/ssl/dummy.key;

    return 444;
    #直接关闭与客户端的连接,不返回任何响应.
}
```

生成假证书

```
sudo mkdir -p /etc/nginx/ssl
sudo openssl req -x509 -nodes -days 1 -newkey rsa:2048 \
  -keyout /etc/nginx/ssl/dummy.key \
  -out /etc/nginx/ssl/dummy.crt \
  -subj "/CN=Invalid"
```

2. 保持你网站的配置文件不变(需要检查是否有拦截块)
 
    这里贴出我的nginx配置文件

    如果有其他网站配置文件需要同样检查
```
server {
listen 80;
server_name baiblog.vip www.baiblog.vip;
return 301 https://$host$request_uri;
}

server {
listen 443 ssl http2;
server_name baiblog.vip www.baiblog.vip;

    root /var/www/dist;
    index index.html;

    ssl_certificate /etc/letsencrypt/live/baiblog.vip/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/baiblog.vip/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}
```

3. 检查nginx语法,然后重载nginx

```
sudo nginx -t
sudo systemctl reload nginx
```

再次访问恶意解析IP的网站

发现状态码返回444,非法请求被拦截

该网站已自动获取假证书

![2](https://im.213578848.xyz/nginxban/n5.png)