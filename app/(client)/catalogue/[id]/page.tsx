"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Package, ShoppingCart, Info, ChevronRight } from "lucide-react";
import { use } from "react";

import { PATHS, products } from "@/constants";
import { Button } from "@/components/ui/button";
import { FloatingOrbs } from "@/components/shared/ParticleBackground";
import { ScrollReveal, HoverScale, fadeInLeft, fadeInRight } from "@/components/shared/Animations";
import RenderIf from "@/lib/RenderIf";
import { ProjectDetailPageProps } from "@/types";

export default function ProductDetailPage(props: ProjectDetailPageProps) {
  const params = use(props.params);
  const { id } = params;
  const product = products.find((p) => p.id === Number(id));
  const relatedProducts = products.filter((p) => p.id !== Number(id)).slice(0, 3);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingOrbs />

      <div className="container mx-auto py-12 px-4">
        {/* Breadcrumb */}
        <Breadcrumb productName={product?.name} />

        {/* Main Content */}
        <RenderIf condition={!!product}>
          <div className="grid lg:grid-cols-2 gap-10 mt-8">
            {/* Image Section */}
            <ScrollReveal variants={fadeInLeft}>
              <ProductImage product={product!} />
            </ScrollReveal>

            {/* Details Section */}
            <ScrollReveal variants={fadeInRight} delay={0.2}>
              <ProductInfo product={product!} />
            </ScrollReveal>
          </div>

          {/* Related Products */}
          <RelatedProducts products={relatedProducts} />
        </RenderIf>

        <RenderIf condition={!product}>
          <NotFound />
        </RenderIf>
      </div>
    </div>
  );
}

function Breadcrumb({ productName }: { productName?: string }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 text-sm text-muted-foreground"
    >
      <Link href={PATHS.HOME} className="hover:text-primary transition-colors">
        Əsas
      </Link>
      <ChevronRight className="w-4 h-4" />
      <Link href={PATHS.CATALOGUE} className="hover:text-primary transition-colors">
        Kataloq
      </Link>
      <ChevronRight className="w-4 h-4" />
      <span className="text-foreground font-medium">{productName || "Məhsul"}</span>
    </motion.nav>
  );
}

interface ProductImageProps {
  product: {
    image: string;
    name: string;
  };
}

function ProductImage({ product }: ProductImageProps) {
  return (
    <motion.div
      className="glass p-8 h-full"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-background/50 border border-border/50 group">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
        />

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Corner decoration */}
        <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-secondary/30 rounded-br-lg" />
      </div>
    </motion.div>
  );
}

interface ProductInfoProps {
  product: {
    id: number;
    name: string;
    description: string;
  };
}

function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="glass p-8 h-full flex flex-col">
      {/* Product badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit mb-4"
      >
        <Package className="w-4 h-4" />
        Məhsul #{product.id}
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-3xl md:text-4xl font-bold text-gradient mb-6"
      >
        {product.name}
      </motion.h1>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex-1"
      >
        <div className="flex items-center gap-2 mb-3">
          <Info className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Təsvir</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {product.description}
          {" "}
          {product.description}
          {" "}
          {product.description}
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-border/50"
      >
        <HoverScale>
          <Link href={PATHS.ORDER}>
            <Button size="lg" className="group btn-shine bg-primary text-primary-foreground">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Sifariş Ver
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </HoverScale>

        <HoverScale>
          <Link href={PATHS.CATALOGUE}>
            <Button size="lg" variant="outline" className="glass-button group">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Kataloqa Qayıt
            </Button>
          </Link>
        </HoverScale>
      </motion.div>
    </div>
  );
}

interface RelatedProductsProps {
  products: Array<{
    id: number;
    name: string;
    image: string;
    description: string;
  }>;
}

function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section className="mt-16">
      <ScrollReveal>
        <h2 className="text-2xl font-bold mb-8">
          Digər <span className="text-gradient">Məhsullar</span>
        </h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ScrollReveal key={product.id} delay={index * 0.1}>
            <HoverScale>
              <Link href={`/catalogue/${product.id}`}>
                <motion.div
                  className="glass p-6 h-full group cursor-pointer"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-background/50 mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                </motion.div>
              </Link>
            </HoverScale>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[60vh] flex items-center justify-center"
    >
      <div className="text-center glass p-12 max-w-md">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-20 h-20 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-6"
        >
          <Package className="w-10 h-10 text-destructive" />
        </motion.div>
        <h3 className="text-xl font-semibold mb-2">Məhsul Tapılmadı</h3>
        <p className="text-muted-foreground mb-6">
          Axtardığınız məhsul mövcud deyil və ya silinib.
        </p>
        <HoverScale>
          <Link href={PATHS.CATALOGUE}>
            <Button className="group">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Kataloqa Qayıt
            </Button>
          </Link>
        </HoverScale>
      </div>
    </motion.div>
  );
}
