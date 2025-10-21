import {DataTableDemo} from "@/components/TableData/data-table";
import {getPosts} from "@/lib/placeholder-data";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";

// export const tableData: Payment[] = [
//     {
//         id: "m5gr84i9",
//         amount: 316,
//         status: "success",
//         email: "ken99@example.com",
//     },
//     {
//         id: "3u1reuv4",
//         amount: 242,
//         status: "success",
//         email: "Abe45@example.com",
//     },
//     {
//         id: "derv1ws0",
//         amount: 837,
//         status: "processing",
//         email: "Monserrat44@example.com",
//     },
//     {
//         id: "5kma53ae",
//         amount: 874,
//         status: "success",
//         email: "Silas22@example.com",
//     },
//     {
//         id: "bhqecj4p",
//         amount: 721,
//         status: "failed",
//         email: "carmella@example.com",
//     },
// ]
// async function getData(): Promise<Payment[]> {
//     // Fetch data from your API here.
//     return [
//         {
//             id: "728ed52f",
//             amount: 100,
//             status: "pending",
//             email: "m@example.com",
//         },
//         // ...
//     ]
// }

async function Home() {
    // const tableData = await getPosts()
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
    });

    return (
        <main className="container bg-violet-200 mx-auto py-10">
            <HydrationBoundary state={dehydrate(queryClient)}>
                <DataTableDemo/>
            </HydrationBoundary>
        </main>
    )
}

export default Home
