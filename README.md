## Enhancer三方组件 jquery-qrcode 使用说明
### 简介
- jquery-qrcode是基于[Enhancer](https://enhancer.io)平台开发的组件, 能在此平台上良好运行。
- jquery-qrcode可将文本转化为二维码。

### 生成界面
![](https://github.com/Run-bird/jquery-qrcode/blob/master/images/WechatIMG1.jpeg)
### 配置界面
![](https://github.com/Run-bird/jquery-qrcode/blob/master/images/WechatIMG2.jpeg)

### 使用说明
- 在[Enhancer](https://enhancer.io)上注册，新建项目使用此组件。
- 在图二界面设置组件的数据源，及相关配置。

### 数据源设置
- 数据源格式说明：如 2 所示。
```
"https://enhancer.io"            【格式一】字符串

[{
  "text": "https://enhancer.io"  【格式二】包含text属性的对象数组
}]
```

### 组件功能
- 将文本转化成二维码


### 可用事件说明
#### 单击二维码（On Qrcode Click）
- 【事件 ID】onQrcodeClick
- 【触发时机】单击生成的二维码时。

### 可用变量说明
#### QRCODE_CONTENT
- 【类型】string
- 【说明】二维码文本内容
- 【示例】'https://enhancer.io'

### 其它
- [Enhancer 教程](https://enhancer.io/tutorials)
- [Enhancer 社区](https://forum.enhancer.io/#p=1&t=5)
