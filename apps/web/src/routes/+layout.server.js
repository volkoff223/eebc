export const load = ({ locals }) => {
  const addAdminTitle = () => {
    if (locals.user) {
      return locals.user;
    } else {
      return undefined;
    }
  };
  return {
    user: addAdminTitle()
  };
};
