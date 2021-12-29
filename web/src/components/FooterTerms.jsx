import React from 'react';

import { Section, Container, AnchorText } from '.';
import { useSanity } from '../hooks';

const FooterTerms = () => {
  const { settings, primary, secondary, accent, neutral, hero, info } =
    useSanity();

  return (
    <Section
      bgColor={neutral.darker.color}
      padding="sm"
      classes="border-t border-zinc-200"
    >
      <Container padding="sm">
        <p className="text-base text-zinc-200 text-center">
          © {new Date().getFullYear()} {settings.name}, All Rights Reserved
          {` `}
        </p>
        <p className="text-sm text-zinc-200 text-center">
          <AnchorText
            type="internal"
            color={accent.default.color}
            colorHover={accent.light.color}
            to="/privacy/"
          >
            Privacy Policy
          </AnchorText>{' '}
          |{' '}
          <AnchorText
            type="internal"
            color={accent.default.color}
            colorHover={accent.light.color}
            to="/accessibility/"
          >
            Website Accessibility
          </AnchorText>{' '}
          |{' '}
          <AnchorText
            type="external"
            color={accent.default.color}
            colorHover={accent.light.color}
            href={`${info.websiteUrl}/sitemap.xml`}
          >
            Website Sitemap
          </AnchorText>
        </p>
      </Container>
    </Section>
  );
};

export default FooterTerms;
