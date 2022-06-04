export default {
    login() {},
    async signup(context, payload) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyBe_IM67FgJHLxb12wu3Qm9arYRf65ylrQ', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            }),
        })
        const responseData = response.json();
        if (!response.ok) {
            const error = new Error(responseData.message || 'Something went wrong')
            throw error
        }

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        })
    }
}