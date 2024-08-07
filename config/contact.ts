export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  email = 'email',
}

export interface Contact {
  site: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  site: '',
  links: {
    github: 'https://github.com/adityapanchal10',
    linkedin: 'https://linkedin.com/in/adityapanchal10',
    email: 'mailto:panchaladitya007@gmail.com',
  },
};
