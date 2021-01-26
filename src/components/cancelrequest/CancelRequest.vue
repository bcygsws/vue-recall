<template>
  <div>
    <h3>看methods中代码，取消请求</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    /* 代码
    var CancelToken=axios.CancelToken;
    var source=CancelToken.source();
    axios.get(url,{cancelToken.source.Token})
    .catch(res=>{
      if(axios.isCancel(res)){
        // axios.isCancel()用于判断当前请求异常对象是不是请求取消原因对象
        console.log('output:'+res.message);
      }
    })
    source.cancel('用户已经取消了请求'); // cancel括号里的内容，会被catch捕获输出
    */
  }
};
</script>
