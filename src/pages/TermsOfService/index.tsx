import React from 'react';
import styled from 'styled-components';
import { AppBar } from '../../components/AppBar';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/Text';
import { Link } from '../../components/Link';

const TermsOfServiceStyles = styled.div`
  .tos-text {
    margin: 10px 0;
  }

  .tos-text.last-updated-text {
    margin-top: 3rem;
  }

  .tos-text.section-title {
    margin-top: 1.5rem;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 3rem; // adds space for footer
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  /* mobile landscape*/
  @media (min-width: 576px) {
    max-width: 540px;
  }

  /* portrait tablet */
  @media (min-width: 768px) {
    max-width: 720px;
  }

  /* landscape tablet */
  @media (min-width: 992px) {
    max-width: 960px;
  }

  /* laptop & desktop */
  @media (min-width: 1360px) {
    max-width: 1280px;
  }
`;

export const TermsOfService = () => {
  return (
    <div>
      <AppBar />
      <Container>
        <TermsOfServiceStyles>
          <Text
            size="12px"
            color="grayDark"
            className="tos-text last-updated-text"
          >
            Page last updated: September 24, 2021
          </Text>
          <Heading level={2}>Terms of Use</Heading>
          <Text className="section-title tos-text" weight={500}>
            PLEASE READ THESE TERMS OF USE BEFORE USING THE WEBSITE.
          </Text>
          <Text className="tos-text">
            Acceptance of the Terms of Use These terms of use are entered into
            by and between you and LUKSO Blockchain GmbH ("LUKSO", "we" or
            "us"). The following terms and conditions, together with any
            documents they expressly incorporate by reference (collectively,
            these "Terms of Use"), govern your access to and use of
            lukso.network, including any content, functionality and services
            offered on or through lukso.network (together, the "Website").
          </Text>
          <Text className="tos-text">
            Please read the Terms of Use carefully before you start to use the
            Website. By using the Website or by clicking to accept or agree to
            the Terms of Use when this option is made available to you, you
            accept and agree to be bound and abide by these Terms of Use in
            addition to
            <ul>
              <li>
                our{' '}
                <Link primary inline to="https://www.lukso.network/privacy">
                  Privacy Policy
                </Link>
                , incorporated herein by reference; and
              </li>
            </ul>
          </Text>
          <Text className="tos-text">
            If you do not to agree to these Terms of Use or the Privacy Policy,
            you must not access or use the Website.
          </Text>
          <Text className="section-title tos-text" weight={500}>
            Who May Use the Website
          </Text>
          <Text className="tos-text">
            The Website is offered and available to users who are 13 years of
            age or older. The Website is not intended for children under 13
            years of age. By using this Website, you represent and warrant that
            you (i) are 13 years of age or older, (ii) are not barred to use the
            Website under any applicable law, and (iii) are using the Website
            only for your own personal use. If you do not meet these
            requirements, you must not access or use the Website.
          </Text>
          <Text className="section-title tos-text" weight={500}>
            Changes to the Terms of Use
          </Text>
          <Text className="tos-text">
            We may revise and update these Terms of Use from time to time in our
            sole discretion. All changes are effective immediately when we post
            them.
          </Text>
          <Text className="tos-text">
            Your continued use of the Website following the posting of revised
            Terms of Use means that you accept and agree to the changes. You are
            expected to check this page frequently so you are aware of any
            changes, as they are binding on you.
          </Text>
          <Text className="section-title tos-text" weight={500}>
            Accessing the Website and Account Security
          </Text>
          <Text className="tos-text">
            We reserve the right to withdraw or amend this Website, and any
            service or material we provide on the Website, in our sole
            discretion without notice. We do not guarantee that our site or any
            content on it, will always be available or be interrupted. We will
            not be liable if for any reason all or any part of the Website is
            unavailable at any time or for any period. From time to time, we may
            restrict access to some parts of the Website, or the entire Website,
            to users.
          </Text>
          <Text className="tos-text">
            You are responsible for:
            <ul>
              <li>
                Making all arrangements necessary for you to have access to the
                Website.
              </li>
              <li>
                Ensuring that all persons who access the Website through your
                internet connection are aware of these Terms of Use and comply
                with them.
              </li>
            </ul>
          </Text>
          <Text className="tos-text">
            To access the Website or some of the resources it offers, you may be
            asked to provide certain registration details or other information.
            It is a condition of your use of the Website that all the
            information you provide on the Website is correct, current and
            complete. You agree that all information you provide to register
            using this Website or otherwise, including, but not limited to,
            using any interactive features on the Website, is governed by our
            Privacy Policy, and you consent to all actions we take with respect
            to your information consistent with our Privacy Policy.
          </Text>
          <Text className="tos-text">
            You should use particular caution when inputting personal
            information on to the Website on a public or shared computer so that
            others are not able to view or record your personal information.
          </Text>
          <Text className="section-title tos-text" weight={500}>
            Intellectual Property Rights
          </Text>
          <Text className="tos-text">
            The Website and its entire contents, features and functionality
            (including but not limited to all information, software, text,
            displays, images, video and audio, and the design, selection and
            arrangement thereof), are owned by LUKSO, its licensors or other
            providers of such material and are protected by copyright,
            trademark, patent, trade secret and other intellectual property or
            proprietary rights laws.
          </Text>
          <Text className="tos-text">
            Unless otherwise marked: (a) all material, data, and information on
            the Website, such as data files, text, music, audio files or other
            sounds, photographs, videos, or other images, but excluding any
            software or computer code (collectively, the “Non- Code Content”) is
            licensed under the Creative Commons Attribution 4.0 International
            License; and (b) all software or computer code (collectively, the
            “Code Content”) is licensed under the MIT License.
          </Text>
          <Text className="section-title tos-text" weight={500}>
            Trademarks
          </Text>
          <Text className="tos-text">
            The LUKSO name, the LUKSO logo and all related names, logos, product
            and service names, designs and slogans are trademarks of LUKSO or
            its affiliates or licensors. You must not use such marks without the
            prior written permission of LUKSO. All other names, logos, product
            and service names, designs and slogans on this Website are the
            trademarks of their respective owners.
          </Text>
          <Text className="section-title tos-text" weight={500}>
            Prohibited Uses
          </Text>
          <Text className="tos-text">
            You may use the Website only for lawful purposes and in accordance
            with these Terms of Use. You agree not to use the Website:
            <ul>
              <li>
                In any way that violates any applicable federal, state, local or
                international law or regulation (including, without limitation,
                any laws regarding the export of data or software to and from
                the US or other countries).
              </li>
              <li>
                For the purpose of exploiting, harming or attempting to exploit
                or harm minors in any way by exposing them to inappropriate
                content, asking for personally identifiable information or
                otherwise.
              </li>
              <li>
                To send, knowingly receive, upload, download, use or re-use any
                material which does not comply with these Terms of Use.
              </li>
              <li>
                To transmit, or procure the sending of, any advertising or
                promotional material without our prior written consent,
                including any "junk mail", "chain letter" or "spam" or any other
                similar solicitation.
              </li>
              <li>
                To impersonate or attempt to impersonate LUKSO, a LUKSO
                employee, another user or any other person or entity (including,
                without limitation, by using e-mail addresses or screen names
                associated with any of the foregoing).
              </li>
              <li>
                To engage in any other conduct that restricts or inhibits
                anyone's use or enjoyment of the Website, or which, as
                determined by us, may harm LUKSO or users of the Website or
                expose them to liability.
              </li>
            </ul>
          </Text>
          <Text className="tos-text">
            Additionally, you agree not to:
            <ul>
              <li>
                Use the Website in any manner that could disable, overburden,
                damage, or impair the site or interfere with any other party's
                use of the Website, including their ability to engage in real
                time activities through the Website.
              </li>
              <li>
                Use any robot, spider or other automatic device, process or
                means to access the Website for any purpose, including
                monitoring or copying any of the material on the Website.
              </li>
              <li>
                Use any manual process to monitor or copy any of the material on
                the Website or for any other unauthorized purpose without our
                prior written consent.
              </li>
              <li>
                Use any device, software or routine that interferes with the
                proper working of the Website.
              </li>
              <li>
                Introduce any viruses, trojan horses, worms, logic bombs or
                other material which is malicious or technologically harmful.
              </li>
              <li>
                Attempt to gain unauthorized access to, interfere with, damage
                or disrupt any parts of the Website, the server on which the
                Website is stored, or any server, computer or database connected
                to the Website.
              </li>
              <li>
                Attack the Website via a denial-of-service attack or a
                distributed denial-of-service attack.
              </li>
              <li>
                Otherwise attempt to interfere with the proper working of the
                Website.
              </li>
            </ul>
          </Text>
          <Text className="section-title tos-text" weight={500}>
            Reliance on Information Posted
          </Text>
          <Text className="tos-text">
            The information presented on or through the Website is made
            available solely for general information purposes. We do not warrant
            the accuracy, completeness or usefulness of this information. Any
            reliance you place on such information is strictly at your own risk.
            We disclaim all liability and responsibility arising from any
            reliance placed on such materials by you or any other visitor to the
            Website, or by anyone who may be informed of any of its contents.
          </Text>
          <Text className="tos-text">
            This Website includes content provided by third parties, including
            materials provided by other users, bloggers and third-party
            licensors, syndicators, aggregators and/or reporting services. All
            statements and/or opinions expressed in these materials, and all
            articles and responses to questions and other content, other than
            the content provided by LUKSO, are solely the opinions and the
            responsibility of the person or entity providing those materials.
            These materials do not necessarily reflect the opinion of LUKSO. We
            are not responsible, or liable to you or any third party, for the
            content or accuracy of any materials provided by any third parties.
          </Text>
          <Text className="section-title tos-text" weight={500}>
            Changes to the Website
          </Text>
          <Text className="tos-text">
            We may update the content on this Website from time to time, but its
            content is not necessarily complete or up-to-date. Any of the
            material on the Website may be out of date at any given time, and we
            are under no obligation to update such material.
          </Text>

          <Text className="section-title tos-text" weight={500}>
            Information About You and Your Visits to the Website
          </Text>

          <Text className="tos-text">
            All information we collect on this Website is subject to our{' '}
            <Link primary inline to="https://www.lukso.network/privacy">
              Privacy Policy
            </Link>
            . By using the Website, you consent to all actions taken by us with
            respect to your information in compliance with the Privacy Policy.
          </Text>

          <Text className="section-title tos-text" weight={500}>
            Online Purchases and Other Terms and Conditions
          </Text>

          <Text className="tos-text">
            Additional terms and conditions may also apply to specific portions,
            services or features of the Website, including the registration and
            sponsorship for conference events. All such additional terms and
            conditions are hereby incorporated by this reference into these
            Terms of Use. In the event of terms that are directly conflicting
            between these Terms of Use and terms of conditions for the
            registration or sponsorship of a conference event, the terms and
            conditions for the event shall control.
          </Text>

          <Text className="section-title tos-text" weight={500}>
            Linking to the Website and Social Media Features
          </Text>
          <Text className="tos-text">
            You may link to our homepage, provided you do so in a way that is
            fair and legal and does not damage our reputation or take advantage
            of it, but you must not establish a link in such a way as to suggest
            any form of association, approval or endorsement on our part without
            our express written consent.
          </Text>
          <Text className="section-title tos-text" weight={500}>
            Links from the Website
          </Text>
          <Text className="tos-text">
            If the Website contains links to other sites and resources provided
            by third parties, these links are provided for your convenience
            only. This includes links contained in advertisements, including
            banner advertisements and sponsored links. We have no control over
            the contents of those sites or resources, and accept no
            responsibility for them or for any loss or damage that may arise
            from your use of them. If you decide to access any of the third
            party websites linked to this Website, you do so entirely at your
            own risk and subject to the terms and conditions of use for such
            websites. We reserve the right to withdraw linking permission
            without notice.
          </Text>
          <Text className="section-title tos-text" weight={500}>
            Geographic Restrictions
          </Text>
          <Text className="tos-text">
            The owner of the Website is based in Germany. We make no claims that
            the Website or any of its content is accessible or appropriate
            outside of Germany. Access to the Website may not be legal by
            certain persons or in certain countries. If you access the Website
            from outside Germany, you do so on your own initiative and are
            responsible for compliance with local laws.
          </Text>
          <Text className="section-title tos-text" weight={500}>
            Disclaimer of Warranties
          </Text>
          <Text className="tos-text">
            You understand that we cannot and do not guarantee or warrant that
            files available for downloading from the internet or the Website
            will be free of viruses or other destructive code. You are
            responsible for implementing sufficient procedures and checkpoints
            to satisfy your particular requirements for anti-virus protection
            and accuracy of data input and output, and for maintaining a means
            external to our site for any reconstruction of any lost data. WE
            WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED
            DENIAL-OF-SERVICE ATTACK, VIRUSES OR OTHER TECHNOLOGICALLY HARMFUL
            MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER PROGRAMS,
            DATA OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE WEBSITE OR
            ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE OR TO YOUR
            DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR ON ANY WEBSITES LINKED
            TO IT.
          </Text>
          <Text className="tos-text">
            YOUR USE OF THE WEBSITE, ITS CONTENT AND ANY SERVICES OR ITEMS
            OBTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, ITS
            CONTENT AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE ARE
            PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY
            WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER LUKSO NOR
            ANY PERSON ASSOCIATED WITH LUKSO MAKES ANY WARRANTY OR
            REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY,
            RELIABILITY, QUALITY, ACCURACY OR AVAILABILITY OF THE WEBSITE.
            WITHOUT LIMITING THE FOREGOING, NEITHER LUKSO NOR ANYONE ASSOCIATED
            WITH LUKSO REPRESENTS OR WARRANTS THAT THE WEBSITE, ITS CONTENT OR
            ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE WILL BE ACCURATE,
            RELIABLE, ERROR-FREE OR UNINTERRUPTED, THAT DEFECTS WILL BE
            CORRECTED, THAT OUR SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE
            FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE WEBSITE OR
            ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE WILL OTHERWISE
            MEET YOUR NEEDS OR EXPECTATIONS.
          </Text>
          <Text className="tos-text">
            LUKSO HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS
            OR IMPLIED, STATUTORY OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY
            WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT AND FITNESS FOR
            PARTICULAR PURPOSE.
          </Text>
          <Text className="tos-text">
            SOME JURISDICTIONS DO NOT ALLOW EXCLUSION OF WARRIANTIES OR
            LIMITATIONS ON THE DURATION OF IMPLIED WARRANTIES, SO THE ABOVE
            DISCLAIMER MAY NOT APPLY TO YOU IN THEIR ENTIRETIES, BUT WILL APPLY
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.
          </Text>
          <Text className="section-title tos-text" weight={500}>
            Limitation on Liability
          </Text>
          <Text className="tos-text">
            IN NO EVENT WILL LUKSO, ITS AFFILIATES OR THEIR LICENSORS, SERVICE
            PROVIDERS, EMPLOYEES, AGENTS, OFFICERS OR DIRECTORS BE LIABLE FOR
            DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN
            CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY
            WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER
            WEBSITES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE OR
            SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL,
            INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING BUT NOT
            LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS,
            LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED
            SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER
            CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT OR
            OTHERWISE, EVEN IF FORESEEABLE. THE FOREGOING DOES NOT AFFECT ANY
            LIABILITY WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW
            WHICH MAY INCLUDE FRAUD.
          </Text>
          <Text className="section-title tos-text" weight={500}>
            Indemnification
          </Text>
          <Text className="tos-text">
            You agree to defend, indemnify and hold harmless LUKSO, its
            affiliates, licensors and service providers, and its and their
            respective officers, directors, employees, contractors, agents,
            licensors, suppliers, successors and assigns from and against any
            claims, liabilities, damages, judgments, awards, losses, costs,
            expenses or fees (including reasonable attorneys' fees) arising out
            of or relating to your violation of these Terms of Use or your use
            of the Website, including, but not limited to, any use of the
            Website's content, services and products other than as expressly
            authorized in these Terms of Use or your use of any information
            obtained from the Website.
          </Text>
          <Text className="section-title tos-text" weight={500}>
            Governing Law and Jurisdiction
          </Text>
          <Text className="tos-text">
            All matters relating to the Website and these Terms of Use and any
            dispute or claim arising therefrom or related thereto (in each case,
            including non-contractual disputes or claims), shall be governed by
            and construed in accordance with the internal laws of Germany
            without giving effect to any choice or conflict of law provision or
            rule (whether of Germany or any other jurisdiction).
          </Text>
          <Text className="tos-text">
            Any legal suit, action or proceeding arising out of, or related to,
            these Terms of Use or the Website shall be instituted exclusively in
            Germany although we retain the right to bring any suit, action or
            proceeding against you for breach of these Terms of Use in your
            country of residence or any other relevant country. You waive any
            and all objections to the exercise of jurisdiction over you by such
            courts and to venue in such courts.
          </Text>
          <Text className="section-title tos-text" weight={500}>
            Waiver and Severability
          </Text>
          <Text className="tos-text">
            No waiver of by LUKSO of any term or condition set forth in these
            Terms of Use shall be deemed a further or continuing waiver of such
            term or condition or a waiver of any other term or condition, and
            any failure of LUKSO to assert a right or provision under these
            Terms of Use shall not constitute a waiver of such right or
            provision.
          </Text>
          <Text className="tos-text">
            If any provision of these Terms of Use is held by a court or other
            tribunal of competent jurisdiction to be invalid, illegal or
            unenforceable for any reason, such provision shall be eliminated or
            limited to the minimum extent such that the remaining provisions of
            the Terms of Use will continue in full force and effect.
          </Text>
          <Text className="section-title tos-text" weight={500}>
            Entire Agreement
          </Text>
          <Text className="tos-text">
            The Terms of Use, our Privacy Policy and terms of conditions for the
            registration of events constitute the sole and entire agreement
            between you and LUKSO with respect to the Website and supersede all
            prior and contemporaneous understandings, agreements,
            representations and warranties, both written and oral, with respect
            to the Website.
          </Text>
          <Text className="section-title tos-text" weight={500}>
            Your Comments and Concerns
          </Text>
          <Text className="tos-text">
            This Website is operated by LUKSO. All other feedback, comments,
            requests for technical support and other communications relating to
            the Website should be directed to: hello@lukso.network.
          </Text>
        </TermsOfServiceStyles>
      </Container>
    </div>
  );
};
