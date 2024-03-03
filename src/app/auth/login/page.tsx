"use client"

import Link from 'next/link';
import React, { useState } from 'react';

function Login() {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const emailIsValid = (email: string): boolean => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }


  const handleSubmit = (e: any) => {
    e.preventDefault();
    let valid = true;
    if (!e.target.email.value) {
      setEmailError('Veuillez saisir votre email.');
      valid = false;
    } else {
      setEmailError('');
    }
    if (!emailIsValid(e.target.email.value)) {
      setEmailError(`Email non valide`)
    }
    if (!e.target.password.value) {
      setPasswordError('Veuillez saisir votre mot de passe.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      console.log('Form is valid!');
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Se connecter</h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full  sm:max-w-sm">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <div>
              <input id="email" name="email" placeholder="jvpdt@company.org" className="p-4 block w-full rounded-md border-0 py-1.5 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              {emailError && <p className="text-sm text-error">{emailError}</p>}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
              <div className="text-sm">
                <Link href={"/auth/forget-password"} className="font-semibold text-secondary hover:text-secondaryhover">Mot de passe oublié ?</Link>
              </div>
            </div>
            <div>
              <input id="password" name="password" type="password" placeholder="••••••••" autoComplete="current-password" className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              {passwordError && <p className="text-sm text-red-500">{passwordError}</p>}
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:primaryhover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Se connecter</button>
          </div>
        </form>

        <p className="mt-5 text-center text-sm text-text">
          Vous n&apos;êtes pas auteur?
          <Link href={"/auth/register"} className="font-semibold leading-6 text-secondary hover:text-secondaryhover"> S&apos;inscrire</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
