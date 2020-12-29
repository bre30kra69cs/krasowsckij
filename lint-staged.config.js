module.exports = {
  '*.ts?(x)': (filenames) => {
    const prettierd = filenames.map((filename) => `npx prettier --check '${filename}'`);
    const eslinted = filenames.map((filename) => `npx eslint '${filename}' --ext .ts,.tsx`);
    return [...prettierd, ...eslinted];
  }
};
