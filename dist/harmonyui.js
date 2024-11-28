import { openBlock as s, createElementBlock as l, normalizeClass as _, renderSlot as c } from "vue";
const d = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [a, r] of n)
    e[a] = r;
  return e;
}, u = {
  name: "HarmonyButton",
  props: {
    size: {
      type: String,
      default: "medium",
      validator: (t) => ["small", "medium", "large"].includes(t)
    },
    variant: {
      type: String,
      default: "primary",
      validator: (t) => ["primary", "secondary", "danger"].includes(t)
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
function m(t, n, e, a, r, o) {
  return s(), l("button", {
    class: _(["harmony-button", e.size, e.variant]),
    onClick: n[0] || (n[0] = (...i) => o.handleClick && o.handleClick(...i))
  }, [
    c(t.$slots, "default")
  ], 2);
}
const $ = /* @__PURE__ */ d(u, [["render", m]]);
const p = {
  name: "HarmonyCard"
}, y = { class: "harmony-card" };
function f(t, n, e, a, r, o) {
  return s(), l("div", y, [
    c(t.$slots, "default")
  ]);
}
const h = /* @__PURE__ */ d(p, [["render", f]]);
export {
  $ as Button,
  h as Card
};
