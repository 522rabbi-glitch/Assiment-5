import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaJava,
  FaDocker,
} from 'react-icons/fa'
import { SiSvelte, SiPostgresql, SiRedis, SiJavascript, SiTypescript, SiTailwindcss } from 'react-icons/si'
import type { JSX } from 'react'

export const iconMap: Record<string, JSX.Element> = {
  React: <FaReact className="text-sky-500" />,
  'Vue.js': <FaVuejs className="text-green-500" />,
  Svelte: <SiSvelte className="text-orange-500" />,
  'Next.js': <FaReact className="text-black" />,
  'Node.js': <FaNodeJs className="text-green-600" />,
  PostgreSQL: <SiPostgresql className="text-blue-600" />,
  Redis: <SiRedis className="text-red-500" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  Java: <FaJava className="text-red-600" />,
  'Tailwind CSS': <SiTailwindcss className="text-sky-400" />,
  Docker: <FaDocker className="text-blue-400" />,
}