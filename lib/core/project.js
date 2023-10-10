const { formatCodeActions, commitCodeAction } = require('../actions/format');
const { SUCCESS_COLOR, DEFAULT_COLOR } = require('../constants/color');

const projectCommand = (program) => {
  // 使用lint
  program
    .command('lint')
    .description('formatting Code Using Prettier and Lint')
    .action(() => {
      const { fomatType } = program.opts();
      formatCodeActions(fomatType);
    });

  // 提交代码
  program.command('commit').description('commit code').action(commitCodeAction);

  // 格式化并提交代码
  program
    .command('fcommit')
    .description('format your code && commit code')
    .action(async () => {
      const { fomatType } = program.opts();
      await formatCodeActions(fomatType);
      console.log(SUCCESS_COLOR, '- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -');
      console.log(SUCCESS_COLOR, '- - - - - - - - - - - - - - - - - - FORMAT-CODE SUCCESS- - - - - - - - - - - - - - - - - ');
      console.log(SUCCESS_COLOR, '- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -');

      console.log(DEFAULT_COLOR, '');
      await commitCodeAction();
      console.log(SUCCESS_COLOR, '- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -');
      console.log(SUCCESS_COLOR, '- - - - - - - - - - _ - - - - - - - - COMMIT SUCCESS- - - - - - - - - - - - - - - - - - -');
      console.log(SUCCESS_COLOR, '- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -');
      console.log(DEFAULT_COLOR, '');
    });
};

module.exports = projectCommand;
