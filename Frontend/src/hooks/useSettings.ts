import { useQuery } from '@tanstack/react-query';
import { API_BASE_URL } from '@/config/api';

export const useSettings = () => {
    return useQuery({
        queryKey: ['settings'],
        queryFn: async () => {
            const response = await fetch(`${API_BASE_URL}/api/settings`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        },
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
};
