import PopularDestination from '../compoents/PopularDestination'
import Services from '../compoents/Services'
import Clients from '../compoents/Clients'

const Home = () => {
  return (
    <>
    <div className="relative flex min-h-[680px] items-center justify-center bg-cover bg-center pt-[72px]" style={{ backgroundImage: "url('/hero1.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#102e35]/80 via-[#102e35]/45 to-[#102e35]/20" />
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-[#f1bd8e] md:text-base">Find your own kind of beautiful</p>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-white md:text-6xl">Explore the world with us</h1>
            <p className="mb-9 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">Discover remarkable places, thoughtful experiences, and exclusive deals for your next great escape.</p>
            <a href="#destinations" className="rounded-full bg-[#d77a55] px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-[#c66845]">
                Explore destinations
            </a>
        </div>
    </div>
    <PopularDestination/>
    <Services/>
    <Clients/>
    </>
  )
}

export default Home