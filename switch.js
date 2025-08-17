import chalk from 'chalk';

export const drawMultFace = (nameCharacter) => {
  let multFace;
  const yellow = chalk.yellow;
  const pink = chalk.rgb(252, 15, 192);
  const cyan = chalk.cyan;
  const darkGreen = chalk.rgb(23, 114, 69);
  const red = chalk.red;

  switch (nameCharacter) {
    case 'spongebob':
      multFace = `${yellow(`| \(`)} · ${yellow(`\)\(`)} · ${yellow(`\) |`)}`;
      break;

    case 'patrick':
      multFace = `${pink(`/ \(`)} · ${pink(`\)\(`)} · ${pink(`\) \\`)}`;
      break;

    case 'squidward':
      multFace = `${cyan(`( \(`)} · ${cyan(`\)\(`)} · ${cyan(`\) )`)}`;
      break;

    case 'plankton':
      multFace = `${darkGreen(`| \(`)} · ${darkGreen(`\) |`)}`;
      break;

    case 'mr. Crabs':
      multFace = `${red(`|`)}·${red(`||`)}·${red(`|`)}`;
      break;
  }
  return multFace;
};
