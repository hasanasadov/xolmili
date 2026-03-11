"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import { products } from "@/constants/index";
import { Product } from "@/types";
import { ScrollReveal } from "@/components/shared/Animations";
import RenderIf from "@/lib/RenderIf";
import { PATHS } from "@/constants";

const PRODUCTS_PER_PAGE = 8;

export default function CataloguePage() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
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
      <div className="border-b border-border py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
              Məhsullar
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Kataloq</h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-0">

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full lg:w-72 xl:w-80 lg:min-h-[calc(100vh-80px)] lg:sticky lg:top-16 lg:self-start py-8 lg:pr-8 lg:border-r border-border"
          >
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Məhsul axtar..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="input-elite pl-7 pr-8"
              />
              <AnimatePresence>
                {query && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setQuery("")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center hover:text-foreground text-muted-foreground transition-colors"
                    aria-label="Axtarışı sil"
                  >
                    <X className="w-3.5 h-3.5" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Count */}
            <p className="text-xs text-muted-foreground mb-4">
              {filtered.length} məhsul tapıldı
            </p>

            {/* Product list */}
            <div className="space-y-px">
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
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-muted-foreground py-6 text-center"
                >
                  Məhsul tapılmadı
                </motion.p>
              )}
            </div>

            {/* Pagination (mobile) */}
            {isMobile && totalPages > 1 && (
              <Pagination
                current={page}
                total={totalPages}
                onChange={setPage}
              />
            )}
          </motion.aside>

          {/* Detail panel */}
          <main ref={detailRef} className="flex-1 py-8 lg:pl-10">
            <RenderIf condition={!!selected}>
              <AnimatePresence mode="wait">
                {selected && (
                  <ProductDetail key={selected.id} product={selected} />
                )}
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

// ===== PRODUCT LIST ITEM =====
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
      className={`w-full flex items-center gap-3 py-3 border-b border-border/50 text-left transition-all duration-200 group ${
        isSelected ? "opacity-100" : "opacity-60 hover:opacity-100"
      }`}
    >
      <div className={`w-1 h-6 shrink-0 transition-colors duration-200 ${isSelected ? "bg-foreground" : "bg-transparent group-hover:bg-border"}`} />
      <div className="w-10 h-10 relative shrink-0 border border-border bg-muted overflow-hidden">
        <Image src={product.image} alt={product.name} fill className="object-contain p-1" />
      </div>
      <p className={`text-sm font-medium truncate transition-colors ${isSelected ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
        {product.name}
      </p>
    </motion.button>
  );
}

// ===== PAGINATION =====
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
    <div className="flex items-center justify-between pt-6 mt-4 border-t border-border">
      <button
        onClick={() => onChange(Math.max(current - 1, 0))}
        disabled={current === 0}
        className="w-8 h-8 flex items-center justify-center border border-border hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Əvvəlki"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <span className="text-xs text-muted-foreground">
        {current + 1} / {total}
      </span>
      <button
        onClick={() => onChange(Math.min(current + 1, total - 1))}
        disabled={current >= total - 1}
        className="w-8 h-8 flex items-center justify-center border border-border hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Növbəti"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

// ===== PRODUCT DETAIL =====
function ProductDetail({ product }: { product: Product }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
          #{String(product.id).padStart(2, "0")}
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{product.name}</h2>
      </div>

      {/* Two-column layout */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Image */}
        <div className="relative aspect-square border border-border bg-muted overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-8 transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Info */}
        <div>
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Təsvir
            </p>
            <p className="text-sm leading-relaxed text-foreground">{product.description}</p>
          </div>

          <div className="divider mb-6" />

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href={PATHS.ORDER} className="btn-elite">
              Sifariş ver
            </Link>
            <Link href={`/catalogue/${product.id}`} className="btn-elite-outline">
              Ətraflı bax
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// ===== EMPTY STATE =====
function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-[50vh] flex flex-col items-center justify-center gap-4 text-center"
    >
      <div className="w-12 h-12 border border-border flex items-center justify-center">
        <ArrowRight className="w-5 h-5 text-muted-foreground" />
      </div>
      <div>
        <p className="text-sm font-medium mb-1">Məhsul seçin</p>
        <p className="text-xs text-muted-foreground">
          Sol siyahıdan məhsul seçərək ətraflı məlumat əldə edin
        </p>
      </div>
    </motion.div>
  );
}
