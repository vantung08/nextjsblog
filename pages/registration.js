import Head from "next/head";
import RegistrationForm from "../components/registration_form";


export default function Registration() {
    return (
        <>
            <Head>
                <title>Registration Page</title>
            </Head>
            <section>
                <RegistrationForm />
            </section>
        </>
    );
}