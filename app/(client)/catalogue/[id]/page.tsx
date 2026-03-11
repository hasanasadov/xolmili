"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Package, ChevronRight, ShoppingCart } from "lucide-react";
import { use } from "react";

import { PATHS, products } from "@/constants";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverLift, GradientBlob, ImageReveal, Floating } from "@/components/shared/Animations";
import RenderIf from "@/lib/RenderIf";
import { ProjectDetailPageProps } from "@/types";

export default function ProductDetailPage(props: ProjectDetailPageProps) {
  const { id } = use(props.params);
  const product = products.find((p) => p.id === Number(id));
  const related = products.filter((p) => p.id !== Number(id)).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-accent/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
            aria-label="Breadcrumb"
          >
            <Link href={PATHS.HOME} className="hover:text-highlight transition-colors">
              Əsas
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={PATHS.CATALOGUE} className="hover:text-highlight transition-colors">
              Kataloq
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{product?.name ?? "Məhsul"}</span>
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

function ProductMain({
  product,
}: {
  product: { id: number; name: string; image: string; description: string };
}) {
  const currentIndex = products.findIndex(p => p.id === product.id);
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
  const nextProduct = currentIndex < products.length - 1 ? products[currentIndex + 1] : null;

  return (
    <div className="mb-20">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="surface overflow-hidden">
            <div className="relative aspect-square bg-gradient-to-br from-muted to-accent/50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-12 transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
          
          {/* Floating badge */}
          <Floating distance={8}>
            <div className="absolute -bottom-4 -right-4 surface p-4 shadow-lg glow-soft">
              <div className="text-2xl font-bold text-highlight">#{String(product.id).padStart(2, "0")}</div>
              <div className="text-xs text-muted-foreground">Məhsul ID</div>
            </div>
          </Floating>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:sticky lg:top-24"
        >
          <span className="badge mb-6">Məhsul Detalları</span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {product.name}
          </h1>

          <div className="divider-highlight mb-6" />

          <div className="mb-8">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Təsvir
            </h2>
            <p className="text-foreground leading-relaxed text-lg">
              {product.description}
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { label: "Keyfiyyət", value: "Yüksək" },
              { label: "Mövcudluq", value: "Stokda" },
              { label: "Çatdırılma", value: "1-3 gün" },
              { label: "Zəmanət", value: "12 ay" },
            ].map((item) => (
              <div key={item.label} className="surface-highlight p-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                <p className="font-semibold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={PATHS.ORDER} className="btn-elite flex-1 justify-center">
              <ShoppingCart className="w-4 h-4" />
              Sifariş ver
            </Link>
            <Link href={PATHS.CONTACT} className="btn-elite-outline flex-1 justify-center">
              Əlaqə saxla
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
            {prevProduct ? (
              <Link 
                href={`/catalogue/${prevProduct.id}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-highlight transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>{prevProduct.name}</span>
              </Link>
            ) : (
              <div />
            )}
            {nextProduct && (
              <Link 
                href={`/catalogue/${nextProduct.id}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-highlight transition-colors group"
              >
                <span>{nextProduct.name}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function RelatedSection({
  products: items,
}: {
  products: Array<{ id: number; name: string; image: string; description: string }>;
}) {
  return (
    <section>
      <ScrollReveal className="flex items-center justify-between mb-8">
        <div>
          <span className="badge mb-2">Oxşar Məhsullar</span>
          <h2 className="text-2xl font-bold text-foreground">Digər Məhsullar</h2>
        </div>
        <Link 
          href={PATHS.CATALOGUE}
          className="text-sm font-medium text-highlight flex items-center gap-2 hover:gap-3 transition-all"
        >
          Hamısına bax
          <ArrowRight className="w-4 h-4" />
        </Link>
      </ScrollReveal>

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
        {items.map((p) => (
          <StaggerItem key={p.id}>
            <HoverLift>
              <Link href={`/catalogue/${p.id}`} className="block product-card group">
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground group-hover:text-highlight transition-colors">
                      {p.name}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </HoverLift>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8"
    >
      <div className="w-20 h-20 rounded-full bg-highlight-soft flex items-center justify-center mb-6">
        <Package className="w-10 h-10 text-highlight" />
      </div>
      <h2 className="text-xl font-semibold text-foreground mb-2">Məhsul tapılmadı</h2>
      <p className="text-muted-foreground mb-6">Bu məhsul mövcud deyil və ya silinib</p>
      <Link href={PATHS.CATALOGUE} className="btn-elite">
        <ArrowLeft className="w-4 h-4" />
        Kataloqa qayıt
      </Link>
    </motion.div>
  );
}
