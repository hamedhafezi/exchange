export const pick = (object: object, keys: string[]) => {
    return keys.reduce((obj, key) => {
        if (object && Object.prototype.hasOwnProperty.call(object, key)) {
            // @ts-ignore
            obj[key] = object[key];
        }
        return obj;
    }, {});
};
