<template>
  <div>
    <h3>这是自定义过滤器组件</h3>
    <input type="text" name="in" ref="in" @keyup="changeMsg" placeholder="请输入一串英文字符" />
    <!-- 要渲染的字符+ 管道符| +过滤器名称[(传参是可选的，对应flUpper函数的第二个参数)] -->
    <p>{{ msg | flUpper }}</p>
    <p>指定时间格式化后的结果：{{ time | dateFormat }}</p>
  </div>
</template>
<script>
/**
 * 实现任意输入一行英文字符，经过自定义的过滤器后，变成字符串首字符大写
 * new Date()传参：
 * 1.new Date("任意格式的时间字符串")
 * 2.new Date(年,月,日,时,分,秒);  可以声明一个任意时间点
 *
 */
export default {
  data() {
    return { msg: '', time: new Date(1992, 7, 6, 3, 20, 58) };
  },
  filters: {
    flUpper: function(value) {
      // value不为空
      if (!value) return;
      value = value.toString();
      value = value.charAt(0).toUpperCase() + value.slice(1);
      return value;
    },
    dateFormat: function(value) {
      // 时间过滤器一般是项目中多处用到，可以在main.js中定义一个全局过滤器，最简单的方式：引入第三方时间格式包moment
      // moment(传入的时间字符串).format("YYYY-MM-DD HH-mm-ss")
      // https://www.cnblogs.com/shun1015/p/12663191.html
      var date = new Date(value);
      var year = date.getFullYear();
      var month = (date.getMonth() + 1 + '').padStart(2, '0');
      var day = (date.getDate() + '').padStart(2, '0');
      var hour = (date.getHours() + '').padStart(2, '0');
      var min = (date.getMinutes() + '').padStart(2, '0');
      var sec = (date.getSeconds() + '').padStart(2, '0');
      date = `${year}-${month}-${day} ${hour}:${min}:${sec}`;
      return date;
    }
  },
  methods: {
    changeMsg() {
      this.msg = this.$refs.in.value;
    }
  }
};
</script>
