// 'use client';
import React from 'react';
// import Header from '@/app/components/header';
// import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ id: string }>;
};

// export function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }, { id: '3' }];
// }

export default async function Page({ params }: PageProps) {
  // useEffect(() => {
  //   const id = Number.parseInt(params.id);
  //   if (Number.isNaN(id)) {
  //     notFound();
  //   }
  // }, [params.id]);

  const { id } = await params;

  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${id})`}</p>
    </div>
  );
}
