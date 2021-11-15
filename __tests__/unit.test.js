// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumber: my phone number', () => {
    expect(functions.isPhoneNumber('858-214-7005')).toBe(true);
});

test('isPhoneNumber: random number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber: wrong number', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('isPhoneNumber: empty input', () => {
    expect(functions.isPhoneNumber('')).toBe(false);
});

test('isEmail: my email', () => {
    expect(functions.isEmail('t8guan@ucsd.edu')).toBe(true);
});

test('isEmail: random email', () => {
    expect(functions.isEmail('abcdefg@abc.abc')).toBe(true);
});

test('isEmail: no @', () => {
    expect(functions.isEmail('t8guanucsd.edu')).toBe(false);
});

test('isEmail: empty input', () => {
    expect(functions.isEmail('')).toBe(false);
});

test('isstrongPassword: abcd1234', () => {
    expect(functions.isStrongPassword('abcd1234')).toBe(true);
});

test('isstrongPassword: q_cas_12356', () => {
    expect(functions.isStrongPassword('q_cas_12356')).toBe(true);
});

test('isstrongPassword: 123456', () => {
    expect(functions.isStrongPassword('123456')).toBe(false);
});

test('isstrongPassword: empty input', () => {
    expect(functions.isStrongPassword('')).toBe(false);
});

test('isDate: 01/01/2000', () => {
    expect(functions.isDate('01/01/2000')).toBe(true);
});

test('isDate: 02/38/1001', () => {
    expect(functions.isDate('02/28/1001')).toBe(true);
});

test('isDate: 11/11/11', () => {
    expect(functions.isDate('11/11/11')).toBe(false);
});

test('isDate: empty input', () => {
    expect(functions.isDate('')).toBe(false);
});

test('isHexColor: 123', () => {
    expect(functions.isHexColor('123')).toBe(true);
});

test('isHexColor: 123456', () => {
    expect(functions.isHexColor('123456')).toBe(true);
});

test('isHexColor: 0', () => {
    expect(functions.isHexColor('0')).toBe(false);
});

test('isHexColor: empty imput', () => {
    expect(functions.isHexColor('')).toBe(false);
});