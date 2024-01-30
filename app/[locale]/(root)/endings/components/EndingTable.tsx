"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { DeleteIcon } from "@/components/icons/DeleteIcon";
import { EditIcon } from "@/components/icons/EditIcon";
import { deleteEndByID } from "@/lib/actions";
type propTypes = {
  columns: Array<{ name: string; title: string }>;
  data: Array<{
    _id: string;
    value: string;
  }>;
};

const EndingTable = ({ columns, data }: propTypes) => {
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
        {data?.map((user, i) => (
          <TableRow key={i}>
            <TableCell className="text-center">{user?.value}</TableCell>
            <TableCell className="text-center flex justify-center items-center gap-5">
              <span className="text-lg text-orange-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>

              <span
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={() => deleteEndByID(user._id)}
              >
                <DeleteIcon />
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EndingTable;
