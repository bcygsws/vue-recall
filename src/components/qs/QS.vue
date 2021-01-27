<template>
  <div>
    <h3>qs的使用</h3>
    <input type="button" value="点击按钮，使用qs的方式将对象转化成字符串" @click="transObjToStr" />
    <input type="button" value="点击按钮，使用qs的方式将字符串转化成对象" @click="transStrToObj" />
  </div>
</template>
<script>
import qs from 'qs';
export default {
  data() {
    return {
      msg: { a: { b: 'c' } },
      pro: { d: 'e', f: 'g' },
      list: 'a=b&c=d',
      h: ''
    };
  },
  methods: {
    // 对象转化成字符串
    // 注意：JSON.stringify和qs.stringify的区别   https://www.cnblogs.com/web1/p/8659398.html
    transObjToStr() {
      console.log(qs.stringify(this.msg)); // a%5Bb%5D=c
      console.log(JSON.stringify(this.pro)); // JSON字符串 {"d":"e","f":"g"}
      console.log(qs.stringify(this.pro)); // qs查询字符串 d=e&f=g
    },
    // 字符串转化成对象
    // 查询字符串转对象
    // 键值转对象：比如：a[b]=c  转换成 {a:{b:'c'}}
    transStrToObj() {
      console.log(qs.parse(this.list)); // {a: "b", c: "d"}
      console.log(qs.parse('this.h[hasProperty] = 4')); // {this.h: {hasProperty: " 4"}}
    }
  }
};
</script>
