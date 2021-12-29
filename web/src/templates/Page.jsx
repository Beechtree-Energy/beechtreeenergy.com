import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import { Layout, SEO, PageBuilder } from '../components';
import { useSanity } from '../hooks';

export const query = graphql`
  query PageTemplateQ($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      ...PageBuilder
      id
      pageType
      metadata {
        isIndexed
        title
        slug {
          current
        }
        description
        schema {
          code
        }
      }
    }
  }
`;

const PageTemplate = function (props) {
  const { data } = props;
  const page = data && data.page;
  const { pageBuilder, _rawPageBuilder } = page;

  const sanity = data.page;

  const { settings, info } = useSanity();

  const pageSEO = {
    title: sanity.metadata.title,
    description: sanity.metadata.description,
    slug: `${info.websiteUrl}/${sanity.metadata.slug.current}/`,
    schema: sanity?.metadata?.schema?.code,
  };

  return (
    <Layout layout={sanity.pageType}>
      <SEO
        title={pageSEO.title}
        description={pageSEO.description}
        canonical={pageSEO.slug}
      >
        <script type="application/ld+json">{`${pageSEO.schema}`}</script>
      </SEO>
      <Helmet>
        <meta
          name="robots"
          content={
            settings.isIndexed === false
              ? 'noindex, nofollow'
              : sanity.metadata.isIndexed === true
              ? 'index, follow'
              : 'noindex, nofollow'
          }
        />
      </Helmet>
      <PageBuilder
        pageBuilder={pageBuilder}
        _rawPageBuilder={_rawPageBuilder}
      />
    </Layout>
  );
};

export default PageTemplate;
