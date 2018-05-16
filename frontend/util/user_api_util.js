export const fetchUser = (userId) => {
  return $.ajax({
    method: 'get',
    url: `/api/users/${userId}`,
  });
};
export const fetchUsers = () => {
  return $.ajax({
    method: 'get',
    url: '/api/users',
  });
};

export const followUser = (followeeId) => {
  return $.ajax({
    method: 'post',
    url: `/api/users/${followeeId}/follow_user`,
  });
};

export const unfollowUser = (followeeId) => {
  return $.ajax({
    method: 'delete',
    url: `/api/users/${followeeId}/unfollow_user`,
  });
};
