'use client';

import { gql } from '@apollo/client';

const githubQuery = gql`
  query profileQuery($username: String = 'lialila') {
    user(login: $username) {
      name avatarUrl
      repositories(last : 10) {
        edges{ node{ name defaultBraanchRef {
          name id
        }}}
      }
    }
  }
`;

export default function GitHubProfile() {
  const {loading, error, data, refetch} = useQuery(githubQuery, {
    variables: {
      name: 'lialila',

    },
  });

  if (loading) return <div> Loading...</div>
  if(error) return <div>{`Error! ${error.message}`} </div>if(!data) return <div> No data</div>;

  return (
    <div>
      <form>
        <input value={username}
        onChange=
        {(event) => setUserName(event.currentTarget.value)}     />
        <button
        onClick=((event)=> {event.preventDefault();
          await refetch[{name:username}]
        })
         </form>
    </div>
  );
}
