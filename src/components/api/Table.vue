<template>
  <div class="tb_container">
    <h3>普通表格渲染<a href="javascript:;" @click="showLog">添加图书</a></h3>
    <table cellspacing="0" cellpadding="5" class="tb">
      <thead>
        <tr>
          <th>序号</th>
          <th>ID</th>
          <th>书名</th>
          <th>作者</th>
          <th>分类</th>
          <th>描述</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="item.id">
          <!-- 索引从0开始，让序号从1开始 -->
          <td>{{ index + 1 }}</td>
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.author }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.description }}</td>
          <td class="space"><a href="javascript:;" @click="editLog(item.id)">修改</a><a href="javascript:;" @click="deleteBook(item.id)">删除</a></td>
        </tr>
      </tbody>
    </table>
    <!-- 添加图书操作，弹出的对话框 关闭对话框事件 el-dialog中 @close事件-->
    <el-dialog title="添加图书" :visible.sync="dialogVisible" width="50%" @close="addDialogClose">
      <el-form :model="ruleForm" :rules="rules" ref="formRef" label-width="70px">
        <el-form-item label="书名：" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="作者：" prop="author">
          <el-input v-model="ruleForm.author"></el-input>
        </el-form-item>
        <el-form-item label="分类：" prop="category">
          <el-input v-model="ruleForm.category"></el-input>
        </el-form-item>
        <el-form-item label="描述：" prop="description">
          <el-input v-model="ruleForm.description"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitBook">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 编辑图书操作，弹出的对话框 -->
    <el-dialog title="修改图书" :visible.sync="editVisible" width="50%">
      <el-form :model="editForm" :rules="rules" ref="editRef" label-width="70px">
        <el-form-item label="书名：" prop="name">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="作者：" prop="author">
          <el-input v-model="editForm.author"></el-input>
        </el-form-item>
        <el-form-item label="分类：" prop="category">
          <el-input v-model="editForm.category"></el-input>
        </el-form-item>
        <el-form-item label="描述：" prop="description">
          <el-input v-model="editForm.description"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="editBook">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: {},
      // 编辑图书弹出对话框标识
      editVisible: false,
      // 编辑图书表单数据对象
      editForm: {
        name: '',
        author: '',
        category: '',
        description: ''
      },
      // 添加图书，弹出对话框标识
      dialogVisible: false,
      // 添加图书，表单数据对象
      ruleForm: { name: '', author: '', category: '', description: '' },
      rules: {
        name: [
          { required: true, message: '请输入书名', trigger: 'blur' },
          { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
        ],
        author: [
          { required: true, message: '请输入作者', trigger: 'blur' },
          { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
        ],
        category: [
          { required: true, message: '请输入书籍所属分类', trigger: 'blur' },
          { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
        ],
        description: [
          { required: true, message: '请输入书籍描述', trigger: 'blur' },
          { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    // 获取所有图书信息
    async getBooks() {
      const res = await this.$http.get('books');
      if (res.status === 200) {
        // 上面一个表格数据
        this.list = res.data;
        console.log(this.list);
      }
    },
    showLog() {
      this.dialogVisible = true;
    },
    // 表单填入内容后，点击“确定”按钮，提交到后台数据库
    submitBook() {
      this.$refs.formRef.validate(async valid => {
        if (!valid) return this.$message.error('表单提交失败');
        console.log(this.ruleForm);
        // 表单验证成功，向后台发送post请求
        const res = await this.$http.post('books/book', this.ruleForm);
        if (res.status === 200) {
          this.$message.success('成功添加1条图书信息');
        }
        console.log(res);
        this.dialogVisible = false;
        // 重新获取图书列表
        this.getBooks();
      });
    },
    // 对话框关闭事件
    addDialogClose() {
      // 原生对象this.$refs.formRef  的reset方法可以重置表单域，但是这种方式对隐藏域无效，隐藏域得做另外的处理
      this.$refs.formRef.resetFields();
    },
    // 修改图书，复用弹出的对话框。既然是修改就是基于原来的数据，原来的数据要显示在表单里
    async editLog(id) {
      this.editVisible = true;
      const res = await this.$http.get('books/book/' + id);
      if (res.status !== 200) return this.$message.error('获取不到数据');
      this.$message.success('成功获取1条数据');
      console.log(res);
      // res.data得到是一个对象数据
      /* 
       1.data中每条数据都有id,因此。this.editForm对象实际上在赋值过程中，会增加id这个字段，
      即使data方法中editForm默认没有定义id字段
      2.editForm对象是双向绑定的，打开对话框，修改数据前，editForm拿到原数据对象。在对话框中
      提交修改后(editBook方法执行时)，editForm会跟随数据的变化。(el-input中使用动态绑定v-model了)
      */

      this.editForm = res.data[0];
    },
    // 提交修改
    editBook() {
      this.$refs.editRef.validate(async valid => {
        if (!valid) return this.$message.error('提交失败');
        const res = await this.$http.put('books/book/', this.editForm);
        console.log(res);
        if (res.status === 200) this.$message.success(res.data.message);
        this.editVisible = false;
        this.getBooks();
      });
    },
    // 删除一本图书
    async deleteBook(id) {
      const res = await this.$http.delete('books/book/' + id);
      if (res.data.code === 200) {
        this.$message.success(res.data.message);
      }
      console.log(res);
      // 重新刷新列表
      this.getBooks();
    }
  },
  created() {
    this.getBooks();
  }
};
</script>
<style lang="less" scoped>
.tb_container {
  h3 {
    a {
      text-decoration: none;
      padding-left: 10px;
    }
  }
  .tb {
    width: 800px;
    margin: 0 auto;
    border-left: 1px solid #000;
    border-top: 1px solid #000;
    tbody tr:nth-child(2n) {
      td {
        background-color: #fff;
      }
    }
    tbody tr:nth-child(2n + 1) {
      td {
        background-color: #ccc;
      }
    }
    tr td,
    tr th {
      text-align: center;
      border-bottom: 1px solid #000;
      border-right: 1px solid #000;
    }
    tr th {
      background-color: pink;
    }
    tr td.space {
      a:first-child,
      a:last-child {
        text-decoration: none;
      }
      a:first-child {
        margin-right: 15px;
      }
    }
  }
}
</style>
