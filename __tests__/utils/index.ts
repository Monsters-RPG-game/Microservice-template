import fakeData from './fakeData.json' with { type: "json" };

const generateRandomName = (): string => {
  const vocabulary = 'ABCDEFGHIJKLMNOUPRSTUWZabcdefghijklmnouprstuwz';
  let name = '';
  for (let x = 0; x < 12; x++) {
    name += vocabulary[Math.floor(Math.random() * vocabulary.length)];
  }
  return name;
};

export { fakeData, generateRandomName };
