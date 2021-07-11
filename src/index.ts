import { bootstrap } from './app';
import { client } from './apollo-client';
import { gql } from "@apollo/client";

bootstrap();

// client
//   .query({
//     query: gql`
//       query {
//         hello
//       }
//     `
//   })
//   .then((result) => console.log(result));