import mongoose from 'mongoose';
import fakeData from './fakeData.json';

const generateRandomName = (): string => {
  const vocabulary = 'ABCDEFGHIJKLMNOUPRSTUWZabcdefghijklmnouprstuwz';
  let name = '';
  for (let x = 0; x < 12; x++) {
    name += vocabulary[Math.floor(Math.random() * vocabulary.length)];
  }
  return name;
};

const cleanDb = async (): Promise<void> => {
  await mongoose.connection.dropDatabase();
}

export { fakeData, generateRandomName, cleanDb };
