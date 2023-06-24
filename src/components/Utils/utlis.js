import { v4 as uuid } from 'uuid';

const generateShortId = (length) => {
  const id = uuid();
  const shortId = id.substring(0, length);
  return shortId;
};

export default generateShortId;