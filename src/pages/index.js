import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Built around Nextcloud',
    imageUrl: 'img/undraw_file_sync_ot38.svg',
    description: (
      <>
        <a href="https://nextcloud.com" >Nextcloud</a> is the core server application of this guide that itself features many great expansions via the appstore and apps for almost all devices. 
      </>
    ),
  },
  {
    title: 'Expandable',
    imageUrl: 'img/undraw_features_overview_jg7a.svg',
    description: (
      <>
        Besides the expandable Nextcloud itself, this guide covers many optional additions that bring your server and Nextcloud to the next level.
      </>
    ),
  },
  {
    title: 'Built-in backup solution',
    imageUrl: 'img/undraw_server_q2pb.svg',
    description: (
      <>
        By following this guide, you will configure your own backups that will safe you much time in case of any server damage and prevent you from data loss.
      </>
    ),
  },
  {
    title: 'Many security features',
    imageUrl: 'img/undraw_Security_on_ff2u.svg',
    description: (
      <>
        Since you are going to connect your server to the public internet, many security features are covered by this guide that ensure that your server is secure.
      </>
    ),
  },
  {
    title: 'Built-in SMB-server',
    imageUrl: 'img/undraw_cloud_sync_2aph.svg',
    description: (
      <>
        By following this guide, you will configure a SMB-server that ensures that you always achieve the best read and write performance that is possible inside your LAN on any device.
      </>
    ),
  },
  {
    title: 'Complete guide',
    imageUrl: 'img/undraw_project_completed_w0oq.svg',
    description: (
      <>
        This guide covers everything, from hardware requirements and considerations, over Nextcloud, security and network setup to optional additions and much more.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
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
