import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useMediaQuery } from 'react-responsive'
import styles from './styles.module.css';
import screens from '../utils/responsive';

import SAMLSvg from '../components/svg/saml';
import BoilerplateSvg from '../components/svg/boilerplate';
import TeamDocsSvg from '../components/svg/team_docs';

const features = [
  {
    title: <>Treat SAML as OAuth</>,
    description: (
      <>
        Osso authenticates users against SAML Identity Provider services,
        normalizes user payloads, and provides an OAuth server to sign those
        users into your application.
      </>
    ),
    Component: SAMLSvg,
  },
  {
    title: <>Configuration Boilerplate</>,
    description: (
      <>
        Osso provides an admin UI, configuration API, and React components you can use in your
        own application to onboard enterprise accounts and configure their SAML Identity Provider.
      </>
    ),
    Component: BoilerplateSvg,
  },
  {
    title: <>Docs for Your Whole Team</>,
    description: (
      <>
        Beyond technical documentation, Osso provides guides and
        docs for your sales and success teams and your enterprise
        customers to make onboarding SAML accounts smooth sailing.
      </>
    ),
    Component: TeamDocsSvg,
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const isLargeScreen = useMediaQuery({ query: screens.large })

  return (
    <Layout
      title={siteConfig.title}
      description="A free open source software for SSO auth">
      <div className={styles.heroContainer}>
        <header className={classnames('hero', styles.heroBanner)}>
          <div className={styles.heroCopy}>
            <p>
              Authenticate Single Sign-On users
              with free, open source software
          </p>
            <div className={styles.buttons}>
              <Link
                className={classnames(
                  'button button--primary button--lg',
                  styles.getStarted,
                )}
                to={useBaseUrl('docs/what-is-saml')}>
                Get Started
            </Link>
            </div>
          </div>
          {isLargeScreen && <img className={styles.heroImage} src={'img/losso2.svg'} alt='background image' />}
        </header>
      </div>
      <main>
        <section className={styles.features}>
          <div className="container">
            {features.map(({ title, description, Component }, idx) => (
              <div key={idx} className={classnames("row", styles.row)} >
                <div className='col'>
                  <h3>
                    {isLargeScreen && <span className={styles.titleMarker} />}
                    {title}
                  </h3>
                  <p>{description}</p>
                </div>
                <div className={classnames("col", styles.imageContainer)} >
                  <Component />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout >
  );
}

export default Home;
