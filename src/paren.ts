import {assert} from 'chai'; // Using Assert style
import {expect} from 'chai'; // Using Expect style
import {should} from 'chai'; // Using Should style
should(); // Modifies `Object.prototype`

function paren(str: string): number {
  let counter = 0;
  let debt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      counter++;
    } else if (str[i] === ')') {
      if (counter > 0) counter--;
      else debt++;
    }
  }
  return debt + counter;
}

it('should return 0 for empty', () => {
  expect(paren('')).to.equal(0);
});

it('should return 1 for closing only', () => {
  expect(paren(')')).to.equal(1);
  expect(paren('))((')).to.equal(4);
  expect(paren('))')).to.equal(2);
  expect(paren('())')).to.equal(1);
});
