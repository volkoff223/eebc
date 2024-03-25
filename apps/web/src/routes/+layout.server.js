export const load = ({ locals }) => {
	if (locals.user) {
		return {
			user: locals.user,
			isAdmin: locals.user.isAdmin
		};
	}

	return {
		user: undefined
	};
};
