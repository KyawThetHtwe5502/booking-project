import React from 'react'

const NearHotelHome = () => {
    const locations = [
        {
            id: 1,
            image: "near-1.jpg",
            town: "San Francisco",
            time: "13 min"
        },
        {
            id: 2,
            image: "near-2.jpg",
            town: "Los Angeles",
            time: "15 min"
        },
        {
            id: 3,
            image: "near-3.jpg",
            town: "Miami",
            time: "45 min"
        },
        {
            id: 4,
            image: "near-4.jpg",
            town: "Sanjosh",
            time: "55 min"
        }, {
            id: 5,
            image: "near-5.jpg",
            town: "New York",
            time: "1-hour"
        }, {
            id: 6,
            image: "near-6.jpg",
            town: "North justen",
            time: "2-hour"
        }, {
            id: 7,
            image: "near-7.jpg",
            town: "Rio",
            time: "20 min"
        }, {
            id: 8,
            image: "near-8.jpg",
            town: "Las  Vegas",
            time: "3-hour"
        }, {
            id: 9,
            image: "near-9.jpg",
            town: "Texas",
            time: "55 min"
        }, {
            id: 10,
            image: "near-10.jpg",
            town: "Chicago",
            time: "13 min"
        }, {
            id: 11,
            image: "near-11.jpg",
            town: "new Keagan",
            time: "35 min"
        }, {
            id: 12,
            image: "near-12.jpg",
            town: "Oslo",
            time: "1 hour 13 min"
        },

    ]
    return (
        <section className='container mx-auto py-14'>
            <h2 className='font-heading font-bold text-5xl text-center mb-8'>Explore Nearby</h2>
            <div className='grid grid-cols-6 gap-10'>
                {locations.map(i => <div className='group' key={i.id}>
                    <img className='w-full aspect-square rounded-full mb-5 ' src={i.image} alt="" />
                    <a className='block text-center leading-5 text-xl font-heading font-bold mb-3 group-hover:text-blue-500 duration-300'>{i.town}</a>
                    <p className='text-center text-gray-500'>{i.time} drive</p>
                </div>)}
            </div>
        </section>
    )
}

export default NearHotelHome