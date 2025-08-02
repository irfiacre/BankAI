export const formatPrice = (num: number | string): string => {
  return Number(num).toLocaleString(undefined, { maximumFractionDigits: 0 });
};

export const flexConfiguration = {
  global: {
    tabSetEnableSingleTabStretch: true,
  },
  borders: [],
  layout: {
    type: "row",
    weight: 100,
    children: [
      {
        type: "tabset",
        weight: 60,
        children: [
          {
            type: "tab",
            name: "Analytics",
            component: "charts",
            enableClose: false,
          },
        ],
      },
      {
        type: "tabset",
        weight: 40,
        children: [
          {
            type: "tab",
            name: "Banka",
            component: "chat",
            enableClose: false,
          },
        ],
        active: true,
      },
    ],
  },
};
