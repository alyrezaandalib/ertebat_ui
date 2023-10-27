import { Card, Typography } from "@material-tailwind/react";
import { plan_Items } from "@/json/planItems";

const TABLE_HEAD = ["", "پایه", "حرفه ای", "سازمانی"];
const planItems = plan_Items;
export default function ComparisonTable() {
  return (
    <Card className="h-[500px] w-full lg:w-[83%] mb-10 lg:h-full mx-auto">
      <table className="w-full min-w-max table-auto text-left rounded-xl">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b-2 border-blue-gray-200 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70 text-center"
                  style={{ fontWeight: 600 }}
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planItems.map(({ name, pro, basic, enterprise }, index) => (
            <tr key={name} className="odd:bg-blue-gray-50 text-center">
              <td className="p-2 border-l border-blue-gray-100">
                <Typography
                  variant="small"
                  className="text-xs"
                  style={{ fontWeight: 500 }}
                >
                  {name}
                </Typography>
              </td>
              <td className="p-2 border-l border-blue-gray-100">
                <Typography variant="small" className="font-normal">
                  {basic}
                </Typography>
              </td>
              <td className="p-2 border-l border-blue-gray-100">
                <Typography variant="small" className="font-normal">
                  {pro}
                </Typography>
              </td>
              <td className="p-2">
                <Typography variant="small" className="font-medium">
                  {enterprise}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
