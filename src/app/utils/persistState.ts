export const loadState = () => {
  try {
    const searializedState = localStorage.getItem('state');
    if (searializedState == null) {
      return undefined;
    }
    return JSON.parse(searializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    const searializedState = JSON.stringify(state);
    localStorage.setItem('state', searializedState);
  } catch (e) {
    console.log(`error from saveState: ${e}`);
  }
};
