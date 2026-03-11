"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ChevronLeft, ChevronRight, ArrowRight, Grid, List, Package } from "lucide-react";

import { products } from "@/constants/index";
import { Product } from "@/types";
import { ScrollReveal, StaggerContainer, StaggerItem, HoverLift, GradientBlob } from "@/components/shared/Animations";
import RenderIf from "@/lib/RenderIf";
import { PATHS } from "@/constants";

const PRODUCTS_PER_PAGE = 8;

export default function CataloguePage() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return products;
    return products.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  useEffect(() => {
    setPage(0);
  }, [query]);

  const paginated = useMemo(() => {
    if (!isMobile) return filtered;
    return filtered.slice(page * PRODUCTS_PER_PAGE, (page + 1) * PRODUCTS_PER_PAGE);
  }, [filtered, isMobile, page]);

  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);

  useEffect(() => {
    if (isMobile && selected && detailRef.current) {
      const top = detailRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [selected, isMobile]);

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="relative py-16 px-6 lg:px-8 overflow-hidden">
        <GradientBlob className="w-[400px] h-[400px] -top-20 -left-20" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge mb-4">Məhsullar</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Kataloq</h1>
            <p className="text-muted-foreground max-w-lg">
              {products.length} məhsul arasından seçim edin. Hər bir məhsul keyfiyyət zəmanəti ilə.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full lg:w-72 xl:w-80 lg:sticky lg:top-20 lg:self-start"
          >
            <div className="surface p-6">
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Məhsul axtar..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="input-elite pl-11 pr-10"
                />
                <AnimatePresence>
                  {query && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      onClick={() => setQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-accent text-muted-foreground transition-colors"
                      aria-label="Axtarışı sil"
                    >
                      <X className="w-3 h-3" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              {/* View toggle */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{filtered.length}</span> məhsul
                </p>
                <div className="flex gap-1 p-1 bg-muted rounded-lg">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-md transition-colors ${viewMode === "grid" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                    aria-label="Grid görünüşü"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-md transition-colors ${viewMode === "list" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                    aria-label="List görünüşü"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Product list */}
              <div className="space-y-2 max-h-[50vh] lg:max-h-[60vh] overflow-y-auto pr-2">
                <AnimatePresence mode="popLayout">
                  {paginated.map((product, index) => (
                    <ProductListItem
                      key={product.id}
                      product={product}
                      isSelected={selected?.id === product.id}
                      onClick={() => setSelected(product)}
                      index={index}
                    />
                  ))}
                </AnimatePresence>

                {filtered.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <Package className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">Məhsul tapılmadı</p>
                  </motion.div>
                )}
              </div>

              {/* Pagination (mobile) */}
              {isMobile && totalPages > 1 && (
                <Pagination current={page} total={totalPages} onChange={setPage} />
              )}
            </div>
          </motion.aside>

          {/* Detail panel */}
          <main ref={detailRef} className="flex-1">
            <RenderIf condition={!!selected}>
              <AnimatePresence mode="wait">
                {selected && <ProductDetail key={selected.id} product={selected} />}
              </AnimatePresence>
            </RenderIf>
            <RenderIf condition={!selected}>
              <EmptyState />
            </RenderIf>
          </main>
        </div>
      </div>
    </div>
  );
}

function ProductListItem({
  product,
  isSelected,
  onClick,
  index,
}: {
  product: Product;
  isSelected: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, delay: index * 0.03 }}
      onClick={onClick}
      className={`w-full flex items-center gap-4 p-3 rounded-lg text-left transition-all duration-200 group ${
        isSelected 
          ? "bg-highlight-soft border border-highlight" 
          : "hover:bg-accent border border-transparent"
      }`}
    >
      <div className={`w-12 h-12 relative shrink-0 rounded-lg overflow-hidden ${isSelected ? "bg-background" : "bg-muted"}`}>
        <Image src={product.image} alt={product.name} fill className="object-contain p-2" />
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium truncate ${isSelected ? "text-highlight" : "text-foreground"}`}>
          {product.name}
        </p>
        <p className="text-xs text-muted-foreground truncate">{product.description.slice(0, 40)}...</p>
      </div>
      <ArrowRight className={`w-4 h-4 shrink-0 transition-all ${isSelected ? "text-highlight" : "text-muted-foreground/50 group-hover:translate-x-1"}`} />
    </motion.button>
  );
}

function Pagination({
  current,
  total,
  onChange,
}: {
  current: number;
  total: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="flex items-center justify-between pt-6 mt-6 border-t border-border">
      <button
        onClick={() => onChange(Math.max(current - 1, 0))}
        disabled={current === 0}
        className="w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Əvvəlki"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onChange(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? "w-6 bg-highlight" : "bg-border hover:bg-muted-foreground"}`}
            aria-label={`Səhifə ${i + 1}`}
          />
        ))}
      </div>
      <button
        onClick={() => onChange(Math.min(current + 1, total - 1))}
        disabled={current >= total - 1}
        className="w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Növbəti"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

function ProductDetail({ product }: { product: Product }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="surface overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-video bg-gradient-to-br from-muted to-accent/50 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-12 transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="badge">#{String(product.id).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{product.name}</h2>
        
        <div className="mb-6">
          <p className="text-sm font-medium text-muted-foreground mb-2">Təsvir</p>
          <p className="text-foreground leading-relaxed">{product.description}</p>
        </div>

        <div className="divider mb-6" />

        <div className="flex flex-col sm:flex-row gap-3">
          <Link href={PATHS.ORDER} className="btn-elite">
            Sifariş ver
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href={`/catalogue/${product.id}`} className="btn-elite-outline">
            Ətraflı bax
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="surface h-[60vh] flex flex-col items-center justify-center text-center p-8"
    >
      <div className="w-20 h-20 rounded-full bg-highlight-soft flex items-center justify-center mb-6">
        <Package className="w-10 h-10 text-highlight" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">Məhsul seçin</h3>
      <p className="text-muted-foreground max-w-sm">
        Sol siyahıdan məhsul seçərək ətraflı məlumat əldə edin
      </p>
    </motion.div>
  );
}
