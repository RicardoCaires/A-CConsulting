import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
})

const config = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: [
      '.next/**',
      // Der statische Export. Erzeugt, nicht geschrieben — und er enthaelt
      // fremden Code aus Next.js und React, den zu pruefen sinnlos waere.
      'out/**',
      'node_modules/**',
      'archiv/**',
      // Von Next.js bzw. vom Token-Generator erzeugt.
      'next-env.d.ts',
      'src/**/*.generated.*',
    ],
  },
  {
    rules: {
      // Farbwerte gehoeren in die Design-Tokens, nicht in Komponenten.
      // Zusaetzlich prueft scripts/check-no-hex.mjs auch die CSS-Dateien.
      'no-restricted-syntax': [
        'error',
        {
          selector: "Literal[value=/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/]",
          message:
            'Keine Farbwerte im Code. Verwende die CSS-Variablen aus src/styles/tokens.generated.css.',
        },
      ],
    },
  },
]

export default config
