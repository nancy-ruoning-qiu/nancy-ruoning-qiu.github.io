// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications and work in progress in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-personal",
          title: "Personal",
          description: "Fun facts about me :)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "My academic CV (updated on May 2025).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-desktop-computer-attending-ne-rume-2022-online-to-present-a-talk-on-exploring-the-effectiveness-and-usage-of-math-definitions-in-exam-responses",
          title: ':desktop_computer: Attending NE RUME 2022 online to present a talk on Exploring the...',
          description: "",
          section: "News",},{id: "news-mortar-board-my-thesis-parameter-estimation-for-many-body-potentials-is-now-archived-in-ubc-circle-and-my-m-sc-has-been-officially-conferred-many-thanks-to-dr-colin-macdonald-dr-neil-balmforth-and-espeically-my-supervisor-dr-christoph-ortner-for-their-support-throughout-this-journey",
          title: ':mortar_board: My thesis, Parameter Estimation for Many-body Potentials, is now archived in UBC...',
          description: "",
          section: "News",},{id: "news-scroll-earned-a-cirtl-associate-certificate-through-the-math-instructional-skills-workshop-and-the-summer-teaching-institute-on-sotl-at-ubc",
          title: ':scroll: Earned a CIRTL Associate certificate through the Math Instructional Skills Workshop and...',
          description: "",
          section: "News",},{id: "news-books-tornado-started-the-joint-doctoral-program-in-mathematics-and-science-education-at-sdsu-and-ucsd",
          title: ':books: :tornado: Started the joint doctoral program in Mathematics and Science Education at...',
          description: "",
          section: "News",},{id: "news-airplane-attending-the-43rd-annual-conference-on-the-first-year-experience-in-seattle-and-presenting-a-facilitated-dialogue-session-on-cohort-based-program-and-seminar-course-for-first-year-science-students",
          title: ':airplane: Attending the 43rd Annual Conference on The First-Year Experience in Seattle and...',
          description: "",
          section: "News",},{id: "news-hammer-and-wrench-attending-critical-issues-in-mathematics-education-2024-workshop-in-uc-berkeley-on-bringing-innovation-to-scale-teaching-focused-faculty-as-change-agents",
          title: ':hammer_and_wrench: Attending Critical Issues in Mathematics Education 2024 workshop in UC Berkeley on...',
          description: "",
          section: "News",},{id: "news-oncoming-automobile-attending-the-maa-socal-nev-section-meeting-in-university-of-san-diego-to-present-a-poster",
          title: ':oncoming_automobile: Attending the MAA SoCal-Nev Section Meeting in University of San Diego to...',
          description: "",
          section: "News",},{id: "news-oncoming-automobile-attending-the-uc-stem-t-3-pn-conference-in-uc-irvine-to-present-a-poster",
          title: ':oncoming_automobile: Attending the UC STEM T$^3$PN Conference in UC Irvine to present a...',
          description: "",
          section: "News",},{id: "news-hammer-and-wrench-attending-the-4-day-peer-field-school-in-the-university-of-san-diego-to-learn-discipline-based-education-research",
          title: ':hammer_and_wrench: Attending the 4-day PEER Field School in the University of San Diego...',
          description: "",
          section: "News",},{id: "news-airplane-attending-bcce-2024-in-the-unvierstiy-of-kentrucky-to-present-our-talk-on-patterns-in-the-development-and-use-of-education-instruments-in-the-journal-of-chemical-education-2010-2020-for-the-chiral-project",
          title: ':airplane: Attending BCCE 2024 in the Unvierstiy of Kentrucky to present our talk...',
          description: "",
          section: "News",},{id: "news-oncoming-automobile-attending-the-ams-western-sectional-meeting-in-uc-riverside-to-present-a-talk",
          title: ':oncoming_automobile: Attending the AMS Western Sectional Meeting in UC Riverside to present a...',
          description: "",
          section: "News",},{id: "news-tada-page-facing-up-placard-our-paper-the-impact-of-a-redesigned-differential-equations-course-on-prospective-teachers-embracing-a-critical-stance-is-accepted-to-rume-2025-my-poster-on-exploring-students-understanding-of-a-limit-of-a-sequence-using-epsilon-strip-activity-with-realistic-mathematics-education-framework-is-also-accepted",
          title: ':tada::page_facing_up::placard: Our paper, The impact of a redesigned differential equations course on prospective...',
          description: "",
          section: "News",},{id: "news-airplane-attending-rume-2025-in-alexandria-excited-to-reunite-with-friends-amp-amp-colleagues-and-present-our-work-smiling-face-with-three-hearts",
          title: ':airplane: Attending RUME 2025 in Alexandria. Excited to reunite with friends &amp;amp;amp; colleagues...',
          description: "",
          section: "News",},{id: "news-tada-page-facing-up-our-illustration-of-practice-paper-proposal-bridging-tertiary-and-secondary-mathematics-promoting-a-critical-stance-in-an-inquiry-oriented-dynamical-systems-and-modeling-course-is-accpeted-to-a-special-issue-of-the-mathematics-teacher-education-and-development-journal-focused-on-mathematics-teacher-educators-theories-methodologies-and-teaching-practices",
          title: ':tada::page_facing_up: Our illustration of practice paper proposal, Bridging Tertiary and Secondary Mathematics: Promoting...',
          description: "",
          section: "News",},{id: "news-tada-page-facing-up-our-paper-self-reflective-crowds-surfacing-wisdom-through-emergent-scaffoding-is-accpeted-to-ci-25-more-details-to-come",
          title: ':tada::page_facing_up: Our paper, Self-Reflective Crowds: Surfacing Wisdom Through Emergent Scaffoding is accpeted to...',
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
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%31%71%69%75@%75%63%73%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/nancy-ruoning-qiu", "_blank");
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
