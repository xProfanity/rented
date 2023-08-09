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

export async function fetchFeaturedHouses() {
    const query = `*[_type == "property" && promotion == ${true} && available == ${true}]`

    const results = await client.fetch(query)

    return results
}

export async function fetchPropertyBySlug(slug) {
    const query = `*[_type == "property" && slug.current == "${slug}"][0]`

    const results = await client.fetch(query)

    return results
}

export async function fetchMorePropertiesByType(type, propertyId) {
    const query = `*[_type == "property" && type == "${type}" && available == ${true} && propertyId != "${propertyId}"]`

    const results = await client.fetch(query)

    return results
}

export async function fetchUserDetails(id) {
    const query = `*[_type == "users" && _id == "${id}"][0]`

    const results = await client.fetch(query)

    return results
}

export async function fetchAllUsers() {
    const query = `*[_type == "users"]`

    const results = await client.fetch(query)

    return results
}

export async function addBookmark(userId, propertyId, alreadyBookmarked) {
    if(!alreadyBookmarked) {
        await client.patch(userId).setIfMissing({
            bookmarks: []
        }).insert("after", "bookmarks[-1]", [propertyId]).commit()
    } else {
        await client.patch(userId).splice('bookmarks', 0, 1, [propertyId])
    }
}