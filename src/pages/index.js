import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    description: (
      <>
        This is my own approach how I think, you should set up a home server. It is a result of many different solutions I've come through the last years and is to this point the most complete and advanced solution. I call it `Nextcloud NAS` because it has features that go far beyond what any other Nextcloud solution offers, especially in terms of server and security features. Most NAS devices have features like a built-in backup solution, a built-in SMB-server and much more. And this is exactly what this solution provides. Please note that most of those features are provided by the <a href='https://github.com/nextcloud/vm'>Nextcloud-VM</a> which you will use to set up your server.<br/><br/>
Here is a not complete list of things that this guide covers: hardware recommendations, UEFI/Bios configuration, Ubuntu Installation, Nextcloud installation, full disk encryption, TPM2 unlocking, Let's encrypt for getting valid certificates, Automatic Updates, geoblocking to allow access to your server only from specific countries/continents, server mail notifications, disk monitoring and notifications, Fail2Ban to block too much failed login attempts, previewgenerator to speed up preview loading in Nextcloud, ClamAV for scanning and detecting your files for malware, a complete backup solution, a way to manage a full fletched SMB-server, Pi-hole as network wide ad-blocker, PiVPN as VPN-server, Bitwarden RS as open-source password server, OnlyOffice Documentserver integrations for Nextcloud, and High-performance backend for Nextcloud Talk.<br/><br/>
In the future, this guide will cover optional addons like: a media server, a way to easily manage your media collection directly on your server and more.
      </>
    ),
    footer: (
      <>
      If you are interested in this solution, please start reading <a href='./docs'>here</a>
      </>
    )
  },/*
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },*/
];

function Feature({imageUrl, title, description, footer}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--12', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <h4>{footer}</h4>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Instructions how to set up a home server">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
