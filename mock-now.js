module.exports = {
	"routes": {
		"/login:post": function (req) {
			if (req.body.login === 'root' && req.body.password === 'root') {
			    return {
			      success: true,
				}
			}

			return {
				success: false,
			}
		},
	}
}