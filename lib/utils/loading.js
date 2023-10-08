const ora = require('ora')
const loading = ora('loading')

const startLoading = (text = '加载中...') => {
  loading.text = text;
  loading.color = 'green';
  loading.start();
};

const endLoading = () => {
  loading.stop();
};


module.exports = {
  startLoading, 
  endLoading
}