import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';

export default {
  title: 'Pages/Contact',
  component: ContactComponent,
  decorators: [
    moduleMetadata({
      declarations: [ContactComponent],
      imports: [CommonModule, ReactiveFormsModule],
    }),
  ],
  parameters: {
    layout: 'padded',
  },
} as Meta;

const Template: Story<ContactComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.storyName = 'Default (Empty Form)';

export const WithSuccessMessage = Template.bind({});
WithSuccessMessage.storyName = 'Success Message State';
