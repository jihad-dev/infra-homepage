
import { PhoneCallIcon,MailIcon, Facebook, Twitter, Instagram, Linkedin, Mail,MapPin } from 'lucide-react';
import logo from '../src/assets/logo-png.png'
const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and About Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold">
                                <img src={logo} alt="logo" />
                            </span>
                        </div>
                        <p className="text-slate-300">
                            Empowering minds through quality education. Join our community of lifelong learners.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-slate-300">
                            <li><a href="#" className="hover:text-blue-400 transition">Courses</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Teachers</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <div className="space-y-2 text-slate-300">
                            <p className='flex gap-x-3'> <MapPin /> Kashipur, Barishal</p>
                            <p className='flex gap-x-3'><PhoneCallIcon/> 01733-336431, 01733-336432
                            </p>
                            <p className='flex gap-x-3'><MailIcon/>  info@infra.edu.bd
                            </p>
                            <p className='flex gap-x-3'><MailIcon/>  infra42044@gmail.com
                            </p>
                           
                           
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com/infrapoly" className="hover:text-blue-400 transition">
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="https://www.facebook.com/949946928358695?ref=embed_page" className="hover:text-blue-400 transition">
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a href="#" className="hover:text-blue-400 transition">
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="hover:text-blue-400 transition">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="#" className="hover:text-blue-400 transition">
                                <Mail className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 mt-8 pt-8 mb-5 text-center text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Infra Polytechnic. All rights reserved.</p>
                    <p>&copy; Contact us Developer <a className='text-bold text-red-600' href="https://jihad-portfolio.vercel.app/">(Jihadul Islam)</a> & <a href="">( Hamim Howlader Asif)</a></p>
                </div>
              
            </div>
        </footer>
    );
};

export default Footer;