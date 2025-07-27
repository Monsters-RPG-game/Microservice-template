import { afterAll, beforeAll } from '@jest/globals';
import FakeBroker from './fakes/broker.js'
import State from '../../src/tools/state.js'
import Mongo from '../../src/connections/mongo/factory.js'

beforeAll(async () => {
  if(State.mongo || State.broker) return

  const mongo = await Mongo.create()
  const broker = new FakeBroker()

  State.mongo = mongo
  State.broker = broker
});

afterAll(async () => {
  State.mongo.disconnect()
});
