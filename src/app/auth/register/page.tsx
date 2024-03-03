"use client"

import Link from 'next/link';
import React, { useState } from 'react';

function Register() {
    const [emailError, setEmailError] = useState('');
    const [emailConfirmError, setEmailConfirmError] = useState('');
    const [firstnameError, setFirstnameError] = useState('');
    const [lastnameError, setLastnameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwodConfirmError, setPasswordConfirmError] = useState('');

    const emailIsValid = (email: string): boolean => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    const passwordIsValid = (pwd: string): boolean => {
        const regex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})/;
        return regex.test(pwd);
    }

    const validateEmail = (email: string, confirmEmail: string): boolean => {
        if (!email) {
            setEmailError('Veuillez saisir votre email.');
            return false;
        } else {
            setEmailError('')
            setEmailConfirmError('')
        }
        if (!emailIsValid(email)) {
            setEmailError(`Email non valide`);
            return false;
        } else {
            setEmailError('')
            setEmailConfirmError('')
        }
        if (!confirmEmail) {
            setEmailConfirmError(`Veuillez confirmer votre email`)
            return false
        } else {
            setEmailError('')
            setEmailConfirmError('')
        }
        if (confirmEmail !== email) {
            setEmailConfirmError(`Les adresses ne correspondent pas`);
            return false;
        } else {
            setEmailError('')
            setEmailConfirmError('')
        }

        return true;
    }

    const validateFirstname = (firstname: string): boolean => {
        if (!firstname) {
            setFirstnameError(`Veuillez renseigner votre prénom`)
            return false
        }
        setFirstnameError('')
        return true
    }

    const validateLastname = (lastname: string): boolean => {
        if (!lastname) {
            setLastnameError(`Veuillez renseigner votre nom`)
            return false
        }
        setLastnameError('')
        return true
    }

    const validatePassword = (password: string, confirmPassword: string): boolean => {
        if (!password) {
            setPasswordError('Veuillez renseigner un mot de passe');
            return false;
        } else {
            setPasswordError('')
            setPasswordConfirmError('')
        }
        if (!passwordIsValid(password)) {
            setPasswordError(`Le mot de passe n'est pas valide`);
            return false;
        } else {
            setPasswordError('')
            setPasswordConfirmError('')
        }
        if (!confirmPassword) {
            setPasswordConfirmError('Veuillez Confirmer votre mot de passe');
            return false;
        } else {
            setPasswordError('')
            setPasswordConfirmError('')
        }
        if (confirmPassword !== password) {
            setPasswordConfirmError('Les mots de passes ne correspondent pas');
            return false;
        } else {
            setPasswordError('')
            setPasswordConfirmError('')
        }
        return true
    }


    const handleSubmit = (e: any) => {
        e.preventDefault();
        let valid = true;
        if (!validateFirstname(e.target.firstname.value)) {
            valid = false
        }
        if (!validateLastname(e.target.lastname.value)) {
            valid = false
        }
        if (!validateEmail(e.target.email.value, e.target["confirm-email"].value)) {
            valid = false
        }
        if (!validatePassword(e.target.password.value, e.target["confirm-password"].value)) {
            valid = false
        }
        if (valid) {

        }
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12  lg:px-8">
            <div className="sm:mx-auto sm:w-ful sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Devenir auteur</h2>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
                        <div className="flex-1">
                            <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">Prénom</label>
                            <div >
                                <input id="firstname" placeholder='Winston' name="firstname" type="text" className="p-4 block w-full rounded-md border-0 py-1.5 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                                {firstnameError && <p className="text-sm font-bold text-error">{firstnameError}</p>}
                            </div>
                        </div>
                        <div className="flex-1">
                            <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">Nom</label>
                            <div >
                                <input id="lastname" placeholder="Churchill" name="lastname" type="text" className="p-4 block w-full rounded-md border-0 py-1.5 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                                {lastnameError && <p className="text-sm font-bold text-error">{lastnameError}</p>}
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                        <div>
                            <input id="email" name="email" placeholder='jvpdt@company.org' className="p-4 block w-full rounded-md border-0 py-1.5 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                            {emailError && <p className="text-sm font-bold text-error">{emailError}</p>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="confirm-email" className="block text-sm font-medium leading-6 text-gray-900">Confirmer votre Email</label>
                        <div >
                            <input id="confirm-email" name="confirm-email" className="p-4 block w-full rounded-md border-0 py-1.5 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                            {emailConfirmError && <p className="text-sm text-error font-bold">{emailConfirmError}</p>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
                        <div >
                            <input id="password" name="password" type="password" placeholder="••••••••" autoComplete="current-password" className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                            {passwordError && <p className="text-sm font-bold text-red-500">{passwordError}</p>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900">Confirmation du mot de passe</label>
                        <div >
                            <input id="confirm-password" name="confirm-password" type="password" autoComplete="current-password" className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            {passwodConfirmError && <p className="text-sm font-bold text-red-500">{passwodConfirmError}</p>}
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:primaryhover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">S&apos;inscrire</button>
                    </div>
                </form>

                <p className="mt-5 text-center text-sm text-text">
                    Déjà auteur?
                    <Link href={"/auth/login"} className="font-semibold leading-6 text-secondary hover:text-secondaryhover"> Se connecter</Link>
                </p>
            </div >
        </div >
    );
}

export default Register;
