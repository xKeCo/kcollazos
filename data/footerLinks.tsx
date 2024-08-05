import { Github, Linkedin, Mail, ScrollText, Twitter } from 'lucide-react';

export const footerLinks = [
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/kevcollazos/',
    icon: <Linkedin size={16} />,
  },
  {
    title: 'GitHub',
    url: 'https://github.com/xKeCo',
    icon: <Github size={16} />,
  },
  {
    title: 'Twitter',
    url: 'https://x.com/kcollazos_',
    icon: <Twitter size={16} />,
  },
  {
    title: 'hi@kcollazos.com',
    url: 'mailto:kevcollazos@gmail.com',
    icon: <Mail size={16} />,
  },
  {
    title: 'CV',
    url: 'https://cv.kevincollazos.com/',
    icon: <ScrollText size={16} />,
  },
];
