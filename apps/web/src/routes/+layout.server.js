export const load = ({ locals }) => {
	if (locals.user) {
		return {
			user: locals.user,
			isAdmin: locals.user.role == 'admin'
		};
	}

	return {
		user: undefined
	};
};
