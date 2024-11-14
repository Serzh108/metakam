// import StatusLabel, { Status } from './components/status-label';
import AddCompanyButton from '@/app/components/add-company-button';
import MagicButton from './components/magic-button';

export default function Home() {
  return (
    <main className="flex flex-col gap-4 w-[400px] m-x-auto items-center">
      <h1 className="text-xl">Home page </h1>
      {/* <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel> */}
      <AddCompanyButton />
      <MagicButton />
    </main>
  );
}
