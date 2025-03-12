import { ref } from "vue";

interface Notification {
  id: number;
  text: string | (() => VNode);
}

const notifications = ref<Notification[]>([]);
let nextId = 0;

export const useNotification = () => {
  const addNotification = (text: string | (() => any)) => {
    const id = nextId++;
    notifications.value.push({ id, text });

    setTimeout(() => {
      removeNotification(id);
    }, 3000);
  };

  const removeNotification = (id: number) => {
    const index = notifications.value.findIndex((n) => n.id === id);
    if (index !== -1) {
      notifications.value.splice(index, 1);
    }
  };

  return {
    notifications,
    addNotification,
    removeNotification,
  };
};
