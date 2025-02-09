import { Card, CardBody, Avatar, Image } from "@heroui/react";

export default function Chat({ content, own, type, name }) {
  return (
    <Card className={`w-fit bg-transparent ${own && "ml-auto bg-blue-200"}`}>
      <CardBody className="flex">
        {!own && <Avatar name={name} />}
        {type === "text" ? (
          <p>{content}</p>
        ) : (
          <Image alt="image message" src={content} width={400} />
        )}
      </CardBody>
    </Card>
  );
}