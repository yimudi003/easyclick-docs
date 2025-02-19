module.exports = {
  // But you can create a sidebar manually
  iosdocs: [
    'readme',
    "zh-cn/changelog",
    "zh-cn/tools/download_resources",
    {
      type: 'category',
      label: '安装开发工具',
      link: {
        type: 'doc',
        id: 'zh-cn/tools/installcenter',
      },
      items: [
        'zh-cn/tools/installcenter',
        'zh-cn/tools/installdevtools',
      ]
    },
    "zh-cn/firstproject",
    {
      type: 'category',
      label: '脚本函数',
      link: {
        type: 'doc',
        id: 'zh-cn/funcs',
      },
      items: [
        'zh-cn/funcs/global/global',
        'zh-cn/funcs/global/global-shortcut',
        'zh-cn/funcs/node-api',
        'zh-cn/funcs/image-api',
        'zh-cn/funcs/yolo-api',
        'zh-cn/funcs/ocr-api',
        'zh-cn/funcs/device-api',
        'zh-cn/funcs/file-api',
        'zh-cn/funcs/storage-api',
        'zh-cn/funcs/http-api',
        'zh-cn/funcs/thread-api',
        'zh-cn/funcs/utils-api',
        'zh-cn/funcs/jdbcmysql-api',
        'zh-cn/funcs/netcard-api',
      ]
    },
    'zh-cn/advance/npmandtypescript',
    {
      type: 'category',
      label: '高级功能',
      link: {
        type: 'doc',
        id: 'zh-cn/advance/index',
      },
      items: [
        'zh-cn/advance/openapiintro',
        'zh-cn/funcs/plugin/plugins',
        'zh-cn/advance/keycode',
        'zh-cn/funcs/plugin/javajs',
        'zh-cn/advance/jsobfuscator',
      ]
    },
    "zh-cn/remotedebug",
    "zh-cn/allplugin",
    "zh-cn/question-answer",
    "zh-cn/joinus",
  ]
};
