export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj);
};

export const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
	return `https://shopshop-pocketbase-backend.fly.dev/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};
