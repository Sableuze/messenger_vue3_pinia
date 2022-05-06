export const getItem = (key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key) || '');
  } catch (error) {
    console.log('Error getting item from local storage :', error, key);
    return null;
  }
};

export const setItem = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('Error setting item in local storage :', error);
  }
};

export const removeItem = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log('Error removing item from local storage : ', error);
  }
};
