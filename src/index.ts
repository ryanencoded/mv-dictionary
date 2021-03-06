/* tslint-disable: no-console */
import * as readlineSync from 'readline-sync';
import dictionary from './Dictionary';

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

readlineSync.promptCLLoop({
  intersect(target, into) {
    try {
      const intersecting = dictionary.intersect(target, into);
      console.log(`Intersecting ${intersecting} for ${target} and ${into}`);
    } catch (err) {
      console.error(getErrorMessage(err));
    }
  },
  add(target, into) {
    try {
      dictionary.add(target, into);
      console.log(`Added ${into} to ${target}`);
    } catch (err) {
      console.error(getErrorMessage(err));
    }
  },
  remove(target, into) {
    try {
      dictionary.remove(target, into);
      console.log(`Removed ${into} from ${target}`);
    } catch (err) {
      console.error(getErrorMessage(err));
    }
  },
  keys() {
    try {
      const keys = dictionary.keys();
      if (keys.length > 0) {
        keys.forEach((key, i) => console.log(`${i + 1}) ${key}`));
      } else {
        console.log(`(empty set)`);
      }
    } catch (err) {
      console.error(getErrorMessage(err));
    }
  },
  members(target) {
    try {
      const members = dictionary.members(target);
      members.forEach((member, i) => console.log(`${i + 1}) ${member}`));
    } catch (err) {
      console.error(getErrorMessage(err));
    }
  },
  removeall(target) {
    try {
      dictionary.removeAll(target);
      console.log(`Removed ${target}`);
    } catch (err) {
      console.error(getErrorMessage(err));
    }
  },
  clear() {
    try {
      dictionary.clear();
      console.log(`Cleared`);
    } catch (err) {
      console.error(getErrorMessage(err));
    }
  },
  keyexists(target) {
    try {
      const result = dictionary.isKeyExist(target);
      console.log(`${result}`);
    } catch (err) {
      console.error(getErrorMessage(err));
    }
  },
  memberexists(target, into) {
    try {
      const result = dictionary.isMemberExist(target, into);
      console.log(`${result}`);
    } catch (err) {
      console.error(getErrorMessage(err));
    }
  },
  allmembers() {
    try {
      const members = dictionary.allMembers();
      if (members.length > 0) {
        members.forEach((member, i) => console.log(`${i + 1}) ${member}`));
      } else {
        console.log(`(empty set)`);
      }
    } catch (err) {
      console.error(getErrorMessage(err));
    }
  },
  items() {
    try {
      const items = dictionary.allItems();
      if (items.length > 0) {
        let i = 0;
        for (const [key, value] of items) {
          for (const member of value) {
            console.log(`${i + 1})  ${key}: ${member}`);
            i++;
          }
        }
      } else {
        console.log(`(empty set)`);
      }
    } catch (err) {
      console.error(getErrorMessage(err));
    }
  },
  exit() {
    return true;
  },
});

console.log('Exited');
