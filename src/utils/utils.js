export function removePassword(user) {
  if (user && typeof user === 'object') {
    // eslint-disable-next-line no-unused-vars
    const { password, ...rest } = user;
    return rest;
  }
  return user;
}