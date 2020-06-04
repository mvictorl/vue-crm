export default {
  install(Vue) {
    Vue.prototype.$message = function(text) {
      window.M.toast({ html: text });
    };

    Vue.prototype.$error = function(errorText) {
      window.M.toast({
        html: `<div style="color: red">[Ошибка!] ${errorText}</div>`
      });
    };
  }
};
