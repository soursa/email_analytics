import {
  Addon_TypesEnum,
  CHANNEL_CREATED,
  Provider,
  addons,
  createBrowserChannel,
  dist_exports as dist_exports2,
  dist_exports2 as dist_exports3,
  dist_exports3 as dist_exports4,
  dist_exports4 as dist_exports5,
  dist_exports5 as dist_exports7,
  mockChannel,
  renderStorybookUI,
} from './chunk-CBY7LR4Y.js';
import './chunk-FXGJ2IFE.js';
import { require_react_dom } from './chunk-7CCV2CKD.js';
import {
  dist_exports,
  dist_exports2 as dist_exports6,
  scope,
} from './chunk-KJEZFYE2.js';
import { require_react } from './chunk-3FAXWWKG.js';
import './chunk-R5BIZIS3.js';
import { __toESM } from './chunk-AS2AMEUR.js';
var REACT = __toESM(require_react()),
  REACTDOM = __toESM(require_react_dom());
var values = {
  react: REACT,
  'react-dom': REACTDOM,
  '@storybook/components': dist_exports7,
  '@storybook/channels': dist_exports4,
  '@storybook/core-events': dist_exports3,
  '@storybook/router': dist_exports2,
  '@storybook/theming': dist_exports6,
  '@storybook/api': dist_exports5,
  '@storybook/manager-api': dist_exports5,
  '@storybook/addons': { addons, types: Addon_TypesEnum, mockChannel },
  '@storybook/client-logger': dist_exports,
};
var Keys = ((Keys2) => (
  (Keys2.react = '__REACT__'),
  (Keys2['react-dom'] = '__REACTDOM__'),
  (Keys2['@storybook/components'] = '__STORYBOOKCOMPONENTS__'),
  (Keys2['@storybook/channels'] = '__STORYBOOKCHANNELS__'),
  (Keys2['@storybook/core-events'] = '__STORYBOOKCOREEVENTS__'),
  (Keys2['@storybook/router'] = '__STORYBOOKROUTER__'),
  (Keys2['@storybook/theming'] = '__STORYBOOKTHEMING__'),
  (Keys2['@storybook/api'] = '__STORYBOOKAPI__'),
  (Keys2['@storybook/manager-api'] = '__STORYBOOKAPI__'),
  (Keys2['@storybook/addons'] = '__STORYBOOKADDONS__'),
  (Keys2['@storybook/client-logger'] = '__STORYBOOKCLIENTLOGGER__'),
  Keys2
))(Keys || {});
var { FEATURES, CONFIG_TYPE } = scope,
  ReactProvider = class extends Provider {
    constructor() {
      super();
      let channel = createBrowserChannel({ page: 'manager' });
      addons.setChannel(channel),
        channel.emit(CHANNEL_CREATED),
        (this.addons = addons),
        (this.channel = channel),
        FEATURES?.storyStoreV7 &&
          CONFIG_TYPE === 'DEVELOPMENT' &&
          ((this.serverChannel = this.channel),
          addons.setServerChannel(this.serverChannel));
    }
    getElements(type) {
      return this.addons.getElements(type);
    }
    getConfig() {
      return this.addons.getConfig();
    }
    handleAPI(api) {
      this.addons.loadAddons(api);
    }
  },
  { document } = scope,
  rootEl = document.getElementById('root');
renderStorybookUI(rootEl, new ReactProvider());
Object.keys(Keys).forEach((key) => {
  scope[Keys[key]] = values[key];
});
