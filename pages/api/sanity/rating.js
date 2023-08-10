import { createReview } from "@/services/sanity"

const handler = async (req, res) => {
    const doc = JSON.parse(req.body)

    try {
        console.log('doc', doc)

        const result = await createReview(doc)
        
        return res.status(200).json({data: result})
    } catch (error) {
        return res.status(500).json({error})
    }
}

export default handler
