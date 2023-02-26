import { LocalGitHubUser, GitHubUser } from 'types';

export const extractLocalUser = (user: GitHubUser): LocalGitHubUser => {
  return {
    login: user.login,
    id: user.id,
    avatar: user.avatar_url,
    name: user.name,
    company: user.company,
    blog: user.blog,
    location: user.location,
    bio: user.bio,
    twitter: user.twitter,
    repos: user.public_repos,
    followers: user.followers,
    following: user.following,
    created: user.created_at,
  };
};
