import { Component,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit {
  title = 'app';
  player: any;
  ngAfterViewInit(){
    this.videoPlayer();
  }
  videoPlayer(){
    var videoObject = {
          container: '#video',//“#”代表容器的ID，“.”或“”代表容器的class
          variable: 'player',//该属性必需设置，值等于下面的new chplayer()的对象
          autoplay: false,//自动播放
          live: true,
          // poster: 'material/poster.jpg',
          video:'rtmp://live.hkstv.hk.lxdns.com/live/hks'//视频地址
          // video:'http://live.hkstv.hk.lxdns.com/live/hks/playlist.m3u8'//视频地址
      };
      this.player = new ckplayer(videoObject);
  }
}
