import { Mail, Phone, Clock } from "lucide-react";

const TopBar = () => {
    return (
        <div className="bg-zinc-900 text-white py-2 text-xs font-medium border-b border-white/10 hidden lg:block">
            <div className="container-custom flex justify-between items-center">
                <div className="flex items-center space-x-6">
                    <a href="tel:+918928237775" className="flex items-center space-x-2 text-gray-300 hover:text-brand-orange transition-colors">
                        <Phone className="w-3.5 h-3.5" />
                        <span>+91 8928237775</span>
                    </a>
                    <a href="mailto:info@sejalind.com" className="flex items-center space-x-2 text-gray-300 hover:text-brand-orange transition-colors">
                        <Mail className="w-3.5 h-3.5" />
                        <span>info@sejalind.com</span>
                    </a>
                    <a href="mailto:sales@sejalind.com" className="flex items-center space-x-2 text-gray-300 hover:text-brand-orange transition-colors">
                        <Mail className="w-3.5 h-3.5" />
                        <span>sales@sejalind.com</span>
                    </a>
                </div>

                <div className="flex items-center space-x-2 text-gray-300">
                    <Clock className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Monday – Saturday : 10 AM - 6 PM</span>
                    <span className="h-3 w-px bg-white/20 mx-3"></span>
                    <span className="text-brand-orange font-semibold">Sunday: Closed</span>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
