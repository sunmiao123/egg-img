<template>
  <div>
    <el-upload
      class="avatar-uploader"
      action="/api/user/imgFn"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>
<script>

export default {
  data() {
    return {
      imageUrl: ""
    };
  },
  methods: {
    //上传成功的回调
    handleAvatarSuccess(res) {
      // this.imageUrl = URL.createObjectURL(file.raw);
      console.log(res);
      this.imageUrl = "/api/"+res.avater

    },
    //上传之前 要传的信息
    beforeAvatarUpload(file) {
      // console.log(file);
      const isJpeg = file.type === "image/jpeg";
      const liLimit = file.size / 1024 / 1024 < 5;
      // if (!isJpeg) {
      //   this.$meessage.error("只能上传jpeg");
      //   // console.log('只能上传jpeg')
      // }
      // if (!liLimit) {
      //   this.$meessage.error("只能上传小于5M的图片");
      //   // console.log("只能上传小于5M");
      // }

      // return isJpeg && liLimit;
      // const isJPG = file.type === "image/jpeg";
      // const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJpeg) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!liLimit) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJpeg && liLimit;
    }
  }
};
</script>
<style scoped lang="">
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  border: 1px solid #000;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
