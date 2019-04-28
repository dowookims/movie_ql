const dow = {
  name: "dowookims",
  age: 25,
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => dow
  }
};

export default resolvers;