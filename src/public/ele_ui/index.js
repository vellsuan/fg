import {
  Button,
  Select,
  Option,
  Row,
  Col,
  Input,
  Container,
  Main,
  Form,
  FormItem,
  Checkbox,
  Radio,
  Dialog,
  DatePicker,
  Table,
  TableColumn,
  Pagination,
  Tabs,
  TabPane,
  Scrollbar,
  Breadcrumb,
  BreadcrumbItem,
  Message
} from "element-ui";

export const EleUI = (Vue) => {
  Vue.use(Button);
  Vue.use(Select);
  Vue.use(Option);
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(Input);
  Vue.use(Container);
  Vue.use(Main);
  Vue.use(Form);
  Vue.use(FormItem);
  Vue.use(Checkbox);
  Vue.use(Radio);
  Vue.use(Dialog);
  Vue.use(DatePicker);
  Vue.use(Table);
  Vue.use(TableColumn);
  Vue.use(Pagination);
  Vue.use(Tabs);
  Vue.use(TabPane);
  Vue.use(Scrollbar);
  Vue.use(Breadcrumb);
  Vue.use(BreadcrumbItem);
  Vue.prototype.$message = Message;
}
