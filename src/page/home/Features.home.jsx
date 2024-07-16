import React from 'react'
import FeatureItemsHome from './FeatureItems.home'

const FeaturesHome = () => {
    const featureItems= [
        {
            id:1,
            image: "feature-1.jpg",
            title: "Baga Comfort",
            price: 455,
            rate: 4.5,
            location: "New York"
        },
        {
            id:2,
            image: "feature-2.jpg",
            title: "New Apollo Hotel",
            price: 585,
            rate: 4.8,
            location: "California"
        },
        {
            id:3,
            image: "feature-3.jpg",
            title: "New Age Hotel",
            price: 385,
            rate: 4.6,
            location: "Los Angeles"
        },
        {
            id:4,
            image: "feature-4.jpg",
            title: "Helios Beach Resort",
            price: 665,
            rate: 4.8,
            location: "Chicago"
        }
    ]
  return (
    <section className='container mx-auto'>
        <h3 className='text-5xl font-bold font-heading leading-[4rem] text-center mb-7'>Featured Hotels</h3>
        <div className='grid grid-cols-4 gap-7'>
            {featureItems.map((featureItem) => <FeatureItemsHome key={featureItem.id} item={featureItem} />)}
        </div>
    </section>
  )
}

export default FeaturesHome