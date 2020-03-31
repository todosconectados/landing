export function initialize(application) {
  application.inject('adapter', 'session', 'service:session');
  application.inject('route', 'session', 'service:session');
  application.inject('template', 'session', 'service:session');
  application.inject('component', 'session', 'service:session');
  application.inject('controller', 'session', 'service:session');
  application.inject('ability', 'session', 'service:session');
}

export default { name: 'session', initialize };
