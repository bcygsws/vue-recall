<template>
  <div>
    <h3>这是keep-alive组件的使用</h3>
    <p>在方法中看nginx部署前端项目时location的配置规则</p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    /* location:{
        = 严格匹配，如果location到这个请求，立即停止搜索并处理请求
        ~ 区分大小写匹配
        ~* 不区分大小写匹配
        ！~ 区分大小写不匹配
        ！~* 不区分大小写不匹配
        ^~ 如果把这个前缀用于常规字符串，那么告诉nginx如果路径匹配，就不测试正则表达式
      } */
    /* 情形1：Nginx 反向代理模块的一般配置
      server{
        listen:80;   //监听端口
        server_name:localhost; //域名
        ## 用户访问localhost(默认端口是80，服务中声明了端口listen：80;)则代理到https://shanbei.com
        location / {
          root: html  // 根路径
          index: index.html index.htm;
          proxy_pass:"https://shanbei.com"

        }

      }
      */
    //  情形2：Cookie的正常写入
    /* server{
      listen:80;
      server_name:localhost;
      ##  proxy_cookie_domain:b.com a.com;中顺序不能反，当访问a.com时，反向代理到b.com。如果代理到某个域时，与当前页面的域名与cookie
      ## 的域名不匹配，前端的页面仍然停留在a.com ,造成b.com生成的cookie无法写人
      location / {
        root: html;
        index: index.html index.htm;
        proxy_cookie_domain:b.com a.com;
        proxy_pass:"http://b.com"
      }
    } */
    /* 情形3：URL重写---有时候只想将url下的/api代理到后端，需要配置url的重写规则
    ## rewrite重写规则  ^~ 告诉Nginx如果路径匹配，就不测试正则表达式
    server{
      listen:80;
      server_name:localhost;
      location / {
        root: html;
        index: index.html index.htm;
        location ^~ /api {
          rewrite: ^/api/(.*)$ /$1 break;
          proxy_pass: "http://api.shanbei.com"
        }
      }
    }
    */
  }
};
</script>
