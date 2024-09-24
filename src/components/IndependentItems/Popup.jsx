import React, { useEffect, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const Popup = ({ orderPopup, handleOrderPopup }) => {
    const { t } = useTranslation();
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });

    const [isAnimating, setIsAnimating] = useState(false);
    const [formStatus, setFormStatus] = useState(null);

    const onSubmit = (data, e) => {
        e.preventDefault();
        setFormStatus(null);

        emailjs.sendForm(
            'service_z0lvflw',   
            'template_616j7ym',   
            e.target,             
            'hxsQ4X3tWP02azdUO'                   
        ).then((result) => {
            setFormStatus('success');
            reset();
            handleOrderPopup(false);
            setTimeout(() => setFormStatus(null), 3000); // Clear message after 3 seconds
        }).catch((error) => {
            setFormStatus('error');
            console.log(error.text);
            setTimeout(() => setFormStatus(null), 3000); // Clear message after 3 seconds
        });
    };

    useEffect(() => {
        if (orderPopup) {
            setIsAnimating(true);
            document.body.style.overflow = 'hidden';
        } else {
            setTimeout(() => setIsAnimating(false), 300);
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [orderPopup]);

    return (
        <>
            {orderPopup && (
                <div className="h-screen w-screen fixed top-0 left-0 z-[10000] backdrop-blur-sm">
                    <div
                        className={`fixed top-1/2 left-1/2 -translate-x-1/2 
                            bg-sky-800/50 p-4 rounded-2xl shadow-md w-[90%] sm:w-[300px] lg:w-[600px] md:w-[400px]
                            max-h-[90vh] overflow-y-auto
                            transition-all duration-300 ease-out transform 
                            ${isAnimating ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
                        `}
                        style={{ transform: 'translate(-50%, -50%)' }}
                    >
                        <div className="flex items-center justify-between">
                            <h2 className="text-bold text-white text-xl">{t("pup")}</h2>
                            <div>
                                <IoMdClose
                                    className="text-2xl cursor-pointer fill-white"
                                    onClick={() => handleOrderPopup(false)}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* First Name */}
                                <label className="text-white w-full flex flex-col rounded-lg px-2 py-2">
                                    {t("form1")}
                                    <input
                                        className="text-white py-2 px-1 rounded-lg bg-sky-800 border-2 border-sky-800"
                                        placeholder={t("formp1")}
                                        {...register('firstname', {
                                            required: t("forme1"),
                                            minLength: {
                                                value: 2,
                                                message: t("forme6"),
                                            },
                                            pattern: {
                                                value: /^[a-zA-Zа-яА-ЯёЁїЇіІєЄґҐ'\\-\\s]+$/,
                                                message: t("forme2"),
                                            },
                                        })}
                                    />
                                </label>
                                <div className="h-[40px] p-2">
                                    {errors?.firstname && <p className="text-red-700">{errors?.firstname.message || t("forme5")}</p>}
                                </div>

                                {/* Last Name */}
                                <label className="text-white flex flex-col rounded-lg px-2 py-2">
                                    {t("form2")}
                                    <input
                                        className="text-white py-2 px-1 rounded-lg bg-sky-800 border-2 border-sky-800"
                                        placeholder={t("formp2")}
                                        {...register('lastname', {
                                            required: t("forme1"),
                                            pattern: {
                                                value: /^[a-zA-Zа-яА-ЯёЁїЇіІєЄґҐ'\\-\\s]+$/,
                                                message: t("forme3"),
                                            },
                                            minLength: {
                                                value: 2,
                                                message: t("forme6"),
                                            },
                                        })}
                                    />
                                </label>
                                <div className="h-[40px] p-2">
                                    {errors?.lastname && <p className="text-red-700">{errors?.lastname.message || t("forme5")}</p>}
                                </div>

                                {/* Phone Number */}
                                <label className="text-white flex flex-col rounded-lg px-2 py-2">
                                    {t("form3")}
                                    <input
                                        type="tel"
                                        className="text-white py-2 px-1 rounded-lg bg-sky-800 border-2 border-sky-800"
                                        placeholder="+38 (050) 123-45-67"
                                        {...register('phone', {
                                            required: t("forme1"),
                                            validate: (value) => value > 0 || t("forme4"),
                                        })}
                                    />
                                </label>
                                <div className="h-[40px] p-2">
                                    {errors?.phone && <p className="text-red-700">{errors?.phone.message || t("forme5")}</p>}
                                </div>

                                {/* Document Selection */}
                                <label className="text-white flex flex-col rounded-lg px-2 py-2">
                                    {t("form4")}
                                    <select
                                        className="flex flex-col w-full py-2 px-1 rounded-lg text-white bg-sky-800 border-2 border-sky-800"
                                        {...register("typeOfDocument", { required: true })}
                                    >
                                        <option className='bg-sky-800 text-white' value="Seaman’s Passport">{t("formo1")}</option>
                                        <option className='bg-sky-800 text-white' value="Extension of Seaman’s Passport">{t("formo2")}</option>
                                        <option className='bg-sky-800 text-white' value="Service Book">{t("formo3")}</option>
                                        <option className='bg-sky-800 text-white' value="Rank Assignment">{t("formo4")}</option>
                                        <option className='bg-sky-800 text-white' value="Seaman’s Working Diploma">{t("formo5")}</option>
                                        <option className='bg-sky-800 text-white' value="Advanced Training Courses">{t("formo6")}</option>
                                        <option className='bg-sky-800 text-white' value="Medical Commission (UA)">{t("formo7")}</option>
                                        <option className='bg-sky-800 text-white' value="Medical Commission (RO)">{t("formo8")}</option>
                                        <option className='bg-sky-800 text-white' value="Medical Commission (PL)">{t("formo9")}</option>
                                        <option className='bg-sky-800 text-white' value="CES Test">{t("formo10")}</option>
                                        <option className='bg-sky-800 text-white' value="Training Diploma">{t("formo11")}</option>
                                        <option className='bg-sky-800 text-white' value="COVID Certificates">{t("formo12")}</option>
                                        <option className='bg-sky-800 text-white' value="Yellow Fever">{t("formo13")}</option>
                                        <option className='bg-sky-800 text-white' value="Certificates">{t("formo14")}</option>
                                    </select>
                                </label>

                                {/* Message */}
                                <label className="flex flex-col rounded-lg px-2 py-2 text-white">
                                    {t("form5")}
                                    <textarea
                                        className="text-white py-2 h-[180px] px-1 rounded-lg bg-sky-800 border-2 border-sky-800"
                                        placeholder={t("formp4")}
                                        {...register('message')}
                                    />
                                </label>

                                {/* Submit Button */}
                                <div className="p-5">
                                    <button
                                        type="submit"
                                        className="bg-white px-10 py-4 rounded-xl text-black font-bold uppercase hover:bg-primary cursor-pointer"
                                        disabled={!isValid}
                                    >
                                        {t("formb")}
                                    </button>
                                </div>

                                {/* Success/Error Messages */}
                                {formStatus === 'success' && (
                                    <p className="text-white font-semibold p-2 mt-2 bg-sky-800/50 rounded-2xl border-2 border-green-500">
                                       {t("formsucces")}
                                    </p>
                                )}
                                {formStatus === 'error' && (
                                    <p className="text-white font-semibold p-2 mt-2 bg-sky-800/50 rounded-2xl border-2 border-red-500">
                                        {t("formerror")}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Popup;
