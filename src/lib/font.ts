import BasementGrotesque from "next/font/local";

const basementGrotesque = BasementGrotesque({
  src: [
    {
      path: "../font/basement-grotesque-font/BasementGrotesque-Regular.otf",
      style: "normal",
      weight: "normal",
    },
    {
      path: "../font/basement-grotesque-font/BasementGrotesque-Bold.otf",
      style: "normal",
      weight: "bold",
    },
    {
      path: "../font/basement-grotesque-font/BasementGrotesque-Black.otf",
      style: "normal",
      weight: "900",
    },
  ],
});

export default basementGrotesque;
