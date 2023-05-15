import { writable } from 'svelte/store';

const initialData = [
  {
    id: 1,
    title: 'Home',
    icon: '../images/icons/sys-icon.png',
    alt: 'home icon',
    content: '<b>bold</b>'
  },
  {
    id: 2,
    title: 'Foundry',
    icon: '../images/icons/dnd-icon.png',
    alt: 'a wizard did it',
    content: 'wizzard'
  },
  {
    id: 3,
    title: 'Profile',
    icon: '../images/icons/make-icon.png',
    alt: 'profile error',
    content: 'err'
  },
  {
    id: 4,
    title: 'Games',
    icon: '../images/icons/woh-icon.png',
    alt: 'games error',
    content: 'err'
  },
  {
    id: 5,
    title: 'Todo',
    icon: '../images/icons/notes-icon.png',
    alt: 'Todo List',
    content: 'todo stuff'
  },
  {
    id: 6,
    title: 'Void',
    icon: '../images/icons/afterdark-icon.png',
    alt: 'v o i d',
    content: 'vvvv'
  },
];

// Create a new writable store to hold the article data
export const appData = writable(initialData);
export const appContent = writable({});