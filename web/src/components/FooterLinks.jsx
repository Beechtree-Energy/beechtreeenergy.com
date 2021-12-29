import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/FontAwesomeIconLibrary';

import { Section, Container, Flex, Grid, Col, AnchorText } from '.';
import { useSanity } from '../hooks';

const FooterLinks = () => {
  const {
    logo,
    footers,
    settings,
    primary,
    secondary,
    accent,
    neutral,
    hero,
    info,
  } = useSanity();

  const nap = [
    {
      icon: 'fas fa-phone',
      anchor: info.phone,
      url: info.phoneUrl,
    },
    {
      icon: 'fas fa-envelope',
      anchor: info.emailAddress,
      url: info.emailUrl,
    },
    {
      icon: 'fas fa-map-marker-alt',
      anchor: info.address,
      url: info.addressUrl,
    },
    {
      icon: 'fas fa-clock',
      anchor: info.hours,
      url: info.hoursUrl,
    },
  ];

  return (
    <Section padding="sm" bgColor={neutral.lighter.color}>
      <Container padding="sm" classes="py-12 lg:py-16">
        <Grid classes="grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-24 mx-auto justify-center">
          <Col classes="col-span-1 space-y-6">
            <div className="mx-auto text-center">
              <GatsbyImage
                image={logo.footer?.asset?.gatsbyImageData}
                alt={`${settings.name} company logo`}
                loading="lazy"
                className="w-56 transition hover:scale-110"
              />
            </div>
            {footers.map((footer) => (
              <p
                key={footer.id}
                className="text-primary text-base text-center italic max-w-xs mx-auto gap"
              >
                {footer.tagline}
              </p>
            ))}
            <div className="flex space-x-6 justify-center">
              {footers.map((item) =>
                item.socialLinks.map((social) => (
                  <AnchorText
                    type="external"
                    color={accent.default.color}
                    colorHover={primary.dark.color}
                    key={social.id}
                    href={social.url}
                  >
                    <FontAwesomeIcon
                      className="!text-3xl"
                      icon={['fab', social.icon]}
                    />
                    <span className="text-md font-thin sr-only">
                      {social.anchor}
                    </span>
                  </AnchorText>
                ))
              )}
            </div>
          </Col>
          <Col classes="col-span-2">
            <Grid classes="grid-cols-1 lg:grid-cols-3 gap-12 mx-auto justify-end">
              {footers.map((footer) =>
                footer.footerItem.map((item) => (
                  <Col key={item._key} classes="mt-12 xl:mt-0">
                    <h4 className="text-md font-semibold text-zinc-800 tracking-tight uppercase">
                      {item.headline}
                    </h4>
                    <ul className="mt-4 space-y-4">
                      {item.links.map((link) => (
                        <li key={link.id}>
                          <AnchorText
                            type="internal"
                            color={neutral.default.color}
                            colorHover={accent.default.color}
                            to={
                              link.metadata.slug.current === 'home'
                                ? '/'
                                : `/${link.metadata.slug.current}/`
                            }
                            className="text-base break-words"
                          >
                            <span className="break-words">{link.anchor}</span>
                          </AnchorText>
                        </li>
                      ))}
                    </ul>
                  </Col>
                ))
              )}
              <Col classes="mt-12 xl:mt-0">
                <h4 className="text-md font-semibold text-zinc-800 tracking-wider uppercase">
                  Get In Touch
                </h4>
                <ul className="mt-4 space-y-4">
                  {nap.map((item) => (
                    <li key={item.anchor}>
                      <AnchorText
                        type="external"
                        color={neutral.default.color}
                        colorHover={accent.default.color}
                        href={item.url}
                        className="text-base break-all"
                      >
                        {item.anchor}
                      </AnchorText>
                    </li>
                  ))}
                </ul>
              </Col>
            </Grid>
          </Col>
        </Grid>
      </Container>
    </Section>
  );
};

export default FooterLinks;
