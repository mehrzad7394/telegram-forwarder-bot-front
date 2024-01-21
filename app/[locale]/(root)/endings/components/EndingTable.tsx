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
    title: "Tony Reichert",
  },
  {
    id: 2,
    title: "Zoey Lang",
  },
];
const EndingTable = () => {
  const t = useTranslations("endings");
  const columns = [
    { name: "TEXT", title: t("text") },
    { name: "ACTIONS", title: t("actions") },
  ];

  return (
    <Table aria-label="Example static collection table">
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
            <TableCell className="text-center">{user?.title}</TableCell>
            <TableCell className="text-center flex justify-center items-center gap-5">
              <Tooltip color="danger" content={t("edit")}>
                <span className="text-lg text-orange-400 cursor-pointer active:opacity-50">
                  <EditIcon />
                </span>
              </Tooltip>
              <Tooltip color="danger" content={t("delete")}>
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

export default EndingTable;
