import React, { Component } from 'react';
export default class App extends Component {
  render() {
    return (<div>
      <button
        type="button"
        onClick={() => {
          this.linkApp();
        }}
      >button</button>
      <a
        href="zhihu://"
      >打开App</a>
    </div>);
  }
  linkApp() {
    let u = navigator.userAgent;
    let isWeixin = u.toLowerCase().indexOf('micromessenger') !== -1; // 微信内
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; // android终端
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端

    // 微信内
    if (isWeixin) {
      alert('请在浏览器上打开');
    } else {
      // android端
      if (isAndroid) {
        // 安卓app的scheme协议
        window.location.href = 'alipay://';
        // setTimeout(function() {
        //     let hidden = window.document.hidden || window.document.mozHidden || window.document.msHidden || window.document.webkitHidden
        //     if (typeof hidden == "undefined" || hidden == false) {
        //         //应用宝下载地址 (emmm 找不到淘宝应用宝的地址，这里放的是 lucky coffee 地址)
        //         window.location.href = "https://a.app.qq.com/o/simple.jsp?pkgname=com.lucky.luckyclient";
        //     }
        // }, 1000);
      }
      // ios端
      if (isIOS) {
        // ios的scheme协议
        window.location.href = 'alipay://';
        // setTimeout(function() {
        //     let hidden = window.document.hidden || window.document.mozHidden || window.document.msHidden || window.document.webkitHidden
        //     if (typeof hidden == "undefined" || hidden == false) {
        //         //App store下载地址
        //         window.location.href = "http://itunes.apple.com/app/id387682726";
        //     }
        // }, 1000);
      }
    }
  }
}