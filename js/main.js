// ARRAY OGGETTI

// VUE
const { createApp } = Vue;

createApp({
  data() {
    return {
      navLinks: [
        {
          name: "Home",
          dropdownMenu: false,
        },

        {
          name: "Games",
          dropdownMenu: true,
          dropdowns: [
            {
              type: "Games",
              action: "Games Details",
              moreInfo: "Match Details",
            },
          ],
        },

        {
          name: "Shop",
          dropdownMenu: true,
          dropdowns: [
            {
              type: "Shop",
              action: "Weekly Offers",
              moreInfo: "Further informations",
            },
          ],
        },

        {
          name: "Latest Tournament",
          dropdownMenu: true,
          dropdowns: [
            {
              type: "Pages",
              action: "Content",
              moreInfo: "Further informations",
              aa: "aaaa",
            },
          ],
        },

        {
          name: "Blog",
          dropdownMenu: true,
          dropdowns: [
            {
              type: "Blog",
              action: "Newsletter",
              moreInfo: "Go to the blog",
            },
          ],
        },

        {
          name: "Contact",
          dropdownMenu: false,
        },
      ],

      // FOOTER
      footLinks: [
        // Quick Links
        {
          toDoTitle: "Quick Links",
        },

        {
          toDo: "Games",
        },

        {
          toDo: "Latest Tournament",
        },

        {
          toDo: "Shop",
        },

        {
          toDo: "Blog",
        },

        {
          toDo: "Contact",
        },
        // faq
        {
          faqTitle: "Help",
        },

        {
          faq: "Terms & Conditions",
        },

        {
          faq: "FAQs",
        },

        {
          faq: "Terms & Conditions",
        },

        {
          faq: "Privacy",
        },
        // social
        {
          socialTitle: "Follow us",
        },

        {
          social: "Facebook",
        },

        {
          social: "Twitter",
        },

        {
          social: "Instagram",
        },

        {
          social: "Youtube",
        },

        {
          social: "Github",
        },
        // location
        {
          addressTitle: "Contact",
        },
        {
          name: "Location:",
          address: "4 Mayfield, Buckden, PF30 033S",
        },

        {
          name: "Phone:",
          address: "(303)303-0330",
        },
      ],
    };
  },
}).mount("#root");
