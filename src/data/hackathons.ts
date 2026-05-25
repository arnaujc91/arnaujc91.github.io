export const hackathons = [
  {
    name: "EPO CodeFest 2023: The Plastitioners",
    context: "European Patent Office - CodeFest 2023 on Green Plastics",
    summary:
      "Built an unsupervised patent-classification workflow for the EPO's first public CodeFest, which challenged participants to develop AI models that identify patents related to green plastics and make sustainability know-how easier to access. The competition attracted over 60 individuals from across Europe, with six finalists selected by the jury. Because there was no clean training set or unambiguous definition of green plastics, our solution created a practical numerical definition from the patent corpus itself: retrieve patents from EPO and Google Patents, generate semantic embeddings over title, abstract, and text, reduce the embedding space with UMAP, cluster it with HDBSCAN, inspect cluster semantics through patent-specific keyword extraction, and classify new patents through weighted nearest-neighbor similarity.",
    focus: "Unsupervised patent classification - Embeddings and neighborhood search",
    team: "The Plastitioners",
    impactPoints: [
      "Compiled an embedded and semantically labelled patent dataset for neighborhood search, using EPO and Google patent data to handle the noisy results produced by broad green-plastics keyword queries.",
      "Produced an interpretable proof of concept where domain experts could refine cluster labels without retraining the model, making the approach reusable beyond green plastics for other patent corpora.",
    ],
    result: "Green plastics patent-classification prototype",
    tags: ["Patent NLP", "Embeddings", "Sustainability"],
    links: [
      {
        label: "EPO Green Plastics CodeFest",
        href: "https://www.epo.org/en/news-events/in-focus/codefest/codefest-green-plastics",
      },
    ],
  },
  {
    name: "EPO CodeFest 2024: EPO Dream Team",
    context: "European Patent Office - CodeFest 2024 on generative AI",
    summary:
      "Built an AI patent assistant for EPO CodeFest 2024, a generative-AI competition that received 59 proposals from 120 participants across 19 countries, with 50 proposals advancing to the second round and only 6 teams selected as finalists. The assistant lets users query EPO patent data in natural language instead of writing technical database queries. The system extracts the intent, keywords, authors, and date constraints from a user question, retrieves and ranks relevant patent abstracts, then generates grounded responses with references to the underlying patent content. Users can refine the search through follow-up questions, ask for more results, re-rank previous hits, and use an Analyse patent action to compare a full patent description against the original query and highlight the most relevant passages.",
    focus: "Patent chatbot - RAG, re-ranking, and patent analysis",
    team: "EPO Dream Team",
    impactPoints: [
      "Designed an agent pipeline for keyword and date extraction, dynamic query formulation, abstract retrieval, embedding-based similarity search, and grounded response generation.",
      "Reached the finalist stage from a competitive international field, with the jury selecting 6 finalists after two rounds of evaluation.",
    ],
    result: "Finalist, EPO CodeFest 2024",
    tags: ["Generative AI", "Patent chatbot", "RAG"],
    video: {
      title: "EPO CodeFest prize ceremony",
      embedUrl: "https://www.youtube-nocookie.com/embed/FMs_IYSVd8Y?start=9674",
    },
    links: [
      {
        label: "EPO CodeFest prize ceremony",
        href: "https://www.youtube.com/watch?v=FMs_IYSVd8Y&t=9674s",
      },
    ],
  },
  {
    name: "Data 4 Healthy Recovery Hackathon",
    context: "European Commission / COSME - Smart health challenge",
    summary:
      "Built a synthetic genetic data generation and analysis software platform for the EU Data 4 Healthy Recovery hackathon, a 48-hour smart-health competition focused on digitalisation and post-COVID recovery challenges. The event brought together 520 participants from across Europe and countries participating in the COSME programme, producing 46 smart-health ideas, with selected teams competing in the final round. The solution used machine learning and deep learning models to generate synthetic gene sequence datasets, helping teams explore genetic-data workflows while reducing dependency on sensitive real patient data.",
    focus: "Synthetic genetic data - Machine learning and deep learning",
    team: "Smart health hackathon team",
    impactPoints: [
      "Created a prototype for generating synthetic gene sequence data that could support experimentation, analysis, and software development when access to real genomic data is limited.",
      "Placed 5th among a large European field of smart-health submissions, giving the result useful context beyond the ranking itself.",
    ],
    result: "5th place, Data 4 Healthy Recovery Hackathon",
    tags: ["Synthetic data", "Genomics", "Healthcare AI"],
    links: [
      {
        label: "EU hackathon article",
        href: "https://eismea.ec.europa.eu/news/data-4-healthy-recovery-hackathon-solving-eu-industrys-smart-health-challenges-together-2021_en",
      },
      {
        label: "Submission page",
        href: "https://eventornado.com/submission/synthetic-genetic-data-generation-and-analysis-software-platform?s=1#ideas",
      },
    ],
  },
];
