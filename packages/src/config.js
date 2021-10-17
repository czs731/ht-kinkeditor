export default {
  width : '750px',
  height : '500px',
  minWidth : 650,
  minHeight : 500,
  items : ['source', '|', 'undo', 'redo', '|', 'preview', 'print', 'cut', 'copy', 'paste',
    'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
    'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
    'superscript', 'clearhtml', '|', 'fullscreen', '/',
    'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
    'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image', 'multiimage',
     'media', 'insertfile', 'table', 'hr', 'pagebreak',
    'anchor', 'link', 'unlink'],
  noDisableItems : ['source', 'fullscreen'],
  filterMode : true,
  htmlTags : {
    font : ['color', 'size', 'face', '.background-color'],
    span : [
      '.color', '.background-color', '.font-size', '.font-family', '.background',
      '.font-weight', '.font-style', '.text-decoration', '.vertical-align', '.line-height'
    ],
    div : [
      'align', '.border', '.margin', '.padding', '.text-align', '.color',
      '.background-color', '.font-size', '.font-family', '.font-weight', '.background',
      '.font-style', '.text-decoration', '.vertical-align', '.margin-left'
    ],
    table: [
      'border', 'cellspacing', 'cellpadding', 'width', 'height', 'align', 'bordercolor',
      '.padding', '.margin', '.border', 'bgcolor', '.text-align', '.color', '.background-color',
      '.font-size', '.font-family', '.font-weight', '.font-style', '.text-decoration', '.background',
      '.width', '.height', '.border-collapse'
    ],
    'td,th': [
      'align', 'valign', 'width', 'height', 'colspan', 'rowspan', 'bgcolor',
      '.text-align', '.color', '.background-color', '.font-size', '.font-family', '.font-weight',
      '.font-style', '.text-decoration', '.vertical-align', '.background', '.border'
    ],
    a : ['href', 'target', 'name'],
    embed : ['src', 'width', 'height', 'type', 'loop', 'autostart', 'quality', '.width', '.height', 'align', 'allowscriptaccess'],
    img : ['src', 'width', 'height', 'border', 'alt', 'title', 'align', '.width', '.height', '.border'],
    'p,ol,ul,li,blockquote,h1,h2,h3,h4,h5,h6' : [
      'align', '.text-align', '.color', '.background-color', '.font-size', '.font-family', '.background',
      '.font-weight', '.font-style', '.text-decoration', '.vertical-align', '.text-indent', '.margin-left'
    ],
    pre : ['class'],
    hr : ['class', '.page-break-after'],
    'br,tbody,tr,strong,b,sub,sup,em,i,u,strike,s,del' : []
  },
  wellFormatMode : true,
  resizeType :2,
  themeType : 'black',
  langType : 'zh-CN',
  designMode : true,
  fullscreenMode : false,
  basePath : '',
  themesPath : './js/NKeditor/themes/',
  pluginsPath : './js/NKeditor/plugins/',
  langPath : './js/NKeditor/lang/',
  minChangeSize : 5,
  urlType : '',
  newlineTag : 'p',
  pasteType : 2,
  dialogAlignType : 'page',
  shadowMode : true,
  zIndex : 811213,
  useContextmenu : true,
  syncType : 'form',
  indentChar:'\t',
  cssPath : '',
  cssData : '',
  bodyClass : 'ke-content',
  colorTable : [
    ['#E53333', '#E56600', '#FF9900', '#64451D', '#DFC5A4', '#FFE500'],
    ['#009900', '#006600', '#99BB00', '#B8D100', '#60D978', '#00D5FF'],
    ['#337FE5', '#003399', '#4C33E5', '#9933E5', '#CC33E5', '#EE33EE'],
    ['#FFFFFF', '#CCCCCC', '#999999', '#666666', '#333333', '#000000']
  ],
  afterCreate:function(){},
  afterChange:function(){},
  afterTab:function(){},
  afterFocus:function(){},
  afterBlur:function(){},
  afterUpload:function(){},
  uploadJson:'',
  fileManagerJson:'',
  allowPreviewEmoticons:true,
  allowImageUpload:true,
  allowFlashUpload: false,
  allowMediaUpload:true,
  allowFileUpload:true,
  allowFileManager:true,
  fontSizeTable : ['9px', '10px', '12px', '14px', '16px', '18px', '24px', '32px','40px','50px','60px'],
  imageTabIndex : 0,
  formatUploadUrl : true,
  fullscreenShortcut : false,
  extraFileUploadParams :{},
  filePostName : 'file',
  fillDescAfterUploadImage: false,
  afterSelectFile :function(){},
  pagebreakHtml:'<hr style="page-break-after: always;" class="ke-pagebreak" />',
  allowImageRemote : true,
  autoHeightMode : false,
  fixToolBar : false,
}