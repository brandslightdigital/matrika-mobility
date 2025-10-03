import { Link } from "react-router-dom";

export default function PrivacyTermsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Skip link */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-yellow-400 text-black px-3 py-2 rounded"
      >
        Skip to content
      </a>

      {/* Header */}
      <header className="bg-black text-yellow-400 mt-10 md:mt-20">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            Privacy Policy & Terms
          </h1>
          <div className="flex">
            <Link to="/">Home </Link> /{" "}
            <p className=" text-yellow-300">Privacy Policies</p>
          </div>
        </div>
      </header>

      {/* Main */}
      <main id="content" className="mx-auto max-w-5xl px-6 py-10">
        {/* Effective date card */}
        <div className="mb-8 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-neutral-600">
            Effective date:{" "}
            <span className="font-semibold text-neutral-900">31 July 2025</span>
          </p>
          <p className="text-sm text-neutral-600">Last updated: 31 July 2025</p>
        </div>

        <Section id="intro" title="Introduction">
          <p>
            This privacy policy sets out how <strong>Taxi Tribe</strong>{" "}
            uses and protects any information that you give when you use this
            website.
          </p>
          <p>
            We are committed to ensuring that your privacy is protected. Should
            we ask you to provide certain information by which you can be
            identified when using this website, then you can be assured that it
            will only be used in accordance with this privacy statement. Matrika
            Mobilities may change this policy from time to time by updating this
            page. You should check this page from time to time to ensure that
            you are happy with any changes.
          </p>
        </Section>

        <Section id="info" title="Information We Collect">
          <p>We may collect the following information:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Name and job title</li>
            <li>Contact information including email address</li>
            <li>
              Demographic information such as postcode, preferences and
              interests
            </li>
            <li>
              Other information relevant to customer surveys and/or offers
            </li>
          </ul>
          <p className="mt-4">
            In addition to any protected information or other information that
            you choose to submit to us, we collect certain information whenever
            you visit or interact with the services ("usage information"). This
            usage information may include the browser that you are using, the
            URL that referred you to our services, all of the areas within our
            services that you visit, and the time of day, among other
            information. In addition, we collect your device identifier for your
            device. A device identifier is a number that is automatically
            assigned to your device used to access the services, and our
            computers identify your device by its device identifier.
          </p>
          <p className="mt-4">
            In addition, tracking information is collected as you navigate
            through our services, including, but not limited to geographic
            areas. The driver’s mobile phone will send your GPS coordinates,
            during the ride, to our servers. Most GPS enabled mobile devices can
            define one’s location to within 50 feet.
          </p>
          <p className="mt-4">
            When you use any of our mobile applications, the mobile application
            may automatically collect and store some or all of the following
            information from your mobile device ("mobile device information"),
            in addition to the device information, including without limitation:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Your preferred language and country site (if applicable)</li>
            <li>The manufacturer and model of your mobile device</li>
            <li>Your mobile operating system</li>
            <li>The type of mobile internet browsers you are using</li>
            <li>Your geolocation</li>
            <li>
              Information about how you interact with the mobile application and
              any of our web sites to which the mobile application links, such
              as how many times you use a specific part of the mobile
              application over a given time period, the amount of time you spend
              using the mobile application, how often you use the mobile
              application, actions you take in the mobile application and how
              you engage with the mobile application
            </li>
            <li>
              Information to allow us to personalize the services and content
              available through the mobile application
            </li>
            <li>
              Data from SMS/text messages upon receiving device permissions for
              the purposes of (i) issuing and receiving one time passwords and
              other device verification, and (ii) automatically filling
              verification details during financial transactions, either through
              us or a third-party service provider, in accordance with
              applicable law. We do not share or transfer SMS/text message data
              to any third party other than as provided under this privacy
              policy.
            </li>
          </ul>
        </Section>

        <Section id="use" title="How We Use Information">
          <p>
            We require this information to understand your needs and provide you
            with a better service, and in particular for the following reasons:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Internal record keeping</li>
            <li>Improving our products and services</li>
            <li>
              Periodically sending promotional emails about new products,
              special offers or other information which we think you may find
              interesting using the email address which you have provided
            </li>
            <li>
              Contacting you for market research purposes by email, phone, fax
              or mail
            </li>
            <li>
              Customizing the website and applications according to your
              interests
            </li>
          </ul>
        </Section>

        <Section id="security" title="Security">
          <p>
            We are committed to ensuring that your information is secure. In
            order to prevent unauthorized access or disclosure we have put in
            place suitable physical, electronic and managerial procedures to
            safeguard and secure the information we collect online.
          </p>
        </Section>

        <Section id="cookies" title="How We Use Cookies">
          <p>
            A cookie is a small file which asks permission to be placed on your
            computer's hard drive. Once you agree, the file is added and the
            cookie helps analyze web traffic or lets you know when you visit a
            particular site. Cookies allow web applications to respond to you as
            an individual.
          </p>
          <p className="mt-4">
            We use traffic log cookies to identify which pages are being used.
            This helps us analyze data about webpage traffic and improve our
            website in order to tailor it to customer needs. We only use this
            information for statistical analysis purposes and then the data is
            removed from the system.
          </p>
          <p className="mt-4">
            Overall, cookies help us provide you with a better website by
            enabling us to monitor which pages you find useful and which you do
            not. A cookie in no way gives us access to your computer or any
            information about you, other than the data you choose to share with
            us. You can choose to accept or decline cookies. Most web browsers
            automatically accept cookies, but you can usually modify your
            browser setting to decline cookies if you prefer. This may prevent
            you from taking full advantage of the website.
          </p>
        </Section>

        <Section id="links" title="Links to Other Websites">
          <p>
            Our website may contain links to other websites of interest.
            However, once you have used these links to leave our site, you
            should note that we do not have any control over that other website.
            Therefore, we cannot be responsible for the protection and privacy
            of any information which you provide whilst visiting such sites and
            such sites are not governed by this privacy statement. You should
            exercise caution and look at the privacy statement applicable to the
            website in question.
          </p>
        </Section>

        <Section id="sharing" title="Sharing Information">
          <p>
            We will not sell, distribute or lease your personal information to
            third parties unless we have your permission or are required by law
            to do so. We may use your personal information to send you
            promotional information about third parties which we think you may
            find interesting if you tell us that you wish this to happen.
          </p>
        </Section>

        <Section id="contact" title="Contacting Us">
          <p>
            If there are any questions regarding this privacy policy you may
            contact us using the information on the{" "}
            <a
              className="text-yellow-700 underline hover:text-yellow-600"
              href="/contact"
            >
              Contact Us
            </a>{" "}
            page.
          </p>
        </Section>

        {/* Back to top */}
        <div className="mt-12">
          <a
            href="#content"
            className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-yellow-300 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 01.75.75v13.19l4.22-4.22a.75.75 0 111.06 1.06l-5.5 5.5a.75.75 0 01-1.06 0l-5.5-5.5a.75.75 0 111.06-1.06l4.22 4.22V4.5A.75.75 0 0112 3.75z"
                clipRule="evenodd"
              />
            </svg>
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
