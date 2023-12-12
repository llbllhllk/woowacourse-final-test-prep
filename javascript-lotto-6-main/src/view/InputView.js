import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import reTry from '../utils/reTry.js';

const InputView = {
  async read() {
    return reTry(async () => {
      const returnValue = await Console.readLineAsync();
      // Validator

      return returnValue;
    });
  },
};

export default InputView;