import {Button} from "@/components/ui/button"
import {ArrowUpDown} from "lucide-react"

import type {ColumnDef} from "@tanstack/react-table"

export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

const MiniAppCol: ColumnDef<Payment>[] = [
    {
        accessorKey: "id",
        header: "id",
        cell: ({row}) => (
            <div className="capitalize max-w-28">{row.getValue("id")}</div>
        ),
    },
    {
        accessorKey: "amount",
        header: "amount",
        cell: ({row}) => (
            <div className="capitalize max-w-52">{row.getValue("amount")}</div>
        ),
    },
    {
        accessorKey: "status",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Id
                    <ArrowUpDown/>
                </Button>
            )
        },
        cell: ({row}) => <div className="lowercase pr-3">{row.getValue("id")}</div>,
    },
]

export default MiniAppCol