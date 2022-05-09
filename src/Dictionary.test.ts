import dictionary from './Dictionary';

describe("Dictionary Commands", () => {

  beforeEach(() => {
    dictionary.clear();
  });

  test('return keys in dictionary', () => {
    dictionary.add("foo", "bar")
    dictionary.add("baz", "bang")
    expect(dictionary.keys()).toEqual(["foo", "baz"]);
  });

  test('return members for a key', () => {
    dictionary.add("foo", "bar")
    dictionary.add("foo", "baz")
    expect(dictionary.members("foo")).toEqual(["bar", "baz"]);
  });

  test('return error for members for a key not found', () => {
    dictionary.add("foo", "bar")
    dictionary.add("foo", "baz")
    expect(() => {
      dictionary.members("bad")
    }).toThrowError(new Error('ERROR, key "bad" does not exist'));
  });

  test('add to dictionary', () => {  
    dictionary.add("foo", "bar")
    expect(dictionary.members("foo")).toContain("bar");
  });

  test('return error for add to dictionary if member already exists', () => {  
    dictionary.add("foo", "bar")
    dictionary.add("foo", "baz")
    expect(() => {
      dictionary.add("foo", "bar")
    }).toThrowError(new Error('ERROR, member "bar" already exists for key "foo"'))
  });

  test('remove from dictionary', () => {  
    dictionary.add("foo", "bar")
    dictionary.add("foo", "baz")
    dictionary.remove("foo", "bar")
    expect(dictionary.members("foo")).toEqual(["baz"]);
  });

  test('remove from dictionary removes key on last remove entry', () => {  
    dictionary.add("foo", "bar")
    dictionary.add("foo", "baz")
    dictionary.remove("foo", "bar")
    dictionary.remove("foo", "baz")
    expect(dictionary.keys()).toEqual([]);
  });

  test('return error for remove from dictionary if member does not exist', () => {  
    dictionary.add("foo", "bar")
    dictionary.add("foo", "baz")
    dictionary.remove("foo", "bar")
    expect(() => {
      dictionary.remove("foo", "bar")
    }).toThrowError(new Error('ERROR, member "bar" does not exists for key "foo"'))
  });

  test('return error for remove from dictionary if key does not exist', () => {  
    dictionary.add("foo", "bar")
   
    expect(() => {
      dictionary.remove("boom", "pow")
    }).toThrowError(new Error('ERROR, key "boom" does not exist'))
  });


  test('remove all members for key', () => {  
    dictionary.add("foo", "bar")
    dictionary.add("foo", "baz")
    expect(dictionary.keys()).toEqual(["foo"])
    dictionary.removeAll("foo")
    expect(dictionary.keys()).toEqual([]);
  });

  test('return error for removeall for missing key', () => {  
    expect(dictionary.keys()).toEqual([])
    expect(() => {
      dictionary.removeAll("foo")
    }).toThrowError(new Error('ERROR, key "foo" does not exist'))
  });


  test('clear all keys and members from dictionary', () => {  
    dictionary.add("foo", "bar")
    dictionary.add("bang", "zip")
    expect(dictionary.keys()).toEqual(["foo", "bang"])
    dictionary.clear()
    expect(dictionary.keys()).toEqual([]);
  });

  test('does key exist in dictionary', () => {  
    dictionary.add("foo", "bar")
    expect(dictionary.isKeyExist("foo")).toBeTruthy()
  });

  test('does member exist on key in dictionary', () => {  
    dictionary.add("foo", "bar")
    expect(dictionary.isMemberExist("foo", "bar")).toBeTruthy()
  });

  test('all members return in dictionary', () => {  
    expect(dictionary.allMembers()).toEqual([])
    dictionary.add("foo", "bar")
    dictionary.add("foo", "baz")
    expect(dictionary.allMembers()).toEqual(["bar", "baz"])
    dictionary.add("bang", "bar")
    dictionary.add("bang", "baz")
    expect(dictionary.allMembers()).toEqual(["bar", "baz", "bar", "baz"]);
  });

  test('all items return in dictionary', () => {  
    expect(dictionary.allItems()).toEqual([])
    dictionary.add("foo", "bar")
    dictionary.add("foo", "baz")
    expect(dictionary.allItems()).toEqual([[ "foo", ["bar", "baz"]]])
    dictionary.add("bang", "bar")
    dictionary.add("bang", "baz")
    expect(dictionary.allItems()).toEqual([[ "foo", ["bar", "baz"]], [ "bang", ["bar", "baz"]]]);
  });

})
