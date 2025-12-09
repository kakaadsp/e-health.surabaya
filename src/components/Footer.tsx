import { Heart, Instagram, Linkedin, Twitter, Music2 } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Dinas Kesehatan Kota Surabaya</h3>
            <div className="space-y-2 text-sm opacity-90">
              <p>Jl. Jemursari No. X, Surabaya, Jawa Timur, 60XXX</p>
              <p>(031) 534 1234</p>
              <p>dinkes@surabaya.go.id</p>
              <p>Senin - Jumat, 08.00 - 16.00 WIB</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="md:text-right">
            <h3 className="font-bold text-lg mb-4">Ikuti Kami</h3>
            <div className="flex gap-4 md:justify-end">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
              >
                <Music2 size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/20 py-4">
        <div className="container mx-auto px-4 text-center text-sm opacity-80">
          2014 - 2026 © Dinas Kesehatan Kota Surabaya
        </div>
      </div>
    </footer>
  );
};

export default Footer;
