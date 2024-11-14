---
id: pypi-source-usage
slug: /pypi-source-usage
title: 常用的Pypi源汇总及使用
tags: [Python, Pypi]
keywords: [Python, Pypi]
last_update:
  date: 2024-11-12T12:09:00
---

## 常用国外源

- [官方源](https://pypi.org/simple/)

## 常用国内源

- [清华源](https://mirrors.tuna.tsinghua.edu.cn/help/pypi/)

```bash
 # 清华大学 
 https://pypi.tuna.tsinghua.edu.cn/simple/ 
 
 # 阿里云 
 http://mirrors.aliyun.com/pypi/simple/ 

 # 中国科技大学 
 https://pypi.mirrors.ustc.edu.cn/simple/ 

 # 豆瓣(douban) 
 http://pypi.douban.com/simple/ 
```


## pip 国内源配置

- https://mirrors.tuna.tsinghua.edu.cn/help/pypi/

#### 临时指定国内源安装

- 在python3.6后，官方推荐使用 `python -m pip`的方式进行安装相关包x

```bash
python -m pip install -i https://mirrors.aliyun.com/pypi/simple <pkgname>
# pip install -i https://mirrors.aliyun.com/pypi/simple <pkgname>

python -m pip install -i https://pypi.tuna.tsinghua.edu.cn/simple <pkgname>

python -m pip install -i https://mirrors.ustc.edu.cn/pypi/web/simple <pkgname>
```

#### 永久设置国内源安装

- 下列以清华源设置为例，其他源设置类似

```bash
mkdir -p ~/.pip/
tee > ~/.pip/pip.conf <<EOF
{源名称下面的配置}
EOF

----

# 清华源
[global]
timeout = 6000 
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install] 
trusted-host = pypi.tuna.tsinghua.edu.cn
```

#### 命令行设置默认源

```bash
pip install pip -U -i https://pypi.tuna.tsinghua.edu.cn/simple
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```



## conda 国内源配置

```bash
# 中科大源
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/msys2/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/bioconda/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/menpo/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/

# 阿里源
conda config --add channels https://mirrors.aliyun.com/pypi/simple/

# 豆瓣源
conda config --add channels http://pypi.douban.com/simple/

# 其他配置
## 显示检索路径，每次安装包时会将包源路径显示出来
conda config --set show_channel_urls yes
conda config --set always_yes True

## 显示所有镜像通道路径命令
conda config --show channels

# 恢复默认源
conda config --remove-key channels
```



## PDM 国内源配置

通过如下命令设置默认镜像：

```bash
pdm config pypi.url https://pypi.tuna.tsinghua.edu.cn/simple
```

## Poetry 国内源配置

通过以下命令设置首选镜像：

```bash
poetry source add --priority=primary mirrors https://pypi.tuna.tsinghua.edu.cn/simple/
```

通过以下命令设置补充镜像：

```bash
poetry source add --priority=supplemental mirrors https://pypi.tuna.tsinghua.edu.cn/simple/
```
