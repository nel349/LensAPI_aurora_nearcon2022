// graphql.js

import { readFileSync, writeFile } from 'fs';
import { join } from 'path';
import { ApolloServer } from 'apollo-server-lambda';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { createProfile, getDefaultProfile, setDefaultProfile } from './createProfile';
import { getDefaultProfileId } from './createProfile';

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    challenge: (parent, args) => {
      return { text: `challenge: ${args.request.address}` };
    },
    defaultProfile: async (parent, args) => {
      const profile = await getDefaultProfile(args.request.ethereumAddress);
      console.log('Profile' + JSON.stringify(profile));
      return {
        id: await getDefaultProfileId(args.request.ethereumAddress),
        handle: profile[3],
        coverPicture: {
          __typename: 'MediaSet',
          original: { url: profile[4] },
        },
      };
    },
  },
  Mutation: {
    createProfile: async (parent, args) => {
      await createProfile(args.request.handle);
      return {
        __typename: 'RelayerResult',
        txHash: 'Profile created..',
        txId: 'THE ID',
      };
    },
    createSetDefaultProfileTypedData: async (parent, args) => {
      await setDefaultProfile(args.request.profileId);
      return {
        id: 'result not working yet',
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs: readFileSync(join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers,
  csrfPrevention: false,
  cache: 'bounded',
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

export const graphqlHandler = server.createHandler({
  expressGetMiddlewareOptions: {
    disableHealthCheck: true,
  },
});
