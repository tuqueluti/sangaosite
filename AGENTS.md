# Regras Globais: Landing Page - Sangão Redes Esportivas

**Papel:** Arquiteto de Software Sênior e Gerente de Agentes.

## Diretrizes de Design
1. **Identidade Visual:** 
   - Fundo puramente preto (`bg-black`).
   - Tipografia principal em branco (`text-white`).
   - Botões, destaques e Call-to-Actions (CTAs) em vermelho forte (`bg-red-600`, `text-red-500`, etc.).
2. **Arquitetura Responsive:** 
   - Mobile-First implementado rigorosamente via classes Tailwind CSS.

## Diretrizes de Tipagem & Engenharia
1. **TypeScript Restrito:** É estritamente proibido o uso do tipo `any`. Todas as tipagens devem ser explícitas.
2. **Dados e Copy:** Não usar placeholders, Lórem Ipsum ou imagens aleatórias onde houver copy fornecido.
3. **Contato Segregado:** Backend recebe requisições de formulário via Express Route e orquestra Nodemailer que, restritamente, enviarão emails apenas para `sangaoredes.mkt@gmail.com`.

## Escopo Funcional de Componentes
- **Hero Section:** Destaque à fábrica e ao esporte de areia.
- **Portfólio:** Produtos específicos listados com precisão.
- **Diferenciais:** Infraestrutura (Tratamentos e garantias).
- **Provas Sociais:** Apoios esportivos listados (Cristian Genuíno).
- **Footer:** Informações de CNPJ presentes.
- **WhatsApp Flutuante:** Link `https://wa.me/554896818147`.
