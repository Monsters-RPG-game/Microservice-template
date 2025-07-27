import { afterAll, beforeAll } from '@jest/globals';
import FakeBroker from './fakes/broker.js'
import State from '../../src/tools/state.js'
import Mongo from '../../src/connections/mongo/factory.js'

beforeAll(async () => {
  const mongo = await Mongo.create()
  const broker = new FakeBroker()

  State.mongo = mongo
  State.broker = broker

  await State.mongo.init()
});

afterAll(async () => {
  State.mongo.disconnect()
});
