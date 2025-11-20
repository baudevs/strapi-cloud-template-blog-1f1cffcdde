import type { Schema, Struct } from '@strapi/strapi';

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

export interface SectionsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_sections_features';
  info: {
    displayName: 'Features Section';
    icon: 'grid';
  };
  attributes: {
    features: Schema.Attribute.Component<'shared.feature-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_sections_how_it_works';
  info: {
    displayName: 'How It Works Section';
    icon: 'cog';
  };
  attributes: {
    steps: Schema.Attribute.Component<'shared.feature-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsMethodology extends Struct.ComponentSchema {
  collectionName: 'components_sections_methodology';
  info: {
    displayName: 'Methodology Section';
    icon: 'book';
  };
  attributes: {
    principles: Schema.Attribute.Component<'shared.feature-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTeam extends Struct.ComponentSchema {
  collectionName: 'components_sections_team';
  info: {
    displayName: 'Team Section';
    icon: 'users';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    teamMembers: Schema.Attribute.Component<'shared.team-member', true>;
    title: Schema.Attribute.String;
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
    primaryCTA: Schema.Attribute.Component<'shared.cta-button', false>;
    secondaryCTA: Schema.Attribute.Component<'shared.cta-button', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SharedTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_members';
  info: {
    description: 'Team member profile';
    displayName: 'Team Member';
    icon: 'user';
  };
  attributes: {
    bio: Schema.Attribute.Text;
    email: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    linkedIn: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
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
      'sections.cta': SectionsCta;
      'sections.features': SectionsFeatures;
      'sections.how-it-works': SectionsHowItWorks;
      'sections.methodology': SectionsMethodology;
      'sections.team': SectionsTeam;
      'sections.testimonials': SectionsTestimonials;
      'shared.cta-button': SharedCtaButton;
      'shared.feature-card': SharedFeatureCard;
      'shared.hero-section': SharedHeroSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.team-member': SharedTeamMember;
      'shared.testimonial': SharedTestimonial;
    }
  }
}
