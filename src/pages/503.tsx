import ErrorPage from "@/components/ErrorPage";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => {
      return <ErrorPage code={503} desc={"马上回来"} />;
    };
  }
});
