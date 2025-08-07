import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function RGBButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative group  hover:scale-105 transition-transform duration-300">
      <div className="absolute -inset-1 rounded-2xl bg-[conic-gradient(from_0deg,red,orange,yellow,lime,cyan,blue,violet,red)] blur-sm animate-spinSlow opacity-80 group-hover:blur-md group-hover:opacity-100 transition-all duration-700" />

      <Button
        {...props}
        variant={"custom"}
        className={cn(
          "relative z-10 rounded-2xl px-6 py-3 font-bold dark:text-white !text-white hover:cursor-pointer",
          "dark:bg-black bg-white border-2 border-transparent hover:shadow-xl transition-all duration-300",
          "shadow-[0_0_15px_rgba(255,0,255,0.4)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] hover:bg-white",
          className
        )}
      >
        {children}
      </Button>
    </div>
  );
}
