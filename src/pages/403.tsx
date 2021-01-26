import ErrorPage from "@/components/ErrorPage";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => {
      return <ErrorPage code={403} desc={"你无权访问此页面"} />;
    };
  }
});
