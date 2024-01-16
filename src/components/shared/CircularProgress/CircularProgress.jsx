import React, { memo } from "react";
import {
  CircularProgress,
  Card,
  CardBody,
  CardFooter,
  Chip,
} from "@nextui-org/react";

const Progress = ({ title, percentage }) => {
  return (
    <Card className="lg:-w-full  xl:w-full h-[260px] border-none bg-gradient-to-br from-indigo-300 to-indigo-600">
      <CardBody className="justify-center items-center pb-0">
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
          }}
          value={percentage}
          strokeWidth={4}
          showValueLabel={true}
        />
      </CardBody>
      <CardFooter className="justify-center items-center pt-0">
        <Chip
          classNames={{
            base: "border-1 border-white/30",
            content: "text-white/90 text-small font-semibold",
          }}
          variant="bordered"
        >
          {title}
        </Chip>
      </CardFooter>
    </Card>
  );
};

export default memo(Progress);
