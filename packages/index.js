import HtKindEditor from './src/kind-editor';

HtKindEditor.install = function (Vue){
  Vue.component(HtKindEditor.name,HtKindEditor);
}

export default HtKindEditor;