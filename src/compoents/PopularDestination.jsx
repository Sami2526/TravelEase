const destinations = [
    {
        image: './islamabad.jpg',
        title: 'Islamabad',
        description: 'Explore the Faisal Mosque, Margalla Hills, Daman-e-Koh viewpoints, peaceful parks, cultural landmarks, and local cuisine.'
    },
    {
        image: './muree.jpg',
        title: 'Murree',
        description: 'Discover breathtaking mountains, lush forests, cool weather, Mall Road, Kashmir Point, and scenic chairlift rides.'
    },
    {
        image: './peshawar.jpg',
        title: 'Peshawar',
        description: 'Experience Qissa Khwani Bazaar, Bala Hisar Fort, historic mosques, traditional chapli kebabs, and Pashtun culture.'
    },
    {
        image: './quetta.jpg',
        title: 'Quetta',
        description: 'Visit Hanna Lake, Urak Valley, Quaid-e-Azam Residency, fresh fruit markets, and peaceful mountain landscapes.'
    },
    {
        image: './Karachi.jpg',
        title: 'Karachi',
        description: 'Enjoy Clifton Beach, Mazar-e-Quaid, vibrant shopping, delicious biryani, historic architecture, and seaside attractions.'
    },
    {
        image: './Lahore.jpg',
        title: 'Lahore',
        description: 'Explore Badshahi Mosque, Lahore Fort, Shalimar Gardens, Anarkali Bazaar, and the city’s famous food.'
    },
    {
        image: './ajk.jpg',
        title: 'Azad Kashmir',
        description: 'Take in Neelum Valley, green mountains, crystal-clear rivers, Banjosa Lake, and scenic waterfalls.'
    },
    {
        image: './gb1.jpg',
        title: 'Gilgit-Baltistan',
        description: 'Discover Hunza Valley, Attabad Lake, Skardu, the Karakoram Mountains, glaciers, and spectacular valleys.'
    }
];

const PopularDestination = () => (
    <section id="destinations" className="bg-[#fbf8f1] px-6 py-20 md:px-16 lg:px-24 xl:px-32">
        <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d77a55]">Made for your bucket list</p>
                <h2 className="text-3xl font-bold text-[#17383d] md:text-4xl">Popular destinations</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {destinations.map((destination) => (
                    <article
                        key={destination.title}
                        className="overflow-hidden rounded-2xl border border-[#e9e3d8] bg-white shadow-[0_10px_30px_rgba(23,56,61,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(23,56,61,0.14)]"
                    >
                        <img src={destination.image} alt={destination.title} loading="lazy" className="h-48 w-full object-cover" />
                        <div className="p-5">
                            <h3 className="mb-2 text-xl font-bold text-[#17383d]">{destination.title}</h3>
                            <p className="text-sm leading-6 text-[#687779]">{destination.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default PopularDestination;
