---
title: ThinkPad E480 黑苹果EFI文件
published: 2025-08-21
description: '我的ThinkPadE480 EFI文件'
tags: [Web]
category: 'efi'
draft: false
---

## ThinkPad E480 黑苹果EFI文件


本项目为 ThinkPad E480（20KNA004CD）提供基于 **OpenCore 1.04** 的黑苹果引导文件。![项目地址](https://github.com/Bai21357/ThinkPad-E480-Hackintosh)

**项目地址**：[GitHub - Bai21357/ThinkPad-E480-Hackintosh](https://github.com/Bai21357/ThinkPad-E480-Hackintosh)

###  电脑配置

| 规格 | 详细信息 |
|------|----------|
| **型号** | ThinkPad E480（20KNA004CD）|
| **处理器** | Intel® Core™ i5-8250U（1.6 GHz）|
| **内存** | 8GB DDR4 2666MHz × 2（双通道）|
| **固态硬盘** | 致态 PC005 Active 500GB M.2 |
| **集成显卡** | Intel UHD Graphics 620 |
| **声卡** | Conexant CX20753/4 |
| **有线网卡** | Realtek RTL8111GUS |
| **无线网卡** | Realtek RTL8821CE → **BCM94352Z（DW1560）**（已更换）|

### 支持系统

-  **macOS Sequoia**（已测试版本 **15.5**）


### 无线网卡驱动

更换为 BCM94352Z（DW1560）后，需要安装 **OCLP（OpenCore Legacy Patcher）** 并打补丁才能正常驱动。


此处有个较为严重的Bug
网卡驱动后不可以在设置连接wifi,否则会报错,需要点击任务栏右上角wifi图标连接
在设置可以看到网络状态,但是不能在设置连接网络.

##  正常工作

| 功能 | 状态  | 备注 |
|------|-------|------|
| CPU 变频 | 正常  | — |
| 硬盘 | 正常  | — |
| 核显（UHD 620） | 正常  | 显存已设置为 **3072MB** |
| HDMI 输出 | 正常  | 支持 2K@60Hz、1080P@60Hz |
| 声卡 | 正常  | AppleALC 仿冒，注入 ID: `15` |
| 有线网卡 | 正常  | — |
| 电池 | 正常  | 电量及状态显示正常 |
| USB | 正常  | 读写和数据传输正常 |
| 触摸板 | 正常  | — |
| 小红点（TrackPoint） | 正常  | — |
| 摄像头 |  正常 | — |

###  工作异常

| 功能 | 状态  | 说明 |
|------|-------|------|
| **读卡器** |  无解 | 无法正常驱动，暂无解决方案 |

###  已知 Bug
| Bug 描述 | 说明 |
|----------|------|
| **Wi-Fi 设置页连接报错** | 网卡驱动后，**不可以在"系统设置"中连接 Wi-Fi**，否则会报错。**解决方法**：点击任务栏右上角的 Wi-Fi 图标进行连接。设置页面可查看网络状态，但切勿在此连接。 |
| **休眠唤醒后 Wi-Fi/蓝牙失效** | 休眠醒来后有概率触发 Wi-Fi 和蓝牙无法正常连接，需重启恢复。 |
| **Fn 功能键未映射** | 部分 Fn 组合键未适配，暂未解决。 |


注意事项：

BIOS中更改如下：

| 路径 | 设置 |
|------|------|
| **Security → Secure Boot** | Secure Boot: `Disabled` |
| **Security → Intel(R) SGX** | Intel(R) SGX Control: `Disabled` |
| **Startup → UEFI/Legacy Boot** | `Both` |
| **Startup → UEFI/Legacy Boot Priority** | `UEFI First` |
| **Startup → Optional Key Display** | `Enabled` |
| **Config → Storage** | Controller Mode: `AHCI mode` |

安装完成后如需登录AppleID请修改机器三码。
教程链接 : [macOS 配置备忘录](https://www.bilibili.com/opus/1068138626882207753)

###  更新日志

#### 2025-08-08
- OpenCore 版本升级至 **1.04**
- 首次上传发布


参考资料

- [ThinkPad E480 黑苹果踩坑和黑苹果常用操作备忘]()
- [huichenmoyan/ThinkPad-E480-Hackintosh]()
## END