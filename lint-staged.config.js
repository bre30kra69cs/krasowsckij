module.exports = {
  '*.ts?(x)': ['npx prettier --check', 'npx eslint -c ./.eslintrc --max-warnings=0 --ext .ts,.tsx']
};
