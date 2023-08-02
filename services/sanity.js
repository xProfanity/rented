import { client } from "../lib/sanity"

export async function findUserByEmail(email) {
    const query = `*[_type == "users" && email == "${email}"]`

    const results = await client.fetch(query)

    return results
}

export async function grabHouses() {
    const query = `*[_type == "property" && available == ${true}]`

    const results = await client.fetch(query)

    return results
}