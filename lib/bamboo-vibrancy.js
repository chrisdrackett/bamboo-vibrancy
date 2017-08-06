'use babel';

export default {

  activate(state) {
    this.setEffect();
    
    // React to theme changes
    atom.config.onDidChange('core.themes', (value) => {
      this.setEffect();
    })
  },

  setEffect() {
    require('electron').remote.getCurrentWindow().setVibrancy('medium-light');

    // Enable styling
    document.documentElement.classList.add('bamboo-vibrancy');
  },

  deactivate() {
    document.documentElement.classList.remove('bamboo-vibrancy');
    require('electron').remote.getCurrentWindow().setVibrancy();
  }

};
