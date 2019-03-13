import Avatar from './components/avatar';
import ImageContainer from './components/image-container';

const components = [
  Avatar,
  ImageContainer,
];

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  install,
  Avatar,
  ImageContainer
};

module.exports.default = module.exports;