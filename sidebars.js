const sidebars = {
  // But you can create a sidebar manually
  docs: [
    "index",
    "zh-cn/changelog",
    "zh-cn/tools/download_resources",
    "zh-cn/getting-start",
    {
      type: 'category',
      label: '开发工具功能介绍',
      link: {
        type: 'doc',
        id: 'zh-cn/funcs/devtools/dev-tools',
      },
      items: [
        'zh-cn/funcs/devtools/dev-tools-word',
        'zh-cn/funcs/devtools/dev-tools-install',
        'zh-cn/funcs/devtools/dev-tools-project',
        'zh-cn/funcs/devtools/dev-tools-device',
        'zh-cn/funcs/devtools/dev-tools-node',
        'zh-cn/funcs/devtools/dev-tools-color',
        'zh-cn/funcs/devtools/dev-tools-settings',
        'zh-cn/funcs/devtools/dev-tools-remote',
      ]
    },

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
        'zh-cn/funcs/global/selector-node',
        'zh-cn/funcs/acevent-api',
        'zh-cn/funcs/event-api',
        'zh-cn/funcs/hid-event-api',
        'zh-cn/funcs/center-api',
        'zh-cn/funcs/image-api',
        'zh-cn/funcs/yolo-api',
        'zh-cn/funcs/ocr-api',
        'zh-cn/funcs/device-api',
        'zh-cn/funcs/floaty-api',
        'zh-cn/funcs/file-api',
        'zh-cn/funcs/storage-api',
        'zh-cn/funcs/http-api',
        'zh-cn/funcs/thread-api',
        'zh-cn/funcs/utils-api',
        'zh-cn/funcs/shell-api',
        'zh-cn/funcs/sqlite-api',
        'zh-cn/funcs/jdbcmysql-api',
        'zh-cn/funcs/netcard-api',
      ]
    },
    {
      type: 'category',
      label: 'UI编写',
      link: {
        type: 'doc',
        id: 'zh-cn/funcs/ui/index',
      },
      items: [
        'zh-cn/funcs/ui/html-ui-custom',
        'zh-cn/funcs/ui/ui-js-inter',
        'zh-cn/funcs/ui/ui-js-template',
        'zh-cn/funcs/ui/ui-recycleview',
        {
          type: 'category',
          label: '原生UI控件',
          link: {
            type: 'doc',
            id: 'zh-cn/funcs/ui/ui-native-view',
          },
          items: [
            'zh-cn/funcs/ui/uidetail/linearlayout',
            'zh-cn/funcs/ui/uidetail/framelayout',
            'zh-cn/funcs/ui/uidetail/relativelayout',
            'zh-cn/funcs/ui/uidetail/scrollview',
            'zh-cn/funcs/ui/uidetail/h_scrollview',
            'zh-cn/funcs/ui/uidetail/view',
            'zh-cn/funcs/ui/uidetail/button',
            'zh-cn/funcs/ui/uidetail/textview',
            'zh-cn/funcs/ui/uidetail/edittext',
            'zh-cn/funcs/ui/uidetail/checkbox',
            'zh-cn/funcs/ui/uidetail/radiogroup',
            'zh-cn/funcs/ui/uidetail/radiobutton',
            'zh-cn/funcs/ui/uidetail/spinner',
            'zh-cn/funcs/ui/uidetail/webview',
            'zh-cn/funcs/ui/uidetail/imageview',
            'zh-cn/funcs/ui/uidetail/cardview',
            'zh-cn/funcs/ui/uidetail/switch',

          ]
        },

      ]
    },
    {
      type: 'category',
      label: '企业版安卓iOS云控',
      link: {
        type: 'doc',
        id: 'zh-cn/ecloud2/intro',
      },
      items: [
        'zh-cn/ecloud2/cloudchangelog',
        'zh-cn/ecloud2/installcloud',
        'zh-cn/ecloud2/pkgset',
        'zh-cn/ecloud2/ecloud-func',
        'zh-cn/ecloud2/openapi',
      ]
    },
    {
      type: 'category',
      label: '企业版安卓中控投屏',
      link: {
        type: 'doc',
        id: 'zh-cn/centerscreen/intro',
      },
      items: [
        'zh-cn/centerscreen/screenchangelog',
        'zh-cn/centerscreen/openscreen',
        'zh-cn/centerscreen/otherfunc',
        'zh-cn/centerscreen/hidlinux',
        'zh-cn/centerscreen/screenqa',
      ]
    },
    "zh-cn/advance/npmandtypescript",

    {
      type: 'category',
      label: '高级功能',
      link: {
        type: 'doc',
        id: 'zh-cn/advance/index',
      },
      items: [
        'zh-cn/advance/hid',
        'zh-cn/advance/remotedebug',
        'zh-cn/advance/netcard',
        'zh-cn/advance/yolov8',
        'zh-cn/advance/hot-update',
        'zh-cn/advance/jsobfuscator',
        'zh-cn/advance/plugin/plugins',
        'zh-cn/advance/plugin/javajs',
      ]
    },
    "zh-cn/question/question-answer",
    "zh-cn/allplugin",
    "zh-cn/active-device",
    "zh-cn/joinus"
  ],
};

module.exports = sidebars;
