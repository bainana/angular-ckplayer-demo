# angular4 Ckplayer demo
可直接播放rtmp、m3u8视频流，直播流。
此文件下载后，经过测试在本地运行正常，angular版本为4.0。 ckplayer为最新版，不是6.8版本。

###下面为我在编写此功能时的操作步骤，您也可以参照此步骤加入您的项目中：
#### 1.下载ckpalyer整个包并导入
将ckplayer放到src/assets/下
#### 2.引入ckplayer.js
angular2中，在angular.json中找到script,添加上ckplayer.js
```
"scripts": ["./assets/ckplayer/ckplayer.js"]
```
#### 3.编写html

```
<div id="video" class="video"></div>
```

#### 4.编写实现函数
在app.component.ts中添加
```
player: any;
```
```
videoPlay(){
    var videoObject = {
        container: '#video',//“#”代表容器的ID，“.”或“”代表容器的class
        variable: 'player',//该属性必需设置，值等于下面的new chplayer()的对象
        autoplay: false,//自动播放
        live: true,
        poster: 'material/poster.jpg',//视频封面
        video:'rtmp://live.hkstv.hk.lxdns.com/live/hks'//视频地址
    };
    this.player = new ckplayer(videoObject);
}
```

#### 5.调试程序中的报错
ckplayer一直有波浪线，同时还有报错
> ERROR in src/app/app.component.ts(24,27): error TS2304: Cannot find name 'ckplayer'.

此时需要将ckplaer进行declare一下，
找到src目录，创建typings.d.ts，加入以下代码，
```
declare var ckplayer: any;
```
#### 6.调试浏览器中的报错
此时程序中不再有报错了，但是打开网页发现视频仍然不能播放，在console栏中看到

localhost：4200/ckplayer.swf 404

将刚才的ckplayer中的几个相关文件拷贝到src目录下，我只拷贝了其中4个：
> ckplayer.swf,style.xml,language.xml，m3u8.swf
这里如果你只播放rtmp就不用把m3u8复制过来了

同时还要在angular.json中引入

```
"assets": [
        "assets",
        "favicon.ico",
        "favicon.png",
        "ckplayer.swf",
        "language.xml",
        "m3u8.swf",
        "style.xml"]
```
### 7.重新启动服务,这里我设置了视频开始时是暂停，可根据ckplayer配置进行调整。

```
ng serve
```
