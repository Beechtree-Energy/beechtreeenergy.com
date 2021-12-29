import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const useSanitySettings = () => {
  const data = useStaticQuery(graphql`
    query useSanitySettingsQ {
      sanityBusinessSettings {
        isIndexed
        title
        description
        author
        image {
          alt
          asset {
            gatsbyImageData(placeholder: BLURRED, formats: WEBP)
          }
        }
      }
      sanityBusinessInfo {
        address
        addressUrl
        emailAddress
        emailUrl
        hours
        hoursUrl
        name
        owner
        phone
        phoneUrl
        websiteUrl
      }
      sanityBusinessLogo {
        navbar {
          alt
          asset {
            gatsbyImageData(
              placeholder: BLURRED
              formats: WEBP
              layout: FIXED
              height: 75
            )
          }
        }
        footer {
          alt
          asset {
            gatsbyImageData(placeholder: BLURRED, formats: WEBP)
          }
        }
        favicon {
          alt
          asset {
            gatsbyImageData(placeholder: BLURRED, formats: WEBP)
          }
        }
      }
      allSanitySocial {
        nodes {
          _id
          anchor
          url
          icon
        }
      }
      allSanityNavbars {
        nodes {
          _key
          layout
          primaryNavCtaButtonLabel
          primaryNavCtaButtonLink {
            metadata {
              slug {
                current
              }
            }
          }
          navItem {
            _key
            type
            dropdowns {
              _key
              label
              links {
                _key
                anchor
                metadata {
                  _key
                  slug {
                    current
                  }
                }
              }
            }
            pageLinks {
              _key
              anchor
              metadata {
                _key
                slug {
                  current
                }
              }
            }
          }
          socialLinks {
            _id
            id
            anchor
            url
            icon
          }
        }
      }
      allSanityFooters {
        nodes {
          id
          layout
          gmb {
            gmbEmbed
          }
          tagline
          bgImg {
            alt
            asset {
              gatsbyImageData(placeholder: BLURRED, formats: WEBP)
            }
          }
          footerItem {
            _key
            headline
            links {
              id
              anchor
              metadata {
                slug {
                  current
                }
              }
            }
          }
          socialLinks {
            id
            anchor
            url
            icon
          }
        }
      }
      sanityColorsAccent {
        dark {
          color
        }
        darker {
          color
        }
        default {
          color
        }
        light {
          color
        }
        lighter {
          color
        }
      }
      sanityColorsHero {
        headline {
          color
        }
        overlay {
          color
        }
        tagline {
          color
        }
      }
      sanityColorsNeutral {
        dark {
          color
        }
        darker {
          color
        }
        default {
          color
        }
        light {
          color
        }
        lighter {
          color
        }
        white {
          color
        }
        black {
          color
        }
      }
      sanityColorsPrimary {
        dark {
          color
        }
        darker {
          color
        }
        default {
          color
        }
        light {
          color
        }
        lighter {
          color
        }
      }
      sanityColorsSecondary {
        dark {
          color
        }
        darker {
          color
        }
        default {
          color
        }
        light {
          color
        }
        lighter {
          color
        }
      }
      allSanityForms {
        nodes {
          id
          layout
          headline
          _rawTagline
        }
      }
    }
  `);

  // const metadata = data.sanityBusinessMetadata;
  const accent = data.sanityColorsAccent;
  const footers = data.allSanityFooters.nodes;
  const forms = data.allSanityForms.nodes;
  const hero = data.sanityColorsHero;
  const info = data.sanityBusinessInfo;
  const logo = data.sanityBusinessLogo;
  const navbars = data.allSanityNavbars.nodes;
  const neutral = data.sanityColorsNeutral;
  const primary = data.sanityColorsPrimary;
  const secondary = data.sanityColorsSecondary;
  const settings = data.sanityBusinessSettings;
  const socials = data.allSanitySocial.nodes;

  return {
    info,
    // logos,
    // locations,
    // metadata,
    accent,
    footers,
    forms,
    hero,
    logo,
    navbars,
    neutral,
    primary,
    secondary,
    settings,
    socials,
  };
};

export default useSanitySettings;
