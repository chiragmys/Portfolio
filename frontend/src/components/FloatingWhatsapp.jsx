import { MessageCircle } from 'lucide-react';
import { profile } from '../data/mock';

export default function FloatingWhatsapp() {
  return (
    <a
      href={`https://wa.me/${profile.whatsapp}?text=Hi%20Chirag%2C%20I%20visited%20your%20portfolio%21`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 md:right-24 z-40 h-14 w-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
      aria-label="WhatsApp"
    >
      <MessageCircle className="text-white" size={26} />
    </a>
  );
}