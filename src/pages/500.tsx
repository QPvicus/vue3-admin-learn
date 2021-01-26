import ErrorPage from "@/components/ErrorPage";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => {
      return <ErrorPage code={500} desc={"糟糕,出了点问题"} />;
    };
  }
});
