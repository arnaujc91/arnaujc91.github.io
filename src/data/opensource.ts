export const openSourceProjects = [
  {
    name: "Tianshou",
    role: "Community contributor - Reinforcement learning internals",
    summary:
      "Contributed merged changes to Tianshou, a PyTorch reinforcement learning library, focused on policy internals, actor/critic typing, distribution handling, Batch API consistency, and documentation polish.",
    tech: "Python - PyTorch - Reinforcement learning",
    impactPoints: [
      "Improved actor, critic, and policy forward interfaces across many algorithms, including better typing, clearer model-output naming, and a simplified distribution-function contract.",
      "Cleaned up deterministic action selection by using PyTorch distribution modes, and improved Batch key access consistency by moving away from the implicit keys method.",
    ],
    tags: ["RL Systems", "PyTorch", "Open Source"],
    link: "https://github.com/thu-ml/tianshou",
    links: [
      {
        label: "actor/critic typing",
        href: "https://github.com/thu-ml/tianshou/pull/1032",
      },
      {
        label: "distribution mode",
        href: "https://github.com/thu-ml/tianshou/pull/1066",
      },
      {
        label: "Batch key API",
        href: "https://github.com/thu-ml/tianshou/pull/1105",
      },
      {
        label: "documentation polish",
        href: "https://github.com/thu-ml/tianshou/pull/1150",
      },
    ],
  },
  {
    name: "sktime",
    role: "Community contributor - Forecasting adapters",
    summary:
      "Contributed merged changes to sktime's forecasting module, focused on integrating third-party forecasting libraries and keeping adapters stable as upstream APIs evolved.",
    tech: "Python - statsmodels - statsforecast - pandas",
    impactPoints: [
      "Added a statsmodels ARIMA forecaster interface, including estimator implementation, API reference wiring, docstrings, dependency tags, and usage examples.",
      "Improved statsforecast adapter compatibility across versions by handling optional prediction-level arguments, removed initialization parameters, and a statsforecast 1.6.0 dictionary-iteration regression.",
    ],
    tags: ["Forecasting", "Adapters", "OSS"],
    link: "https://github.com/sktime/sktime",
    links: [
      {
        label: "ARIMA interface",
        href: "https://github.com/sktime/sktime/pull/5857",
      },
      {
        label: "statsforecast compatibility",
        href: "https://github.com/sktime/sktime/pull/5112",
      },
      {
        label: "statsforecast bugfix",
        href: "https://github.com/sktime/sktime/pull/5317",
      },
    ],
  },
  {
    name: "Serena",
    role: "Community contributor - MCP coding agent tooling",
    summary:
      "Contributed to Serena, an open source MCP-based coding agent toolkit, by improving the macOS dashboard lifecycle around tray access, Dock visibility, and window restore behavior.",
    tech: "Python - pywebview - macOS AppKit",
    impactPoints: [
      "Fixed macOS dashboard behavior so the app can remain available from the tray/status-bar while hiding or restoring the dashboard window predictably.",
      "Improved Dock integration by coordinating window visibility, activation policy, AppKit thread handling, and icon restoration for a more native macOS workflow.",
    ],
    tags: ["MCP", "Developer Tools", "macOS"],
    link: "https://github.com/oraios/serena",
    links: [
      {
        label: "macOS Dock/tray fix",
        href: "https://github.com/oraios/serena/pull/1265",
      },
      {
        label: "window state management",
        href: "https://github.com/oraios/serena/pull/1262",
      },
    ],
  },
];
