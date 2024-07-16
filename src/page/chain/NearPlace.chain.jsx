import React from 'react'

const NearPlaceChain = () => {
    const locations = [
        {
            id: 1,
            image: "near-1.jpg",
            town: "San Francisco",
        },
        {
            id: 2,
            image: "near-2.jpg",
            town: "Los Angeles",
        },
        {
            id: 3,
            image: "near-3.jpg",
            town: "Miami",
        },
        {
            id: 4,
            image: "near-4.jpg",
            town: "Sanjosh",
        }, {
            id: 5,
            image: "near-5.jpg",
            town: "New York",
        }, {
            id: 6,
            image: "near-6.jpg",
            town: "North justen",
        }, {
            id: 7,
            image: "near-7.jpg",
            town: "Rio",
        }, {
            id: 8,
            image: "near-8.jpg",
            town: "Las  Vegas",
        }, {
            id: 9,
            image: "near-9.jpg",
            town: "Texas",
        }, {
            id: 10,
            image: "near-10.jpg",
            town: "Chicago",
        }, {
            id: 11,
            image: "near-11.jpg",
            town: "new Keagan",
        }, {
            id: 12,
            image: "near-12.jpg",
            town: "Oslo",

        },

    ]
    return (
        <section className='container mx-auto my-36'>
            <h2 className='font-heading font-bold text-5xl text-center mb-8'>Explore Nearby</h2>
            <div className='grid grid-cols-6 gap-10'>
                {locations.map(i => <div className='group' key={i.id}>
                    <img className='w-full aspect-square rounded-full mb-5 ' src={i.image} alt="" />
                    <a className='block text-center leading-5 text-xl font-heading font-bold mb-3 group-hover:text-blue-500 duration-300'>{i.town}</a>
                    
                </div>)}
            </div>
        </section>
    )
}

export default NearPlaceChain