<template>
  <div class="el_container">
    <h3>api接口的跨域<a href="javascript:;" @click="showLog">添加图书</a></h3>
    <!-- 使用el-table -->
    <el-table :data="tbData" border stripe style="width: 100%">
      <!-- type="index" 表示记录序号列，序号默认从1开始 -->
      <el-table-column type="index" label="序号" width="80"> </el-table-column>
      <el-table-column prop="id" label="ID" width="80" order> </el-table-column>
      <el-table-column prop="name" label="书名" width="180"> </el-table-column>
      <el-table-column prop="author" label="作者" width="100"> </el-table-column>
      <el-table-column prop="category" label="分类" width="100"> </el-table-column>
      <el-table-column prop="description" label="描述"> </el-table-column>
      <el-table-column label="操作" align="center" width="150">
        <!-- 某一行的内容 template中slot-scope属性，scope.row得到每一行的数据 -->
        <template slot-scope="scope">
          <!-- {{ scope.row }} -->
          <el-button type="primary" size="small" @click="editLog(scope.row.id)">修改</el-button>
          <el-button type="danger" size="small" @click="deleteBook(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
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
    <!-- 分页操作 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNum"
      :page-sizes="[5, 10, 15, 20, 50]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
      },
      tbData: [],
      // 定义info对象，存储总页数、每页数据条数
      total: 0,
      // 每页容量最多5条
      size: 5,
      // 默认值：表示数据初始化渲染时，位于第一页
      pageNum: 1
    };
  },
  created() {
    this.getBooks();
  },
  methods: {
    // 获取所有图书信息
    async getBooks() {
      const res = await this.$http.get(`books/${this.size}/pages/${this.pageNum}`);
      console.log(res);
      if (res.status === 200) {
        // el-table使用
        this.tbData = res.data.list;
        this.total = res.data.total;
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
    },
    // 处理表容量和当前页数据
    handleSizeChange(val) {
      console.log(val);
      this.size = val;
      // 每页容量改变，重新刷新列表
      this.getBooks();
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      console.log(val);
      // 页面切换，重新刷新列表
      this.getBooks();
    }
  }
};
</script>
<style lang="less" scoped></style>
