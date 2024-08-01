export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    userRole: 'ADMIN' | 'EMPLOYEE';
  }