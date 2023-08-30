import { useRouter } from "next/router";

export default function authMiddleware(Component) {
    return (props) => {
        const router = useRouter();
        const isAuthenticated = /*logic code*/;
        if (!isAuthenticated) {
            router.push('/login');
            return null;
        }
        return <Component {...props}/>;
    };
}