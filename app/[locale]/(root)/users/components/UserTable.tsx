"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { DeleteIcon } from "@/components/icons/DeleteIcon";
import { EditIcon } from "@/components/icons/EditIcon";
const users = [
  {
    id: 1,
    name: "Tony Reichert",
    lastname: "Management",
    username: "tony.reichert@example.com",
    userId: "222",
    role: "CEO",
  },
  {
    id: 2,
    name: "Zoey Lang",
    lastname: "Development",
    username: "zoey.lang@example.com",
    userId: "222",
    role: "Technical Lead",
  },
  {
    id: 3,
    name: "Jane Fisher",
    lastname: "Development",
    username: "jane.fisher@example.com",
    userId: "222",
    role: "Senior Developer",
  },
  {
    id: 4,
    name: "William Howard",
    lastname: "Marketing",
    username: "william.howard@example.com",
    userId: "222",
    role: "Community Manager",
  },
  {
    id: 5,
    name: "Kristen Copper",
    lastname: "Sales",
    username: "kristen.cooper@example.com",
    userId: "222",
    role: "Sales Manager",
  },
];
const UserTable = () => {
  const t = useTranslations("users");
  const columns = [
    { name: "NAME", title: t("name") },
    { name: "LASTNAME", title: t("lastname") },
    { name: "USERNAME", title: t("username") },
    { name: "USERID", title: t("ID") },
    { name: "ROLE", title: t("role") },
    { name: "ACTIONS", title: t("actions") },
  ];

  return (
    <Table aria-label="Example static collection table" fullWidth>
      <TableHeader>
        {columns?.map(({ name, title }) => (
          <TableColumn className="text-center" key={name}>
            {title}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {users?.map((user, i) => (
          <TableRow key={user?.id}>
            <TableCell className="text-center">{user?.name}</TableCell>
            <TableCell className="text-center">{user?.lastname}</TableCell>
            <TableCell className="text-center">{user?.username}</TableCell>
            <TableCell className="text-center">{user?.userId}</TableCell>
            <TableCell className="text-center">{user?.role}</TableCell>
            <TableCell className="text-center flex justify-center items-center gap-5">
              <Tooltip color="danger" content={t("edit-user")}>
                <span className="text-lg text-orange-400 cursor-pointer active:opacity-50">
                  <EditIcon />
                </span>
              </Tooltip>
              <Tooltip color="danger" content={t("delete-user")}>
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <DeleteIcon />
                </span>
              </Tooltip>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
