<template>
  <div>
    <textarea :id="editId" name="content" ></textarea>
  </div>
</template>

<script>
import $ from "jquery";
import '@/NKeditor/NKeditor-all';
import '@/NKeditor/themes/black/editor.css';
import editorConfig from './config';
window.$ = window.jQuery = $;

export default {
  name: "ht-kind-editor",
  props : {
    editId : { type :String, default : '', required :true },
    config : { type : Object , default: ()=>{ return {} } }
  },
  data() {
    return {
      editor: '',
    }
  },
  mounted : async function (){
    try {
      // let that = this;
      let _config = Object.assign({},editorConfig,this.config)
      console.log(_config);
      this.editor = window.KindEditor.create('#'+this.editId, _config);
    }catch (e) {
      console.log(e);
      return false;
    }
  },
}
</script>

<style scoped>

</style>