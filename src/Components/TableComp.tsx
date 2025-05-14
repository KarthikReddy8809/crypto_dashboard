
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export const TableComp = () => {
    return(
      <div className='flex flex-col items-center text-white bg-violet-950 border border-white rounded-md'>
        <Table className='w-[600px]'>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className=" text-white">S.No</TableHead>
      <TableHead className="text-white">Coins</TableHead>
      <TableHead className="text-white">Price</TableHead>
      <TableHead className="text-right text-white">24H Change</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
    )
}