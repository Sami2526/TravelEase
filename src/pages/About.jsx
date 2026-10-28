import { Link } from 'react-router-dom';

const values = [
  {
    number: '01',
    title: 'Travel with intention',
    description: 'We believe the best trips leave room for discovery, meaningful connections, and the unexpected moments along the way.',
  },
  {
    number: '02',
    title: 'Local stories matter',
    description: 'Every destination has a story. We love helping travelers experience the culture, people, and character behind a place.',
  },
  {
    number: '03',
    title: 'Make it feel easy',
    description: 'From the first idea to the final details, travel planning should feel exciting, clear, and made for you.',
  },
];

const About = () => (
  <main className="min-h-screen bg-[#fbf8f1] pt-[72px]">
    <section className="grid lg:min-h-[620px] lg:grid-cols-2">
      <div className="flex items-center px-6 py-16 md:px-16 lg:px-20 xl:px-28">
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d77a55]">A travel companion for the curious</p>
          <h1 className="text-4xl font-bold leading-tight text-[#17383d] md:text-5xl">We believe every journey has a story.</h1>
          <p className="mt-6 text-base leading-7 text-[#687779]">
            TravelEase is here to make discovering new places feel a little simpler and a lot more inspiring. We bring together destination ideas and travel essentials so you can focus on the moments that matter.
          </p>
          <p className="mt-4 text-base leading-7 text-[#687779]">
            Whether you’re wandering through a historic city, taking in a mountain view, or planning your first big escape, we’re glad to be part of the journey.
          </p>
          <Link to="/gallery" className="mt-8 inline-block rounded-full bg-[#2c6865] px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#235653]">
            Explore our gallery
          </Link>
        </div>
      </div>
      <div className="relative min-h-[420px] overflow-hidden bg-[#dce7e2] lg:min-h-[620px]">
        <img src="/travel.jpg" alt="A traveler taking in a mountain landscape" className="absolute inset-0 h-full w-full object-cover object-[center_45%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102e35]/65 via-transparent to-[#102e35]/10" />
        <p className="absolute bottom-7 left-6 rounded-full border border-white/30 bg-[#102e35]/35 px-5 py-2 text-sm font-bold text-white backdrop-blur-sm md:bottom-9 md:left-9">Find your own kind of beautiful</p>
        <span className="absolute right-6 top-6 rounded-full bg-[#fbf8f1]/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#2c6865] shadow-lg md:right-9 md:top-9">Travel further</span>
      </div>
    </section>

    <section className="bg-[#eaf0ec] px-6 py-20 md:px-16 lg:px-24 xl:px-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d77a55]">What guides us</p>
          <h2 className="text-3xl font-bold text-[#17383d] md:text-4xl">More than getting from here to there.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.number} className="rounded-2xl border border-[#dce6e0] bg-white p-7 shadow-[0_8px_24px_rgba(23,56,61,0.05)]">
              <span className="text-sm font-bold tracking-[0.16em] text-[#d77a55]">{value.number}</span>
              <h3 className="mt-4 text-xl font-bold text-[#17383d]">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#687779]">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
