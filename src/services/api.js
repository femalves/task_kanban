let board = [
  {
    id: "jfie0288347",
    title: "Task backlog",
    creatable: true,
    done: false,
    cards: [
      {
        id: 1,
        task: "Aula",
        content: "Estudar módulo 01 de NodeJS",
        labels: ["red", "orange"],
        user: "https://api.adorable.io/avatars/40/z.png",
      },
      {
        id: 2,
        task: "Aula",
        content:
          "Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy",
        labels: ["yellow"],
        user: "https://api.adorable.io/avatars/40/d.png",
      },
      {
        id: 3,
        task: "Aula",
        content: "Estudar módulo 03 de React Native",
        labels: ["green"],
        user: "https://api.adorable.io/avatars/40/c.png",
      },
      {
        id: 4,
        task: "Aula",
        content:
          'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
        labels: ["green"],
        user: "https://api.adorable.io/avatars/40/b.png",
      },
      {
        id: 5,
        task: "Aula",
        content: "Gravar testes e deploy ReactJS",
        labels: ["yellow"],
        user: "https://api.adorable.io/avatars/40/a.png",
      },
    ],
  },
  {
    id: "jfie8348347",
    title: "Doing",
    creatable: false,
    done: false,
    cards: [
      {
        id: 6,
        task: "Aula",
        content: "Recriando clone do Pipefy",
        labels: ["orange", "teal", "blue"],
        user: "https://api.adorable.io/avatars/40/l.png",
      },
    ],
  },
  {
    id: "jfi938433777",
    title: "Paused",
    creatable: false,
    done: false,
    cards: [
      {
        id: 7,
        task: "Aula",
        content: "Gravar sobre Geolocalização e mapas com React Native",
        labels: ["red"],
        user: "https://api.adorable.io/avatars/40/laf.png",
      },
      {
        id: 8,
        task: "Aula",
        content: "Gravar testes e deploy ReactJS",
        labels: ["green"],
        user: "https://api.adorable.io/avatars/40/g.png",
      },
      {
        id: 9,
        task: "Aula",
        content: "Ajustes na biblioteca unform",
        labels: [],
      },
    ],
  },
  {
    id: "jfiff0288347",
    title: "Finished",
    creatable: false,
    done: false,
    cards: [
      {
        id: 10,
        task: "Aula",
        content: "Gravar aula sobre deploy e CI com React Native",
        labels: [],
      },
      {
        id: 12,
        task: "Aula",
        content: "Gravar testes e deploy ReactJS",
        labels: ["red"],
      },
      {
        id: 13,
        task: "Aula",
        content:
          'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
        labels: ["green"],
      },
    ],
  },
];

export function loadLists() {
  return board;
}

export function addList(list) {
  return board;
}

export function deleteList(list) {
  return board;
}

export function addCard(list) {
  return board;
}

export function deleteCard(list) {
  return board;
}
