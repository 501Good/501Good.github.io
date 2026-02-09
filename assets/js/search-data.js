// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-m-looking-for-a-postdoc-position-in-france-excited-to-work-on-a-topic-that-combines-nlp-and-mental-health-and-also-open-to-work-on-other-nlp-related-topics",
          title: 'I’m looking for a postdoc position in France! Excited to work on a...',
          description: "",
          section: "News",},{id: "news-i-have-successfully-defended-my-phd-thesis-estimation-of-depression-level-from-text-symptom-based-approach-external-knowledge-dataset-validity-which-is-available-here-https-hdl-handle-net-10062-106041",
          title: 'I have successfully defended my PhD thesis Estimation of Depression Level from Text:...',
          description: "",
          section: "News",},{id: "news-i-am-happy-to-announce-that-from-this-december-i-am-starting-a-new-page-in-my-life-as-a-postdoctoral-researcher-in-the-institut-national-de-l-audiovisuel",
          title: 'I am happy to announce that from this December I am starting a...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-advanced-nlp",
          title: 'Advanced NLP',
          description: "Spring 2023-2024, Master&#39;s Level, University of Caen Normandy",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/advanced-nlp-2023/";
            },},{id: "teachings-introduction-to-oop-in-python",
          title: 'Introduction to OOP in Python',
          description: "Spring 2023-2024, Bachelor&#39;s Level, University of Caen Normandy",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/intro-nlp-2023/";
            },},{id: "teachings-advanced-nlp",
          title: 'Advanced NLP',
          description: "Spring 2023-2024, Bachelor&#39;s Level, University of Caen Normandy",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/intro-oop-2023/";
            },},{id: "teachings-introduction-to-programming-in-python",
          title: 'Introduction to Programming in Python',
          description: "Fall 2023-2024, Bachelor&#39;s Level, University of Caen Normandy",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/intro-programming-2023/";
            },},{id: "teachings-introduction-to-pytorch",
          title: 'Introduction to Pytorch',
          description: "Spring 2023-2024, PhD Level, University of Caen Normandy",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/intro-pytorch-2023/";
            },},{id: "teachings-ltat-01-001-natural-language-processing",
          title: 'LTAT.01.001 Natural language processing',
          description: "This course aims to provide an overview of the main tasks in the field of natural language processing and to introduce the contemporary methods to address them. The course will cover tasks such as language modeling and word/sentence representations, text classification, sequence tagging for finding parts of speech or morphological features, information extraction such as named entity recognition, finding the important structural parts of a sentence as well as some higher level tasks such as machine translation. During recent years, the NLP field has more and more started to use deep neural models. Thus, in this course we will look at various deep neural models that are nowadays commonly used for NLP: recurrent networks for modeling sequential data, convolutional networks for text classification, static and contextual word embeddings, attention mechanism for finding alignment between different inputs or inputs and outputs.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/natural-language-processing-2019/";
            },},{id: "teachings-ltat-01-001-natural-language-processing",
          title: 'LTAT.01.001 Natural language processing',
          description: "This course aims to provide an overview of the main tasks in the field of natural language processing and to introduce the contemporary methods to address them. The course will cover tasks such as language modeling and word/sentence representations, text classification, sequence tagging for finding parts of speech or morphological features, information extraction such as named entity recognition, finding the important structural parts of a sentence as well as some higher level tasks such as machine translation.During recent years, the NLP field has more and more started to use deep neural models. Thus, in this course we will look at various deep neural models that are nowadays commonly used for NLP: recurrent networks for modeling sequential data, convolutional networks for text classification, static and contextual word embeddings, attention mechanism for finding alignment between different inputs or inputs and outputs.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/natural-language-processing-2020/";
            },},{id: "teachings-ltat-01-001-natural-language-processing",
          title: 'LTAT.01.001 Natural language processing',
          description: "This course aims to provide an overview of the main tasks in the field of natural language processing and to introduce the contemporary methods to address them. The course will cover tasks such as language modeling and word/sentence representations, text classification, sequence tagging for finding parts of speech or morphological features, information extraction such as named entity recognition, finding the important structural parts of a sentence as well as some higher level tasks such as machine translation.During recent years, the NLP field has more and more started to use deep neural models. Thus, in this course we will look at various deep neural models that are nowadays commonly used for NLP: recurrent networks for modeling sequential data, convolutional networks for text classification, static and contextual word embeddings, attention mechanism for finding alignment between different inputs or inputs and outputs.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/natural-language-processing-2021/";
            },},{id: "teachings-web-development-html-amp-css",
          title: 'Web Development, HTML &amp;amp; CSS',
          description: "Fall 2023-2024, Bachelor&#39;s Level, University of Caen Normandy",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/web-development-2023/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Kirill_Milintsevich_CV_Postdoc_Web.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%65@%6D%69%6C%69%6E%74%73%65%76%69%63%68.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=BQNVCjYAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/milintsevich", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
