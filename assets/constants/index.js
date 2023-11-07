import { Auth, HoldingKeys, NewHome, Welcome } from ".."

export const menu = [
    {
        link: "properties",
        name: "Properties"
    },
    {
        link: "about",
        name: "About"
    },
    {
        link: "#contact",
        name: "Contact"
    }
]

export const heroSlogan = "You can discover your next home in a few clicks."
export const heroSub = "Your home is waiting for you"

export const filtersByType = [
    {
        type: "all",
        active: true,
    },
    {
        type: "house",
        active: false,
    },
    {
        type: "apartment",
        active: false,
    },
    {
        type: "villa",
        active: false,
    },
]

export const ratingStars = [
    {
        index: 1,
        isActive: false
    },
    {
        index: 2,
        isActive: false
    },
    {
        index: 3,
        isActive: false
    },
    {
        index: 4,
        isActive: false
    },
    {
        index: 5,
        isActive: false
    },
]

export const whyUs = [
    {
        name: 'Quality Listings',
        description: "Discover exceptional homes that are well-maintained and desirable. Our curated listings ensure you'll find a place you'll love to call home."
    },
    {
        name: 'Expertise',
        description: "Our experienced team understands the local real estate market inside out. Count on us to guide you to the perfect property in your preferred neighborhood."
    },
    {
        name: 'User-friendly interface',
        description: "Searching for a home has never been easier. Our intuitive website lets you filter properties based on your preferences, making your house-hunting journey convenient and efficient."
    },
    {
        name: 'Transparent Process',
        description: "We believe in honesty and clarity. Our straightforward terms and accurate property information empower you to make informed decisions with confidence."
    },
    {
        name: 'Verified Listings',
        description: "Trust matters. Our listings are meticulously verified for accuracy, ensuring that what you see is exactly what you get."
    },
    {
        name: 'Wide range of options',
        description: "Whether you're looking for an apartment, house, or something in between, our diverse range of properties accommodates different budgets and lifestyles."
    },
    {
        name: 'Tenenant Resources',
        description: "Beyond finding your dream home, we're here to support you every step of the way. Access our guides on renting, moving tips, and tenant rights to navigate the rental process seamlessly."
    }
]

export const AboutUs = "At Rented, we're not just in the business of renting houses; we're in the business of creating homes. We understand that finding the perfect place to live is about more than just square footage and location; it's about finding your sanctuary, your retreat, and your launchpad for all of life's adventures. Our journey began with a simple belief: Everyone deserves a space that reflects their dreams and aspirations. With a commitment to innovation, unparalleled customer service, and a deep passion for connecting people with their ideal homes, we've transformed the renting experience. Our team of experts works tirelessly to curate a diverse selection of exceptional properties, ensuring that every listing on our platform is a place you'll be proud to call 'home.' Welcome to a world of endless possibilities, where renting becomes an exhilarating journey towards the lifestyle you've always imagined. Your story begins here, with Rented."

export const overviews = [
    {
        title: 'Sign up account',
        subText: 'sign up an account to have access to properties',
        image: Auth
    },
    {
        title: 'Browse Houses',
        subText: 'search and discover available and houses at cheap prices and amazing discounts',
        image: Welcome
    },
    {
        title: 'Schedule visits',
        subText: 'set a up a visit at any date you want and check out the desirable house in person',
        image: NewHome
    },
    {
        title: 'Rent a house',
        subText: 'Finally rent and secure a house with any card you own on our safe payment gateway',
        image: HoldingKeys
    },
]

export const services = [
    {
        title: 'property listings',
        description: 'Our real estate rental app provides an extensive database of available houses and apartments for rent. Users can easily search and browse through property listings by various criteria, such as location, size, price range, and amenities. Detailed property descriptions, high-quality photos, and virtual tours help renters make informed decisions.',
        icon: ''
    },
    {
        title: 'Advanced Search and Filters',
        description: 'We offer powerful search and filtering options to make finding the perfect rental property a breeze. Users can refine their search based on specific preferences, such as the number of bedrooms and bathrooms, pet-friendly options, parking availability, and more. Our app ensures that users can tailor their search to match their unique requirements.',
        icon: ''
    },
    {
        title: 'Property Management Tools',
        description: 'For landlords and property owners, our app provides a suite of property management tools. You can easily list your properties, update availability, set rental prices, and communicate with potential tenants. Additionally, we offer features like online rent payment processing, maintenance request management, and lease document storage to streamline property management tasks.',
        icon: ''
    },
    {
        title: 'Neighborhood Insights and Resources',
        description: "We understand that choosing the right neighborhood is essential when renting a house or apartment. Our app includes valuable information about the neighborhoods where properties are located. Users can access data on schools, public transportation, nearby amenities, and safety ratings to help them make informed decisions about their future home. We also provide resources like moving checklists, renter's guides, and legal information to support a smooth rental process.",
        icon: ''
    },
]