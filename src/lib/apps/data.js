import { writable } from 'svelte/store';

const initialData = [
  {
    id: 1,
    title: 'Home',
    icon: '../images/icons/sys-icon.png',
    alt: ''
  },
  {
    id: 2,
    title: 'Foundry',
    icon: '../images/icons/dnd-icon.png',
    alt: 'a wizard did it'
  },
  {
    id: 3,
    title: 'Profile',
    icon: '../images/icons/make-icon.png',
    alt: 'profile error'
  },
  {
    id: 4,
    title: 'Games',
    icon: '../images/icons/woh-icon.png',
    alt: 'games error'
  },
  {
    id: 5,
    title: 'Todo',
    icon: '../images/icons/notes-icon.png',
    alt: 'Todo List'
  },
  {
    id: 6,
    title: 'Void',
    icon: '../images/icons/afterdark-icon.png',
    alt: 'v o i d'
  },
];

// Create a new writable store to hold the article data
export const appData = writable(initialData);