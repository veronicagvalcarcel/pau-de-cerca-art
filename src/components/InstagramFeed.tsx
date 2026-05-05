import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

export const InstagramFeed = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="text-left">
          <h2 className="text-5xl md:text-6xl mb-4">Sígueme en Instagram</h2>
          <p className="text-black-art/60 font-body text-lg"> Para estar al día de las últimas novedades.</p>
        </div>
        <a 
          href="https://instagram.com/paudecercaart" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white-art border border-black-art/10 px-6 py-3 rounded-full font-label font-bold text-sm hover:bg-black-art hover:text-white-art transition-all"
        >
          <Instagram size={18} />
          @paudecercaart
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  link: "https://www.instagram.com/p/DXJ8tdADWK4/",
                  img: "/instagram/1.png"
                },
                {
                  link: "https://www.instagram.com/p/DWRllsKDeEK/",
                  img: "/instagram/2.png"
                },
                {
                  link: "https://www.instagram.com/p/DSC1eMiDSrt/",
                  img: "/instagram/3.png"
                },
                {
                  link: "https://www.instagram.com/p/DR2LYJGDftD/",
                  img: "/instagram/4.png"
                }
              ].map((post, i) => (
                <motion.a
                  key={i}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8 }}
                  className="aspect-square overflow-hidden rounded-2xl bg-white-art/30 relative group"
                >
                  <img 
                    src={post.img}
                    alt={`Instagram post ${i + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black-art/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Instagram className="text-white-art" size={32} />
                  </div>
                </motion.a>
              ))}
            </div>
          </section>
        );
      };
