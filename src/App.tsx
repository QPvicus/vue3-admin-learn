import { defineComponent } from "vue";
import ErrorPage from "./components/ErrorPage";

export default defineComponent({
  setup() {
    return () => {
      return (
        <div id="app">
          <ErrorPage code={404} desc={"dsfasdf"} />
          <router-view />
        </div>
      );
    };
  }
});
