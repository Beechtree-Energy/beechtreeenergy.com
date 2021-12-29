import S from '@sanity/desk-tool/structure-builder';
import {
  FaAddressCard as iconInfo,
  FaAddressCard as iconNap,
  FaBrush as iconDesign,
  FaBuilding as iconBusiness,
  FaClone as iconPages,
  FaCode as iconMetadata,
  FaCog as iconSettings,
  FaCommentDots as iconTestimonials,
  FaGlobe as iconSEO,
  FaPalette as iconColors,
  FaPencilAlt as iconPosts,
  FaShareAlt as iconSocials,
  FaTag as iconTags,
  FaUpload as iconLogo,
  FaUserEdit as iconAuthors,
  FaUsers as iconTeam,
} from 'react-icons/fa';
import { SiGooglemybusiness as iconGMB } from 'react-icons/si';
import { RiLayout5Fill as iconLayouts } from 'react-icons/ri';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Business')
        .icon(iconBusiness)
        .child(
          S.list()
            .title('Business')
            .items([
              S.listItem()
                .title('Sitewide Settings')
                .icon(iconSettings)
                .child(
                  S.document()
                    .title('Sitewide Settings')
                    .schemaType('businessSettings')
                    .documentId('businessSettings')
                ),
              S.listItem()
                .title('General Information')
                .icon(iconInfo)
                .child(
                  S.document()
                    .title('General Information')
                    .schemaType('businessInfo')
                    .documentId('businessInfo')
                ),
              S.listItem()
                .title('Google Business Profiles')
                .icon(iconGMB)
                .schemaType('gmb')
                .child(S.documentTypeList('gmb').title('GMBs')),
              S.listItem()
                .title('Social Media Profiles')
                .icon(iconSocials)
                .schemaType('social')
                .child(S.documentTypeList('social').title('Socials')),
              S.listItem()
                .title('Team Members')
                .icon(iconTeam)
                .schemaType('employee')
                .child(S.documentTypeList('employee').title('Team Members')),
              S.listItem()
                .title('Client Testimonials')
                .icon(iconTestimonials)
                .schemaType('gmb')
                .child(S.documentTypeList('gmb').title('GMBs')),
            ])
        ),
      S.listItem()
        .title('Design')
        .icon(iconDesign)
        .child(
          S.list()
            .title('Design')
            .items([
              S.listItem()
                .title('Company Logos')
                .icon(iconLogo)
                .child(
                  S.document()
                    .title('Company Logos')
                    .schemaType('businessLogo')
                    .documentId('businessLogo')
                ),
              S.listItem()
                .title('Color Palette')
                .icon(iconColors)
                .child(
                  S.list()
                    .title('Color Palette')
                    .items([
                      S.listItem()
                        .title('Primary')
                        .icon(iconColors)
                        .child(
                          S.document()
                            .title('Primary')
                            .schemaType('colorsPrimary')
                            .documentId('colorsPrimary')
                        ),
                      S.listItem()
                        .title('Secondary')
                        .icon(iconColors)
                        .child(
                          S.document()
                            .title('Secondary')
                            .schemaType('colorsSecondary')
                            .documentId('colorsSecondary')
                        ),
                      S.listItem()
                        .title('Accent')
                        .icon(iconColors)
                        .child(
                          S.document()
                            .title('Accent')
                            .schemaType('colorsAccent')
                            .documentId('colorsAccent')
                        ),
                      S.listItem()
                        .title('Neutral')
                        .icon(iconColors)
                        .child(
                          S.document()
                            .title('Neutral')
                            .schemaType('colorsNeutral')
                            .documentId('colorsNeutral')
                        ),
                      S.listItem()
                        .title('Hero')
                        .icon(iconColors)
                        .child(
                          S.document()
                            .title('Hero')
                            .schemaType('colorsHero')
                            .documentId('colorsHero')
                        ),
                    ])
                ),
              S.listItem()
                .title('Page Layouts')
                .icon(iconLayouts)
                .child(
                  S.list()
                    .title('Page Layouts')
                    .items([
                      S.listItem()
                        .title('Navbars')
                        .icon(iconLayouts)
                        .child(
                          S.document()
                            .title('Navbars')
                            .schemaType('navbars')
                            .documentId('navbars')
                        ),
                      S.listItem()
                        .title('Footers')
                        .icon(iconLayouts)
                        .child(
                          S.document()
                            .title('Footers')
                            .schemaType('footers')
                            .documentId('footers')
                        ),
                      S.listItem()
                        .title('Sidebars')
                        .icon(iconLayouts)
                        .child(
                          S.document()
                            .title('Sidebars')
                            .schemaType('footers')
                            .documentId('footers')
                        ),
                      S.listItem()
                        .title('Forms')
                        .icon(iconLayouts)
                        .child(
                          S.document()
                            .title('Forms')
                            .schemaType('forms')
                            .documentId('forms')
                        ),
                    ])
                ),
            ])
        ),

      S.listItem()
        .title('Pages')
        .icon(iconPages)
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        .title('Tags')
        .icon(iconTags)
        .schemaType('tag')
        .child(S.documentTypeList('tag').title('Tags')),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'businessInfo',
            'businessLogo',
            'businessSettings',
            'colorsAccent',
            'colorsHero',
            'colorsNeutral',
            'colorsPrimary',
            'colorsSecondary',
            'employee',
            'footers',
            'forms',
            'gmb',
            'logo',
            'navbars',
            'page',
            'settingsMetadata',
            'social',
            'tag',
            'media.tag',
          ].includes(listItem.getId())
      ),
    ]);
