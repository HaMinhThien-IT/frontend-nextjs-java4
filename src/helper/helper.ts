export const generateNameId = (name: string, _id: number) =>
  encodeURIComponent(`${name.replace(/\s/g, '-').replace(/%/g, '')}-i.${_id}`);

export const getIdFromNameId = (url: string) => {
  const arr = url.split('-i.');
  return arr[arr.length - 1];
};
