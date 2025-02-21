import React from 'react';
import styled from 'styled-components';
import { CheckBox } from 'grommet';
import { FormattedDate, FormattedMessage, useIntl } from 'react-intl';
import { FormNext } from 'grommet-icons';
import { Link } from '../../components/Link';
import { PageTemplate } from '../../components/PageTemplate';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/Text';
import {
  BEACONCHAIN_URL,
  LUKSO_NETWORK_NAME,
  IS_MAINNET,
  TESTNET_LAUNCHPAD_URL,
  TESTNET_LAUNCHPAD_NAME,
  VANGUARD_MIN_PEERS,
} from '../../utils/envVars';
import { routesEnum } from '../../Routes';
import { Code } from '../../components/Code';
import { Alert } from '../../components/Alert';

const ChecklistPageStyles = styled.div`
  section {
    background-color: white;
    padding: 1rem;
    margin: 1rem;
    border-radius: 4px;
    > h3 {
      border-bottom: 1px solid lightgray;
      margin-bottom: 5px;
    }
  }
  label {
    padding: 1rem;
  }
  .sub-checklist-item {
    margin-top: -0.5rem;
    margin-left: 1.5rem;
  }
  .checkbox-label {
    margin-left: 0.5rem;
  }
  ul {
    padding-left: 0px;
    padding-top: 16px;
  }
  @media screen and (max-width: 1080px) {
    section {
      background-color: white;
      margin: 0px;
      padding: 16px;
      flex-wrap: wrap;
    }
  }
`;

const CodeSnippet = styled.div`
  padding: 10px;
  font-family: Courier, sans-serif;
  font-size: 1em;
  line-height: 1.3;
  color: #fff;
  background-color: #597ea3;
  border-radius: 6px;
  margin: 10px 0;

  code {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  margin-bottom: 32px;
`;

const PortTable = styled.table`
  margin: 1rem auto;
  color: #212529;

  th,
  td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
  }

  thead th {
    vertical-align: bottom;
  }

  tbody + tbody {
    border-top: 2px solid #dee2e6;
  }
`;

const SectionHeader = styled.div`
  margin: 3rem 0 1rem;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 4px;
  &:before {
    content: '';
    display: block;
    height: 3rem;
    margin-top: -3rem;
    visibility: hidden;
  }
`;

const GradientHeader = styled(SectionHeader as any)`
  margin: 3rem 1rem 1rem;
  background-image: ${p =>
    `linear-gradient(to right, ${p.theme.gradientDisclaimer})`};
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
  gap: 1rem;
  @media only screen and (max-width: ${p => p.theme.screenSizes.medium}) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  padding: 24px;
  border: 1px solid ${p => p.theme.gray.dark};
  border-radius: 4px;
  width: 100%;
  background: white;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  @media only screen and (max-width: ${p => p.theme.screenSizes.medium}) {
    margin: 0px;
    margin-top: 16px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 8px 17px rgba(0, 0, 0, 0.15);
    transition: transform 0.1s;
    transform: scale(1.02);
  }
`;

const BoldPurple = styled.span`
  color: ${(p: { theme: any; fontSize: number }) => p.theme.purple.brand};
  font-size: ${(p: { theme: any; fontSize: number }) => p.fontSize}px;
  font-weight: bold;
`;

const StyledLink = styled(Link as any)`
  width: 100%;
`;

interface Client {
  header: string;
  text: string;
  imgUrl: any;
  url: routesEnum;
  linkText: string;
}

export const Checklist = () => {
  const { formatMessage } = useIntl();

  return (
    <PageTemplate
      title={formatMessage({ defaultMessage: 'L16 validator checklist' })}
    >
      <div id="top" />
      <Subtitle>
        <FormattedMessage defaultMessage="This checklist will help you understand the role of a validator and prepare you for the role." />
        <Text className="mt10">
          <FormattedMessage
            defaultMessage="Visit the LUKSO #validators channel on {discord} at any time during your setup for some friendly help!"
            values={{
              discord: (
                <Link primary inline to="https://discord.gg/E2rJPP4">
                  Discord
                </Link>
              ),
            }}
            description="{discord} is a link to the LUKSO Discord (do not translate names)"
          />
        </Text>
      </Subtitle>
      <CardContainer>
        <StyledLink to="#section-one" inline isTextLink={false}>
          <Card>
            <div>
              <Heading level={4} className="mb10">
                <FormattedMessage defaultMessage="Section 1" />
              </Heading>
              <BoldPurple className="mr10" fontSize={24}>
                <FormattedMessage defaultMessage="Before you start" />
              </BoldPurple>
            </div>
            <FormNext size="large" />
          </Card>
        </StyledLink>
        <StyledLink to="#section-two" inline isTextLink={false}>
          <Card>
            <div>
              <Heading level={4} className="mb10">
                <FormattedMessage defaultMessage="Section 2" />
              </Heading>
              <BoldPurple className="mr10" fontSize={24}>
                <FormattedMessage defaultMessage="During setup" />
              </BoldPurple>
            </div>
            <FormNext size="large" />
          </Card>
        </StyledLink>
        <StyledLink to="#section-three" inline isTextLink={false}>
          <Card>
            <div>
              <Heading level={4} className="mb10">
                <FormattedMessage defaultMessage="Section 3" />
              </Heading>
              <BoldPurple className="mr10" fontSize={24}>
                <FormattedMessage defaultMessage="After depositing" />
              </BoldPurple>
            </div>
            <FormNext size="large" />
          </Card>
        </StyledLink>
      </CardContainer>
      <ChecklistPageStyles>
        <SectionHeader id="section-one">
          <Heading level={3}>
            <FormattedMessage defaultMessage="Section 1 - Before you start" />
          </Heading>
          <Text className="mt10">
            <FormattedMessage defaultMessage="Review this section before deciding to proceed with validator setup." />
          </Text>
        </SectionHeader>
        <Alert variant="warning" className="my40 mx15">
          <Heading level={4}>
            <FormattedMessage defaultMessage="Recommendation disclaimer" />
          </Heading>
          <Text className="mt20">
            <FormattedMessage
              defaultMessage="Hardware suggestions are an ever-evolving target. Current
                    minimum requirements are likely to increase by an order of magnitude after the merge and 
                    introduction of shard chains. Do your own research before depositing funds."
            />
          </Text>
        </Alert>
        <section>
          <Heading level={3}>
            <FormattedMessage defaultMessage="Hard drive" />
          </Heading>
          <ul className="sub-checklist-item">
            <li className="py5">
              <Text>
                <FormattedMessage
                  defaultMessage="To process incoming validator deposits from the Execution
                    chain, you'll need to run a Execution client as well as your
                    Consensus client. You can use a third-party service
                    like Infura, but we recommend running your own client to
                    keep the network as decentralised as possible."
                />
              </Text>
            </li>
            <li className="py5">
              <Text>
                <FormattedMessage
                  defaultMessage="You'll need a significant amount of space for the Execution chain data alone (For reference; as of {date}, Eth1 is ~400GB and growing at ~1GB/day)."
                  values={{
                    date: (
                      <FormattedDate
                        value={new Date(2021, 1)}
                        year="numeric"
                        month="long"
                      />
                    ),
                  }}
                />
              </Text>
            </li>
            <li className="py5">
              <Text>
                <FormattedMessage
                  defaultMessage="The Consensus Chain had its genesis on {date}. It is growing in size over time, and the
                    introduction of sharding will also increase storage, memory, and bandwidth requirements."
                  values={{
                    date: (
                      <FormattedDate
                        value={new Date(Date.UTC(2020, 11, 1, 12, 0, 23))}
                        year="numeric"
                        month="long"
                        day="2-digit"
                      />
                    ),
                  }}
                />
              </Text>
            </li>
            <li className="py5">
              <Text>
                <FormattedMessage defaultMessage="You'll need SSD storage to consistently handle necessary read/write speeds." />
              </Text>
            </li>
            <li className="py5">
              <Text>
                <FormattedMessage defaultMessage="Be sure to account for enough space on your drive until you run maintenance on your node." />
              </Text>
            </li>
          </ul>
        </section>
        <section>
          <Heading level={3}>
            <FormattedMessage defaultMessage="CPU and RAM" />
          </Heading>
          <ul className="sub-checklist-item">
            <li className="py5">
              <Text>
                <FormattedMessage defaultMessage="Check with client documentation to ensure the hardware you want to use is sufficient and supported." />
              </Text>
            </li>
            <li className="py5">
              <Text>
                <FormattedMessage defaultMessage="Resource usage can vary significantly between clients. Research the different clients if you're working with resource constraints." />
              </Text>
            </li>
          </ul>
        </section>
        <section>
          <Heading level={3}>
            <FormattedMessage defaultMessage="Internet" />
          </Heading>
          <ul className="sub-checklist-item">
            <li className="py5">
              <Text>
                <FormattedMessage defaultMessage="Ideally your internet connection should be reliable and as close to 24/7 as possible without interruption." />
              </Text>
            </li>
            <li className="py5">
              <Text>
                <FormattedMessage defaultMessage="Ensure your bandwidth can't be throttled and isn't capped so your node stays in sync and will be ready to validate when called." />
              </Text>
            </li>
            <li className="py5">
              <Text>
                <FormattedMessage
                  defaultMessage="You need enough upload bandwidth too. As of {date}, for Eth this is ~700-800 MB/hour, and is likely to increase over time."
                  values={{
                    date: (
                      <FormattedDate
                        value={new Date(2021, 1)}
                        year="numeric"
                        month="long"
                      />
                    ),
                  }}
                />
              </Text>
            </li>
          </ul>
          <Heading level={4} className="mt10">
            <FormattedMessage defaultMessage="Notes" />
          </Heading>
          <ul className="sub-checklist-item">
            <li className="py5">
              <Text>
                <FormattedMessage defaultMessage="Avoid overly-complicated setups and be aware of trade offs. Being offline for brief periods of time will result in small inactivity penalities, but will be recouped easily after being online again for about the same amount of time. Complicated power backups can add to the expense of your setup, and redundant backup validators can lead to slashing." />{' '}
                <Link primary inline to="/faq#responsibilities">
                  <FormattedMessage defaultMessage="More on slashing risks" />
                </Link>
              </Text>
            </li>
            <li className="py5">
              <Text>
                <FormattedMessage defaultMessage="Syncing your Execution client may take a few days in the worst-case scenario." />
              </Text>
            </li>
          </ul>
        </section>
        <SectionHeader id="section-two">
          <Heading level={3}>
            <FormattedMessage defaultMessage="Section 2 - During setup" />
            <Text className="mt10">
              <FormattedMessage defaultMessage="Use this as a reference during client setup to check off important steps." />
            </Text>
          </Heading>
        </SectionHeader>
        <section>
          <Heading level={3}>
            <FormattedMessage defaultMessage="Initial setup" />
          </Heading>
          <ul className="sub-checklist-item">
            <li className="py5">
              <Text>
                <FormattedMessage defaultMessage="Start by setting up your chosen hardware and operating system." />
              </Text>
            </li>
            <li className="py5">
              <Text>
                <FormattedMessage
                  defaultMessage="To maximize security and efficiency of your node, use dedicated
                    hardware to run your clients. This reduces risk of malware exposure and minimizes competition
                    for computing resources, ensuring your node handles the network load and its validator
                    responsibilities at all times."
                />
              </Text>
            </li>
          </ul>
        </section>
        <section>
          <Heading level={3}>
            <FormattedMessage defaultMessage="Node security" />
          </Heading>

          <CheckBox
            label={
              <Text className="checkbox-label">
                <FormattedMessage defaultMessage="I've secured the root account." />
              </Text>
            }
          />
          <CheckBox
            label={
              <Text className="checkbox-label">
                <FormattedMessage defaultMessage="I've set up a firewall." />
              </Text>
            }
          />
          <CheckBox
            label={
              <Text className="checkbox-label">
                <FormattedMessage
                  defaultMessage="I've forwarded the necessary ports to the correct machine(s)
                    from my router (only open the ports that apply to your installation)."
                />
              </Text>
            }
          />
          <PortTable>
            <thead>
              <tr>
                <th>
                  <FormattedMessage defaultMessage="Service" />
                </th>
                <th>
                  <FormattedMessage defaultMessage="Default Port" />
                </th>
                <th>
                  <FormattedMessage defaultMessage="Protocol" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Execution</td>
                <td>30405</td>
                <td>TCP</td>
              </tr>
              <tr>
                <td>Consensus</td>
                <td>
                  12000
                  <br />
                  13000
                </td>
                <td>
                  UDP
                  <br />
                  TCP
                </td>
              </tr>
            </tbody>
          </PortTable>
        </section>
        <section>
          <Heading level={3}>
            <FormattedMessage defaultMessage="Configure time sync" />
          </Heading>
          <Text className="mt20">
            <FormattedMessage
              defaultMessage="For {operatingSystem}"
              values={{
                operatingSystem: 'Ubuntu 20.04',
              }}
              description="Indicates which operating system the instructions are for"
            />
          </Text>
          <ul className="sub-checklist-item">
            <li className="py5">
              <Text>
                <FormattedMessage defaultMessage="Run the following command:" />
              </Text>
              <CodeSnippet>
                <code>timedatectl</code>
              </CodeSnippet>
            </li>
            <li className="py5">
              <Text>
                <FormattedMessage
                  defaultMessage="Check if {code1} is {code2}."
                  values={{
                    code1: <Code>NTP Service</Code>,
                    code2: <Code>active</Code>,
                  }}
                  description="{code} values are terminal outputs to look for, should not translate"
                />
              </Text>
            </li>
            <li className="py5">
              <Text>
                <FormattedMessage
                  defaultMessage="Check if {code1}, {code2}, and {code3} are all correct."
                  values={{
                    code1: <Code>Local time</Code>,
                    code2: <Code>Time zone</Code>,
                    code3: <Code>Universal time</Code>,
                  }}
                  description="{code} values are terminal outputs to look for to confirm system time"
                />
              </Text>
            </li>
            <li className="py5">
              <Text>
                <FormattedMessage
                  defaultMessage="If {code1} is not {code2}, run: {code3}"
                  values={{
                    code1: <Code>NTP Service</Code>,
                    code2: <Code>active</Code>,
                    code3: (
                      <CodeSnippet>
                        <code>sudo timedatectl set-ntp on</code>
                      </CodeSnippet>
                    ),
                  }}
                  description="{code} values are terminal outputs and commands."
                />
              </Text>
            </li>
            <li className="py5">
              <Text>
                <FormattedMessage
                  defaultMessage="If you see error message {code1}, you may need to install {code2} or {code3} package."
                  values={{
                    code1: <Code>Failed to set ntp: NTP not supported</Code>,
                    code2: <Code>chrony</Code>,
                    code3: <Code>ntp</Code>,
                  }}
                  description="{code} values are terminal outputs and commands."
                />
              </Text>
            </li>
            <li className="py5">
              <Text>
                <FormattedMessage defaultMessage="Note: by default, VMs may disable NTP so you may need to find a work-around for your environment." />
              </Text>
            </li>
          </ul>
          <CheckBox
            label={
              <Text className="checkbox-label" style={{ display: 'inherit' }}>
                <FormattedMessage defaultMessage="I've verified my server time matches the wall clock." />
              </Text>
            }
          />
          <ul className="sub-checklist-item">
            <li className="py5">
              <Text>
                <FormattedMessage
                  defaultMessage="Note: the RTC (Real-Time Clock) time may be set to your local timezone
                    instead of UTC, especially in a VM which has its clock configured on Windows."
                />
              </Text>
            </li>
          </ul>
        </section>
        <Alert variant="error" className="my40 mx15">
          <Heading level={4}>
            <FormattedMessage defaultMessage="Testnet practice" />
          </Heading>
          <Text className="mt20">
            <FormattedMessage
              defaultMessage="We strongly recommended you complete these steps on the current testnet
                before mainnet."
            />
            {'  '}
            <Link inline primary to={TESTNET_LAUNCHPAD_URL}>
              {TESTNET_LAUNCHPAD_NAME}
            </Link>
          </Text>
        </Alert>
        <section>
          <Heading level={3}>
            <FormattedMessage defaultMessage="Configure your Execution Client" />
          </Heading>
          <CheckBox
            label={
              <Text className="checkbox-label">
                <FormattedMessage
                  defaultMessage="I've installed and synced my Execution node on {network} (do not wait on this as it can take a while)."
                  values={{
                    network: IS_MAINNET ? 'LUKSO Mainnet' : 'LUKSO L16 Beta',
                  }}
                />
              </Text>
            }
          />
        </section>
        <section>
          <Heading level={3}>
            <FormattedMessage defaultMessage="L16 Consensus Node (CN)" />
          </Heading>
          <Heading level={4} className="mt10">
            <FormattedMessage defaultMessage="Required" />
          </Heading>
          <CheckBox
            label={
              <Text className="checkbox-label">
                <FormattedMessage defaultMessage="I'm able to connect my L16 Consensus node to my Execution client via HTTP API(s)." />
              </Text>
            }
          />
          <ul className="sub-checklist-item">
            <li className="py5">
              <Text>
                <FormattedMessage defaultMessage="Verify it with the following command to check if it returns the client version correctly:" />
              </Text>
              <CodeSnippet>
                <code>
                  {`curl -H "Content-Type: application/json" -X POST --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67}' http://127.0.0.1:8545`}
                </code>
              </CodeSnippet>
              <Text>
                <FormattedMessage defaultMessage="Incase Execution runs on another machine, please substitute '127.0.0.1' with the specific IP of your Execution node." />
              </Text>
            </li>
          </ul>
          <CheckBox
            label={
              <Text className="checkbox-label">
                <FormattedMessage
                  defaultMessage="I've synced my L16 Consensus node on {LUKSO_NETWORK_NAME}."
                  values={{ LUKSO_NETWORK_NAME }}
                  description="{LUKSO_NETWORK_NAME} is name of network, do not translate"
                />
              </Text>
            }
          />
          <ul className="sub-checklist-item">
            <li className="py5">
              <Text>
                <FormattedMessage
                  values={{ VANGUARD_MIN_PEERS }}
                  defaultMessage="Make sure that your node has at least {VANGUARD_MIN_PEERS} peers."
                />
              </Text>
            </li>
          </ul>
        </section>
        <section>
          <Heading level={3}>
            <FormattedMessage defaultMessage="L16 Validator Client (VC)" />
          </Heading>
          <Heading level={4} className="mt10">
            <FormattedMessage defaultMessage="Required" />
          </Heading>
          <CheckBox
            label={
              <Text className="checkbox-label">
                <FormattedMessage defaultMessage="I've imported my keystore(s) into my L16 validator client." />
              </Text>
            }
          />
          <CheckBox
            label={
              <Text className="checkbox-label">
                <FormattedMessage
                  defaultMessage="I've ensured my keystore(s) is/are {boldCaution}."
                  values={{
                    boldCaution: (
                      <strong>
                        {formatMessage({
                          defaultMessage:
                            'only stored on one validator machine',
                        })}
                      </strong>
                    ),
                  }}
                  description="{boldCaution} is states 'only stored on one validator machine', a bolded caution statement to users"
                />
              </Text>
            }
          />
          <CheckBox
            label={
              <Text className="checkbox-label">
                <FormattedMessage defaultMessage="I've started running my validator client." />
              </Text>
            }
          />
        </section>
        <SectionHeader id="section-three">
          <Heading level={3}>
            <FormattedMessage defaultMessage="Section 3 - After depositing" />
            <Text className="mt10">
              <FormattedMessage defaultMessage="Protect your funds using monitoring software, and learn how to handle different real world scenarios." />
            </Text>
          </Heading>
          <Alert variant="info" className="mt20">
            <FormattedMessage defaultMessage="These steps are optional but are recommended to optimize your node." />
          </Alert>
        </SectionHeader>
        <section>
          <Heading level={3}>
            <FormattedMessage defaultMessage="Monitoring" />
          </Heading>
          <Heading level={4} className="my10">
            <FormattedMessage defaultMessage="Prometheus and Grafana monitor" />
          </Heading>
          <CheckBox
            label={
              <Text className="checkbox-label">
                <FormattedMessage
                  defaultMessage="I've set up my {prometheus} service."
                  values={{
                    prometheus: (
                      <Link primary inline to="https://prometheus.io/">
                        Prometheus
                      </Link>
                    ),
                  }}
                  description="{prometheus} is 'Prometheus' service, with link to its homepage (do not translate name)"
                />
              </Text>
            }
          />
          <CheckBox
            label={
              <Text className="checkbox-label">
                <FormattedMessage
                  defaultMessage="I've set up my {grafana} service."
                  values={{
                    grafana: (
                      <Link primary inline to="https://grafana.com/">
                        Grafana
                      </Link>
                    ),
                  }}
                  description="{grafana} is 'Grafana' service, with link to its homepage (do not translate name)"
                />
              </Text>
            }
          />
          <CheckBox
            label={
              <Text className="checkbox-label">
                <FormattedMessage
                  defaultMessage="I've imported the dashboard config to my Grafana server
                    and double checked that my node is alive."
                />
              </Text>
            }
          />
        </section>
        <section>
          <Heading level={3}>
            <FormattedMessage defaultMessage="Testnet simulations" />
          </Heading>
          <Text className="my10">
            <FormattedMessage
              defaultMessage="While validating on the testnet, perform these simulations to learn more about your
                node, and better prepare yourself for mainnet:"
            />
          </Text>
          <CheckBox
            label={
              <Text className="checkbox-label">
                <FormattedMessage
                  defaultMessage="I've simulated how to manually stop and restart my Consensus Node (CN)
                    and Validator Client (VC) gracefully."
                />
              </Text>
            }
          />
          <CheckBox
            label={
              <Text className="checkbox-label">
                <FormattedMessage defaultMessage="I've simulated power loss (server and internet) and automatic resumption." />
              </Text>
            }
          />
          <CheckBox
            label={
              <Text className="checkbox-label">
                <FormattedMessage defaultMessage="I've simulated how to migrate from one L16 client to another L16 client." />
              </Text>
            }
          />
        </section>
        <section>
          <Heading level={3}>
            <FormattedMessage defaultMessage="Advanced system architecture" />
          </Heading>
          <ul className="sub-checklist-item">
            <li className="py5">
              <Text>
                <FormattedMessage
                  defaultMessage="To avoid exposing your validator identity to the network, you can use
                    a trustworthy VPN to help reduce the risk of revealing your IP address."
                />
              </Text>
            </li>
            <li className="py5">
              <Text>
                <FormattedMessage
                  defaultMessage="Moreover, you can set your Validator Client (VC) and Consensus Node (BN)
                    on separate machines and IPs so that even if your Consensus node is vulnerable, your
                    keystore is stored on a different machine."
                />
              </Text>
            </li>
          </ul>
        </section>
        <section>
          <Heading level={3} className="mt10">
            <FormattedMessage defaultMessage="Graffiti" />
          </Heading>{' '}
          <Text className="mt10">
            <FormattedMessage
              defaultMessage="You can use your validator client's graffiti flag to add a personal
                touch to your proposed blocks (some text of your choice). You will be able to see
                it using {beaconchain} blockchain explorers."
              values={{
                beaconchain: (
                  <Link primary inline to={BEACONCHAIN_URL}>
                    Beaconcha.in
                  </Link>
                ),
              }}
              description="{variables} are Consensus Chain block explorers, with links to each (do not translate names)"
            />
          </Text>
          <CheckBox
            label={
              <Text className="checkbox-label">
                <FormattedMessage defaultMessage="I've set my graffiti flag." />
              </Text>
            }
          />
        </section>
        <GradientHeader>
          <FormattedMessage
            defaultMessage="If you have questions, the LUKSO community is a good place to get
                  help! You can find support on the {discord} #validators channel."
            values={{
              discord: (
                <Link primary inline to="https://discord.gg/E2rJPP4">
                  Discord
                </Link>
              ),
            }}
            description="{discord} is a link to the LUKSO Discord (do not translate names)"
          />
        </GradientHeader>
      </ChecklistPageStyles>
    </PageTemplate>
  );
};
