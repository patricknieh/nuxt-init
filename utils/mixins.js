export const globalMethods = {
  methods: {
    resMsg(res,msg,error,callback){
      if(res.success){
        if(msg){
          this.$message({message: msg, type: 'success'})
        }else {
          // this.$message({message: res.msg, type: 'success'})
        }
        callback(res.data)
      }else {
        if(error) {
          this.$message.error(error)
        }else {
          this.$message.error(res.msg)
        }
      }
    },
  }
}
