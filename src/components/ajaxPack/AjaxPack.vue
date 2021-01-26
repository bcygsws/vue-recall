<template>
  <div>
    <h3>自己封装ajax-主要阅读methods节点中封装的formParams和ajax方法</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    /* ajax调用实例代码：
      ajax({
        url:'test.php',
        type:'post', // 请求方式
        data:{
          name:'张安石',
          age:18
        },
        async:true, // 默认为true表示请求方式是异步的，如果要设置同步，async值设为false
        success：function(data){ // 请求成功的回调
          console.log(data);
        }
      }); */
    formParams(data) {
      // 定义空数组的目的是，使用其join()方法，参数（或发送数据）连接成查询字符串
      var arr = [];
      for (var key in data) {
        arr.push(`${key}=${data[key]}`);
      }
      return arr.join('&');
    }
    // ajax(options) {
    //   var xhr = null;
    //   var params = this.formParams(options.data);
    //   // 1.创建异步对象xhr
    //   // 兼容性处理
    //   if (window.XMLHttpRequest) {
    //     xhr = new XMLHttpRequest();
    //   } else {
    //     xhr = new ActiveXObject('Microsoft.XMLHTTP');
    //   }
    //   // 2.创建建立连接的基本信息并设置响应头
    //   if (options.type === 'GET') {
    //     /* 三个参数：1.请求方式 2.请求url 3.请求属于同步还是异步 */
    //     xhr.open(options.type, options.url + '?' + params, options.async);
    //     // 3.发送请求
    //     xhr.send(null);
    //   } else if (options.type === 'POST') {
    //     // post请求还需要设置请求头
    //     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //     xhr.open(options.type, options.url, options.async);
    //     // 发送请求
    //     xhr.send(params);
    //   }
    //   // 4.对响应作出判断
    /* readyState的取值：
    0：请求未初始化
    1：服务器连接请求建立
    2：请求已接收
    3:请求处理中
    4：请求已经完成，且响应已经就绪 */
    //   xhr.onreadystatechange = function() {
    //     if (xhr.readyState === 4) {
    //       if (xhr.status === 200) {
    //         options.success(xhr.responseText);
    //       }
    //     }
    //   };
    // }
  }
};
</script>
