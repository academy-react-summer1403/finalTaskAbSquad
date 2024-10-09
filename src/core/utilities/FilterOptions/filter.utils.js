import { MdOutlineHive } from "react-icons/md";
import { GetLevel } from "../../Services/Api/GetFilterProperties/GetLevel.api";

export const FilterOptions = [
  {
    id: 1,
    filterTitle: "دسته بندی",
    icon: MdOutlineHive,
    label: [{ name: "فرانت اند" }, { name: "بک اند" }, { name: "Next JS" }],
  },
  {
    id: 2,
    filterTitle: "سطح آموزشی",
    label: [{ name: "مبتدی" }, { name: "متوسط" }, { name: "پیشرفته" }],
  },
  {
    id: 3,
    filterTitle: "اساتید",
    label: [{ name: "مبتدی" }, { name: "متوسط" }, { name: "پیشرفته" }],
  },
];
