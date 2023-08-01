import { client } from "../lib/sanity"

export async function findUserByEmail(email) {
    const query = `*[_type == "users" && email == "${email}"]`

    const results = await client.fetch(query)

    return results
}