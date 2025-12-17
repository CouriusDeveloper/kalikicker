import type { Schema, Struct } from '@strapi/strapi';

export interface LegalSection extends Struct.ComponentSchema {
  collectionName: 'components_legal_sections';
  info: {
    description: 'Titel und Text f\u00FCr rechtliche Inhalte';
    displayName: 'Abschnitt';
  };
  attributes: {
    body: Schema.Attribute.RichText & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedScheduleEntry extends Struct.ComponentSchema {
  collectionName: 'components_shared_schedule_entries';
  info: {
    displayName: 'Schedule Entry';
  };
  attributes: {
    activity: Schema.Attribute.String & Schema.Attribute.Required;
    time: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTextItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_items';
  info: {
    displayName: 'Text Item';
  };
  attributes: {
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'legal.section': LegalSection;
      'shared.schedule-entry': SharedScheduleEntry;
      'shared.text-item': SharedTextItem;
    }
  }
}
