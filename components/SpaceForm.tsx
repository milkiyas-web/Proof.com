import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import CustomFormField from '@/components/CustomFormField';
import { Form } from './ui/form';
import { Button } from './ui/Button';
 // Adjust import paths as needed
 export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  SELECT = 'select',
  CHECKBOX = 'checkbox',
  FileUpload = 'fileUpload',
}
const UserFormValidation = z.object({
  space: z.string().min(1, 'Space name is required'),
  header: z.string().min(1, 'Header is required'),
  message: z.string().min(1, 'Message is required'),
  // file: z.any(), // Uncomment if you handle file uploads
});

type UserFormData = z.infer<typeof UserFormValidation>;

interface SpaceFormProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const SpaceForm: React.FC<SpaceFormProps> = ({ handleInputChange }) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      space: "",
      header: "",
      message: "",
    }
  });

  const onSubmit: SubmitHandler<UserFormData> = (data) => {
    console.log("Form Submitted:", data); // Log form data
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=''>
        <CustomFormField 
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="space"
          label="Space name"
          placeholder='Portfolio'
          onChange={handleInputChange}
        />
        <CustomFormField 
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="header"
          label="Header title"
          placeholder='Review my services'
          onChange={handleInputChange}
        />
        {/* Uncomment if handling file uploads
        <CustomFormField
          fieldType={FormFieldType.FileUpload}
          control={form.control}
          label="Choose file"
          name="file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
        /> */}
        <CustomFormField 
          fieldType={FormFieldType.TEXTAREA}
          control={form.control}
          name="message"
          label="Custom message"
          placeholder='How did my experience with this service help you? And how did you find it?'
          onChange={handleInputChange}
        />
        <Button className='mt-2' type='submit' variant="outline">
          Save
        </Button>
      </form>
    </Form>
  );
};

export default SpaceForm;
