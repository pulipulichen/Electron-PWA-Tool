/* global Vue, httpVueLoader */

//httpVueLoader.register(Vue, './components/device-notification-bar.vue');

var appComponents = {
  //'template': httpVueLoader('./components/template.vue'),
  'app-header': httpVueLoader('./components/APPHeader/APPHeader.vue'),
  'project-file-list': httpVueLoader('./components/ProjectFileList/ProjectFileList.vue'),
}