import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import "./index.scss";
export default defineComponent({
  props: {
    code: Number,
    desc: String
  },
  setup(props, ctx) {
    const router = useRouter();
    const navTo = () => {
      router.push("");
    };
    const homeTo = () => {
      router.push("/");
    };
    return () => {
      return (
        <div class="error-page">
          <h1 class="code">{props.code}</h1>
          <p class="desc">{props.desc}</p>
          <div class="router">
            <el-button size="medium" round onClick={navTo}>
              跳转
            </el-button>
          </div>
          <div class="link">
            <el-link>回到首页</el-link>
            <el-link>返回上一页</el-link>
            <el-link>重新登录</el-link>
          </div>
          <p class="copyright">Copyright &:copy vue3-element-admin 2020</p>
        </div>
      );
    };
  }
});
