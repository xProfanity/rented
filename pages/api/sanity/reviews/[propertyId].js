import { fetchPropertyReviews } from "../../../../services/sanity"

const handler = async (req, res) => {
    const {propertyId} = req.query

    try {
        const response = await fetchPropertyReviews(propertyId)

        return res.status(200).json(response)
    } catch (error) {
        console.log('error', error)
        res.status(500).json(error)
    }
}

export default handler