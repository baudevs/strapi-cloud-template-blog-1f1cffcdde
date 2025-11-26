import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsCompass extends Struct.ComponentSchema {
  collectionName: 'components_sections_compasses';
  info: {
    description: 'Interactive compass visualization with configurable directions';
    displayName: 'Compass Section';
    icon: 'compass';
  };
  attributes: {
    badge: Schema.Attribute.String;
    closingStatement: Schema.Attribute.Text;
    description: Schema.Attribute.RichText;
    directions: Schema.Attribute.Component<'shared.compass-direction', true>;
    hoverText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Hover over the compass to explore each direction. Click on any point to learn more.'>;
    sectionId: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['dark', 'light']> &
      Schema.Attribute.DefaultTo<'dark'>;
  };
}

export interface SectionsContentWithStats extends Struct.ComponentSchema {
  collectionName: 'components_sections_content_with_stats';
  info: {
    description: 'A section combining content paragraphs with statistics cards and subsections';
    displayName: 'Content With Stats';
    icon: 'chartLine';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    badge: Schema.Attribute.String;
    closingStatement: Schema.Attribute.RichText;
    content: Schema.Attribute.RichText;
    stats: Schema.Attribute.Component<'shared.stat-card', true>;
    subsections: Schema.Attribute.Component<'shared.content-subsection', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['dark', 'light']> &
      Schema.Attribute.DefaultTo<'dark'>;
  };
}

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta';
  info: {
    displayName: 'CTA Section';
    icon: 'cursor';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.cta-button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.cta-button', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    description: 'Frequently Asked Questions section with relation to FAQ collection';
    displayName: 'FAQ Section';
    icon: 'question-circle';
  };
  attributes: {
    displayStyle: Schema.Attribute.Enumeration<['accordion', 'grid', 'list']> &
      Schema.Attribute.DefaultTo<'accordion'>;
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_sections_features';
  info: {
    displayName: 'Features Section';
    icon: 'grid';
  };
  attributes: {
    badge: Schema.Attribute.String;
    features: Schema.Attribute.Component<'shared.feature-card', true>;
    introText: Schema.Attribute.Text;
    sectionId: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['dark', 'light']> &
      Schema.Attribute.DefaultTo<'light'>;
  };
}

export interface SectionsHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_sections_how_it_works';
  info: {
    displayName: 'How It Works Section';
    icon: 'cog';
  };
  attributes: {
    badge: Schema.Attribute.String;
    earlyWarningContent: Schema.Attribute.RichText;
    earlyWarningTitle: Schema.Attribute.String;
    sectionId: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'shared.feature-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['dark', 'light']> &
      Schema.Attribute.DefaultTo<'dark'>;
  };
}

export interface SectionsHubspotForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_hubspot_forms';
  info: {
    displayName: 'HubSpot Form Section';
    icon: 'envelope';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    badge: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    hubspotForm: Schema.Attribute.Relation<
      'oneToOne',
      'api::hubspot-form.hubspot-form'
    >;
    sectionId: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['dark', 'light']> &
      Schema.Attribute.DefaultTo<'dark'>;
  };
}

export interface SectionsMethodology extends Struct.ComponentSchema {
  collectionName: 'components_sections_methodology';
  info: {
    displayName: 'Methodology Section';
    icon: 'book';
  };
  attributes: {
    badge: Schema.Attribute.String;
    compassBadge: Schema.Attribute.String;
    compassDescription: Schema.Attribute.RichText;
    compassIntro: Schema.Attribute.Text;
    compassTitle: Schema.Attribute.String;
    humanLedBadge: Schema.Attribute.String;
    humanLedContent: Schema.Attribute.RichText;
    humanLedTitle: Schema.Attribute.String;
    methodologyDescription: Schema.Attribute.RichText;
    methodologyHighlight: Schema.Attribute.String;
    methodologyTitle: Schema.Attribute.String;
    optimisingClosing: Schema.Attribute.Text;
    optimisingContent: Schema.Attribute.RichText;
    optimisingTitle: Schema.Attribute.String;
    principles: Schema.Attribute.Component<'shared.feature-card', true>;
    sectionId: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['dark', 'light']> &
      Schema.Attribute.DefaultTo<'light'>;
  };
}

export interface SectionsPricing extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricings';
  info: {
    description: 'Pricing table section with multiple pricing tiers';
    displayName: 'Pricing Section';
    icon: 'dollar-sign';
  };
  attributes: {
    ctaText: Schema.Attribute.Text;
    popularLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Most Popular'>;
    pricingTiers: Schema.Attribute.Component<'shared.pricing-tier', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsServicesGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_grids';
  info: {
    description: 'Grid display of services with relation to Service collection';
    displayName: 'Services Grid';
    icon: 'grid';
  };
  attributes: {
    buttonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Learn More'>;
    layout: Schema.Attribute.Enumeration<
      ['grid-2', 'grid-3', 'grid-4', 'list']
    > &
      Schema.Attribute.DefaultTo<'grid-3'>;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTeam extends Struct.ComponentSchema {
  collectionName: 'components_sections_team';
  info: {
    description: 'Full team section with story, members, and mission statement';
    displayName: 'Team Section';
    icon: 'users';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    badge: Schema.Attribute.String;
    closingStatement: Schema.Attribute.String;
    missionContent: Schema.Attribute.RichText;
    missionTitle: Schema.Attribute.String;
    storyContent: Schema.Attribute.RichText;
    storyTitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    teamMembers: Schema.Attribute.Component<'shared.team-member', true>;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['dark', 'light']> &
      Schema.Attribute.DefaultTo<'light'>;
  };
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonials Section';
    icon: 'heart';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    testimonials: Schema.Attribute.Component<'shared.testimonial', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCompassDirection extends Struct.ComponentSchema {
  collectionName: 'components_shared_compass_directions';
  info: {
    description: 'A single direction point on the compass (N, E, S, W)';
    displayName: 'Compass Direction';
    icon: 'compass';
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#00FF72'>;
    description: Schema.Attribute.Text;
    details: Schema.Attribute.Text;
    iconName: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Target'>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'NORTH'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_infos';
  info: {
    description: 'Contact information widget for footer';
    displayName: 'Contact Info';
    icon: 'phone';
  };
  attributes: {
    additionalInfo: Schema.Attribute.RichText;
    showAddress: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showEmail: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showPhone: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SharedContentSubsection extends Struct.ComponentSchema {
  collectionName: 'components_shared_content_subsections';
  info: {
    description: 'A titled subsection with rich text content';
    displayName: 'Content Subsection';
    icon: 'layer';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SharedCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_buttons';
  info: {
    description: 'Call to action button';
    displayName: 'CTA Button';
    icon: 'cursor';
  };
  attributes: {
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'outline', 'ghost']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface SharedFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_cards';
  info: {
    description: 'Feature card with icon, title, and description';
    displayName: 'Feature Card';
    icon: 'layer';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    iconName: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFooterWidget extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_widgets';
  info: {
    description: 'Configurable footer widget with multiple content types';
    displayName: 'Footer Widget';
    icon: 'layout';
  };
  attributes: {
    content: Schema.Attribute.DynamicZone<
      [
        'shared.simple-link',
        'shared.rich-text',
        'shared.newsletter-form',
        'shared.contact-info',
      ]
    >;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['links', 'newsletter', 'contact', 'social', 'rich-text']
    > &
      Schema.Attribute.Required;
  };
}

export interface SharedHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sections';
  info: {
    description: 'Hero section with title, subtitle, and CTA';
    displayName: 'Hero Section';
    icon: 'star';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    backgroundVideo: Schema.Attribute.Media<'videos'>;
    badge: Schema.Attribute.String;
    primaryCTA: Schema.Attribute.Component<'shared.cta-button', false>;
    scrollPrompt: Schema.Attribute.String;
    secondaryCTA: Schema.Attribute.Component<'shared.cta-button', false>;
    secondSubtitle: Schema.Attribute.Text;
    subtitle: Schema.Attribute.Text;
    thirdSubtitle: Schema.Attribute.Text;
    titleBottom: Schema.Attribute.String;
    titleTop: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_items';
  info: {
    description: 'Navigation menu item with support for nested children';
    displayName: 'Menu Item';
    icon: 'link';
  };
  attributes: {
    article: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    children: Schema.Attribute.Component<'shared.menu-item-level-2', true>;
    cssClass: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    service: Schema.Attribute.Relation<'oneToOne', 'api::service.service'>;
    url: Schema.Attribute.String;
  };
}

export interface SharedMenuItemLevel2 extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_item_level_2s';
  info: {
    description: 'Second-level menu item (can have level 3 children)';
    displayName: 'Menu Item Level 2';
    icon: 'link';
  };
  attributes: {
    article: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    children: Schema.Attribute.Component<'shared.menu-item-level-3', true>;
    icon: Schema.Attribute.String;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    service: Schema.Attribute.Relation<'oneToOne', 'api::service.service'>;
    url: Schema.Attribute.String;
  };
}

export interface SharedMenuItemLevel3 extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_item_level_3s';
  info: {
    description: 'Third-level menu item (deepest, no children)';
    displayName: 'Menu Item Level 3';
    icon: 'link';
  };
  attributes: {
    article: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    icon: Schema.Attribute.String;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    service: Schema.Attribute.Relation<'oneToOne', 'api::service.service'>;
    url: Schema.Attribute.String;
  };
}

export interface SharedNewsletterForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_newsletter_forms';
  info: {
    description: 'Newsletter subscription form configuration';
    displayName: 'Newsletter Form';
    icon: 'envelope';
  };
  attributes: {
    buttonText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Subscribe'>;
    placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Enter your email address'>;
    privacyText: Schema.Attribute.RichText;
    successMessage: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Thank you for subscribing!'>;
  };
}

export interface SharedPricingTier extends Struct.ComponentSchema {
  collectionName: 'components_shared_pricing_tiers';
  info: {
    description: 'Pricing plan or tier with features and CTA';
    displayName: 'Pricing Tier';
    icon: 'dollar-sign';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'shared.cta-button', false>;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'shared.feature-card', true>;
    isPopular: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.Decimal & Schema.Attribute.Required;
    pricingPeriod: Schema.Attribute.Enumeration<
      ['one-time', 'monthly', 'quarterly', 'yearly']
    > &
      Schema.Attribute.DefaultTo<'monthly'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'Search Engine Optimization fields';
    displayName: 'SEO';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaKeywords: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    shareImage: Schema.Attribute.Media<'images'>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedSidebarContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_sidebar_contents';
  info: {
    description: 'Sidebar configuration for page templates';
    displayName: 'Sidebar Content';
    icon: 'layout-sidebar';
  };
  attributes: {
    position: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'right'>;
    widgets: Schema.Attribute.DynamicZone<
      ['shared.rich-text', 'shared.media', 'shared.cta-button', 'sections.cta']
    >;
  };
}

export interface SharedSimpleLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_simple_links';
  info: {
    description: 'Simple link without nesting - for footer and other non-hierarchical menus';
    displayName: 'Simple Link';
    icon: 'link';
  };
  attributes: {
    article: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    service: Schema.Attribute.Relation<'oneToOne', 'api::service.service'>;
    url: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedStatCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_stat_cards';
  info: {
    description: 'A statistic card with value and description';
    displayName: 'Stat Card';
    icon: 'chartLine';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['primary', 'secondary', 'accent']> &
      Schema.Attribute.DefaultTo<'primary'>;
    description: Schema.Attribute.Text;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_members';
  info: {
    description: 'Team member profile with extended bio support';
    displayName: 'Team Member';
    icon: 'user';
  };
  attributes: {
    bio: Schema.Attribute.Text;
    bio2: Schema.Attribute.Text;
    email: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    linkedIn: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    twitter: Schema.Attribute.String;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    description: 'Customer testimonial';
    displayName: 'Testimonial';
    icon: 'quote';
  };
  attributes: {
    authorImage: Schema.Attribute.Media<'images'>;
    authorName: Schema.Attribute.String & Schema.Attribute.Required;
    authorTitle: Schema.Attribute.String;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.compass': SectionsCompass;
      'sections.content-with-stats': SectionsContentWithStats;
      'sections.cta': SectionsCta;
      'sections.faq': SectionsFaq;
      'sections.features': SectionsFeatures;
      'sections.how-it-works': SectionsHowItWorks;
      'sections.hubspot-form': SectionsHubspotForm;
      'sections.methodology': SectionsMethodology;
      'sections.pricing': SectionsPricing;
      'sections.services-grid': SectionsServicesGrid;
      'sections.team': SectionsTeam;
      'sections.testimonials': SectionsTestimonials;
      'shared.compass-direction': SharedCompassDirection;
      'shared.contact-info': SharedContactInfo;
      'shared.content-subsection': SharedContentSubsection;
      'shared.cta-button': SharedCtaButton;
      'shared.feature-card': SharedFeatureCard;
      'shared.footer-widget': SharedFooterWidget;
      'shared.hero-section': SharedHeroSection;
      'shared.media': SharedMedia;
      'shared.menu-item': SharedMenuItem;
      'shared.menu-item-level-2': SharedMenuItemLevel2;
      'shared.menu-item-level-3': SharedMenuItemLevel3;
      'shared.newsletter-form': SharedNewsletterForm;
      'shared.pricing-tier': SharedPricingTier;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.sidebar-content': SharedSidebarContent;
      'shared.simple-link': SharedSimpleLink;
      'shared.slider': SharedSlider;
      'shared.stat-card': SharedStatCard;
      'shared.team-member': SharedTeamMember;
      'shared.testimonial': SharedTestimonial;
    }
  }
}
