---
id: modelops-common-tech
slug: modelops-common-tech
title: 关于ModelOps的相关技术
tags: [ModelOps]
keywords: [ModelOps]
last_update:
  date: 2024-11-16T00:21:51
---

## 框架级

### 模型开发

#### Scikit-learn（SKlearn）

- [官网](https://scikit-learn.org/stable/)
- 简介：一个基于 SciPy 构建的用于机器学习的 Python 模块，并根据 3-Clause BSD 许可证分发


#### [PyTorch](https://pytorch.org/)
- [官网](https://pytorch.org/)
- 简介：Python 中的张量和动态神经网络，具有强大的 GPU 加速功能


### 模型解释
#### Alibi Explain
- [官网](https://docs.seldon.io/projects/alibi/en/stable/)
- [Github](https://github.com/SeldonIO/alibi)
- 简介：


### 模型检测
#### Alibi Detect
- [官网](https://docs.seldon.io/projects/alibi-detect/en/stable/)
- [Github](https://github.com/SeldonIO/alibi-detect) 
- 简介：是一个 Python 开源库，专注于异常值、对抗性、和漂移检测。该库涵盖表格数据、文本、图像和时间序列的在线和离线检测器，TensorFlow 和 PyTorch 后端都支持漂移检测。


### 模型管理
#### MLflow
- [官网](https://mlflow.org/)
- [Github](https://github.com/mlflow/mlflow)
- 简介：MLflow 是一个开源平台，专门用于帮助机器学习从业者和团队处理机器学习过程的复杂性，专注于机器学习项目的整个生命周期，确保每个阶段都是可管理、可追溯和可再现的。


### 模型部署
#### Seldon-core
- [官网](https://www.seldon.io/solutions/core-plus)
- [Github](https://github.com/SeldonIO/seldon-core)
- 简介：一款用于打包、部署、监控和管理数千个生产机器学习模型的 MLOps 框架


#### Kserve
- [官网](https://kserve.github.io/website/latest/)
- [Github](https://github.com/kserve/kserve)
- 简介：一款基于 Kubernetes 高度可扩展且基于标准的模型部署与推理平台

#### Ray
- [官网](https://www.ray.io/)
- [Github](https://github.com/ray-project/ray)
- 简介：一款 AI 计算引擎，管理、执行和优化 AI 工作负载的计算需求。它通过单一、灵活的框架统一基础设施，支持从数据处理到模型训练再到模型服务等任何人工智能工作负载。

#### [Polyaxon](https://github.com/polyaxon/polyaxon)

- [官网](https://polyaxon.com/)
- [Github](https://github.com/polyaxon/polyaxon)
- 简介：一个用于构建、训练和监控大规模深度学习应用程序的平台,用于管理和编排机器学习生命周期的 MLOps 工具

### 模型服务
MLServer

- [官网](https://mlserver.readthedocs.io/en/latest/getting-started/index.html)
- [Github](https://github.com/SeldonIO/MLServer/)
- 简介：一款 Python 开发的、适用于机器学习模型的推理服务器，旨在提供一种简单的方法来通过 REST 和 gRPC 接口开始为您的机器学习模型提供服务，完全符合KFServing 的 V2 Dataplane规范。

## 平台级

### [SkyPilot](https://skypilot.readthedocs.io/en/latest/docs/index.html)

- 简介：是一个用于在任何基础设施上运行 AI 和批处理工作负载的框架，提供统一执行、高成本节省和高 GPU 可用性。
- [文档链接](https://skypilot.readthedocs.io/en/latest/docs/index.html), [Github地址](https://github.com/skypilot-org/skypilot)
- [相关博客介绍](https://www.cloudpods.org/blog/introduction-to-the-skypilot-open-source-project)

### [Cloudpods](https://github.com/yunionio/cloudpods)

- 简介：一个使用Golang开发的云原生开源统一多云/混合云平台，即Cloudpods是*云上的云*。 Cloudpods 不仅能够管理本地 KVM/裸机，还能够管理来自许多云提供商的许多云帐户的资源。它隐藏了底层云提供商的差异，并公开了一组 API，允许以编程方式与众多云进行交互。
- [文档链接](https://www.cloudpods.org/)

### BentoML

- 简介:是一个 Python 库，用于构建针对 AI 应用程序和模型推理进行优化的在线服务系统, 服务 AI 应用程序和模型的最简单方法 - 构建模型推理 API、作业队列、 LLM应用程序、多模型管道等
- [文档地址](https://bentoml.com/)、[Github地址](https://github.com/bentoml/BentoML)



## 其他

### [Cog](https://github.com/replicate/cog)

- 简介：Cog 是将机器学习模型打包到容器的工具。可通过配置将机器学习模型所需的环境和依赖，自动打包到容器里方便部署，让你不再为编写 Docker 文件和 CUDA 而痛苦，还能自动启动 HTTP 接口服务方便调用
- [文档地址](https://cog.run/)、[Github地址](https://github.com/replicate/cog)

