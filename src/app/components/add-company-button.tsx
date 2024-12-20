'use client';
// import dynamic from 'next/dynamic';
import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/button';

// const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
//   ssr: false,
// });

export default function AddCompanyButton() {
  const router = useRouter();
  return (
    <Button onClick={() => router.push('/companies/new')}>Add company</Button>
  );
}
