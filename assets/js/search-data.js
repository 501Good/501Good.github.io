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
            },},{id: "teachings-advanced-nlp-2023",
          title: 'Advanced Nlp 2023',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/advanced-nlp-2023/";
            },},{id: "teachings-intro-nlp-2023",
          title: 'Intro Nlp 2023',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/intro-nlp-2023/";
            },},{id: "teachings-intro-oop-2023",
          title: 'Intro Oop 2023',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/intro-oop-2023/";
            },},{id: "teachings-intro-programming-2023",
          title: 'Intro Programming 2023',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/intro-programming-2023/";
            },},{id: "teachings-intro-pytorch-2023",
          title: 'Intro Pytorch 2023',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/intro-pytorch-2023/";
            },},{id: "teachings-natural-language-processing-2019",
          title: 'Natural Language Processing 2019',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/natural-language-processing-2019/";
            },},{id: "teachings-natural-language-processing-2020",
          title: 'Natural Language Processing 2020',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/natural-language-processing-2020/";
            },},{id: "teachings-natural-language-processing-2021",
          title: 'Natural Language Processing 2021',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/natural-language-processing-2021/";
            },},{id: "teachings-web-development-2023",
          title: 'Web Development 2023',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/web-development-2023/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
