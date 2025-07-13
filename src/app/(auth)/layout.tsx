import { Logo } from "@/components/common/logo";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4">
        <div className="w-full max-w-sm">
            <div className="flex justify-center mb-6">
                <Link href="/" className="flex items-center space-x-2">
                    <Logo className="h-8 w-8" />
                    <span className="text-2xl font-bold font-headline">Lumineux</span>
                </Link>
            </div>
            {children}
        </div>
    </div>
  );
}
