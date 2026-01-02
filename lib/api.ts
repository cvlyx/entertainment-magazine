const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const api = {
  auth: {
    login: async (credentials: any) => {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      return res.json();
    },
    register: async (data: any) => {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return res.json();
    },
  },
  content: {
    getAll: async (params: any = {}) => {
      const searchParams = new URLSearchParams(params);
      const res = await fetch(`${API_URL}/content?${searchParams.toString()}`);
      return res.json();
    },
    getOne: async (id: number) => {
      const res = await fetch(`${API_URL}/content/${id}`);
      return res.json();
    },
    create: async (data: any, token: string) => {
      const res = await fetch(`${API_URL}/content`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(data),
      });
      return res.json();
    },
  }
};
