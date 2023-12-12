import BonusNumber from '../domain/BonusNumber.js';
import Purchase from '../domain/Purchase.js';
import WinningNumbers from '../domain/WinningNumbers.js';

class LottoController {
  // #service;

  #inputView;

  #outputView;

  constructor(inputView, outputView) {
    // param: service
    // this.#service = service;
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  start() {
    return this.#inputPurchase();
  }

  async #inputPurchase() {
    const amount = await this.#inputView.readPurchase();
    const formattedAmount = new Purchase(amount).getFormattedAmount();

    return this.#printNumberOfPurchase(formattedAmount);
  }

  #printNumberOfPurchase(formattedAmount) {
    const numberOfPurchase = formattedAmount / 1000;
    this.#outputView.printNumberOfPurchase(numberOfPurchase);
    
    return this.#inputWinningNumbers();
  }

  async #inputWinningNumbers() {
    const winningNumbers = await this.#inputView.readWinningNumbers();
    const formattedWinningNumbers = new WinningNumbers(winningNumbers);

    this.#inputBonusNumber();
  }

  async #inputBonusNumber() {
    const bonusNumber = await this.#inputView.readBonusNumber();
    const formattedBonusNumber = new BonusNumber(bonusNumber);
    this.#outputView.printResultHeader();
  }
}

export default LottoController;
