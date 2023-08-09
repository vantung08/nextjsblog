import Head from "next/head";
import RegistrationForm from "../components/registration_form";


export default function Registration() {
    return (
        <>
            <Head>
                <title>Login Page</title>
            </Head>
            <section>
                <RegistrationForm />
            </section>
        </>
    );
}