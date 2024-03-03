"use client"

import Link from "next/link";

function ForgetPassword() {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full p-6 bg-white rounded-lg shadow  md:mt-0 sm:max-w-md  sm:p-8">
                <h1 className="mt-15 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Mot de passe oublié ?
                </h1>
                <p className="font-light mt-10 text-sm text-text-500">Ne vous inquiétez pas ! Entrez simplement votre email et nous vous enverrons un mail de réinitialisation !</p>
                <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" >
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Votre email</label>
                        <input type="email" name="email" id="email" placeholder="jvpdt@company.org" className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:primaryhover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Envoyer</button>
                </form>
                <p className="mt-5 text-center text-sm text-text">
                    Vous l&apos;avez retrouvé ?
                    <Link href={"/auth/login"} className="font-semibold leading-6 text-secondary hover:text-secondaryhover"> Connectez vous</Link>
                </p>
            </div>
        </div>

    )
}

export default ForgetPassword;