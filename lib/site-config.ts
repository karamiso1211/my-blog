import {
  House,
  GraduationCap,
  UserRound,
  NotebookTabs,
  Laptop,
  Loader,
  CirclePause,
  CircleCheck,
  Github,
  Twitter,
  Mail,
} from "lucide-react";

const socialLinks = {
  github: "https://github.com/karamiso1211",
  twitter: "https://x.com/sk_kazukiishii",
  mail: "https://mail.google.com/mail/?view=cm&fs=1&to=sk.kazukiishii@gmail.com&su=ポートフォリオからのお問い合わせ",
};

export const statusStyles = {
  active: {
    label: "Active",
    bg: "bg-blue-50 border-blue-200 text-blue-700",
    dot: "bg-blue-400",
    icon: Loader,
    animate: true,
  },
  paused: {
    label: "Paused",
    bg: "bg-yellow-50 border-yellow-200 text-yellow-700",
    dot: "bg-yellow-400",
    icon: CirclePause,
    animate: false,
  },
  completed: {
    label: "Completed",
    bg: "bg-green-50 border-green-200 text-green-700",
    dot: "bg-green-400",
    icon: CircleCheck,
    animate: false,
  },
};

export const siteConfig = {
  // ▼ サイトの基本情報
  title: "エンジニアへの道",
  description: "Next.jsで作ったポートフォリオ",
  author: "karamiso/みそちゃ",

  currentProject: {
    name: "ポートフォリオサイトの作成",
    status: "active",
  },

  socials: {
    github: "https://github.com/karamiso1211",
    twitter: "https://x.com/sk_kazukiishii",
  },
  headerItems: [
    { label: "home", href: "/", icon: House },
    { label: "works", href: "/works", icon: GraduationCap },
    { label: "about", href: "/about", icon: UserRound },
    { label: "blog", href: "/blog", icon: NotebookTabs },
  ],
  homeItems: {
    icon1: Laptop,
  },
  footerItem: [
    { label: "Github", href: socialLinks.github, icon: Github },
    { label: "Twitter", href: socialLinks.twitter, icon: Twitter },
    { label: "Mail", href: socialLinks.mail, icon: Mail },
  ],
};

export const currentStatus =
  statusStyles[siteConfig.currentProject.status as keyof typeof statusStyles] ||
  statusStyles.active;
