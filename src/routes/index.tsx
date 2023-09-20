import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useAuthSession, useAuthSignin, useAuthSignout } from '~/routes/plugin@auth';

export default component$(() => {
  const session = useAuthSession();
  
  return (
    <>
    <div>Email: {session.value?.user?.email}</div>
    </>
  );
});

export const head: DocumentHead = {
  title: "first qwik app",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
