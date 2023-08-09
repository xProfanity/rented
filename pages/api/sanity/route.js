import { addBookmark } from "../../../services/sanity"

const handler = async (req, res) => {
    const {userId, propertyId, bookmarked} = JSON.parse(req.body)

    try {
        await addBookmark(userId, propertyId, bookmarked)
        
        res.status(200).json({message: bookmarked ? 'deleted bookmark' : 'added bookmark'})
    } catch (error) {
        res.status(500).json({message: 'failure'})
    }
}

export default handler