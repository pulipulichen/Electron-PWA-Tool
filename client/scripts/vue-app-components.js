/* global Vue, httpVueLoader */

//httpVueLoader.register(Vue, './components/device-notification-bar.vue');

var appComponents = {
  //'template': httpVueLoader('./components/template.vue'),
  'app-header': httpVueLoader('./components/app-header/app-header.vue'),
  'manifest-generator': httpVueLoader('./components/manifest-generator/manifest-generator.vue'),
  'project-file-list': httpVueLoader('./components/project-file-list/project-file-list.vue')
}