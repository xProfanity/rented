import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
    if(req.method === 'POST') {
        try {
            const price = req.body.price
            const params = {
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                line_items: [
                    {
                        price,
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `${req.headers.origin}/?success=true`,
                cancel_url: `${req.headers.origin}/?canceled=true`,
            }

            const session = await stripe.checkout.sessions.create(params);
            res.redirect(303, session.url);
        
        } catch (error) {
            console.log('error.message', error.message)
            res.status(500).json({statusCode: 500, message: error.message})
        }
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not allowed')
    }
}