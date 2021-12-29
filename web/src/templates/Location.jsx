import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO, PageBuilder } from '../components';
import { useSanity } from '../hooks';

export const query = graphql`
  query LocationsTemplateQ($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      id
      pageType
      metadata {
        title
        slug {
          current
        }
        description
        schema {
          code
        }
      }
      ...PageBuilder
    }
  }
`;

const LocationsTemplate = (props) => {
  const { data } = props;
  const page = data && data.page;
  const { pageBuilder, _rawPageBuilder } = page;

  const sanity = data.page;

  const { settings, info } = useSanity();

  const seo = {
    title: sanity.metadata.title,
    description: sanity.metadata.description,
    slug: `${info.websiteUrl}/${sanity.metadata.slug.current}/`,
    schema: sanity.metadata.schema.code,
  };

  return (
    <Layout layout={sanity.pageType}>
      <SEO title={seo.title} description={seo.description} canonical={seo.slug}>
        <script type="application/ld+json">{`${seo.schema}`}</script>
      </SEO>
      <PageBuilder
        pageBuilder={pageBuilder}
        _rawPageBuilder={_rawPageBuilder}
      />
    </Layout>
  );
};

export default LocationsTemplate;
