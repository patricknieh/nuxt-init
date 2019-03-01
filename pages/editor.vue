<template>
  <div class="quill-editor"
       v-model="content"
       v-quill:myQuillEditor="editorOption">
  </div>
</template>

<script>
  export default {
    data(){
      return{
        content:'',
        editorOption: { theme: 'snow'  },
      }
    }
  }
</script>
