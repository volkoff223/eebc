export const serializeNonPOJOs = (obj) => {
  return structuredClone(obj);
};

export const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
  return `https://eebc.pockethost.io/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};

export const getFileURL = (collectionId, recordId, fileName) => {
  return `https://eebc.pockethost.io/api/files/${collectionId}/${recordId}/${fileName}`;
};
