<h1 align="center">AWS Internship Report Site</h1>

<h3 align="center">
  A personal internship report website built with Hugo, Markdown, and the FCJ workshop template.
</h3>

<p align="center">
  <a href="https://github.com/tienhuu-dev/aws-internship-report-site">
    <img src="https://img.shields.io/badge/Repository-GitHub-181717?style=for-the-badge&logo=github" alt="GitHub repository" />
  </a>
  <img src="https://img.shields.io/badge/Hugo-0.137.1-FF4088?style=for-the-badge&logo=hugo" alt="Hugo version" />
  <img src="https://img.shields.io/badge/Status-In%20Development-0A66C2?style=for-the-badge" alt="Project status" />
</p>

---

## 👋 About This Repository

This repository contains a Hugo-based static website for documenting my AWS internship learning journey, technical progress, weekly reports, workshop practice, self-evaluation, and feedback.

The project is based on the FCJ workshop template and is customized as a personal report site for internship documentation.

---

## 🎯 Project Purpose

- Document internship progress in a structured format.
- Maintain weekly worklogs and learning outcomes.
- Present AWS-related workshop practice and technical notes.
- Keep a clean source branch for future GitHub Pages deployment.
- Provide mentors with a clear and reviewable report website.

---

## 🧑‍💻 Author

<h3 align="left">Hi 👋, I'm Tien Huu</h3>

- 🔭 I am currently working on **AWS Internship Report Site**.
- 🌱 I am currently learning **AWS, Hugo, GitHub Pages, and technical documentation**.
- 📝 I use this repository to document internship progress and cloud learning outcomes.
- 💻 GitHub: [tienhuu-dev](https://github.com/tienhuu-dev)
- 🔗 LinkedIn: [Tien Huu](https://www.linkedin.com/in/tien-huu-8a436a3a2)
- 📫 Email: [daohuutien2004@gmail.com](mailto:daohuutien2004@gmail.com)

---

## 🛠️ Technology Stack

<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/hugo/hugo-original.svg" alt="Hugo" width="40" height="40" />&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/markdown/markdown-original.svg" alt="Markdown" width="40" height="40" />&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="Git" width="40" height="40" />&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="GitHub" width="40" height="40" />&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" width="50" height="40" />
</p>

- **Static Site Generator:** Hugo Extended
- **Theme:** Hugo Learn Theme
- **Content Format:** Markdown
- **Version Control:** Git, GitHub
- **Deployment Target:** GitHub Pages

---

## 📚 Template Source

This project is based on the following FCJ workshop template:

```text
https://github.com/thienluhoan/fcj-workshop-template
```

The original template is kept as an upstream reference for future comparison or updates.

---

## ✅ Required Hugo Version

This template has compatibility constraints with newer Hugo versions. The confirmed working version is:

```text
hugo v0.137.1+extended windows/amd64
```

Recommended version:

```text
Hugo Extended v0.137.1
```

---

## 🚀 Local Development

Run the development server:

```powershell
hugo server -D
```

The website will be available at:

```text
http://localhost:1313/
```

---

## 🏗️ Build

Generate the static website:

```powershell
hugo
```

The generated output is written to:

```text
public/
```

The `public/` directory is ignored from the source branch because it is a generated build output.

---

## 🌿 Branch Strategy

| Branch | Purpose |
| --- | --- |
| `main` | Stable branch for reviewed code and future deployment. |
| `feature/site-foundation` | Development branch for preparing the report site foundation. |
| `backup/template-history` | Local backup branch that preserves the original template history. |

---

## 📁 Repository Structure

```text
.
├── archetypes/
├── content/
├── layouts/
├── static/
├── themes/
│   └── hugo-theme-learn/
├── config.toml
├── .gitignore
└── README.md
```

Main directories:

- `content/`: Markdown content for report sections.
- `layouts/`: Custom Hugo layout overrides.
- `static/`: Static assets such as images, CSS, and icons.
- `themes/`: Hugo theme used by the site.
- `config.toml`: Main Hugo site configuration.

---

## 🧭 Current Report Sections

The original template structure is currently preserved:

- Worklog
- Proposal
- Blogs Translated
- Events Participated
- Workshop
- Self-evaluation
- Feedback

These sections will be customized progressively to match the AWS internship report requirements.

---

## 🔗 Connect with Me

<p align="left">
  <a href="https://github.com/tienhuu-dev" target="_blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" alt="tienhuu-dev" height="30" width="40" /></a>
  <a href="https://www.linkedin.com/in/tien-huu-8a436a3a2" target="_blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="tien-huu-8a436a3a2" height="30" width="40" /></a>
  <a href="mailto:daohuutien2004@gmail.com" target="_blank">
    <img align="center" src="https://img.shields.io/badge/Email-daohuutien2004%40gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" height="28" />
  </a>
</p>

---

<p align="center">
  Built with ❤️ using Hugo and Markdown.
</p>
