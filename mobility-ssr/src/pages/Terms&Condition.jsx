import { Link } from "react-router-dom";

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="bg-black text-yellow-400 mt-20">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <h1 className="text-3xl md:text-4xl font-bold">Terms & Conditions</h1>
          <div className="flex">
            <Link to="/">Home </Link> /{" "}
            <p className=" text-yellow-300">Term & Conditions</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <Section id="intro" title="Introduction">
          <p>
            Welcome to our website. If you continue to browse and use this
            website, you are agreeing to comply with and be bound by the
            following terms and conditions of use, which together with our
            privacy policy govern Taxi Tribe relationship with you in relation to
            this website. If you disagree with any part of these terms and
            conditions, please do not use our website.
          </p>
        </Section>

        <Section id="ownership" title="Ownership">
          <p>
            The term <strong>"Taxi"</strong> or <strong>"us"</strong> or{" "}
            <strong>"we"</strong> refers to the TAXI TRIBE PRIVATE
            LIMITED whose registered office is{" "}
            <em>F 61 Jawahar Park Khanpur Deoli Road, New Delhi 10062</em>. The
            term <strong>"you"</strong> refers to the user or viewer of our
            website.
          </p>
        </Section>

        <Section id="terms" title="Terms of Use">
          <ul className="list-disc ml-6 space-y-2">
            <li>
              The content of the pages of this website is for your general
              information and use only. It is subject to change without notice.
            </li>
            <li>
              This website uses cookies to monitor browsing preferences. If you
              allow cookies, the following personal information may be stored by
              us for use by third parties: IP Address, Location.
            </li>
            <li>
              Neither we nor any third parties provide any warranty or guarantee
              as to the accuracy, timeliness, performance, completeness or
              suitability of the information and materials found or offered on
              this website for any purpose. You acknowledge that such
              information and materials may contain inaccuracies or errors, and
              we expressly exclude liability for any such inaccuracies or errors
              to the fullest extent permitted by law.
            </li>
            <li>
              Your use of any information or materials on this website is
              entirely at your own risk, for which we shall not be liable. It
              shall be your responsibility to ensure that any products, services
              or information available through this website meet your
              requirements.
            </li>
            <li>
              This website contains material which is owned by or licensed to
              us. This material includes, but is not limited to, the design,
              layout, look, appearance and graphics. Reproduction is prohibited
              other than in accordance with the copyright notice, which forms
              part of these terms and conditions.
            </li>
            <li>
              All trademarks reproduced in this website which are not the
              property of, or licensed to, the operator are acknowledged on the
              website.
            </li>
            <li>
              Unauthorized use of this website may give rise to a claim for
              damages and/or be a criminal offence.
            </li>
            <li>
              From time to time this website may also include links to other
              websites. These are provided for your convenience to provide
              further information. They do not signify that we endorse the
              website(s). We have no responsibility for the content of the
              linked website(s).
            </li>
            <li>
              Your use of this website and any dispute arising out of such use
              is subject to the laws of India.
            </li>
            <li>
              Specific offers might have additional Terms & Conditions which you
              must comply with if you choose to avail that offer.
            </li>
          </ul>
        </Section>

        <Section id="cancellation" title="Cancellation and Returns">
          <p>
            You may cancel the booking up to{" "}
            <strong>2 hours before the journey</strong> without any cancellation
            charges for all services. However, last-minute cancellations might
            cause a loss to the driver. Therefore, we recommend canceling as
            soon as you have learned of the change in your travel plans.
          </p>
          <p className="mt-2">
            You can cancel your booking by sending an email to{" "}
            <a
              href="mailto:bookings@Taximobilties.com"
              className="text-yellow-700 underline hover:text-yellow-600"
            >
              bookings@Taximobilties.com
            </a>{" "}
            or by calling our helpline.
          </p>
        </Section>

        <Section id="refunds" title="Refunds">
          <p>
            If you are eligible for refunds based on the “Cancellation and
            Returns” policy above, then the refund will be remitted back to you
            in <strong>5–7 working days</strong>. In case of any issues, write
            to us at{" "}
            <a
              href="mailto:bookings@Taximobilties.com"
              className="text-yellow-700 underline hover:text-yellow-600"
            >
              bookings@Taximobilties.com
            </a>{" "}
            or call us at <strong>7011438890</strong>.
          </p>
        </Section>

        <div className="mt-12">
          <a
            href="#intro"
            className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-yellow-300 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Back to top
          </a>
        </div>
      </main>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="mb-10 scroll-mt-24">
      <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-black">
        <span className="rounded bg-yellow-300 px-2 py-1">{title}</span>
      </h2>
      <div className="mt-4 space-y-3 text-neutral-800 leading-7">
        {children}
      </div>
    </section>
  );
}
