// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//test for phone number
test('619-817-9524 is valid phone number', () =>{
  expect(isPhoneNumber("619-817-9524")).toBe(true);
})
test('(619)-447-9524 is valid phone number', () =>{
  expect(isPhoneNumber("(619)-447-9524")).toBe(true);
})
test('619-87-9524 is not valid phone number', () =>{
  expect(isPhoneNumber("619-87-9524")).toBe(false);
})
test('619-817- is not valid phone number', () =>{
  expect(isPhoneNumber("619-817-")).toBe(false);
})

//test for email
test('Check jtang487@gmail.com is valid email', () =>{
  expect(isEmail("jtang487@gmail.com")).toBe(true);
})
test('Check jvtang@ucsd.edu is valid email', () =>{
  expect(isEmail("jvtang@ucsd.edu")).toBe(true);
})
test('Check jtang487@gmai is not a valid email', () =>{
  expect(isEmail("jtang487@gmai")).toBe(false);
})
test('Check jtang4gmail.com is not a valid email', () =>{
  expect(isEmail("jtang4gmail.com")).toBe(false);
})

//test for hexcolor
test('Check #000000 is valid hexcolor', () =>{
  expect(isHexColor("#D88A79")).toBe(true);
})
test('Check 210400 is valid hexcolor', () =>{
  expect(isHexColor("D88A79")).toBe(true);
})
test('Check abcdfeff is not a valid hexcolor', () =>{
  expect(isHexColor("abcdfeff")).toBe(false);
})
test('Check #abcdfeff is not a valid hexcolor', () =>{
  expect(isHexColor("abcdfeff")).toBe(false);
})

// Tests for is Strong Password
test('Password Bigger than 15', () => { 
  expect(isStrongPassword('Hithenam545sedf1')).toBe(false);
});
test('Password smaller than 3', () => {
  expect(isStrongPassword("Te")).toBe(false)
});
test('Correct Password with no underscore' , () => {
  expect(isStrongPassword("Tafe4242")).toBe(true)
});
test('Correct with Underscore', () => {
  expect(isStrongPassword("Tafe424_2")).toBe(true)
});

// Tests for isDate
test('Incorrect date 1', () => { 
  expect(isDate('1/1/1')).toBe(false);
});
test('Incorrect date 2', () => {
  expect(isDate("112/4.43")).toBe(false)
});
test('correct april 14 2002' , () => {
  expect(isDate("4/14/2002")).toBe(true)
});
test('correct may 5 2001 ' , () => {
  expect(isDate("5/5/2001")).toBe(true)
});