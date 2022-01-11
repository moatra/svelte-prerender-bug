
// POST /login
export const post = async (request) => {
	if (request.headers.accept !== 'application/json') {
		if (request.body.get('email') === "foo@example.com" && request.body.get('password') === "bar") {
			return {
				status: 303,
				headers: {
					location: '/login/success'
				}
			}
		}
		return {
			fallthrough: true
		}
	} else {
		if (request.body.get('email') === "foo@example.com" && request.body.get('password') === "bar") {
			return {
				status: 200,
				body: {
					success: true
				}
			}
		}
		return {
			status: 403,
			body: {
				success: false
			}
		}
	}
};
