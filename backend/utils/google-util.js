import { google } from 'googleapis'

const googleConfig = {
    clientId: '49230722743-aoe2lfhnqet4j2p8ml6ravotajf91dft.apps.googleusercontent.com',
    clientSecret: '1plhzkAHSX4o-3xN40zvrFvi',
    redirect: ''
}

const defaultScope = [
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/userinfo.email',
]

function createConnection() {
    return new google.auth.OAuth2(
        googleConfig.clientId,
        googleConfig.clientSecret,
        googleConfig.redirect
    )
}

function getConnectionUrl(auth) {
    return auth.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: defaultScope
    })
}

function getGooglePlusApi(auth) {
    return google.plus({version: 'v1', auth})
}

function urlGoogle() {
    const auth = createConnection()
    const url = getConnectionUrl(auth)
    return url
}

function getGoogleAccountFromCode(code) {
    const data = await auth.getToken(code)
    const tokens = data.tokens
    const auth = createConnection()
    auth.setCredentials(tokens)
    const plus = getGooglePlusApi(auth)
    const me = await plus.google.get({userId: 'me'})
    const userGoogleId = me.data.clientId
    const userGoogleEmail = me.data.emails && me.data.emails.lengh && me.data.emails[0].value
    return {
        id: userGoogleId,
        email: userGoogleEmail,
        tokens: tokens
    }
}

