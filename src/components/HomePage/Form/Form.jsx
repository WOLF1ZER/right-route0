import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import emailjs from "emailjs-com";

const Form = () => {
    const { t } = useTranslation();
    const { register, formState: { errors, isValid }, handleSubmit, reset } = useForm({ mode: "onBlur" });
    // Add state for form submission status
    const [formStatus, setFormStatus] = useState(null); // 'success', 'error', or null
    
    const onSubmit = (data, e) => {
        e.preventDefault();

        setFormStatus(null);  // Reset form status
       
        // Send form data with EmailJS
        emailjs.sendForm(
            'service_z0lvflw',   // Replace with your Service ID
            'template_616j7ym',  // Replace with your Template ID
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
            <div className='container'>
                <div className='flex justify-center items-center p-10'>
                    <div className='grid grid-cols-1 sm:grid-cols-1'>
                        <div className='py-6'>
                            <h1 className='text-white p-10 text-center text-xl lg:text-3xl md:text-2xl xl:text-3xl font-semibold border-l-2 border-l-sky-800 border-t-2 border-t-sky-800'>
                                {t("formt")}
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

                            {/* Last Name */}
                            <label className='text-white flex flex-col rounded-lg px-2 py-2'>
                                {t("form2")}
                                <input
                                    className="text-white py-2 px-1 rounded-lg bg-black border-2 border-sky-800"
                                    placeholder={t("formp2")}
                                    {...register('lastname', {
                                        required: t("forme1"),
                                        
                                        minLength: { value: 2, message: t("forme6") },
                                    })}
                                />
                            </label>
                            <div className='h-[40px] p-2'>
                                {errors?.lastname && <p className='text-red-700'>{errors?.lastname.message || t("forme5")}</p>}
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

                            {/* Document Selection */}
                            <label className='text-white flex flex-col rounded-lg px-2 py-2'>
                                {t("form4")}
                                <select
                                    className='flex flex-col w-full py-2 px-1 rounded-lg text-white bg-black border-2 border-sky-800'
                                    {...register("typeOfDocument", { required: true })}
                                >
                                    <option className='bg-black text-white' value="Seaman’s Passport">{t("formo1")}</option>
                                    <option className='bg-black text-white' value="Extension of Seaman’s Passport">{t("formo2")}</option>
                                    <option className='bg-black text-white' value="Service Book">{t("formo3")}</option>
                                    <option className='bg-black text-white' value="Rank Assignment">{t("formo4")}</option>
                                    <option className='bg-black text-white' value="Seaman’s Working Diploma">{t("formo5")}</option>
                                    <option className='bg-black text-white' value="Advanced Training Courses">{t("formo6")}</option>
                                    <option className='bg-black text-white' value="Medical Commission (UA)">{t("formo7")}</option>
                                    <option className='bg-black text-white' value="Medical Commission (RO)">{t("formo8")}</option>
                                    <option className='bg-black text-white' value="Medical Commission (PL)">{t("formo9")}</option>
                                    <option className='bg-black text-white' value="CES Test">{t("formo10")}</option>
                                    <option className='bg-black text-white' value="Training Diploma">{t("formo11")}</option>
                                    <option className='bg-black text-white' value="COVID Certificates">{t("formo12")}</option>
                                    <option className='bg-black text-white' value="Yellow Fever">{t("formo13")}</option>
                                    <option className='bg-black text-white' value="Certificates">{t("formo14")}</option>
                                </select>
                            </label>

                            {/* Message */}
                            <label className='flex flex-col rounded-lg px-2 py-2'>
                                {t("form5")}
                                <textarea
                                    className='text-white py-2 h-[180px] px-1 rounded-lg bg-black border-2 border-sky-800'
                                    placeholder={t("formp4")}
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

export default Form;

