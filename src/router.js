import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Users from "./views/Users";
import Register from "./views/Register";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/meld-opp",
      name: "register",
      component: Register,
    },
    {
      path: "/brukere",
      name: "users",
      component: Users,
      // code splitting
      // component: () =>
      //   import(/* webpackChunkName: "users" */ "./views/Users.vue"),
    },
    {
      path: "/brukere/:id",
      name: "User",
      component: () =>
        import(/* webpackChunkName: "users" */ "./views/User.vue"),
    },
  ],
});

/**
 * vue component properties 
 * 
 * components -- object
 * props -- 
 * data -- must be a component 
 * 
 *  data?: Data;
  props?: PropsDef;
  propsData?: object;
  computed?: Accessors<Computed>;
  methods?: Methods;
  watch?: Record<string, WatchOptionsWithHandler<any> | WatchHandler<any> | string>;

  el?: Element | string;
  template?: string;
  // hack is for functional component type inference, should not be used in user code
  render?(createElement: CreateElement, hack: RenderContext<Props>): VNode;
  renderError?(createElement: CreateElement, err: Error): VNode;
  staticRenderFns?: ((createElement: CreateElement) => VNode)[];

  beforeCreate?(this: V): void;
  created?(): void;
  beforeDestroy?(): void;
  destroyed?(): void;
  beforeMount?(): void;
  mounted?(): void;
  beforeUpdate?(): void;
  updated?(): void;
  activated?(): void;
  deactivated?(): void;
  errorCaptured?(err: Error, vm: Vue, info: string): boolean | void;
  serverPrefetch?(this: V): Promise<void>;

  directives?: { [key: string]: DirectiveFunction | DirectiveOptions };
  components?: { [key: string]: Component<any, any, any, any> | AsyncComponent<any, any, any, any> };
  transitions?: { [key: string]: object };
  filters?: { [key: string]: Function };

  provide?: object | (() => object);
  inject?: InjectOptions;

  model?: {
    prop?: string;
    event?: string;
  };

  parent?: Vue;
  mixins?: (ComponentOptions<Vue> | typeof Vue)[];
  name?: string;
  // TODO: support properly inferred 'extends'
  extends?: ComponentOptions<Vue> | typeof Vue;
  delimiters?: [string, string];
  comments?: boolean;
  inheritAttrs?: boolean;
 */
