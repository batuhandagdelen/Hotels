import React, { type FC } from "react";
import { useDeletePlace } from "../../services/hooks";

interface Props {
  id: string;
}

const DeleteButton: FC<Props> = ({ id }) => {
  const { mutate, isPending } = useDeletePlace();

  const handleDelete = (id: string) => {
    if (!confirm("Silmek istediğinize emin misiniz?")) return null;

    mutate(id);
  };

  return (
    <div className="flex justify-end my-10">
      <button
        onClick={() => handleDelete(id)}
        disabled={isPending}
        className="border border-red-500 text-red-500 py-1 px-4 rounded-md transition hover:bg-red-100 "
      >
        {isPending ? "Siliniyor" : "Sil"}
      </button>
    </div>
  );
};

export default DeleteButton;
