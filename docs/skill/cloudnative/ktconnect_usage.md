---
id: ktconnect-usage
slug: ktconnect-usage
title: k8s开发工具之KtConnect
# date: 2024-07-17T21:24:25
tags: [K8S, KtConnect]
last_update:
  date: 2024-11-13T20:00:00
---

## 概述

- [官网链接](https://alibaba.github.io/kt-connect/#/)

KtConnect 是阿里开源的一款云原生协同开发测试解决方案,旨在提升开发者在Kubernetes 场景下的本地开发测试效率,它通过建立本地到K8S集群的双向通道,允许开发者在本地直接访问K8S集群服务,或将K8S集群的流量转发到本地.简言之,KtConnect是面向K8S的本地开发者辅助工具.



## 安装

- [下载链接](https://alibaba.github.io/kt-connect/#/zh-cn/guide/downloads)

### 1、下载kubectl client 命令行工具

- [链接](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.22.md#v1222)

### 2、配置环境变量并验证

```bash
kubectl version --client

############PS#####################
 JHC142: C:\ [ base 3.12.4]❯ kubectl version --client
Client Version: v1.29.2
Kustomize Version: v5.0.4-0.20230601165947-6ce0bf390ce3
```

### 3、配置K8S集群的config

- 将k8s集群的config配置文件拷贝到`C:\Users\xxxx\.kube` 文件夹中

### 4、验证是否能连接到k8s集群

```bash
kubectl cluster-info

############PS#####################
 JHC142: C:\ [ base 3.12.4] ❯ kubectl cluster-info
Kubernetes control plane is running at https://172.x.x.x:6443
CoreDNS is running at https://172.16.2.129:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
```

### 5、下载ktconnect并配置

- 下载 kt connect 并将其放到和kubectl client 的同一个 bin目录下

### 6、验证是否安装成功

```bash
ktctl -v

############PS#####################
 JHC142: C:\ [ base 3.12.4] ❯ ktctl -v
ktctl version 0.3.7
```

### 7、启动

- 使用管理员启动Powershell,并启动kt-connect

```bash
ktctl connect -n <namespace name> --excludeIps 172.16.2.0/24   # <网关地址需要更换成为自己的

############PS#####################
 JHC142: C:\ [ base 3.12.4] ❯ ktctl connect -n bluewhale-platform --excludeIps 172.16.2.0/24
4:15PM INF Using cluster context kubernetes-admin@kubernetes (kubernetes)
4:15PM INF KtConnect 0.3.7 start at 22548 (windows amd64)
4:15PM INF Fetching cluster time ...
4:15PM INF Using tun2socks mode
4:15PM INF Successful create config map kt-connect-shadow-odtnt
4:15PM INF Deploying shadow pod kt-connect-shadow-odtnt in namespace bluewhale-platform
4:15PM INF Waiting for pod kt-connect-shadow-odtnt ...
4:15PM INF Pod kt-connect-shadow-odtnt is ready
4:15PM INF Port forward local:10441 -> pod kt-connect-shadow-odtnt:22 established
4:15PM INF Socks proxy established
2024/08/23 16:15:17 Using existing driver 0.14
2024/08/23 16:15:17 Creating adapter
4:15PM INF Tun device KtConnectTunnel is ready
2024/08/23 16:15:17 Removed orphaned adapter "KtConnectTunnel 1"
4:15PM INF Adding route to 10.96.0.0/16
4:15PM INF Adding route to 100.90.254.0/24
4:15PM INF Adding route to 100.82.112.0/24
4:15PM INF Adding route to 100.85.170.0/24
4:15PM INF Adding route to 100.103.44.0/24
4:15PM INF Route to tun device completed
4:15PM INF Setting up dns in local mode
4:15PM INF Port forward local:45198 -> pod kt-connect-shadow-odtnt:53 established
4:15PM INF Setup local DNS with upstream [tcp:127.0.0.1:45198 udp:172.16.1.117:53]
4:15PM INF Creating udp dns on port 53
4:15PM INF ---------------------------------------------------------------
4:15PM INF  All looks good, now you can access to resources in the kubernetes cluster
4:15PM INF ---------------------------------------------------------------

```

