

type Dictionary = { 
    [key: string]: string[]; 
}

let dictionary: Dictionary = {}

/**
@name: add
@description: adds a member to collection for given key. Displays an error if the member already exists for the key.
**/
export const add = (key: string, member: string) => {
    if(isKeyExist(key)){
        if(isMemberExist(key, member)){
            throw new Error(`ERROR, member "${member}" already exists for key "${key}"`)
        }else{
            dictionary[key] = [...dictionary[key], member]
        }
    }else{
        dictionary[key] = [member]
    }

    return
}

/**
@name: remove
@description: removes a member from key. If the last member is removed from the key, the key is removed from the dictionary. If the key or member does not exist, displays an error.
**/
export const remove = (key: string, member: string) => {
    if(!isKeyExist(key)){
        throw new Error(`ERROR, key "${key}" does not exist`)
    }

    if(!isMemberExist(key, member)){
        throw new Error(`ERROR, member "${member}" already exists for key "${key}"`)
    }

    //grab the array and filter the member out to remove
    dictionary[key] = dictionary[key].filter((m) => m !== member)
    //Check if key is empty and delete key if true
    if(dictionary[key].length === 0){
        delete dictionary[key]
    }

    return
}

/**
@name: removeAll
@description: removes all members for a key and removes the key from the dictionary. Returns an error if the key does not exist.
**/
export const removeAll = (key: string) => {
    if(!isKeyExist(key)){
        throw new Error(`ERROR, key "${key}" does not exist`)
    }

    delete dictionary[key]
    return
}

/**
@name: isKeyExist
@description: returns a boolean if the key exists
**/
export const isKeyExist = (key: string): boolean => (typeof dictionary[key] !== "undefined" ? true : false)

/**
@name: isMemberExist
@description: returns a boolean if the member exists on the key, false if key does not exist
**/
export const isMemberExist = (key: string, member: string): boolean => {
    if(isKeyExist(key)){
        return dictionary[key].includes(member)
    }else{
        return false
    }
}

/**
@name: keys
@description: returns all the keys in the dictionary. Order is not guaranteed.
**/
export const keys = (): string[] => Object.keys(dictionary)

/**
@name: members
@description: returns the collection of strings for a given key. Return order not guaranteed. Returns an error if key does not exist.
**/
export const members = (key: string): string[] => {
    if(!isKeyExist(key)){
        throw new Error(`ERROR, key "${key}" does not exist`)
    }

    return dictionary[key]
}

/**
@name: clear
@description: removes all keys and all members from dictionary
**/
export const clear = () => {
    Object.keys(dictionary).forEach(key => delete dictionary[key]);
    return
}

/**
@name: allMembers
@description: returns all members in the dictionary. Returns nothing if there are none. Order is not guaranteed.
**/
export const allMembers = (): string[] => Object.values(dictionary).flat()

/** TODO
@name: allItems
@description: returns all keys in the dictionary and all their members. Returns nothing if there are none. Order is not guaranteed.
**/
export const allItems = (): [string, string[]][] => {
    return Object.entries(dictionary)
}

const api = {
    add,
    remove,
    removeAll,
    isKeyExist,
    isMemberExist,
    keys,
    members,
    clear,
    allMembers,
    allItems
}

export default api