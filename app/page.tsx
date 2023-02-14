import { gql } from '@apollo/client';
import Image from '@next/image';
// server compom=nent
// @ is same as ..
import { initializeApollo } from '../util/client';
import ApolloClientProvider from './ApolloClientProvider';
import GitHubProfile from './GitHubProfile';

type GitHubProfileResponse = {
  user: {
    name: string;
    avatarUrl: string;
    repositories: {
      edges: { node: { name: string; id: string } }[];
    };
  };
};
export default async function HomePage() {
  const client = initializeApollo(null);

  const { data } = await client.query({
    query: gql`
      query progileQuery($username: String = "lialila") {
        user(login: $lialila) {
          name
          avatarUrl
          repositories(last: 10) {
            edges {
              node {
                name
                defaultBranchRef {
                  name
                  id
                }
              }
            }
          }
        }
      }
    `,
  });

  return (
    <main>
      <ApolloClientProvider
        initialApolloState={JSON.stringify(client.cache.extract())}
      ></ApolloClientProvider>
      <GitHubProfile />

      {/* <h1>{data.user.name}'s Github profile</h1>
      <Image
        src={data.user.avatarUrl}
        alt={`${data.user.name}'s avatar`}
        width="200"
        height="200"
      />{' '}
      <h2>Repositories</h2>
      {data.user.repositories.edges.map((repository)=> (
        <li key={repository.node.id}>
{repository.node.id}> {repository.node.name}
        </li>
      ))} */}
    </main>
  );
}
