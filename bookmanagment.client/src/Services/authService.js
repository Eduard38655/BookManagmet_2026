const API_BASE = import.meta.env.VITE_API_URL || 'https://localhost:5186';

export const authService = {
  // Verificar si el usuario está autenticado en el servidor
  async verifyAuth() {
    try {
      const response = await fetch(`${API_BASE}/user/auth/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // IMPORTANTE: Enviar cookies
      });

      if (response.ok) {
          const data = await response.json();

          console.log(data)
        return data;
      }
      return null;
    } catch (error) {
      console.error('Error verificando autenticación:', error);
      return null;
    }
  },

  // Login
  async login(email, password) {
    try {
      const response = await fetch(`${API_BASE}/user/finduser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // IMPORTANTE: Guardar cookies
        body: JSON.stringify({
          Email: email,
          PasswordHash: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      }
      return null;
    } catch (error) {
      console.error('Error en login:', error);
      return null;
    }
  },

  // Logout
  async logout() {
    try {
      // Limpiar localStorage
      localStorage.removeItem('user');
      return true;
    } catch (error) {
      console.error('Error en logout:', error);
      return false;
    }
  },
};
