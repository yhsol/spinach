import Layout from "@/components/layout";
import { NextPage } from "next";

const Stream: NextPage = () => {
  return (
    <Layout title="Live Stream" hasTabBar>
      <div className="py-10 divide-y-2 space-y-4">
        {Array.from({ length: 5 }, (v, i) => i).map((v, i) => (
          <div key={`${v}-${i}`} className="pt-4  px-4">
            <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
            <h3 className="text-gray-700 text-lg mt-2">
              Let&apos;s try potatos
            </h3>
          </div>
        ))}
        <button className="fixed hover:bg-orange-500 transition-colors cursor-pointer  bottom-10 right-8 shadow-xl bg-orange-400 rounded-full p-4 text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Stream;
