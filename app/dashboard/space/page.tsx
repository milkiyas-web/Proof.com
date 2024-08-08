// pages/space.tsx
"use client";
import CustomCard from '@/components/CustomCard';
import SpaceForm from '@/components/SpaceForm';
import Image from 'next/image';
import { useState } from 'react';

interface FormData {
  space: string;
  header: string;
  file: File | null;
  message: string;
}

const SpacePage = () => {
  const [formData, setFormData] = useState<FormData>({
    space: '',
    header: '',
    file: null,
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    //(use this on the second div if you decide to use a card becide the form: grid grid-cols-1)
    <div className="container w-96 mx-auto px-4 py-12 md:py-16 lg:py-20 ">
      <div className=" flex justify-center w-full gap-8 md:grid-cols-2 md:gap-12">
        <section className="my-auto rounded-lg border border-input p-6 md:p-8">
          <h1 className='mb-3 text-xl '>Complete your space</h1>
          <SpaceForm handleInputChange={handleInputChange} />
        </section>
        <section className="items-center ">
          {/* <CustomCard 
            title={formData.space}
            description={formData.header}
            file={formData.file ? formData.file : null}
            customMessage={formData.message}
          /> */}
        </section>
      </div>
    </div>
  );
}


export default SpacePage;