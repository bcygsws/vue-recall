<template>
  <div>
    <h3>vue跨域的fetch方法和axios方法</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    /* fetch和axios实现vue跨域
    fetch方法实现vue跨域优缺点：
    优点：解决了“回调地狱”
    缺点：API偏底层，需要自己封装；不带cookie,需要自己手动添加；对浏览器的支持不是那么好
    fetch("api/server/login",{
      methods:'post',
      header:{
        "Content-Type":"application/json",
        "token":"dfsaftaafarwqw33r5t452q3a"
      },
      body:JSON.stringify({username:'张三',password:123})
    }).then(result=>{
      return result.json(); // fetch中需要两个连写的.then才能拿到结果，第一个then返回的是一个promise实例
    }).then(data=>{
      console.log(data);
    });

    axios方法实现vue跨域
    优缺点：几乎完美
    1.浏览器和Node.js端都能使用
    2.支持promise
    3.可以拦截请求和拦截响应
    4.可以转换请求和响应
    5.可以取消请求
    6.返回数据格式自动为json
    7.可以防止CSRF(跨域伪造请求)
    */
  }
};
</script>
