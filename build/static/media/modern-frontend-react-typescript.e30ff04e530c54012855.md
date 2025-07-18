# Modern Frontend Development with React and TypeScript

TypeScript has become an essential tool for building scalable React applications. In this guide, we'll explore how to leverage TypeScript's power to create robust, maintainable frontend applications.

## Why TypeScript with React?

TypeScript brings several benefits to React development:

- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Enhanced autocomplete and refactoring
- **Self-Documenting Code**: Types serve as documentation
- **Improved Developer Experience**: Better tooling and debugging

## Setting Up a TypeScript React Project

```bash
npx create-react-app my-app --template typescript
cd my-app
npm start
```

## Component Type Definitions

### Functional Components

```typescript
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  variant = 'primary', 
  disabled = false 
}) => {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
```

### Custom Hooks

```typescript
interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounter = (initialValue: number = 0): UseCounterReturn => {
  const [count, setCount] = useState<number>(initialValue);
  
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  
  const decrement = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);
  
  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);
  
  return { count, increment, decrement, reset };
};
```

## State Management with TypeScript

### Context API

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
```

## API Integration

```typescript
interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUser = async (id: number): Promise<User> => {
  const response = await fetch(`/api/users/${id}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }
  
  const result: ApiResponse<User> = await response.json();
  return result.data;
};
```

## Best Practices

1. **Use Strict TypeScript Configuration**
2. **Define Clear Interface Contracts**
3. **Leverage Union Types for State**
4. **Use Generic Types for Reusability**
5. **Implement Error Boundaries**

## Conclusion

TypeScript transforms React development by providing type safety, better tooling, and improved maintainability. Start incorporating these patterns into your React applications to build more robust and scalable frontend systems. 