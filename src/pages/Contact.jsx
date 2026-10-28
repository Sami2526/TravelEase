import { FaEnvelope, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Travel enquiry: ${formData.get('subject')}`);
    const body = encodeURIComponent(
      `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`
    );

    window.location.href = `mailto:samisultankhel@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-[#fbf8f1] px-6 pb-20 pt-[120px] md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d77a55]">We'd love to hear from you</p>
          <h1 className="text-4xl font-bold text-[#17383d] md:text-5xl">Let’s plan something memorable.</h1>
          <p className="mt-5 text-base leading-7 text-[#687779]">
            Have a question, a destination in mind, or need a little inspiration? Send us a message and let’s get your journey started.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-3xl bg-[#102e35] p-8 text-white md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#e5a078]">Get in touch</p>
            <h2 className="mt-3 text-2xl font-bold">We’re here to help.</h2>
            <p className="mt-3 leading-7 text-[#bfd0ce]">Tell us what you’re dreaming about. We’ll help you figure out the next step.</p>

            <div className="mt-9 space-y-6">
              <a href="mailto:samisultankhel@gmail.com" className="flex items-start gap-4 text-sm leading-6 text-[#e2ece9] transition hover:text-[#f1bd8e]">
                <FaEnvelope className="mt-1 shrink-0 text-lg text-[#e5a078]" />
                <span><span className="mb-1 block font-bold text-white">Email us</span>samisultankhel@gmail.com</span>
              </a>
              <div className="flex items-start gap-4 text-sm leading-6 text-[#e2ece9]">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-lg text-[#e5a078]" />
                <span><span className="mb-1 block font-bold text-white">Travel with local insight</span>Discover destinations across Pakistan and beyond.</span>
              </div>
              <div className="flex items-start gap-4 text-sm leading-6 text-[#e2ece9]">
                <FaRegClock className="mt-1 shrink-0 text-lg text-[#e5a078]" />
                <span><span className="mb-1 block font-bold text-white">Whenever you’re ready</span>Send us a note and we’ll get back to you by email.</span>
              </div>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-[#e9e3d8] bg-white p-8 shadow-[0_12px_35px_rgba(23,56,61,0.06)] md:p-10">
            <h2 className="text-2xl font-bold text-[#17383d]">Send us a message</h2>
            <p className="mt-2 text-sm leading-6 text-[#687779]">Your email app will open with your message ready to send.</p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-bold text-[#42595b]">
                Your name
                <input name="name" type="text" autoComplete="name" required className="mt-2 w-full rounded-xl border border-[#dce4df] bg-[#fbfcfa] px-4 py-3 font-normal outline-none transition focus:border-[#2c6865] focus:ring-2 focus:ring-[#2c6865]/15" placeholder="Name" />
              </label>
              <label className="text-sm font-bold text-[#42595b]">
                Email address
                <input name="email" type="email" autoComplete="email" required className="mt-2 w-full rounded-xl border border-[#dce4df] bg-[#fbfcfa] px-4 py-3 font-normal outline-none transition focus:border-[#2c6865] focus:ring-2 focus:ring-[#2c6865]/15" placeholder="you@example.com" />
              </label>
            </div>
            <label className="mt-5 block text-sm font-bold text-[#42595b]">
              What can we help with?
              <input name="subject" type="text" required className="mt-2 w-full rounded-xl border border-[#dce4df] bg-[#fbfcfa] px-4 py-3 font-normal outline-none transition focus:border-[#2c6865] focus:ring-2 focus:ring-[#2c6865]/15" placeholder="Planning a trip, a question, or something else..." />
            </label>
            <label className="mt-5 block text-sm font-bold text-[#42595b]">
              Your message
              <textarea name="message" rows="5" required className="mt-2 w-full resize-y rounded-xl border border-[#dce4df] bg-[#fbfcfa] px-4 py-3 font-normal outline-none transition focus:border-[#2c6865] focus:ring-2 focus:ring-[#2c6865]/15" placeholder="Tell us a little about your plans..." />
            </label>
            <button type="submit" className="mt-6 rounded-full bg-[#2c6865] px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#235653]">
              Send your message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
