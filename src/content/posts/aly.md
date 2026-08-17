---
title: DPI 深度包检测逃逸
published: 2026-06-04
description: 'aliyun形同虚设的拦截机制'
tags: [web]
category: 'tls'
draft: false
---

# 实战

目标资产: 2135701.xyz (未备案域名)

解析 IP: 123.56.190.4 (阿里云)

### 未使用tls加密连接

![1](https://im.213578848.xyz/aly/a2.png)

### 使用自签tls1.3证书加密连接

![1](https://im.213578848.xyz/aly/a1.png)

### nginx前后配置文件对比
![1](https://im.213578848.xyz/aly/a3.png)

## 灵感来源/具体分析 https://2x.nz/posts/aliyun-icp-tls-bug/