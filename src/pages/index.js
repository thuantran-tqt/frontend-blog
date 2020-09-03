import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Mục đích của Blog</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Blog này được lập ra với mục đích để mình viết tài liệu về những gì mình đã được học từ thầy, từ những khóa học, ... nằm trong <code>documentation</code> directory. Để mình có thể ôn lại bất kỳ lúc này cũng nhau nhiều năm sau mình có một nơi lưu trữ chặng đường mình đã đi qua và có cái để nhìn lại mình đã học và làm được gì.
      </>
    ),
  },

  {
    title: <>Dành cho Beginners</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Mình là một người bắt đầu từ con số 0 trong lĩnh vực Front-end. Mình tin rằng Blog này có thể giúp các bạn bắt đầu từ con số 0 như mình có thể tìm được định hướng đúng để phát triển sự nghiệp trong lĩnh vực lập trình.
      </>
    ),
  },

  {
    title: <>Lưu ý quan trọng</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Vì mục đích chính của Blog này là tổng hợp những kiến thức mình đã học nên mình không có dự định share rộng rãi cho nhiều người. Các bạn có vô tình xem được ở đâu đó thì hãy xem đó như một tài liệu tham khảo mà thôi.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
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
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Homepage`}
      description="Edward Tran's Front-end Blog about Front-end topics, included: HTML5, CSS3, Responsive, Boostrap, SCSS, Git, JavaScript, ReactJS and many things ...">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
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
