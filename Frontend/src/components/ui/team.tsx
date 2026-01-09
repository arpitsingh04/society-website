import { useState, useEffect } from 'react';
import { API_BASE_URL } from '@/config/api';

interface TeamMember {
    _id: string;
    name: string;
    position: string;
    email?: string;
    phone?: string;
    image: string;
    isActive: boolean;
}

export default function TeamSection() {
    const [members, setMembers] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/team`);
            if (response.ok) {
                const data = await response.json();
                setMembers(data);
            }
        } catch (error) {
            console.error('Error fetching team members:', error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-5xl border-t px-6">
                <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">Members</span>
                <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                    <div className="sm:w-2/5">
                        <h2 className="text-3xl font-bold sm:text-4xl">Our Society Members</h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p>Meet the dedicated members who work together to make our society a better place to live. Each member contributes their unique skills and expertise to ensure smooth operations and community welfare.</p>
                    </div>
                </div>
                <div className="mt-12 md:mt-24">
                    {loading ? (
                        <div className="flex justify-center items-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-orange"></div>
                        </div>
                    ) : members.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">No team members found. Please add members from the admin panel.</p>
                        </div>
                    ) : (
                        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                            {members.map((member, index) => (
                                <div key={member._id} className="group overflow-hidden">
                                    <img
                                        className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                                        src={`${API_BASE_URL}/uploads/${member.image}`}
                                        alt={member.name}
                                        width="826"
                                        height="1239"
                                    />
                                    <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                        <div className="flex justify-between">
                                            <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                                            <span className="text-xs">_0{index + 1}</span>
                                        </div>
                                        <div className="mt-1 flex items-center justify-between">
                                            <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.position}</span>
                                            {member.phone && (
                                                <a
                                                    href={`tel:${member.phone}`}
                                                    className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                                                >
                                                    Contact
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}