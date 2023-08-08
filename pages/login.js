import Head from "next/head";
import LoginForm from "../components/login_form";


export default function Login() {
    return (
        <>
            <Head>
                <title>Login Page</title>
            </Head>
            <section>
                <LoginForm />
            </section>
        </>
    );
}