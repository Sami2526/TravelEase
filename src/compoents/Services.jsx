import {
    FaPlane,
    FaHotel,
    FaUmbrellaBeach,
    FaConciergeBell,
    FaMapMarkedAlt,
    FaCar,
    FaMountain,
    FaSuitcaseRolling
} from 'react-icons/fa';

const services = [
    {
        icon: <FaPlane className="text-3xl text-[#2c6865]" />,
        title: 'Flight Booking',
        description: 'Book flights easily, compare prices, and enjoy a smooth travel booking experience worldwide.'
    },
    {
        icon: <FaHotel className="text-3xl text-[#2c6865]" />,
        title: 'Hotel Booking',
        description: 'Find comfortable hotels, compare prices, and book your perfect stay anywhere in the world.'
    },
    {
        icon: <FaUmbrellaBeach className="text-3xl text-[#2c6865]" />,
        title: 'Beach Tour',
        description: 'Enjoy beautiful beaches, exciting water activities, and relaxing seaside adventures.'
    },
    {
        icon: <FaConciergeBell className="text-3xl text-[#2c6865]" />,
        title: 'Concierge Services',
        description: 'Get thoughtful local recommendations, dining ideas, and help planning the details of your stay.'
    },
    {
        icon: <FaMapMarkedAlt className="text-3xl text-[#2c6865]" />,
        title: 'Tour Guide',
        description: 'Explore famous attractions with expert guides and discover local culture, history, and hidden gems.'
    },
    {
        icon: <FaCar className="text-3xl text-[#2c6865]" />,
        title: 'Car Rental',
        description: 'Rent comfortable cars at affordable prices and enjoy convenient transportation throughout your journey.'
    },
    {
        icon: <FaMountain className="text-3xl text-[#2c6865]" />,
        title: 'Adventure Tours',
        description: 'Experience thrilling hiking, mountain climbing, and outdoor adventures across beautiful destinations.'
    },
    {
        icon: <FaSuitcaseRolling className="text-3xl text-[#2c6865]" />,
        title: 'Travel Packages',
        description: 'Discover packages with accommodation, transportation, sightseeing, and memorable holiday experiences.'
    }
];

const Services = () => (
    <section id="services" className="bg-[#eaf0ec] px-6 py-20 md:px-16 lg:px-24 xl:px-32">
        <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d77a55]">The details, taken care of</p>
                <h2 className="text-3xl font-bold text-[#17383d] md:text-4xl">Travel made easy</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {services.map((service) => (
                    <article
                        key={service.title}
                        className="flex flex-col items-center rounded-2xl border border-[#dce6e0] bg-white p-6 text-center shadow-[0_8px_24px_rgba(23,56,61,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(23,56,61,0.12)]"
                    >
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8f0ed]">
                            {service.icon}
                        </div>
                        <h3 className="mb-2 text-lg font-bold text-[#17383d]">{service.title}</h3>
                        <p className="text-sm leading-6 text-[#687779]">{service.description}</p>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default Services;
