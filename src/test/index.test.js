import Validator from '../index';

test('one letter', () => {
  const valid = new Validator('a');

  expect(valid.validateUsername()).toBeTruthy();
});

test('3 numbers', () => {
  const valid = new Validator('qwqwqw123dffs');

  expect(valid.validateUsername()).toBeFalsy();
});

test('first symbol is not letter, but correct symbol', () => {
  const valid = new Validator('3wqwqw123dffs');

  expect(valid.validateUsername()).toBeFalsy();
});

test('last symbol is not letter, but correct symbol', () => {
  const valid = new Validator('wqwqw123dffs-');

  expect(valid.validateUsername()).toBeFalsy();
});

test('incorrect symbol', () => {
  const valid = new Validator('wqwывывыв=qw123dffs-');

  expect(valid.validateUsername()).toBeFalsy();
});

test('incorrect string', () => {
  const valid = new Validator('W14--45__32--weq_p');

  expect(valid.validateUsername()).toBeTruthy();
});
