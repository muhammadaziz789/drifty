import { Container } from "@mui/material";
import SEO from "components/SEO";

export default function Faq() {
  return (
    <>
      <SEO title="FAQs" />
      <Container>
        <div className="py-20">
          <h2>How Can I Check The Status Of My Order?</h2>
          Once you place your order you will receive a confirmation to your
          email and once the order is shipped you will receive a tracking number
          that you can use on our website. You can contact us directly at *store
          email* if you need any further assistance.
          <h2> How Long Does Shipping Take?</h2>
          Please allow up to 72 hours for your order to process and to be
          shipped out. Our fulfillment centers are located around the world. For
          domestic orders in the United States, it will normally take about 2-3
          weeks. For International orders, please allow up to 4-5 weeks. Our
          prices are significantly lower than our competitors since we have
          relationships with our suppliers to ship directly to the customer! The
          downside to this is slightly longer shipping times, though we work our
          hardest to get your order shipped as fast as possible.
          <h2> Do You Ship Internationally?</h2>
          Yes! We ship to most major countries around the world.
          <h2>
            <h2>How can I track my order?</h2>
          </h2>
          After your order has been shipped out and the tracking number has been
          sent to your email. Simply go to our website & click the track my
          order page. From there you can get live updates on your order.
          <h2>Can I cancel my order after I’ve already paid?</h2>
          After we’ve shipped your product out you can’t cancel your order but
          you once you receive it you can return it for a refund. Please view
          our full refund policy for more details.
          <h2> How can I contact you?</h2>
          Send us an email at *store email* and will get back to you as soon as
          possible! Thanks.
        </div>
      </Container>
    </>
  );
}
