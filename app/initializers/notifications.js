export function initialize(application) {
  application.inject('model', 'notifications', 'service:notification-messages-service');
  application.inject('template', 'notifications', 'service:notification-messages-service');
  application.inject('component', 'notifications', 'service:notification-messages-service');
  application.inject('route', 'notifications', 'service:notification-messages-service');
  application.inject('controller', 'notifications', 'service:notification-messages-service');
}

export default {
  name: 'inject-notifications',
  initialize
};
