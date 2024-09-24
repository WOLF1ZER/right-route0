import React from 'react'
import docslist1 from "../../../assets/docslist1.jpg"
import docslist2 from "../../../assets/docslist2.jpg"
import docslist3 from "../../../assets/docslist3.jpg"
import docslist4 from "../../../assets/docslist4.jpg"
import docslist5 from "../../../assets/docslist5.jpg"
import docslist6 from "../../../assets/docslist6.jpg"
import docslist7 from "../../../assets/docslist7.jpg"
import docslist8 from "../../../assets/docslist8.jpeg"
import { useTranslation } from 'react-i18next';



const DocsList = ({handleOrderPopup}) => {

    const {t} = useTranslation();

    const CardsData = [
    {
        id: 1,
        title: t("ddoc1"),
        desc: t("ddocp1"),
        img: docslist1,
        btn: t("ddocb"),
    },
    {
        id: 2,
        title: t("ddoc2"),
        desc: t("ddocp2"),
        img: docslist2,
        btn: t("ddocb"),
    },
    {
        id: 3,
        title: t("ddoc3"),
        desc: t("ddocp3"),
        img: docslist3,
        btn: t("ddocb"),
    },
    {
        id: 4,
        title: t("ddoc4"),
        desc: t("ddocp4"),
        img: docslist4,
        btn: t("ddocb"),
    },
    {
        id: 5,
        title: t("ddoc5"),
        desc: t("ddocp5"),
        img: docslist5,
        btn: t("ddocb"),
    },
    {
        id: 6,
        title: t("ddoc6"),
        desc: t("ddocp6"),
        img: docslist6,
        btn: t("ddocb"),
    },
    {
        id: 7,
        title: t("ddoc7"),
        desc: t("ddocp7"),
        img: docslist7,
        btn: t("ddocb"),
    },
    {
        id: 8,
        title: t("ddoc8"),
        desc: t("ddocp8"),
        img: docslist8,
        btn: t("ddocb"),
    },
]



  return (
    <section className="bg-[url('./assets/back-cards.jpg')] text-white pb-32">
        <div className="container py-14 mx-auto overflow-hidden">
            <h1 data-aos="zoom-out" className=' text-3xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-center pb-8 text-white py-16'>{t("secdocs1")}</h1>
            <p className='text-md text-gray-300 py-2 text-center pb-10' data-aos="fade-up"><span className='text-sky-700'>{t("secdocsp1")}</span> {t("secdocsp2")}</p>
            {/*card section */}
            <div  data-aos="fade-up" className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-6 w-full'>
                {
                 CardsData.map((cards) => (
                    <div key={cards.id} className='bg-black border-2 border-sky-800 p-3 rounded-2xl flex flex-col justify-between h-full mx-auto'>
                         <div className='flex flex-col justify-center items-center p-3'>
                         <img src={cards.img} alt=""  className='w-[200px] h-[200px] rounded-lg'/>
                         </div>
                         <div className='space-y-2 text-center bg-sky-800/40 rounded-lg p-2 flex-grow'>
                            <h1 className='text-xl font-bold py-5'>{cards.title}</h1>
                            <p>{cards.desc}</p>
                         </div>
                         <div className='flex justify-center items-center p-5'>
                            <button onClick={handleOrderPopup} className='bg-white rounded-xl text-black px-8 py-3 text-xl hover:bg-primary/50'>{cards.btn}</button>
                         </div>
                    </div>
                 ))
                }
            </div>
        </div>
    </section>
  )
}

export default DocsList;
