
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/TodoList.vue") },
      { path: "/about", component: () => import("src/pages/AboutUs.vue") },
      { path: "/contacts", component: () => import("src/pages/ContactsList.vue") },
      { path: "/help", component: () => import("src/pages/HelpList.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes
