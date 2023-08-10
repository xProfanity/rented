import { client } from "@/lib/sanity"

const handler = async (req, res) => {
    const doc = JSON.parse(req.body)

    try {
        const result = await client.create(doc)
        
        return res.status(200).json({data: result})
    } catch (error) {
        return res.status(500).json(error)
    }
}

export default handler
