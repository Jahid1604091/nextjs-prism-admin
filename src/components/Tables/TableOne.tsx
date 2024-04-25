import { BRAND } from "@/types/brand";
import Image from "next/image";
import { MdAddCard } from "react-icons/md";

const brandData: BRAND[] = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "#2001",
    visitors: "4208 49** **** 8705",
    revenues: "Cody Fisher",
    sales: "Active",
    conversion: "Physical",
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "#2001",
    visitors: "4208 49** **** 8705",
    revenues: "Cody Fisher",
    sales: "Active",
    conversion: "Physical",
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "#2001",
    visitors: "4208 49** **** 8705",
    revenues: "Cody Fisher",
    sales: "Active",
    conversion: "Physical",
  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "#2001",
    visitors: "4208 49** **** 8705",
    revenues: "Cody Fisher",
    sales: "Active",
    conversion: "Physical",
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "#2001",
    visitors: "4208 49** **** 8705",
    revenues: "Cody Fisher",
    sales: "Active",
    conversion: "Physical",
  },
];

const TableOne = () => {
  return (
    <div className="pb-2.5 pt-6   xl:pb-1">
      <div className="flex justify-between">
        <h4 className="mb-1 text-xl font-semibold text-black dark:text-white">
          Cards{" "}
        </h4>
        <div className="bg-white rounded-lg p-1 px-2 text-meta-4 font-semibold flex items-center gap-1">Request Card <MdAddCard size={18}/></div>
      </div>
      <p>
        Once the payment is done and confirmed, we have an estimated time of 10
        business days for card arrival.
      </p>
      <div className="mb-2 mt-8">
        <form action="https://formbold.com/s/unique_form_id" method="POST">
          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2">
              <svg
                className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                  fill=""
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                  fill=""
                />
              </svg>
            </button>

            <input
              type="text"
              placeholder="Search Card..."
              className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125"
            />
          </div>
        </form>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Refrence</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Number</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Name</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Status</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Type</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base"></h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-6 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              {/* <div className="flex-shrink-0">
                <Image src={brand.logo} alt="Brand" width={48} height={48} />
              </div> */}
              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-2">
              <p className="text-black dark:text-white">{brand.visitors}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.revenues}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex">
              <p className="rounded-xl bg-slate-600 px-2 text-black dark:text-green-500">
                {brand.sales}
              </p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.conversion}</p>
            </div>
            <div className="hidden rotate-90 cursor-pointer items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
