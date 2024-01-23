import CheckoutForm from "@/components/checkout/checkout-form";
import CheckoutSummary from "@/components/checkout/checkout-summary";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Checkout",
  description: "Checkout page for the store.",

  path: "/checkout",
});

export default function Checkout() {
  return (
    <main className="md:max-h-screen w-full grid md:grid-cols-[1fr,1px,1fr] gap-x-4 gap-y-10 mt-20 mb-40">
      <CheckoutForm />

      <div className="w-[1px] h-3/4 bg-white/10 hidden md:block" />

      <CheckoutSummary />
    </main>
  );
}
