import Image from "next/image";

import { brandsData } from "@/components/partnerBrands/data";

type BrandType = {
  brandName: string;
  imageUrl: string;
};

const PartnerBrands = () => {
  return (
    <div className="flex gap-6 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {brandsData.map((brand: BrandType) => (
        <div className="flex flex-col items-center gap-4" key={brand.brandName}>
          <div
            key={brand.brandName}
            className="border-accent flex size-20 flex-col items-center justify-center gap-2 rounded-4xl border-2"
          >
            <Image
              src={brand.imageUrl}
              alt={brand.brandName}
              width={0}
              height={0}
              className="w-fit p-2"
            />
          </div>
          <div className="flex max-w-[200px] flex-col gap-1">
            <p className="truncate text-sm font-medium">{brand.brandName}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartnerBrands;
