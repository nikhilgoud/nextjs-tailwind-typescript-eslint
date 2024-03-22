'use client';
import {type Hello} from '@/utils/interfaces';
import useSwr from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function Dashboard() {
  const {data, error, isLoading} = undefined;
  // const {data, error, isLoading} = useSwr<Hello>('/api/hello', fetcher);

  return (
    <main className="flex flex-col min-h-screen items-center justify-center md:mt-[-70px]">
      <h1 className={`text-3xl col-span-2 self-center text-center`}>Dashboard Page</h1>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        {error && <div>Failed to call API</div>}
        {isLoading && <div>Loading...</div>}
        {data && (
          <div className="grid gap-4 w-full grid-cols-2 items-center justify-center border-gray-200">
            <p className={`text-3xl col-span-2 self-center text-center`}>Sample API Response</p>
            {data.name && (
              <>
                <h3 className={`text-2xl text-end`}>Name</h3>
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  {data.name}
                </span>
              </>
            )}
            <h2 className={`text-2xl text-end`}>Message</h2>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">{data.message}</span>
            <h2 className={`text-2xl text-end`}>Date</h2>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">{data.date}</span>
          </div>
        )}
      </div>
    </main>
  );
}
