import Layout from "@/components/layout";
import { NextPage } from "next";

const StreamDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="py-10 px-4 space-y-4">
        {/* video */}
        <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
        <h3 className="text-gray-800 font-semibold text-2xl mt-2">
          Let&apos;s try potatos
        </h3>

        {/* chats */}
        <div className="py-10 pb-16 px-4 h-[50vh] overflow-y-scroll space-y-4">
          {Array.from({ length: 5 }, (v, i) => i).map((v, i) => (
            <div key={i} className="space-y-4">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-400" />
                <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                  <p>Hi how much are you selling them for?</p>
                </div>
              </div>
              <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
                <div className="w-8 h-8 rounded-full bg-slate-400" />
                <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                  <p>I want ￦20,000</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* input */}
        <div className="fixed py-2 bg-white  bottom-0 inset-x-0">
          <div className="flex relative max-w-md items-center  w-full mx-auto">
            <input
              type="text"
              className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none pr-12 focus:border-orange-500"
            />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
              <button className="flex focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full px-3 hover:bg-orange-600 text-sm text-white">
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StreamDetail;
