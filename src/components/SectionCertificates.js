import React from 'react'
import CertificatesList from './CertificatesList'

export default function SectionCertificates() {
  return (
    <section className="section SectionCertificates min-h-screen bg-zinc-100 flex items-center justify-center bg-[url(/white5.jpg)] bg-cover bg-center py-20 md:py-40">
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-25 place-items-start px-5 md:px-0'>
        <div className='grid grid-cols-1 gap-2 text-2xl col-span-1 '>
          <div className='text-5xl font-black mb-5'>
            Patents & Certifications.
          </div>
          <div className='text-lg md:text-xl'>
            Trusted Technology, Proven by Certifications
          </div>
          <div className='text-xl md:text-2xl font-light'>
            특허/인증서
          </div>
        </div>
        <div className='col-span-2'>
          <CertificatesList />
        </div>
      </div>
    </section>
  )
}
