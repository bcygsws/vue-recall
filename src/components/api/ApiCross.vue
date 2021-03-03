<template>
  <div>
    <h3>
      api接口的跨域
    </h3>
  </div>
</template>
<script>
export default {
  data() {
    return { list: {} };
  },
  methods: {
    // 获取所有图书信息
    async getBooks() {
      const res = await this.$http.get('books');
      if (res.status === 200) {
        this.list = res.data;
        console.log(this.list);
      }
    }
  },
  created() {
    this.getBooks();
  }
};
</script>
<style lang="less" scoped></style>
