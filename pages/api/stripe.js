import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
    if(req.method === 'POST') {
        try {
            const property = req.body
            const propertyImages = property.images.map((image) => {
                const imageRef = image.asset._ref
                const imageUrl = imageRef.replace('image-', `https://cdn.sanity.io/images/${process.env.SANITY_PROJECT_ID}/production/`).replace('-webp', '.webp').replace('-jpeg', '.jpeg').replace('-png', '.png').replace('-jpg', '.jpg')

                return imageUrl
            })
            const thumbnail = property.thumbnail.asset._ref.replace('image-', `https://cdn.sanity.io/images/${process.env.SANITY_PROJECT_ID}/production/`).replace('-webp', '.webp').replace('-jpeg', '.jpeg').replace('-png', '.png').replace('-jpg', '.jpg')
            const params = {
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                line_items: [
                    {
                        price_data: {
                            currency: 'mwk',
                            product_data: {
                                name: property.title,
                                images: [thumbnail, ...propertyImages]
                            },
                            unit_amount: property.price * 100
                        },
                        adjustable_quantity: {
                            enabled: false
                        },
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `${req.headers.origin}/success/${property.slug}/?success=true`,
                cancel_url: `${req.headers.origin}/?canceled=true`,
            }

            const session = await stripe.checkout.sessions.create(params);
            res.status(200).json(session)
        
        } catch (error) {
            console.log('error.message', error.message)
            res.status(500).json({statusCode: 500, message: error.message})
        }
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not allowed')
    }
}