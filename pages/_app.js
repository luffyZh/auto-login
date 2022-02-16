import React, { useEffect, useState } from 'react';

import '../styles/globals.css'

function clickListener() {
  localStorage.setItem("lastClickTime", Date.now());
}

function MyApp({ Component, pageProps }) {

  let [timer] = useState(null);

  useEffect(() => {
    // 初始化进入给一个 default time
    localStorage.setItem("lastClickTime", Date.now());
    // 初始化监听点击事件
    window.addEventListener("click", clickListener, true);
    function isNeedLogin() {
      clearInterval(timer);
      timer = setInterval(() => {
        const lastClickTime = +localStorage.getItem("lastClickTime");
        // 获取当前时间
        const nowTime = Date.now();
        console.log(`距离上一次点击过去了：${(nowTime - lastClickTime) / 1000}秒`);
        // 这里设置是1分钟超时
        if ((nowTime - lastClickTime) > 1000 * 60) {
          // 提示一下用户
          console.log('已超时，请重新登录');
          window.location.href = '/login';
        }
      // 每5秒轮训一次
      }, 5000);
    }
    isNeedLogin();
    return () => {
      clearInterval(timer);
      window.removeEventListener("click", () => {}, true);
    }
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
