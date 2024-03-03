"use client"
import { error } from 'console';
import { useState } from 'react';


const useFormValidation = () => {
    const [errors, setErrors] = useState({
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        passwordConfirm: ''
    });

    const validateField = (name: string, value: string, confirm?: string) => {
        let error = '';
        switch (name) {
            case 'email':
                if (!value) error = 'Veuillez saisir votre email.';
                else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) error = 'Email non valide';
                break;
            case 'password':
                if (!value) error = 'Veuillez renseigner un mot de passe';
                else if (!/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})/.test(value)) error = `Le mot de passe n'est pas valide`;
                break;
            case 'confirmPassword':
                if (value !== confirm) error = 'Les mots de passe ne correspondent pas';
                break;
            default:
                if (!value) error = `Veuillez renseigner votre ${name}`;
        }
        setErrors(prev => ({ ...prev, [name]: error }));
        return !error;
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formFields = e.target.elements;
        let isValid = true;
        for (let field of formFields) {
            if (field.name) {
                let valid = true
                if (field.name == "confirmPassword'") {
                    valid = validateField(field.name, field.value, formFields.confirmPassword.value);
                } else {
                    valid = validateField(field.name, field.value);
                }
                if (!valid) isValid = false;
            }
        }
        if (isValid) {
            console.log("valid")
            // Proceed with form submission logic
        }
    };

    return { errors, validateField, handleSubmit };
};




function CreateAccount() {
    const { errors, validateField, handleSubmit } = useFormValidation();




    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12  lg:px-8">
            <div className="sm:mx-auto sm:w-ful sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Création de votre compte</h2>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
                        <div className="flex-1">
                            <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">Prénom</label>
                            <div >
                                <input id="firstname" placeholder='Winston' name="firstname" type="text" className="p-4 block w-full rounded-md border-0 py-1.5 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                                {errors.firstname && <p className="text-sm font-bold text-error">{errors.firstname}</p>}
                            </div>
                        </div>
                        <div className="flex-1">
                            <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">Nom</label>
                            <div >
                                <input id="lastname" placeholder="Churchill" name="lastname" type="text" className="p-4 block w-full rounded-md border-0 py-1.5 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                                {errors.lastname && <p className="text-sm font-bold text-error">{errors.lastname}</p>}
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                        <div>
                            <input id="email" name="email" placeholder='jvpdt@company.org' className="p-4 block w-full rounded-md border-0 py-1.5 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                            {errors.email && <p className="text-sm font-bold text-error">{errors.email}</p>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
                        <div >
                            <input id="password" name="password" type="password" placeholder="••••••••" autoComplete="current-password" className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                            {errors.password && <p className="text-sm font-bold text-red-500">{errors.password}</p>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">Confirmation du mot de passe</label>
                        <div >
                            <input id="confirmPassword" name="confirmPassword" type="password" autoComplete="current-password" className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            {errors.passwordConfirm && <p className="text-sm font-bold text-red-500">{errors.passwordConfirm}</p>}
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:primaryhover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">S&apos;inscrire</button>
                    </div>
                </form>
            </div >
        </div >
    );
}

export default CreateAccount;


