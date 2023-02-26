import { useState } from 'react';
import { GitHubUser, GitHubError, LocalGitHubUser } from 'types';
import { isGitHubUser } from 'utils/typeguards';
import { defaultUser } from 'mock';
import { Container } from 'components/Container';
import { Search } from 'components/Search';
import { TheHeader } from 'components/TheHeader';
import { UserCard } from 'components/UserCard';
import { extractLocalUser } from 'utils/extract-local-user';

const BASE_URL = 'https://api.github.com/users/';

function App() {
  const [user, setUser] = useState<LocalGitHubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const url = `${BASE_URL}${username}`;

    const res = await fetch(url);
    const user = (await res.json()) as GitHubUser | GitHubError;

    if (isGitHubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <TheHeader />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
}

export default App;
