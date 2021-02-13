export const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = (key) => {
  let items = localStorage.getItem(key);

  if (items) {
    return JSON.parse(items);
  }
  return null;
};
