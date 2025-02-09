import { Card, CardBody, Avatar, Image } from "@heroui/react";

export default function Chat({ content, own, type, name }) {
  return (
    <Card className={`w-fit bg-transparent ${own && "ml-auto bg-blue-200"}`}>
      <CardBody className="flex flex-row gap-2 items-center">
        {!own && <Avatar name={name} />}

        {/* Text Message */}
        {type === "text" && <p>{content}</p>}

        {/* Link Message */}
        {type === "link" && (
          <p className="underline">
            <a href={content} target="_blank">
              {content}
            </a>
          </p>
        )}

        {/* Image Message */}
        {type === "image" && (
          <Image alt="image message" src={content} width={400} />
        )}
      </CardBody>
    </Card>
  );
}