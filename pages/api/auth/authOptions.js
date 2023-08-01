import Google from "next-auth/providers/google"

export const authOptions = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    theme: {
        colorScheme: 'light',
        logo: '/rented-color.png'
    },
    callbacks: {
        async signIn({user}) {
            console.log('user', user)
        }
    },
    secret: process.env.NEXTAUTH_SECRET
}