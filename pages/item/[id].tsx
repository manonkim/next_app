import type { NextPage } from 'next';

const ItemDetail: NextPage = () => {
  return (
    <div className="px-4 py-10">
      <div>
        <div className="h-96 bg-slate-300" />
        <div className="flex items-center py-3 border-b space-x-3 cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-slate-200" />
          <div>
            <p className="font-medium text-sm text-gray-700">Steve Jebs</p>
            <p className="font-medium text-sm text-gray-500">
              View profile &rarr;
            </p>
          </div>
        </div>
        <div>
          <h1 className="mt-5 text-xl font-semibold text-gray-800">
            Galaxy S50
          </h1>
          <p className="mt-2 text-xl text-gray-700">$140</p>
          <p className="mt-5 text-gray-700 my-6">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
          <div className="flex items-center justify-between">
            <button className="flex-1 bg-orange-500 focus:bg-orange-600 text-white text-sm py-2 rounded-md">
              Talk to seller
            </button>
            <button className="p-3 text-gray-400 hover:text-red-500">
              <svg
                className="h-6 w-6 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold py-7">Similar items</h2>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i}>
              <div className="h-56 w-full mb-4 bg-slate-200" />
              <h3 className="font-semibold text-sm text-gray-800">
                Galaxy S60
              </h3>
              <p className=" text-sm text-gray-700">$6</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
