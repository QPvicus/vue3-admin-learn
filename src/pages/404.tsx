import ErrorPage from "@/components/ErrorPage";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => {
      return <ErrorPage code={404} desc={"找不到你要查找的页面"} />;
    };
  }
});
