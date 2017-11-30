import modal from './notify.vue';

let notify = {};

notify.install = function (Vue, options = {delay: 3000}) {
  Vue.component('aaa',modal);//全局的组件
  console.log(Vue, options);
  /***
   *
   * @param message
   * @param opt
   */
  Vue.prototype.$notify = function (message, opt = {}) {
    if (notify.el) return;
    options = {...options, ...opt};//用自己的参数覆盖默认设置
    let V = Vue.extend(modal);//返回子类,参数是包含组件选项的对象
    let vm = new V;
    let oDiv = document.createElement('div');//创建div
    vm.$mount(oDiv);//挂载到元素上
    vm.value = message;
    document.body.appendChild(vm.$el);
    notify.el = vm.$el;
    setTimeout(() => {
      document.body.removeChild(vm.$el);//删除实例元素
      notify.el = null;
    }, options.delay);
  };
};
export default notify;
