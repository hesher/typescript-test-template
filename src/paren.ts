import {assert} from 'chai'; // Using Assert style
import {expect} from 'chai'; // Using Expect style
import {should} from 'chai'; // Using Should style
should(); // Modifies `Object.prototype`

function paren(str: string): boolean {
  return false;
}

it('should pass', () => {
  expect(paren('')).to.be.false;
});
