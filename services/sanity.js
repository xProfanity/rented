import { v4 as uuidv4 } from 'uuid'
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

export async function alreadyReviewedProperty(propertyId) {
    const query = `*[_type == "reviews" && reviewedPropertyId == "${propertyId}"]`

    const results = await client.fetch(query)

    return {alreadyReviewed: !!results.length, review: results[0]}
}

async function fetchPropertyByPropertyId(propertyId) {
    const query = `*[_type == "property" && propertyId == "${propertyId}"]`

    const results = await client.fetch(query)

    return results[0]
}

export async function createReview(doc) {
    const {alreadyReviewed, review} = await alreadyReviewedProperty(doc.reviewedPropertyId)

    console.log('alreadyReviewd, review', alreadyReviewed, review)

    if(alreadyReviewed) {
        return await client.patch(review._id).set(doc).commit()
    } else {
        const result = await client.create(doc)

        const property = await fetchPropertyByPropertyId(doc.reviewedPropertyId)

        await client.patch(property?._id).setIfMissing({
            reviews: []
        }).insert('after', 'reviews[-1]', [
            {
                _ref: result._id,
                _type: 'reviewRef',
                _key: uuidv4()
            }
        ]).commit()

        return result
    }
}