import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import emailjs from "emailjs-com";

const ContactsForm = () => {
    const { t } = useTranslation();
    const { register, formState: { errors, isValid }, handleSubmit, reset } = useForm({ mode: "onBlur" });
    // Add state for form submission status
    const [formStatus, setFormStatus] = useState(null); // 'success', 'error', or null
    
    const onSubmit = (data, e) => {
        e.preventDefault();

        setFormStatus(null);  // Reset form status
       
        // Send form data with EmailJS
        emailjs.sendForm(
            'service_ew8634e',   // Replace with your Service ID
            'template_37d8xjm',  // Replace with your Template ID
            e.target,            // The form element
            'hxsQ4X3tWP02azdUO'                   // Replace with your Public API Key
        )
        .then((result) => {
            console.log(result.text);
            setFormStatus('success'); // Set status to success
            reset();                  // Reset form fields
            
            // Hide success message after 3 seconds
            setTimeout(() => {
                setFormStatus(null);
            }, 3000);
        }, (error) => {
            console.log(error.text);
            setFormStatus('error');   // Set status to error

            // Hide error message after 3 seconds
            setTimeout(() => {
                setFormStatus(null);
            }, 3000);
        });
    };

    return (
        <div className='bg-transparent'>
            <div className=''>
                <div className='flex justify-center items-center p-10'>
                    <div className='grid grid-cols-1 sm:grid-cols-1'>
                        <div className='py-6'>
                            <h1 className='text-white p-10 text-center text-xl lg:text-3xl md:text-2xl xl:text-3xl font-semibold border-l-2 border-l-sky-800 border-t-2 border-t-sky-800'>
                            {t("conform1")}
                            </h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* First Name */}
                            <label className='text-white w-full flex flex-col rounded-lg px-2 py-2'>
                                {t("form1")}
                                <input
                                    className="text-white py-2 px-1 rounded-lg bg-black border-2 border-sky-800"
                                    placeholder={t("formp1")}
                                    {...register('firstname', {
                                        required: t("forme1"),
                                        minLength: { value: 2, message: t("forme6") },
                                        
                                    })}
                                />
                            </label>
                            <div className='h-[40px] p-2'>
                                {errors?.firstname && <p className='text-red-700'>{errors?.firstname.message || t("forme5")}</p>}
                            </div>

                            {/* Phone Number */}
                            <label className='text-white flex flex-col rounded-lg px-2 py-2'>
                                {t("form3")}
                                <input
                                    type="tel"
                                    className="text-white py-2 px-1 rounded-lg bg-black border-2 border-sky-800"
                                    placeholder='+38 (050) 123-45-67'
                                    {...register('phone', {
                                        required: t("forme1"),
                                        validate: value => value > 0 || t("forme4"),
                                    })}
                                />
                            </label>
                            <div className='h-[40px] p-2'>
                                {errors?.phone && <p className='text-red-700'>{errors?.phone.message || t("forme5")}</p>}
                            </div>

                            {/* Message */}
                            <label className='flex flex-col rounded-lg px-2 py-2'>
                                {t("form5")}
                                <textarea
                                    className='text-white py-2 h-[180px] px-1 rounded-lg bg-black border-2 border-sky-800'
                                    placeholder={t("formq")}
                                    {...register('message')}
                                />
                            </label>

                            {/* Submit Button */}
                            <div className='p-5 md:p-3 lg:p-5 xl:p-5'>
                                <button
                                    type="submit"
                                    className='bg-white px-10 py-4 rounded-xl text-black font-bold uppercase hover:bg-primary cursor-pointer'
                                    disabled={!isValid}
                                >
                                    {t("formb")}
                                </button>
                            </div>

                            {/* Conditional Success/Error Message */}
                            {formStatus === 'success' && (
                                <p data-aos="fade-right"  className="text-white font-semibold p-2 mt-2 bg-sky-800/50 rounded-2xl border-2 border-green-500">
                                    {t("formsucces")}
                                </p>
                            )}
                            {formStatus === 'error' && (
                                <p data-aos="fade-right" className="text-white font-semibold p-2 mt-2 bg-sky-800/50 rounded-2xl border-2 border-red-500">
                                    {t("formerror")}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsForm;

