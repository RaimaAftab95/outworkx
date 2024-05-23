import React from 'react';
import Footer from '../components/shared/Footer';
import Heading from '../components/shared/Heading';

const TermsAndCondition = () => {
  // 1 Acceptance of terms
  const acceptanceOfTerms = () => {
    return (
      <div>
        <h2>Acceptance of Terms</h2>
        <h3>1.1. Agreement to Terms</h3>
        <p>
          By accessing, using, or interacting with the outworkx platform
          (including the website and mobile application), Venues (cafes, hotels,
          coworking spaces), or clicking any button indicating your consent, you
          acknowledge and agree to be bound by these Terms of Use ("Terms").
          These Terms have the same legal effect as a written agreement. If you
          do not agree to these Terms, you are prohibited from using the
          outworkx platform or Venues.
        </p>
        <h3>1.2. Amendment of Terms</h3>
        <p>
          outworkx reserves the right to modify these Terms at any time. Unless
          otherwise specified, all amendments will be effective upon posting the
          updated Terms on the platform. Your continued use of the platform or
          Venues following such posting constitutes your acceptance of the
          Terms, as amended.
        </p>
        <h3>1.3. Additional Terms</h3>
        <p>
          In addition to these Terms, certain membership plans, offers,
          products, services, features, or elements may be subject to
          supplemental terms, conditions, guidelines, or rules. These additional
          terms may be posted, communicated, or modified by outworkx or
          applicable third parties at any time. By using any such plan, offer,
          product, service, feature, or element, you agree to be bound by the
          corresponding additional terms, which are hereby incorporated by
          reference into these Terms. If any conflict arises between these Terms
          and the additional terms, these Terms shall prevail.
        </p>
        <h3>1.4. Incorporation of Privacy Policy</h3>
        <p>
          The outworkx Privacy Policy is incorporated by reference into these
          Terms. You can access the Privacy Policy at{' '}
          <a
            href="https://outworkssolutions.com/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://outworkssolutions.com/privacy-policy/
          </a>
          .
        </p>
        <h3>1.5. Additional References</h3>
        <p>
          These Terms reference the following additional documents, which also
          govern your use of the outworkx platform:
        </p>
        <ul>
          <li>
            Privacy Policy:{' '}
            <a
              href="https://outworkssolutions.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://outworkssolutions.com/privacy-policy/
            </a>
          </li>
          <li>
            Cookie Notice: (to be provided by outworkx - outlines information
            about cookies used on the platform)
          </li>
        </ul>
      </div>
    );
  };

  // 2 Outworkx Platform
  const outworkxPlatform = () => {
    return (
      <div>
        <h2>Outworkx Platform</h2>

        <h3>2.1. Access and Use</h3>

        <h4>2.1.1. Grant of Access</h4>
        <p>
          outworkx hereby grants you a non-exclusive, revocable, limited license
          to access and use the outworkx platform, mobile application (such as
          for iPhone or Android), content, cafes, hotels, and coworking spaces
          made available through outworkx (collectively known as "Listings" or
          "Venues") solely for your personal, non-commercial use and in
          accordance with these Terms.
        </p>

        <h4>2.1.2. Third-Party Venues</h4>
        <p>
          You acknowledge and agree that outworkx is a platform that enables
          users to access, book, reserve, and work from a network of cafes,
          hotels, and coworking spaces operated by independent third parties
          ("Venues"). outworkx itself does not own, operate, or control any of
          the Venues listed on the Platform.
        </p>

        <h4>2.1.3. Online and Offline Access</h4>
        <p>
          These Terms govern your access to and use of the Platform, Venues, and
          any related services, both online and offline. outworkx may also
          provide offline access to certain functionalities, and such access
          will be subject to any additional terms and conditions outlined in the
          provided offline membership materials.
        </p>

        <h3>2.2. Membership Options</h3>

        <h4>2.2.1. Subscription Plans</h4>
        <p>
          outworkx offers various subscription plans that allow you to access
          Venues through a set number of check-ins or credits allocated per
          subscription cycle.
        </p>

        <h4>2.2.2. Promotional Plans</h4>
        <p>
          outworkx may offer limited-time promotional plans with specific terms
          and conditions that will be disclosed at the time of the offer.
        </p>

        <h4>2.2.3. Non-Membership Purchases</h4>
        <p>
          In addition to subscriptions, outworkx may allow you to purchase
          access to specific Venues for a one-time fee or other applicable
          charges, without requiring a subscription.
        </p>

        <h4>2.2.4. Modification of Options</h4>
        <p>
          outworkx reserves the right to modify, terminate, or amend the offered
          membership plans, promotional plans, and non-membership purchase
          options at any time in its sole discretion.
        </p>

        <h4>2.2.5. Non-Subscriber Access</h4>
        <p>
          outworkx may, at its discretion, permit non-subscribers to access
          certain Venues, content, or features for a fee or at no cost. outworkx
          makes no guarantees regarding the quantity, availability, type, or
          frequency of such access, and reserves the right to modify,
          discontinue, remove, or suspend such access at any time and for any
          reason.
        </p>

        <h3>2.3. Venue Availability</h3>

        <h4>2.3.1. Subscription Package</h4>
        <p>
          The number and type of check-ins permitted during a subscription cycle
          will depend on the specific subscription plan you have purchased.
        </p>

        <h4>2.3.2. Credit System</h4>
        <p>
          Some subscription plans may utilize a credit system for booking
          Venues. The number of credits you receive per subscription cycle,
          plan, geographic location, or otherwise may be modified by outworkx at
          its discretion.
        </p>

        <h4>2.3.3. Right to Modify Availability</h4>
        <p>outworkx reserves the right to change the following at any time:</p>
        <ul>
          <li>The total number of Venues available on the Platform.</li>
          <li>The number of credits included in each subscription plan.</li>
          <li>The number of reservations a user can make.</li>
          <li>
            The number of Venues a user can visit within a given timeframe.
          </li>
        </ul>

        <h4>2.3.4. Availability Disclaimer</h4>
        <p>
          outworkx cannot guarantee the availability of specific Venues,
          locations, amenities, services, experiences, or other features.
          Availability is subject to change at any time, including during your
          active subscription cycle.
        </p>

        <h4>2.3.5. Allocation and Availability</h4>
        <p>
          outworkx, in its sole discretion, determines the type, quantity,
          credits, allocation, and availability of Venues and other offerings on
          the Platform. outworkx employs various methods to release, promote,
          and make spots and inventory available, and this process is ongoing
          and subject to change.
        </p>

        <h3>2.4. Non-Subscription Purchases</h3>

        <h4>2.4.1. In addition to subscriptions</h4>
        <p>
          outworkx may allow you to purchase specific products directly through
          the Platform. By making such a purchase, you acknowledge and agree
          that these Terms apply to the purchase, and you will be responsible
          for paying the applicable fees, which may be subject to change at any
          time.
        </p>

        <h4>2.4.2. Co-Memberships</h4>
        <p>
          outworkx may offer co-membership options that grant you access to both
          outworkx and a membership provided by a third-party Venue (e.g., a
          coworking space).
        </p>

        <h4>2.4.3. Co-Membership Terms</h4>
        <p>
          If you choose a co-membership, you will be subject to these Terms, any
          additional terms applicable to the co-membership itself, and the terms
          and conditions of the specific Venue Membership.
        </p>

        <h3>2.5. Third-Party Venue Disclaimer</h3>

        <h4>2.5.1. Third-Party Venue Disclaimer</h4>
        <p>
          outworkx expressly disclaims any responsibility or liability for the
          Venue Membership provided by the third-party Venue. The Venue
          Membership is entirely provided by the applicable Venue, and outworkx
          has no ownership, operational, or control over it.
        </p>

        <h3>2.6. outworkx Account</h3>

        <h4>2.6.1. Personal Use Only</h4>
        <p>
          Your outworkx account is for your personal use only. You agree not to
          create multiple accounts or share your account login credentials with
          any third party.
        </p>

        <h4>2.6.2. Termination for Multiple Accounts</h4>
        <p>
          outworkx reserves the right to terminate your membership and
          subscription for creating or using multiple accounts. In such cases,
          no refunds will be granted.
        </p>

        <h4>2.6.3. Prohibition on Sharing Accounts</h4>
        <p>
          You are strictly prohibited from transferring, gifting, or otherwise
          allowing any third party to use your outworkx account, including other
          outworkx users.
        </p>

        <h4>2.6.4. Commercial Use Prohibited</h4>
        <p>
          The Platform is intended for personal, non-commercial use. You agree
          not to use the Platform for any commercial purposes.
        </p>

        <h4>2.6.5. Testing and Development</h4>
        <p>
          outworkx continuously updates and tests various aspects of the
          Platform. By using the Platform, you acknowledge and consent to
          outworkx's right to include or exclude you from these tests at any
          time without prior notice. Furthermore, you agree that outworkx may
          take actions it deems reasonably necessary to prevent fraud and abuse
          on the Platform.
        </p>

        <h3>2.7. User Information</h3>

        <h4>2.7.1. Accuracy of Information</h4>
        <p>
          You agree to provide truthful, accurate, current, and complete
          information to outworkx upon registration and at all other times. You
          are also responsible for maintaining the accuracy and completeness of
          your information.
        </p>

        <h4>2.7.2. Password Creation</h4>
        <p>
          During registration, you will be required to create a password for
          your account. You are solely responsible for all activity that occurs
          under your account, including any unauthorized use.
        </p>

        <h4>2.7.3. Mobile Application Access</h4>
        <p>
          Using some or all of outworkx's features may require downloading a
          mobile application. You are responsible for providing your own device
          (computer, mobile phone), internet connection, and any other necessary
          means to access the Platform and any related services.
        </p>

        <h3>2.8. Eligibility</h3>

        <h4>2.8.1. Geographic Restrictions</h4>
        <p>
          outworkx may restrict access to all or parts of the Platform based on
          geographic location. The Platform may not be available in all areas.
        </p>

        <h4>2.8.2. Age Requirement</h4>
        <p>
          You must be at least 18 years old to use the Platform and/or purchase
          a subscription.
        </p>

        <h4>2.8.3. Right to Deny Access</h4>
        <p>
          outworkx reserves the right to deny you a subscription or terminate
          your existing subscription if you do not meet the eligibility
          requirements or for any other reason at its sole discretion.
        </p>

        <h3>2.9. Communications</h3>

        <h4>2.9.1. Consent to Communication</h4>
        <p>
          By providing your contact information or creating an account, you
          expressly consent to receiving communications from outworkx, including
          marketing messages, via email, direct mail, telephone, or text
          messages using the information you provided.
        </p>

        <h4>2.9.2. Marketing Opt-Out</h4>
        <p>
          You can opt-out of receiving marketing emails from outworkx by using
          the unsubscribe link provided in such emails or by contacting outworkx
          directly.
        </p>

        <h3>2.10. Subscribing Organizations</h3>

        <h4>2.10.1. Authorization for Organizational Accounts</h4>
        <p>
          If you are opening or using an outworkx account on behalf of a
          company, organization, or other entity (a "Subscribing Organization"),
          you represent and warrant that you are an authorized representative of
          the organization with the legal authority to bind such organization to
          these Terms.
        </p>

        <h4>2.10.2. Binding Agreement</h4>
        <p>
          By using an outworkx account on behalf of a Subscribing Organization,
          you agree to be bound by these Terms on behalf of the organization.
        </p>
      </div>
    );
  };

  // 3 Recurring Billing and Subscription Cycle
  const billingAndSubscription = () => {
    return (
      <div>
        <h2>3. Fees, Billing and Cancellation</h2>

        <h3>3.1. Recurring Billing and Subscription Cycle:</h3>
        <p>
          <strong>3.1.1.</strong> Your outworkx subscription is a recurring
          service. By initiating a subscription, you authorize outworkx to
          charge you for your initial subscription period and a recurring
          monthly subscription fee at the then-current rate. This rate may
          change at any time.
        </p>
        <p>
          <strong>3.1.2.</strong> You acknowledge that the monthly billed amount
          may vary due to promotional offers, plan changes, or add-ons. You
          authorize outworkx to charge your designated payment method for these
          varying amounts, which may be billed monthly in one or more charges.
        </p>
        <p>
          <strong>3.1.3.</strong> You are responsible for all subscription fees
          until you cancel your subscription or it is otherwise terminated, even
          if you do not use the subscription or access the platform.
        </p>

        <h3>3.2. Automatic Renewal:</h3>
        <p>
          <strong>3.2.1.</strong> Upon signing up and purchasing your outworkx
          subscription, your first subscription cycle will be billed
          immediately.
        </p>
        <p>
          <strong>3.2.2.</strong> Unless otherwise communicated, your
          subscription will automatically renew each month, and you will be
          billed on the same date each month. outworkx reserves the right to
          adjust billing timing, with appropriate adjustments made to charged
          amounts.
        </p>
        <p>
          <strong>3.2.3.</strong> In some cases, your billing date may fall on a
          day not present in a given month. In such scenarios, outworkx may bill
          your payment method on a designated day within that month, deemed
          appropriate by outworkx. (e.g., Starting your membership on January
          31st may result in a February 28th billing date.) Your renewal date
          may change due to subscription modifications.
        </p>

        <h3>3.3. Refunds:</h3>
        <p>
          <strong>3.3.1.</strong> outworkx fees, including the monthly
          subscription fee and any other charges, are generally non-refundable.
          Exceptions may exist if explicitly communicated at the time of
          purchase.
        </p>
        <p>
          <strong>3.3.2.</strong> However, subscribers may be eligible for a
          refund of their current prepaid subscription period if their
          subscription is cancelled before the end of the charged period due to
          relocation, disability, or death. outworkx reserves the right to: (a)
          Charge a fee to cover the cost of utilized Venues, services, or
          products before cancellation. (b) Request proof of the changed
          condition, as permitted by law.
        </p>
        <p>
          <strong>3.3.3.</strong> outworkx does not provide refunds or credits
          for prior months, including unused credits or memberships.
        </p>

        <h3>3.4. Price Changes:</h3>
        <p>
          <strong>3.4.1.</strong> outworkx reserves the right to adjust pricing
          at any time. Unless explicitly communicated otherwise, any price
          changes to your subscription will be effective on your next billing
          cycle after notice is provided. This notice may be communicated
          through a posting on the outworkx platform or mobile application, or
          through other appropriate means such as email.
        </p>
        <p>
          <strong>3.4.2.</strong> If you do not cancel your subscription after
          receiving notice of a price change, you are deemed to have accepted
          the new fees.
        </p>

        <h3>3.5. Payment Methods:</h3>
        <p>
          <strong>3.5.1.</strong> You can edit your payment method information
          by logging into your account settings on the platform or mobile
          application.
        </p>
        <p>
          <strong>3.5.2.</strong> If a payment fails due to expiration,
          insufficient funds, or other reasons, you remain responsible for any
          uncollected amounts. You authorize outworkx to continue billing the
          provided payment method (or any updated method) even when attempting
          to create a new account, reactivate a past account, or sign up for a
          new account. This may result in adjustments to your payment billing
          dates.
        </p>
        <p>
          <strong>3.5.3.</strong> outworkx reserves the right to terminate your
          access to the platform or any portion thereof if your account cannot
          be charged. However, outworkx is not obligated to do so.
        </p>

        <h3>3.6. Subscription Cancellation:</h3>
        <p>
          <strong>3.6.1.</strong> Unless otherwise communicated, you can cancel
          your subscription at any time before your renewal by accessing your
          account settings on the outworkx platform and indicating your desire
          to cancel.
        </p>
        <p>
          <strong>3.6.2.</strong> Following any cancellation, you will continue
          to have access to your subscription through the end of your current
          prepaid subscription cycle, unless you cancel and receive a refund, in
          which case your access will be terminated immediately.
        </p>
        <p>
          <strong>3.6.3.</strong> Cancelling your subscription (or having it
          terminated) will result in the loss of access to all Venues, content,
          credits, or features available through the subscription.
        </p>

        <h3>3.7. Reservation and Cancellation of Bookings:</h3>
        <p>
          <strong>3.7.1.</strong> All bookings on the outworkx platform must be
          reserved and cancelled exclusively through the platform. Reserving or
          cancelling directly with a Venue (including through their online or
          mobile account) constitutes a breach of these Terms.
        </p>
        <p>
          <strong>3.7.2.</strong> If you reserve or cancel directly with a
          Venue, outworkx reserves the right to: (a) Charge you the full booking
          amount charged by the Venue and any applicable cancellation fees. (b)
          Suspend or terminate your subscription.
        </p>

        <h3>3.8. Fees Charged by Venues:</h3>
        <p>
          <strong>3.8.1.</strong> In addition to outworkx fees, Venues may also
          charge separate fees for equipment or other amenities. You are
          responsible for these additional charges directly to the Venue.
        </p>
        <p>
          <strong>3.8.2.</strong> outworkx only grants access to the specific
          Venue and time/location booked on the platform. The Venue may have
          additional fees for using other spaces.
        </p>

        <h3>3.9. Third-Party Fees for Using outworkx:</h3>
        <p>
          You are responsible for all charges and fees associated with
          connecting to and using the outworkx platform from third-party
          providers. These fees may include internet service provider charges,
          telephone and computer equipment charges, sales tax, and any other
          fees necessary to access the platform.
        </p>

        <h3>3.10. Credit Rollover:</h3>
        <p>
          <strong>3.10.1.</strong> As long as you remain an active outworkx user
          with a paid subscription, you can roll over unused credits, up to the
          total number of credits included in your current plan.
        </p>
        <p>
          <strong>3.10.2.</strong> For example, with a 25-credit plan renewal,
          you can roll over up to 25 unused credits to your next subscription
          cycle.
        </p>
        <p>
          <strong>3.10.3.</strong> Additionally, if you have a 25-credit plan
          and purchase an additional 50 credits (but don't use them), only a
          maximum of 25 credits will roll over to the next cycle.
        </p>
        <p>
          <strong>3.10.4.</strong> It is important to note that rollovers are
          not cumulative. Credits only roll over from one month to the next and
          do not accumulate over multiple months.
        </p>
        <p>
          <strong>3.10.5.</strong> Trial periods do not allow for credit
          rollover. outworkx may offer different rollover policies for specific
          promotions.
        </p>
        <p>
          <strong>3.10.6.</strong> Please be aware that rolled-over credits may
          take up to 48 hours to appear in your account after renewal.
        </p>
        <p>
          <strong>3.10.7.</strong> If you cancel or delete your account, all
          remaining credits will be forfeited on the date of deletion.
        </p>
      </div>
    );
  };

  // 4 Promotions
  const promotions = () => {
    return (
      <div>
        <h2>4. Promotions</h2>

        <h3>4.1. Trials</h3>
        <p>
          outworkx may occasionally offer trial memberships that grant access to
          the platform for a limited period. The specific Venues, content, and
          features available during your trial may differ from those offered in
          subsequent subscription cycles. Trial durations and pricing will be
          clearly communicated at the time of signup.
        </p>
        <p>
          Unless otherwise stated, trials begin immediately upon signup (even if
          you choose to delay your first membership purchase) and end at 11:59
          PM GST on the last day of the trial period (e.g., a one-week trial
          would end on the same weekday of the following week). Cancelling your
          trial will result in immediate termination of your trial period and
          expiration of any credits (unless otherwise communicated).
        </p>
        <p>
          Each trial membership will automatically convert to a regular monthly
          subscription at the standard price unless cancelled by 11:59 PM GST on
          the last day of the trial.
        </p>

        <h4>4.1.1. Trial Terms and Conditions:</h4>
        <p>
          <strong>4.1.1.1.</strong> Trials, discount offers, and promotions
          (collectively, "Trials") are subject to specific terms and conditions
          outlined for each promotion. These terms may differ from the general
          Terms of Use.
        </p>
        <p>
          <strong>4.1.1.2.</strong> Trials are not transferable, cannot be
          combined with other offers, cannot be redeemed for cash, and are void
          where prohibited.
        </p>
        <p>
          <strong>4.1.1.3.</strong> You acknowledge and agree that Trials are
          generally only available to new users who have never had a previous
          outworkx account. Only one trial is permitted per user or payment
          method. Creating multiple accounts or attempting to sign up for a
          trial after having previously had an account constitutes a violation
          of these Terms.
        </p>
        <p>
          <strong>4.1.1.4.</strong> outworkx reserves the absolute right to
          determine your eligibility for a trial. If we believe you are
          ineligible, we may prevent you from signing up or terminate your
          promotional subscription and automatically charge you for any usage
          during the ineligible trial period.
        </p>
        <p>
          <strong>4.1.1.5.</strong> In the event your trial is terminated due to
          a violation of these Terms, you understand that you will not be
          eligible for a refund.
        </p>

        <h3>4.2. Refer a Friend</h3>
        <p>
          outworkx may occasionally offer incentives to existing users for
          referring friends to the platform. Specific details and terms
          regarding referral programs will be provided at the time of the offer.
        </p>

        <h3>4.3. Additional Promotions</h3>
        <p>
          outworkx may offer other types of promotions that may be subject to
          additional terms and conditions. These terms will be made available by
          outworkx at the time of the promotion.
        </p>
      </div>
    );
  };

  // 5 Termination or Modification
  const terminationOrModification = () => {
    return (
      <div>
        <h2>5. Termination or Modification</h2>

        <h3>5.1. Termination by Outworkx</h3>
        <p>
          You acknowledge and agree that Outworkx reserves the right to
          terminate, cancel, deactivate, disable, delete, and/or suspend your
          subscription, account, any orders placed, or your access to or use of
          the Platform, including your membership (or any portion thereof, such
          as access to any or all Venues, credits, or services), at any time and
          without prior notice. Additionally, Outworkx may discontinue, disable,
          suspend, modify, or alter any aspect, feature, or policy of the
          Platform, including your subscription. This right extends to
          terminating or modifying any subscription prior to the end of any
          pre-paid or committed period. Upon termination or any such action,
          Outworkx may immediately deactivate your account and all related
          information, and/or prohibit any further access to your account
          information and the Platform. Outworkx shall not be liable for, and
          you shall have no recourse for, any such termination or deactivation,
          except as set forth below.
        </p>

        <h3>5.2. Refund Policy</h3>
        <p>
          If you are a subscriber and Outworkx terminates your subscription
          without cause, your sole recourse shall be a pro rata refund of the
          prepaid portion of your subscription applicable to future unused
          services (less any fees or costs for services already used). However,
          if Outworkx determines that you have violated these Terms or engaged
          in illegal or improper use of your membership, Venues, and/or the
          Platform, you will not be entitled to any refund. You agree that
          Outworkx will not be responsible for paying any such refund.
        </p>

        <h3>5.3. No Liability for Termination or Modification</h3>
        <p>
          You agree that Outworkx will not be liable to you or any third party
          for any termination or modification of the service, regardless of the
          reason for such action. You acknowledge that your only right in the
          event of dissatisfaction with any modification or discontinuation of
          service made by Outworkx is to cancel or terminate your subscription.
        </p>

        <h3>5.4. Prohibition on Re-registration</h3>
        <p>
          If Outworkx deletes your account for the reasons outlined above, you
          may not re-register for or use the Platform under any other username,
          email, payment method, or profile. Outworkx reserves the right to
          block your access to the Platform to prevent re-registration.
        </p>
      </div>
    );
  };

  // 6 Privacy Policy
  const privacyPolicy = () => {
    return (
      <div>
        <h2>6. Privacy Policy</h2>

        <h3>6.1. Incorporation by Reference</h3>
        <p>
          Outworkx values your privacy and is committed to protecting it. By
          using the Outworkx platform, you acknowledge and agree that the
          Outworkx Privacy Policy, available on the Outworkx website, is hereby
          incorporated into these Terms of Use by reference. It is important
          that you carefully read the Privacy Policy to understand how Outworkx
          collects, uses, and discloses your personal information.
        </p>

        <h3>6.2. Information Sharing with Venue Partners</h3>
        <p>
          When you make a reservation through the Outworkx platform, please be
          aware that the applicable Venue partner will have access to certain
          information about you, such as your name and email address. This
          access is necessary for the Venue partner to provide services to you
          and to communicate with you effectively. For more detailed information
          on how your information is shared with Venue partners, please refer to
          the Privacy Policy.
        </p>

        <h3>6.3. Compliance with Privacy Policy</h3>
        <p>
          It is imperative that you adhere to the guidelines outlined in the
          Outworkx Privacy Policy regarding the collection, use, and disclosure
          of your personal information. By using the Outworkx platform, you
          agree to comply with the provisions of the Privacy Policy in addition
          to these Terms of Use.
        </p>

        <h3>6.4. Questions and Concerns</h3>
        <p>
          If you have any questions or concerns regarding your privacy or the
          handling of your personal information by Outworkx, please contact us
          through the channels provided in the Privacy Policy. We are committed
          to addressing any inquiries or issues promptly and thoroughly.
        </p>
      </div>
    );
  };

  // 7 Prohibited Activities
  const prohibitedActivities = () => {
    return (
      <div>
        <h2>7. Prohibited Activities</h2>

        <h3>7.1. Harassment and Disruption</h3>
        <p>
          Users of the Outworkx platform are prohibited from engaging in any
          behavior that may harass, threaten, stalk, disrupt, or defraud other
          users, members, or staff of Outworkx or Venues. This includes
          contributing to an environment that is unsafe, harassing, threatening,
          or disruptive in any manner.
        </p>

        <h3>7.2. Deceptive and Fraudulent Behavior</h3>
        <p>
          Deceptive or fraudulent actions, such as impersonation, accessing
          another user's account without authorization, or maintaining multiple
          accounts, are strictly prohibited. Users are also prohibited from
          sharing Outworkx passwords with third parties.
        </p>

        <h3>7.3. Misuse of Memberships and Services</h3>
        <p>
          Users must not permit anyone else to use memberships or services
          booked under their own membership, including other members.
          Additionally, reservations or cancellations of memberships must be
          conducted exclusively through the Outworkx platform, and not directly
          with Venues.
        </p>

        <h3>7.4. Unauthorized Use and Exploitation</h3>
        <p>
          The reproduction, modification, distribution, or exploitation of any
          portion of the Outworkx platform for commercial purposes or otherwise
          is strictly prohibited. Users are also prohibited from misrepresenting
          the source, identity, or content of information transmitted via the
          platform.
        </p>

        <h3>7.5. Malicious Activities</h3>
        <p>
          Users must refrain from uploading or transmitting any material that
          could damage computer systems or data, including viruses.
          Additionally, uploading copyrighted material without proper
          authorization, or sharing inappropriate content, such as pornography
          or hate speech, is strictly prohibited.
        </p>

        <h3>7.6. Technical Interference</h3>
        <p>
          Activities such as decompiling, reverse engineering, or launching
          programs/scripts to interfere with the operation of the platform are
          strictly prohibited. Users must not attempt to gain unauthorized
          access to the platform or impair its functionality.
        </p>

        <h3>7.7. Unauthorized Access and Spam</h3>
        <p>
          Unauthorized access attempts, as well as the sending of unsolicited
          offers, advertisements, or spam, are strictly prohibited. Users must
          not remove, circumvent, or interfere with security features of the
          platform.
        </p>

        <h3>7.8. Compliance with Terms</h3>
        <p>
          Users agree not to use the Outworkx platform for any unlawful or
          prohibited purposes. Any violations of these prohibitions may result
          in refusal of service, termination of accounts, content removal, or
          order cancellation at Outworkx's sole discretion.
        </p>
      </div>
    );
  };

  // 8 User Generated Content
  const userGeneratedContent = () => {
    return (
      <div>
        <h2>8. User-Generated Content</h2>

        <h3>8.1. General</h3>
        <p>
          The Outworkx platform facilitates the submission, posting, sharing,
          and searching of content and information by users, which may include
          text, graphics, profile data, venue-related details, friend
          connections, and other user-generated content ("User Submissions").
          User Submissions encompass reviews, ratings, and feedback provided by
          users. It is essential for users to exercise caution and discretion
          when uploading content to the platform. Outworkx does not guarantee
          anonymity or confidentiality regarding User Submissions. For
          information regarding the handling of personal information, please
          refer to our Privacy Policy.
        </p>

        <h3>8.2. Reviews</h3>
        <p>
          Users acknowledge that reviews may be made publicly available without
          further notice or consent. It should be assumed that any person,
          including venues, may access and read these reviews. Outworkx bears no
          responsibility for the use or disclosure of information contained
          within reviews, including personal data. Reviews reflect the opinions
          of the individuals submitting them and are not necessarily endorsed or
          controlled by Outworkx.
        </p>

        <h3>8.3. Right to Manage User Submissions</h3>
        <p>
          Outworkx retains the right, at its discretion, to refuse, edit, or
          remove any User Submissions without prior notice. Compliance with
          applicable laws, including the removal of content upon receipt of
          valid takedown notices, is ensured. While Outworkx may monitor and
          edit or remove content as deemed necessary, it assumes no liability
          for User Submissions.
        </p>

        <h3>8.4. License Grant</h3>
        <p>
          By utilizing our services, users grant Outworkx and its affiliates a
          comprehensive license to utilize, reproduce, distribute, and modify
          User Submissions for various purposes related to the platform's
          operation and business activities. Users agree to waive any moral
          rights they may have in their submissions.
        </p>

        <h3>8.5. Representations and Warranties</h3>
        <p>
          Users are solely responsible for their User Submissions and warrant
          that they possess the necessary rights and permissions to grant
          Outworkx the license to utilize their content. User Submissions must
          not infringe upon any third-party rights, violate laws or regulations,
          or exploit minors.
        </p>

        <h3>8.6. Exposure to User Submissions</h3>
        <p>
          Users acknowledge that they may encounter User Submissions from
          various sources on the platform. Outworkx does not endorse or
          guarantee the accuracy, safety, or legality of such content. Users
          waive any legal or equitable rights against Outworkx concerning
          exposure to objectionable User Submissions.
        </p>

        <h3>8.7. Feedback</h3>
        <p>
          Provided feedback may be utilized by Outworkx at its discretion,
          including incorporating suggested changes into the platform. Users
          grant Outworkx a license to use such feedback without compensation or
          notice.
        </p>

        <h3>8.8. Enforcement Against Infringing Activity</h3>
        <p>
          Outworkx reserves the right to terminate access and remove content
          associated with infringing or illegal activities. Suspected illegal
          activities may be reported to relevant authorities. These actions
          supplement any other remedies available to Outworkx under law or
          equity.
        </p>

        <h3>8.9. Venue Ratings</h3>
        <p>
          Users may be prompted to rate venues or Outworkx experiences they have
          reserved.
        </p>

        <h3>8.10. Advertising</h3>
        <p>
          By using the platform, users grant permission for their User
          Submissions to be displayed alongside advertisements and messages to
          their Outworkx connections without compensation or prior notification.
          Preferences can be adjusted in the Privacy Settings section.
        </p>
      </div>
    );
  };

  // 9 Ownership and Intellectual Property
  const ownershipAndIntellectualProperty = () => {
    return (
      <div>
        <h2>9. Ownership and Intellectual Property</h2>

        <h3>9.1. Ownership of Platform and Content</h3>
        <p>
          The Outworkx Platform and its mobile applications are the exclusive
          property of Outworkx and are operated under its authority. All
          content, including recordings, visual interfaces, graphics, designs,
          compilations, software, music, images, videos, and text (collectively
          referred to as "Content") provided by Outworkx through the Platform
          are protected by copyright, trade dress, patent, trademark, and other
          intellectual property laws. Unless otherwise stated, all Content,
          excluding User Submissions, is the copyrighted property of Outworkx or
          its affiliated entities and/or third-party licensors. Trademarks,
          service marks, and trade names associated with Outworkx are the
          property of Outworkx or its affiliates and/or third-party licensors.
        </p>

        <h3>9.2. Permissible Use of Content</h3>
        <p>
          Except for User Submissions, users may access Content solely for
          personal, non-commercial purposes. Unauthorized activities, including
          but not limited to selling, distributing, copying, modifying, publicly
          performing, or creating derivative works from the Content, are
          strictly prohibited without explicit authorization from Outworkx.
          Users do not acquire any ownership rights over downloaded Content. All
          rights not expressly granted are reserved by Outworkx.
        </p>

        <h3>9.3. Software Usage and Restrictions</h3>
        <p>
          Users acknowledge and agree not to reverse engineer, decompile, or
          tamper with security measures of the Platform or its Content. Users
          must comply with rules and policies established by Outworkx, including
          updates and modifications to the software. Any use of Content that
          infringes copyright laws is prohibited.
        </p>

        <h3>9.4. Personal Use and Redistribution</h3>
        <p>
          Users agree to use the Platform and Content for personal,
          non-commercial entertainment purposes only and not for redistribution
          or transfer. Prohibited activities include broadcasting, publicly
          performing, or publicly displaying Content without authorization.
          Users must comply with all applicable laws and remain residents of
          designated regions during Platform usage.
        </p>

        <h3>9.5. Rights of Content Owners</h3>
        <p>
          Users acknowledge that Content may be owned by Outworkx or third
          parties, subject to copyright law. Owners retain all rights to their
          Content, and users must respect these rights. Outworkx and Content
          owners reserve the right to remove Content from the Platform without
          prior notice.
        </p>

        <h3>9.6. Disclaimers and Limitations of Liability</h3>
        <p>
          Outworkx and Content owners provide the Platform and Content on an
          "as-is" and "as available" basis without warranties of any kind.
          Neither Outworkx nor Content owners guarantee that the Platform or
          Content are free from viruses or harmful components. Under no
          circumstances shall Outworkx or Content owners be liable for
          incidental, punitive, special, or consequential damages arising from
          Platform use or Content accessibility, or for damages exceeding the
          amount paid for the specific Content item giving rise to the claim.
        </p>
      </div>
    );
  };

  // 10 Third-party Platform and Services
  const thirdPartyPlatformAndServies = () => {
    return (
      <div>
        <h2>10. Third-party Platforms and Services</h2>

        <h3>10.1. Linked Platforms Disclaimer</h3>
        <p>
          The Outworkx Platform may provide links or access to third-party web
          Platforms or services ("Linked Platforms") for user convenience.
          Outworkx does not pre-screen, monitor, or endorse any Linked Platforms
          or the information, material, products, or services they contain.
          Outworkx makes no express or implied warranties regarding the
          accuracy, reliability, or quality of information, material, products,
          or services on Linked Platforms. Users access and utilize Linked
          Platforms, including their content and services, at their own risk.
        </p>

        <h3>10.2. Promotional Plans and Third-party Products</h3>
        <p>
          Occasionally, promotional plans may involve third-party products and
          services. Outworkx does not assume responsibility for the quality or
          reliability of third-party products and services. Users engage with
          third-party products and services at their own discretion and risk.
        </p>

        <h3>10.3. Dealings with Third Parties</h3>
        <p>
          Any correspondence, business dealings, or participation in promotions
          involving third parties found on or through the Outworkx Platform are
          solely between the user and the third party. Outworkx bears no
          responsibility or liability for any loss or damage resulting from such
          dealings or the presence of third parties on the Platform. Users agree
          to indemnify and hold Outworkx harmless from any disputes or issues
          arising from interactions with third parties.
        </p>
      </div>
    );
  };

  // 11 Electronic Signature Acceptance
  const electronicSignatureAcceptance = () => {
    return (
      <div>
        <h2>11. Electronic Signature Acceptance</h2>

        <h3>11.1. Legally Binding Agreement</h3>
        <p>
          By clicking on the button labeled “CONFIRM PURCHASE,” “SUBMIT,”
          “DOWNLOAD,” “PLACE MY ORDER,” “I ACCEPT,” or similar links as
          designated by Outworkx to accept these Terms, you acknowledge and
          agree to submit a legally binding electronic signature, thereby
          entering into a legally binding contract. Your electronic submissions
          signify your agreement and intent to be bound by these Terms.
        </p>

        <h3>11.2. Use of Electronic Signatures</h3>
        <p>
          In accordance with applicable statutes, regulations, rules,
          ordinances, or other laws, you consent to the use of electronic
          signatures, contracts, orders, and other records, as well as
          electronic delivery of notices, policies, and transaction records
          initiated or completed through the Outworkx Platform or services
          offered by Outworkx. By accepting these Terms electronically, you
          waive any rights or requirements under any jurisdiction's statutes,
          regulations, rules, ordinances, or other laws that necessitate an
          original signature, or non-electronic delivery or retention of
          records. You also waive any requirements for payments or credits to be
          granted by means other than electronic methods.
        </p>
      </div>
    );
  };

  // 12 Disclaimer of Liability
  const disclaimerOfLiability = () => {
    return (
      <div>
        <h2>12. Disclaimer of Liability</h2>

        <h3>12.1. Third-Party Products and Services</h3>
        <p>
          Venues and other non-Outworkx products and services available via the
          Platform are provided by third parties, and the descriptions provided
          on the Platform are supplied by such third parties, not by Outworkx.
          Your use of the Platform and your engagement with, participation in,
          purchase, and/or utilization of the venues are undertaken at your own
          risk. Outworkx does not assume any liability or provide any
          warranties, express or implied, regarding the Platform and/or venues.
        </p>

        <h3>12.2. Third-Party Liability</h3>
        <p>
          In no event shall Outworkx be held liable for any act, error, or
          omission by any third party, including but not limited to those
          arising from a user's attendance, use, or participation in a product,
          or the performance or non-performance of any third party. Outworkx
          acts independently and is not an agent of any third party.
        </p>

        <h3>12.3. No Warranty of Content or Features</h3>
        <p>
          All aspects, content, or features available through the Platform are
          provided "as is" and "as available" without any warranties of any
          kind, either express or implied. Outworkx, on behalf of itself and its
          suppliers and partners, disclaims and excludes all warranties, whether
          statutory, express, or implied, including but not limited to implied
          warranties of merchantability, fitness for a particular purpose, and
          non-infringement of proprietary rights.
        </p>
      </div>
    );
  };

  // 13 Understanding of Risks
  const understandingOfRisks = () => {
    return (
      <div>
        <h2>13. Understanding of Risks</h2>

        <h3>13.1. Assumption of Risks</h3>
        <p>
          You acknowledge that Outworkx is not a coworking space, amusement or
          recreational facility, cafe, hotel, or similar establishment, and that
          the venues they provide are operated and managed by the respective
          venue, not by Outworkx. Outworkx holds no responsibility for the
          quality of any venue or third-party service. It is your sole
          responsibility to determine whether the venue or recommendations
          available on or through the Platform are suitable for your needs.
        </p>
        <p>
          You understand that engaging in activities involves inherent risks and
          dangers, and the venues you may attend or participate in offer a range
          of activities with varying levels of intensity. By using Outworkx
          (including but not limited to attending, participating in, or using a
          membership), you acknowledge and agree, on behalf of yourself, your
          heirs, personal representatives, and/or assigns, that you are aware of
          these risks. These risks include, but are not limited to, property
          damage, illness, loss, bodily injury, or death. You acknowledge that
          some of these risks cannot be eliminated, and you specifically assume
          the risk of injury or harm.
        </p>

        <h3>13.2. Release and Indemnification</h3>
        <p>
          Therefore, to the fullest extent permitted by law, you release,
          indemnify, and hold harmless Outworkx, its parent, subsidiaries or
          affiliated entities, and each of their respective officers, directors,
          members, employees, consultants, contract employees, representatives,
          and agents, as well as each of their respective successors and
          assigns, from any and all responsibility, claims, actions, suits,
          procedures, costs, expenses, damages, and liabilities arising out of
          or in any way related to your participation in or use of the Platform
          and/or attendance at, participation in, purchase of, and/or use of any
          membership, including but not limited to bodily injury, physical harm,
          loss, illness, death, or property damage.
        </p>
      </div>
    );
  };

  // 14 Indemnification Agreement
  const indemnificationAgreement = () => {
    return (
      <div>
        <h2>14. Indemnification Agreement</h2>
        <p>
          You agree to indemnify and hold Outworkx, its affiliated entities,
          subsidiaries, suppliers, service providers, and partners, as well as
          each of their respective officers, directors, members, employees,
          consultants, contract employees, representatives, and agents, and each
          of their respective successors and assigns, harmless from any claims,
          actions, suits, costs, expenses, losses, damages, liabilities,
          including attorneys’ fees, arising out of or in connection with:
        </p>
        <ul>
          <li>a) Your misuse of the Platform or Venues.</li>
          <li>b) Violation of these Terms.</li>
          <li>c) Violation of the rights of any other person or entity.</li>
          <li>
            d) Any breach of your representations, warranties, and covenants set
            forth in these Terms.
          </li>
        </ul>
      </div>
    );
  };

  // 15 Limitation of Liability
  const limitationOfLiability = () => {
    return (
      <div>
        <h2>15. Limitation of Liability</h2>
        <p>
          UNDER NO CIRCUMSTANCES SHALL OUTWORKX OR ITS AFFILIATES, CONTRACTORS,
          EMPLOYEES, AGENTS, OR THIRD-PARTY PARTNERS OR SUPPLIERS BE LIABLE FOR
          ANY SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES UNDER ANY
          THEORY OF LIABILITY, WHETHER BASED IN CONTRACT, TORT (INCLUDING
          NEGLIGENCE AND PRODUCT LIABILITY), OR OTHERWISE, EVEN IF OUTWORKX HAS
          BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. APPLICABLE LAW MAY
          NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY OR INCIDENTAL OR
          CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT
          APPLY TO YOU. IN SUCH CASES, OUTWORKX'S LIABILITY WILL BE LIMITED TO
          THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW.
        </p>
        <p>
          OUTWORKX’S LIABILITY TO YOU IS LIMITED TO $50 OR THE AMOUNTS, IF ANY,
          PAID BY YOU TO OUTWORKX UNDER THIS AGREEMENT IN THE THREE MONTHS
          IMMEDIATELY PRIOR TO THE EVENT FIRST GIVING RISE TO THE CLAIM,
          WHICHEVER IS MORE. THE FOREGOING LIMITATIONS WILL APPLY TO THE MAXIMUM
          EXTENT PERMITTED BY APPLICABLE LAW, REGARDLESS OF WHETHER OUTWORKX HAS
          BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND REGARDLESS OF
          WHETHER ANY REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
        </p>
      </div>
    );
  };

  // 16 Venue Agreements and Terms
  const venueAgreementsAndTerms = () => {
    return (
      <div>
        <h2>16. Venue Agreements and Terms</h2>
        <p>
          Members visiting Venues are considered to consent to the liability
          waivers and terms set by individual Venues. Your utilization of any
          Venue may be subject to additional policies, rules, or conditions
          specified by the respective Venue. You acknowledge and agree that
          failure to comply with these Terms or the policies of the Venues, or
          as otherwise determined by a Venue, may result in your inability to
          reserve services. If you have inquiries regarding a Venue’s waiver or
          other terms, kindly refer to the respective Venue’s Platform or
          directly contact the Venue for clarification.
        </p>
      </div>
    );
  };

  // 17 Copyright and Trademark Policies
  const copyrightAndTrademarkPolicies = () => {
    return (
      <div>
        <h2>17. Copyright and Trademark Policies</h2>
        <p>
          Please refer to our Copyright Act document for detailed information
          regarding our copyright and trademark policies.
        </p>
      </div>
    );
  };

  // 18 Class Action Waiver
  const classActionWaiver = () => {
    return (
      <div>
        <h2>18. Class Action Waiver</h2>
        <p>
          Please carefully review the following provisions, which apply to you,
          subject to applicable local law:
        </p>
        <h3>Class Action Waiver</h3>
        <p>
          Any disputes arising out of or relating to your use of the Platform
          and/or attendance at, participation in, or use of membership, any
          purchase you make on or through the Platform, any information you
          provide via the Platform, and/or these Terms (including the formation,
          performance, or alleged breach), shall be submitted individually by
          you and will not be subject to any class action or representative
          status. A court or arbitrator may not consolidate more than one
          person’s claims, and may not otherwise preside over any form of a
          class or representative proceeding or claims (such as a class action,
          representative action, consolidated action, or private attorney
          general action). Neither you, nor any other Member of outworkx and/or
          user of outworkx services, can be a class representative, class
          member, or otherwise participate in a class, representative,
          consolidated, or private attorney general proceeding with respect to
          the matters set forth in the first sentence of this paragraph.
        </p>
        <p>
          You agree that this Class Action Waiver is material and essential to
          the arbitration of any dispute between you and outworkx. You
          understand that by agreeing to this Class Action Waiver, you may only
          pursue disputes against outworkx in an individual capacity and not as
          a plaintiff or class member in any purported class action or
          representative proceeding. The term “Dispute” means any dispute,
          claim, or controversy between you and outworkx regarding any aspect of
          your relationship with outworkx, whether based in contract, statute,
          regulation, ordinance, tort (including, but not limited to, fraud,
          misrepresentation, fraudulent inducement, negligence, gross
          negligence, or reckless behavior), or any other legal or equitable
          theory, and includes the validity, enforceability, or scope of this
          Arbitration Agreement (with the exception of the enforceability of the
          Class Action Waiver clause below). “Dispute” is to be given the
          broadest possible meaning that will be enforced.
        </p>
        <h3>18.1. Continuation of Class Action Waiver</h3>
        <p>
          Please be advised that the Class Action Waiver outlined above shall
          remain effective even after the termination of your contractual
          relationship with outworkx and the cessation of your use of the
          outworkx Platform and associated services.
        </p>
      </div>
    );
  };

  // 19 Miscelleneous
  const miscelleneous = () => {
    return (
      <div>
        <h2>19. Miscellaneous</h2>
        <h3>19.1. Choice of Law; Forum</h3>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of the Government of Pakistan. Any dispute concerning these Terms
          shall be exclusively subject to the jurisdiction of the courts of
          Pakistan.
        </p>
        <h3>19.2. Assignment</h3>
        <p>
          We reserve the right to assign our rights and obligations under these
          Terms. These Terms shall be binding upon and shall inure to the
          benefit of our successors, assigns, and licensees.
        </p>
        <h3>19.3. Severability</h3>
        <p>
          If any provision of these Terms is found to be unlawful, void, or
          unenforceable for any reason, such provision shall be deemed severable
          from these Terms and shall not affect the validity and enforceability
          of the remaining provisions.
        </p>
        <h3>19.4. Headings</h3>
        <p>
          The headings used herein are for convenience purposes only and do not
          form a part of these Terms. They shall not be construed to limit or
          affect any provisions contained herein.
        </p>
        <h3>19.5. Entire Agreement</h3>
        <p>
          These Terms, along with any applicable Additional Terms as may be
          amended from time to time, constitute the entire agreement between you
          and outworkx pertaining to the subject matter herein.
        </p>
        <h3>19.6. Claims; Statute of Limitations</h3>
        <p>
          Subject to applicable local law, any cause of action arising out of or
          related to these Terms and/or the Platform must commence within one
          (1) year after the cause of action accrues. Otherwise, such cause of
          action is permanently barred.
        </p>
        <h3>19.7. Waiver</h3>
        <p>
          No waiver of any provision of these Terms by outworkx shall be binding
          unless authorized in writing by an executive officer of outworkx. Any
          waiver of a breach of these Terms shall not be construed as a
          continuing waiver of other breaches or provisions, and outworkx
          reserves the right to enforce the terms at a later time.
        </p>
        <h3>19.8. Notice</h3>
        <p>
          Unless explicitly stated otherwise, legal notices shall be served to
          outworkx's national registered agent and to you at the email address
          provided during the registration process. Notice shall be deemed given
          24 hours after email transmission, unless the sender is notified of an
          invalid email address. Alternatively, legal notice may be given by
          mail to the address provided during registration, with notice deemed
          given three days after the date of mailing.
        </p>
      </div>
    );
  };

  return (
    <>
      <Heading>Terms and Conditions</Heading>
      {acceptanceOfTerms()}
      {outworkxPlatform()}
      {billingAndSubscription()}
      {promotions()}
      {terminationOrModification()}
      {privacyPolicy()}
      {prohibitedActivities()}
      {userGeneratedContent()}
      {ownershipAndIntellectualProperty()}
      {thirdPartyPlatformAndServies()}
      {electronicSignatureAcceptance()}
      {disclaimerOfLiability()}
      {understandingOfRisks()}
      {indemnificationAgreement()}
      {limitationOfLiability()}
      {venueAgreementsAndTerms()}
      {copyrightAndTrademarkPolicies()}
      {classActionWaiver()}
      {miscelleneous()}
      <Footer />
    </>
  );
};

export default TermsAndCondition;
