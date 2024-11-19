// 'use client';
import React from 'react';
import Header from '@/app/components/header';
// import { notFound } from 'next/navigation';

// type PageProps = {
//   params: { id: string };
// };

// export function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }, { id: '3' }];
// }

// export default async function Page({ params }: PageProps) {
export default function Page({ params }: { params: any }) {
  // useEffect(() => {
  //   const id = Number.parseInt(params.id);
  //   if (Number.isNaN(id)) {
  //     notFound();
  //   }
  // }, [params.id]);

  // const { id } = await params;
  const { id } = params;

  return (
    <>
      <Header>Company ({id})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
