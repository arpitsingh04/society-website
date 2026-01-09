import { Mail, Phone, Clock, MessageSquare, MapPin } from "lucide-react";

import { useSettings } from "@/hooks/useSettings";

const TopBar = () => {
    const { data: settings } = useSettings();

    return (
        <div className="bg-zinc-900 text-white py-2 text-xs font-medium border-b border-white/10 hidden lg:block">
            <div className="container-custom flex justify-between items-center">
                <div className="flex items-center space-x-6">
                    <a href={`tel:${settings?.contactNumber}`} className="flex items-center space-x-2 text-gray-300 hover:text-brand-orange transition-colors">
                        <Phone className="w-3.5 h-3.5" />
                        <span>{settings?.contactNumber}</span>
                    </a>
                    <a href={`mailto:${settings?.email}`} className="flex items-center space-x-2 text-gray-300 hover:text-brand-orange transition-colors">
                        <Mail className="w-3.5 h-3.5" />
                        <span>{settings?.email}</span>
                    </a>
                    <a href={`https://wa.me/${settings?.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-brand-orange transition-colors">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{settings?.whatsappNumber}</span>
                    </a>
                </div>

                <div className="flex items-center space-x-2 text-gray-300 hover:text-brand-orange transition-colors">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Meenakshi CHS, Plot 38, Sector 16, New Panvel east</span>
                </div>


            </div>
        </div>
    );
};

export default TopBar;
