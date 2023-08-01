import Google from "next-auth/providers/google";
import { findUserByEmail } from "../services/sanity";
import { client } from "./sanity";

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
            console.log('user?.email', user?.email)
            try {
                const userExist = await findUserByEmail(user?.email)
                
                if (userExist.length === 0) {
                    const doc = {
                        _type: 'users',
                        username: user?.name,
                        email: user?.email,
                        image: user?.image,
                        userId: user?.id,
                        bookmarks: []
                    }
    
                    await client.create(doc)
                }
            } catch (error) {
                console.log('error', error)
            }


            return true
        }
    },
    secret: process.env.NEXTAUTH_SECRET
}
