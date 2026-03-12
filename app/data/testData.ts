export const comments = [
  {
    id: "1112c",
    content: "First Comment ",
    replies: [
      {
        id: "1113c",
        content: "First Comments reply1 ",
        repliedTo: "first comment",
        replies: undefined,
      },
      {
        id: "1114c",
        content: "First Comments reply2 ",
        repliedTo: "first comment",
        replies: [
          {
            id: "1117c",
            content: "First Comments reply2 ",
            repliedTo: "first comments reply2",
            replies: [
              {
                id: "1118c",
                content: "First Comments reply2 ",
                repliedTo: "first comments reply2 ",
                replies: undefined,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "1115c",
    content: "Second Comment ",
    replies: undefined,
  },
];
