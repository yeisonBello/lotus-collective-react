import { gallery } from '../data/content';

const News = () => {
  const newsItems = gallery.events.map((event, index) => ({
    id: index + 1,
    slug: event.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
    date: event.date || event.tag,
    title: event.title,
    excerpt: event.description.substring(0, 150) + '...',
    image: index === 0
      ? 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp'
      : index === 1
      ? 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600&auto=format&fit=crop'
      : index === 2
      ? 'https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=600&auto=format&fit=crop'
      : 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=600&auto=format&fit=crop',
    tag: event.tag,
  }));

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <div className="mb-16">
          <h1 className="font-serif-display text-6xl md:text-8xl mb-6">
            {gallery.title}
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Stay connected with the latest from Lotus Collective. Show recaps, behind-the-scenes
            content, and Miami music culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="group bg-zinc-900/30 border border-white/5 rounded-sm overflow-hidden hover:bg-zinc-900/60 transition-colors"
            >
              <div className="aspect-video w-full overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-[#FF3B30] text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                  {item.tag}
                </div>
              </div>
              <div className="p-6">
                <span className="text-zinc-500 text-xs mb-2 block">{item.date}</span>
                <h3 className="font-bold text-xl leading-tight mb-3 group-hover:text-[#FF3B30] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            2026 awaits with more shows, music, and collective moments. We hope to see you there!
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[#FF3B30] hover:text-white transition-colors uppercase text-sm font-bold tracking-widest border-b border-[#FF3B30] pb-1"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
