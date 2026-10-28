const photos = [
  { src: '/hero1.jpg', title: 'Find your next horizon', location: 'The great outdoors', className: 'md:col-span-2 md:row-span-2' },
  { src: '/islamabad.jpg', title: 'Capital city calm', location: 'Islamabad' },
  { src: '/muree.jpg', title: 'Into the mountains', location: 'Murree' },
  { src: '/peshawar.jpg', title: 'A city rich in stories', location: 'Peshawar' },
  { src: '/quetta.jpg', title: 'Quiet mountain escapes', location: 'Quetta' },
  { src: '/Karachi.jpg', title: 'Coastal city energy', location: 'Karachi' },
  { src: '/Lahore.jpg', title: 'History around every corner', location: 'Lahore' },
  { src: '/ajk.jpg', title: 'A breath of fresh air', location: 'Azad Kashmir' },
  { src: '/gb1.jpg', title: 'A view worth the journey', location: 'Gilgit-Baltistan' },
];

const Gallery = () => (
  <main className="min-h-screen bg-[#fbf8f1] pt-[72px]">
    <section className="px-6 pb-12 pt-16 text-center md:px-16 md:pt-20">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d77a55]">A little travel inspiration</p>
      <h1 className="text-4xl font-bold text-[#17383d] md:text-5xl">The world, in moments</h1>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#687779]">
        From vibrant city streets to quiet mountain mornings, discover places that make you want to pack a bag.
      </p>
    </section>

    <section aria-label="Travel photo gallery" className="mx-auto max-w-7xl px-6 pb-20 md:px-16 lg:px-24 xl:px-32">
      <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:auto-rows-[250px] lg:grid-cols-4">
        {photos.map((photo) => (
          <article key={photo.location} className={`group relative overflow-hidden rounded-2xl bg-[#17383d] ${photo.className || ''}`}>
            <img
              src={photo.src}
              alt={photo.location}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102e35]/85 via-[#102e35]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 text-white md:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f1bd8e]">{photo.location}</p>
              <h2 className="mt-1 text-xl font-bold md:text-2xl">{photo.title}</h2>
            </div>
          </article>
        ))}
      </div>
    </section>
  </main>
);

export default Gallery;
