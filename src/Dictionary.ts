type Dictionary = {
  [key: string]: string[];
};

const dictionary: Dictionary = {};

/**
 * @name: add
 * @description: checks if two keys have intersecting members
 * @param {string} key1 - The first key to check
 * @param {string} key2 - The second key to check
 */
 export const intersect = (key1: string, key2: string): string[] => {
  //check for the keys first
  if(!isKeyExist(key1) || !isKeyExist(key2)){
    throw new Error(`ERROR, keys "${key1}" or ${key2} do not exist`);
  }
  //pull the members for each key
  const members1 = dictionary[key1]
  const members2 = dictionary[key2]
  //check for duplicates
  const intersecting = members1.filter(x => members2.includes(x))
  //return those duplicates
  return intersecting;
};


/**
 * @name: add
 * @description: adds a member to collection for given key. Displays an error if the member already exists for the key.
 * @param {string} key - The key to add the member to.
 * @param {string} member - The member to place the key in.
 */
export const add = (key: string, member: string) => {
  if (isKeyExist(key)) {
    if (isMemberExist(key, member)) {
      throw new Error(`ERROR, member "${member}" already exists for key "${key}"`);
    } else {
      dictionary[key] = [...dictionary[key], member];
    }
  } else {
    dictionary[key] = [member];
  }

  return;
};

/**
 * @name: remove
 * @description: removes a member from key. If the last member is removed from the key, the key is removed from the dictionary. If the key or member does not exist, displays an error.
 * @param {string} key - The key to remove the member from.
 * @param {string} member - The member to remove from the key.
 */
export const remove = (key: string, member: string) => {
  if (!isKeyExist(key)) {
    throw new Error(`ERROR, key "${key}" does not exist`);
  }

  if (!isMemberExist(key, member)) {
    throw new Error(`ERROR, member "${member}" does not exists for key "${key}"`);
  }

  dictionary[key] = dictionary[key].filter((m) => m !== member);

  if (dictionary[key].length === 0) {
    delete dictionary[key];
  }

  return;
};

/**
 * @name: removeAll
 * @description: removes all members for a key and removes the key from the dictionary. Returns an error if the key does not exist.
 * @param {string} key - The key to remove all members from.
 */
export const removeAll = (key: string) => {
  if (!isKeyExist(key)) {
    throw new Error(`ERROR, key "${key}" does not exist`);
  }

  delete dictionary[key];
  return;
};

/**
 * @name: isKeyExist
 * @description: returns a boolean if the key exists
 * @param {string} key - The key to check for.
 */
export const isKeyExist = (key: string): boolean => (typeof dictionary[key] !== 'undefined' ? true : false);

/**
 * @name: isMemberExist
 * @description: returns a boolean if the member exists on the key, false if key does not exist
 * @param {string} key - The key to check for.
 * @param {string} member - The member to check for.
 */
export const isMemberExist = (key: string, member: string): boolean => {
  if (isKeyExist(key)) {
    return dictionary[key].includes(member);
  } else {
    return false;
  }
};

/**
 * @name: keys
 * @description: returns all the keys in the dictionary. Order is not guaranteed.
 */
export const keys = (): string[] => Object.keys(dictionary);

/**
 * @name: members
 * @description: returns the collection of strings for a given key. Return order not guaranteed. Returns an error if key does not exist.
 * @param {string} key - The key to return members for.
 */
export const members = (key: string): string[] => {
  if (!isKeyExist(key)) {
    throw new Error(`ERROR, key "${key}" does not exist`);
  }

  return dictionary[key];
};

/**
 * @name: clear
 * @description: removes all keys and all members from dictionary
 */
export const clear = () => {
  Object.keys(dictionary).forEach((key) => delete dictionary[key]);
  return;
};

/**
 * @name: allMembers
 * @description: returns all members in the dictionary. Returns nothing if there are none. Order is not guaranteed.
 */
export const allMembers = (): string[] => Object.values(dictionary).flat();

/**
 * @name: allItems
 * @description: returns all keys in the dictionary and all their members. Returns nothing if there are none. Order is not guaranteed.
 */
export const allItems = (): [string, string[]][] => {
  return Object.entries(dictionary);
};

const api = {
  intersect,
  add,
  remove,
  removeAll,
  isKeyExist,
  isMemberExist,
  keys,
  members,
  clear,
  allMembers,
  allItems,
};

export default api;
