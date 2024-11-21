import React from 'react';
import Header from '@/app/components/header';

// export interface PageProps {
//     params: Promise<{ id: string }>;
// }

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <Header>{`Company (${id})`}</Header>;
}
