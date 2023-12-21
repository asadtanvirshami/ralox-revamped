import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";

const InfoCard = ({animation}) => {
  return (
    <Card
    data-aos={animation}
    className="max-w-[340px] min-h-[250px]"
  >
    <CardHeader className="justify-between">
      <div className="flex gap-5">
        <Avatar
          isBordered
          radius="full"
          size="md"
          src="/avatars/avatar-1.png"
        />
        <div className="flex flex-col gap-1 items-start justify-center">
          <h4 className="text-small font-semibold leading-none text-default-600">
            Zoey Lang
          </h4>
          <h5 className="text-small tracking-tight text-default-400">
            @zoeylang
          </h5>
        </div>
      </div>
      <Button
        className={"bg-transparent text-foreground border-default-200"}
        color="primary"
        radius="full"
        size="sm"
      ></Button>
    </CardHeader>
    <CardBody className="px-3 py-0 text-small text-default-400">
      <p>
        Frontend developer and UI/UX enthusiast. Join me on this coding
        adventure!
      </p>
      <span className="pt-2">
        #FrontendWithZoey
        <span className="py-2" aria-label="computer" role="img">
          💻
        </span>
      </span>
    </CardBody>
  </Card>
  )
}

export default InfoCard
