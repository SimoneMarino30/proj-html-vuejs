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
          name: "Pages",
          dropdownMenu: true,
          dropdowns: [
            {
              type: "Pages",
              action: "Content",
              moreInfo: "Further informations",
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
    };
  },
}).mount("#root");
