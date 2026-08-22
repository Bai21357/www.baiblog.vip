---
title: DPI 深度包检测逃逸实战
published: 2026-06-04
description: 'aliyun形同虚设的DPI拦截机制'
tags: [web]
category: 'tls'
draft: false
---

# 实战

目标资产: 2135701.xyz (未备案域名)

解析 IP: 123.56.190.4 (阿里云)

### 未使用tls加密连接

直接明文 HTTP 访问，被阿里云网关拦截：

![1](https://im.213578848.xyz/aly/a2.png)

### 使用自签tls1.3证书加密连接

通过 TLS 1.3 加密后，成功绕过 DPI 阻断：

![1](https://im.213578848.xyz/aly/a1.png)

### nginx前后配置文件对比
![1](https://im.213578848.xyz/aly/a3.png)

### 原理分析
阿里云对未备案域名的拦截机制，依赖于 深度包检测（DPI） 技术。DPI 通过解析 TLS 握手阶段的 Client Hello 数据包，从中提取 SNI（Server Name Indication）字段来识别目标域名

当检测到未备案域名时，网关会主动阻断连接.然而，这种检测机制存在一个可被利用的缺陷：

通过将 TLS Client Hello 分片发送，可以使 DPI 设备无法完整重组并解析 SNI 信息，从而绕过拦截。

## 灵感来源/具体分析 https://2x.nz/posts/aliyun-icp-tls-bug/