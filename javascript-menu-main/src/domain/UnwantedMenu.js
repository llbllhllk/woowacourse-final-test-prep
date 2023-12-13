import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';
import UNWANTED_MENU from '../constants/unwantedMenu.js';

class UnwantedMenu {
  #formattedUnwantedMenu;

  constructor(unwantedMenu) {
    this.#validate(this.#formatUnwantedMenu(unwantedMenu));
    this.#formattedUnwantedMenu = this.#formatUnwantedMenu(unwantedMenu);
  }

  getFormattedUnwantedMenu() {
    return this.#formattedUnwantedMenu;
  }

  #validate(unwantedMenu) {
    if (unwantedMenu.length > UNWANTED_MENU.length) throw new Error(ERROR.unwantedMenu.range);
  }

  #formatUnwantedMenu(unwantedMenu) {
    return unwantedMenu
      .split(CONSTANTS.string.separator)
      .map(element => element.trim())
      .filter(Boolean);
  }
}

export default UnwantedMenu;