import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
      themes: {
        light: {
          primary: '#00365F',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107'
        },
        dark: {
          primary: '#000000',
          secondary: '#673ab7',
          accent: '#00bcd4',
          error: '#f44336',
          warning: '#ffeb3b',
          info: '#2196f3',
          success: '#4caf50'
        }
      },
  },
  icons: {
    iconfont: 'fa',
  },
});
