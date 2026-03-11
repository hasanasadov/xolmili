"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { use } from "react";

import { PATHS, products } from "@/constants";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/Animations";
import RenderIf from "@/lib/RenderIf";
import { ProjectDetailPageProps } from "@/types";

export default function ProductDetailPage(props: ProjectDetailPageProps) {
  const { id } = use(props.params);
  const product = products.find((p) => p.id === Number(id));
  const related = products.filter((p) => p.id !== Number(id)).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-xs text-muted-foreground"
            aria-label="Breadcrumb"
          >
            <Link href={PATHS.HOME} className="hover:text-foreground transition-colors">
              Əsas
            </Link>
            <span>/</span>
            <Link href={PATHS.CATALOGUE} className="hover:text-foreground transition-colors">
              Kataloq
            </Link>
            <span>/</span>
            <span className="text-foreground">{product?.name ?? "Məhsul"}</span>
          </motion.nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <RenderIf condition={!!product}>
          {product && (
            <>
              <ProductMain product={product} />
              {related.length > 0 && <RelatedSection products={related} />}
            </>
          )}
        </RenderIf>

        <RenderIf condition={!product}>
          <NotFound />
        </RenderIf>
      </div>
    </div>
  );
}

// ===== PRODUCT MAIN =====
function ProductMain({
  product,
}: {
  product: { id: number; name: string; image: string; description: string };
}) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 mb-20">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative aspect-square border border-border bg-muted overflow-hidden"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-10 transition-transform duration-700 hover:scale-105"
        />
        {/* Corner marks */}
        <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-foreground/20" />
        <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-foreground/20" />
      </motion.div>

      {/* Info */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col justify-center"
      >
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          Məhsul #{String(product.id).padStart(2, "0")}
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
          {product.name}
        </h1>

        <div className="divider mb-6" />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
            Təsvir
          </p>
          <p className="text-sm leading-relaxed text-foreground">
            {product.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link href={PATHS.ORDER} className="btn-elite">
            Sifariş ver
          </Link>
          <Link href={PATHS.CATALOGUE} className="btn-elite-outline">
            <ArrowLeft className="w-3.5 h-3.5" />
            Kataloqa qayıt
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

// ===== RELATED PRODUCTS =====
function RelatedSection({
  products: items,
}: {
  products: Array<{ id: number; name: string; image: string; description: string }>;
}) {
  return (
    <section>
      <div className="divider mb-10" />
      <ScrollReveal className="mb-8">
        <h2 className="text-xl font-bold text-foreground">Digər Məhsullar</h2>
      </ScrollReveal>

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border" staggerDelay={0.1}>
        {items.map((p) => (
          <StaggerItem key={p.id}>
            <Link href={`/catalogue/${p.id}`} className="block bg-background group">
              <div className="p-6">
                <div className="relative aspect-square bg-muted mb-4 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    {p.name}
                  </p>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

// ===== NOT FOUND =====
function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[50vh] flex flex-col items-center justify-center gap-6 text-center"
    >
      <p className="text-sm text-muted-foreground">Məhsul tapılmadı</p>
      <Link href={PATHS.CATALOGUE} className="btn-elite-outline">
        <ArrowLeft className="w-3.5 h-3.5" />
        Kataloqa qayıt
      </Link>
    </motion.div>
  );
}
