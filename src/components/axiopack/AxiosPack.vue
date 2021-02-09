<template>
  <div>
    <h3>主要阅读methods方法中封装的axios代码</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: '',
      tabLeData: ''
    };
  },
  methods: {
    /* 封装代码（暴露给外部）-其他模块引入
    // api.js
    export function httpGet(){
        return new Promise((resolve,reject)=>{
          axios.get(url,params)
          .then(data=>{
            resolve(data);
          })
          .catch(error=>{
            reject(error);
          });
        })
    }
    // todo.js
    import {httpGet} from './api.js';
    const getList=(params={})=>httpGet('/api/home',params);
    // index.js
    getList({id:3}).then(data=>{
      // data值有promise从挂起到接收状态，resolve内提供的data
      console.log(data);
    })
    */
    /* axios代码同步处理async……await
   async function getData(){
     try{
        let res=axios.get('api/some/data',{params:{data:6}});
        this.tableData=res.data.result;
     }catch(error){
       console.log("错误"+error);
     }
   }
   */
  }
};
</script>
