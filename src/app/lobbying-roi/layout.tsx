import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Lobbying ROI Calculator: For Every $1 Spent, Companies Get $49,536 Back",
  description: "Calculate the return on lobbying investment. Cross-referenced data shows top contractors turn thousands in lobbying into billions in federal contracts. Interactive ROI explorer.",
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the ROI of lobbying?",
      acceptedAnswer: { "@type": "Answer", text: "According to OpenLobby data cross-referenced with USASpending.gov, top federal contractors receive an average of $49,536 in contracts for every $1 spent on lobbying. Academic research has found returns as high as 22,000%." }
    },
    {
      "@type": "Question",
      name: "Do companies that lobby get more government contracts?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. OpenLobby's analysis of lobbying disclosures matched with federal contract data shows a strong correlation between lobbying spending and contract awards. For example, McKesson spent $1.45M lobbying and received $11.8B in contracts." }
    },
    {
      "@type": "Question",
      name: "How much do the top lobbying clients spend?",
      acceptedAnswer: { "@type": "Answer", text: "The US Chamber of Commerce leads at $608M+ in lobbying (2018-2025). Major defense contractors, pharmaceutical companies, and tech giants each spend tens of millions annually." }
    },
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  )
}
