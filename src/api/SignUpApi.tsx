export async function UserData(name: string, email: string, password: string) {
    const url = 'https://login-signup-auth-using-jwt-1.onrender.com/signup';
  
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      if (!res.ok) throw new Error('Failed to create user');
  
      // Assuming the response is just a success message like "User created successfully"
      const data = await res.json();
  
      // You can directly return the message or handle it as needed
      return data.token;
    } catch (error) {
      console.error('Error during signup:', error);
      return { error: 'Signup failed' };
    }
  }
  