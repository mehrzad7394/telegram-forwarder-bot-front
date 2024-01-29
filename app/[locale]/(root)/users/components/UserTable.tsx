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
import { cookies } from "next/headers";
import { baseURL } from "@/utils/constants";
import axios from "axios";
import { revalidatePath } from "next/cache";
import toast from "react-hot-toast";
import { handleClickDelete } from "@/lib/actions";
import { getCookie } from "@/utils/constants";
type propTypes = {
  columns: Array<{ name: string; title: string }>;
  data: Array<{
    _id: string;
    name: string;
    lastname: string;
    username: string;
    userID: string;
    isAdmin: boolean;
  }>;
};

const UserTable = ({ columns, data }: propTypes) => {
  console.log(data);
  const handleClickDelete = async (id: string) => {
    console.log(id);
    let config = {
      method: "delete",
      url: `${baseURL}user/${id}`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: getCookie("jwt") as string,
      },
    };
    await axios
      .request(config)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          revalidatePath("/user");
        }
      })
      .catch((error: any) => {
        if (error?.response?.data?.error) {
          toast.error(error?.response.data.error);
        } else {
          toast.error(error?.message);
        }
      });
  };
  return (
    <Table aria-label="Example static collection table" fullWidth>
      <TableHeader>
        {columns?.map(({ name, title }, i) => (
          <TableColumn className="text-center" key={i}>
            {title}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {data?.map((user, i) => (
          <TableRow key={i}>
            <TableCell className="text-center">{user?.name}</TableCell>
            <TableCell className="text-center">{user?.lastname}</TableCell>
            <TableCell className="text-center">{user?.username}</TableCell>
            <TableCell className="text-center">{user?.userID}</TableCell>
            <TableCell className="text-center">
              {user?.isAdmin ? "Admin" : "User"}
            </TableCell>
            <TableCell className="text-center flex justify-center items-center gap-5">
              <span className="text-lg text-orange-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>

              <span
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={() => handleClickDelete(user._id)}
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

export default UserTable;
