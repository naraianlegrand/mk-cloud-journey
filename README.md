# Cloud Tech - A Modern, Responsive Website

A beautiful, modern, and fully responsive website built to document a learning journey into cloud technologies, specifically AWS. This project serves as a portfolio and a blog, showcasing skills and progress through various cloud-based projects.

---

## ✨ Features

-   **Fully Responsive Design:** Seamless experience on desktops, tablets, and mobile devices.
-   **Sticky Navigation Bar:** A sleek, semi-transparent header that sticks to the top and includes smooth scrolling to all sections.
-   **Light & Dark Mode:** A beautiful, user-selectable theme toggle that remembers the user's preference using `localStorage`.
-   **Dynamic Animations:**
    -   Subtle fade-in and slide-up animations for sections as they scroll into view, powered by the `IntersectionObserver` API.
    -   Advanced directional animations for the "Our Journey" timeline.
-   **Modern UI/UX:**
    -   A clean, cloud-themed design with blue and white tones and elegant gradients.
    -   Frosted glass (glassmorphism) effects on key components like the timeline cards.
    -   Interactive hover effects on buttons, links, and project cards.
-   **Component-Based Sections:**
    -   **Hero Section:** A welcoming headline with an animated call-to-action.
    -   **About Us:** A brief introduction to the team.
    -   **Our Journey:** A visually engaging timeline layout to showcase learning phases.
    -   **Projects:** A responsive grid of project cards with a "Coming Soon" badge.
    -   **Contact Form:** A stylish and functional form with floating labels and validation (frontend only).
-   **Utility Features:**
    -   A "Scroll to Top" button that appears on long scrolls.
    -   A responsive hamburger menu for mobile navigation.

---

## 🛠️ Tech Stack

-   **Frontend:**
    -   HTML5 (Semantic)
    -   CSS3 (Flexbox, Grid, Custom Properties/Variables)
    -   JavaScript (ES6+)
-   **Libraries & APIs:**
    -   Font Awesome for icons.
    -   Google Fonts for typography (`Poppins`).
    -   Browser `IntersectionObserver` API for scroll animations.

---

## 📂 File Structure

The project is organized into three main files for clarity and maintainability:

```
.
├── 📄 index.html      # The main HTML structure for all content.
├── 🎨 styles.css       # All styling, theming, and responsive design rules.
└── ⚙️ script.js        # All JavaScript logic for interactivity and animations.
```

---

## 🚀 Getting Started

To run this project locally, follow these simple steps:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/cloud-tech-website.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd cloud-tech-website
    ```
3.  **Open the website:**
    Simply open the `index.html` file in your favorite web browser.

---

## 🔮 Future Enhancements

This project is the foundation for more advanced cloud integrations. The next steps include:

-   **Serverless Backend:** Connecting the contact form to a serverless backend using **AWS Lambda**, **API Gateway**, and **Amazon SES** to send real emails.
-   **CI/CD Pipeline:** Creating a continuous integration and delivery pipeline with **AWS CodePipeline** and **AWS CodeBuild** to automate deployments to an **Amazon S3** bucket.
-   **Dynamic Projects:** Fetching project data from a **DynamoDB** database to dynamically populate the projects section.

---

## ✍️ Authors

-   **Mohsin** - Cloud Explorer
-   **Karthik** - Tech Architect

---

## 📄 License

This project is open-source and available under the MIT License.