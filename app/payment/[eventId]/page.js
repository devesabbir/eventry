import dynamic from "next/dynamic";

const NoSSRPaymentForm = dynamic(
  () => import("@/app/components/payment/PaymentForm"),
  {
    ssr: false,
  }
);

function PaymentPage({ params: { eventId } }) {
  return (
    <section className="container">
      <div className="bg-[#242526] p-6 rounded-lg max-w-xl mx-auto my-12">
        <h2 className="font-bold text-xl mb-8">Payment Details</h2>
        <NoSSRPaymentForm eventId={eventId} />
      </div>
    </section>
  );
}

export default PaymentPage;
