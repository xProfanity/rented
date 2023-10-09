import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
    if(req.method === 'POST') {
        try {
            const params = {
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                billing_address_collections: 'auto',
                line_items: [
                    {
                        price: '{{PRICE_ID}}',
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
            res.status(500).json({statusCode: 500, message: error.message})
        }
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not allowed')
    }
}