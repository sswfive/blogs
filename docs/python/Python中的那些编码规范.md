---
id: py-coding-standards
slug: /py-coding-standards
title: Python中的那些编码规范
date: 2024-06-28T23:16:29
tags: [python]
keywords: [python]
last_update:
  date: 2024-11-12T20:00:00
---

<!-- truncate -->

:::tip 观点

	1. 我们也许都知道，好的变量名和注释其实并非为计算机而写，而是为阅读者或维护者而写。
	1. 对于下列介绍的规范及建议，除了自身训练形成习惯，还可以通过社区里提供的相关工具（如ruff）来提高效率。
:::



## 关于变量的命名

> 程序中，数据都是临时存储在内存中，为了更快速查找或使用这个数据，通常把这个数据在内存中存储之后定义一个名称，这个名称就是变量， 简言之，变量就是用来标记数据在内存中的存储位置。

在主流的编程语言中，变量命名风格主要分为驼峰命名派（CameCase）和蛇形命名派（snake_case），其中驼峰又分为大驼峰（CameCase）和小驼峰（cameCase）,在Python中，大驼峰和蛇形命名两种风格在不同场景中应用的都比较频繁，大驼峰命名主要应用在类名的定义上，其他场景绝大部分都是使用蛇形命名， 如：

- **普通变量名**：变量名，要全部小写，多个词通过下划线连接,即蛇形命名；
- **常量名**：要全部大写，多个词通过下划线连接；
- **函数(或方法)名**：要全部小写，多个词通过下划线连接；
- **类名**：要以驼峰形式命名，即单词首字母大写，多个词的话，每个词首字母大写然后直接拼接;
- **类的私有变量名**: 变量名前需要加2个下划线；

| **Type**                   | **Public**         | **Internal**                                                 |
| -------------------------- | ------------------ | ------------------------------------------------------------ |
| Modules                    | lower_with_under   | _lower_with_under                                            |
| Packages                   | lower_with_under   |                                                              |
| Classes                    | CapWords           | _CapWords                                                    |
| Exceptions                 | CapWords           |                                                              |
| Functions                  | lower_with_under() | _lower_with_under()                                          |
| Global/Class Constants     | CAPS_WITH_UNDER    | _CAPS_WITH_UNDER                                             |
| Global/Class Variables     | lower_with_under   | _lower_with_under                                            |
| Instance Variables         | lower_with_under   | _lower_with_under (protected) or __lower_with_under (private) |
| Method Names               | lower_with_under() | _lower_with_under() (protected) or __lower_with_under() (private) |
| Function/Method Parameters | lower_with_under   |                                                              |
| Local Variables            | lower_with_under   |                                                              |

### 一些好的实践

- 遵循PEP 8原则（Python官方制定的编码风格指南和建议）；
- 命名需要做到名如其意，不要吝啬名字的长度，但除了一些特殊场景，变量名一般不建议超过4个单词;
- 变量的描述性要强，比如：冬天的梅花比花的描述性更强；
- 当命名与关键字冲突时，在变量末尾加下划线，比如：class_;

```python
# (bad) 描述性弱的名字，看不懂在做什么
value = process(s.strip())
# (good) 描述性强的名字，尝试从用户输入里解析一个用户名
username = extract_username(input_string.strip())

# (good) 配合布尔值类型的变量名
is_superuser
has_errors
allow_enmpy

# (good) 匹配int/float类型的变量名
port、age  # 释义为数字的所有单词
user_id, host_id  # 使用_id结尾的单词
length_of_usernmae、max_length、users_count # 使用以length/count开头或结尾的单词

# 不建议拿一个名词的复数形式作为int类型的变量名；
```



## 关于注释的使用

Python中的注释主要分为以`#`开头的单行注释、和以三连字符串（`"""..."""`）表示的多行注释或文档注释。

- 代码块注释，在代码块上一行的相同缩进处以 # 开始书写注释；代码块注释最需要写注释的地方是代码中那些技巧性的部分；对于复杂的操作，应该在其操作开始之前写上若干行注释，对于不是一目了然的代码，应该在其行尾添加注释；
- 代码行注释，在代码行的尾部跟2个空格，然后以 # 开始书写注释，行注释尽量少写；
- TODO注释应该在所有开头处包含“TODO”字符串，紧跟着用括号括起来你的名字，email地址或其他标识符，然后是一个可选的冒号；
- 对于TODO注释的目的是用来表示“将来做某件事”，建议添加指定的日期；
- 英文注释开头要大写，结尾要写标点符号，避免语法错误和逻辑错误，中文注释也是相同要求；
- 改动代码逻辑时，一定要及时更新相关的注释；

```python
# TODO(ssw@gmail.com): Use a "*" here for string repetition.

# TODO(Luke) Change this to use relations.
```



## 关于导包的规范

在导包时，导入的内容总应该放在文件顶部, 位于模块注释和文档字符串之后,模块全局变量和常量之前. 导入应该按照从最通用到最不通用的顺序分组: 

1. 标准库导入
2. 第三方库导入
3. 应用程序指定导入

### 一些好的实践

- 当使用 import xxx时， 通常建议每行import只导入一个对象；
- 当使用from xxx import xxx时，import后面跟着的对象要是一个package(包对应代码目录)或者module(模块对应代码文件)，不要是一个类或者一个函数，
- 当使用from xxx import xxx时，原则上建议一行导入一个包，若实在想要在一行导入多个包，建议使用（）括号括起来；
- 当导入的包名较长时，建议使用as 进行局部重命名；
- 在工程开发上，建议引入格式化工具进行优化，当下开源的这类工具太多太多了，如isort、black，ruff（内置了前两种）;



## 关于缩进和换行

- 在python中，通常使用四个空格、或1个tab键实现缩进。但非常不建议Tab和空格混合使用；
- 一般通过代码逻辑拆分等手段来控制每行的最大长度不超过120个字符，但有些时候单行代码还是不可避免的会超过这个限制，这个时候就需要通过换行来解决问题了：
  - 第一种，通过小括号进行封装，此时虽然跨行，但是仍处于一个逻辑引用之下。比如函数参数列表的场景、过长的运算语句场景
    第二种，直接通过换行符()实现；



## 关于空行和空格

- 空行规范
    - 全局的(文件级别的)类和全局的函数上方要有两个空行
    - 类中的函数上方要有一个空行
    - 函数内部不同意群的代码块之前要有一个空行
    - 不要把多行语句合并为一行(即不要使用分号分隔多条语句)
    - 当使用控制语句if/while/for时，即使执行语句只有一行命令，也需要另起一行
    - 代码文件尾部有且只有一个空行
- 空格规范
    - 函数的参数之间要有一个空格
    - 列表、元组、字典的元素之间要有一个空格
    - 字典的冒号之后要有一个空格
    - 使用#注释的话，#后要有一个空格
    - 操作符(例如+，-，*，/，&，|，=，==，!=)两边都要有一个空格，不过括号(包括小括号、中括号和大括号)内的两端不需要空格



## 关于类或函数（方法）的注释

通常使用三个双引号开始，三个双引号结尾来实现文档注释；

1. 首先用一句话简单说明这个函数是做什么，然后跟一段话来详细解释；
2. 再往后就是参数列表、参数格式、返回值格式的描述；

**示例：**

```python
class SampleClass(object):
    """Summary of class here.

    Longer class information....
    Longer class information....

    Attributes:
        likes_spam: A boolean indicating if we like SPAM or not.
        eggs: An integer count of the eggs we have laid.
    """

    def __init__(self, likes_spam=False):
        """Inits SampleClass with blah."""
        self.likes_spam = likes_spam
        self.eggs = 0

    def public_method(self):
        """Performs operation blah."""
        if i & (i-1) == 0:        # true iff i is a power of 2
```

