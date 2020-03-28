export function initialize(application) {
  application.inject('adapter', 'base-helper', 'service:base-helper');
  application.inject('route', 'base-helper', 'service:base-helper');
  application.inject('template', 'base-helper', 'service:base-helper');
  application.inject('component', 'base-helper', 'service:base-helper');
  application.inject('controller', 'base-helper', 'service:base-helper');
  application.inject('ability', 'base-helper', 'service:base-helper');
}

export default {
  name: 'base-helper',
  initialize
};
