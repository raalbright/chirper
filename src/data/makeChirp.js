import Chance from "chance";

const chance = new Chance();

export const makeChirp = () => ( {
  user: {
    id: chance.guid(),
    name: chance.name(),
  },
  body: chance.sentence(),
  createdAt: chance.date(),
  id: chance.guid()
} );
