import {Acl} from './acl';

export function configure(aurelia, config) {
  aurelia.globalResources('./attribute/allowed.js');

  if (!config) {
    return; /* do nothing if config is falsy */
  }

  let acl = aurelia.container.get(Acl);

  if (typeof config === 'object') {
    acl.setPermissions(config);
  }

  if (typeof config === 'function') {
    config(acl);
  }
}

export {
  Acl
};
