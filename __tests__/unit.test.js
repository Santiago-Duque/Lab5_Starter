// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';


/* Phone Number Cases */
test("valid phone number1", () => {
  expect(isPhoneNumber("619-858-1111")).toBe(true);
});

test("valid phone number2", () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test("valid phone number3", () => {
  expect(isPhoneNumber("1111")).toBe(false);
});

test("valid phone number4", () => {
  expect(isPhoneNumber("hola")).toBe(false);
});

/* Email Cases */
test("valid email1", () => {
  expect(isEmail("johnappleseed@gmail.com")).toBe(true);
});

test("valid email2", () => {
  expect(isEmail("thomaspowell@gmail.com")).toBe(true);
});

test("valid email3", () => {
  expect(isEmail("myemail.com")).toBe(false);
});

test("valid email4", () => {
  expect(isEmail("@@@@")).toBe(false);
});

/* Password Cases */
test("Strong Password1", () => {
  expect(isStrongPassword("Powell_123")).toBe(true);
});

test("Strong Password2", () => {
  expect(isStrongPassword("Cse110is_cool")).toBe(true);
});

test("Strong Password3", () => {
  expect(isStrongPassword("@@@@")).toBe(false);
});

test("Strong Password4", () => {
  expect(isStrongPassword("@@@@")).toBe(false);
});

/* Date Cases */
test("Date1", () => {
  expect(isDate("05/23/2022")).toBe(true);
});

test("Date2", () => {
  expect(isDate("04/12/1967")).toBe(true);
});

test("Date3", () => {
  expect(isDate("9-23")).toBe(false);
});

test("Date4", () => {
  expect(isDate("4-33")).toBe(false);
});

/* Hex Case Cases */
test("Hex Case 1", () => {
  expect(isHexColor("#0f0f0f")).toBe(true);
});

test("Hex Case 2", () => {
  expect(isHexColor("#abc")).toBe(true);
});

test("Hex Case 3", () => {
  expect(isHexColor("4")).toBe(false);
});

test("Hex Case 4", () => {
  expect(isHexColor("33")).toBe(false);
});
