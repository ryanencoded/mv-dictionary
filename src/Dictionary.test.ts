import { add, members, keys, clear, isKeyExist, isMemberExist } from './index';

describe("Dictionary Commands", () => {

  beforeEach(() => {
    clear();
  });
  

  test('return keys in dictionary', () => {
    add("foo", "bar")
    add("baz", "bang")
    expect(keys()).toEqual(["foo", "baz"]);
  });

  test('return members for a key', () => {
    add("foo", "bar")
    add("foo", "baz")
    expect(members("foo")).toEqual(["bar", "baz"]);
  });

  test('does key exist in dictionary', () => {  
    add("foo", "bar")
    expect(isKeyExist("foo")).toBeTruthy()
  });

  test('does member exist on key in dictionary', () => {  
    add("foo", "bar")
    expect(isMemberExist("foo", "bar")).toBeTruthy()
  });

  // test('return error for members for a key not found', () => {
  //   add("foo", "bar")
  //   add("foo", "baz")
  //   expect(members("bad")).toThrow();
  // });

  test('add to dictionary', () => {  
    add("foo", "bar")
    expect(members("foo")).toContain("bar");
  });

  
})
