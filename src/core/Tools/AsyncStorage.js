import AsyncStorage from "@react-native-async-storage/async-storage";

// Storing Data
export const storeData = async (storageKey, value ) => {
  try {
    const jsonValue = typeof value === 'string' ? value : JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);

    return { msg: `Saving successful` };
  } catch (error) {
    // saving error
    console.log(error);
    return { error: true, msg: `Saving failed` };
  }
}

// Getting Data
export const getStringValue = async (storageKey) => {
  try {
    return await AsyncStorage.getItem(storageKey)
  } catch (error) {
    // error reading value
    console.log(error);
  }
}
export const getObjectValue = async (storageKey) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey)
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    // error reading value
    console.log(error);
  }
}

// Updating Data
export const updateObjectData = async (storageKey, value) => {
  try {
    const jsonValue = typeof value === 'string' ? value : JSON.stringify(value);
    await AsyncStorage.mergeItem(storageKey, jsonValue);
    const newData = typeof value === 'string' ? await getStringValue(storageKey) : await getObjectValue(storageKey);
    return { msg: `Updating successful`, data: newData };
  } catch (error) {
    console.log(error);
    return { error: true, msg: `Updating failed` };
  }
}
export const  upsertObjectData = async (storageKey, value) => {
  try {
    const jsonValue = typeof value === 'string' ? value : JSON.stringify(value);
    const oldValue = await AsyncStorage.getItem(storageKey);

    if (oldValue === null) {
      await storeData(storageKey, value);
    } else {
      await AsyncStorage.mergeItem(storageKey, jsonValue);
    }

    const newData = typeof value === 'string' ? await getStringValue(storageKey) : await getObjectValue(storageKey);

    return { msg: `Updating successful`, data: newData };
  } catch (error) {
    // upserting error
    console.log(error);
    return { error: true, msg: `Updating failed` };
  }
}

// Remove Data
export const  removeData = async (storageKey) => {
  try {

    await AsyncStorage.removeItem(storageKey);
    return { msg: `Removing successful` };

  } catch (error) {
    // removing error
    console.log(error);
    return { error: true, msg: `Removing failed` };
  }
}


// MUTLI FUNCS
export const  multiGetData = async (storageKeys) => {
  try {

    return await AsyncStorage.multiGet(storageKeys);

  } catch (error) {
    // multi getting error
    console.log(error)
  }
}
export const  multiSetData = async (keyValueArray) => {
  try {
    /*
      keyValueAray: [
       ["@MyApp_user", "value_1"],
       ["@MyApp_user", "value_1"]
     ]
    */
    return await AsyncStorage.multiSet(keyValueArray);

  } catch (error) {
    console.log(error)
  }
}
export const multiUpdateData = async (keyValueArray, value) => {
  try {
    /*
      keyValueAray: [
       ["@MyApp_user", "value_1"],
       ["@MyApp_user", "value_1"]
     ]
    */

    await AsyncStorage.multiMerge(keyValueArray);
    const keys = keyValueArray.map(item => item[0]);
    const newMultiData = await multiGetData(keys);

    return { msg: `Updating successful`, data: newMultiData };
  } catch (error) {
    // multi updating error
    console.log(error);
    return { error: true, msg: `Updating failed` };
  }
}
export const  multiRemoveData = async (storageKeys) => {
  try {

    await AsyncStorage.multiRemove(storageKeys)
    return { msg: `Removing successful` };

  } catch (error) {
    // multi removing error
    console.log(error);
    return { error: true, msg: `Removing failed` };
  }
}

// SPECIALS
export const  getAllStorageKeys = async () => {
  try {

    return await AsyncStorage.getAllKeys();

  } catch (error) {
    // read key error
    console.log(error)
  }
}
export const  clearStore = async () => {
  try {
    await AsyncStorage.clear();
    return { msg: `Store clearing successful` };
  } catch (error) {
    // clearing error
    console.log(error);
    return { error: true, msg: `Store clearing failed` };
  }
}

export const AsyncStoreKeyMap = {
  appSettings: 'appSettings',
  userProfile: 'userProfile',
  userProgress: 'userProgress',
}


