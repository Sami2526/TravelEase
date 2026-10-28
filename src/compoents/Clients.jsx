import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
    {
        quote: 'Booking my flights and hotels was incredibly easy. Everything was perfectly organized, so I could enjoy every moment of my trip.',
        name: 'Donald Jackman',
        role: 'Travel Blogger',
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&h=100&fit=crop',
    },
    {
        quote: 'I loved how simple it was to explore destinations and compare travel packages. The whole experience was smooth and hassle-free.',
        name: 'Richard Nelson',
        role: 'Frequent Traveler',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&h=100&fit=crop',
    },
    {
        quote: 'From beautiful tours to comfortable stays, everything was amazing. Planning a memorable vacation has never felt this easy.',
        name: 'James Washington',
        role: 'Adventure Enthusiast',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&fit=crop',
    },
];

const Clients = () => (
    <section id="testimonials" className="bg-[#f7f4ed] px-6 py-20 md:px-16 lg:px-24 xl:px-32">
        <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d77a55]">Kind words from the road</p>
                <h2 className="text-3xl font-bold text-[#17383d] md:text-4xl">Stories from our travelers</h2>
                <p className="mt-4 text-base leading-7 text-[#687779]">
                    Real experiences, unforgettable memories, and a little inspiration for your next adventure.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {testimonials.map((testimonial) => (
                    <article
                        key={testimonial.name}
                        className="flex h-full flex-col rounded-2xl border border-[#e8e2d7] bg-white p-7 shadow-[0_12px_35px_rgba(23,56,61,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(23,56,61,0.12)]"
                    >
                        <div className="mb-5 flex items-center justify-between">
                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8f0ed] text-[#2c6865]">
                                <FaQuoteLeft aria-hidden="true" />
                            </span>
                            <div className="flex gap-1 text-[#e2a64e]" aria-label="5 out of 5 stars">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <FaStar key={index} aria-hidden="true" />
                                ))}
                            </div>
                        </div>
                        <p className="flex-1 text-base leading-7 text-[#526365]">“{testimonial.quote}”</p>
                        <div className="mt-7 flex items-center gap-3 border-t border-[#eee9e0] pt-5">
                            <img
                                className="h-12 w-12 rounded-full object-cover ring-2 ring-[#e8f0ed]"
                                src={testimonial.image}
                                alt=""
                                loading="lazy"
                            />
                            <div>
                                <h3 className="font-bold text-[#17383d]">{testimonial.name}</h3>
                                <p className="text-sm text-[#7b8989]">{testimonial.role}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default Clients;
