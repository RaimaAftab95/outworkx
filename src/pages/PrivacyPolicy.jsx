import React from 'react';
import Footer from '../components/shared/Footer';
import Heading from '../components/shared/Heading';

const PrivacyPolicy = () => {
  // 1 Scope of Policy
  const scopeOfPolicy = () => {
    return (
      <div>
        <h2 className="mt-5">1. Scope of this Policy</h2>
        <p>
          This Privacy Policy applies to information we collect through the
          following sources:
        </p>
        <ol className="pl-4">
          <li>
            <strong className="mt-5 text-black">1.1 Outworkx Website:</strong>{' '}
            Information collected when you visit our website,{' '}
            <a className="text-blue-500" href="https://www.outworkx.com">
              www.outworkx.com
            </a>
          </li>
          <li>
            <strong className="mt-5 text-black">
              1.2 Electronic Communications:
            </strong>{' '}
            Information collected through email, text, and other electronic
            messages between you and Outworkx, including those related to online
            bookings and subscriptions.
          </li>
          <li>
            <strong className="mt-5 text-black">
              1.3 Mobile and Desktop Applications:
            </strong>{' '}
            Information collected through mobile and desktop applications you
            may download from our Website, which provide dedicated
            non-browser-based interaction between you and Outworkx.
          </li>
          <li>
            <strong className="mt-5 text-black">
              1.4 Online Transactions:
            </strong>{' '}
            Information collected during online bookings and subscriptions on
            our Website.
          </li>
          <li>
            <strong className="mt-5 text-black">
              1.5 Offline Interactions:
            </strong>{' '}
            Information collected through offline interactions with Outworkx,
            including hand payments made in person (no additional charges apply
            for this offline payment method).
          </li>
          <li>
            <strong className="mt-5 text-black">
              1.6 Third-Party Interactions:
            </strong>{' '}
            Information collected when you interact with our advertising and
            applications on third-party websites and services, if those
            applications or advertising include links to this policy.
          </li>
        </ol>
      </div>
    );
  };

  // 2 Privacy Agreement
  const privacyAgreement = () => {
    return (
      <div>
        <h2 className="mt-5">2. Your Agreement</h2>
        <p>
          By accessing or using Outworkx, including our Website, online booking
          and subscription services, and offline interactions, you agree to this
          Privacy Policy. This policy may change from time to time. Your
          continued use of Outworkx after we make changes is deemed to be
          acceptance of those changes, so please check the policy periodically
          for updates.
        </p>
      </div>
    );
  };

  // 3 Additional Terms
  const additionalTerms = () => {
    return (
      <div>
        <h2 className="mt-5">3. Additional Terms</h2>
        <p>
          This Privacy Policy incorporates by reference the following additional
          terms of use, which also apply to your use of Outworkx:{' '}
          <a className="text-blue-500" href="[Terms of Use/Service Link]">
            Terms of Use/Service Link
          </a>
          .
        </p>
      </div>
    );
  };

  // 4 Information Collection
  const informationCollection = () => {
    return (
      <div>
        <h2 className="mt-5">
          4. Information We Collect and How We Collect It
        </h2>
        <h3 className="pl-4">4.1. Types of Information Collected</h3>
        <p className="pl-4">
          We collect several types of information from and about users of our
          Website and services, including:
        </p>
        <ol className="pl-6">
          <li>
            <strong className="text-black">4.1.1. Personal Information:</strong>{' '}
            Information that can be used to identify you as an individual, such
            as name, postal address, email address, passport number (if
            applicable for our services), or telephone number.
          </li>
          <li>
            <strong className="text-black">
              4.1.2. De-identified Information:
            </strong>{' '}
            Information about you that, by itself, does not identify you as an
            individual.
          </li>
          <li>
            <strong className="mt-2 text-black">
              4.1.3. Usage Information:
            </strong>{' '}
            Information about your use of our facilities, services, and your
            preferences related to them (including online bookings,
            subscriptions, and offline interactions).
          </li>
          <li>
            <strong className="text-black">
              4.1.4. Connection and Device Information:
            </strong>{' '}
            Information about your internet connection, the equipment you use to
            access our Website or services, and usage details.
          </li>
        </ol>
        <h3 className="mt-3 pl-4">4.2. Methods of Information Collection</h3>
        <p className="pl-4">
          We collect information through the following methods:
        </p>
        <ol className="pl-6">
          <li>
            <strong className="text-black">4.2.1. Direct Collection:</strong> We
            collect information directly from you when you provide it to us,
            such as when you:
            <ul className="list-disc pl-8">
              <li>Register for an account</li>
              <li>Make an online booking</li>
              <li>Subscribe to a service</li>
              <li>Contact us through a form</li>
              <li>Participate in a survey</li>
              <li>Make an offline payment (in person)</li>
            </ul>
          </li>
          <li>
            <strong className="text-black">4.2.2. Automatic Collection:</strong>{' '}
            We collect information automatically as you navigate through our
            Website or interact with our services. Information collected
            automatically may include:
            <ul className="list-disc pl-8">
              <li>Usage details</li>
              <li>IP addresses</li>
              <li>
                Information collected through cookies, web beacons, and other
                tracking technologies
              </li>
            </ul>
          </li>
          <li>
            <strong className="text-black">4.2.3. Third-Party Sources:</strong>{' '}
            We may collect information from third parties, such as our business
            partners, in accordance with their privacy policies and with your
            consent (where applicable).
          </li>
        </ol>
      </div>
    );
  };

  // 5 Provided Information
  const informationYouProvide = () => {
    return (
      <div>
        <h2>Information You Provide Us</h2>
        <p>
          We collect information directly from you when you interact with
          Outworkx through various channels, including our Website and offline
          interactions. Here are the specific details you may provide:
        </p>
        <h3>5.1. Online Interactions:</h3>
        <ol>
          <li>
            <strong>5.1.1. Registration and Account Creation:</strong> When you
            register for an account on our Website, you may provide information
            such as name, email address, and possibly additional details
            depending on the service.
          </li>
          <li>
            <strong>5.1.2. Subscriptions:</strong> When subscribing to a
            service, you may provide information related to the subscription,
            such as your plan type and start date.
          </li>
          <li>
            <strong>5.1.3. Forms:</strong> Our Website offers various forms to
            collect information. You may choose to submit information through
            these forms for purposes including:
            <ul>
              <li>Signing up for our newsletter</li>
              <li>Contacting us through the "Contact Us" form</li>
              <li>Submitting a support request through the "We Care" form</li>
              <li>Applying for a job through the careers portal (TALEO)</li>
              <li>Requesting further services through dedicated forms</li>
            </ul>
          </li>
          <li>
            <strong>5.1.4. Contests and Promotions:</strong> If you participate
            in any contests or promotions offered by us, you may provide
            information necessary for entry.
          </li>
          <li>
            <strong>5.1.5. Problem Reporting:</strong> When you report an issue
            with our Website, you may provide details about the problem to
            assist us in resolving it.
          </li>
          <li>
            <strong>5.1.6. Transactions:</strong> When you make a purchase or
            fulfill a subscription online, you may provide financial information
            for payment processing. Outworkx offers both online and offline
            payment options, with no additional charges for offline payments
            made in person.
          </li>
          <li>
            <strong>5.1.7. Search Queries:</strong> We may collect information
            about your search queries on the Website to understand your
            interests and improve search functionality.
          </li>
        </ol>
        <h3>5.2. Offline Interactions:</h3>
        <p>
          During offline interactions with Outworkx, you may provide some of the
          information mentioned above, such as your name and contact details,
          when making an in-person payment (with no additional charges) or
          requesting a service.
        </p>
      </div>
    );
  };

  // 6 Information collected automatically
  const informationCollectedAutomatically = () => {
    return (
      <div>
        <h2>Information Collected Automatically</h2>
        <p>
          We may automatically collect certain information about your equipment,
          browsing actions, and patterns as you navigate through and interact
          with our Website and services. This information is used to improve our
          services and deliver a better user experience.
        </p>
        <h3>6.1. Usage Details</h3>
        <p>
          This includes information about your visits to our Website and online
          interactions with our services, such as:
        </p>
        <ul>
          <li>Traffic data (e.g., pages visited, time spent on pages)</li>
          <li>Location data (if enabled by your device)</li>
          <li>Logs and other communication data</li>
          <li>Resources you access and use on the Website</li>
          <li>Online booking details (e.g., service booked, date, time)</li>
          <li>Subscription details (e.g., plan type, usage patterns)</li>
          <li>
            Interactions during offline transactions (e.g., service requested
            during in-person payment)
          </li>
        </ul>
        <h3>6.2. Device and Connection Information</h3>
        <p>
          We collect information about your computer and internet connection,
          including:
        </p>
        <ul>
          <li>IP address</li>
          <li>Operating system</li>
          <li>Browser type</li>
        </ul>
        <h3>6.3. Cookies</h3>
        <h4>6.3.1. Browser Cookies</h4>
        <p>
          Cookies are small files placed on your device's hard drive when you
          visit our Website. You can choose to refuse browser cookies by
          activating the appropriate setting on your browser. However, this may
          limit your access to certain features of our Website.
        </p>
        <h4>6.3.2. Flash Cookies</h4>
        <p>
          Certain features of our Website may use local stored objects (or Flash
          cookies) to collect and store information about your preferences and
          navigation history. Flash cookies are not managed by the same browser
          settings used for browser cookies. Please refer to your browser or
          device documentation for information on managing Flash cookies.
        </p>
        <h3>6.4. Web Beacons</h3>
        <p>
          Our Website and emails may contain small electronic files known as web
          beacons (also referred to as clear gifs, pixel tags, and single-pixel
          gifs). These allow us to:
        </p>
        <ul>
          <li>Count users who visit certain pages or open emails</li>
          <li>
            Compile website statistics (e.g., popularity of content, system and
            server integrity)
          </li>
        </ul>
        <p>
          We will use the information collected through these technologies in
          accordance with this Privacy Policy.
        </p>
      </div>
    );
  };

  // 7 How we use your Information
  const howWeUseYourInformation = () => {
    return (
      <div>
        <h2>How We Use Your Information</h2>
        <p>
          We use the information we collect about you for a variety of purposes
          to improve our services and deliver a better user experience. This
          includes both information you provide directly and information
          collected automatically.
        </p>
        <h3>7.1. Purposes of Information Use</h3>
        <h4>7.1.1. Website and Service Improvement</h4>
        <p>
          We use statistical data collected automatically to improve our Website
          and services. This allows us to:
        </p>
        <ul>
          <li>Estimate audience size and usage patterns</li>
          <li>Store information about your preferences for personalization</li>
          <li>Speed up your searches</li>
          <li>Recognize you when you return</li>
        </ul>
        <h4>7.1.2. Fulfilling Your Requests</h4>
        <p>
          We use the information you provide to present our Website and its
          contents to you, and to provide you with information or services you
          request, including:
        </p>
        <ul>
          <li>Online booking fulfillment</li>
          <li>Subscription management</li>
          <li>Processing offline interactions (e.g., in-person payments)</li>
        </ul>
        <h4>7.1.3. Communication and Notices</h4>
        <p>
          We may use your information to communicate with you and send notices,
          including:
        </p>
        <ul>
          <li>Expiration notices (for subscriptions)</li>
          <li>Billing and renewal notices</li>
          <li>Updates about our Website, projects, or services</li>
        </ul>
        <h4>7.1.4. Contractual Purposes</h4>
        <p>
          We use your information to carry out our obligations and enforce our
          rights arising from any contracts you enter with us, including billing
          and collection.
        </p>
        <h4>7.1.5. User Participation</h4>
        <p>
          We may use your information to allow you to participate in interactive
          features on our Website.
        </p>
        <h4>7.1.6. Additional Purposes with Consent</h4>
        <p>We may use your information for other purposes with your consent.</p>
        <h4>7.1.7. Marketing Communications</h4>
        <p>
          We may use your information to contact you about our own and
          third-party projects and services that may be of interest to you. You
          can opt out of receiving marketing communications from us by
          contacting us at{' '}
          <a href="mailto:hello@outworkx.com">hello@outworkx.com</a>.
        </p>
      </div>
    );
  };

  // 8 Disclosure of your Information
  const disclosureOfYourInformation = () => {
    return (
      <div>
        <h2>Disclosure of Your Information</h2>
        <p>
          We may disclose certain information we collect in accordance with this
          Privacy Policy. This includes both personal and non-personal
          information.
        </p>
        <h3>8.1. Disclosure of Aggregated and De-Identified Information</h3>
        <p>
          We may disclose aggregated information about our users, and
          information that does not identify any individual, without
          restriction. We may disclose this information to:
        </p>
        <ul>
          <li>Our subsidiaries and affiliates</li>
          <li>
            Contractors, service providers, and other third parties we use to
            support our business
          </li>
          <li>
            A buyer or other successor in the event of a merger, divestiture,
            restructuring, reorganization, dissolution, or other sale or
            transfer of some or all of our assets
          </li>
          <li>To fulfill the purpose for which you provide the information</li>
          <li>
            For any other purpose disclosed by us when you provide the
            information
          </li>
        </ul>
        <h3>8.2. Disclosure of Personal Information</h3>
        <p>
          We will only disclose your personal information in the following
          circumstances:
        </p>
        <h4>8.2.1. Legally Required Disclosures</h4>
        <p>
          We may disclose your personal information to comply with any court
          order, law, or legal process, including responding to any government
          or regulatory request.
        </p>
        <h4>8.2.2. Enforcing Agreements</h4>
        <p>
          We may disclose your personal information to enforce or apply our
          terms of use, terms of sale, and other agreements, including for
          billing and collection purposes.
        </p>
        <h4>8.2.3. Protecting Our Interests</h4>
        <p>
          We may disclose your personal information if we believe disclosure is
          necessary or appropriate to protect the rights, property, or safety of
          our company, our customers, or others. This includes exchanging
          information with other companies and organizations for the purposes of
          fraud protection and credit risk reduction.
        </p>
        <h4>8.2.4. With Your Consent</h4>
        <p>We may disclose your personal information with your consent.</p>
        <p>
          We will use commercially reasonable efforts to ensure that any third
          party to whom we disclose your personal information is obligated to
          use your personal information in compliance with this Privacy Policy.
        </p>
      </div>
    );
  };

  // 9 Choices about Information
  const choicesAboutInformation = () => {
    return (
      <div>
        <h2>Choices About How We Use and Disclose Your Information</h2>
        <p>
          We are committed to providing you with choices regarding the personal
          information you provide to us. We offer the following controls over
          your information:
        </p>
        <h3>9.1. Tracking Technologies and Advertising</h3>
        <p>
          You can set your browser to refuse all or some browser cookies, or to
          alert you when cookies are being sent. If you disable or refuse
          cookies, please note that some parts of our Website or services may
          then be inaccessible or not function properly.
        </p>
        <h3>9.2. Disclosure of Your Information for Third-Party Advertising</h3>
        <p>
          If you do not want us to share your personal information with
          unaffiliated or non-agent third parties for promotional purposes, you
          can opt-out by contacting us at{' '}
          <a href="mailto:hello@outworkx.com">hello@outworkx.com</a>. You can
          submit your request by email or through any other method we provide
          for offline communication (e.g., in-person during a payment or service
          request).
        </p>
        <h3>9.3. Promotional Offers from Outworkx</h3>
        <p>
          If you do not wish to have your contact information used by Outworkx
          to promote our own or third-party projects or services, you can
          opt-out by contacting us at{' '}
          <a href="mailto:hello@outworkx.com">hello@outworkx.com</a>. You can
          submit your request by email or through any other method we provide
          for offline communication (e.g., in-person during a payment or service
          request).
        </p>
      </div>
    );
  };

  // 10 Accessing and Correcting Information
  const accessingAndCorrectingInformation = () => {
    return (
      <div>
        <h2>Accessing and Correcting Your Information</h2>
        <p>
          We understand the importance of access and control over your personal
          information. This section outlines your rights related to your data.
        </p>
        <h3>10.1. Accessing Your Information</h3>
        <p>
          You have the right to access your personal information that we hold.
          You can request a copy of your information by contacting us at{' '}
          <a href="mailto:hello@outworkx.com">hello@outworkx.com</a>. We will
          respond to your request within a reasonable timeframe.
        </p>
        <h3>10.2. Correcting Your Information</h3>
        <p>
          You have the right to correct any inaccurate or incomplete personal
          information we hold about you. You can update your information through
          your account settings (if applicable) or by contacting us at{' '}
          <a href="mailto:hello@outworkx.com">hello@outworkx.com</a>. We will
          take reasonable steps to update your information promptly.
        </p>
        <h3>10.3. Data Erasure</h3>
        <p>
          You have the right to request that your personal information be
          deleted. You can submit a data erasure request by emailing{' '}
          <a href="mailto:hello@outworkx.com">hello@outworkx.com</a>. Please
          note the following important information regarding data erasure
          requests:
        </p>
        <ul>
          <li>
            We may retain your personal information as necessary for our
            legitimate business interests, such as fraud prevention, legal
            compliance, and ensuring the safety of our platform.
          </li>
          <li>
            Information you have shared publicly on our services (e.g., reviews,
            forum posts) may remain visible even after your account is deleted,
            though attribution to you will be removed.
          </li>
          <li>
            Some residual copies of your information may remain in our backup
            systems for a limited period due to technical limitations. These
            copies will be disassociated from personal identifiers.
          </li>
          <li>
            We will respond to your data erasure request within a reasonable
            timeframe.
          </li>
        </ul>
      </div>
    );
  };

  // 11 Data Security
  const dataSecurity = () => {
    return (
      <div>
        <h2>Data Security</h2>
        <p>
          We take the security of your information seriously and are committed
          to protecting your personal information from unauthorized access, use,
          disclosure, alteration, or destruction.
        </p>
        <h3>11.1. Security Measures</h3>
        <p>
          We have implemented various security measures designed to safeguard
          your information, including:
        </p>
        <ul>
          <li>
            Secure storage of your information on our servers behind firewalls
          </li>
          <li>
            Encryption of payment transactions using SSL technology (or
            equivalent)
          </li>
        </ul>
        <h3>11.2. Your Responsibilities</h3>
        <p>
          You also play a role in protecting your information. Here are some
          things you can do:
        </p>
        <ul>
          <li>
            Maintain the confidentiality of any password you use to access our
            services (online or offline)
          </li>
          <li>Avoid sharing your password with anyone</li>
        </ul>
        <h3>11.3. Limitations of Security</h3>
        <p>
          Unfortunately, no data transmission over the internet or electronic
          storage method is guaranteed to be 100% secure. While we strive to use
          commercially reasonable means to protect your information, we cannot
          guarantee the security of any information you transmit to us through
          our online services or offline interactions. You acknowledge and
          accept this inherent security risk.
        </p>
        <h3>11.4. Disclaimer of Liability</h3>
        <p>
          We are not responsible for any circumvention of any privacy settings
          or security measures we implement on our Website or through our
          offline interactions.
        </p>
      </div>
    );
  };

  // 12 Changes to Privacy Policy
  const changesToPrivacyPolicy = () => {
    return (
      <div>
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We reserve the right to update this Privacy Policy from time to time.
          We will post any changes we make to this Privacy Policy on our Website
          and notify you of any material changes by email (sent to the email
          address specified in your account) or by means of a notice on our
          Website prior to the change becoming effective.
        </p>
        <h3>12.1. Your Responsibility</h3>
        <p>
          It is your responsibility to periodically visit our Website and review
          this Privacy Policy to stay informed of any updates. You are bound by
          any revisions to this Privacy Policy upon our posting on our Website.
          By continuing to use our Website or services after any such changes,
          you will be deemed to have agreed to such changes.
        </p>
      </div>
    );
  };
  return (
    <>
      <Heading>Outworkx Privacy Policy</Heading>
      <h2 className="mt-3">Effective Date</h2>
      <p className="text-base">
        <strong>Outworkx </strong> ("company," "we," or "us") respects your
        privacy and is committed to protecting it through our compliance with
        this policy. This Privacy Policy describes the types of information we
        may collect from you or that you may provide when you interact with
        Outworkx, and our practices for collecting, using, maintaining,
        protecting, and disclosing that information.
      </p>
      {scopeOfPolicy()}
      {privacyAgreement()}
      {additionalTerms()}
      {informationCollection()}
      {informationYouProvide()}
      {informationCollectedAutomatically()}
      {howWeUseYourInformation()}
      {disclosureOfYourInformation()}
      {choicesAboutInformation()}
      {accessingAndCorrectingInformation()}
      {dataSecurity()}
      {changesToPrivacyPolicy()}
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
