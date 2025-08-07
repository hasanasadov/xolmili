import React from "react";
import { PATHS, products } from "@/constants";
import { Button } from "@/components/ui/button";
import RenderIf from "@/lib/RenderIf";
import Image from "next/image";
import Link from "next/link";
import { ProjectDetailPageProps } from "@/types";

const ProductDetailPage = (props: ProjectDetailPageProps) => {
  const id = props.params.id;

  const product = products.find((p) => p.id == Number(id));
  return (
    <div className=" min-h-[70vh] my-10  text-white">
      <div className="container mx-auto rounded-xl  p-6 md:p-8 pb-20 ">
        <div className="flex flex-col md:flex-row gap-6 md:gap-20 items-center justify-between">
          <div className="md:w-1/2 w-full glass dark:!bg-black duration-300 relative aspect-video overflow-hidden rounded-lg shadow">
            <RenderIf condition={!!product?.image}>
              <Image
                src={product!.image}
                alt={product!.name}
                className=" object-contain"
                fill
              />
            </RenderIf>
          </div>

          <div className="md:w-1/2 w-full text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <h1 className="text-startmd: text-center text-3xl md:text-4xl font-bold text-secondary mb-12 md:mb-20">
              {product?.name}
            </h1>
            <p>
              {product?.description}
              {product?.description}
              {product?.description}
              {product?.description}
              {product?.description}
              {product?.description}
            </p>
            <div className="mt-6">
              <Link href={PATHS.ORDER}>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg">
                  Sifariş ver
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
