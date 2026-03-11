"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ChevronLeft, ChevronRight, Package, ArrowRight } from "lucide-react";

import { products } from "@/constants/index";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FloatingOrbs } from "@/components/shared/ParticleBackground";
import { ScrollReveal, HoverScale } from "@/components/shared/Animations";
import RenderIf from "@/lib/RenderIf";

const PRODUCTS_PER_PAGE = 6;

export default function CataloguePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
    setPage(0);
  }, [searchQuery]);

  const paginatedProducts = useMemo(() => {
    return isMobile
      ? filteredProducts.slice(page * PRODUCTS_PER_PAGE, (page + 1) * PRODUCTS_PER_PAGE)
      : filteredProducts;
  }, [isMobile, filteredProducts, page]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  useEffect(() => {
    if (isMobile && selectedProduct && detailRef.current) {
      const offsetTop = detailRef.current.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  }, [selectedProduct, isMobile]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingOrbs />

      <div className="flex flex-col lg:flex-row min-h-[90vh]">
        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-80 xl:w-96 lg:h-screen lg:sticky lg:top-0 p-6 lg:overflow-y-auto"
        >
          <div className="glass p-6 h-full">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Package className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gradient">Kataloq</h2>
            </div>

            {/* Search */}
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery("")}
            />

            {/* Product List */}
            <div className="mt-6 space-y-3">
              <AnimatePresence mode="popLayout">
                {paginatedProducts.map((product, index) => (
                  <ProductListItem
                    key={product.id}
                    product={product}
                    isSelected={selectedProduct?.id === product.id}
                    onClick={() => setSelectedProduct(product)}
                    index={index}
                  />
                ))}
              </AnimatePresence>

              {filteredProducts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8 text-muted-foreground"
                >
                  Məhsul tapılmadı
                </motion.div>
              )}
            </div>

            {/* Pagination for mobile */}
            {isMobile && totalPages > 1 && (
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            )}
          </div>
        </motion.aside>

        {/* Main Content */}
        <main ref={detailRef} className="flex-1 p-6 lg:p-10">
          <RenderIf condition={!!selectedProduct}>
            <ProductDetail product={selectedProduct} />
          </RenderIf>
          <RenderIf condition={!selectedProduct}>
            <EmptyState />
          </RenderIf>
        </main>
      </div>
    </div>
  );
}

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

function SearchInput({ value, onChange, onClear }: SearchInputProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <Input
        placeholder="Məhsul axtar..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 pr-10 glass-border"
      />
      <AnimatePresence>
        {value && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
          >
            <X className="w-3 h-3" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

interface ProductListItemProps {
  product: Product;
  isSelected: boolean;
  onClick: () => void;
  index: number;
}

function ProductListItem({ product, isSelected, onClick, index }: ProductListItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onClick={onClick}
      className={`
        p-4 rounded-xl cursor-pointer transition-all duration-300 group
        ${isSelected
          ? "bg-primary/10 border-2 border-primary/50"
          : "bg-background/50 border border-border/50 hover:border-primary/30 hover:bg-primary/5"
        }
      `}
    >
      <div className="flex items-center gap-4">
        <motion.div
          className="w-16 h-16 rounded-xl bg-background/80 p-2 overflow-hidden relative shrink-0"
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-1"
          />
        </motion.div>
        <div className="flex-1 min-w-0">
          <p className={`font-semibold truncate transition-colors ${isSelected ? "text-primary" : "group-hover:text-primary"}`}>
            {product.name}
          </p>
          <p className="text-sm text-muted-foreground truncate">
            {product.description.slice(0, 50)}...
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isSelected ? 1 : 0, x: isSelected ? 0 : -10 }}
          className="w-2 h-2 rounded-full bg-primary"
        />
      </div>
    </motion.div>
  );
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-6 flex items-center justify-between"
    >
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(Math.max(currentPage - 1, 0))}
        disabled={currentPage === 0}
        className="glass-button"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      <span className="text-sm text-muted-foreground">
        {currentPage + 1} / {totalPages}
      </span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages - 1))}
        disabled={currentPage >= totalPages - 1}
        className="glass-button"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </motion.div>
  );
}

function ProductDetail({ product }: { product?: Product | null }) {
  if (!product) return null;

  return (
    <ScrollReveal>
      <motion.div
        key={product.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="glass p-8 md:p-10"
      >
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-gradient mb-8 text-center"
        >
          {product.name}
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-square rounded-2xl overflow-hidden bg-background/50 border border-border/50 group"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-lg font-semibold mb-3">Təsvir</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <HoverScale>
                <Link href={`/catalogue/${product.id}`}>
                  <Button className="group btn-shine bg-primary text-primary-foreground">
                    Ətraflı Bax
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </HoverScale>
              <HoverScale>
                <Link href="/order">
                  <Button variant="outline" className="glass-button">
                    Sifariş Ver
                  </Button>
                </Link>
              </HoverScale>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full flex items-center justify-center"
    >
      <div className="text-center glass p-12 max-w-md">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
        >
          <Package className="w-10 h-10 text-primary" />
        </motion.div>
        <h3 className="text-xl font-semibold mb-2">Məhsul Seçin</h3>
        <p className="text-muted-foreground">
          Soldakı siyahıdan məhsul seçərək ətraflı məlumat əldə edin.
        </p>
      </div>
    </motion.div>
  );
}
